---
titel: Mathematische Beweise – alle Beweisverfahren
typ: uebung
uebung: 3
teil: 2
datum: 2026-11-05
kurz: Vorlesung Thema 2 – Gegenbeispiel, Nachrechnen, direkter Beweis, Kettenschluss, Fallunterscheidung, Widerspruch, Kontraposition, vollständige Induktion – mit den Vorlesungsübungen 2.1–2.10.
---

## Worum geht's?

Ein mathematischer Satz gilt erst, wenn er **bewiesen** ist. Ein Beweis ist eine Kette logischer Schlüsse, die von sicheren Voraussetzungen (Axiomen, bereits bewiesenen Sätzen) zur Behauptung führt. Die meisten Sätze haben die Form $A \Rightarrow B$ – also reicht es, Implikationen beweisen zu können. Dafür gibt es eine Handvoll Standardverfahren, die du erkennen und anwenden können musst.

## Begriffe

> [!DEFINITION] Vermutung
> Eine Aussage, von der man (noch) nicht weiß, ob sie wahr oder falsch ist.

> [!DEFINITION] mathematischer Satz
> Eine Aussage, die als wahr **nachgewiesen** ist – durch einen Beweis.

> [!DEFINITION] Beweis
> Eine Folge logischer, widerspruchsfreier Schlüsse, die auf Axiomen (Annahmen) und/oder bereits bekannten Sätzen beruht und zeigt, dass eine Aussage wahr ist.

| Bezeichnung | Bedeutung |
|---|---|
| Hilfssatz / Lemma | technische Vorbereitung oder Teilergebnis für einen Satz |
| Folgerung / Korollar | folgt ohne großen Aufwand aus einem Satz |
| Proposition | lateinisch für „Satz“, gleichbedeutend |
| Theorem | ein wichtiger Satz … |
| Hauptsatz / Fundamentalsatz | … ein noch wichtigerer bzw. noch viel wichtigerer Satz |

> [!DEFINITION] Voraussetzung
> In $A \Rightarrow B$ die Aussage $A$ (auch **Prämisse**).

> [!DEFINITION] Behauptung
> In $A \Rightarrow B$ die Aussage $B$, solange die Implikation eine Vermutung ist. Ist der Satz bewiesen, heißt $B$ **Schlussfolgerung** oder **Konklusion**.

> [!MERKE] Wann ist $A \Rightarrow B$ bewiesen?
> Wenn aus „$A$ wahr“ auch „$B$ wahr“ folgt. Gibt es dagegen einen Fall mit „$A$ wahr“ und „$B$ falsch“, ist die Negation $\neg(A \Rightarrow B)$ wahr – man schreibt dann $A \nRightarrow B$.

> [!ACHTUNG] Gültigkeitsbereich
> Ein Beweis muss **in voller Allgemeinheit** gelten – für alle Objekte, auf die sich der Satz bezieht. Es reicht **nicht**, den Satz an ein paar Beispielen zu prüfen!

> [!DEFINITION] konstruktiver Beweis
> Der Beweis gibt die Lösung explizit an oder liefert ein Verfahren, mit dem man sie berechnen kann. Ein **nicht-konstruktiver Beweis** zeigt nur, dass eine Lösung existiert, aber nicht, wie man zu ihr kommt.

## Hilfsmittel: gerade und ungerade Zahlen

> [!FORMEL] gerade und ungerade
> $n$ ist **gerade**, wenn $n = 2m$ für eine natürliche Zahl $m$.
> $n$ ist **ungerade**, wenn $n = 2m + 1$ (mit $m = 0, 1, 2, \dots$).

Diese Schreibweise ist der Schlüssel zu fast allen Beweisen über gerade/ungerade Zahlen: Einsetzen, ausrechnen, $2$ ausklammern.

## Die Beweisverfahren

