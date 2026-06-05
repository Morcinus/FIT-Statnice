---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-16 NI-PDP

> NI-SPOL-16 (NI-PDP)
> Výkonnostní měřítka paralelních algoritmů, PRAM model, APRAM model, škálovatelnost.


## Výkonnostní měřítka paralelních algoritmů

<!--
Original Flashcard ID: 1746599653441
-->

START
NI-SZZ


Jaké jsou typy časových složitostí u sekvenčních algoritmů? Kdy je sekvenční algoritmus optimální?

Back:

- $T_A^K(n)$ - časová složitost sekvenčního algoritmu $A$ pro řešení problému $K$
- $SL^K(n)$ - spodní mez sekvenční časové složitosti (tzn. nejhorší časová složitost **nejlepšího možného** sekvenčního algoritmu)
- $SU^K(n)$ - horní mez sekvenční časové složitosti (tzn. nehorší časová složitost **nejrychlejšího existujícího** sekvenčního algoritmu)

Optimální když:
![](../../Assets/Pasted%20image%2020250605133159.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217171916.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250217171948.png)

<!-- ExampleEnd -->

Tags: otazka03
<!--ID: 1779300070408-->
END

---

<!--
Original Flashcard ID: 1746599653449
-->

START
NI-SZZ


Definice: **Paralelní časová složitost**

Back:

![](../../Assets/Pasted%20image%2020250217172311.png)

$n$ je velikost vstupních dat
$p$ je počet procesorů, nebo jader, nebo vláken (podle toho co zrovna řeším)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217172323.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250217172552.png)

<!-- ExampleEnd -->

Tags: otazka03
<!--ID: 1779300070411-->
END

---

<!--
Original Flashcard ID: 1746599653456
-->

START
NI-SZZ


Jak se spočítá $T(n,p)$? (obecně)

Back:

Sečtou se **výpočetní** kroky a **komunikační** kroky (jednoho vlákna)

Tags: otazka03
<!--ID: 1779300070414-->
END

---

<!--
Original Flashcard ID: 1746599653464
-->

START
NI-SZZ


Definice: **Paralelní cena**

- K čemu to je užitečné

Back:

![](../../Assets/Pasted%20image%2020250217172611.png)

Neboli doba, jak dlouho jsem vytěžoval všechny procesory.

Pozn. to $\times$ je normální násobení

K čemu to je:

- Když spustím paralelní výpočet, tak se vytvoří $p$ vláken, která se používají od začátku do konce, i když jsou _idle_.
- Proto je např. vhodné aby se všechny procesory/vlákna vytěžovala podobně, abych tím snížil celkovou cenu.
- Např. na superpočítači platím za počet procesorů a je jim jedno jak efektivně to využívám.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217172623.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

Doba, jak dlouho jsem využíval všechny procesory. Například když mi někdo poskytne část superpočítače, tak ho bude zajímat, kolik procesorů jsem jak dlouho využíval. Je mu ale jedno, co jsem tam dělal a jak moc jsem je využíval.

<!-- ExampleEnd -->

Tags: otazka03
<!--ID: 1779300070417-->
END

---

<!--
Original Flashcard ID: 1746599653470
-->

START
NI-SZZ


Lemma: omezení $C(n,p)$

Back:

![](../../Assets/Pasted%20image%2020250217172704.png)

$\Omega$ je dolní časová složitost

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250217172714.png)

<!-- ProofEnd -->

Tags: otazka03
<!--ID: 1779300070420-->
END

---

<!--
Original Flashcard ID: 1746599653479
-->

START
NI-SZZ


Definice: **Cenová optimalita** (aneb kdy je **cena** paralelního algoritmu optimální)

Back:

![](../../Assets/Pasted%20image%2020260521115816.png)

$C(n,p) = O(SU(n)) = \Theta(SU(n))$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217173209.png)

<!-- DetailInfoEnd -->

Tags: otazka03
<!--ID: 1779300070423-->
END

---

<!--
Original Flashcard ID: 1746599653488
-->

START
NI-SZZ


Definice: **Paralelní zrychlení**

Back:

![](../../Assets/Pasted%20image%2020250217173224.png)

Říká mi, o kolik je rychlejší paralelní algoritmus na $p$ procesorech než sekvenční

Tags: otazka03
<!--ID: 1779300070426-->
END

