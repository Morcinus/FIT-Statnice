---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-20 NI-PDP

> NI-SPOL-20 (NI-PDP)
> Paralelní algoritmy pro redukci, prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace.

## Paralelní algoritmy pro redukci

<!--
Original Flashcard ID: 1746599652923
-->

START
NI-SZZ


Definice: Vstupy a výstupy paralelní redukce

Back:

![](../../Assets/Pasted%20image%2020250419133342.png)
<!--ID: 1779300071240-->
END

---

<!--
Original Flashcard ID: 1746599652929
-->

START
NI-SZZ


Jaký je **paralelní čas** paralelní redukce?

Back:

$$T(n,p) = \alpha n/p + \beta \log p = O(\log n)$$

![](../../Assets/Pasted%20image%2020250419133358.png)
<!--ID: 1779300071243-->
END

---

<!--
Original Flashcard ID: 1746599652937
-->

START
NI-SZZ


Jak se dá **implementovat paralelní redukce**? (2)

Back:

- **EREW PRAM a 1D mřížka**: jako v binárním stromu
- **hyperkrychle**: po inverzní binomiální kostře

![](../../Assets/Pasted%20image%2020250419133417.png)

Je to jakoby inverzní broadcast s nějakým výpočtem
<!--ID: 1779300071246-->
END

---

<!--
Original Flashcard ID: 1746599652944
-->

START
NI-SZZ


Jak funguje MP_Reduce?

Back:

![](../../Assets/Pasted%20image%2020250419133437.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250419133508.png)

<!-- ExampleEnd -->
<!--ID: 1779300071248-->
END

---

<!--
Original Flashcard ID: 1746599652966
-->

START
NI-SZZ


Co je operace `MPI_Allreduce`?

Back:

výsledek dostanou v `recvbuf` všichni

![](../../Assets/Pasted%20image%2020250419133756.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250419133808.png)

<!-- ExampleEnd -->
<!--ID: 1779300071251-->
END

---

<!--
Original Flashcard ID: 1746599652974
-->

START
NI-SZZ


Jak funguje `MPI_Reduce_scatter_block`?

Back:

$i$-tý proces redukuje jen $i$-té prvky

![](../../Assets/Pasted%20image%2020250419133829.png)
![](../../Assets/Pasted%20image%2020250419133840.png)
<!--ID: 1779300071254-->
END

---

## Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace

<!--
Original Flashcard ID: 1779299850227
-->

START
NI-SZZ

Jaké MPI funkce implementují prefixový součet (scan)?

Back:

- `MPI_Scan(*sendbuf, *recvbuf, count, datatype, op, comm)` počítá inkluzivní prefixový součet
- `MPI_Exscan` počítá exkluzivní prefixový součet, tedy do výsledku nezahrnuje vlastní hodnotu, jen hodnoty ostře vlevo
<!--ID: 1779300071256-->
END

---

<!--
Original Flashcard ID: 1746599652981
-->

START
NI-SZZ


Jak funguje Prefixový součet (=scan) nad polem (PPS)?

Back:

![](../../Assets/Pasted%20image%2020250419133907.png)
<!--ID: 1779300071259-->
END

---

<!--
Original Flashcard ID: 1746599652988
-->

START
NI-SZZ


Algoritmus: Sekvenční výpočet prefixových součtů

Back:

![](../../Assets/Pasted%20image%2020250419133925.png)
<!--ID: 1779300071262-->
END

---

<!--
Original Flashcard ID: 1746599652995
-->

START
NI-SZZ


Jak funguje PPS na EREW PRAM?

Back:

![](../../Assets/Pasted%20image%2020250419133941.png)
<!--ID: 1779300071265-->
END

---

<!--
Original Flashcard ID: 1746599653002
-->

START
NI-SZZ


Definice: **Nepřímý strom**

Back:

![](../../Assets/Pasted%20image%2020250419133955.png)
<!--ID: 1779300071268-->
END

---

<!--
Original Flashcard ID: 1746599653010
-->

START
NI-SZZ


Lemma: **PPS na nepřímém stromu** (listy, kroky, výška)

Back:

![](../../Assets/Pasted%20image%2020250419134010.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250419134058.png)

<!-- ExampleEnd -->
<!--ID: 1779300071271-->
END

---

<!--
Original Flashcard ID: 1746599653018
-->

START
NI-SZZ


Lemma: T = úplný binární strom $\implies \dots$

Back:

![](../../Assets/Pasted%20image%2020250419134042.png)
<!--ID: 1779300071274-->
END

---

<!--
Original Flashcard ID: 1779299206165
-->

START
NI-SZZ

Jak funguje PPS na nepřímém binárním stromu/obousměrném motýlku?

Back:

Todo napsat nějaký basic vysvětlení

![](../../Assets/Pasted%20image%2020260520192728.png)
<!--ID: 1779300071277-->
END

---

<!--
Original Flashcard ID: 1779299206168
-->

START
NI-SZZ

