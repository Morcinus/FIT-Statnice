---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-19 NI-PDP

> NI-SPOL-19 (NI-PDP)
> Přímé ortogonální a hyperkubické propojovací sítě paralelních počítačů (definice, vlastnosti, vnořování).

## Přímé ortogonální a hyperkubické propojovací sítě paralelních počítačů (definice, vlastnosti, vnořování)

<!--
Original Flashcard ID: 1749326556209
-->

START
NI-SZZ


Definice: $k$-regulární graf

Back:

![](../../Assets/Pasted%20image%2020250607220044.png)

Graf, kde každý uzel má **přesně stupeň $k$**.

Tags: otazka24
<!--ID: 1779300070726-->
END

---

<!--
Original Flashcard ID: 1746518365097
-->

START
NI-SZZ


Definice: **Uzlově symetrický graf**

Back:

![](../../Assets/Pasted%20image%2020250402091053.png)

Připomenutí: automorfismus je to, že můžeme proházet vrcholy, ale tak, že ty co byly spojené zůstanou spojené. Např. u čtverce můžeme rotovat vrcholy nebo je přehazovat podle os.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402091101.png)

<!-- DetailInfoEnd -->

Tags: otazka24
<!--ID: 1779300070729-->
END

---

<!--
Original Flashcard ID: 1746518365078
-->

START
NI-SZZ


Definice: **Topologie $G_n$**

Back:

![](../../Assets/Pasted%20image%2020250402090819.png)

Tags: otazka25
<!--ID: 1779300070732-->
END

---

<!--
Original Flashcard ID: 1746518365081
-->

START
NI-SZZ


Definice: **hierarhicky rekurzivní topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090833.png)

Tags: otazka25
<!--ID: 1779300070735-->
END

---

<!--
Original Flashcard ID: 1746518365089
-->

START
NI-SZZ


Definice: **Řídká a hustá topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090925.png)

Tags: otazka25
<!--ID: 1779300070738-->
END

---

<!--
Original Flashcard ID: 1749326556211
-->

START
NI-SZZ


Definice: Vzdálenost uzlů

Back:

![](../../Assets/Pasted%20image%2020250607215315.png)

Délka nejkratší cesty

Tags: otazka25
<!--ID: 1779300070740-->
END

---

<!--
Original Flashcard ID: 1749326556220
-->

START
NI-SZZ


Definice: **Průměr grafu $G$**

(tady asi stačí jen tušit ten význam)

Back:

![](../../Assets/Pasted%20image%2020250607215333.png)

Největší excentricita mezi všemi uzly v grafu. Tedy maximální vzdálenost mezi jakoukoli dvojicí uzlů.

Tags: otazka25
<!--ID: 1779300070743-->
END

---

<!--
Original Flashcard ID: 1746518365122
-->

START
NI-SZZ


Definice: **bisekční šířka**

Back:

![](../../Assets/Pasted%20image%2020250402091542.png)

Tags: otazka25
<!--ID: 1779300070746-->
END

---

<!--
Original Flashcard ID: 1746518365124
-->

START
NI-SZZ


Definice: bipartitní graf

Back:

![](../../Assets/Pasted%20image%2020250402091556.png)

Tags: otazka25
<!--ID: 1779300070749-->
END

---

<!--
Original Flashcard ID: 1746518365127
-->

START
NI-SZZ


Definice: vyvážený bipartitní graf

Back:

![](../../Assets/Pasted%20image%2020250402091618.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250402091628.png)

<!-- ExampleEnd -->

Tags: otazka25
<!--ID: 1779300070752-->
END

---

<!--
Original Flashcard ID: 1746518365130
-->

START
NI-SZZ


Jaké jsou **2 hlavní požadavky** na PSPP?

PSPP = Propojovací sítě paralelních počítačů

Back:

Vpodstatě hlavní otázka je jak moc budem mít propojený graf.

2 hlavní, ale protichůdné požadavky:

- **Konstantní stupeň uzlu** $\Rightarrow$ řídká topologie (levné směrovače)
- **Malý průměr a malá průměrná vzdálenost** $\Rightarrow$ snižuje dobu komunikace

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402091747.png)

<!-- DetailInfoEnd -->

Tags: otazka25
<!--ID: 1779300070755-->
END

---

<!--
Original Flashcard ID: 1746518365135
-->

START
NI-SZZ


Jaké jsou další požadavky na PSPP? (5)

Back:

- Uzlová symetrie a hierarchická rekurzivita
- Vysoká souvislost
- Bisekční šířka
- Vnořitelnost jiných a do jiných topologií
- Podpora pro směrování a kolektivní komunikační operace

Tags: otazka25
<!--ID: 1779300070758-->
END

---

<!--
Original Flashcard ID: 1746518365151
-->

START
NI-SZZ


Jaké jsou základní přímé PSPP? (4)

Back:

![](../../Assets/Pasted%20image%2020250402092036.png)

