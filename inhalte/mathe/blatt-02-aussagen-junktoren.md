---
titel: "Übungsblatt 2: Aussagen, Junktoren, Wahrheitstafeln"
typ: blatt
uebung: 2
termin: 2026-10-29
datum: 2026-11-05
kurz: Besprechung in KW 44 (26.10.–30.10.2026). Im Tutorium besprochen – A1 a, c, e, g · A2 a–c · A3 1 alle, 2 a, d · A4 a, c · A5 · A6 a, b, d · A7 · A9 · A10.
---

> [!MERKE] Im Tutorium besprochen
> A1 a), c), e), g) · A2 a), b), c) · A3 3.1 alle, 3.2 a), d) · A4 a), c) · A5 alle · A6 a), b), d) · A7 alle · A8 keine · A9 alle · A10 alle. Die restlichen Aufgaben dienen der eigenständigen Übung.

> [!AUFGABE] Aufgabe 1
> Bei welchen der folgenden Sätze bzw. Ausdrücke handelt es sich aus aussagenlogischer Sicht um Aussagen?
>
> - a) Die Spree fließt durch Frankfurt (Oder).
> - b) In welcher Firma arbeiten Sie?
> - c) Schreiben Sie deutlicher!
> - d) $12 - 7$
> - e) $\mathbb{Z} \subset \mathbb{Q}$
> - f) BMWs haben eine dunkle Lackierung.
> - g) Am Montag treffe ich mich mit Leo.
> - h) $3 \in (0;\, 2{,}\overline{9}\,]$

> [!ANSATZ]
> Eine Aussage ist ein Satz, der **entweder wahr oder falsch** ist. Fragen, Aufforderungen und reine Rechenausdrücke (Terme) haben keinen Wahrheitswert. Ob du den Wahrheitswert kennst, ist egal.

> [!LOESUNG] Lösungsvorschlag
> | | Aussage? | Begründung |
> |---|---|---|
> | a) | ja (falsch) | Frankfurt (Oder) liegt an der Oder, nicht an der Spree. |
> | b) | nein | Frage |
> | c) | nein | Aufforderung |
> | d) | nein | Term – ergibt die Zahl $5$, aber keinen Wahrheitswert |
> | e) | ja (wahr) | Jede ganze Zahl ist auch eine rationale Zahl. |
> | f) | ja (falsch) | Gemeint ist „alle BMWs“ – es gibt aber auch helle BMWs. |
> | g) | ja | Für die Person, die es sagt, ist der Satz entweder wahr oder falsch. |
> | h) | ja (wahr) | $2{,}\overline{9} = 3$, also ist das Intervall $(0;\, 3]$ und enthält die $3$. |
>
> Bei f) und g) lohnt sich der Vergleich in der Übung – „dunkel“ und „ich/Montag“ sind etwas unscharf.

> [!AUFGABE] Aufgabe 2
> Übersetzen Sie die folgenden Sätze in aussagenlogische Formeln, indem Sie zuerst die enthaltenen elementaren Aussagen identifizieren und diese anschließend mittels geeigneter Junktoren zusammensetzen.
>
> *Beispiel:* „Der Patient hat weder die Masern noch Scharlach.“ Mit $A$ = „Der Patient hat die Masern.“ und $B$ = „Der Patient hat Scharlach.“ ist der Satz gleichbedeutend mit $\neg A \land \neg B$.
>
> - a) Maximilian ist faul aber nicht dumm.
> - b) Stefan wird nicht zum Aufgebot gehören, es sei denn er trainiert täglich drei Stunden und hört mit dem Rauchen auf.
> - c) Es trifft nicht zu, dass es ein Verkehrs-Chaos gibt, wenn Hertha zuhause gegen Bayern spielt und das Wetter schön ist.
> - d) Herr Pfeifer hat einen Porsche bestellt, kann ihn aber nicht bezahlen.

> [!ANSATZ]
> „aber“ heißt logisch einfach **und**. „$X$, es sei denn $Y$“ heißt: **Wenn nicht $Y$, dann $X$**. Bei c) bezieht sich „Es trifft nicht zu, dass …“ auf den ganzen Wenn-dann-Satz.