> [!FORMEL] 1. Gegenbeispiel (Falsifikation)
> Um eine Allaussage „$\forall x: A(x)$“ zu **widerlegen**, reicht **ein** Beispiel, bei dem die Voraussetzung erfüllt ist, aber die Behauptung nicht. Grundlage:
> $$
> \neg\big(\forall x: A(x)\big) \Leftrightarrow \exists x: \neg A(x)
> $$

> [!FORMEL] 2. Beweis durch Nachrechnen
> Gleichungen oder Ungleichungen durch Umformen auf eine offensichtlich wahre Aussage zurückführen.
> **Achtung:** Es dürfen **nur Äquivalenzumformungen** verwendet werden (z. B. nicht mit $0$ multiplizieren, nicht einfach quadrieren).

> [!FORMEL] 3. Direkter Beweis (Abtrennungsregel, modus ponens)
> Unter der Voraussetzung $A$ wird $B$ durch logisches Schließen gefolgert. Grundlage ist die Tautologie
> $$
> A \land (A \Rightarrow B) \Rightarrow B
> $$
> Sind $A$ und $A \Rightarrow B$ wahr, muss $B$ wahr sein.

> [!FORMEL] 4. Kettenschluss
> Ein direkter Beweis in mehreren Zwischenschritten $A \Rightarrow C_1 \Rightarrow C_2 \Rightarrow \dots \Rightarrow C_n \Rightarrow B$:
> $$
> A \land (A \Rightarrow C_1) \land \big(\forall k = 1, \dots, n-1: (C_k \Rightarrow C_{k+1})\big) \land (C_n \Rightarrow B) \Rightarrow B
> $$

> [!FORMEL] 5. Fallunterscheidung
> Man zerlegt die Voraussetzung $A$ in einfachere Fälle $A = A_1 \lor A_2 \lor \dots \lor A_n$ und beweist jede Implikation $A_1 \Rightarrow B$, …, $A_n \Rightarrow B$ einzeln. Die Fälle müssen **alle Möglichkeiten** abdecken.

> [!FORMEL] 6. Widerspruchsbeweis (indirekter Beweis)
> Man nimmt die Voraussetzung $A$ **und** das Gegenteil der Behauptung $\neg B$ an und leitet einen Widerspruch her ($C$ und $\neg C$ gleichzeitig):
> $$
> A \Rightarrow B \;\Leftrightarrow\; \big((A \land \neg B) \Rightarrow (C \land \neg C)\big)
> $$
> Weil $C \land \neg C$ nie wahr sein kann, muss $\neg B$ falsch sein – also gilt $B$.

> [!FORMEL] 7. Kontraposition
> Statt $A \Rightarrow B$ beweist man das gleichwertige $\neg B \Rightarrow \neg A$: „Wenn die Behauptung falsch wäre, wäre auch die Voraussetzung falsch.“ Grundlage: $(\neg B \Rightarrow \neg A) \Leftrightarrow (A \Rightarrow B)$.

> [!FORMEL] 8. Vollständige Induktion
> Für Aussagen „$\forall n \in \mathbb{N}: A(n)$“:
> 1. **Induktionsanfang:** Zeige, dass $A(1)$ wahr ist.
> 2. **Induktionsschritt:** Nimm für ein beliebiges $n$ an, dass $A(n)$ gilt (**Induktionsannahme**), und folgere daraus $A(n + 1)$.
>
> Grundlage: $\forall n \in \mathbb{N}: A(n) \Leftrightarrow A(1) \land \big(\forall n \in \mathbb{N}: A(n) \Rightarrow A(n+1)\big)$. Man kann auch bei $n = k$ starten – dann gilt die Aussage für alle $n \ge k$.

> [!TIPP] Welches Verfahren wann?
> - „Für alle …“ und du glaubst, es stimmt **nicht** → Gegenbeispiel.
> - Ungleichung/Gleichung → Nachrechnen (Quadrate erzeugen: $(\dots)^2 \ge 0$).
> - „Wenn …, dann …“ mit gerade/ungerade → direkt einsetzen ($2m$, $2m + 1$).
> - Behauptung mit „oder“ oder schwer greifbare Behauptung → Kontraposition oder Widerspruch.
> - Aussage über **alle natürlichen Zahlen** $n$, z. B. Summenformeln oder Teilbarkeit → Induktion.
> - Beträge, Vorzeichen, „$x \le 0$ oder $x > 0$“ → Fallunterscheidung.

