import { useMemo } from 'react'
import { leseBegriffe, sammleBegriffe, type Begriff } from './begriffe'
import { useZustand } from './speicher'
import { ausPfad, baueZettel, type Rohzettel, type Zettel } from './zettel'

// Alle Lernzettel aus inhalte/<fach>/*.md werden beim Bauen in die App gepackt (offline verfügbar).
// Dateien mit „_“ am Anfang (z. B. _begriffe.md) sind keine Lernzettel.
const dateien = import.meta.glob(['../inhalte/*/*.md', '!../inhalte/*/_*.md'], { query: '?raw', import: 'default', eager: true }) as Record<
  string,
  string
>
const woerterbuecher = import.meta.glob('../inhalte/*/_begriffe.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

/** Fachbegriffe aus inhalte/<fach>/_begriffe.md (+ Fehlermeldungen für die Tests) */
export const WOERTERBUCH: Record<string, { begriffe: Begriff[]; fehler: string[] }> = Object.fromEntries(
  Object.entries(woerterbuecher).map(([pfad, text]) => {
    const { fach } = ausPfad(pfad)
    return [fach, leseBegriffe(text, fach)]
  }),
)

export const ROH: Rohzettel[] = Object.entries(dateien).map(([pfad, text]) => {
  const { fach, id } = ausPfad(pfad)
  return baueZettel(id, text, { fach })
})

export const APP_ZETTEL: Zettel[] = ROH.map((r) => r.zettel)

/** Lernzettel aus der App + die auf diesem Gerät eingefügten */
export function useAlleZettel(): Zettel[] {
  const { eigene } = useZustand()
  return useMemo(() => [...APP_ZETTEL, ...eigene], [eigene])
}

/** Alle Fachbegriffe eines Fachs: Wörterbuch + Definitionen aus den Lernzetteln */
export function useBegriffe(fach: string | undefined): Begriff[] {
  const alle = useAlleZettel()
  return useMemo(() => (fach ? sammleBegriffe(WOERTERBUCH[fach]?.begriffe ?? [], alle, fach) : []), [alle, fach])
}