Tags: otazka26
<!--ID: 1779300070761-->
END

---

<!--
Original Flashcard ID: 1746518365154
-->

START
NI-SZZ


Jak vypadá **binární hyperkrychle** dimenze $n, Q_n$?

Back:

- $Q_n$ = $n$-rozměrná **binární hyperkrychle**
- $V(Q_n) = \{0,1\}^n$
- hrany vedou mezi dvojicemi vrcholů, které se liší v jednom bitu, hran je

![](../../Assets/Pasted%20image%2020250402092105.png)

Tags: otazka26
<!--ID: 1779300070764-->
END

---

<!--
Original Flashcard ID: 1749327902331
-->

START
NI-SZZ


Kolik vrcholů má binární hyperkrychle $Q_n$?

Back:

$$2^n$$

Tags: otazka26
<!--ID: 1779300070766-->
END

---

<!--
Original Flashcard ID: 1749327902343
-->

START
NI-SZZ


Kolik hran má binární hyperkrychle $Q_n$?

Back:

$$n2^{n-1}$$

<!-- ExplanationStart -->

Binární hyperkrychle $Q_n$ má **$n \cdot 2^{n-1}$ hran** – každá z $2^n$ vrcholů má stupeň $n$, ale každá hrana je započítaná dvakrát (od obou konců).

<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1779300070769-->
END

---

<!--
Original Flashcard ID: 1749327902345
-->

START
NI-SZZ


Jaký stupeň má každý vrchol hyperkrychle $Q_n$?

Back:

$n$

<!-- ExplanationStart -->

Každý uzel v hyperkrychli $Q_n$ má **stupeň $n$**, protože se liší v jednom bitu od $n$ sousedních uzlů.

<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1779300070772-->
END

---

<!--
Original Flashcard ID: 1749327902348
-->

START
NI-SZZ


Jaký je průměr grafu hyperkrychle $Q_n$?

Back:

$$n$$

<!-- ExplanationStart -->

**Průměr grafu** hyperkrychle $Q_n$ je **$n$** – největší možná Hammingova vzdálenost mezi dvěma uzly.

<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1779300070775-->
END

---

<!--
Original Flashcard ID: 1749327902351
-->

START
NI-SZZ


Jaká je **bisekční šířka** hyperkrychle $Q_n$?

Back:

$$2^{n-1} = N/2$$

Tzn. **nejvyšší možná**

<!-- ExplanationStart -->

**Bisekční šířka** hyperkrychle $Q_n$ je **$2^{n-1}$** – počet hran, které je třeba přerušit k rozdělení grafu na dvě stejně velké části.

<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1779300070778-->
END

---

<!--
Original Flashcard ID: 1746518365157
-->

START
NI-SZZ


Jaké speciální vlastnosti má $Q_n$? (3)

Back:

- vzdálenost uzlů odpovídá **Hammingově vzdálenosti**
- je to **Hamiltonovský graf** 
- je **ortogonální** (lze zkonstruovat kartézským součinem)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402092229.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250402092405.png)

<!-- ExampleEnd -->

Tags: otazka26
<!--ID: 1779300070781-->
END

---

<!--
Original Flashcard ID: 1749327902359
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ **řídká**?

Back:

Ne není.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020260602101243.png)

<!-- ImageEnd -->


Tags: otazka26
<!--ID: 1779300070787-->
END

---

<!--
Original Flashcard ID: 1749327902361
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ **hierarchicky rekurzivní**?

Back:

**Ano**

Tags: otazka26
<!--ID: 1779300070791-->
END

---

<!--
Original Flashcard ID: 1749327902364
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ ortogonální?

(aka lze ji konstruovat kartézským součinem)

Back:

**Ano je**

Tags: otazka26
<!--ID: 1779300070794-->
END

---

<!--
Original Flashcard ID: 1749327902370
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ uzlově/hranově/optimálně souvislá?

Back:

Je **optimálně souvislá**.

Tags: otazka26
<!--ID: 1779300070797-->
END

---

<!--
Original Flashcard ID: 1749327902375
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ bipartitní/vyvážená bipartitní?

Back:

Je **vyvážená bipartitní**.

Tags: otazka26
<!--ID: 1779300070799-->
END

---

<!--
Original Flashcard ID: 1749391765452
-->

START
NI-SZZ


Jaká je průměrná vzdálenost v $Q_n$ mezi dvěma uzly?

Back:

$$\lceil n/2 \rceil$$

Tags: otazka26
<!--ID: 1779300070802-->
END

---

<!--
Original Flashcard ID: 1749391765455
-->

START
NI-SZZ


Když máme dva uzly vzdálenosti $k$ v $Q_n$, kolik mezi nimi existuje různých nejkratších cest?

Back:

$$k!$$

Mezi dvěma uzly ve vzdálenosti $k$ existuje $k!$ různých nejkratších cest

Tags: otazka26
<!--ID: 1779300070805-->
END

---

<!--
Original Flashcard ID: 1749391765458
-->

