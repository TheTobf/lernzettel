---
titel: Aussagenlogik – Aussagen, Junktoren, Wahrheitstafeln
typ: uebung
uebung: 2
datum: 2026-11-05
kurz: Was eine Aussage ist, die fünf Junktoren, Wahrheitstafeln, richtig verneinen und Sätze in Formeln übersetzen.
---

## Worum geht's?

Die Aussagenlogik ist das Werkzeug, mit dem man in der Mathematik **sauber argumentiert**. Man zerlegt Sätze in einfache Aussagen, verbindet sie mit Junktoren („und“, „oder“, „wenn … dann“ …) und prüft mit einer Wahrheitstafel, wann das Ganze wahr ist. Das brauchst du später für jeden Beweis.

## Begriffe

> [!DEFINITION] Aussage
> Ein Satz, der **entweder wahr oder falsch** ist – nie beides, nie keins von beiden. Man muss den Wahrheitswert nicht kennen.

**Keine Aussagen** sind Fragen („Wie spät ist es?“), Aufforderungen („Schreib deutlicher!“) und reine Rechenausdrücke wie $12 - 7$ – sie haben keinen Wahrheitswert.

> [!DEFINITION] Wahrheitswert
> „wahr“ (w) oder „falsch“ (f) – das Ergebnis einer Aussage.

- **Elementare Aussage:** eine einfache Aussage, z. B. $A$ = „Gabriel ist groß“.
- **Zusammengesetzte Aussage:** mehrere elementare Aussagen, verbunden durch Junktoren, z. B. $A \land B$.

> [!DEFINITION] Junktor
> Ein logisches Verbindungswort, das Aussagen zu einer neuen Aussage verknüpft: $\neg$, $\land$, $\lor$, $\Rightarrow$, $\Leftrightarrow$.

| Junktor | Name | gelesen | wahr, wenn … |
|---|---|---|---|
| $\neg A$ | Negation | „nicht $A$“ | $A$ falsch ist |
| $A \land B$ | Konjunktion | „$A$ und $B$“ | **beide** wahr sind |
| $A \lor B$ | Disjunktion | „$A$ oder $B$“ | **mindestens eine** wahr ist |
| $A \Rightarrow B$ | Implikation | „wenn $A$, dann $B$“ | **nicht** ($A$ wahr und $B$ falsch) |
| $A \Leftrightarrow B$ | Äquivalenz | „$A$ genau dann, wenn $B$“ | beide **gleich** sind |

## Die Wahrheitstafel aller Junktoren

> [!FORMEL] Wahrheitstafel
> | $A$ | $B$ | $\neg A$ | $A \land B$ | $A \lor B$ | $A \Rightarrow B$ | $A \Leftrightarrow B$ |
> |---|---|---|---|---|---|---|
> | w | w | f | w | w | w | w |
> | w | f | f | f | w | **f** | f |
> | f | w | w | f | w | w | f |
> | f | f | w | f | f | w | w |

> [!MERKE] Die Implikation ist nur in einem Fall falsch
> $A \Rightarrow B$ ist **nur** falsch, wenn $A$ wahr und $B$ falsch ist. Ist die Voraussetzung $A$ falsch, ist die Implikation **immer wahr** – egal, was $B$ ist.
>
> **Beispiel:** „Wenn der Mond ein Fußball ist, dann scheint um Mitternacht die Sonne“ ist wahr.

## Von der Umgangssprache zur Formel

| Satz | Formel |
|---|---|
| $A$ **aber** $B$ | $A \land B$ |
| **weder** $A$ **noch** $B$ | $\neg A \land \neg B$ |
| **nicht beide** $A$ und $B$ | $\neg(A \land B)$ |
| $A$ **oder** $B$ (mindestens eins) | $A \lor B$ |
| **entweder** $A$ **oder** $B$ (genau eins) | $(A \lor B) \land \neg(A \land B)$ |
| **wenn** $A$, **dann** $B$ / $A$ **nur wenn** $B$ | $A \Rightarrow B$ |
| $A$, **es sei denn** $B$ | $\neg B \Rightarrow A$ |
| $A$ **genau dann, wenn** $B$ | $A \Leftrightarrow B$ |

> [!ACHTUNG]
> „oder“ ist in der Mathematik **einschließlich** gemeint: $A \lor B$ ist auch wahr, wenn beide wahr sind. Für „genau eins von beiden“ braucht man „entweder … oder“.

## Richtig verneinen