## Beispiele – die Vorlesungsübungen 2.1–2.10

> [!BEISPIEL] Übung 2.1 – Vorsicht, Falle!
> „Für alle $x \in \mathbb{R}$ mit $x > 0$ gilt $x + \frac{1}{x} > 2$.“
>
> Die Aussage stimmt **nicht**: Für $x = 1$ ist $1 + \frac{1}{1} = 2$, und $2 > 2$ ist falsch. Ein Gegenbeispiel widerlegt die Allaussage. (Richtig wäre $x + \frac{1}{x} \ge 2$.)

> [!BEISPIEL] Übung 2.2 – Nachrechnen
> Für alle $x \in \mathbb{R}$ gilt $x^6 + 3x^4 + 4x^2 - 40x + 95 \ge -5$.
>
> Äquivalenzumformungen: $+5$ auf beiden Seiten und $4x^2 - 40x + 100 = (2x - 10)^2$ erkennen:
> $$
> x^6 + 3x^4 + 4x^2 - 40x + 100 \ge 0 \;\Leftrightarrow\; x^6 + 3x^4 + (2x - 10)^2 \ge 0
> $$
> Jeder Summand ist $\ge 0$ (gerade Potenz bzw. Quadrat), also ist die Summe $\ge 0$. $\blacksquare$

> [!BEISPIEL] Übung 2.3 – direkter Beweis
> Ist $n$ ungerade, dann ist $n^2$ ungerade.
>
> $n = 2m + 1 \Rightarrow n^2 = 4m^2 + 4m + 1 = 2\,(2m^2 + 2m) + 1$ – also ungerade. $\blacksquare$

> [!BEISPIEL] Übung 2.4 – Kettenschluss
> Für alle $a, b \in \mathbb{R}$ mit $a \ne b$ gilt $a^2 + b^2 > 2ab$.
> $$
> a \ne b \;\Rightarrow\; a - b \ne 0 \;\Rightarrow\; (a - b)^2 > 0 \;\Rightarrow\; a^2 - 2ab + b^2 > 0 \;\Rightarrow\; a^2 + b^2 > 2ab \quad \blacksquare
> $$

> [!BEISPIEL] Übung 2.5 – Fallunterscheidung
> Für alle $x \in \mathbb{R}$ gilt $x \le x^2 + 1$.
>
> - Fall $x \le 0$: $x \le 0 < 1 \le x^2 + 1$
> - Fall $0 < x \le 1$: $x \le 1 \le x^2 + 1$
> - Fall $x > 1$: $x < x \cdot x = x^2 < x^2 + 1$
>
> Die drei Fälle decken alle reellen Zahlen ab. $\blacksquare$ (Kürzer per Nachrechnen: $x^2 - x + 1 = (x - \frac{1}{2})^2 + \frac{3}{4} > 0$.)

> [!BEISPIEL] Übung 2.6 – Widerspruchsbeweis
> Ist $n$ ungerade, dann ist $n^2$ ungerade.
>
> Annahme: $n$ ungerade **und** $n^2$ gerade. Aus $n = 2m + 1$ folgt $n^2 = 2\,(2m^2 + 2m) + 1$, also ist $n^2$ ungerade – **Widerspruch** zur Annahme. Also ist $n^2$ ungerade. $\blacksquare$