START
NI-SZZ


Co je **Hammingova vzdálenost** v hyperkrychli $Q_n$?

Back:

Hammingova vzdálenost = nejnižší počet bitů, co musím v binárním řetězci změnit, abych se dostal na jiný řetězec

V hyperkrychli každý vrchol reprezentuje jeden řetězec. Hammingova vzdálenost je tedy nejmenší cesta mezi 2 vrcholy

Tags: otazka26
<!--ID: 1779300070808-->
END

---

<!--
Original Flashcard ID: 1749327902377
-->

START
NI-SZZ


Je hyperkrychle $Q_n$ **Hamiltonovská**? Co to **znamená**?

Back:

Ano, hyperkrychle $Q_n$ je **Hamiltonovská**.

Tzn.

- obsahuje **Hamiltonovskou cestu** - cesta, kde je každý vrchol navštíven právě jednou
- obsahuje **Hamiltonovskou kružnici** - uzavřená hamiltonovská cesta

Tags: otazka26
<!--ID: 1779300070810-->
END

---

<!--
Original Flashcard ID: 1749327902380
-->

START
NI-SZZ


Používá se hyperkrychle $Q_n$ v praxi často?

Back:

Hyperkrychle má **logaritmický stupeň**, je **škálovatelná po mocninách dvojky** (pro $n$), ale kvůli těmto vlastnostem se používá **poměrně vzácně** – hodí se jen v určitých aplikacích.

Tags: otazka26
<!--ID: 1779300070813-->
END

---

<!--
Original Flashcard ID: 1749327902382
-->

START
NI-SZZ


Jaké směrování používá $Q_n$ hyperkrychle? Které kolektivní operace jsou podporované?

Back:

- **e-cube směrování** - Při odesílání zprávy z vrcholu $a$ do $b$ se jde postupně v bitech od konce adresy $a$ a pokud v bitu není shoda, provede se jeho flip (aby shoda byla) a přechod na daného souseda
- existují optimální algoritmy pro **všechny kolektivní operace**

Tags: otazka26
<!--ID: 1779300070816-->
END

---

<!--
Original Flashcard ID: 1746518365172
-->

START
NI-SZZ


Jaký je hlavní nedostatek hyperkrychlí?

Back:

**logaritmický stupeň a škálovatelnost pouze po mocninách dvojky** = abych rozšířil topologii, musím zdvojnásobit počet uzlů, což je overkill ve většině případů

Proto se moc nepoužívají a když už tak pouze nízkodimenzionální.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402092601.png)

<!-- DetailInfoEnd -->

Tags: otazka26
<!--ID: 1779300070819-->
END

---

<!--
Original Flashcard ID: 1746518365175
-->

START
NI-SZZ


Definice: **Mřížka** $M(z_1, \dots, z_n)$

- čemu odpovídají vrcholy
- čemu odpovídají hrany
- speciální případ

Back:

- $M(z_1, \dots, z_n)$ = $n$-rozměrná **mřížka** rozměrů $z_1, \dots, z_n$
- vrcholy jsou dány souřadnicemi $(a_1, \dots, a_n)$, kde $0 \le a_i \le z_i - 1$, vrcholů je $\prod z_i$
- hrany vedou mezi dvojicemi vrcholů, které se liší v jedné souřadnici právě o jedna
- speciální případ, pokud se všechna $z_i$ rovnají: $M^n(z)$ = **$z$-ární $n$-krychle**

![](../../Assets/Pasted%20image%2020250402092638.png)

Tags: otazka27
<!--ID: 1779300070822-->
END

---

<!--
Original Flashcard ID: 1749396114405
-->

START
NI-SZZ


Kolik má hran mřížka $M(z_1, \dots, z_n)$?

Back:

$$\sum_i^n (z_i-1)\prod_{j=1, j \neq i}^n z_j$$

Vzorec mechanicky spočítá hrany v jednom směru, vynásobí to počtem těchto řad (aby pokryl celou plochu/prostor) a pak to samé zopakuje pro všechny zbylé směry.

Tags: otazka27
<!--ID: 1779300070825-->
END

---

<!--
Original Flashcard ID: 1749396114410
-->

START
NI-SZZ


Jaký má stupeň každý vrchol mřížky $M(z_1, \dots, z_n)$?

Back:

$$n \leq \text{stupeň} \leq n + j$$

$j  = |\{z_i : z_i > 2\}|$

Tags: otazka27
<!--ID: 1779300070828-->
END

---

<!--
Original Flashcard ID: 1749396114413
-->

START
NI-SZZ


Jaký je průměr grafu mřížky $M(z_1, \dots, z_n)$?

Back:

$$\sum_{i=1}^n(z_i-1)$$
Tags: otazka27
<!--ID: 1779300070831-->
END

---

<!--
Original Flashcard ID: 1749396114416
-->

START
NI-SZZ


Jaká je bisekční šířka mřížky $M(z_1, \dots, z_n)$?

