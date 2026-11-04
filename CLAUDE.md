# Lernzettel-App – Anleitung für Claude

Diese App zeigt die Lernzettel, die Claude für das Studium des Nutzers schreibt (Handy-PWA, offline).

**Format, Aufbau, Test-Regeln und Qualitätsregeln stehen in [`FORMAT.md`](FORMAT.md) – vor jedem neuen Lernzettel lesen.**
Dieselbe Datei steckt (über `src/projektanweisung.ts`) in den Projektanweisungen, die der Nutzer aus der App in seine
claude.ai-Projekte kopiert. Änderungen am Format also immer dort machen.

## Was der Nutzer erwartet (merken!)

- Schickt der Nutzer Unterlagen (Folien, Übungsblätter, Lösungen – Foto/PDF), **ohne Nachfrage** daraus Lernzettel
  machen und in die App legen: pro Übung mindestens ein Lernzettel, bei mehreren Themen mehrere Teile.
- **Jeder Lernzettel hat am Ende einen Multiple-Choice-Test** (`## Test` mit `[!FRAGE]`-Kästen, 4 Antworten, davon
  1–2 offensichtlich falsch und 1–2 plausibel, mittleres Niveau). Der Abschlusstest pro Fach wird von der App
  automatisch aus allen Fragen gemischt.
- Vor der Klausur: Klausur-Lernzettel (`typ: klausur`) mit großem Test.
- **Fachbegriffe** einfach erklärt, von den Basics an: Jeder Begriff, der in einem Lernzettel vorkommt, gehört ins
  Wörterbuch `inhalte/<fach>/_begriffe.md` (siehe unten). Die App unterstreicht ihn dann automatisch (dezent, nicht
  blau); Antippen zeigt die Erklärung.
- Fügt der Nutzer Lernzettel-Text aus einem claude.ai-Projekt ein (beginnt mit `---` und `titel:`), diesen als Datei
  übernehmen (gleiches Fach/Übung/Teil → vorhandene Datei ersetzen).

## Wohin?

Ein Lernzettel = eine Markdown-Datei in `inhalte/<fach>/`. Der Ordner bestimmt das Fach
(`fach:` im Kopf ist optional, muss aber zum Ordner passen).

| Ordner | Modul | Hinweis |
|---|---|---|
| `mathe` | Mathe | |
| `externes-rechnungswesen` | Externes Rechnungswesen | |
| `internationales-management` | Internationales Management | |
| `wirtschaftsinformatik` | Wirtschaftsinformatik | läuft erst ab 1. Dezember 2026 |

Neues Fach: in `src/faecher.ts` eintragen und Ordner anlegen.

Dateinamen (klein, ohne Umlaute):

- Übung: `uebung-03-kurztitel.md`, bei mehreren Lernzetteln zur selben Übung `uebung-03-1-…`, `uebung-03-2-…`
- Klausur-Lernzettel: `klausur-kurztitel.md` bzw. `klausur-1-…`, `klausur-2-…`
- Sonstiges: `extra-kurztitel.md`

Vorlage: `inhalte/mathe/extra-beispiel-ableitungsregeln.md`.

## Fachbegriffe-Wörterbuch

Pro Fach `inhalte/<fach>/_begriffe.md` (Dateien mit `_` sind keine Lernzettel):

```markdown
## Ableitung
auch: Ableitungen, Ableitungsfunktion
Ein bis drei einfache Sätze. Formeln mit $…$ erlaubt.

**Beispiel:** …
```

- Überschrift = Grundform des Begriffs; `auch:` = weitere Schreibweisen, die im Text vorkommen (Plural mit Umlaut,
  Synonyme, Abkürzungen). Endungen -e/-en/-n/-s/-es erkennt die App selbst. Groß-/Kleinschreibung zählt.
- Erklärungen einfach halten und bei den Basics anfangen; höchstens ~600 Zeichen.
- Die bisherigen Einträge sind allgemeine Erklärungen. Definiert die Vorlesung etwas anders, die Erklärung an den
  Kurs anpassen.
- Bei jedem neuen Lernzettel: neue Fachbegriffe ergänzen. `[!DEFINITION]`-Kästen aus Lernzetteln landen zusätzlich
  automatisch im Wörterbuch (der Eintrag in `_begriffe.md` hat Vorrang).
- Wörter, die auch im Alltag häufig vorkommen (z. B. „soll“), nur mit eindeutiger Schreibweise eintragen.

## Ablauf (Lernzettel gehen automatisch online)

1. Datei(en) anlegen.
2. `npm test` – prüft Kopfbereich, doppelte Übungsnummern, ob alle Formeln darstellbar sind und ob
   jeder Lernzettel einen Test mit mindestens 5 korrekten Fragen hat.
3. Committen und auf den Session-Branch `claude/…` pushen – **kein Pull Request nötig**. Der Workflow
   „Lernzettel übernehmen“ (`.github/workflows/uebernehmen.yml`) prüft den Branch, übernimmt ihn in `main` und
   veröffentlicht die App, **wenn nur Dateien in `inhalte/` geändert wurden**. Die App zeigt dann
   „Neue Lernzettel sind da“. Der Nutzer will das so: Lernzettel sollen ohne sein Zutun in der App landen.
4. Danach kurz prüfen, ob die Workflow-Läufe „Lernzettel übernehmen“ und „Deploy“ grün sind; bei Rot den Fehler beheben
   und erneut pushen.

Änderungen am App-Code (alles außerhalb von `inhalte/`) werden nicht automatisch übernommen: dafür einen Pull Request
nach `main` erstellen, den der Nutzer mergt. Lernzettel und Code-Änderungen daher in getrennten Commits/Branches.

## Technik

Vite + React + TypeScript + Tailwind. Markdown mit `marked` + KaTeX (`src/markdown.ts`; `[!FRAGE]`-Kästen werden dort
aus dem Lesetext entfernt), Testfragen in `src/fragen.ts`, Test-Ablauf in `src/pages/Test.tsx`. Fachbegriffe in
`src/begriffe.ts` (Wörterbuch lesen, im HTML markieren), Fenster `src/components/BegriffFenster.tsx`, Liste
`src/pages/Begriffe.tsx`. Nutzerdaten
(Wochen-Check, Testergebnisse, eingefügte Lernzettel) nur lokal im Browser (`src/speicher.ts`). Wochenlogik in
`src/zettel.ts`/`src/woche.ts`. `npm run dev`, `npm test`, `npm run build`.