> [!BEISPIEL] Übung 2.7 – $\sqrt{2}$ ist irrational (Widerspruch)
> Annahme: $\sqrt{2} = \frac{p}{q}$ mit natürlichen Zahlen $p, q$, **vollständig gekürzt**.
>
> 1. Quadrieren: $2 = \frac{p^2}{q^2}$, also $p^2 = 2q^2$ → $p^2$ ist gerade → $p$ ist gerade (ungerade Zahlen haben ungerade Quadrate, Übung 2.3).
> 2. Also $p = 2r$: $4r^2 = 2q^2$, also $q^2 = 2r^2$ → $q^2$ gerade → $q$ gerade.
> 3. $p$ und $q$ sind beide gerade – **Widerspruch** zu „vollständig gekürzt“. $\blacksquare$

> [!BEISPIEL] Übung 2.8 – Kontraposition
> Für $a, b \in \mathbb{N}$: Ist $a \cdot b$ gerade, dann ist $a$ gerade oder $b$ gerade.
>
> Kontraposition: Sind $a$ **und** $b$ ungerade, dann ist $a \cdot b$ ungerade.
> $a = 2k + 1$, $b = 2l + 1$: $\;a \cdot b = 4kl + 2k + 2l + 1 = 2\,(2kl + k + l) + 1$ – ungerade. $\blacksquare$

> [!BEISPIEL] Übung 2.9 – Induktion
> Das Quadrat einer geraden natürlichen Zahl ist gerade. Mit $n = 2k$ per Induktion über $k$:
>
> - Anfang $k = 1$: $n = 2$, $n^2 = 4$ ist gerade.
> - Schritt: $(2k)^2$ sei gerade. Dann $(2(k+1))^2 = 4k^2 + 8k + 4 = (2k)^2 + 2\,(4k + 2)$ – gerade plus gerade ist gerade. $\blacksquare$
>
> (Direkt geht es noch schneller: $n = 2m \Rightarrow n^2 = 4m^2 = 2\,(2m^2)$.)

> [!BEISPIEL] Übung 2.10 – Gaußsche Summenformel (Induktion)
> Für alle $n \in \mathbb{N}$ gilt $\sum_{i=1}^{n} i = 1 + 2 + \dots + n = \frac{n\,(n+1)}{2}$.
>
> - **Induktionsanfang** $n = 1$: $1 = \frac{1 \cdot 2}{2}$ ✓
> - **Induktionsannahme:** $\sum_{i=1}^{n} i = \frac{n\,(n+1)}{2}$ gilt für ein festes $n$.
> - **Induktionsschritt:**
> $$
> \sum_{i=1}^{n+1} i = \frac{n\,(n+1)}{2} + (n + 1) = (n + 1)\left(\frac{n}{2} + 1\right) = \frac{(n+1)(n+2)}{2} \quad \blacksquare
> $$

## Typische Fehler

> [!ACHTUNG]
> - Einen Satz „beweisen“, indem man ein paar Zahlen einsetzt – das zeigt nichts (Gültigkeitsbereich!).
> - Mit einer **falschen Voraussetzung** starten (z. B. $\frac{1}{x} = 0$) – daraus folgt alles, auch $1 = 0$.
> - Beim Nachrechnen Umformungen benutzen, die keine Äquivalenzumformungen sind (z. B. beide Seiten quadrieren).
> - Kontraposition falsch bilden: Zu $A \Rightarrow B$ gehört $\neg B \Rightarrow \neg A$, **nicht** $\neg A \Rightarrow \neg B$ oder $B \Rightarrow A$.
> - Induktion für reelle Zahlen verwenden – von $1$ aus mit $+1$ erreicht man nur $1, 2, 3, \dots$
> - Im Induktionsschritt die Induktionsannahme gar nicht benutzen.

## Selbsttest

> [!AUFGABE] Aufgabe 1
> Zeige direkt: Die Summe zweier gerader Zahlen ist gerade.

> [!ANSATZ]
> $n_1 = 2m_1$, $n_2 = 2m_2$ einsetzen und $2$ ausklammern.

> [!LOESUNG]
> $n_1 + n_2 = 2m_1 + 2m_2 = 2\,(m_1 + m_2)$ – gerade. $\blacksquare$

