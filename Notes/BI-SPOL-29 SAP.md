---
created: 2024-05-12T15:09:36
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-29 SAP

> BI-SPOL-29 (SAP)
> Kódy pro zobrazení čísel se znaménkem a realizace aritmetických operací (paralelní sčítačka/odčítačka, realizace aritmetických posuvů, dekodér, multiplexor, čítač). Reprezentace čísel v pohyblivé řádové čárce

### Převody

START
BI-SZZ

Jak se převádí z dvojkové soustavy do desítkové?

Např. číslo $1011$

Back:

Každou číslici vynásobím mocninou základu té soustavy

$$1\cdot2^3+0\cdot 2^2+ 1\cdot 2^1+1\cdot 2^0 = 11$$
<!--ID: 1715528121533-->
END

---


START
BI-SZZ

Jak se převádí číslo z desítkové soustavy do dvojkové?

Např. číslo $13,3$

Back:

Část před čárkou dělím dvěma a zapisuju zbytky, pak to čtu zezdola:
$13 : 2 = 6 \ | \ 1$
$6 : 2 = 3 \ | \ 0$
$3 : 2 = 1 \ | \ 1$
$1 : 2 = 0 \ | \ 1$
$\rightarrow 1101$

Část za řádovou čárkou násobím dvěma a hodnotu před čárkou zapisuju vpravo (dokud nedostanu nulu nebo dokud se to nezačne opakovat)
$0,3 \cdot 2 = 0,6 \rightarrow 0$
$0,6 \cdot 2 = 1,2 \rightarrow 1$
$0,2 \cdot 2 = 0,4 \rightarrow 0$
$0,4 \cdot 2 = 0,8 \rightarrow 0$
$0,8 \cdot 2 = 1,6 \rightarrow 1$
$0,6 \cdot 2 = 1,2 \rightarrow 1$ - tady se to opakuje
$\rightarrow 010011 \dots$

V binární to je tedy cca
$$1101,010$$
<!--ID: 1715528121539-->
END

---

### řádová mřížka


START
BI-SZZ

K čemu slouží řádová mřížka?

Back:

řádová mřížka určuje formát čísel zobrazitelných v $l$ bitech