> [!LOESUNG] Lösungsvorschlag
> - a) $F$ = „Maximilian ist faul“, $D$ = „Maximilian ist dumm“: $\;F \land \neg D$
>
> - b) $A$ = „Stefan gehört zum Aufgebot“, $T$ = „Stefan trainiert täglich drei Stunden“, $R$ = „Stefan hört mit dem Rauchen auf“:
> $\;\neg(T \land R) \Rightarrow \neg A\;$ – gleichwertig: $\;A \Rightarrow (T \land R)$
>
> - c) $V$ = „Es gibt ein Verkehrs-Chaos“, $H$ = „Hertha spielt zuhause gegen Bayern“, $W$ = „Das Wetter ist schön“:
> $\;\neg\big((H \land W) \Rightarrow V\big)$ – gleichwertig: $\;H \land W \land \neg V$.
> (Umgangssprachlich ist oft $(H \land W) \Rightarrow \neg V$ gemeint – in der Übung vergleichen, welche Lesart gewollt ist.)
>
> - d) $P$ = „Herr Pfeifer hat einen Porsche bestellt“, $B$ = „Herr Pfeifer kann ihn bezahlen“: $\;P \land \neg B$

> [!AUFGABE] Aufgabe 3.1
> Gehen Sie von der zusammengesetzten Aussage aus: „Gabriel ist groß ($G$) und schwarzhaarig ($S$).“
>
> - a) Verneinen Sie die Aussage sprachlich.
> - b) Übersetzen Sie den Satz in eine aussagenlogische Formel.
> - c) Wie lautet die aussagenlogische Formel Ihrer Verneinung?
> - d) Überprüfen Sie mithilfe einer Wahrheitstafel, ob Ihre Verneinung korrekt ist.

> [!ANSATZ]
> De Morgan: Aus „und“ wird beim Verneinen „oder“, und jede Teilaussage wird verneint.

> [!LOESUNG] Lösungsvorschlag
> - a) „Gabriel ist nicht groß **oder** nicht schwarzhaarig.“
> - b) $G \land S$
> - c) $\neg(G \land S) \;\Leftrightarrow\; \neg G \lor \neg S$
> d)
>
> | $G$ | $S$ | $G \land S$ | $\neg(G \land S)$ | $\neg G \lor \neg S$ |
> |---|---|---|---|---|
> | w | w | w | f | f |
> | w | f | f | w | w |
> | f | w | f | w | w |
> | f | f | f | w | w |
>
> Die beiden letzten Spalten sind gleich – die Verneinung stimmt.

> [!AUFGABE] Aufgabe 3.2
> Verneinen Sie die folgenden zusammengesetzten Aussagen.
>
> - a) Die deutschen Nationalspieler haben im Viertelfinale gut gespielt oder hatten Glück.
> - b) Die letzte Prüfung ist bestanden und ich habe riesigen Hunger.
> - c) Sie kennt mich nicht oder hat mich vergessen.
> - d) Er war wegen dieser Begegnung glücklich und nicht traurig.

> [!ANSATZ]
> $\neg(A \lor B) = \neg A \land \neg B$ und $\neg(A \land B) = \neg A \lor \neg B$. Ein „nicht“ in der Aussage wird beim Verneinen zu einem „doch/positiv“.

> [!LOESUNG] Lösungsvorschlag
> - a) Die deutschen Nationalspieler haben im Viertelfinale **nicht** gut gespielt **und** hatten **kein** Glück.
> - b) Die letzte Prüfung ist **nicht** bestanden **oder** ich habe **keinen** riesigen Hunger.
> - c) Sie kennt mich **und** hat mich **nicht** vergessen.
> - d) Er war wegen dieser Begegnung **nicht** glücklich **oder** traurig.

> [!AUFGABE] Aufgabe 4
> Welche der folgenden Implikationen sind wahr?
>
> - a) Wenn der Mond ein Fußball ist, dann scheint um Mitternacht die Sonne.
> - b) Wenn es schneit, herrscht irgendwo in der Atmosphäre eine Temperatur von unter Null Grad Celsius.
> - c) Wenn $a, b > 0$ und $a < b$, dann gilt $-a < -b$.
> - d) Wenn $f'(x_0) = 0$, liegt an der Stelle $x_0$ ein Extremwert der Funktion $f$ vor.

> [!ANSATZ]
> Eine Implikation $A \Rightarrow B$ ist **nur dann falsch**, wenn $A$ wahr und $B$ falsch ist. Ist die Voraussetzung falsch, ist die Implikation automatisch wahr.

