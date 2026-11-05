---
titel: Aussageformen, Lösungsmengen und Quantoren
typ: uebung
uebung: 3
teil: 1
datum: 2026-11-05
kurz: Aussage, Aussageform oder Term? Lösungsmengen bestimmen, allgemeingültig/unerfüllbar, ∀ und ∃ übersetzen und verneinen.
---

## Worum geht's?

Viele mathematische Sätze enthalten Variablen: „$x^2 \ge 0$“. Ob so ein Satz wahr ist, hängt davon ab, was man für $x$ einsetzt – oder ob er „für alle $x$“ gemeint ist. Hier lernst du, Aussagen von Aussageformen zu unterscheiden, Lösungsmengen zu bestimmen und mit den Quantoren $\forall$ („für alle“) und $\exists$ („es gibt“) zu arbeiten.

## Begriffe

> [!DEFINITION] Aussageform
> Ein Ausdruck mit (mindestens) einer **freien Variablen**, der erst durch Einsetzen eines Wertes zu einer Aussage wird. Beispiel: „$x > 4$“ – für $x = 5$ wahr, für $x = 2$ falsch.

**Aussage, Aussageform oder Term?**

| Ausdruck | Typ | Warum |
|---|---|---|
| $x + 3 = 7$ | Aussageform | freie Variable $x$ |
| „$x$ ist gerade für $x = 2$“ | Aussage (wahr) | $x$ ist festgelegt |
| $\forall x \in \mathbb{R}: x^2 \ge 0$ | Aussage (wahr) | $x$ ist durch $\forall$ gebunden |
| $a^2 + b^2$ | Term | auch nach dem Einsetzen nur eine Zahl, kein Wahrheitswert |

> [!DEFINITION] Definitionsbereich
> Die Menge $\mathbb{D}$ aller Werte, die man für die Variable einsetzen darf.

> [!DEFINITION] Lösungsmenge
> Die Menge $\mathbb{L}$ aller Werte aus $\mathbb{D}$, für die die Aussageform **wahr** wird.

> [!DEFINITION] allgemeingültig
> Eine Aussageform ist allgemeingültig (eine Tautologie), wenn sie für **jedes** Element des Definitionsbereichs wahr ist: $\mathbb{L} = \mathbb{D}$.

> [!DEFINITION] unerfüllbar
> Eine Aussageform ist unerfüllbar (eine Kontradiktion), wenn sie für **kein** Element wahr ist: $\mathbb{L} = \emptyset$ (leere Menge).

## Zahlbereiche

| Zeichen | Name | Beispiele |
|---|---|---|
| $\mathbb{N}$ | natürliche Zahlen | $1, 2, 3, \dots$ (manchmal mit $0$) |
| $\mathbb{Z}$ | ganze Zahlen | $\dots, -2, -1, 0, 1, 2, \dots$ |
| $\mathbb{Q}$ | rationale Zahlen (Brüche) | $\frac{1}{2}$, $-\frac{3}{4}$, $0{,}\overline{3}$ |
| $\mathbb{R}$ | reelle Zahlen | alle Zahlen auf dem Zahlenstrahl, auch $\sqrt{2}$, $\pi$ |

Es gilt $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

> [!ACHTUNG]
> Periodische Neunen: $2{,}\overline{9} = 3$. Deshalb gilt z. B. $3 \in (0;\, 2{,}\overline{9}\,]$.

## Quantoren

> [!DEFINITION] Allquantor
> $\forall x \in M: A(x)$ – „**für alle** $x$ aus $M$ gilt $A(x)$“.

> [!DEFINITION] Existenzquantor
> $\exists x \in M: A(x)$ – „**es gibt (mindestens) ein** $x$ aus $M$ mit $A(x)$“.

> [!MERKE] Die Reihenfolge der Quantoren zählt
> - $\forall x \;\exists y: x < y$ – „Zu **jeder** Zahl gibt es eine größere.“ → wahr in $\mathbb{R}$ (das $y$ darf von $x$ abhängen).
> - $\exists y \;\forall x: x < y$ – „Es gibt **eine** Zahl, die größer als alle ist.“ → falsch in $\mathbb{R}$.

> [!FORMEL] Quantoren verneinen
> $$
> \neg\big(\forall x: A(x)\big) \Leftrightarrow \exists x: \neg A(x) \qquad \neg\big(\exists x: A(x)\big) \Leftrightarrow \forall x: \neg A(x)
> $$
> Jeder Quantor kippt ($\forall \leftrightarrow \exists$), die Reihenfolge bleibt, und die Bedingung am Ende wird verneint.

## So gehst du vor

**Lösungsmenge bestimmen**

1. Definitionsbereich ansehen ($\mathbb{N}$ oder $\mathbb{R}$?).
2. Bei Gleichungen/Ungleichungen umformen (nur Äquivalenzumformungen).
3. Bei „genau dann, wenn“ oder kleinen Bereichen die Werte einzeln durchgehen.
4. Prüfen: $\mathbb{L} = \mathbb{D}$ → allgemeingültig; $\mathbb{L} = \emptyset$ → unerfüllbar.