Back:

![](../../Assets/Pasted%20image%2020250608171009.png)

Tags: otazka27
<!--ID: 1779300070834-->
END

---

<!--
Original Flashcard ID: 1749396114419
-->

START
NI-SZZ


Je regulární mřížka $M(z_1, \dots, z_n)$?

Back:

**Nope**

Tags: otazka27
<!--ID: 1779300070837-->
END

---

<!--
Original Flashcard ID: 1749396114421
-->

START
NI-SZZ


Je uzlově symetrická mřížka $M(z_1, \dots, z_n)$?

Back:

**Nope**

Tags: otazka27
<!--ID: 1779300070840-->
END

---

<!--
Original Flashcard ID: 1749396114424
-->

START
NI-SZZ


Je hierarchicky rekurzivní mřížka $M(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka27
<!--ID: 1779300070843-->
END

---

<!--
Original Flashcard ID: 1749396114427
-->

START
NI-SZZ


Je ortogonální mřížka $M(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka27
<!--ID: 1779300070846-->
END

---

<!--
Original Flashcard ID: 1749396114430
-->

START
NI-SZZ


Je uzlově/hranově/optimálně souvislá mřížka $M(z_1, \dots, z_n)$?

Back:

**optimálně souvislá**

Tags: otazka27
<!--ID: 1779300070849-->
END

---

<!--
Original Flashcard ID: 1749396114433
-->

START
NI-SZZ


Je bipartitní/vyvážená bipartitní mřížka $M(z_1, \dots, z_n)$?

Back:

**bipartitní**

Tags: otazka27
<!--ID: 1779300070852-->
END

---

<!--
Original Flashcard ID: 1749396114436
-->

START
NI-SZZ


Je mřížka $M(z_1, \dots, z_n)$ **hamiltonovská**?

Back:

hamiltonovská$\iff$aspoň jedno $z_i$ je sudé

Tags: otazka27
<!--ID: 1779300070855-->
END

---

<!--
Original Flashcard ID: 1749396114438
-->

START
NI-SZZ


Jaké směrování se používá v mřížce $M(z_1, \dots, z_n)$?

Back:

Dimenzně uspořádané (XY routing v 2-D a XYZ routing v 3-D)

Zpráva jde vždy nejprve ve směru první dimenze, pak druhé, pak třetí... až do cíle.

Tags: otazka27
<!--ID: 1779300070858-->
END

---

<!--
Original Flashcard ID: 1749396114441
-->

START
NI-SZZ


Pro co existují v mřížce $M(z_1, \dots, z_n)$ algoritmy?

Back:

existují topologicky optimální algoritmy pro mnoho problémů

Tags: otazka27
<!--ID: 1779300070861-->
END

---

<!--
Original Flashcard ID: 1749396114444
-->

START
NI-SZZ


Co znamená, že má mřížka $M(z_1, \dots, z_n)$ Manhattonovskou vzdálenost?

Back:

Tzn. vzdálenost mezi dvěma body se počítá tak, že jeden krok je vždy ve směru nějaké dimenze (nemůžu jít diagonálně).

$\text{Manhattan}(a, b) = \sum_{i=1}^{n} |a_i - b_i|$

pro body $a = (a_1, a_2, \dots, a_n)$ a $b = (b_1, b_2, \dots, b_n)$ v $n$-rozměrném prostoru

Tags: otazka27
<!--ID: 1779300070863-->
END

---

<!--
Original Flashcard ID: 1746518365178
-->

START
NI-SZZ


Jaké má speciální vlastnosti mřížka $M(z_1, \dots, z_n)$? (2)

Back:

- **Manhattonská vzdálenost**
- Hamiltonovská$\iff$aspoň jedno $z_i$ je sudé

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402092756.png)

<!-- DetailInfoEnd -->

Tags: otazka27
<!--ID: 1779300070866-->
END

---

<!--
Original Flashcard ID: 1746518365180
-->

START
NI-SZZ


Definice: $n$-rozměrný toroid $K(z_1, \dots, z_n)$?

Back:

- $K(z_1, \dots, z_n)$ = $n$-rozměrný **toroid** rozměrů $z_1, \dots, z_n$
- vrcholy jsou stejné jako v mřížce
- hrany vedou stejně jako v mřížce a navíc “od posledního k prvnímu”
- speciální případ, pokud se všechna $z_i$ rovnají: $K^n(z)$ = **$z$-ární $n$-toroid**

![](../../Assets/Pasted%20image%2020250402092944.png)

Tags: otazka28
<!--ID: 1779300070870-->
END

---

<!--
Original Flashcard ID: 1746518365183
-->

START
NI-SZZ


Jaké má speciální vlastnosti toroid $K(z_1, \dots, z_n)$? (3)

Back:

- **hamiltonovský**
- vzdálenost je **manhattanská** (když rozdíly modulíme $z_i$)
- jedna z **komerčně nejúspěšnějších topologií**

Tags: otazka28
<!--ID: 1779300070873-->
END

---

<!--
Original Flashcard ID: 1749400670370
-->

START
NI-SZZ


Kolik má vrcholů toroid $K(z_1, \dots, z_n)$?

Back:

$$\prod_{i=1}^n z_i$$

Tags: otazka28
<!--ID: 1779300070875-->
END

---

<!--
Original Flashcard ID: 1749400670384
-->

START
NI-SZZ


Kolik má hran toroid $K(z_1, \dots, z_n)$?

Back:

$$n \cdot \prod_{i=1}^n z_i$$

Tags: otazka28
<!--ID: 1779300070878-->
END

---

<!--
Original Flashcard ID: 1749400670386
-->

START
NI-SZZ


Jaký má stupeň každý vrchol toroid $K(z_1, \dots, z_n)$?

Back:

$$2n$$

Tags: otazka28
<!--ID: 1779300070881-->
END

---

<!--
Original Flashcard ID: 1749400670389
-->

START
NI-SZZ


Jaký je průměr grafu toroidu $K(z_1, \dots, z_n)$?

Back:

$$\sum_{i=1}^n ⌊z_i/2⌋$$

(přibližně poloviční oproti $M$)

Tags: otazka28
<!--ID: 1779300070884-->
END

---

<!--
Original Flashcard ID: 1749400670392
-->

START
NI-SZZ


Jaká je bisekční šířka toroidu $K(z_1, \dots, z_n)$?

Back:

$$2\text{bw}_e(M(\dots))$$

(dvojnásobná oproti $M$)

Tags: otazka28
<!--ID: 1779300070887-->
END

---

<!--
Original Flashcard ID: 1749400670394
-->

START
NI-SZZ


Je regulární toroid $K(z_1, \dots, z_n)$?

Back:

Ano, $2n$-regulární

Tags: otazka28
<!--ID: 1779300070890-->
END

---

<!--
Original Flashcard ID: 1749400670397
-->

START
NI-SZZ


Je uzlově symetrický toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka28
<!--ID: 1779300070893-->
END

---

<!--
Original Flashcard ID: 1749400670400
-->

START
NI-SZZ


Je hierarchicky rekurzivní toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**, ale nelze rozložit na stejnorozměrné toroidy.

Tags: otazka28
<!--ID: 1779300070896-->
END

---

<!--
Original Flashcard ID: 1749400670402
-->

START
NI-SZZ


Je ortogonální toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka28
<!--ID: 1779300070899-->
END

---

<!--
Original Flashcard ID: 1749400670408
-->

START
NI-SZZ


Je bipartitní/vyvážený bipartitní toroid $K(z_1, \dots, z_n)$?

Back:

vyvážený bipartitní$\iff$všechny $z_i$ jsou sudé

Tags: otazka28
<!--ID: 1779300070902-->
END

---

<!--
Original Flashcard ID: 1749400670410
-->

START
NI-SZZ


Jaké směrování se používá v toroidu $K(z_1, \dots, z_n)$?

Back:

Asi stejné jako v mřížce $M$

Tags: otazka28
<!--ID: 1779300070905-->
END

---

<!--
Original Flashcard ID: 1749328373623
-->

START
NI-SZZ


Pro co existují v toroidu $K(z_1, \dots, z_n)$ algoritmy?

Back:

existují topologicky optimální algoritmy pro mnoho problémů

Tags: otazka28
<!--ID: 1779300070908-->
END

---

<!--
Original Flashcard ID: 1749406279503
-->

START
NI-SZZ


Jaké jsou **Hyperkubické topologie**? (2)

Back:

- **Řídké hyperkubické sítě typu motýlek**
- **Tlusté stromy**

Tags: otazka29
<!--ID: 1779300070911-->
END

---

<!--
Original Flashcard ID: 1746518365199
-->

START
NI-SZZ


Co jsou řídké hyperkubické sítě?

Back:

Grafy odvozené od hyperkrychle rozvinutím každého uzlu hyperkrychle do více uzlů

Tags: otazka29
<!--ID: 1779300070914-->
END

---

<!--
Original Flashcard ID: 1749406279511
-->

START
NI-SZZ


Jaké jsou 3 typy motýlků?

Back:

- **zaobalený motýlek**
- **obyčejný motýlek**
- **obousměrný motýlek**

Tags: otazka29
<!--ID: 1779300070917-->
END

---

<!--
Original Flashcard ID: 1746518365202
-->

START
NI-SZZ


Jaké mají společné vlastnosti řídké hyperkubické sítě?

Back:

![](../../Assets/Pasted%20image%2020250402093500.png)
<!--ID: 1779300070920-->
END

---

<!--
Original Flashcard ID: 1749406279514
-->

START
NI-SZZ


Jaký **průměr** mají **řídké hyperkubické sítě** (motýlci)?

Back:

$$O(\log N)$$

Pozor, je to $N$ (tedy počet vrcholů a ne dimenze $n$).

Tento průměr je **optimální**.

Tags: otazka29
<!--ID: 1779300070923-->
END

---

<!--
Original Flashcard ID: 1749406279517
-->

START
NI-SZZ


Jakou **bisekční šířku** mají **řídké hyperkubické sítě** (motýlci)?

Back:

$$\Omega(N / \log N)$$

Tags: otazka29
<!--ID: 1779300070926-->
END

---

<!--
Original Flashcard ID: 1749406279519
-->

START
NI-SZZ


Jak jsou škálovatelné **řídké hyperkubické sítě** (motýlci)?

Back:

Ještě hůře než hyperkrychle. $N = n2^n$ nebo podobně.

Tags: otazka29
<!--ID: 1779300070929-->
END

---

<!--
Original Flashcard ID: 1749406279522
-->

START
NI-SZZ


Pro jaké algoritmy jsou vhodné **řídké hyperkubické sítě** (motýlci)?

Back:

ideální pro **normální hyperkubické algoritmy** (= v prvním kroku se používají jen hrany první dimenze, ve druhém jen druhé atd.)

Tags: otazka29
<!--ID: 1779300070932-->
END

---

<!--
Original Flashcard ID: 1746518365204
-->

START
NI-SZZ


Jak vypadá zabalený motýlek $wBF_n$?

Back:

- $wBF_n$ = **zabalený motýlek** dimenze $n$
- vrcholy jsou dané dvojicí $(i,x)$, kde $0 \le i < n, x \in \{0,1\}^n$
- hrany vedou vždy jednak do 2 sousedních $i$ v rámci stejného $x$ (jako v kružnici), jednak do pravého sousedního $i$ v takovém $x$, které se liší v $i$-tém bitu a jednak totéž z nějakého jiného $x$ (z uzlu, pro který já jsem pravým sousedem v $x$ lišícím se v jeho $i$-tém bitu), hran je

![](../../Assets/Pasted%20image%2020250402093522.png)

Tags: otazka29
<!--ID: 1779300070935-->
END

---

<!--
Original Flashcard ID: 1749406279525
-->

START
NI-SZZ


Kolik má vrcholů zabalený motýlek $wBF_n$?

Back:

$n \cdot 2^n$

Tags: otazka29
<!--ID: 1779300070938-->
END

---

<!--
Original Flashcard ID: 1749406279528
-->

START
NI-SZZ


Kolik má hran zabalený motýlek $wBF_n$?

Back:

$$n \cdot 2^{n+1}$$

Tags: otazka29
<!--ID: 1779300070941-->
END

---

<!--
Original Flashcard ID: 1749406279530
-->

START
NI-SZZ


Je regulární zabalený motýlek $wBF_n$?

Back:

$4$-regulární

Tags: otazka29
<!--ID: 1779300070944-->
END

---

<!--
Original Flashcard ID: 1749406279533
-->

START
NI-SZZ


Je uzlově symetrický zabalený motýlek $wBF_n$?

Back:

**Ano**

Tags: otazka29
<!--ID: 1779300070947-->
END

---

<!--
Original Flashcard ID: 1749406279536
-->

START
NI-SZZ


Je hierarchicky rekurzivní zabalený motýlek $wBF_n$?

Back:

**Není**

Tags: otazka29
<!--ID: 1779300070950-->
END

---

<!--
Original Flashcard ID: 1749406279539
-->

START
NI-SZZ


Je hamiltonovský zabalený motýlek $wBF_n$?

Back:

**Ano**

Tags: otazka29
<!--ID: 1779300070953-->
END

---

<!--
Original Flashcard ID: 1749406279542
-->

START
NI-SZZ


Je bipartitní/vyvážená bipartitní zabalený motýlek $wBF_n$?

Back:

**vyvážený bipartitní**$\iff n$ je sudé

Tags: otazka29
<!--ID: 1779300070955-->
END

---

<!--
Original Flashcard ID: 1749406279545
-->

START
NI-SZZ


Je řídká/hustá síť zabalený motýlek $wBF_n$?

Back:

řídký

Tags: otazka29
<!--ID: 1779300070958-->
END

---

<!--
Original Flashcard ID: 1749406279548
-->

START
NI-SZZ


Jaký je průměr grafu zabalený motýlek $wBF_n$?

Back:

$n + \lfloor n/2 \rfloor$

Tags: otazka29
<!--ID: 1779300070961-->
END

---

<!--
Original Flashcard ID: 1749406279551
-->

START
NI-SZZ


Jaká je bisekční šířka zabalený motýlek $wBF_n$?

Back:

$$2^n$$

Tags: otazka29
<!--ID: 1779300070964-->
END

---

<!--
Original Flashcard ID: 1746518365207
-->

START
NI-SZZ


Věta: symetričnost $wBF_n$

Back:

![](../../Assets/Pasted%20image%2020250402093539.png)
<!--ID: 1779300070967-->
END

---

<!--
Original Flashcard ID: 1746518365210
-->

START
NI-SZZ


Věta: $\text{diam} (wBF_n) = \ ?$

Back:

![](../../Assets/Pasted%20image%2020250402093605.png)
<!--ID: 1779300070970-->
END

---

<!--
Original Flashcard ID: 1746518365213
-->

START
NI-SZZ


Jaké další vlastnosti má $wBF_n$

Back:

- $wBF_n$ je řídký graf s optimálním průměrem
- $wBF_n$ není hierarchicky rekurzivní
- $wBF_n$ je vyvážený bipartitní graf když n je sudé
- $wBF_n$ je Hamiltonovský graf

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250402093731.png)

