---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-15 NI-KOP

> NI-SPOL-15 (NI-KOP)
> Princip simulovaného ochlazování, význam parametrů a způsoby jejich řízení.

## Princip simulovaného ochlazování

<!--
Original Flashcard ID: 1735205749607
-->

START
NI-SZZ


Jak funguje obecně principielně simulované ochlazování?

Back:

Máme nějaký systém:

- "teplota" je nějaký řídící parametr, který řídí diverzifikaci. Říká mi, jak moc jsem ochotný přijmout zhoršující stav (ten co mi zhorší hodnotu optimalizačního kritéria), když procházím stavový prostor.
  - Ze začátku algoritmus víc "skáče" po stavovém prostoru a hledá všude možně a čím dál tím víc se mu zakazuje se dostávat se do zhoršujících stavů

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120163056.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1780152138601-->
END

---

<!--
Original Flashcard ID: 1735205749609
-->

START
NI-SZZ


Jak funguje metoda `try()` pro simulované ochlazovaní?

Back:

![](../../Assets/Pasted%20image%2020241120163258.png)

To je součástí lokální heuristiky (viz detail).

<!-- DetailInfoStart -->

Máme lokální heuristiku:
![](../../Assets/Pasted%20image%2020241120163149.png)

Dovysvětlení:
![](../../Assets/Pasted%20image%2020241120163325.png)
![](../../Assets/Pasted%20image%2020241120163335.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1780152138611-->
END

---

<!--
Original Flashcard ID: 1735205749612
-->

START
NI-SZZ


Jak vypadá hlavní kostra algoritmu simulovaného ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120163718.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241120163729.png)

Více o jednotlivých funkcích v dalších kartičkách.

<!-- ExplanationEnd -->

Tags: core

<!--ID: 1780152138622-->
END

---

<!--
Original Flashcard ID: 1735205749614
-->

START
NI-SZZ


Co platí podle pana Hajka?

Back:

![](../../Assets/Pasted%20image%2020241120163930.png)

Problém ale je, jak máme vědět hloubku lokálních optim?

<!--ID: 1780152138633-->
END

---

## Význam parametrů a způsoby jejich řízení

<!--
Original Flashcard ID: 1735205749617
-->

START
NI-SZZ


Co je třeba vymyslet při nasazování simulovaného ochlazování?

Back:

Rozvrh ochlazování:

- počáteční teplota
- `cool(T,...)`
- `frozen(T,...)`
- `equilibrium(...)`
<!--ID: 1780152138644-->
END

---

<!--
Original Flashcard ID: 1735205749619
-->

START
NI-SZZ


Co je třeba udělat s hodnotou optimalizačního kritéria, aby se dalo pracovat s teplotou?

Back:

Je třeba tu hodnotu **normalizovat** tak, aby hodnoty `cost()` měly **stejný rozsah pro každou instanci**

![](../../Assets/Pasted%20image%2020241120164427.png)

Tags: core

<!--ID: 1780152138655-->
END

---

<!--
Original Flashcard ID: 1735205749622
-->

START
NI-SZZ


Jak funguje funkce `cool()` v simulovaném ochlazování?

Back:

Typicky teplotu přenásobím nějakou konstantou $\alpha$, kde $0.8 < \alpha < 0.999$

Tags: core

<!--ID: 1780152138666-->
END

---

<!--
Original Flashcard ID: 1735205749625
-->

START
NI-SZZ


Jak funguje funkce `equilibrium()` v simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120164552.png)

Tags: core

<!--ID: 1780152138677-->
END

---

<!--
Original Flashcard ID: 1735205749628
-->

START
NI-SZZ


Jak souvisí `cool()` a `equilibrium()`?

Back:

Různým nastavením můžu dosáhnout stejného výsledku.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120164723.png)
![](../../Assets/Pasted%20image%2020241120164729.png)
Ve vzorečku mi vypadlo N -> nezávisí na tom, v jakém kroku se momentálně nacházím.

![](../../Assets/Pasted%20image%2020241120164848.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1780152138689-->
END

---

<!--
Original Flashcard ID: 1735205749631
-->

START
NI-SZZ


Podle jakých metrik se dynamicky nastavuje počáteční teplota? (2)

Back:

- **Podle obtížnosti/velikosti instance**
- **Podle rozsahu optimalizačního kritéria**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120165059.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1780152138701-->
END

---

<!--
Original Flashcard ID: 1735205749633
-->

START
NI-SZZ


Jak lze vypočítat počáteční teplotu ze sady akcí?

Back:

![](../../Assets/Pasted%20image%2020241120165122.png)
![](../../Assets/Pasted%20image%2020241120165131.png)

<!--ID: 1780152138713-->
END

---

<!--
Original Flashcard ID: 1735205749636
-->

START
NI-SZZ


Kdy se zastaví simulované ochlazování? (3)

Back:

- **pevná mez teploty**
- nebo stagnace:
  - **četnost změn klesla pod nastavenou mez**
  - **četnost změn k lepšímu klesla pod nastavenou mez**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120165427.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1780152138724-->
END

---

<!--
Original Flashcard ID: 1735205749639
-->

START
NI-SZZ


Jaké vlastnosti má mít stavový prostor při simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165630.png)

<!--ID: 1780152138735-->
END

---

<!--
Original Flashcard ID: 1735205749642
-->

START
NI-SZZ


Jak se nastavují omezující podmínky při simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165712.png)

<!--ID: 1780152138746-->
END

---

<!--
Original Flashcard ID: 1735205749645
-->

START
NI-SZZ


Jaké jsou 2 možnosti počátečního řešení v simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165738.png)

<!--ID: 1780152138757-->
END

---