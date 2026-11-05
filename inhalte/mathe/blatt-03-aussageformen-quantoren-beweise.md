---
titel: "Übungsblatt 3: Aussageformen, Quantoren, Beweise"
typ: blatt
uebung: 3
datum: 2026-11-05
kurz: Besprechung in KW 45 (02.11.–06.11.2026). Im Tutorium besprochen – A1 a, c · A2 a, c, e, g · A3 a, b, e, f · A4 · A5 i · A6 · A7 b · A8 · A9 · A10.
---

> [!MERKE] Im Tutorium besprochen
> A1 a), c) · A2 a), c), e), g) · A3 a), b), e), f) · A4 alle · A5 Aussage i) · A6 alle · A7 b) · A8 alle · A9 alle · A10 alle. Die restlichen Aufgaben dienen der eigenständigen Übung.

> [!AUFGABE] Aufgabe 1
> Entscheiden Sie für jede der folgenden formalen Aussagen, ob sie falsch oder richtig in die Alltagssprache übersetzt sind. (*Hinweis:* Es kann keine, genau eine oder mehr als eine der Aussagen richtig sein.) Gegeben sind die folgenden 5 elementaren Aussagen: $A_i$ = „Die Übungsaufgabe $i$ ist schwer.“ für $i = 1, \dots, 5$
>
> - a) $A_1 \land A_2 \Rightarrow \neg A_5$: „Wenn Aufgaben 1 und 2 schwer sind, dann auch Aufgabe 5.“
> - b) $\neg(A_3 \Leftrightarrow A_4)$: „Aufgabe 3 ist genau dann nicht schwer, wenn Aufgabe 4 nicht schwer ist.“
> - c) $(\neg A_1 \Rightarrow \neg A_2) \land A_5$: „Wenn Aufgabe 1 nicht schwer ist, dann auch Aufgabe 2, gleichzeitig ist Aufgabe 5 aber schwer.“
> - d) $(\neg A_4 \lor \neg A_5) \Rightarrow A_1$: „Wenn Aufgabe 4 oder 5 nicht schwer ist, dann ist Aufgabe 1 schwer.“
> - e) $A_2 \Rightarrow \neg(A_3 \land A_4)$: „Wenn Aufgabe 2 schwer ist, dann sind nicht beide Aufgaben 3 und 4 schwer.“

> [!ANSATZ]
> Übersetze jede Formel selbst Stück für Stück und vergleiche dann mit dem Satz. Achte genau darauf, **wo** das $\neg$ steht.

> [!LOESUNG] Lösungsvorschlag
> - a) **falsch** – $\neg A_5$ heißt „dann ist Aufgabe 5 **nicht** schwer“.
> - b) **falsch** – der Satz beschreibt $\neg A_3 \Leftrightarrow \neg A_4$, und das ist dasselbe wie $A_3 \Leftrightarrow A_4$. $\neg(A_3 \Leftrightarrow A_4)$ heißt dagegen: Genau eine der Aufgaben 3 und 4 ist schwer.
> - c) **richtig** – „dann auch Aufgabe 2“ meint „dann ist auch Aufgabe 2 nicht schwer“.
> - d) **richtig**
> - e) **richtig**

> [!AUFGABE] Aufgabe 2
> Bei welchen der folgenden Sätze bzw. Ausdrücke handelt es sich um Aussagen, bei welchen um Aussageformen?
>
> - a) $x^2 + 1 = 1 + x^2$
> - b) $A + B = 1$
> - c) $x$ ist gerade für $x = 2$.
> - d) $0 \le 0^2 + \sqrt{4} - 1$
> - e) $\frac{1}{0} = 0$
> - f) $2$ ist Lösung von $x > 4$.
> - g) $a^2 + b^2$
> - h) $\forall x, y \in \mathbb{R}: \frac{1}{1 + x^2 + y^2} \le 1$

> [!ANSATZ]
> Eine **Aussageform** enthält eine freie Variable und wird erst durch Einsetzen zur Aussage. Ist die Variable schon festgelegt (z. B. „für $x = 2$“) oder durch einen Quantor ($\forall$, $\exists$) gebunden, ist es eine **Aussage**. Ein **Term** ohne $=$, $<$, $\le$ … ist keins von beiden.