---

<!--
Original Flashcard ID: 1746599653497
-->

START
NI-SZZ


Lemma: **velikost/omezení** $S(n,p)$

Back:

$S(n,p) \leq p$ nebo $S(n,p) = O(p)$

![](../../Assets/Pasted%20image%2020250217173245.png)

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250217173257.png)

<!-- ProofEnd -->

Tags: otazka03
<!--ID: 1779300070429-->
END

---

<!--
Original Flashcard ID: 1749125141109
-->

START
NI-SZZ


Co mi říká to, když:

- $S(n,p) < 1$
- $S(n,p) = 1$
- $S(n,p) > 1$
- $S(n,p) < p$
- $S(n,p) ≈ p$
- $S(n,p) > p$

Back:

- Běží mi to pomaleji než sekvenční algoritmus
- Běží mi to stejně jak sekvenční algoritmus
- Běží mi to rychleji než sekvenční algoritmus
- Běží mi to **sublineárně** (to je dost častý)
- Běží mi to **lineárně** (to je dost vzácný)
- Běží mi to **superlineárně** (to není způsobeno paralelizací, ale např. cachováním atd.)

Tags: otazka03
<!--ID: 1779300070432-->
END

---

<!--
Original Flashcard ID: 1746599653504
-->

START
NI-SZZ


Definice: **lineární paralelní zrychlení**

Back:

$S(n,p) = \Theta (p)$

![](../../Assets/Pasted%20image%2020250217173319.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217173326.png)

<!-- DetailInfoEnd -->

Tags: otazka03
<!--ID: 1779300070434-->
END

---

<!--
Original Flashcard ID: 1746599653510
-->

START
NI-SZZ


Co je **superlineární zrychlení**? Kdy to může nastat? (2)

Back:

Když $S(n,p) > p$

**Jak toho dosáhnout**

- Sekvenční algoritmus nemá dost paměti na 1-procesorovém systému a souhrnná paměť paralelního systému je dostatečná
- Anomálie při prohledávání stavového prostoru

![](../../Assets/Pasted%20image%2020250217173356.png)

Tags: otazka03
<!--ID: 1779300070437-->
END

---

<!--
Original Flashcard ID: 1746599653517
-->

START
NI-SZZ


Definice: **Spodní mez na paralelní čas**

- co to znamená vlastními slovy

Back:

![](../../Assets/Pasted%20image%2020250217173424.png)

Vyjadřuje **teoreticky nejlepší možný čas**, kterého by šlo dosáhnout, pokud by práce šla **dokonale rovnoměrně** rozdělit mezi $p$ procesorů **bez jakékoli režie** (žádná komunikace, synchronizace, čekání…).

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250217173442.png)

<!-- ExampleEnd -->

Tags: otazka03
<!--ID: 1779300070440-->
END

---

<!--
Original Flashcard ID: 1746599653524
-->

START
NI-SZZ


Definice: **Paralelní efektivnost**

- vzoreček
- co to znamená vlastními slovy

Back:

![](../../Assets/Pasted%20image%2020250217173520.png)

Říká mi to "jak dobře jsou procesory vytíženy", jak efektivně jsou vytěžovány procesory.

$1$ =100% vyžíženy po celou dobu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217173601.png)

<!-- DetailInfoEnd -->

Tags: otazka03
<!--ID: 1779300070443-->
END

---

<!--
Original Flashcard ID: 1746599653531
-->

START
NI-SZZ


Lemma: zrychlení na jádro

Back:

![](../../Assets/Pasted%20image%2020250217173537.png)

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250217173547.png)

<!-- ProofEnd -->

Tags: otazka03
<!--ID: 1779300070446-->
END

---

<!--
Original Flashcard ID: 1746599653538
-->

START
NI-SZZ


Definice: **konstantní efektivnost**

Back:

![](../../Assets/Pasted%20image%2020250217173756.png)

Tags: otazka03
<!--ID: 1779300070448-->
END

---

<!--
Original Flashcard ID: 1746599653545
-->

START
NI-SZZ


Věta: **Paralelní optimalita výkonnosti** (čemu jsou rovny 3 věci)

Back:

![](../../Assets/Pasted%20image%2020250217173813.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250217173845.png)
![](../../Assets/Pasted%20image%2020250217173857.png)
![](../../Assets/Pasted%20image%2020250217173909.png)
![](../../Assets/Pasted%20image%2020250217174046.png)

