import { useEffect, useMemo, useRef, type KeyboardEvent, type MouseEvent } from 'react'
import { zeigeBegriff } from '../begriffAnzeige'
import { markiereBegriffe, type Begriff } from '../begriffe'
import type { AufgabenStatus } from '../speicher'

interface Props {
  html: string
  /** abgehakte Checklisten-Punkte */
  haken?: number[]
  onHaken?: (nr: number, an: boolean) => void
  /** Fachbegriffe, die im Text unterstrichen und antippbar werden */
  begriffe?: Begriff[]
  /** diesen Begriff nicht markieren (z. B. in seiner eigenen Erklärung) */
  ausser?: string
  /** eigener Stand pro Aufgabe (Nr. → Status) */
  aufgaben?: Record<number, AufgabenStatus>
  onAufgabe?: (nr: number, status: AufgabenStatus | null) => void
}

/** Zeigt gerendertes Markdown an und macht Checklisten, Fachbegriffe und interne Sprungmarken bedienbar. */
export default function Markdown({ html, haken = [], onHaken, begriffe, ausser, aufgaben, onAufgabe }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inhalt = useMemo(() => ({ __html: begriffe?.length ? markiereBegriffe(html, begriffe, ausser) : html }), [html, begriffe, ausser])
  const hakenKey = haken.join(',')

  useEffect(() => {
    const an = new Set(hakenKey ? hakenKey.split(',').map(Number) : [])
    ref.current?.querySelectorAll<HTMLInputElement>('input.haken').forEach((el) => {
      el.checked = an.has(Number(el.dataset.haken))
      el.disabled = !onHaken
    })
  }, [inhalt, hakenKey, onHaken])

  const aufgabenKey = JSON.stringify(aufgaben ?? {})
  useEffect(() => {
    const stand = JSON.parse(aufgabenKey) as Record<string, AufgabenStatus>
    ref.current?.querySelectorAll<HTMLElement>('.aufgabe-status').forEach((el) => {
      const st = stand[el.dataset.aufgabe ?? ''] ?? ''
      el.dataset.stand = st
      el.querySelectorAll<HTMLButtonElement>('button[data-status]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.status === st)))
    })
  }, [inhalt, aufgabenKey])

  function oeffneBegriff(el: Element): boolean {
    const b = begriffe?.find((x) => x.id === (el as HTMLElement).dataset.begriff)
    if (b && begriffe) zeigeBegriff(b, begriffe)
    return !!b
  }

  function klick(e: MouseEvent<HTMLDivElement>) {
    const ziel = e.target as HTMLElement
    const knopf = ziel.closest<HTMLButtonElement>('.aufgabe-status button[data-status]')
    if (knopf) {
      const nr = Number(knopf.closest<HTMLElement>('.aufgabe-status')?.dataset.aufgabe)
      const status = knopf.dataset.status as AufgabenStatus
      if (onAufgabe && Number.isInteger(nr)) onAufgabe(nr, aufgaben?.[nr] === status ? null : status)
      return
    }
    const begriff = ziel.closest('.begriff')
    if (begriff) {
      e.preventDefault()
      oeffneBegriff(begriff)
      return
    }
    const link = ziel.closest('a')
    if (link) {
      const href = link.getAttribute('href') ?? ''
      // „#abschnitt“-Links nicht als Seitenwechsel behandeln (Hash-Routing)
      if (href.startsWith('#') && !href.startsWith('#/')) {
        e.preventDefault()
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    if (!onHaken) return
    let box: HTMLInputElement | null = null
    if (ziel instanceof HTMLInputElement && ziel.classList.contains('haken')) box = ziel
    else {
      const punkt = ziel.closest('li.haken-punkt')
      if (!punkt || ziel.closest('details, summary, button')) return
      box = punkt.querySelector<HTMLInputElement>(':scope > input.haken, :scope > p > input.haken')
      if (box) box.checked = !box.checked
    }
    if (box) onHaken(Number(box.dataset.haken), box.checked)
  }

  function taste(e: KeyboardEvent<HTMLDivElement>) {
    const begriff = (e.target as HTMLElement).closest('.begriff')
    if (begriff && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      oeffneBegriff(begriff)
    }
  }

  return (
    <div ref={ref} className={`zettel ${onAufgabe ? 'mit-aufgaben' : ''}`} onClick={klick} onKeyDown={taste} dangerouslySetInnerHTML={inhalt} />
  )
}
