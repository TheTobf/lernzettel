import { describe, expect, it } from 'vitest'
import { leseBegriffe, markiereBegriffe, sammleBegriffe, type Begriff } from './begriffe'
import { rendere } from './markdown'
import type { Zettel } from './zettel'

const woerterbuch = `---
titel: Test
---

Vorspann wird ignoriert.

## Ableitung
auch: Ableitungen, Ableitungsfunktion
Steigung an jeder Stelle, z. B. $f'(x) = 2x$.

## Funktion
Ordnet jedem $x$ genau ein $y$ zu.

## Soll
Linke Kontoseite.
`

const liste = leseBegriffe(woerterbuch, 'mathe').begriffe

function markiert(md: string, l: Begriff[] = liste, ausser?: string) {
  return markiereBegriffe(rendere(md).html, l, ausser)
}

describe('Wörterbuch lesen', () => {
  it('liest Begriffe, weitere Formen und Erklärung', () => {
    const { begriffe, fehler } = leseBegriffe(woerterbuch, 'mathe')
    expect(fehler).toEqual([])
    expect(begriffe.map((b) => [b.id, b.begriff, b.formen])).toEqual([
      ['ableitung', 'Ableitung', ['Ableitungen', 'Ableitungsfunktion']],
      ['funktion', 'Funktion', []],
      ['soll', 'Soll', []],
    ])
    expect(begriffe[0].erklaerung).toBe("Steigung an jeder Stelle, z. B. $f'(x) = 2x$.")
  })

  it('meldet fehlende Erklärungen und doppelte Formen', () => {
    const { fehler } = leseBegriffe('## A\n\n## B\nauch: X\nText\n\n## C\nauch: X\nText', 'mathe')
    expect(fehler).toEqual(['„A“: Erklärung fehlt', '„X“ kommt bei mehreren Begriffen vor'])
  })

  it('übernimmt [!DEFINITION]-Kästen aus Lernzetteln, das Wörterbuch hat Vorrang', () => {
    const zettel = {
      id: 'mathe/x',
      fach: 'mathe',
      typ: 'uebung',
      titel: 'Übung 1',
      inhalt: '> [!DEFINITION] **Nullstelle** (Schnitt mit der x-Achse)\n> Stelle mit $f(x) = 0$.\n\n> [!DEFINITION] Funktion\n> Andere Erklärung',
      lokal: false,
    } as Zettel
    const alle = sammleBegriffe(liste, [zettel], 'mathe')
    expect(alle.map((b) => b.begriff)).toEqual(['Ableitung', 'Funktion', 'Nullstelle', 'Soll'])
    const n = alle.find((b) => b.id === 'nullstelle')!
    expect(n.erklaerung).toBe('Stelle mit $f(x) = 0$.')
    expect(n.quelle).toBe('Übung 1')
    expect(alle.find((b) => b.id === 'funktion')!.erklaerung).toContain('genau ein')
    expect(sammleBegriffe(liste, [zettel], 'externes-rechnungswesen')).toHaveLength(3)
  })
})

describe('Begriffe im Text markieren', () => {
  it('markiert ganze Wörter samt Endung, pro Absatz nur das erste Vorkommen', () => {
    const html = markiert('Die Ableitungen einer Funktion. Noch eine Funktion.\n\nWieder Funktion.')
    expect(html).toBe(
      '<p>Die <span class="begriff" data-begriff="ableitung" role="button" tabindex="0">Ableitungen</span> einer ' +
        '<span class="begriff" data-begriff="funktion" role="button" tabindex="0">Funktion</span>. Noch eine Funktion.</p>\n' +
        '<p>Wieder <span class="begriff" data-begriff="funktion" role="button" tabindex="0">Funktion</span>.</p>\n',
    )
  })

  it('keine Teilwörter, Groß-/Kleinschreibung zählt', () => {
    const html = markiert('Funktionsgraph, Ableitungsregel, man soll es tun.')
    expect(html).not.toContain('begriff')
  })

  it('längere Form gewinnt', () => {
    expect(markiert('Die Ableitungsfunktion.')).toContain('data-begriff="ableitung" role="button" tabindex="0">Ableitungsfunktion</span>')
  })

  it('nicht in Überschriften, Formeln, Links, Code, Kasten-Titeln oder Lösungs-Knöpfen', () => {
    const html = markiert(
      '## Funktion\n\n$\\text{Funktion}$ und `Funktion` und [Funktion](https://x.de)\n\n> [!MERKE] Funktion\n> Text\n\n> [!LOESUNG]\n> Lösung',
    )
    expect(html).not.toContain('class="begriff"')
  })

  it('in Kästen, Listen und Tabellen schon – mit Umlauten am Wortrand', () => {
    const html = markiert('> [!MERKE]\n> Über Funktion.\n\n- Soll-Seite? Nein: Soll.\n\n| a |\n|---|\n| Ableitung |')
    expect(html.match(/class="begriff"/g)).toHaveLength(3)
    expect(html).toContain('data-begriff="soll"')
  })

  it('der erklärte Begriff selbst wird in seiner Erklärung nicht markiert', () => {
    expect(markiert('Eine Funktion.', liste, 'funktion')).not.toContain('begriff')
  })

  it('ohne Begriffe bleibt alles gleich', () => {
    const html = rendere('Text').html
    expect(markiereBegriffe(html, [])).toBe(html)
  })
})