> [!LOESUNG] Lösungsvorschlag
> | | Ergebnis | Begründung |
> |---|---|---|
> | a) | Aussageform | freie Variable $x$ (wird für jedes $x$ wahr, ist also allgemeingültig) |
> | b) | Aussageform | freie Variablen $A$, $B$ |
> | c) | Aussage (wahr) | $x$ ist festgelegt: $2$ ist gerade |
> | d) | Aussage (wahr) | $0^2 + \sqrt{4} - 1 = 1$ und $0 \le 1$ |
> | e) | keine sinnvolle Aussage | $\frac{1}{0}$ ist nicht definiert – manche werten es als falsche Aussage, in der Übung vergleichen |
> | f) | Aussage (falsch) | $2 > 4$ stimmt nicht |
> | g) | weder noch (Term) | auch nach dem Einsetzen nur eine Zahl, kein Wahrheitswert |
> | h) | Aussage (wahr) | $x, y$ sind durch $\forall$ gebunden; der Nenner ist immer $\ge 1$ |

> [!AUFGABE] Aufgabe 3
> Der Definitionsbereich der folgenden Aussageformen ist angegeben. Bestimmen Sie die Lösungsmenge $\mathbb{L}$ der Aussageformen. Welche Aussageformen stellen Tautologien dar (sind **allgemeingültig**), welche Kontradiktionen (sind **unerfüllbar**)?
>
> Definitionsbereich $\mathbb{D} = \mathbb{N}$:
>
> - a) $x < 10$ und $x$ ist teilbar durch $4$.
> - c) $2 \cdot x$ ist gerade.
> - e) $x < 5$ genau dann, wenn $x > 2$.
>
> Definitionsbereich $\mathbb{D} = \mathbb{R}$:
>
> - b) $x^2 \ge 0$
> - d) $0 \cdot x = 5 \cdot x$
> - f) $0 + x = 5 + x$

> [!ANSATZ]
> Allgemeingültig heißt $\mathbb{L} = \mathbb{D}$, unerfüllbar heißt $\mathbb{L} = \emptyset$. Bei e) für $x = 1, 2, 3, \dots$ einzeln prüfen, ob beide Seiten gleich (beide wahr oder beide falsch) sind.

> [!LOESUNG] Lösungsvorschlag
> (mit $\mathbb{N} = \{1, 2, 3, \dots\}$; zählt im Kurs die $0$ dazu, kommt sie bei a) mit in die Lösungsmenge)
>
> - a) $\mathbb{L} = \{4, 8\}$ – weder allgemeingültig noch unerfüllbar
> - c) $\mathbb{L} = \mathbb{N}$ – **allgemeingültig** (Tautologie)
> - e) $\mathbb{L} = \{3, 4\}$ – für $x = 1, 2$ ist nur „$x < 5$“ wahr, ab $x = 5$ nur „$x > 2$“
> - b) $\mathbb{L} = \mathbb{R}$ – **allgemeingültig**
> - d) $0 = 5x \Leftrightarrow x = 0$, also $\mathbb{L} = \{0\}$
> - f) $0 + x = 5 + x \Leftrightarrow 0 = 5$, also $\mathbb{L} = \emptyset$ – **unerfüllbar** (Kontradiktion)

> [!AUFGABE] Aufgabe 4
> Betrachten Sie die folgende Aussage:
> $$
> \forall x, z \in \mathbb{R}\;\; \exists y \in \mathbb{R}: \; x \cdot y = z
> $$
> - a) Formulieren Sie die Aussage in natürlicher Sprache.
> - b) Verneinen Sie den Ausdruck sprachlich und formal.
> - c) Ist diese Aussage oder ihre Verneinung wahr?

> [!ANSATZ]
> Beim Verneinen wird aus $\forall$ ein $\exists$ und umgekehrt, und die Bedingung am Ende wird verneint. Für c): Was passiert bei $x = 0$?

> [!LOESUNG] Lösungsvorschlag
> - a) „Für alle reellen Zahlen $x$ und $z$ gibt es eine reelle Zahl $y$ mit $x \cdot y = z$.“
> - b) $\exists x, z \in \mathbb{R}\;\; \forall y \in \mathbb{R}: \; x \cdot y \ne z$ – „Es gibt reelle Zahlen $x$ und $z$, so dass für alle reellen $y$ gilt: $x \cdot y \ne z$.“
> - c) Die **Verneinung ist wahr**: Für $x = 0$ und $z = 1$ ist $0 \cdot y = 0 \ne 1$ für jedes $y$. Die ursprüngliche Aussage ist also falsch.

> [!AUFGABE] Aufgabe 5
> Sei $M$ die Menge der Studenten der Veranstaltung „Mathe für Wiwi“ an der Europa-Universität Viadrina. Betrachten Sie folgende Aussageformen für $x, y \in M$:
>
> - $L(x)$ = „$x$ ist laut während der Vorlesung.“
> - $Z(x)$ = „$x$ kann gut zuhören.“
> - $A(x, y)$ = „$x$ kann mit $y$ gut zusammen arbeiten.“
>
> a) Wandeln Sie folgende Aussagen in eine sprachliche Formulierung um:
>
> - i) $\big(\forall x \in M: \neg L(x)\big) \Rightarrow \big(\exists x \in M: Z(x)\big)$
> - ii) $\exists x \in M \;\forall y \in M: \neg A(x, y)$
>
> b) Verneinen Sie die Aussagen in a), und zwar sowohl formal als auch sprachlich.

