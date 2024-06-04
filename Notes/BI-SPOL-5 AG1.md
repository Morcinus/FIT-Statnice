---
created: 2024-06-04T20:23:53
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-5 AG1

> BI-SPOL-5 (AG1)
> Binární haldy, binomiální haldy. Vyhledávací stromy a jejich vyvažování. Tabulky s rozptylováním (hešováním).

### zakořeněné stromy


START
BI-SZZ

Definice: **zakořeněný strom**

Back:

strom, ve kterém je jeden vrchol $r$ označen jako kořen
<!--ID: 1717529248417-->
END

---


START
BI-SZZ

Definice: **předek, potomek, otec, syn** (ve stromu)

Back:

**$u$** je **předek** $v$ = $v$ je potomek $u$ = $u$ leží na cestě z $v$ do kořene
- pokud jsou to navíc sousedé, říká se jim **otec** a **syn**
<!--ID: 1717529248420-->
END

---


START
BI-SZZ

Definice: **nultá hladina, první hladina atd.**

Back:

kořen tvoří **nultou hladinu**, jeho synové tvoří **první hladinu** atd. podle vzdálenosti
<!--ID: 1717529248423-->
END

---


START
BI-SZZ

Definice: **hloubka zakořeněného stromu**

Back:

**hloubka** zakořeněného stromu = počet jeho hladin
<!--ID: 1717529248425-->
END

---


START
BI-SZZ

Definice: **uspořádaný** strom

Back:

záleží na pořadí synů
<!--ID: 1717529248428-->
END

---


START
BI-SZZ

Definice: **binární strom**

Back:

zakořeněný + uspořádaný + každý vrchol má nejvýše dva syny
<!--ID: 1717529248431-->
END

---

### binární haldy

START
BI-SZZ

Definice: **binární (minimová) halda** (+2 věci co musí splňovat)

Back:

binární strom, v jehož každém vrcholu $x$ je klíč $k(x)$ a splňuje:
1. **tvar haldy** = všechny hladiny kromě poslední jsou zaplněné, poslední je zaplněná zleva
2. **haldové uspořádání** = $k(v) \le k(s)$, pokud $s$ je syn $v$ (tzn. v kořeni je minimum)
<!--ID: 1717529248434-->
END

---


START
BI-SZZ

Kolik **hladin** má **binární halda** s $n \ge 3$ prvky? 

Back:

$$\lfloor \log n \rfloor + 1$$
<!--ID: 1717529248437-->
END

---


START
BI-SZZ

Kolik **vnitřních vrcholů** má **binární halda** s $n \ge 3$ prvky? 

Back:

$$\lfloor n/2 \rfloor$$
<!--ID: 1717529248442-->
END

---


START
BI-SZZ

Kolik **listů** má **binární halda** s $n \ge 3$ prvky? 

Back:

$$\lceil n/2 \rceil$$
<!--ID: 1717529248445-->
END

---


START
BI-SZZ

Popiš implementaci `Insert(H,k)` u **binární haldy**

Back:

`Insert(H, k)` = vložení nového klíče `k` do haldy `H` v $\mathcal O (\log n)​$

![](../Assets/Pasted%20image%2020240604203144.png)
<!--ID: 1717529248448-->
END

---


START
BI-SZZ

Jakou časovou složitost má `Insert(H,k)` u **binární haldy**?

Back:

$$\mathcal O (\log n)$$
<!--ID: 1717529248452-->
END

---


START
BI-SZZ

Popiš implementaci `FindMin(H)` u **binární haldy**

Back:

`FindMin(H)` = nalezení minima ze všech klíčů v haldě `H` v $\mathcal O (1)​$

```
vrať k(H.root)
```
<!--ID: 1717529248455-->
END

---


START
BI-SZZ

Jakou časovou složitost má `FindMin(H)` u **binární haldy**?

Back:

$$\mathcal O (1)$$
<!--ID: 1717529248458-->
END

---

START
BI-SZZ

Popiš implementaci `ExtractMin(H)` u **binární haldy**

Back:

`ExtractMin(H)` = odtranění a vrácení minima z haldy `H` v $\mathcal O (\log n)​$

![](../Assets/Pasted%20image%2020240604203635.png)
<!--ID: 1717529248461-->
END

---


START
BI-SZZ

Jakou časovou složitost má `ExtractMin(H)` u **binární haldy**?

Back:

$$\mathcal O (\log n)$$
<!--ID: 1717529248464-->
END

---


START
BI-SZZ

Jak vypadá **binární halda** reprezentována v paměti pomocí **pole**?

Na jakém indexu jsou:
- levý syn
- pravý syn
- otec