> [!AUFGABE] Aufgabe 2
> Widerlege: „Für alle $n \in \mathbb{N}$ ist $n^2 + n + 41$ eine Primzahl.“

> [!ANSATZ]
> Ein einziges Gegenbeispiel reicht. Probiere ein $n$, bei dem man $41$ ausklammern kann.

> [!LOESUNG]
> $n = 41$: $41^2 + 41 + 41 = 41 \cdot (41 + 1 + 1) = 41 \cdot 43$ – keine Primzahl. (Für $n = 1, \dots, 39$ kommt tatsächlich jedes Mal eine Primzahl heraus – deshalb reichen Beispiele nie als Beweis!)

> [!AUFGABE] Aufgabe 3
> Beweise per Induktion: $\sum_{i=1}^{n} (2i - 1) = n^2$ (die Summe der ersten $n$ ungeraden Zahlen ist $n^2$).

> [!ANSATZ]
> Anfang $n = 1$. Im Schritt: $\sum_{i=1}^{n+1} (2i - 1) = \sum_{i=1}^{n} (2i - 1) + (2(n+1) - 1)$ und die Annahme einsetzen.

> [!LOESUNG]
> Anfang: $2 \cdot 1 - 1 = 1 = 1^2$ ✓. Schritt:
> $$
> \sum_{i=1}^{n+1} (2i - 1) = n^2 + 2n + 1 = (n + 1)^2 \quad \blacksquare
> $$

> [!AUFGABE] Aufgabe 4
> Zeige per Kontraposition: Ist $n^2$ gerade, dann ist $n$ gerade.

> [!ANSATZ]
> Kontraposition: „Ist $n$ ungerade, dann ist $n^2$ ungerade.“ Das kennst du schon.

> [!LOESUNG]
> Kontraposition: $n = 2m + 1 \Rightarrow n^2 = 2\,(2m^2 + 2m) + 1$ ungerade. Also gilt die ursprüngliche Aussage. $\blacksquare$

## Checkliste – das kann ich

- [ ] Ich kenne die Begriffe Vermutung, Satz, Lemma, Korollar, Theorem, Voraussetzung und Behauptung.
- [ ] Ich weiß, warum ein paar Beispiele keinen Beweis ersetzen (Gültigkeitsbereich).
- [ ] Ich widerlege Allaussagen mit einem Gegenbeispiel.
- [ ] Ich führe Beweise durch Nachrechnen nur mit Äquivalenzumformungen.
- [ ] Ich beweise Aussagen über gerade/ungerade Zahlen direkt mit $2m$ und $2m + 1$.
- [ ] Ich kann Fallunterscheidung, Widerspruchsbeweis und Kontraposition unterscheiden und anwenden.
- [ ] Ich führe eine vollständige Induktion mit Anfang, Annahme und Schritt sauber durch.
- [ ] Ich kann zeigen, dass $\sqrt{2}$ irrational ist.

## Test

> [!FRAGE]
> Wie widerlegt man die Aussage „Für alle $x \in \mathbb{R}$ gilt $x^2 > x$“ am einfachsten?
> - [ ] Durch vollständige Induktion über $x$
> - [x] Mit einem Gegenbeispiel, z. B. $x = 1$
> - [ ] Indem man zeigt, dass sie für $x = 5$ und $x = 10$ gilt
> - [ ] Durch Quadrieren beider Seiten
>
> Für $x = 1$ ist $1 > 1$ falsch – ein Gegenbeispiel reicht, um eine Allaussage zu widerlegen. Beispiele, bei denen es klappt, beweisen dagegen nichts.

> [!FRAGE]
> Was beweist man bei der Kontraposition statt $A \Rightarrow B$?
> - [ ] $B \Rightarrow A$
> - [ ] $\neg A \Rightarrow \neg B$
> - [x] $\neg B \Rightarrow \neg A$
> - [ ] $A \land B$
>
> $(\neg B \Rightarrow \neg A)$ ist gleichwertig zu $(A \Rightarrow B)$. Die Umkehrung $B \Rightarrow A$ und $\neg A \Rightarrow \neg B$ sind es nicht – häufigster Fehler bei diesem Verfahren.