> [!LOESUNG] Lösungsvorschlag
> - a) **wahr** – die Voraussetzung („Der Mond ist ein Fußball“) ist falsch, also ist die Implikation wahr.
> - b) **wahr** – Schnee entsteht nur, wo es irgendwo in der Atmosphäre kälter als 0 °C ist.
> - c) **falsch** – beim Multiplizieren mit $-1$ dreht sich das Ungleichheitszeichen um: aus $a < b$ folgt $-a > -b$. Beispiel: $a = 1$, $b = 2$, aber $-1 < -2$ stimmt nicht.
> - d) **falsch** – Gegenbeispiel $f(x) = x^3$: $f'(0) = 0$, aber bei $0$ liegt kein Extremwert, sondern ein Sattelpunkt. $f'(x_0) = 0$ ist nur notwendig, nicht hinreichend.

> [!AUFGABE] Aufgabe 5
> $A$ sei eine elementare Aussage. Betrachten Sie folgende zusammengesetzten Aussagen:
>
> ① $B_1 = A \land \neg A$ ② $B_2 = A \lor \neg A$ ③ $B_3 = A \Rightarrow \neg A$ ④ $B_4 = A \Leftrightarrow \neg A$
>
> Welche der folgenden Aussagen ist jeweils für $B_i$, $i = 1, 2, 3, 4$ richtig? (*Hinweis:* Es kann jeweils keine, genau eine oder mehr als eine der Aussagen richtig sein.)
>
> - a) $B_i$ ist falsch.
> - b) $B_i$ ist wahr.
> - c) $B_i$ ist wahr, wenn $A$ falsch ist.
> - d) $B_i$ ist wahr, wenn $A$ wahr ist.

> [!ANSATZ]
> Mach für jede $B_i$ eine kleine Wahrheitstafel mit nur zwei Zeilen: $A$ = w und $A$ = f.

> [!LOESUNG] Lösungsvorschlag
> | | $A$ = w | $A$ = f | richtig |
> |---|---|---|---|
> | $B_1 = A \land \neg A$ | f | f | nur a) – immer falsch (Kontradiktion) |
> | $B_2 = A \lor \neg A$ | w | w | b), c), d) – immer wahr (Tautologie) |
> | $B_3 = A \Rightarrow \neg A$ | f | w | nur c) – $B_3$ verhält sich wie $\neg A$ |
> | $B_4 = A \Leftrightarrow \neg A$ | f | f | nur a) – immer falsch |

> [!AUFGABE] Aufgabe 6
> Sind die folgenden aussagenlogischen Formeln Tautologien? $A$, $B$ und $C$ bezeichnen elementare Aussagen. Begründen Sie Ihre Antwort mithilfe einer Wahrheitstafel!
>
> - a) $A \Longrightarrow (A \lor B)$
> - b) $(A \Rightarrow B) \Longleftrightarrow (\neg A \lor B)$
> - c) $\neg(A \land B) \Longleftrightarrow (\neg A \land \neg B)$
> - d) $(A \Rightarrow B) \land (B \Rightarrow C) \Longrightarrow (A \Rightarrow C)$

> [!ANSATZ]
> Eine Tautologie ist in **jeder** Zeile der Wahrheitstafel wahr. Bei zwei Aussagen brauchst du 4 Zeilen, bei drei Aussagen 8 Zeilen. Bei c) an De Morgan denken.

> [!LOESUNG] Lösungsvorschlag
> **a) Tautologie.** Ist $A$ wahr, ist auch $A \lor B$ wahr; ist $A$ falsch, ist die Implikation sowieso wahr.
>
> | $A$ | $B$ | $A \lor B$ | $A \Rightarrow (A \lor B)$ |
> |---|---|---|---|
> | w | w | w | w |
> | w | f | w | w |
> | f | w | w | w |
> | f | f | f | w |
>
> **b) Tautologie** – die wichtige Umformung der Implikation:
>
> | $A$ | $B$ | $A \Rightarrow B$ | $\neg A \lor B$ | $\Leftrightarrow$ |
> |---|---|---|---|---|
> | w | w | w | w | w |
> | w | f | f | f | w |
> | f | w | w | w | w |
> | f | f | w | w | w |
>
> **c) keine Tautologie.** Richtig wäre $\neg A \lor \neg B$ (De Morgan).
>
> | $A$ | $B$ | $\neg(A \land B)$ | $\neg A \land \neg B$ | $\Leftrightarrow$ |
> |---|---|---|---|---|
> | w | w | f | f | w |
> | w | f | w | f | **f** |
> | f | w | w | f | **f** |
> | f | f | w | w | w |
>
> **d) Tautologie** (Kettenschluss): Spalten $X = (A \Rightarrow B) \land (B \Rightarrow C)$ und $Y = A \Rightarrow C$.
>
> | $A$ | $B$ | $C$ | $A \Rightarrow B$ | $B \Rightarrow C$ | $X$ | $Y$ | $X \Rightarrow Y$ |
> |---|---|---|---|---|---|---|---|
> | w | w | w | w | w | w | w | w |
> | w | w | f | w | f | f | f | w |
> | w | f | w | f | w | f | w | w |
> | w | f | f | f | w | f | f | w |
> | f | w | w | w | w | w | w | w |
> | f | w | f | w | f | f | w | w |
> | f | f | w | w | w | w | w | w |
> | f | f | f | w | w | w | w | w |