> [!FORMEL] De Morgansche Regeln
> $$
> \neg(A \land B) \Leftrightarrow \neg A \lor \neg B \qquad \neg(A \lor B) \Leftrightarrow \neg A \land \neg B
> $$
> Beim Verneinen wird aus „und“ ein „oder“ (und umgekehrt), und jede Teilaussage wird verneint.

> [!FORMEL] Weitere Verneinungen
> - doppelte Verneinung: $\neg\neg A \Leftrightarrow A$
> - Implikation: $\neg(A \Rightarrow B) \Leftrightarrow A \land \neg B$

> [!BEISPIEL] Verneinen
> „Die letzte Prüfung ist bestanden **und** ich habe riesigen Hunger.“
>
> Verneinung: „Die letzte Prüfung ist **nicht** bestanden **oder** ich habe **keinen** riesigen Hunger.“

## Tautologie und Kontradiktion

> [!DEFINITION] Tautologie
> Eine zusammengesetzte Aussage, die **immer wahr** ist – egal, welche Wahrheitswerte die Teilaussagen haben. Beispiel: $A \lor \neg A$.

> [!DEFINITION] Kontradiktion
> Eine zusammengesetzte Aussage, die **immer falsch** ist. Beispiel: $A \land \neg A$ oder $A \Leftrightarrow \neg A$.

> [!FORMEL] Wichtige Tautologien
> - $(A \Rightarrow B) \Leftrightarrow (\neg A \lor B)$ – Implikation umschreiben
> - $(A \Leftrightarrow B) \Leftrightarrow \big((A \Rightarrow B) \land (B \Rightarrow A)\big)$
> - $(A \Rightarrow B) \Leftrightarrow (\neg B \Rightarrow \neg A)$ – Kontraposition
> - $\big((A \Rightarrow B) \land (B \Rightarrow C)\big) \Rightarrow (A \Rightarrow C)$ – Kettenschluss
> - $A \lor B \Leftrightarrow \neg(\neg A \land \neg B)$ – damit reichen $\neg$ und $\land$ für alles

## So gehst du vor

**Satz in eine Formel übersetzen**

1. Elementare Aussagen finden und mit Buchstaben benennen (immer **positiv** formulieren, z. B. $D$ = „ist dumm“, nicht „ist nicht dumm“).
2. Signalwörter suchen (aber, weder–noch, es sei denn, wenn–dann …) und mit der Tabelle oben übersetzen.
3. Klammern setzen: Worauf bezieht sich ein „nicht“ oder „es trifft nicht zu, dass …“?

**Wahrheitstafel aufstellen**

1. Bei $n$ elementaren Aussagen gibt es $2^n$ Zeilen (2 → 4 Zeilen, 3 → 8 Zeilen).
2. Systematisch füllen: erste Spalte 4× w, 4× f; zweite 2× w, 2× f …; letzte Spalte immer abwechselnd.
3. Von innen nach außen rechnen – für jeden Teilausdruck eine eigene Spalte.
4. Tautologie: letzte Spalte **nur w**. Kontradiktion: **nur f**.

**Logikrätsel lösen** (wer ist der Täter, welcher Hebel …)

1. Jede Bedingung als Formel schreiben.
2. Alle Kombinationen in einer Wahrheitstafel durchgehen.
3. Jede Zeile streichen, in der eine Bedingung falsch ist – was übrig bleibt, ist die Lösung.

## Beispiele

> [!BEISPIEL] Übersetzen
> „Lisa lernt nicht für die Klausur, es sei denn, sie hat keine Schicht im Café.“
>
> $L$ = „Lisa lernt für die Klausur“, $S$ = „Lisa hat eine Schicht im Café“.
> „$X$, es sei denn $Y$“ heißt „wenn nicht $Y$, dann $X$“ mit $X = \neg L$ und $Y = \neg S$:
> $$
> \neg\neg S \Rightarrow \neg L \quad\Leftrightarrow\quad S \Rightarrow \neg L
> $$
> In Worten: Wenn Lisa eine Schicht hat, lernt sie nicht.

> [!BEISPIEL] Tautologie prüfen
> Ist $(A \land B) \Rightarrow A$ eine Tautologie?
>
> | $A$ | $B$ | $A \land B$ | $(A \land B) \Rightarrow A$ |
> |---|---|---|---|
> | w | w | w | w |
> | w | f | f | w |
> | f | w | f | w |
> | f | f | f | w |
>
> Letzte Spalte nur w → **ja, Tautologie**.