<!-- ExampleEnd -->

Tags: otazka03
<!--ID: 1779300070451-->
END

---

## PRAM model

<!--
Original Flashcard ID: 1746599653362
-->

START
NI-SZZ


Co je **PRAM**?

- procesory
- paměť procesorů?
- sdílená paměť?
- vstup
- výstup
- provádí se operace synchronně nebo asynchronně?

Back:

**Parallel Random Access Machine**

- Je to **výpočetní model**
- Máme **množinu procesorů** $P$, každý má **lokální paměť**
- Máme pole **sdílených paměťových buňek** $M$
- Každý $P_i$ může přistupovat do libovolné buňky v $O(1)$

**Vstup**:

- $n$ položek v prvních $n$ buňkách sdílené paměti

**Výstup**:

- $n'$ položek v $n'$ buňkách sdílené paměti

Instrukce se provádí **synchronně**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217165648.png)

<!-- DetailInfoEnd -->

Tags: otazka01
<!--ID: 1779300070454-->
END

---

<!--
Original Flashcard ID: 1746599653370
-->

START
NI-SZZ


Jaké jsou **3 základní instrukce** v PRAMu?

Back:

- `READ` - **čtení** - čtou ze sdílené paměti
- `WRITE` - **zápis** - zapisují do sdílené paměti
- `LOCAL` - **lokální operace** - jakákoliv lokální operace

(nebo ten stroj nedělá nic)

Tags: otazka01
<!--ID: 1779300070457-->
END

---

<!--
Original Flashcard ID: 1749116284300
-->

START
NI-SZZ


Jak dlouho trvají `READ`, `WRITE` a `LOCAL` u PRAMu?

- Jednotkový model
- Globální model

Back:

- **Jednotkový model** - R/W/L trvají čas $1$
- **Globální model** - L trvá čas $1$, R/W trvají $d > 1$

Tags: otazka01
<!--ID: 1779300070460-->
END

---

<!--
Original Flashcard ID: 1746599653378
-->

START
NI-SZZ


Jaké jsou způsoby řešení časově závislých chyb u PRAMu? (3)

Back:

- **EREW-PRAM** - Exclusive Read, Exclusive Write
	- Žádné 2 procesory nesmí číst nebo psát do dané buňky současně
- **CREW-PRAM** - Concurrent Read, Exclusive Write
	- Procesory můžou současně číst buňku, ale zapisovat může jen jeden
- **CRCW-PRAM** - Concurrent Read, Concurrent Write
	- Procesory můžou číst i zapisovat do buňek současně

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217170014.png)

<!-- DetailInfoEnd -->

Tags: otazka01
<!--ID: 1779300070463-->
END

---

<!--
Original Flashcard ID: 1746599653384
-->

START
NI-SZZ


Jakými způsoby se u **CRCW-PRAM** rozhoduje, který procesor může přistoupit k paměti?

Back:

- **Priority-CRCW-PRAM** - procesory mají pevné priority, dokončení zápisu je povoleno procesoru s nejvyšší prioritou
- **Arbitrary CRCW-PRAM** - zápis je povolen náhodnému procesoru
- **Common-CRCW-PRAM** - všem procesorům je dovoleno dokončit zápis, když jsou všechny zapisované hodnoty stejné. Každý algoritmus pak musí dodržet tuto podmínku (jinak je výsledek nedefinovaný).

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217170024.png)

<!-- DetailInfoEnd -->

Tags: otazka01
<!--ID: 1779300070466-->
END

---

## APRAM model

<!--
Original Flashcard ID: 1746599653391
-->

START
NI-SZZ


Co je **asynchronní PRAM** (APRAM)?

- jak se liší od PRAMu
- jak fungují RWL operace
- co se používá pro synchronizaci?
- jak fungují globální fáze? jak jsou ošetřeny kolize?

Back:

- Procesory pracují **asynchronně** - tzn. každý má vlastní **hodiny** a pracuje jinou rychlostí
- Operace RWL jako u PRAM
- Je nutná explicitní **bariérová synchronizace**

Globální fáze:

- APRAM výpočet je rozdělen do **globálních fází**
- V každé **fázi** procesory pracují **asynchronně** a synchronizují se **bariérovou synchronizací**
- V jedné globální fázi nemůže do buňky pristoupit více procesorů, když do ní jeden z nich zapisuje

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217170251.png)

<!-- DetailInfoEnd -->

Tags: otazka02
<!--ID: 1779300070469-->
END

---

<!--
Original Flashcard ID: 1746599653399
-->

START
NI-SZZ


Jaké jsou **časové složitosti** oprací u **APRAM**?

- lokální operace
- globální READ nebo WRITE
- k po sobě jdoucích globálních READ nebo WRITE
- bariérová synchronizace

Back:

- lokální operace = $1$
- globální READ nebo WRITE = $d$
- k po sobě jdoucích globálních READ nebo WRITE $k+d-1$
- bariérová synchronizace $B(p) = O(d\log p)$

$p$ jsou neklesající funkce, co se provádí

<!-- DetailInfoStart -->

Bariéra je docela drahá.
![](../../Assets/Pasted%20image%2020250217170833.png)

<!-- DetailInfoEnd -->

Tags: otazka02
<!--ID: 1779300070471-->
END

---

<!--
Original Flashcard ID: 1746599653405
-->

START
NI-SZZ


Jaké jsou 2 možnosti implementace bariéry u APRAMu?

Back:

**Centrální čítač** ($\Theta (dp)$)

1. Nastaví se na $0$
2. Každý proces po dokončení výpočtu inkementuje o $1$ a deaktivuje se
3. Pokud je $\text{čítač} \geq p$, nastaví bariéru do odchozí fáze a aktivuje procesy
4. Poslední aktivovaý proces nastaví bariéru do příchozí fáze

**Binární redukční strom** ($\Theta(d\log p)$)

1. Proces narazí na bariéru a čeká, dokud skončí redukce jeho podstromu
2. Po dokončení redukce pošle signál rodiči.
3. Když kořen dostane signál z obou podstromů, přepne bariéru do odchozí fáze.
4. Procesy se aktivují směrem dolů.

![](../../Assets/Pasted%20image%2020250217170907.png)

Tags: otazka02
<!--ID: 1779300070474-->
END

---

<!--
Original Flashcard ID: 1749119646835
-->

START
NI-SZZ


Jakou časovou složitost mají tyto implementace bariéry u **APRAM**u?

- centrální čítač
- binární redukční strom

Back:

- centrální čítač: $B(p) = \Theta(dp)$
- binární redukční strom: $B(p) = \Theta(d \log p)$

$p$ - počet procesů
$d$ - globální časová délka R/W operace

Tags: otazka02
<!--ID: 1779300070477-->
END

---

<!--
Original Flashcard ID: 1746599653412
-->

START
NI-SZZ


Jaké jsou 3 typy **paralelních programovacích modelů**?

Back:

- **Data paralelismus** (iterační paralelismus) - např. iterace nad poli
- **Task paralelismus** (funkční paralelismus) - např. rekurze
- **Paralelní programovací šablony**
<!--ID: 1779300070480-->
END

---

<!--
Original Flashcard ID: 1746599653419
-->

START
NI-SZZ


Co je programovací model: **datový/iterační paralelismus**?

Back:

Datově nezávislé iterace cyklu se provádí paralelně jednotlivými procesory.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217171003.png)

<!-- DetailInfoEnd -->

Tags: otazka03
<!--ID: 1779300070482-->
END

---

<!--
Original Flashcard ID: 1746599653427
-->

START
NI-SZZ


Co je programovací model: **funkční paralelismus**? Jak si procesory získávají úlohy?

Back:

- **tasks/úlohy** - program je rozdělen do nezávislých kusů kódu, co jsou prováděny paralelně
- **task pool** - zásobárna úloh, ze které si je procesory berou a vykonávají je

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217171134.png)

<!-- DetailInfoEnd -->

Tags: otazka03
<!--ID: 1779300070485-->
END

---

## Škálovatelnost

<!--
Original Flashcard ID: 1746599653551
-->

START
NI-SZZ


Definice: **Paralelní škálovatelnost** (kdy je algoritmus škálovatelný)

Back:

![](../../Assets/Pasted%20image%2020250217174325.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260605103507.png)
![](../../Assets/Pasted%20image%2020250217174340.png)

<!-- DetailInfoEnd -->