Back:

v paměti lze reprezentovat pomocí pole, kde jsou vrcholy seřazené “po řádcích”, pohyb ve stromu je pak snadný díky pointerové aritmetice, protože platí, že vrchol na indexu $i$:
- má levého syna na indexu $2i$
- má pravého syna na indexu $2i+1$
- má otce na indexu $\lfloor i/2 \rfloor$
- je připojen jako levý syn $\iff i \mod 2 = 0$
<!--ID: 1717529248467-->
END

---


START
BI-SZZ

Popiš implementaci `HeapBuild` u **binární haldy**

Back:

`HeapBuild` = vytvoření haldy `H` z neseřazených prvků `x = x_1...x_n` v $\mathcal O (n)​$

![](../Assets/Pasted%20image%2020240604203908.png)
<!--ID: 1717529248470-->
END

---


START
BI-SZZ

Jakou časovou složitost má `HeapBuild` u **binární haldy**?

Back:

$$\mathcal O (n)$$
<!--ID: 1717529248473-->
END

---


START
BI-SZZ

Popiš implementaci `HeapSort` u **binární haldy**

Back:

`HeapSort` = řadicí algoritmus v $\mathcal O (n \log n)​$

```
H := HeapBuild(x)
pole res := []
Pro i := 0...H.n: // H.n = počet prvků haldy
	res[i] := ExtractMin(H)
vrať res
```
<!--ID: 1717529248476-->
END

---


START
BI-SZZ

Jakou časovou složitost má `HeapSort` u **binární haldy**?

Back:

$$\mathcal O (n \log n)$$
<!--ID: 1717529248479-->
END

---

### binomiální stromy


START
BI-SZZ

Definice: **binomiální strom**

Back:

**binomiální** strom $B_k$ (řádu $k$) = uspořádaný zakořeněný strom definovaný rekurentně:
- $B_0$ je tvořen jen kořenem
- $B_k$ (pro $k \ge 1$) získáme zavěšením stromů $B_0, B_1,\dots, B_{k-1}$ pod nový kořen
	- alternativní definice tohoto bodu: $B_k$ (pro $k \ge 1$) se skládá ze stromu $B_{k-1}$, pod jehož kořen je jako nejpravější syn zavěšen další $B_{k-1}$
<!--ID: 1717529248482-->
END

---


START
BI-SZZ

Kolik **hladin** má **binomiální strom**?

Back:

$k+1$
<!--ID: 1717529248486-->
END

---


START
BI-SZZ

Kolik **vrcholů** má **binomiální strom** na $i$-té hladině?

Back:

$\binom k i$
<!--ID: 1717529248489-->
END

---


START
BI-SZZ

Kolik **vrcholů** má **binomiální strom** celkem?

Back:

$$|V| = 2^k$$
<!--ID: 1717529248493-->
END

---


START
BI-SZZ

Kolik **hladin** má binomiální strom pokud má $n$ vrcholů?

Back:

$1+\log n$ hladin
<!--ID: 1717529248496-->
END

---

### binomiální haldy


START
BI-SZZ

Definice: **binomiální halda**

Back:

**binomální halda** = uspořádaná množina binomálních stromů $\mathcal T = T_1, \dots, T_{\mathscr l}$, kde:
- stromy jsou uspořádány vzestupně podle řádů
- od každého řádu je v BH nejvýše jeden strom
- pro každý strom platí haldové uspořádání ($k(v) \le k(s)$, pokud $s$ je syn $v$)
- počet prvků $n = |V(T_1)| + \cdots + |V(T_l)|$

![](../Assets/Pasted%20image%2020240604205641.png)
<!--ID: 1717529248499-->
END

---


START
BI-SZZ

Co platí pro

strom $B_i$ je v $n$-prvkové BH $\iff \ ???$

Back:

strom $B_i$ je v $n$-prvkové BH $\iff$ve dvojkovém zápisu $b_k b_{k-1} \dots b_0$ čísla $n$ je $b_i = 1$
<!--ID: 1717529248502-->
END

---


START
BI-SZZ

Kolik má $n$-prvková BH stromů?

Back:

$n$-prvková BH má až $\mathcal O (\log n)$ stromů
<!--ID: 1717529248506-->
END

---


START
BI-SZZ

Popiš implementaci `BHInsert` u **binomiální haldy**

Back:

![](../Assets/Pasted%20image%2020240604205746.png)
<!--ID: 1717529248509-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHInsert` u **binomiální haldy**?

Back:

amortizovaně (= v dlouhodobém průměru) $\Theta^*(1)$, jinak v $\mathcal O (\log n)​$
<!--ID: 1717529248512-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHFindMin` u **binomiální haldy**?