<!-- DetailInfoEnd -->
<!--ID: 1779300070972-->
END

---

<!--
Original Flashcard ID: 1746518365216
-->

START
NI-SZZ


Jak vypadá obyčejný motýlek $oBF_n$?

Back:

- $oBF_n$ = obyčejný motýlek dimenze $n​$
- vrcholy podobně jako v zabaleném, ale $0 \le i \le n$, vrcholů je $(n+1) \cdot 2^n$
  - lze si představit jako sloupce (stejné $i$) a řady (stejné $x$)
- hrany podobně jako v zabaleném, ale bez modulení, hran je $n \cdot 2^{n+1}$
  - dva druhy hran: přímé (ve řadě) a křížové (do řady lišící se $i$-tým bitem)

![](../../Assets/Pasted%20image%2020250402093756.png)

Tags: otazka29
<!--ID: 1779300070975-->
END

---

<!--
Original Flashcard ID: 1749406279553
-->

START
NI-SZZ


Kolik má vrcholů obyčejný motýlek $oBF_n$?

Back:

$$(n+1) \cdot 2^n$$
Tags: otazka29
<!--ID: 1779300070978-->
END

---

<!--
Original Flashcard ID: 1749406279557
-->

START
NI-SZZ


Kolik má hran obyčejný motýlek $oBF_n$?