**Ausdruck mit Quantoren übersetzen oder verneinen**

1. Von links nach rechts lesen: $\forall$ = „für alle“, $\exists$ = „es gibt“.
2. Verneinen: jeden Quantor tauschen und den Rest verneinen ($=$ wird $\ne$, $<$ wird $\ge$, $A$ wird $\neg A$).
3. Bei „wenn … dann“ in der Mitte: $\neg(P \Rightarrow Q) \Leftrightarrow P \land \neg Q$.

## Beispiele

> [!BEISPIEL] Lösungsmengen
> - $\mathbb{D} = \mathbb{N}$: „$x < 12$ und $x$ ist durch $5$ teilbar“ → $\mathbb{L} = \{5, 10\}$
> - $\mathbb{D} = \mathbb{R}$: $3x = 0 \cdot x$ → $3x = 0$ → $\mathbb{L} = \{0\}$
> - $\mathbb{D} = \mathbb{R}$: $x + 1 = x + 2$ → $1 = 2$ → $\mathbb{L} = \emptyset$, unerfüllbar
> - $\mathbb{D} = \mathbb{R}$: $(x - 1)^2 \ge 0$ → $\mathbb{L} = \mathbb{R}$, allgemeingültig

> [!BEISPIEL] „genau dann, wenn“ einzeln prüfen
> $\mathbb{D} = \mathbb{N}$: „$x < 4$ genau dann, wenn $x > 1$“
>
> | $x$ | $x < 4$ | $x > 1$ | gleich? |
> |---|---|---|---|
> | 1 | w | f | nein |
> | 2 | w | w | **ja** |
> | 3 | w | w | **ja** |
> | 4 und größer | f | w | nein |
>
> $\mathbb{L} = \{2, 3\}$

> [!BEISPIEL] Verneinen mit Quantoren
> „Jeder Studierende hat mindestens eine Lieblingsvorlesung.“
> $$
> \forall x \in S \;\exists v \in V: \text{mag}(x, v)
> $$
> Verneinung: $\exists x \in S \;\forall v \in V: \neg\,\text{mag}(x, v)$ – „Es gibt einen Studierenden, der **keine** Vorlesung mag.“

> [!BEISPIEL] Wahr oder falsch?
> $\forall x, z \in \mathbb{R} \;\exists y \in \mathbb{R}: x + y = z$ ist **wahr** – man nimmt einfach $y = z - x$.
> Mit Mal statt Plus ($x \cdot y = z$) ist es **falsch**: Für $x = 0$, $z = 1$ gibt es kein passendes $y$.

## Typische Fehler

> [!ACHTUNG]
> - „Für alle“ verneinen als „für alle nicht“ – richtig ist „es gibt eins, für das nicht“.
> - Die Quantoren beim Verneinen in der Reihenfolge vertauschen – die Reihenfolge bleibt gleich, nur $\forall$ und $\exists$ tauschen.
> - Einen Term ($a^2 + b^2$) für eine Aussageform halten – ohne $=$, $<$, $\le$ … gibt es keinen Wahrheitswert.
> - Bei $\mathbb{D} = \mathbb{N}$ negative Zahlen oder Brüche in die Lösungsmenge schreiben.

> [!TIPP]
> Wenn der Kurs nicht sagt, ob $0 \in \mathbb{N}$ ist, schreib es kurz dazu („mit $\mathbb{N} = \{1, 2, 3, \dots\}$“).

## Selbsttest

> [!AUFGABE] Aufgabe 1
> Aussage, Aussageform oder Term? a) $x \cdot 0 = 0$ b) $\exists x \in \mathbb{N}: x^2 = 2$ c) $7 \cdot y - 3$

> [!ANSATZ]
> Gibt es eine freie Variable? Ist sie durch einen Quantor gebunden? Gibt es überhaupt ein Vergleichszeichen?

> [!LOESUNG]
> - a) Aussageform (freie Variable $x$; allgemeingültig)
> - b) Aussage – falsch, denn keine natürliche Zahl hat das Quadrat $2$
> - c) Term

> [!AUFGABE] Aufgabe 2
> Bestimme $\mathbb{L}$ für $\mathbb{D} = \mathbb{R}$: $2 \cdot x = x + x$. Ist die Aussageform allgemeingültig oder unerfüllbar?

> [!ANSATZ]
> Rechte Seite zusammenfassen und vergleichen.

> [!LOESUNG]
> $x + x = 2x$, also gilt die Gleichung für jedes $x$: $\mathbb{L} = \mathbb{R}$ – **allgemeingültig**.

> [!AUFGABE] Aufgabe 3
> Verneine formal und sprachlich: $\forall x \in M \;\exists y \in M: F(x, y)$ mit $F(x, y)$ = „$x$ ist mit $y$ befreundet“.