> [!AUFGABE] Aufgabe 7
> Nach einem Mordfall gibt es drei Verdächtige, $A$, $B$ und $C$, von denen zumindest einer der Täter sein muss. Nachdem die Verdächtigen und die Zeugen getrennt vernommen wurden, kennen die Ermittler folgende Fakten:
>
> - Wenn $A$ Täter ist, dann müssen $B$ oder $C$ ebenfalls Täter sein.
> - Wenn $B$ Täter ist, dann ist $A$ unschuldig.
> - Wenn $C$ Täter ist, dann ist auch $B$ Täter.
>
> Lässt sich mit dieser Information herausfinden, wer von den dreien schuldig bzw. unschuldig ist? Begründen Sie Ihre Antwort mithilfe einer Wahrheitstafel.

> [!ANSATZ]
> Setze $A$, $B$, $C$ = „… ist Täter“. Bedingungen: $A \lor B \lor C$, $\;A \Rightarrow (B \lor C)$, $\;B \Rightarrow \neg A$, $\;C \Rightarrow B$. Prüfe alle 8 Kombinationen und streiche jede, die eine Bedingung verletzt.

> [!LOESUNG] Lösungsvorschlag
> | $A$ | $B$ | $C$ | mind. einer | $A \Rightarrow B \lor C$ | $B \Rightarrow \neg A$ | $C \Rightarrow B$ | möglich? |
> |---|---|---|---|---|---|---|---|
> | w | w | w | w | w | f | w | nein |
> | w | w | f | w | w | f | w | nein |
> | w | f | w | w | w | w | f | nein |
> | w | f | f | w | f | w | w | nein |
> | f | w | w | w | w | w | w | **ja** |
> | f | w | f | w | w | w | w | **ja** |
> | f | f | w | w | w | w | f | nein |
> | f | f | f | f | w | w | w | nein |
>
> Es bleiben zwei Möglichkeiten: **$A$ ist unschuldig, $B$ ist Täter.** Ob $C$ Täter ist, lässt sich **nicht** sagen.

> [!AUFGABE] Aufgabe 8
> Indiana Jones ist in einer Grabkammer eingeschlossen. Es gibt einen einzigen Ein-/Ausgang, in den ohne sein Zutun nach seinem Eintritt von oben passgenau ein riesiger Stein gefallen ist. Es gibt an der Wand aber drei nebeneinander angeordnete Hebel, die offensichtlich einen Öffnungsmechanismus steuern. Dazu gibt es folgende Bedienungsanleitung:
>
> - Mindestens ein Hebel muss gezogen werden.
> - Wenn der linke Hebel $L$ gezogen wird, dann muss auch der mittlere $M$ oder rechte Hebel $R$ gezogen werden.
> - Es müssen entweder der mittlere und rechte Hebel gemeinsam gezogen werden oder beide dürfen nicht gezogen werden.
> - Es dürfen der linke und der rechte Hebel nicht beide gezogen werden.
>
> Die Grabkammer ist in Fels geschlagen. Indiana Jones hat keinen Empfang und es besteht keine weitere Möglichkeit, aus der Grabkammer zu entkommen. Er hat aber leicht angestaubte Grundkenntnisse der Aussagenlogik. Welche(n) Hebel sollte er betätigen?

> [!ANSATZ]
> Bedingungen als Formeln: $L \lor M \lor R$, $\;L \Rightarrow (M \lor R)$, $\;M \Leftrightarrow R$, $\;\neg(L \land R)$. Wieder alle 8 Kombinationen durchgehen.

