import { datumKey, FAECHER, fachAktiv, type Fach } from './faecher'

/** Wochenplan eines Fachs: an welchen Wochentagen Übung ist und wann vorbereitet wird (0 = So … 6 = Sa) */
export interface Plan {
  uebungstage: number[]
  vorbereiten?: number
}

export const WOCHENTAGE_KURZ = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
export const WOCHENTAGE_LANG = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

export function standardPlan(f: Fach): Plan | undefined {
  return f.uebungstage?.length ? { uebungstage: f.uebungstage, vorbereiten: f.vorbereiten } : undefined
}

/** Eigener Plan aus den Einstellungen, sonst der Standard aus faecher.ts */
export function planFuer(f: Fach, eigene: Record<string, Plan>): Plan | undefined {
  const p = eigene[f.id] ?? standardPlan(f)
  return p && p.uebungstage.length ? p : undefined
}

export function plusTage(d: Date, n: number): Date {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  x.setDate(x.getDate() + n)
  return x
}

/** Aufeinanderfolgende Übungstage (z. B. Mo + Di) gehören zu einer Übung. */
export interface Block {
  start: Date
  ende: Date
}

function istStart(d: Date, plan: Plan): boolean {
  return plan.uebungstage.includes(d.getDay()) && !plan.uebungstage.includes(plusTage(d, -1).getDay())
}

/** Die laufende oder nächste Übung (ihr letzter Tag ist heute oder später). */
export function naechsterBlock(plan: Plan, heute: Date): Block | undefined {
  for (let i = -6; i <= 7; i++) {
    const start = plusTage(heute, i)
    if (!istStart(start, plan)) continue
    let ende = start
    while (plan.uebungstage.includes(plusTage(ende, 1).getDay()) && datumKey(ende) < datumKey(plusTage(start, 6))) ende = plusTage(ende, 1)
    if (datumKey(ende) >= datumKey(heute)) return { start, ende }
  }
  return undefined
}

/** Der Vorbereitungstag vor einer Übung (1–7 Tage vorher). */
export function vorbereitungsTag(start: Date, plan: Plan): Date | undefined {
  if (plan.vorbereiten === undefined) return undefined
  const zurueck = (start.getDay() - plan.vorbereiten + 7) % 7 || 7
  return plusTage(start, -zurueck)
}

/** spaeter = noch nicht dran · vorbereiten = ab dem Vorbereitungstag · uebung = an den Übungstagen */
export type Phase = 'spaeter' | 'vorbereiten' | 'uebung'

export function phase(heute: Date, block: Block, vorbereitung: Date | undefined): Phase {
  const h = datumKey(heute)
  if (h >= datumKey(block.start)) return 'uebung'
  if (vorbereitung && h >= datumKey(vorbereitung)) return 'vorbereiten'
  return 'spaeter'
}

export interface PlanEintrag {
  fach: Fach
  art: 'vorbereiten' | 'uebung'
}

/** Was an den nächsten Tagen ansteht (heute zuerst). */
export function wochenplan(eigene: Record<string, Plan>, heute: Date, tage = 7): { datum: Date; eintraege: PlanEintrag[] }[] {
  const faecher = FAECHER.filter((f) => fachAktiv(f, heute))
  return Array.from({ length: tage }, (_, i) => {
    const datum = plusTage(heute, i)
    const eintraege: PlanEintrag[] = []
    for (const f of faecher) {
      const p = planFuer(f, eigene)
      if (!p) continue
      if (p.vorbereiten === datum.getDay()) eintraege.push({ fach: f, art: 'vorbereiten' })
      if (p.uebungstage.includes(datum.getDay())) eintraege.push({ fach: f, art: 'uebung' })
    }
    return { datum, eintraege }
  })
}

/** Nächster Übungstermin eines Fachs als JJJJ-MM-TT (z. B. als Vorschlag für ein neues Übungsblatt). */
export function naechsterTermin(f: Fach, eigene: Record<string, Plan>, heute: Date): string | undefined {
  const p = planFuer(f, eigene)
  const b = p ? naechsterBlock(p, heute) : undefined
  return b ? datumKey(b.start) : undefined
}

/** „Donnerstag“ bzw. „Montag und Dienstag“ */
export function tageText(plan: Plan): string {
  const namen = [...plan.uebungstage].sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7)).map((t) => WOCHENTAGE_LANG[t])
  return namen.length > 1 ? `${namen.slice(0, -1).join(', ')} und ${namen.at(-1)}` : (namen[0] ?? '')
}