Back:

$$n \cdot 2^{n+1}$$

Tags: otazka29
<!--ID: 1779300070980-->
END

---

<!--
Original Flashcard ID: 1749406279559
-->

START
NI-SZZ


Je regulární obyčejný motýlek $oBF_n$?

Back:

není regulární (stupně jsou buď $2$ nebo $4$)

Tags: otazka29
<!--ID: 1779300070983-->
END

---

<!--
Original Flashcard ID: 1749406279562
-->

START
NI-SZZ


Je uzlově symetrický obyčejný motýlek $oBF_n$?

Back:

Není

Tags: otazka29
<!--ID: 1779300070986-->
END

---

<!--
Original Flashcard ID: 1749406279565
-->

START
NI-SZZ


Je hierarchicky rekurzivní obyčejný motýlek $oBF_n$?

Back:

**Ano**

(obsahuje dva podmotýlky dimenze $n-1$)

Tags: otazka29
<!--ID: 1779300070988-->
END

---

<!--
Original Flashcard ID: 1749406279567
-->

START
NI-SZZ


Je bipartitní/vyvážená bipartitní obyčejný motýlek $oBF_n$?

Back:

Je **bipartitní**

Tags: otazka29
<!--ID: 1779300070991-->
END

---

<!--
Original Flashcard ID: 1749406279570
-->

