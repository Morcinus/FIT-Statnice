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

Funkce nás z jednoho stavu prostoru přesune do dalšího stavu.

![](../../Assets/Pasted%20image%2020260531142628.png)

<!-- ExplanationStart -->
1. Vybereme random stav `new`
2. Pokud je stav lepší než momentální stav, vrátíme ho
3. Pokud je horší, vrať ho pokud platí `random(0,1) < exp(-δ/T)`, kde δ je jak moc to je horší (`exp` je funkce $e^{-\delta/T}$)
4. Jinak zůstaň v tomto stavu
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120163258.png)

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


Věta: **konvergence simulovaného ochlazování** s funkcí `cool()`

Back:

Pro funkci `cool()` ve tvaru $t_k = \frac{c}{\log (1+k)}$ proces po nekonečném počtu kroků $k$ skončí v globálním optimu.

$k$ je číslo kroku a $c$ je největší hloubka lokálního optima

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120163930.png)
<!-- DetailInfoEnd -->
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

Jak spočteme $\delta$ v `try()` funkci **simulovaného ochlazování**?

Back:

Musíme vzít **normalizovanou** hodnotu optimalizačního kritéria (např. přepočítáme to aby to bylo v rozsahu $[0,1]$).

Potom odečteme ty normalizované hodnoty:

`δ = new.cost() - state.cost()`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120164427.png)
<!-- DetailInfoEnd -->

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

Určuje nám počet iterací ve vztahu k velikosti instance:
- Buď $N$ přijatých stavů
- Nebo $2N$ celkových akcí `try()`

Kde $N$ je odvozený od velikosti instance

Když je hodně přijatých -> chladí se rychleji
Zároveň brání pomalému chlazení při nízkých teplotách.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120164552.png)
<!-- DetailInfoEnd -->

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

Různým nastavením těchto funkcí můžu dosáhnout stejného výsledku (stejné rychlosti ochlazování).

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

- pokud známe hloubku lokálních optim $\delta$ a chceme pravděpodobnost úniku $P$ → nastavíme počáteční teplotu $T_0 = -\frac\delta{\ln P}$
- pokud neznáme → existují algoritmy jak ji zvolit podle množiny zhoršujících akcí

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120165059.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138701-->
END

---

<!--
Original Flashcard ID: 1735205749636
-->

START
NI-SZZ

Kdy se zastaví simulované ochlazování? (2)

Back:

- **pevná mez teploty**
- **četnost změn k lepšímu klesla pod nastavenou mez** (=stagnace)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120165427.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138724-->
END

---

<!--
Original Flashcard ID: 1735205749642
-->

START
NI-SZZ

Jak se řeší **omezující podmínky** při **simulovaném ochlazování**?

Back:

- **zahození konfigurace** - zbytečně jsme strávili práci
- **opravení konfigurace** - náročný časově a navíc to vnáší předpojatost
- **relaxace** - penalizujeme řešení, co jsou dále od korektního řešení

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120165712.png)
<!-- DetailInfoEnd -->
<!--ID: 1780152138746-->
END

---

<!--
Original Flashcard ID: 1735205749645
-->

START
NI-SZZ


Jaké jsou **možnosti volby počátečního řešení** v simulovaném ochlazování? (2)

Back:

- **náhodné řešení** - algoritmus spustíme vícekrát, dobré simulované ochlazování by nemělo záviset na počátečním řešení
- **konstruktivní** - chytře vytvoříme řešení v lokálním optimu -> máme alespoň nějaké optimum

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120165738.png)
<!-- DetailInfoEnd -->
<!--ID: 1780152138757-->
END

---


START
NI-SZZ

Jak funguje funkce `frozen(T,...)`? Kdy se algoritmus zastaví?

Back:

Určuje, kdy se celý algoritmus zastaví:
- U rozhodovacích/konstruktivních problémů jakmile **najdeme řešení**
- U ostatních problémů jakmile **teplota překročí určitou mez** nebo dojde ke **stagnaci** ($n$ kroků jsme nenašli nové lepší řešení)
<!--ID: 1780234893197-->
END

---


START
NI-SZZ

Co znamená pro funkci `frozen(T,...)`, když se nejlepší řešení rychle zlepšuje až do konce algoritmu? 

Back:

Nejspíš algoritmus zastavujeme moc brzy.
<!--ID: 1780234893210-->
END

---
