---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-04 NI-MPI

> NI-SPOL-04 (NI-MPI)
> Integrál funkcí více proměnných (Darbouxova konstrukce).

## Integrál funkcí více proměnných (Darbouxova konstrukce)

<!--
Original Flashcard ID: 1730978212980
-->

START
NI-SZZ


Co je obecně integrál funkce o dvou proměnných?

Back:

**Objem pod grafem $f(x,y)$**

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241020171220.png)

<!-- ImageEnd -->

<!--ID: 1778786397228-->
END

---

<!--
Original Flashcard ID: 1730978212983
-->

START
NI-SZZ


Definice: **Horní Darbouxova suma $f$ vzhledem k rozdělení $\sigma$**

Back:

![](../../Assets/Pasted%20image%2020241020171450.png)

![](../../Assets/Pasted%20image%2020241020171456.png)

<!-- ExplanationStart -->

Ty dvě závorky s $x$ a $y$ mi vždy říkají **obsah toho obdélníku** a násobím to tím $M_{i,j}$, což je pod tím grafem to supremum, čímž získávám **objem** toho kvádru. Pak ty všechny kvádry v grafu sečtu.

<!-- ExplanationEnd -->

<!--ID: 1778786397230-->
END

---

<!--
Original Flashcard ID: 1730978212986
-->

START
NI-SZZ


Definice: **Dolní Darbouxova suma $f$ vzhledem k rozdělení $\sigma$**

Back:

![](../../Assets/Pasted%20image%2020241020171530.png)
![](../../Assets/Pasted%20image%2020241020171456.png)

<!--ID: 1778786397233-->
END

---

<!--
Original Flashcard ID: 1730978212990
-->

START
NI-SZZ


Definice: **Horní Darbouxův integrál (funkce $f$ na $D$)**

Back:

![](../../Assets/Pasted%20image%2020241020171620.png)

<!--ID: 1778786397236-->
END

---

<!--
Original Flashcard ID: 1730978212993
-->

START
NI-SZZ


Definice: **Dolní Darbouxův integrál (funkce $f$ na $D$)**

Back:

![](../../Assets/Pasted%20image%2020241020171626.png)

<!--ID: 1778786397239-->
END

---

<!--
Original Flashcard ID: 1730978212996
-->

START
NI-SZZ


Definice: **Dvojitý Darbouxův integrál**

Back:

![](../../Assets/Pasted%20image%2020241020172000.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241020172015.png)

<!-- DetailInfoEnd -->

<!--ID: 1778786397242-->
END

---

<!--
Original Flashcard ID: 1730978213000
-->

START
NI-SZZ


Definice: **normální rozdělení $\sigma_n$** + kdy se $\lim_{n \rightarrow \infty}s_f(\sigma_n)$ a $\lim_{n \rightarrow \infty}S_f(\sigma_n)$ rovnají integrálu? (u funkce dvou proměnných)

Back:

![](../../Assets/Pasted%20image%2020241020172031.png)

<!--ID: 1778786397245-->
END

---

<!--
Original Flashcard ID: 1730978213003
-->

START
NI-SZZ


Věta: **výpočet dvojného integrálu nad obdélníkovou oblastí**

Back:

![](../../Assets/Pasted%20image%2020241020172119.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241020172145.png)

<!-- ExplanationEnd -->

Související Marast:

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241028155937.png)
![](../../Assets/Pasted%20image%2020241028155944.png)

<!-- ExampleEnd -->

<!--ID: 1778786397248-->
END

---

<!--
Original Flashcard ID: 1730978213007
-->

START
NI-SZZ


Definice: **dvojitý Darbouxův integrál funkce $f$ na $D$**

Back:

![](../../Assets/Pasted%20image%2020241020172211.png)

<!-- ExplanationStart -->

Máme nějakou oblast (smajlík). Když jsme schopný ji uzavřít do obdélníka abcd, tak můžeme vyjádřit ten její Darbouxův integrál tak, že si dodefinujeme místa mimo toho smajlíka jako samé nuly.

![](../../Assets/Pasted%20image%2020241020173002.png)

<!-- ExplanationEnd -->

<!--ID: 1778786397254-->
END

---

<!--
Original Flashcard ID: 1730978213010
-->

START
NI-SZZ


Definice: **množina míry nula**

Back:

![](../../Assets/Pasted%20image%2020241020172251.png)

<!-- ExplanationStart -->

Množina $Z$ má míru nula ("jakoby má nulový obsah"), pokud existují obdélníčky, že pokrývají tu množinu $Z$. Chceme, aby součet obsahů těch obdélníčků byl menší než epsilon.

Neformálně: Jakoby snižuju furt velikosti obdélníčků. Když to najdu pro každý $\varepsilon$, tak to má jakoby nulový obsah.

![](../../Assets/Pasted%20image%2020241020173254.png)

<!-- ExplanationEnd -->

<!--ID: 1778786397258-->
END

---

<!--
Original Flashcard ID: 1730978213014
-->

START
NI-SZZ


Poznámka: Jaký vliv má množina míry nula na hodnotu integrálu?

Back:

Množiny míry nula mají tu vlastnost, že jsou pro hodnotu integrálu "**zanedbatelné**".

<!-- ExplanationStart -->

Protože ty $\varepsilon$ jsem schopný zvolit tak malý, že to je vlastně zanedbatelný.

<!-- ExplanationEnd -->

<!--ID: 1778786397261-->
END

---