> [!BEISPIEL] Logikrätsel
> Bei einer WG-Party ist die Pizza weg. Verdächtig sind Paul ($P$) und Quentin ($Q$). Bekannt ist: Mindestens einer war es ($P \lor Q$). Wenn Paul es war, war Quentin dabei ($P \Rightarrow Q$). Quentin war es nicht allein ($Q \Rightarrow P$).
>
> | $P$ | $Q$ | $P \lor Q$ | $P \Rightarrow Q$ | $Q \Rightarrow P$ |
> |---|---|---|---|---|
> | w | w | w | w | w |
> | w | f | w | **f** | w |
> | f | w | w | w | **f** |
> | f | f | **f** | w | w |
>
> Nur die erste Zeile erfüllt alles: **Beide** haben die Pizza gegessen.

## Typische Fehler

> [!ACHTUNG]
> - „und“ verneinen und dabei „und“ behalten: $\neg(A \land B)$ ist **nicht** $\neg A \land \neg B$, sondern $\neg A \lor \neg B$.
> - Eine Implikation mit falscher Voraussetzung für falsch halten – sie ist **wahr**.
> - $A \Rightarrow B$ mit $B \Rightarrow A$ verwechseln (Umkehrung gilt nicht automatisch).
> - Beim Multiplizieren einer Ungleichung mit einer negativen Zahl das Zeichen nicht umdrehen: aus $a < b$ folgt $-a > -b$.
> - Aus $f'(x_0) = 0$ auf einen Extremwert schließen – $f(x) = x^3$ bei $x_0 = 0$ ist ein Gegenbeispiel.

> [!TIPP]
> Aus einer falschen Voraussetzung kann man alles „beweisen“ – auch $1 = 0$. Prüfe bei jedem Beweis zuerst, ob die Startannahme überhaupt stimmen kann.

## Selbsttest

> [!AUFGABE] Aufgabe 1
> Übersetze: „Der Zug fährt pünktlich ab, aber weder der Speisewagen noch das WLAN funktionieren.“

> [!ANSATZ]
> Drei elementare Aussagen: $Z$ (Zug pünktlich), $S$ (Speisewagen funktioniert), $W$ (WLAN funktioniert). „aber“ = und, „weder … noch“ = beide verneint.

> [!LOESUNG]
> $Z \land \neg S \land \neg W$

> [!AUFGABE] Aufgabe 2
> Verneine: „Ich gehe heute zum Sport oder ich lerne Mathe.“

> [!ANSATZ]
> $\neg(A \lor B) = \neg A \land \neg B$

> [!LOESUNG]
> „Ich gehe heute **nicht** zum Sport **und** ich lerne **nicht** Mathe.“

> [!AUFGABE] Aufgabe 3
> Ist $(A \Rightarrow B) \Leftrightarrow (B \Rightarrow A)$ eine Tautologie? Begründe mit einer Wahrheitstafel.

> [!ANSATZ]
> Rechne beide Implikationen in eigenen Spalten aus und vergleiche sie Zeile für Zeile.

> [!LOESUNG]
> | $A$ | $B$ | $A \Rightarrow B$ | $B \Rightarrow A$ | $\Leftrightarrow$ |
> |---|---|---|---|---|
> | w | w | w | w | w |
> | w | f | f | w | **f** |
> | f | w | w | f | **f** |
> | f | f | w | w | w |
>
> **Keine Tautologie** – eine Implikation und ihre Umkehrung sind nicht gleichwertig.

> [!AUFGABE] Aufgabe 4
> Für welche Wahrheitswerte von $A$ und $B$ ist $\neg(A \Rightarrow B)$ wahr?

> [!ANSATZ]
> $\neg(A \Rightarrow B) \Leftrightarrow A \land \neg B$

> [!LOESUNG]
> Nur für **$A$ wahr und $B$ falsch** – genau der eine Fall, in dem die Implikation falsch ist.

## Checkliste – das kann ich

- [ ] Ich erkenne, ob ein Satz eine Aussage ist (und warum Fragen, Befehle und Terme keine sind).
- [ ] Ich kenne die Wahrheitstafel aller fünf Junktoren auswendig.
- [ ] Ich weiß, dass eine Implikation mit falscher Voraussetzung immer wahr ist.
- [ ] Ich übersetze Sätze mit „aber“, „weder … noch“, „es sei denn“ und „genau dann, wenn“ in Formeln.
- [ ] Ich verneine zusammengesetzte Aussagen richtig (De Morgan).
- [ ] Ich stelle eine Wahrheitstafel mit 3 Aussagen (8 Zeilen) auf und erkenne Tautologien und Kontradiktionen.
- [ ] Ich löse Logikrätsel, indem ich unmögliche Zeilen streiche.