Back:

$\mathcal O (1)$ (pokud si udržujeme ukazatel na minimum, jinak $\mathcal O (\log n)$)
<!--ID: 1717529248515-->
END

---

START
BI-SZZ

Popiš implementaci `BHExtractMin` u **binomiální haldy**

Back:

![](../Assets/Pasted%20image%2020240604205955.png)
<!--ID: 1717529248518-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHExtractMin` u **binomiální haldy**?

Back:

$$\mathcal O (\log n)$$
<!--ID: 1717529248522-->
END

---

START
BI-SZZ

Popiš implementaci `BHMergeTree` u **binomiální haldy**

Back:

![](../Assets/Pasted%20image%2020240604210023.png)
<!--ID: 1717529248525-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHMergeTree` u **binomiální haldy**?

Back:

$\mathcal O (1)$
<!--ID: 1717529248528-->
END

---

START
BI-SZZ

Popiš implementaci `BHMerge` u **binomiální haldy**

Back:

Hint: připomíná binární “školní” sčítání pod sebou

![](../Assets/Pasted%20image%2020240604210130.png)
![](../Assets/Pasted%20image%2020240604210145.png)
<!--ID: 1717529248531-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHMerge` u **binomiální haldy**?

Back:

sjednocení prvků z dvou BH do jedné BH v $\mathcal O (\log n)​$
<!--ID: 1717529248534-->
END

---

START
BI-SZZ

Popiš implementaci `BHBuild` u **binomiální haldy**

Back:

```
Pro každý prvek x_i vstupního pole x:
	BHInsert(x_i)
```
<!--ID: 1717529248537-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BHBuild` u **binomiální haldy**?

Back:

$$\mathcal O (n)$$
<!--ID: 1717529248540-->
END

---

START
BI-SZZ

Jakou časovou složitost má `BHDecreaseKey` u **binomiální haldy**?

Back:

`BHDecreaseKey` = snížení hodnoty klíče prvku v $\mathcal O (\log n)$ (analogicky `BHIncreaseKey`)
<!--ID: 1717529248543-->
END

---

START
BI-SZZ

Jakou časovou složitost má `BHDelete` u **binomiální haldy**?

Back:

`BHDelete` = smazání prvku v $\mathcal O (\log n)$
<!--ID: 1717529248546-->
END

---


START
BI-SZZ

Jak vypadá binomiální halda v paměti? Co obsahuje jeden prvek?

Back:

- v paměti lze množinu stromů i seznamy synů reprezentovat jako spojové seznamy
- prvek lze reprezentovat jako strukturu obsahující hodnotu klíče a ukazatele na otce, levého sourozence a nejpravějšího syna
<!--ID: 1717529248549-->
END

---

### vyhledávací stromy


START
BI-SZZ

Definice: **binární vyhledávací strom (BVS)**

Back:

**binární vyhledávací strom (BVS)** = binární strom s klíči $k(v)$, kde pro každý vrchol platí:
- pokud $a \in L(v)$, pak $k(a) < k(v)$
- pokud $b \in R(v)$, pak $k(b) > k(v)$
<!--ID: 1717529248552-->
END

---


START
BI-SZZ

Popiš implementaci `BVSShow` u **binárního vyhledávacího stromu**

Back:

`BVSShow(v)` = vypsání vzestupně uspořádané posloupnosti všech klíčů v $\mathcal O (|T(v)|)​$

![](../Assets/Pasted%20image%2020240604210651.png)
<!--ID: 1717529248555-->
END

---


START
BI-SZZ

Jakou časovou složitost má `BVSShow(v)` u **binárního vyhledávacího stromu**?

Back:

$$\mathcal O (|T(v)|)$$
<!--ID: 1717529248558-->
END

---


START
BI-SZZ

Popiš implementaci `BVSMin` u **binárního vyhledávacího stromu**

Back:

`BVSMin(v)` = nalezení vrcholu s minimálním klíčem (analogicky `BVSMax(v)`)

![](../Assets/Pasted%20image%2020240604210832.png)
<!--ID: 1717529248561-->
END

---


START
BI-SZZ

Popiš implementaci `BVSPred` u **binárního vyhledávacího stromu**

Back:

`BVSPred(v,w)` = nalezení předchůdce $w$ (analogicky `BVSSucc(v,w)`)

![](../Assets/Pasted%20image%2020240604211009.png)
<!--ID: 1717529248564-->
END

---


START
BI-SZZ

Popiš implementaci `BVSFind` u **binárního vyhledávacího stromu**