<!--
Original Flashcard ID: 1730978213018
-->

START
NI-SZZ


Poznámka: graf spojité funkce a míra nula

Back:

Graf spojité funkce $\varphi : [a,b] \rightarrow \mathbb{R}$ má míru nula.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241020173754.png)

<!-- ImageEnd -->

<!--ID: 1778786397263-->
END

---

<!--
Original Flashcard ID: 1730978213021
-->

START
NI-SZZ


Poznámka: **vlastnost platí skoro všude**

Back:

![](../../Assets/Pasted%20image%2020241020173816.png)

<!-- ExampleStart -->

Můžeme říct:
Funkce $f$ a $g$ jsou rovny skoro všude, pokud množina $\set {x \in \mathbb{R}^2 : f(x) \neq g(x)}$ má míru nula.

<!-- ExampleEnd -->

<!--ID: 1778786397266-->
END

---

<!--
Original Flashcard ID: 1730978213025
-->

START
NI-SZZ


Věta: Kdy je **spojitá funkce** $f$ na množině $D$ integrabilní, pokud má nějaká místa, kde není integrabilní

Back:

![](../../Assets/Pasted%20image%2020241020174504.png)

<!-- ImageStart -->

Umění pana Spěváka:
![](../../Assets/Pasted%20image%2020241020174401.png)
![](../../Assets/Pasted%20image%2020241020174442.png)
xDD

<!-- ImageEnd -->

<!--ID: 1778786397269-->
END

---

<!--
Original Flashcard ID: 1730978213028
-->

START
NI-SZZ


Co je **hranice množiny**?

Back:

![](../../Assets/Pasted%20image%2020241020174536.png)

<!--ID: 1778786397272-->
END

---

<!--
Original Flashcard ID: 1730978213032
-->

START
NI-SZZ


Důsledek: Kdy je **spojitá funkce** $f$ na množině $D$ integrabilní

Back:

![](../../Assets/Pasted%20image%2020241020174659.png)

<!--ID: 1778786397274-->
END

---

<!--
Original Flashcard ID: 1730978213035
-->

START
NI-SZZ


Definice: **Vlastnosti dvojného integrálu** (3)

Back:

![](../../Assets/Pasted%20image%2020241020174900.png)

<!--ID: 1778786397277-->
END

---

START
NI-SZZ

Co platí pro **Linearitu integrálu**?

Back:

![](../../Assets/Pasted%20image%2020260515205832.png)


<!--ID: 1779300150069-->
END

---


<!--
Original Flashcard ID: 1735205889362
-->

START
NI-SZZ


Jaké jsou **typy oblastí**, nad kterými lze integrovat? (2)

Back:

![](../../Assets/Pasted%20image%2020241023150017.png)

<!-- DetailInfoStart -->

- **Typ 1** - $D = \set {(x,y) \in \mathbb{R}^2: x \in <a,b> \land \varphi_1(\lambda) \leq y \leq \varphi_2(\lambda)}$
  <!-- DetailInfoEnd -->

<!--ID: 1778786397280-->
END

---

<!--
Original Flashcard ID: 1735205889366
-->

START
NI-SZZ


Jak lze obecně spočíst dvojný integrál nad obecnou oblastí?

Back:

![](../../Assets/Pasted%20image%2020241023150046.png)

<!-- ExplanationStart -->

Máme nějaký tvar na 2D ploše a chceme spočíst objem toho tělesa od té roviny $x,y$ až po ten graf té funkce.

![](../../Assets/Pasted%20image%2020241023151316.png)

<!-- ExplanationEnd -->

<!--ID: 1778786397283-->
END

---

<!--
Original Flashcard ID: 1735205889369
-->

START
NI-SZZ


Věta: Výpočet dvojného integrálu nad obecnou oblastí

Back:

![](../../Assets/Pasted%20image%2020241023150131.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020241023150143.png)

<!-- ExerciseEnd -->

<!-- ExampleStart -->

**Průměr funkce $f(x,y)$ nad nějakou oblastí:**
![](../../Assets/Pasted%20image%2020241023150226.png)
![](../../Assets/Pasted%20image%2020241023152437.png)

**Těžiště desky s husotou $\rho$**
![](../../Assets/Pasted%20image%2020241023150330.png)

**Povrch grafu $f(x,y)$**:
![](../../Assets/Pasted%20image%2020241023150357.png)

<!-- ExampleEnd -->

Tags: core

<!--ID: 1778786397286-->
END

---

<!--
Original Flashcard ID: 1735205889377
-->

START
NI-SZZ


Definice: **Jacobiho matice**

Back:

![](../../Assets/Pasted%20image%2020241023150523.png)

<!-- DetailInfoStart -->

Matice aproximuje zobrazení.

Každému vektoru se přiřadá nějaká matice.
![](../../Assets/Pasted%20image%2020241023154135.png)

<!-- DetailInfoEnd -->

Tags: core

<!--ID: 1778786397289-->
END

---

<!--
Original Flashcard ID: 1735205889380
-->

START
NI-SZZ


Věta: **o substituci** (zobecněná pro funkci $f: D \rightarrow \mathbb{R}$)

Back:

![](../../Assets/Pasted%20image%2020241023150546.png)

<!-- ExplanationStart -->

Může se stát, že ta část napravo se počítá jednoduššeji, než ta část nalevo. Proto se to používá.

<!-- ExplanationEnd -->

Tags: core

<!--ID: 1778786397291-->
END

---