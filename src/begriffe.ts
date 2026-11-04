import { calloutBloecke, slug } from './markdown'
import { leseKopf, type Zettel } from './zettel'

/**
 * Fachbegriffe: stehen pro Fach in inhalte/<fach>/_begriffe.md und werden in den Lernzetteln automatisch
 * unterstrichen. Antippen zeigt die Erklärung. Zusätzlich wird jeder „> [!DEFINITION] Begriff“-Kasten aus den
 * Lernzetteln des Fachs zum Fachbegriff (falls er nicht schon in _begriffe.md steht).
 *
 * Format von _begriffe.md:
 *
 *   ## Ableitung
 *   auch: Ableitungen, Ableitungsfunktion
 *   Einfache Erklärung in Markdown (Formeln erlaubt) …
 */
export interface Begriff {
  id: string
  fach: string
  begriff: string
  /** weitere Schreibweisen (Plural mit Umlaut, Synonyme, Abkürzungen) */
  formen: string[]
  erklaerung: string
  /** Lernzettel, aus dem die Definition stammt (sonst Wörterbuch) */
  quelle?: string
}

const AUCH = /^\s*(auch|formen|synonyme?)\s*:\s*(.*)$/i

export function leseBegriffe(md: string, fach: string): { begriffe: Begriff[]; fehler: string[] } {
  const { inhalt } = leseKopf(md)
  const begriffe: Begriff[] = []
  const fehler: string[] = []
  const teile = inhalt.split(/^##[ \t]+(.+)$/m)
  // teile = [Vorspann, Titel1, Text1, Titel2, Text2, …]
  for (let i = 1; i < teile.length; i += 2) {
    const begriff = teile[i].trim()
    const zeilen = teile[i + 1].replace(/^\n+/, '').split('\n')
    let formen: string[] = []
    const m = AUCH.exec(zeilen[0] ?? '')
    if (m) {
      formen = m[2]
        .split(',')
        .map((f) => f.trim())
        .filter(Boolean)
      zeilen.shift()
    }
    const erklaerung = zeilen.join('\n').trim()
    if (!erklaerung) fehler.push(`„${begriff}“: Erklärung fehlt`)
    begriffe.push({ id: slug(begriff), fach, begriff, formen, erklaerung })
  }
  const gesehen = new Map<string, string>()
  for (const b of begriffe) {
    for (const f of [b.begriff, ...b.formen]) {
      const alt = gesehen.get(f)
      if (alt && alt !== b.id) fehler.push(`„${f}“ kommt bei mehreren Begriffen vor`)
      gesehen.set(f, b.id)
    }
  }
  if (new Set(begriffe.map((b) => b.id)).size !== begriffe.length) fehler.push('Begriff doppelt')
  return { begriffe, fehler }
}

/** Markdown-Zeichen aus einem Kasten-Titel entfernen: „**Bilanz** (§ 242 HGB)“ → „Bilanz“ */
function begriffAusTitel(titel: string): string {
  return titel
    .replace(/[*_`]/g, '')
    .replace(/\s*[(:–-].*$/, '')
    .trim()
}

/** Wörterbuch eines Fachs + Definitionen aus seinen Lernzetteln, alphabetisch */
export function sammleBegriffe(woerterbuch: Begriff[], zettel: Zettel[], fach: string): Begriff[] {
  const alle = [...woerterbuch]
  const vorhanden = new Set(alle.flatMap((b) => [b.begriff, ...b.formen].map((f) => f.toLowerCase())))
  for (const z of zettel) {
    if (z.fach !== fach) continue
    for (const d of calloutBloecke(z.inhalt, 'DEFINITION')) {
      const begriff = begriffAusTitel(d.titel)
      if (begriff.length < 2 || vorhanden.has(begriff.toLowerCase()) || !d.koerper.trim()) continue
      vorhanden.add(begriff.toLowerCase())
      alle.push({ id: slug(begriff), fach, begriff, formen: [], erklaerung: d.koerper.trim(), quelle: z.titel })
    }
  }
  return alle.sort((a, b) => a.begriff.localeCompare(b.begriff, 'de', { sensitivity: 'base' }))
}

// ---------- Begriffe im HTML markieren ----------

const UEBERSPRINGEN = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'a', 'summary', 'button', 'math', 'svg', 'script', 'style', 'textarea'])
const LEER = new Set(['br', 'hr', 'img', 'input', 'wbr', 'col', 'area', 'meta', 'link', 'source', 'path', 'line'])
const ABSATZ = new Set(['p', 'li', 'td', 'th', 'dd', 'dt', 'div', 'blockquote'])
const KLASSE_UEBERSPRINGEN = /class="[^"]*\b(katex|callout-titel|begriff)\b/

interface Muster {
  regex: RegExp
  zuId: Map<string, string>
}

const musterCache = new WeakMap<Begriff[], Muster | null>()

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function baueMuster(liste: Begriff[]): Muster | null {
  if (musterCache.has(liste)) return musterCache.get(liste)!
  const zuId = new Map<string, string>()
  for (const b of liste) for (const f of [b.begriff, ...b.formen]) if (f.length >= 2 && !zuId.has(f)) zuId.set(f, b.id)
  let muster: Muster | null = null
  if (zuId.size) {
    const formen = [...zuId.keys()].sort((a, b) => b.length - a.length).map(escapeRegex)
    // ganzes Wort (auch mit Umlauten), Groß-/Kleinschreibung genau, dazu übliche Endungen (Ableitung → Ableitungen)
    muster = { regex: new RegExp(`(?<![\\p{L}\\p{N}])(${formen.join('|')})(?:e|en|n|s|es)?(?![\\p{L}\\p{N}])`, 'gu'), zuId }
  }
  musterCache.set(liste, muster)
  return muster
}

/**
 * Fachbegriffe im gerenderten HTML unterstreichen (pro Absatz jeweils das erste Vorkommen).
 * Überschriften, Formeln, Links, Code und Kasten-Titel bleiben unverändert.
 */
export function markiereBegriffe(html: string, liste: Begriff[], ausser?: string): string {
  const muster = baueMuster(liste)
  if (!muster) return html
  const stapel: boolean[] = []
  let sperre = 0
  let gesehen = new Set<string>()
  let aus = ''
  for (const teil of html.split(/(<[^>]*>)/)) {
    if (!teil) continue
    if (teil.startsWith('<')) {
      aus += teil
      const m = /^<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>$/.exec(teil)
      if (!m) continue // Kommentar o. Ä.
      const [, zu, name, attr, selbst] = m
      const tag = name.toLowerCase()
      if (zu) {
        if (stapel.length) sperre -= stapel.pop() ? 1 : 0
      } else if (!selbst && !LEER.has(tag)) {
        const ueber = UEBERSPRINGEN.has(tag) || KLASSE_UEBERSPRINGEN.test(attr)
        stapel.push(ueber)
        if (ueber) sperre++
        if (ABSATZ.has(tag)) gesehen = new Set()
      }
      continue
    }
    if (sperre > 0) {
      aus += teil
      continue
    }
    aus += teil.replace(muster.regex, (treffer: string, form: string) => {
      const id = muster.zuId.get(form)
      if (!id || id === ausser || gesehen.has(id)) return treffer
      gesehen.add(id)
      return `<span class="begriff" data-begriff="${id}" role="button" tabindex="0">${treffer}</span>`
    })
  }
  return aus
}