> [!ANSATZ]
> Quantoren tauschen, Reihenfolge behalten, $F$ verneinen.

> [!LOESUNG]
> $\exists x \in M \;\forall y \in M: \neg F(x, y)$ – „Es gibt jemanden in $M$, der mit niemandem in $M$ befreundet ist.“

## Checkliste – das kann ich

- [ ] Ich unterscheide Aussage, Aussageform und Term.
- [ ] Ich bestimme Lösungsmengen in $\mathbb{N}$ und in $\mathbb{R}$.
- [ ] Ich erkenne allgemeingültige ($\mathbb{L} = \mathbb{D}$) und unerfüllbare ($\mathbb{L} = \emptyset$) Aussageformen.
- [ ] Ich übersetze Ausdrücke mit $\forall$ und $\exists$ in normale Sprache und zurück.
- [ ] Ich weiß, dass die Reihenfolge der Quantoren die Bedeutung ändert.
- [ ] Ich verneine Ausdrücke mit Quantoren formal und sprachlich.

## Test

> [!FRAGE]
> Was ist „$x + 2 = 5$“ (ohne weitere Angabe)?
> - [ ] Eine wahre Aussage
> - [x] Eine Aussageform
> - [ ] Ein Term
> - [ ] Eine Tautologie
>
> Die Variable $x$ ist frei – erst durch Einsetzen entsteht eine Aussage (für $x = 3$ wahr). Ein Term wäre es nur ohne Gleichheitszeichen.

> [!FRAGE]
> Welche Lösungsmenge hat $0 \cdot x = 4 \cdot x$ über $\mathbb{D} = \mathbb{R}$?
> - [x] $\mathbb{L} = \{0\}$
> - [ ] $\mathbb{L} = \mathbb{R}$
> - [ ] $\mathbb{L} = \emptyset$
> - [ ] $\mathbb{L} = \{4\}$
>
> $0 = 4x$ gilt nur für $x = 0$. Wer $0 \cdot x$ für „$x$“ hält, landet fälschlich bei $\mathbb{L} = \emptyset$.

> [!FRAGE]
> Wann heißt eine Aussageform unerfüllbar?
> - [ ] Wenn sie für jedes Element des Definitionsbereichs wahr ist
> - [x] Wenn ihre Lösungsmenge leer ist
> - [ ] Wenn sie mehr als eine Variable enthält
> - [ ] Wenn genau eine Lösung existiert
>
> Unerfüllbar heißt: kein Wert macht sie wahr, $\mathbb{L} = \emptyset$ (Kontradiktion). Immer wahr wäre „allgemeingültig“.

> [!FRAGE]
> Wie lautet die Verneinung von $\forall x \in \mathbb{R}: x^2 > 0$?
> - [ ] $\forall x \in \mathbb{R}: x^2 \le 0$
> - [x] $\exists x \in \mathbb{R}: x^2 \le 0$
> - [ ] $\exists x \in \mathbb{R}: x^2 > 0$
> - [ ] $\neg x \in \mathbb{R}: x^2 < 0$
>
> $\forall$ wird zu $\exists$ und $>$ wird zu $\le$. „Für alle … $\le 0$“ ist der typische Fehler. (Die Verneinung ist hier wahr: $x = 0$.)

> [!FRAGE]
> Welche Aussage ist in $\mathbb{R}$ wahr?
> - [x] $\forall x \;\exists y: y > x$
> - [ ] $\exists y \;\forall x: y > x$
> - [ ] $\forall x: x > x + 1$
> - [ ] $\exists x: x^2 < 0$
>
> Zu jeder Zahl gibt es eine größere (z. B. $y = x + 1$). Eine Zahl, die größer als **alle** ist, gibt es dagegen nicht – die Reihenfolge der Quantoren macht den Unterschied.

> [!FRAGE]
> Was ist $a^2 + b^2$?
> - [ ] Eine Aussage
> - [ ] Eine Aussageform
> - [x] Ein Term – weder Aussage noch Aussageform
> - [ ] Eine Kontradiktion
>
> Ohne Vergleichszeichen gibt es keinen Wahrheitswert – auch nicht nach dem Einsetzen. Deshalb ist es keine Aussageform, obwohl Variablen vorkommen.

> [!FRAGE]
> Für $\mathbb{D} = \mathbb{N}$: Welche Lösungsmenge hat „$x < 5$ genau dann, wenn $x > 2$“?
> - [ ] $\mathbb{L} = \{1, 2, 3, 4\}$
> - [x] $\mathbb{L} = \{3, 4\}$
> - [ ] $\mathbb{L} = \{3, 4, 5\}$
> - [ ] $\mathbb{L} = \mathbb{N}$
>
> Die Aussageform ist wahr, wenn beide Teile **gleich** sind. Bei $3$ und $4$ sind beide wahr; bei $1, 2$ ist nur der erste wahr, ab $5$ nur der zweite.