START
NI-SZZ


Je hamiltonovský obyčejný motýlek $oBF_n$?

Back:

**Není**

Tags: otazka29
<!--ID: 1779300070994-->
END

---

<!--
Original Flashcard ID: 1749406279573
-->

START
NI-SZZ


Jaký je průměr grafu obyčejný motýlek $oBF_n$?

Back:

$2n$

Tags: otazka29
<!--ID: 1779300070997-->
END

---

<!--
Original Flashcard ID: 1749406279576
-->

START
NI-SZZ


Jaká je bisekční šířka obyčejného motýlka $oBF_n$?

Back:

$2^n$

Tags: otazka29
<!--ID: 1779300070999-->
END

---

<!--
Original Flashcard ID: 1749406279579
-->

START
NI-SZZ


Jaké směrování se používá v obyčejný motýlek $oBF_n$?

Back:

e-cube směrování (existuje jediná nejkratší cesta mezi $(0,x)$ a $(n,y)$)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250402093916.png)

<!-- ImageEnd -->

Tags: otazka29
<!--ID: 1779300071002-->
END

---

<!--
Original Flashcard ID: 1749406279581
-->

START
NI-SZZ


Jak se liší přímý a nepřímý motýlek?

Back:

- **přímý** motýlek = procesory zároveň slouží jako přepínače
	- přepínač použije horní nebo dolní výstup podle cílového bitu
- **nepřímý** motýlek ($indBF_n$) = přepínače jsou oddělené (líp se škáluje, ale je to dražší)
	- přepínač použije inverzi nebo identitu podle toho, zda se startovní bit liší od cílového

