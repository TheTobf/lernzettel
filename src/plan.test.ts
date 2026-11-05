import { describe, expect, it } from 'vitest'
import { datumKey, fachById } from './faecher'
import { naechsterBlock, naechsterTermin, phase, planFuer, tageText, vorbereitungsTag, wochenplan, type Plan } from './plan'

const mathe: Plan = { uebungstage: [4], vorbereiten: 3 } // Tutorium Do, vorbereiten Mi
const rewe: Plan = { uebungstage: [1, 2], vorbereiten: 5 } // Mo + Di, vorbereiten Fr
const tag = (t: number) => new Date(2026, 10, t) // November 2026 (5.11. ist ein Donnerstag)

function stand(plan: Plan, heute: Date) {
  const b = naechsterBlock(plan, heute)!
  const v = vorbereitungsTag(b.start, plan)
  return { start: datumKey(b.start), ende: datumKey(b.ende), vorbereiten: v && datumKey(v), phase: phase(heute, b, v) }
}

describe('Wochenplan', () => {
  it('Mathe: Mittwoch vorbereiten, Donnerstag Tutorium', () => {
    expect(stand(mathe, tag(5))).toEqual({ start: '2026-11-05', ende: '2026-11-05', vorbereiten: '2026-11-04', phase: 'uebung' })
    expect(stand(mathe, tag(6)).phase).toBe('spaeter')
    expect(stand(mathe, tag(6)).start).toBe('2026-11-12')
    expect(stand(mathe, tag(11))).toMatchObject({ vorbereiten: '2026-11-11', phase: 'vorbereiten' })
  })

  it('Rechnungswesen: Montag + Dienstag zählen als eine Übung, Freitag davor vorbereiten', () => {
    expect(stand(rewe, tag(5))).toEqual({ start: '2026-11-09', ende: '2026-11-10', vorbereiten: '2026-11-06', phase: 'spaeter' })
    expect(stand(rewe, tag(7)).phase).toBe('vorbereiten')
    expect(stand(rewe, tag(10))).toMatchObject({ start: '2026-11-09', phase: 'uebung' })
    expect(stand(rewe, tag(11)).start).toBe('2026-11-16')
  })

  it('Standardpläne der Fächer und eigene Änderungen', () => {
    const m = fachById('mathe')!
    expect(planFuer(m, {})).toEqual(mathe)
    expect(planFuer(m, { mathe: { uebungstage: [2], vorbereiten: 1 } })).toEqual({ uebungstage: [2], vorbereiten: 1 })
    expect(planFuer(m, { mathe: { uebungstage: [] } })).toBeUndefined()
    expect(planFuer(fachById('wirtschaftsinformatik')!, {})).toBeUndefined()
    expect(naechsterTermin(m, {}, tag(6))).toBe('2026-11-12')
  })

  it('Übersicht der nächsten 7 Tage', () => {
    const plan = wochenplan({}, tag(5)).map((t) => [t.datum.getDate(), t.eintraege.map((e) => `${e.fach.kurz} ${e.art}`)])
    expect(plan).toEqual([
      [5, ['Mathe uebung', 'IntMan uebung']],
      [6, ['ExReWe vorbereiten']],
      [7, []],
      [8, []],
      [9, ['ExReWe uebung', 'IntMan vorbereiten']],
      [10, ['ExReWe uebung']],
      [11, ['Mathe vorbereiten']],
    ])
  })

  it('Tage als Text', () => {
    expect(tageText(mathe)).toBe('Donnerstag')
    expect(tageText(rewe)).toBe('Montag und Dienstag')
    expect(tageText({ uebungstage: [0, 1, 3] })).toBe('Montag, Mittwoch und Sonntag')
  })
})