_Příklad_
![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121542-->
END

---


START
BI-SZZ

Co je $n$ v řádové mřížce?

Back:

nejvyšší řád v řádové mřížce

![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121545-->
END

---


START
BI-SZZ

Co je $-m$ v řádové mřížce?

Back:

nejnižší řád v řádové mřížce

![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121549-->
END

---


START
BI-SZZ

Co je $l$ v řádové mřížce?

Back:

**délka** řádové mřížky = počet řádů

$$l = n+m+1$$

![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121552-->
END

---


START
BI-SZZ

Co je $\varepsilon$ v řádové mřížce?

Back:

**jednotka** řádové mřížky = nejmenší nezáporné zobrazitelné číslo

![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121555-->
END

---


START
BI-SZZ

Co je $M$ v řádové mřížce?

Back:

**modul** řádové mřížky = nejmenší číslo, které již zobrazitelné není

![](../Assets/Pasted%20image%2020240512154710.png)
<!--ID: 1715528121558-->
END

---


START
BI-SZZ

Co jsou **fixed-point** čísla v řádové mřížce?

Back:

**čísla s pevnou řádovou čárkou** = v mřížce je pevně definovaná pozice řádové čárky

_Např._ 1 bit pro znaménko, 4 bity pro celou část a 3 bity pro část za čárkou
<!--ID: 1715528121561-->
END

---


START
BI-SZZ

Co jsou **floating-point** čísla v řádové mřížce?

Back:

**čísla s plovoucí řádovou čárkou** = v mřížce je “exponent”, tj. informace o posunu čárky vůči původní definované pozici, díky čemuž můžeme pokrýt větší řádový rozsah za cenu menší přesnosti

_Např._ 1 bit pro znaménko, 4 bity pro samotné číslo a 3 bity pro exponent
<!--ID: 1715528121564-->
END

---

### kódy pro zobrazení čísel se znaménkem


START
BI-SZZ

Co jsou **číselné kódy** a proč jsou potřeba při práci s čísly?

Back:

standardní polyadické soustavy (např. dvojková, desítková, šestnáctková) samy o sobě dokáží popsat jen **nezáporná čísla**

Pro zobrazení záporných čísel tedy potřebujeme **číselné kódy** = zobrazení z celých čísel na nezáporná čísla
<!--ID: 1715528121567-->
END

---


START
BI-SZZ

Jaké jsou typy číselných kódů? (3)

Back:

- **doplňkový kód** - používá se nejčastěji
- **přímý kód**
- **aditivní kód**
<!--ID: 1715528121570-->
END

---


#### doplňkový kód $\mathcal D$ (two’s complement)


START
BI-SZZ

Jak se zapisují čísla v **doplňkovém kódu**?

Back:

**Kladné číslo** - normálně binárně 
např. $\mathcal D (5) = 5_2 = 0101$

**Záporné číslo** - přičte se k němu modul $M$
např. $\mathcal D (-5) = (-5+16)_2 = 11_2 = 1011$

**Tip:** záporné číslo lze jednoduše získat invertováním bitů a přičtením jedničky
$$0101 \rightarrow 1010+1 \rightarrow 1011$$
<!--ID: 1715528121573-->
END

---


START
BI-SZZ

Čemu odpovídá první bit zleva v **doplňkovém kódu**?

Back:

Znaménku:
$0$ je $+$
$1$ je $-$

Znaménko je nedílnou součástí obrazu.
<!--ID: 1715528121576-->
END

---


START
BI-SZZ

Jak funguje **sčítání** v **doplňkovém kódu**?

Back:

Jako normální sčítání
<!--ID: 1715528121579-->
END

---


START
BI-SZZ

Jak funguje **odčítání** v **doplňkovém kódu**?

Např. pro $a - b$

Back:

Provede se jako sčítání $\mathcal D (a) + \mathcal D (-b)​$
<!--ID: 1715528121582-->
END

---


START
BI-SZZ

Co se děje s **přenosem** (carry) u **doplňkového kódu**?

Back:

Když nastane přenos, tak se ignoruje.
<!--ID: 1715528121585-->
END

---


START
BI-SZZ

Kdy u **doplňkového kódu** může při sčítání dojít k **overflow** (přeplnění)

Back:

Když sčítáním dvou kladných čísel vyšlo záporné nebo sčítáním dvou záporných vyšlo kladné, tak došlo k **přeplnění** (overflow) a **výsledek není správný** (protože se to nevejde do řádové mřížky).
<!--ID: 1715528121588-->
END

---


START
BI-SZZ

Jakým hradlem lze detekovat **přeplnění** u **doplňkového kódu**?

Back:

XOR hradlem, protože $\text{přeplnění} \iff p \oplus q$

_Obrázek s XOR hradlem_
![](../Assets/Pasted%20image%2020240512161714.png)
<!--ID: 1715528121591-->
END

---


START
BI-SZZ

Nakresli a vysvětli **sčítačku-odčítačku** v **doplňkovém kódu**.

Back:

$\sum$ značí sčítačku (sčítá dve čísla)
Pokud "odčítej" je `1`, tak se bude `b` odčítat od `a`

![](../Assets/Pasted%20image%2020240512162117.png)


<!--ID: 1715528121594-->
END

---


START
BI-SZZ

Jak se dá rozšířit řádová mřížka v **doplňkovém kódu**?

Back:

Rozkopíruje se znaménko

Např. $011 \rightarrow 000011$ a $101 \rightarrow 111101$)
<!--ID: 1715528121598-->
END

---


START
BI-SZZ

Jak se provádí **násobení** $2^k$ v **doplňkovém kódu**? K čemu může dojít?

Back:

**aritmetický posuv** vlevo o $k$ bitů odpovídá násobení $2^k$, zprava **doplňjeme nuly**, ale může dojít k přeplnění (pokud se změní znaménko)
<!--ID: 1715528121601-->
END

---


START
BI-SZZ

Jak se provádí **dělení** $2^k$ v **doplňkovém kódu**? K čemu může dojít?

Back:

posuv **doprava** o $k$ bitů odpovídá **dělení** $2^k$, zleva **rozkopírováváme znaménko**, ale může dojít ke **ztrátě přesnosti** (pokud z mřížky vypadne vpravo jednička)
<!--ID: 1715528121604-->
END

---

### přímý kód $\mathcal P$ (sign-magnitude)

START
BI-SZZ

Jak se zapisují čísla v **přímém kódu**?

Back:

- První bit znaménko ($0$ je $+$, $1$ je $-$)
- Další bity jsou absolutní hodnota čísla

_Pozn._ zbytečně obsahuje dvě nuly ($0000$ a $1000$)

_Např._ $\mathcal P (-5_{10}) = 1101$
<!--ID: 1715528121608-->
END

---


START
BI-SZZ

Jak se dělá sčítání a odečítání v **přímém kódu**?

(tip: asi je lepší si nakreslit vývojový diagram)

Back:

_Vývojový diagram:_
![](../Assets/Pasted%20image%2020240512171021.png)

pokud sčítáme $a+b$ se stejnými znaménky nebo odečítáme $a-b$ s opačnými znaménky → výsledek je $sgn(a) \cdot (|a|+|b|)$ → přenos znamená přeplnění, tzn. špatný výsledek

naopak pokud sčítáme $a+b$ s opačnými znaménky nebo odečítáme $a-b$ se stejnými znaménky → výsledek je $sgn(a) \cdot (|a|-|b|)$ → žádný přenos znamená výpůjčku, tzn. v takovém případě musíme otočit znaménko a odečíst výsledek od 0
<!--ID: 1715528121611-->
END

---


START
BI-SZZ

Jak se provádí **násobení** $2^k$ v **přímém kódu**? K čemu může dojít?

Back:

posuv neznaménkové části **vlevo** o k bitů odpovídá **násobení** $2^k$, zprava **doplňujeme nuly**, ale může dojít k přeplnění (pokud z druhého bitu zleva vypadne jednička)
<!--ID: 1715528121614-->
END

---


START
BI-SZZ

Jak se provádí **dělení** $2^k$ v **přímém kódu**? K čemu může dojít?

Back:

posuv neznaménkové části **doprava** o k bitů odpovídá **dělení** $2^k$, zleva **doplňujeme nuly**, ale může dojít ke **ztrátě přesnosti** (pokud z mřížky vypadne vpravo jednička)
<!--ID: 1715528121617-->
END

---

### aditivní kód $\mathcal A$ (biased)


START
BI-SZZ

Jak se zapisují čísla v **aditivním kódu**?

Back:

aditivní kód je jakoby "kód s posunutou nulou"

k zobrazovanému číslu se přičte vhodná **aditivní konstanta K**, typicky polovina modulu

_např._ $\mathcal A (-5_{10}) = (-5+\frac{16}{2})_2 = 3_2 = 0011$
<!--ID: 1715528121620-->
END

---


START
BI-SZZ

Jak lze převádět mezi doplňkovým a aditivním kódem?

Back:

mezi aditivním a doplňkovým kódem lze převádět v obou směrech přičtením konstanty $K$
<!--ID: 1715528121624-->
END

---

### realizace aritmetických operací


START
BI-SZZ

Jak se provádí násobení jinými čísly než $2^n$?

Back:

**násobení** jinými čísly se převede na několik jednodušších násobení a sčítání podobně jako když “násobíme pod sebou”
<!--ID: 1715528121627-->
END

---


START
BI-SZZ

Jak se provádí dělení jinými čísly než $2^n$

Back:

**dělení** lze buď s návratem přes nulu nebo bez návratu

![](../Assets/Pasted%20image%2020240512172101.png)
<!--ID: 1715528121630-->
END

---


START
BI-SZZ

Jaké jsou **typy posuvů** a co znamenají? (3)

Back:

- **logický posuv** = prázdná místa doplňujeme nulami
- **cyklický posuv** = prázdná místa doplňujeme bitem vypadlým na druhé straně
- **aritmetický posuv** = prázdná místa doplňujeme tak, aby šlo o násobení/dělení (záleží na použitém kódu)
<!--ID: 1715528121633-->
END

---


START
BI-SZZ

Co je **multiplexor**?

Back:

**multiplexor** = podle řídících signálů předává na výstup jeden z několika vstupů
<!--ID: 1715528121636-->
END

---


START
BI-SZZ

Co je **demultiplexor**?

Back:

**demultiplexor** = podle řídících signalů předává na několik výstupů jeden vstup
<!--ID: 1715528121639-->
END

---


START
BI-SZZ

Co je **dekóder**?

Back:

**dekodér** = kombinační logický obvod, který převádí jeden kód na jiný 

Např. binární dekodér převádí n-bitový binární vstup na $2^n$ výstupů
<!--ID: 1715528121642-->
END

---


START
BI-SZZ

Co je **barrel shifter**?

Back:

**barrel shifter** = kombinační obvod, který zvládá různé typy posuvů o volitelný počet bitů

je složen z obvodů pro jednotlivé posuvy a multiplexorů pro výběr správných z nich
<!--ID: 1715528121644-->
END

---

### reprezentace čísel s pohyblivou řádovou čárkou


START
BI-SZZ

Jak lze reprezentovat čísla s pohyblivou čárkou v řádové mřížce?

Back:

- řádová mřížka má dvě části:
    1. **mantisa** $m$ = nejvyšší platné číslice
    2. **exponent** $e$ = informace o tom, o kolik je posunutá řádová čárka
<!--ID: 1715528121648-->
END

---


START
BI-SZZ

Co je **normalizovaný tvar** čísla s mantisou?

Back:

**normalizovaný tvar čísla** = mantisu nelze posunout více doleva

Pozn. normalizaci je potřeba provádět po každé operaci
<!--ID: 1715528121650-->
END

---


START
BI-SZZ

Co je **skrytá jednička**?

Back:

ve dvojkové soustavě by byla v nejvyšším řádu mantisy v normalizovaném tvaru vždy jednička, proto ji můžeme vynechat (tzv. **skrytá jednička**)

výjimka pro zakódování nuly → pokud je $\mathcal A (e) = 0$, skrytá jednička se nepoužívá
<!--ID: 1715528121653-->
END

---

### formát mřížky podle IEEE 754


START
BI-SZZ

Jaký je standard pro formát mřížky?

Back:

**IEEE 754**
<!--ID: 1715528121656-->
END

---



START
BI-SZZ

Jak je v paměti reprezentovaný 32b float?

Back:

32b float = 1b znaménko, 8b exponent, 23b absolutní hodnota mantisy
<!--ID: 1715528121659-->
END

---


START
BI-SZZ

Jak je v paměti reprezentovaný 64b float?

Back:

64b float = 1b znaménko, 11b exponent, 52b absolutní hodnota mantisy
<!--ID: 1715528121662-->
END

---


START
BI-SZZ

V jakém kódu se ukládá **exponent**?

Back:

V **aditivním kódu** s $K = 127$
<!--ID: 1715528121666-->
END

---


START
BI-SZZ

V jakém kódu se ukládá **mantisa**?

Back:

mantisa v přímém kódu se skrytou jedničkou
<!--ID: 1715528121669-->
END

---


START
BI-SZZ

Čemu je rovno:

$e=0 \land m=0 = \ ?$

(exponent a mantisa)

Back:

$e=0 \land m=0 \implies 0​$
<!--ID: 1715528121672-->
END

---


START
BI-SZZ

Čemu je rovno:

$e=255 \land m=0 \implies \ ?$

(exponent a mantisa)

Back:

$e=255 \land m=0 \implies \pm \infty$
<!--ID: 1715528121675-->
END

---


START
BI-SZZ

Čemu je rovno:

$e = 255 \land m \ne 0 = \ ?$

(exponent a mantisa)

Back:

$e = 255 \land m \ne 0 \implies \mathrm{NaN}​$
<!--ID: 1715528121678-->
END

---

### způsoby uložení do paměti (endianita)

START
BI-SZZ

Co je **big-endian**?

Back:

**big-endian** = nejdřív nejvýznamnější byte 

Např. `0x12345678` → `12 34 56 78`
<!--ID: 1715528121681-->
END

---


START
BI-SZZ

Co je **little-endian**?

Back:

**little-endian** = nejdřív nejméně významný byte 

Např. `0x12345678` → `78 56 34 12`
<!--ID: 1715528121684-->
END

---

### aritmetické operace


START
BI-SZZ

Jak se dělá **porovnávání** u čísel s pohyblivou čárkou?

Back:

srovnat exponenty a porovnat mantisy

Tags: optional
<!--ID: 1715528121687-->
END

---


START
BI-SZZ

Jak se dělá **sčítání a odčítání** u čísel s pohyblivou čárkou?

Back:

srovnat exponenty a sečíst/odečíst mantisy

Tags: optional
<!--ID: 1715528121689-->
END

---


START
BI-SZZ

Jak se dělá **násobení** u čísel s pohyblivou čárkou?

Back:

sečíst exponenty a vynásobit mantisy

Tags: optional
<!--ID: 1715528121692-->
END

---


START
BI-SZZ

Jak se dělá **dělení** u čísel s pohyblivou čárkou?

Back:

odečíst exponenty a vydělit mantisy

Tags: optional
<!--ID: 1715528121695-->
END

---
