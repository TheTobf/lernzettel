import { useEffect, useMemo } from 'react'
import { schliesseBegriff, useBegriffAnzeige } from '../begriffAnzeige'
import { fachById } from '../faecher'
import { rendere } from '../markdown'
import { pfad } from '../router'
import Markdown from './Markdown'

/** Fenster von unten mit der Erklärung eines Fachbegriffs */
export default function BegriffFenster() {
  const anzeige = useBegriffAnzeige()

  useEffect(() => {
    if (!anzeige) return
    const taste = (e: KeyboardEvent) => e.key === 'Escape' && schliesseBegriff()
    const alt = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', taste)
    return () => {
      document.body.style.overflow = alt
      window.removeEventListener('keydown', taste)
    }
  }, [anzeige])

  // Beim Seitenwechsel schließen
  useEffect(() => {
    window.addEventListener('hashchange', schliesseBegriff)
    return () => window.removeEventListener('hashchange', schliesseBegriff)
  }, [])

  const html = useMemo(() => (anzeige ? rendere(anzeige.begriff.erklaerung).html : ''), [anzeige])
  if (!anzeige) return null
  const { begriff, liste } = anzeige
  const fach = fachById(begriff.fach)

  return (
    <div className="fixed inset-0 z-50" style={{ '--fach': fach?.farbe } as React.CSSProperties} role="dialog" aria-modal="true" aria-label={begriff.begriff}>
      <button type="button" className="ausblenden absolute inset-0 bg-black/40" onClick={schliesseBegriff} aria-label="Schließen" />
      <div className="hochfahren sicher-unten absolute inset-x-0 bottom-0 mx-auto max-h-[78vh] max-w-2xl overflow-y-auto rounded-t-3xl bg-karte px-5 pt-3 shadow-2xl dark:bg-nacht-2">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-stone-300 dark:bg-stone-600" />
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold tracking-wide text-stone-500 uppercase">
              {fach?.icon} Fachbegriff · {fach?.kurz}
            </div>
            <h2 className="mt-0.5 text-2xl leading-tight font-extrabold">{begriff.begriff}</h2>
            {begriff.formen.length > 0 && <div className="mt-0.5 text-sm text-stone-500">auch: {begriff.formen.join(', ')}</div>}
          </div>
          <button type="button" onClick={schliesseBegriff} className="knopf size-10 shrink-0 bg-stone-100 px-0 text-lg dark:bg-nacht-3" aria-label="Schließen">
            ✕
          </button>
        </div>
        <div className="mt-3">
          <Markdown key={begriff.id} html={html} begriffe={liste} ausser={begriff.id} />
        </div>
        {begriff.quelle && <p className="mt-3 text-xs text-stone-500">Definition aus dem Lernzettel „{begriff.quelle}“</p>}
        <div className="mt-4 mb-2 flex gap-2">
          <a href={pfad.begriffe(begriff.fach)} className="knopf karte flex-1 text-sm">
            📖 Alle Fachbegriffe
          </a>
          <button type="button" onClick={schliesseBegriff} className="knopf flex-1 bg-(--fach) text-sm text-white">
            Verstanden
          </button>
        </div>
      </div>
    </div>
  )
}
