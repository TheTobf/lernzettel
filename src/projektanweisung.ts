import format from '../FORMAT.md?raw'
import type { Fach } from './faecher'
import { tageText, WOCHENTAGE_LANG, type Plan } from './plan'

/**
 * Text für die Projektanweisungen eines Claude-Projekts (claude.ai). Damit erstellt Claude in dem Projekt
 * bei jedem Upload Lernzettel im Format der App – inklusive Test.
 */
export function projektanweisung(fach: Fach, plan?: Plan): string {
  const termin = plan
    ? `\n7. Die Übung ist ${tageText(plan)}. Ich möchte Übungsblätter vorher rechnen${plan.vorbereiten !== undefined ? ` (am ${WOCHENTAGE_LANG[plan.vorbereiten]})` : ''}: Lege jedes neue Übungsblatt als \`typ: blatt\` an und setze \`termin:\` auf den ersten Übungstag (${WOCHENTAGE_LANG[[...plan.uebungstage].sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7))[0]]}) der Woche, in der es besprochen wird.`
    : ''
  return `# Lernzettel für ${fach.name}

Ich studiere ${fach.name}. In diesem Projekt lade ich Folien, Übungsblätter und Lösungen hoch. Daraus machst du mir Lernzettel für meine Lernzettel-App.

## Immer wenn ich neue Unterlagen hochlade oder nach Lernzetteln frage

1. Erstelle zu jeder Übung einen Lernzettel – bei mehreren Themen mehrere Teile (teil: 1, 2, …) – jeweils mit Multiple-Choice-Test am Ende.
2. Halte dich exakt an das Format unten. Im Kopfbereich steht immer \`fach: ${fach.id}\`.
3. Gib jeden Lernzettel in einem eigenen Codeblock \`\`\`markdown … \`\`\` aus, mehrere direkt hintereinander. Ich kopiere die ganze Antwort und füge sie in der App unter „➕ Einfügen“ ein – auch mehrere auf einmal. Eine neue Version mit gleicher Übung und gleichem Teil ersetzt dort automatisch die alte.
4. Die Übungsnummer nimmst du vom Übungsblatt. Ist sie nicht erkennbar, frag nach.
5. Wenn ich nach dem Klausur-Lernzettel frage: Fasse alle Übungen dieses Projekts zusammen (typ: klausur) – mit großem Test (15–25 Fragen).
6. Nach den Lernzetteln eine kurze Liste: was du erstellt hast und was unklar war.${termin}

${format.replace(/^# .*\n/, '')}`
}
