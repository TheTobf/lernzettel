import { useSyncExternalStore } from 'react'
import type { Begriff } from './begriffe'

/** Welcher Fachbegriff gerade im Fenster unten angezeigt wird */
export interface Anzeige {
  begriff: Begriff
  /** alle Begriffe des Fachs (für Begriffe in der Erklärung) */
  liste: Begriff[]
}

let anzeige: Anzeige | null = null
const hoerer = new Set<() => void>()

function melde() {
  hoerer.forEach((h) => h())
}

export function zeigeBegriff(begriff: Begriff, liste: Begriff[]): void {
  anzeige = { begriff, liste }
  melde()
}

export function schliesseBegriff(): void {
  anzeige = null
  melde()
}

export function useBegriffAnzeige(): Anzeige | null {
  return useSyncExternalStore(
    (h) => {
      hoerer.add(h)
      return () => hoerer.delete(h)
    },
    () => anzeige,
  )
}