> [!ANSATZ]
> Für i): $\neg(P \Rightarrow Q) \Leftrightarrow P \land \neg Q$. Für ii): Quantoren tauschen ($\exists \to \forall$, $\forall \to \exists$) und $\neg A$ wird zu $A$.

> [!LOESUNG] Lösungsvorschlag
> **a)**
> - i) „Wenn kein Student während der Vorlesung laut ist, dann gibt es mindestens einen Studenten, der gut zuhören kann.“
> - ii) „Es gibt einen Studenten, der mit keinem Studenten gut zusammenarbeiten kann.“
>
> **b)**
> - i) $\big(\forall x \in M: \neg L(x)\big) \land \big(\forall x \in M: \neg Z(x)\big)$ – „Kein Student ist während der Vorlesung laut, und kein Student kann gut zuhören.“
> - ii) $\forall x \in M \;\exists y \in M: A(x, y)$ – „Jeder Student kann mit mindestens einem Studenten gut zusammenarbeiten.“

> [!AUFGABE] Aufgabe 6
> Ist die Aussage „Jede Quadratzahl ist gerade.“ wahr oder falsch? Beweisen Sie!

> [!ANSATZ]
> Eine Aussage mit „jede“ ($\forall$) widerlegt man mit **einem einzigen Gegenbeispiel**.

> [!LOESUNG] Lösungsvorschlag
> **Falsch.** Gegenbeispiel: $9 = 3^2$ ist eine Quadratzahl, aber ungerade (ebenso $1 = 1^2$). Damit ist die Allaussage widerlegt (Beweis durch Gegenbeispiel).

> [!AUFGABE] Aufgabe 7
> Eine natürliche Zahl $n$ heißt ungerade, wenn es eine natürliche Zahl $m$ gibt, so dass $n = 2m + 1$ gilt, und gerade, wenn es eine natürliche Zahl $m$ gibt, so dass $n = 2m$ gilt.
>
> - a) Zeigen Sie durch *direkten Beweis*: Sind $n_1$ und $n_2$ ungerade Zahlen, dann bildet die Summe $n_1 + n_2$ eine gerade Zahl.
> - b) Zeigen Sie durch *Beweis durch Kontraposition*: Ist $n_1 + n_2$ eine ungerade Zahl, dann ist entweder $n_1$ eine gerade Zahl oder $n_2$ eine gerade Zahl.

> [!ANSATZ]
> a) Schreibe $n_1 = 2m_1 + 1$ und $n_2 = 2m_2 + 1$ und addiere. b) Kontraposition heißt: Zeige „nicht Behauptung ⇒ nicht Voraussetzung“. Was ist die Verneinung von „$n_1$ gerade oder $n_2$ gerade“?

> [!LOESUNG] Lösungsvorschlag
> **a)** $n_1 = 2m_1 + 1$, $n_2 = 2m_2 + 1$ mit natürlichen $m_1, m_2$. Dann
> $$
> n_1 + n_2 = 2m_1 + 2m_2 + 2 = 2\,(m_1 + m_2 + 1),
> $$
> und $m_1 + m_2 + 1$ ist eine natürliche Zahl. Also ist $n_1 + n_2$ gerade. $\blacksquare$
>
> **b)** Kontraposition: Statt „$n_1 + n_2$ ungerade ⇒ $n_1$ gerade oder $n_2$ gerade“ zeigen wir „$n_1$ ungerade **und** $n_2$ ungerade ⇒ $n_1 + n_2$ gerade“ (De Morgan). Das ist genau a) – also bewiesen.
> Dass nicht **beide** gerade sein können („entweder … oder“): Sind beide gerade, ist $2m_1 + 2m_2 = 2(m_1 + m_2)$ gerade – Widerspruch zu „$n_1 + n_2$ ungerade“. $\blacksquare$