> [!FRAGE]
> Welche Schritte gehören zur vollständigen Induktion?
> - [x] Induktionsanfang und Induktionsschritt (mit Induktionsannahme)
> - [ ] Gegenbeispiel und Widerspruch
> - [ ] Drei Beispiele prüfen und verallgemeinern
> - [ ] Fallunterscheidung nach geraden und ungeraden $n$
>
> Man zeigt $A(1)$ (Anfang) und dass aus $A(n)$ immer $A(n+1)$ folgt (Schritt). Beispiele zu prüfen ist kein Beweis.

> [!FRAGE]
> Worauf beruht ein Widerspruchsbeweis von $A \Rightarrow B$?
> - [ ] Man prüft $B$ an möglichst vielen Beispielen.
> - [x] Man nimmt $A$ und $\neg B$ an und leitet einen Widerspruch $C \land \neg C$ her.
> - [ ] Man beweist stattdessen $B \Rightarrow A$.
> - [ ] Man zeigt, dass $A$ falsch ist.
>
> Führt die Annahme „$A$ und nicht $B$“ zu einem Widerspruch, kann $\neg B$ nicht stimmen – also gilt $B$. Zu zeigen, dass $A$ falsch ist, beweist die Behauptung nicht.

> [!FRAGE]
> Was ist beim Beweis durch Nachrechnen erlaubt?
> - [ ] Beliebige Umformungen, Hauptsache das Ergebnis stimmt
> - [ ] Beide Seiten quadrieren, um Wurzeln loszuwerden
> - [x] Nur Äquivalenzumformungen
> - [ ] Beide Seiten mit $0$ multiplizieren
>
> Nur bei Äquivalenzumformungen bleibt die Aussage gleichwertig. Quadrieren kann neue Lösungen erzeugen, und Multiplizieren mit $0$ macht jede Gleichung „wahr“.

> [!FRAGE]
> Warum ist $n = 2m + 1$ so nützlich?
> - [x] So schreibt man jede ungerade Zahl – damit kann man allgemein rechnen statt mit Beispielen.
> - [ ] Damit beweist man, dass $\sqrt{2}$ rational ist.
> - [ ] So schreibt man jede gerade Zahl.
> - [ ] Weil $2m + 1$ immer eine Primzahl ist.
>
> $2m + 1$ steht für **jede** ungerade Zahl; gerade Zahlen schreibt man als $2m$. Mit dieser Schreibweise gilt der Beweis in voller Allgemeinheit.

> [!FRAGE]
> Ist der Satz „Für alle $x > 0$ gilt $x + \frac{1}{x} > 2$“ wahr?
> - [ ] Ja, das zeigt man mit Nachrechnen.
> - [x] Nein – für $x = 1$ ergibt sich genau $2$.
> - [ ] Ja, aber nur für natürliche Zahlen.
> - [ ] Nein, weil $\frac{1}{x}$ für $x > 0$ nicht definiert ist.
>
> Bei $x = 1$ ist $1 + 1 = 2$, und $2 > 2$ ist falsch. Richtig wäre „$\ge 2$“ – eine typische Falle aus der Vorlesung (Übung 2.1).

> [!FRAGE]
> Was zeigt die Folgerung „$\frac{1}{x} = 0 \Rightarrow 1 = 0$“?
> - [ ] Dass $1 = 0$ gilt
> - [x] Nichts über $1 = 0$ – die Voraussetzung $\frac{1}{x} = 0$ ist nie wahr
> - [ ] Dass man nicht mit $x$ multiplizieren darf
> - [ ] Dass $x = 0$ sein muss
>
> Aus einer falschen Voraussetzung lässt sich alles folgern. Die Implikation ist wahr, beweist aber die Behauptung nicht, weil der Start nie erfüllt ist.