Tags: otazka04
<!--ID: 1779300070488-->
END

---

<!--
Original Flashcard ID: 1749127163112
-->

START
NI-SZZ


Z jakých podílů se skládá každý **sekvenční algoritmus**? (2)

(u Amdahlova zákona)

Back:

- **inherentně sekvenční podíl** $f(s) \in (0,1)$ - může provést pouze jedno vlákno
	- trvá $t_\text{seq}$ času
- **paralelizovatelný podíl** $1-f(s)$
	- trvá $t_\text{par}$ času

Tags: otazka04
<!--ID: 1779300070491-->
END

---

<!--
Original Flashcard ID: 1746599653558
-->

START
NI-SZZ


Definice: **Amdahlův zákon**

- vzoreček
- co nám jinými slovy říká?

Back:

Nechť je algoritmus $A$ paralelizován pro pevné $n$ pomocí $p > 1$ vláken. Potom
$$S(n,p) = \frac{T_A(n)}{f_s \cdot T_A(n) + \frac{1-f_s}{p}{T_A(n)}} = \frac{1}{f_s + \frac{1-f_s}{p}} \leq \frac{1}{f_s}$$

Neboli říká:

- Pro problém fixní velikosti má omezené množství paralelismu - tzn. od určitého počtu procesorů to už nezrychlíme přidáváním dalších

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217174435.png)

<!-- DetailInfoEnd -->

Tags: otazka04
<!--ID: 1779300070494-->
END

---


START
FIT-Card

Co nám obecně říká Amdahlův zákon? (vlastními slovy)

Back:

Pro problém fixní velikosti má omezené množství paralelismu ($\leq \frac{1}{f_s}$)

Tzn. od určitého počtu procesorů to už nezrychlíme přidáváním dalších
<!--ID: 1779449215690-->
END

---


<!--
Original Flashcard ID: 1746599653564
-->

START
NI-SZZ


Definice: **Gustafsonův zákon**

- vzoreček
- co nám říká

Back:

$$S(n,p) = \frac{t_\text{seq} + t_\text{par}(n,1)}{t_\text{seq} + t_\text{par}(n,p)}$$

**Co nám říká**:

- s rostoucím $p$ máme úměrně navyšovat i velikost problému $n$
- Tzn. sekvenční část potrvá vždy $t_\text{seq}$ a paralelní $t_\text{par}(n,p)$ se bude lineárně škálovat s $p$ v čase.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217174519.png)

<!-- DetailInfoEnd -->

Tags: otazka04
<!--ID: 1779300070497-->
END

---

<!--
Original Flashcard ID: 1746599653571
-->

START
NI-SZZ


Definice: **silná škálovatelnost** a **slabá škálovatelnost**
Back:

- **Silná škálovatelnost** = máme fixní $n$, jak moc je algoritmus schopný dosáhnout lineárního zrychlení s rostoucím $p$ (Amdahlův zákon to omezuje)
- **Slabá škálovatelnost** = jak se mění paralelní čas s $p$ pro fixní $n/p$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217174616.png)

<!-- DetailInfoEnd -->

Tags: otazka04
<!--ID: 1779300070500-->
END

---

<!--
Original Flashcard ID: 1746599653579
-->

START
NI-SZZ


Definice: **Izoefektivní funkce**

Back:

Vlastními slovy:
Izoefektivní funkce ti říká, **jak musí růst problém (nebo jak může růst počet procesorů)**, aby byla zachována efektivita.

![](../../Assets/Pasted%20image%2020250217174635.png)

![](../../Assets/Pasted%20image%2020260605115116.png)

Jinými slovy:

1. $\psi_1$ říká, jaké má být nejméně $n$ (velikost instance), aby pro daný počet procesorů $p$ efektivita neklesla pod $E_0$
2. $\psi_2$ říká, kolik maximálně můžeme mít procesorů $p$ pro danou velikost instance $n$ tak aby nám efektivita neklesla.

Jinými slovy:

1. Pokud problém roste s $n = \Omega(\psi_1(p))$, pak efektivnost neklesne pod $E_0$
2. Pokud počet procesorů nepřeroste $p = O(\psi_2(n))$, pak efektivnost neklesne pod $E_0$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250217174642.png)

<!-- DetailInfoEnd -->

Tags: otazka04
<!--ID: 1779300070502-->
END

---