> [!AUFGABE] Aufgabe 8
> Betrachten Sie folgende Behauptung: Für alle $n \in \mathbb{R}$ gilt $\frac{1}{n} \le 1$. Im Folgenden wird die Aussage durch vollständige Induktion gezeigt:
>
> - *Induktionsanfang:* $A(1)$ ist wahr, denn $\frac{1}{1} = 1 \le 1$.
> - *Induktionsannahme:* Die Aussage $A(n)$ gelte für ein beliebiges, aber festes $n \in \mathbb{R}$. D. h., wir nehmen an, für ein bestimmtes $n$ gilt $\frac{1}{n} \le 1$.
> - *Induktionsschritt:* Aus der Induktionsvoraussetzung lässt sich schließen, dass $\frac{1}{n} \le 1 \Rightarrow 1 \le n$. Somit gilt $1 \le n < n + 1 \Rightarrow \frac{1}{n+1} \le 1$. Die Aussage $A(n)$ gilt also auch für $n + 1$. Damit ist bewiesen: $A(n)$ gilt für alle $n \in \mathbb{R}$.
>
> Ist dieser Beweis der Behauptung fehlerhaft? Beweist der gegebene Induktionsbeweis die Behauptung? Begründen Sie.

> [!ANSATZ]
> Welche Zahlen erreicht man, wenn man bei $1$ startet und immer $+1$ rechnet? Und stimmt die Behauptung z. B. für $n = \frac{1}{2}$?

> [!LOESUNG] Lösungsvorschlag
> Der Beweis ist **fehlerhaft**. Vollständige Induktion funktioniert nur für **natürliche Zahlen**: Von $1$ aus mit Schritten $+1$ erreicht man nur $1, 2, 3, \dots$ – nie z. B. $\frac{1}{2}$ oder $-3$. Bewiesen ist also höchstens die Aussage für $n \in \mathbb{N}$.
> Für alle reellen Zahlen ist die Behauptung sogar **falsch**: Gegenbeispiel $n = \frac{1}{2}$ mit $\frac{1}{n} = 2 > 1$ (und für $n = 0$ ist $\frac{1}{n}$ gar nicht definiert).

> [!AUFGABE] Aufgabe 9
> Beweisen Sie durch vollständige Induktion: Jede natürliche Zahl, die in der Form $6^k - 1$ mit $k \in \mathbb{N}$ geschrieben werden kann, ist ohne Rest durch $5$ teilbar.

> [!ANSATZ]
> Im Induktionsschritt $6^{k+1} - 1$ so umformen, dass $6^k - 1$ darin vorkommt: $6^{k+1} - 1 = 6 \cdot 6^k - 1 = 6 \cdot (6^k - 1) + 5$.

> [!LOESUNG] Lösungsvorschlag
> **Induktionsanfang** $k = 1$: $6^1 - 1 = 5$ ist durch $5$ teilbar. ✓
>
> **Induktionsannahme:** Für ein festes $k \in \mathbb{N}$ ist $6^k - 1 = 5m$ mit einer natürlichen Zahl $m$.
>
> **Induktionsschritt** $k \to k + 1$:
> $$
> 6^{k+1} - 1 = 6 \cdot 6^k - 1 = 6\,(6^k - 1) + 6 - 1 = 6 \cdot 5m + 5 = 5\,(6m + 1)
> $$
> Also ist auch $6^{k+1} - 1$ durch $5$ teilbar. $\blacksquare$

> [!AUFGABE] Aufgabe 10 (schwieriger, zum Knobeln)
> Anton ist schüchtern. Trotz seiner Schüchternheit haben ihn Berta und Carla in ihr Herz geschlossen. Ihr Kummer ist, dass Anton sich nicht ausdrücklich für eine von ihnen entscheiden will. Er hat Angst, eine der beiden zu verletzen. Schließlich wird Berta ungeduldig und fragt: „Anton, liebst Du Carla, oder ist es nicht so, dass Du Carla oder mich liebst?“ Anton überlegt einen Moment, und sagt dann: „Nein.“
>
> Was hat Anton damit zum Ausdruck gebracht? (*Hinweis:* Wenn Sie die elementaren Aussagen $B$ = „Anton liebt Berta.“ und $C$ = „Anton liebt Carla.“ definieren, können Sie Bertas Frage wie folgt formulieren: $C \lor \neg(C \lor B)$. Wenden Sie alle Tautologien und Kontradiktionen für zusammengesetzte Aussagen an, die Sie kennen, um Antons Antwort zu entziffern!)

> [!ANSATZ]
> „Nein“ heißt: Die ganze Frage wird verneint, also $\neg\big(C \lor \neg(C \lor B)\big)$. Dann De Morgan, doppelte Verneinung und Distributivgesetz anwenden.

> [!LOESUNG] Lösungsvorschlag
> $$
> \neg\big(C \lor \neg(C \lor B)\big) \;\Leftrightarrow\; \neg C \land (C \lor B) \;\Leftrightarrow\; (\neg C \land C) \lor (\neg C \land B) \;\Leftrightarrow\; \neg C \land B
> $$
> ($\neg C \land C$ ist immer falsch und fällt weg.) **Anton liebt Berta und nicht Carla.**