## Test

> [!FRAGE]
> Welcher der folgenden Ausdrücke ist eine Aussage?
> - [ ] „Wie viele Studierende sitzen im Hörsaal?“
> - [ ] $3 \cdot 8 + 2$
> - [x] $5 < 2$
> - [ ] „Rechnen Sie Aufgabe 3!“
>
> $5 < 2$ ist eine (falsche) Aussage – sie hat einen Wahrheitswert. Frage und Aufforderung haben keinen, und $3 \cdot 8 + 2$ ist nur ein Term, der eine Zahl ergibt.

> [!FRAGE]
> Wann ist die Implikation $A \Rightarrow B$ falsch?
> - [ ] Wenn $A$ falsch und $B$ wahr ist
> - [x] Wenn $A$ wahr und $B$ falsch ist
> - [ ] Wenn $A$ und $B$ beide falsch sind
> - [ ] Wenn $A$ und $B$ verschiedene Buchstaben sind
>
> Die Implikation ist nur im Fall „$A$ wahr, $B$ falsch“ falsch. Ist $A$ falsch, ist sie immer wahr – auch wenn $B$ wahr oder falsch ist.

> [!FRAGE]
> Wie lautet die Verneinung von „Gabriel ist groß und schwarzhaarig“?
> - [x] Gabriel ist nicht groß oder nicht schwarzhaarig.
> - [ ] Gabriel ist nicht groß und nicht schwarzhaarig.
> - [ ] Gabriel ist klein und blond.
> - [ ] Gabriel ist groß oder schwarzhaarig.
>
> De Morgan: $\neg(G \land S) = \neg G \lor \neg S$. „Nicht groß und nicht schwarzhaarig“ ist der typische Fehler – es reicht, wenn eine der beiden Eigenschaften fehlt.

> [!FRAGE]
> Welche Formel passt zu „Maximilian ist faul, aber nicht dumm“ ($F$ = faul, $D$ = dumm)?
> - [ ] $F \lor \neg D$
> - [x] $F \land \neg D$
> - [ ] $F \Rightarrow \neg D$
> - [ ] $\neg(F \land D) \Leftrightarrow F$
>
> „aber“ bedeutet logisch „und“. Mit „oder“ wäre der Satz schon wahr, wenn Maximilian nur nicht dumm ist.

> [!FRAGE]
> Was ist $A \lor \neg A$?
> - [x] Eine Tautologie – immer wahr
> - [ ] Eine Kontradiktion – immer falsch
> - [ ] Wahr genau dann, wenn $A$ wahr ist
> - [ ] Keine Aussage, weil $A$ zweimal vorkommt
>
> Entweder $A$ oder $\neg A$ ist wahr – also ist die „oder“-Verknüpfung immer wahr. $A \land \neg A$ wäre dagegen eine Kontradiktion.

> [!FRAGE]
> Wie viele Zeilen hat eine Wahrheitstafel mit den drei elementaren Aussagen $A$, $B$ und $C$?
> - [ ] $3$
> - [ ] $6$
> - [x] $8$
> - [ ] $9$
>
> Jede Aussage kann w oder f sein: $2 \cdot 2 \cdot 2 = 2^3 = 8$ Kombinationen. $6 = 2 \cdot 3$ ist der typische Rechenfehler.

> [!FRAGE]
> Welche Aussage ist gleichwertig zu $A \Rightarrow B$?
> - [ ] $B \Rightarrow A$
> - [x] $\neg B \Rightarrow \neg A$
> - [ ] $\neg A \Rightarrow \neg B$
> - [ ] $A \land B$
>
> Das ist die Kontraposition. Die Umkehrung $B \Rightarrow A$ und $\neg A \Rightarrow \neg B$ sind **nicht** gleichwertig – ein beliebter Fehler.

> [!FRAGE]
> Stimmt die Implikation „Wenn $f'(x_0) = 0$, dann hat $f$ bei $x_0$ einen Extremwert“?
> - [ ] Ja, das ist genau die Bedingung für Extremwerte.
> - [x] Nein – $f(x) = x^3$ hat $f'(0) = 0$, aber bei $0$ keinen Extremwert.
> - [ ] Ja, aber nur für Polynome.
> - [ ] Nein, weil $f'(x_0)$ nie $0$ sein kann.
>
> $f'(x_0) = 0$ ist nur **notwendig**, nicht hinreichend. Bei $x^3$ liegt an der Stelle $0$ ein Sattelpunkt.
