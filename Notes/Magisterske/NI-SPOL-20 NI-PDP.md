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

`MPI_Reduce(*sendbuf, *recvbuf, count, datatype, op, root, comm)`

Ve všech procesorech se použije daná operace `MPI_OP op` na sendbuf prvek po prvku. Výsledek se zapisuje do `recvbuf` procesu `root`.

![](../../Assets/Pasted%20image%2020250419133508.png)


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419133437.png)
<!-- DetailInfoEnd -->


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

Stejný jako `MPI_Reduce`, ale výsledek dostanou do `recvbuf` všechny procesy.

![](../../Assets/Pasted%20image%2020250419133808.png)


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419133756.png)
<!-- DetailInfoEnd -->

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

Stejný jako `MPI_Reduce`, ale `sendbuf` má velikost $p \cdot \text{recvcount}$

$i$-tý proces bude mít v `recvbuf` výsledek redukce $i$-tých bloků (viz obrázek)

![](../../Assets/Pasted%20image%2020250419133840.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419133829.png)
<!-- DetailInfoEnd -->

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

<!-- ExplanationStart -->
inkluzivní součet = do výsledku zahrne i sebe
exkluzivní součet = do výsledku nezahrnuje sebe, jen ty výsledky před tím
<!-- ExplanationEnd -->


<!--ID: 1779300071256-->
END

---

<!--
Original Flashcard ID: 1746599652981
-->

START
NI-SZZ

Definice: **Prefixový součet** (=scan) nad polem? (PPS)

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

![](../../Assets/Pasted%20image%2020260529113407.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419133925.png)
<!-- DetailInfoEnd -->

<!--ID: 1779300071262-->
END

---

<!--
Original Flashcard ID: 1746599652995
-->

START
NI-SZZ


Algoritmus: **PPS na EREW PRAM**

Back:

Máme sdílené vstupní pole $M[n]$, které na konci bude obsahovat prefixové součty. Každé vlákno $\tau_i$ má privátní proměnnou $y_i$.

![](../../Assets/Pasted%20image%2020260529113852.png)
![](../../Assets/Pasted%20image%2020260529113902.png)

<!-- ExplanationStart -->
Každé vlákno $\tau_i$ se stará o $i$-tý prvek pole $M$

1. **for** - V prvním paralelním cyklu si každé vlákno k sobě nahraje prvek $M[i]$ (asi místo toho $X[i]$ má být $M[i]$ idk)
2. **for** - V hlavním paralelním cyklu iterujeme sekvenčně a vždy:
	1. **for** - Každé vlákno sečte $M[i]$ a $M[i-2^j]$
	2. **for** - Každé vlákno nahraje svoji hodnotu zpět do $M[i]$

Díky tomu:
- V každém kroku hlavního for cyklu se nám počet sečtených buňek **zdvojnásobí**. Vlastně tím děláme paralelní redukci, která je chytře poskládaná.
- Tím pádem v každém kroku se nám sníží počet potřebných výpočtů **dvojnásobně**
- Tím pádem jedeme logaritmickou časovou složitostí

<!-- ExplanationEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419133941.png)
<!-- DetailInfoEnd -->


<!--ID: 1779300071265-->
END

---


START
FIT-Card

Jakou složitost obecně má paralelní redukce a prefixový součet?

Back:

Paralelní redukce má **logaritmickou složitost** a prefixový součet na EREW PRAMU taky!

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


Lemma: Když máme **nepřímý strom s $n$ listy**, v kolika **krocích** jsme na něm schopni udělat **PPS**?

Back:

![](../../Assets/Pasted%20image%2020250419134010.png)

![](../../Assets/Pasted%20image%2020260529123858.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020250419134058.png)

1. V každém kroku musíme sečíst dva potomky, co nejsou ještě sečtený
2. Zároveň musíme propsat výsledky do potomků
- Tzn. musíme jet jakoby nahoru i dolu, proto $2h(T)$
<!-- ExplanationEnd -->

<!--ID: 1779300071271-->
END

---

<!--
Original Flashcard ID: 1746599653018
-->

START
NI-SZZ


Lemma: **Složitost PPS na binárním stromu/motýlku**

Back:

![](../../Assets/Pasted%20image%2020250419134042.png)

$O(\log n)$ kroků pro PPS

<!--ID: 1779300071274-->
END

---

<!--
Original Flashcard ID: 1779299206165
-->

START
NI-SZZ

Jak funguje PPS na **nepřímém binárním stromu/obousměrném motýlku**?

Back:

1. V každém kroku sečtu dva prvky a pošlu výsledek doprava dolu

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

Pokud se použije **postorder linearizace**, tak je pak podobný jako ten nepřímý (lze opět spočítat v $2h(T)$ krocích)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020260529123438.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260529123451.png)
<!-- DetailInfoEnd -->


<!--ID: 1779300071280-->
END

---

<!--
Original Flashcard ID: 1779299206170
-->

START
NI-SZZ

S jakou složitostí lze řešit PPS na souvislých **řídkých grafech**?

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

Algoritmus: **Hypercube_PPS** (PPS na hyperkrychli)

Back:

![](../../Assets/Pasted%20image%2020260529124616.png)
![](../../Assets/Pasted%20image%2020260520193145.png)


<!-- ExplanationStart -->
Máme procesory v hyperkrychli, tedy počet uzlů $n=2^r, r \geq 1$
Každý procesor má lokální proměnné $zluty_i$ a $zeleny_i$
- Do **zeleného** se přičítá vše co přichází (na konci obsahuje v každém procesoru celkový výsledek PPS)
- Do **žlutého** se přičítají pouze prvky z prefixu (na konci obsahuje v každém procesoru výsledek prefixového součtu)

**Algoritmus**:
1. Inicializace: $i$-tý procesor si nastaví oba registry na hodnotu $X[i]$
2. Pak se iteruje sekvenčně $j := 0 ... r-1$ (tzn. ve směru každé dimenze)
	1. Každý pošle sousedovi svůj zelený a dostane od souseda nový zelený
	2. Přičteme do zeleného novy zelený
	3. Pokud soused leží lexikograficky přede mnou, pak si ten výsledek přičtu do prefixového součtu

<!-- ExplanationEnd -->

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