Back:

`BVSFind(v,x)` = nalezení vrcholu s klíčem x, pokud existuje

![](../Assets/Pasted%20image%2020240604211045.png)
<!--ID: 1717529248568-->
END

---


START
BI-SZZ

Popiš implementaci `BVSInsert` u **binárního vyhledávacího stromu**

Back:

`BVSInsert(v,x)` = vložení nového vrcholu s klíčem $x$ do BVS, pokud v něm zatím není

![](../Assets/Pasted%20image%2020240604211104.png)
<!--ID: 1717529248571-->
END

---


START
BI-SZZ

Popiš implementaci `BVSDelete` u **binárního vyhledávacího stromu**

Back:

`BVSDelete(v,x)` = odstranění vrcholu s klíčem $x$ z BVS, pokud existuje

![](../Assets/Pasted%20image%2020240604211201.png)
<!--ID: 1717529248574-->
END

---

#### vyvažování


START
BI-SZZ

Definice: **dokonale vyvážený BVS**

Back:

**dokonale vyvážený BVS** = velikosti podstromů každého vrcholu se liší nejvýš o jedna ($\left| |L(v)| - |R(v)| \right| \le 1$ pro každý vrchol)​
<!--ID: 1717529248577-->
END

---


START
BI-SZZ

Kolik hladin má dokonale vyvážený BVS o $n$ vrcholech?

Back:

$1 + \lfloor \log n \rfloor$
<!--ID: 1717529248580-->
END

---


START
BI-SZZ

Jakou časovou složitost $\Omega$ a $\mathcal O$ mají operace `BVSMin`, `BVSFind`, `BVSInsert` i `BVSDelete`?

Back:

časová složitost `BVSMin`, `BVSFind`, `BVSInsert` i `BVSDelete` je závislá na hloubce$(\mathcal O(h(T(v))))$, takže pokud je strom vyvážený, je to $\mathcal \Omega(\log |T(v)|)$ a pokud ne, tak v nejhorším případě $\mathcal O (|T(v)|)$ (např. pokud je strom cestou)
<!--ID: 1717529248583-->
END

---


START
BI-SZZ

Definice: **hloubkově vyvážený** BVS

Back:

**hloubkově vyvážený** BVS = hloubky podstromů každého vrcholu se liší nejvýš o jedna $(\left| h(L(v)) - h(R(v)) \right| \le 1$ pro každý vrchol$)$
- pokud má $n$ vrcholů, pak má $\Theta(\log n)$ hladin
<!--ID: 1717529248585-->
END

---


START
BI-SZZ

Definice: **AVL-strom** + jak funguje

Back:

jedna z možných implementací hloubkově vyváženého BVS

`AVLInsert` a `AVLDelete` pracují v $\mathcal O (\log n)$ a kontrolují a opravují hloubkovou vyváženost: v každém vrcholu směrem ke kořeni spočtou **znaménko vrcholu** $\delta(v) = h(R(v)) - h(L(v))$, a pokud vyjde jiná hodnota než $\{-1, 0, +1\}$, opraví strom pomocí jednoduchých a dvojitých rotací

![](../Assets/Pasted%20image%2020240604211709.png)
<!--ID: 1717529248591-->
END

---

### hashovací tabulky


START
BI-SZZ

Definice: **slovník**

Back:

**slovník** (aka **tabulka** aka **mapa** aka **asociativní pole**) = datová struktura pro reprezentaci dynamické množiny prvků s unikátními **klíči** z universa ($K \subseteq \mathcal U$ a $|K| \ll |\mathcal U|$)
<!--ID: 1717529248596-->
END

---


START
BI-SZZ

Co je **hashovací tabulka**?

Back:

**hashovací tabulka** (aka **rozptylovací tabulka**, _hash table_) $\mathcal P$ = pole **přihrádek** $\{0,\dots,m-1\}$, do kterých se umisťují prvky podle hashovací funkce
<!--ID: 1717529248599-->
END

---


START
BI-SZZ

Jaká je časová složitost u **hashovací tabulky**?

Back:

hashovací tabulka - časová složitost průměrně konstantní, paměťová $\mathcal O (|K|)​$
<!--ID: 1717529248602-->
END

---

#### hashovací funkce


START
BI-SZZ

Co je **hashovací funkce** (u hashovací tabulky)?

Back:

