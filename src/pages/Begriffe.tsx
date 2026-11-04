import { useMemo, useState } from 'react'
import { zeigeBegriff } from '../begriffAnzeige'
import Kopf from '../components/Kopf'
import { fachById } from '../faecher'
import { useBegriffe } from '../inhalte'
import { rendereInline } from '../markdown'
import { pfad } from '../router'

/** Alle Fachbegriffe eines Fachs, A–Z mit Suche */
export default function Begriffe({ fach: fachId }: { fach: string }) {
  const fach = fachById(fachId)
  const begriffe = useBegriffe(fach?.id)
  const [frage, setFrage] = useState('')
  // Vorschau: erster Absatz der Erklärung, mit Formeln
  const vorschau = useMemo(() => new Map(begriffe.map((b) => [b.id, rendereInline(b.erklaerung.split(/\n\s*\n/)[0])])), [begriffe])

  const gruppen = useMemo(() => {
    const q = frage.trim().toLowerCase()
    const treffer = q
      ? begriffe.filter((b) => [b.begriff, ...b.formen, b.erklaerung].some((t) => t.toLowerCase().includes(q)))
      : begriffe
    const map = new Map<string, typeof begriffe>()
    for (const b of treffer) {
      const buchstabe = b.begriff
        .charAt(0)
        .toUpperCase()
        .replace('Ä', 'A')
        .replace('Ö', 'O')
        .replace('Ü', 'U')
      map.set(buchstabe, [...(map.get(buchstabe) ?? []), b])
    }
    return [...map.entries()]
  }, [begriffe, frage])

  if (!fach) return <div className="p-6">Fach nicht gefunden.</div>

  return (
    <div style={{ '--fach': fach.farbe } as React.CSSProperties} className="pb-28">
      <Kopf titel={`Fachbegriffe · ${fach.kurz}`} zurueck={pfad.fach(fach.id)} farbe={fach.farbe} />
      <div className="mx-auto max-w-2xl px-4 pt-4">
        <p className="mb-3 px-1 text-sm text-stone-500 dark:text-stone-400">
          {begriffe.length} Begriffe, einfach erklärt. In den Lernzetteln sind sie unterstrichen – antippen zeigt die Erklärung.
        </p>
        <input
          type="search"
          value={frage}
          onChange={(e) => setFrage(e.target.value)}
          placeholder="Begriff suchen…"
          className="mb-4 h-12 w-full rounded-2xl bg-karte px-4 shadow-sm ring-1 ring-black/5 outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-(--fach) dark:bg-nacht-2 dark:ring-white/10"
        />
        {gruppen.length === 0 && <p className="px-1 text-sm text-stone-500">{begriffe.length ? 'Nichts gefunden.' : 'Noch keine Fachbegriffe.'}</p>}
        {gruppen.map(([buchstabe, liste]) => (
          <section key={buchstabe} className="mb-4">
            <h2 className="mb-1.5 px-1 text-sm font-bold text-(--fach)">{buchstabe}</h2>
            <div className="karte divide-y divide-black/5 dark:divide-white/5">
              {liste.map((b) => (
                <button key={b.id} type="button" onClick={() => zeigeBegriff(b, begriffe)} className="flex w-full items-center gap-3 px-4 py-3 text-left">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold">{b.begriff}</div>
                    <div className="line-clamp-1 text-sm text-stone-500 dark:text-stone-400" dangerouslySetInnerHTML={{ __html: vorschau.get(b.id) ?? '' }} />
                  </div>
                  <span className="text-stone-400">›</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