Jak funguje PPS na **přímém stromu**?

Back:

![](../../Assets/Pasted%20image%2020260520192958.png)

Pokud se použije **postorder linearizace**, tak je pak podobný jako ten nepřímý
<!--ID: 1779300071280-->
END

---

<!--
Original Flashcard ID: 1779299206170
-->

START
NI-SZZ

Jak lze řešit PPS na libovolým řídkém grafu?

Back:

![](../../Assets/Pasted%20image%2020260520193109.png)
<!--ID: 1779300071283-->
END

---

<!--
Original Flashcard ID: 1779299206173
-->

START
NI-SZZ

Jak lze řešit PPS na hyperkrychli?

Back:

lexikografická indexace, každý proces si do žlutého registru přičítá svůj prefix a do zeleného všechny příchozí hodnoty, fází je stejně jako dimenzí

![](../../Assets/Pasted%20image%2020260520193145.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020260520193152.png)

<!-- DetailInfoEnd -->
<!--ID: 1779300071286-->
END

---

<!--
Original Flashcard ID: 1779299206176
-->

START
NI-SZZ

Jak lze řešit PPS na SF mřížkách?

Back:

linearizace lexikograficky po řádcích, 3 fáze (doprava po řádcích, dolů v posledním sloupci, doleva po řádcích kromě prvního) $O(nm)$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020260520193233.png)

<!-- DetailInfoEnd -->
<!--ID: 1779300071289-->
END

---

<!--
Original Flashcard ID: 1779299206178
-->

START
NI-SZZ

Jak lze řešit PPS na WH mřížkách?

Back:

simulace nepřímého binárního stromu $O(\log n)$

![](../../Assets/Pasted%20image%2020260520193312.png)
<!--ID: 1779300071292-->
END

---

<!--
Original Flashcard ID: 1779299206181
-->

START
NI-SZZ

Jaké jsou aplikace PPS na PRAM? (5)

Back:

- **druhá fáze CountingSortu**, kdy z pole frekvencí dělám pole indexů do výstupu
- **Packing Problem** (Zhušťovací problém): zjistit pořadí jedničkových bitů
- **RadixSort**
- **binární sčítačka s predikcí přenosu**
- **tridiagonální systém rovnic** (modelace šíření tepla drátem, kmitání struny na kytaře)
<!--ID: 1779300071295-->
END

---

<!--
Original Flashcard ID: 1779299206184
-->

START
NI-SZZ

Jak se aplikuje PPS v RadixSortu?

Back:

řazení $N = 2^n$ čísel zhušťováním od nejméně významného bitu, $O(\log^2 N)$ na $oBF_n$
<!--ID: 1779300071298-->
END

---

<!--
Original Flashcard ID: 1779299206186
-->

START
NI-SZZ

Jak se aplikuje PPS v binární sčítačce s predikcí přenosu?

Back:

součet dvou $n$-bitových čísel za $O(\log n)$
<!--ID: 1779300071301-->
END

---

<!--
Original Flashcard ID: 1779299206189
-->

START
NI-SZZ

Jak se aplikuje PPS v tridiagonálním systému rovnic?

Back:

tridiagonální systém rovnic (modelace šíření tepla drátem, kmitání struny na kytaře): dá se zapsat rekurentně, pomocí PPS s operací maticového násobení předpočítat matice $\mathcal H_i$ a celé to vyřešit za $O(n/p + \log p)$
<!--ID: 1779300071304-->
END

---

<!--
Original Flashcard ID: 1779299206192
-->

START
NI-SZZ

Co je segmentový prefixový součet (SPPS)?

Back:

jako prefixový součet, ale výsledky se nešíří přes hranice segmentů
<!--ID: 1779300071307-->
END

---

<!--
Original Flashcard ID: 1779299206195
-->

START
NI-SZZ

Jak funguje SPPS?

Back:

algoritmus je stejný, ale do sémantiky operace \oplus se zapracují oddělovače segmentů
![](../../Assets/Pasted%20image%2020260520193753.png)
<!--ID: 1779300071313-->
END

---

<!--
Original Flashcard ID: 1779299206198
-->

START
NI-SZZ

Pomocí čeho se implementuje SPPS v MPI?

Back:

v MPI se implementuje pomocí uživatelské operace (`MPI_Op_create(segScan, 0, &myOp);`)
<!--ID: 1779300071318-->
END

---

<!--
Original Flashcard ID: 1779299206201
-->

START
NI-SZZ

Jaká je aplikace SPPS?

Back:

**QuickSort**: out-of-place, nejdřív jeden segment, pro distribuci pivotů se použije SPPS, v každé iteraci je každý segment rozdělen na tři podle pivota ($S_<, S_=, S_>$) třemi zhuštěními pomocí SPPS → každá z $O(\log n)$ iterací vyžaduje konstantní počet SPPS → celková složitost $O(\log n \cdot (n/p + \log p))$
<!--ID: 1779300071321-->
END

---