> [!LOESUNG] Lösungsvorschlag
> | $L$ | $M$ | $R$ | mind. einer | $L \Rightarrow M \lor R$ | $M \Leftrightarrow R$ | $\neg(L \land R)$ | möglich? |
> |---|---|---|---|---|---|---|---|
> | w | w | w | w | w | w | f | nein |
> | w | w | f | w | w | f | w | nein |
> | w | f | w | w | w | f | f | nein |
> | w | f | f | w | f | w | w | nein |
> | f | w | w | w | w | w | w | **ja** |
> | f | w | f | w | w | f | w | nein |
> | f | f | w | w | w | f | w | nein |
> | f | f | f | f | w | w | w | nein |
>
> Nur eine Kombination erfüllt alles: **den mittleren und den rechten Hebel ziehen, den linken nicht.**

> [!AUFGABE] Aufgabe 9
> „Beweis“, dass $1 = 0$ gilt:
>
> - Man gehe von der Gleichung $\frac{1}{x} = 0$ für $x \ne 0$ aus.
> - Wenn die Gleichung gilt, dann darf auf beiden Seiten mit $x \ne 0$ multipliziert werden.
> - Wir erhalten folglich $1 = \frac{1}{x} \cdot x = 0 \cdot x = 0$, was zu beweisen war.
>
> Gibt es in diesem Beweis fehlerhafte Folgerungen? Weshalb kann auf diese Weise die Aussage $1 = 0$ nicht bewiesen werden?

> [!ANSATZ]
> Prüfe zuerst die **Startgleichung**: Gibt es überhaupt ein $x$ mit $\frac{1}{x} = 0$? Und was gilt für eine Implikation mit falscher Voraussetzung?

> [!LOESUNG] Lösungsvorschlag
> Die einzelnen Rechenschritte sind korrekt – gezeigt wird aber nur die Implikation $\frac{1}{x} = 0 \Rightarrow 1 = 0$. Die Voraussetzung $\frac{1}{x} = 0$ ist für **kein** $x$ wahr (ein Bruch mit Zähler $1$ ist nie $0$). Aus einer falschen Voraussetzung lässt sich alles folgern – die Implikation ist dann zwar wahr, sagt aber nichts über die Behauptung. Ein Beweis braucht eine **wahre** Voraussetzung: Aus „$A$ wahr“ muss „$B$ wahr“ folgen.

> [!AUFGABE] Aufgabe 10 (schwieriger, zum Knobeln)
> In der Vorlesung wurde gezeigt, dass der Junktor $\Leftrightarrow$ durch die Junktoren $\land$ und $\Rightarrow$ wie folgt darstellbar ist:
> $$
> (A \Leftrightarrow B) \iff \big((A \Rightarrow B) \land (B \Rightarrow A)\big)
> $$
> Verwenden Sie die Regeln der Aussagenlogik, um zu beweisen, dass beliebige aussagenlogische Terme ausschließlich mit Hilfe der Junktoren $\neg$ und $\land$ ausgedrückt werden können.
> (*Hinweis:* Es fehlt zu zeigen, dass die Operationen $\lor$ und $\Rightarrow$ überflüssig sind, dass also Terme der Form $(A \lor B)$ und $(A \Rightarrow B)$ jeweils durch eine Kombination der Junktoren $\land$ und $\neg$ ausgedrückt werden können.)

> [!ANSATZ]
> Doppelte Verneinung + De Morgan: $A \lor B = \neg\neg(A \lor B)$. Für die Implikation erst $A \Rightarrow B \Leftrightarrow \neg A \lor B$ (Aufgabe 6 b) benutzen.

> [!LOESUNG] Lösungsvorschlag
> **Oder:** $\;A \lor B \;\Leftrightarrow\; \neg\neg(A \lor B) \;\Leftrightarrow\; \neg(\neg A \land \neg B)$ (doppelte Verneinung, De Morgan).
>
> **Implikation:** $\;A \Rightarrow B \;\Leftrightarrow\; \neg A \lor B \;\Leftrightarrow\; \neg(\neg\neg A \land \neg B) \;\Leftrightarrow\; \neg(A \land \neg B)$.
>
> **Äquivalenz:** mit der Formel aus der Vorlesung und der Implikation von oben:
> $\;A \Leftrightarrow B \;\Leftrightarrow\; \neg(A \land \neg B) \land \neg(B \land \neg A)$.
>
> Damit lassen sich alle Junktoren durch $\neg$ und $\land$ ersetzen – also jeder aussagenlogische Term.