![](../../Assets/Pasted%20image%2020250402093856.png)

Tags: otazka29
<!--ID: 1779300071005-->
END

---

<!--
Original Flashcard ID: 1746518365226
-->

START
NI-SZZ


Jak funguje směrování v topologii motýlek?

Back:

**Přímý motýlek:** podle cílové adresy, $0$ nahoru, $1$ dolu
**Nepřímý motýlek:** podle odlišnosti vstupního řetěžce od výstupního, liší změním směr, neliší pokračuju ve stejném směru (např. přijdeme na dolním vstupu, liší se bit, tak vyjdeme z horního výstupu)

V obou případech **čteme řetězce pozpátku** (používáme e-cube směrování)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402093916.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071008-->
END

---

<!--
Original Flashcard ID: 1746518365229
-->

START
NI-SZZ


Jak funguje obousměrný motýlek? Jak v něm funguje směrování?

Back:

- využívá přepínače, které umí přenos zleva doprava, zprava doleva i zleva doleva
- směrování z $u$ do $v$ má “vzestupnou” část doprava do společného kořene (kterých může být víc) a pak “sestupnou” část doleva

![](../../Assets/Pasted%20image%2020250402093935.png)

Tags: otazka29
<!--ID: 1779300071010-->
END

---

<!--
Original Flashcard ID: 1746599652712
-->

START
NI-SZZ


Definice: vnoření grafu do jiného

Back:

![](../../Assets/Pasted%20image%2020250419111531.png)

$\varphi$ je "fí"
$\xi$ je "xí"

Tags: otazka31
<!--ID: 1779300071013-->
END

---

<!--
Original Flashcard ID: 1746599652719
-->

START
NI-SZZ


Jaké metriky se dají měřit u kvality vnoření? (4)

Back:

- **maximální zatížení hostitelského uzlu**
- **maximální zahlcení hostitelské hrany**
- **maximální dilatace zdrojových hran v hostitelské síti**
- **expanze vnoření**

Tags: otazka31
<!--ID: 1779300071016-->
END

---

<!--
Original Flashcard ID: 1746599652861
-->

START
NI-SZZ


Jak funguje **Mortonova křivka**?

Back:

Souřadnice $Q_{2k}$ se vnořují rekurzivně na střídačku:
$\varphi(b_{2k-1}b_{2k-2}\dots b_{0}) = [b_{2k-1}, b_{2k-3} \dots b_k, b_{2k-2}, b_{2k-4}, \dots, b_0]$

![](../../Assets/Pasted%20image%2020250419114055.png)

Tzn. "vnořuju svisle - vodorovně na střídačku"

Tags: otazka32
<!--ID: 1779300071019-->
END

---

<!--
Original Flashcard ID: 1746599652884
-->

START
NI-SZZ


Lemma: Dilatace vnoření pomocí Svobodovy mapy

Back:

![](../../Assets/Pasted%20image%2020250419114211.png)

(stejnou dilataci jako Mortonovy křivky)

Tzn.
$$2^{k-1}$$

Tags: otazka32
<!--ID: 1779300071021-->
END

---

<!--
Original Flashcard ID: 1749553670422
-->

START
NI-SZZ


Když chceme mapovat $Q_{2k} \rightarrow M(2^k,2^k)$ a $\text{load}=1$, jakou funkci $\varphi$ chceme použít?

Jakou **obecně** a jakou třeba **konkrétně**?

Back:

Chceme použít funkci ve tvaru $\varphi(b_{2k-1}b_{2k-2}\dots b_{0}) = [x_{k-1} \dots x_0, y_{k-1} \dots y_0]$, která je **prostá a na**.

Konkrétně **Svobodova mapa** (lexikografické mapování) $\varphi(b_{2k-1}b_{2k-2}\dots b_{0}) = [b_{2k-1} \dots b_k, b_{k-1} \dots b_0]$

Pozn. toto platí pro $2D$, ale dá se to zobecnit pro ostatní dimenze.

Tags: otazka32
<!--ID: 1779300071024-->
END

---

<!--
Original Flashcard ID: 1749408692090
-->

START
NI-SZZ


Jakými způsoby lze vnořovat **hyperkrychle** do **mřížek**?

Back:

- Pomocí funkcí tvaru $\varphi(b_{2k-1}b_{2k-2}\dots b_{0}) = [x_{k-1} \dots x_0, y_{k-1} \dots y_0]$, které jsou **prosté a na**
- Pomocí **Mortonových křivek**

Tags: otazka32
<!--ID: 1779300071027-->
END

---

<!--
Original Flashcard ID: 1746599652891
-->

START
NI-SZZ


Věta: **kvaziizometričnost motýlků**

Back:

![](../../Assets/Pasted%20image%2020250419114304.png)

Tzn. lze je do sebe vnořit

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419114313.png)
![](../../Assets/Pasted%20image%2020250419114327.png)

<!-- DetailInfoEnd -->
<!--ID: 1779300071030-->
END

---