**hashovací funkce** $h: \mathcal U \to \mathcal P$ přiřazuje každému klíči z universa jednu přihrádku, do které bude prvek s tímto klíčem umístěn
- přihrádek je mnohem méně než prvků universa, takže bude docházet ke **kolizím**, kterým se nevyhneme, ale chceme je aspoň minimalizovat
- ideální hashovací funkce je konstantní a třídí klíče rovnoměrně (= $n$-prvkovou množinu klíčů rozprostře mezi $m$ přihrádek tak, že v každé bude nejvýš $\lceil n/m \rceil$ prvků)
- **faktor naplnění** hashovací tabulky $\alpha$ = průměrný počet prvků v přihrádce ($\alpha = n/m$)
<!--ID: 1717529248605-->
END

---


START
BI-SZZ

Jaké jsou empiricky "dobré" hashovací funkce? (4)

Back:

- **lineární kongruence** $k \mapsto ak \mod m$ ($m$ je prvočíslo, $a,m$ jsou nesoudělné)
- **vyšší bity součinu** $k \mapsto \lfloor (ak \mod 2^w) / 2^{w-l} \rfloor$
- **skalární součin** $k_0,\dots,k_{d-1} \mapsto \left( \sum_{i=0}^{d-1} a_i k_i \right) \mod m$
- **polynom** $k_0,\dots,k_{d-1} \mapsto \left( \sum_{i=0}^{d-1} a^i k_i \right) \mod m$
<!--ID: 1717529248607-->
END

---


START
BI-SZZ

Jaký předpis má hashovací funkce **lineární kongruence** (u hashovacích tabulek)

Back:

$k \mapsto ak \mod m$
<!--ID: 1717529248610-->
END

---

START
BI-SZZ

Jaký předpis má hashovací funkce **lineární kongruence** (u hashovacích tabulek)

Back:

$k \mapsto \lfloor (ak \mod 2^w) / 2^{w-l} \rfloor$

END

---

START
BI-SZZ

Jaký předpis má hashovací funkce **lineární kongruence** (u hashovacích tabulek)

Back:

$k_0,\dots,k_{d-1} \mapsto \left( \sum_{i=0}^{d-1} a_i k_i \right) \mod m$

END

---

START
BI-SZZ

Jaký předpis má hashovací funkce **lineární kongruence** (u hashovacích tabulek)

Back:

$k_0,\dots,k_{d-1} \mapsto \left( \sum_{i=0}^{d-1} a^i k_i \right) \mod m$

END

---


START
BI-SZZ

Jak funguje **přehešování** hashovacích tabulek?

Back:

pokud nedokážeme dobře odhadnout počáteční počet přihrádek, můžeme tabulku přehešovat, jakmile faktor naplnění překročí nějakou konstantu $(\alpha > Z)$, tzn. vybrat novou hashovací funkci a každý prvek podle ní vložit do nové dvakrát větší tabulky
<!--ID: 1717529248615-->
END

---


START
BI-SZZ

Jakými způsoby lze řešit **kolize** u hashovacích tabulek?

Back:

- řetězení
- otevřené adresování
<!--ID: 1717529248618-->
END

---


START
BI-SZZ

Jak funguje řešení kolize u hashovacích tabulek pomocí **řetězení**?

Back:

**řetězení** (aka **otevřené hashování**, _chaining_, _open hashing_) = prvky v jedné přihrádce jsou ukádány do spojové seznamu (všechny operace v $\mathcal O(1)$, pokud je hashovací funkce ideální, klíče jsou z universa vybírány rovnoměrně a $m = \Theta(n)$)
<!--ID: 1717529248621-->
END

---


START
BI-SZZ

Jak funguje řešení kolize u hashovacích tabulek pomocí **otevřeného adresování**?

Back:

**otevřené adresování** (aka **uzavřené hashování**, _open addressing_, _closed hashing_) = hashovací funkce vrací **vyhledávací posloupnost** přihrádek, prvek se uloží do první volné z nich, takže v každé přihrádce může být nejvýš jeden prvek
- při mazání přihrádku nevyprazdňujeme, ale označíme ji náhrobkem $\dag$, aby hledání mohlo skončit, jakmile narazí na prázdnou přihrádku
	- pokud je náhrobků moc (třeba $m/4$), tabulku přehešujeme
- vyhledávací posloupnost lze vytvořit různě, např. lineárním přidáváním (do nejbližší volné přihrádky) nebo dvojitým hashováním ($h(k,i) = (f(k) + i \cdot g(k)) \mod m$, kde $i$ je počet neúspěšných pokusů a $f,g$ jsou různé hashovací funkce)
- pokud jsou vyhledávací posloupnosti náhodné permutace, pak neúspěšné hledání kontroluje v průměru nejvýše $1/(1-\alpha)$ přihrádek
<!--ID: 1717529248623-->
END

---
