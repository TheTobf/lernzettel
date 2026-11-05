import { datumKey, FAECHER, fachAktiv, fachById, type Fach } from '../faecher'
import { anzahlAufgaben } from '../markdown'
import { naechsterBlock, phase, planFuer, vorbereitungsTag, WOCHENTAGE_KURZ, wochenplan, type Phase } from '../plan'
import { pfad } from '../router'
import { aufgabenStand, useZustand } from '../speicher'
import { tageBis } from '../woche'
import { naechsteBlaetter, type Zettel } from '../zettel'

interface Karte {
  fach: Fach
  start: Date
  phase: Phase
  heuteVorbereiten: boolean
  blatt?: Zettel
}

function kurzDatum(d: Date): string {
  return `${WOCHENTAGE_KURZ[d.getDay()]}, ${d.getDate()}.${d.getMonth() + 1}.`
}

/** Erinnerungen für die nächste Übung: ab dem Vorbereitungstag bis zum Übungstag */
export function UebungsKarten({ alle, heute }: { alle: Zettel[]; heute: Date }) {
  const z = useZustand()
  const karten: Karte[] = []
  for (const f of FAECHER.filter((x) => fachAktiv(x, heute))) {
    const plan = planFuer(f, z.plan)
    if (!plan) continue
    const block = naechsterBlock(plan, heute)
    if (!block) continue
    const vorbereitung = vorbereitungsTag(block.start, plan)
    const ph = phase(heute, block, vorbereitung)
    if (ph === 'spaeter') continue
    const blatt = alle.find((x) => x.typ === 'blatt' && x.fach === f.id && x.termin === datumKey(block.start))
    if (!blatt && !f.blaetter) continue
    karten.push({ fach: f, start: block.start, phase: ph, heuteVorbereiten: !!vorbereitung && datumKey(vorbereitung) === datumKey(heute), blatt })
  }
  // Übungsblätter von Fächern ohne Wochenplan: wie bisher 7 Tage vorher
  for (const b of naechsteBlaetter(alle, heute)) {
    const f = fachById(b.fach)
    if (!f || planFuer(f, z.plan) || karten.some((k) => k.blatt?.id === b.id)) continue
    const start = new Date(`${b.termin}T12:00`)
    karten.push({ fach: f, start, phase: b.termin === datumKey(heute) ? 'uebung' : 'vorbereiten', heuteVorbereiten: false, blatt: b })
  }

  return (
    <>
      {karten.map((k) => {
        const anzahl = k.blatt ? anzahlAufgaben(k.blatt.inhalt) : 0
        const st = k.blatt ? aufgabenStand(z, k.blatt.id, anzahl) : undefined
        const tage = tageBis(heute, datumKey(k.start))
        const wann =
          k.phase === 'uebung' ? `Heute · ${k.fach.kurz}-Übung` : tage === 1 ? `Morgen · ${k.fach.kurz}-Übung` : `${k.fach.kurz}-Übung ${kurzDatum(k.start)}`
        let titel: string
        let unten: string
        let icon = '📝'
        if (!k.blatt) {
          titel = 'Übungsblatt fehlt noch'
          unten = 'Schick es mir in Claude Code – dann lege ich es mit Ansätzen und Lösungen an.'
          icon = '📥'
        } else if (k.phase === 'uebung') {
          titel = st!.verglichen >= anzahl ? 'Alles verglichen' : 'In der Übung vergleichen'
          unten = `${st!.verglichen}/${anzahl} verglichen · ✓ ${st!.richtig} stimmen`
          icon = st!.verglichen >= anzahl ? '✅' : '🎓'
        } else {
          const fertig = anzahl > 0 && st!.gerechnet >= anzahl
          titel = fertig ? 'Alles gerechnet – nur noch vergleichen' : `Übungsblatt ${k.blatt.uebung ?? ''} vorrechnen`
          unten = `${st!.gerechnet}/${anzahl} Aufgaben gerechnet`
          icon = fertig ? '✅' : '📝'
        }
        return (
          <a
            key={`${k.fach.id}-${datumKey(k.start)}`}
            href={k.blatt ? pfad.zettel(k.blatt.id) : pfad.fach(k.fach.id)}
            className="karte mb-4 flex items-center gap-4 p-4 ring-2 ring-(--fach)/40 transition active:scale-[0.99]"
            style={{ '--fach': k.fach.farbe } as React.CSSProperties}
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-(--fach)/12 text-3xl">{icon}</span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold tracking-wide text-(--fach) uppercase">
                {k.heuteVorbereiten && k.phase === 'vorbereiten' ? 'Heute vorbereiten · ' : ''}
                {wann}
              </div>
              <div className="font-bold">{titel}</div>
              <div className="text-sm text-stone-500 dark:text-stone-400">{unten}</div>
            </div>
            <span className="text-stone-400">›</span>
          </a>
        )
      })}
    </>
  )
}

/** Kompakte Übersicht: was an den nächsten 7 Tagen ansteht */
export function WochenplanKarte({ heute }: { heute: Date }) {
  const z = useZustand()
  const tage = wochenplan(z.plan, heute).filter((t) => t.eintraege.length)
  if (!tage.length) return null
  return (
    <section className="karte mb-4 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-bold">📅 Wochenplan</h2>
        <a href={pfad.mehr()} className="text-xs text-stone-500 underline underline-offset-2">
          ändern
        </a>
      </div>
      <div className="space-y-1.5">
        {tage.map(({ datum, eintraege }) => {
          const t = tageBis(heute, datumKey(datum))
          return (
            <div key={datumKey(datum)} className={`flex items-start gap-3 text-sm ${t === 0 ? 'font-semibold' : ''}`}>
              <span className={`w-16 shrink-0 ${t === 0 ? '' : 'text-stone-500'}`}>{t === 0 ? 'Heute' : t === 1 ? 'Morgen' : kurzDatum(datum)}</span>
              <div className="flex flex-wrap gap-1.5">
                {eintraege.map((e) => (
                  <span
                    key={`${e.fach.id}-${e.art}`}
                    className="rounded-full bg-(--fach)/12 px-2 py-0.5 text-xs font-medium text-(--fach)"
                    style={{ '--fach': e.fach.farbe } as React.CSSProperties}
                  >
                    {e.art === 'uebung' ? `🎓 ${e.fach.kurz}-Übung` : `✏️ ${e.fach.kurz} vorbereiten`}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
