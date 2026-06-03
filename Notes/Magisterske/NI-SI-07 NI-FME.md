---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-07 NI-FME

> NI-SI-07 (NI-FME)
> Dokazování správnosti programů: aserce, ověřovací podmínky, invarianty smyček, důkazy terminace.

## Dokazování správnosti programů

START
NI-SZZ

Co je cílem **dokazování správnosti programů**?

Back:

Cílem je formálně dokázat, že program splňuje svoji specifikaci.

Typicky dokazujeme, že z **precondition** a průběhu programu plyne **postcondition**.
<!--ID: 1780493530426-->
END

---

START
NI-SZZ

Jak obecně vypadá důkaz **sporem**?

Back:

Chceme dokázat tvrzení `P`.

Předpokládáme opak `¬P` a ukážeme, že tento předpoklad vede ke sporu. Z toho plyne, že `P` musí platit.

<!-- ExampleStart -->
**Příklad 1**
![](../../Assets/Pasted%20image%2020260603125724.png)

**Příklad 2** (nové vs "známé" termy)
![](../../Assets/Pasted%20image%2020260603130953.png)
<!-- ExampleEnd -->
<!--ID: 1780493530432-->
END

---


START
NI-SZZ

Jak funguje **dokazování**:
- $\exists x . A$
- $\forall x . A$
- $A \land B$
- $A \lor B$
- $A \Rightarrow B$
- $\neg A$

Aneb co dělat, když tyto věci máme v části **to prove**

Back:

- $\exists x . A$ - zvolíme **term** $t$ a přiřadíme ho $x \leftarrow t$
- $\forall x . A$ - zvolíme **konstantu** $c$ a přiřadíme ji $x \leftarrow c$
- $A \land B$ - dokážeme zvlášť $A$ i $B$
- $A \lor B$ - předpokládáme $\neg A$ a dokážeme $B$ (nebo obráceně)
- $A \Rightarrow B$ - předpokládáme $A$ a dokážeme $B$
- $\neg A$ - předpokládáme $A$ a zkusíme najít spor

<!-- ExampleStart -->
**Příklad 1**
![](../../Assets/Pasted%20image%2020260603125724.png)

**Příklad 2** (nové vs "známé" termy)
![](../../Assets/Pasted%20image%2020260603130953.png)
<!-- ExampleEnd -->
<!--ID: 1780493530435-->
END

---


START
NI-SZZ

Jak funguje **produkování nových známých věcí**:
- $\exists x . A$
- $\forall x . A$
- $A \land B$
- $A \lor B$
- $A \Rightarrow B$

Aneb co dělat, když tyto věci máme v části **assumptions**

Back:

- $\exists x . A$ - zvolíme **konstantu** $c$ a přiřadíme ji $x \leftarrow c$
- $\forall x . A$ - zvolíme **term** $t$ a přiřadíme ho $x \leftarrow t$
- $A \land B$ - předpokládáme že platí $A$ i $B$
- $A \lor B$ - napíšeme si "případ A" a "případ B" a vždy předpokládáme, že platí $A$ resp. $B$ a dokončíme oba důkazy
- $A \Rightarrow B$ - pokud máme v assumptions že platí $A$, tak víme že platí $B$

<!-- ExampleStart -->
**Příklad 1**
![](../../Assets/Pasted%20image%2020260603125724.png)

**Příklad 2** (nové vs "známé" termy)
![](../../Assets/Pasted%20image%2020260603130953.png)
<!-- ExampleEnd -->
<!--ID: 1780493530438-->
END

---

## Aserce

START
NI-SZZ

Co je **základní cesta** (basic path) při verifikaci programu? (kde začíná, kde končí, co obsahuje)

Back:

Základní cesta je úsek řídicího grafu programu, který:

- **Začíná v bodě s asercí** (assume, assert na začátku, nebo invariant smyčky).
- **Obsahuje sekvenci příkazů bez větvení a bez cyklů** (pouze přiřazení).
- **Končí v bodě s asercí** (assert na konci, nebo invariant smyčky).
<!--ID: 1780493530441-->
END

---

START
NI-SZZ

Proč se program při verifikaci rozděluje na **základní cesty**?

Back:

Aby se verifikace **převedla na konečný počet jednodušších logických problémů**.

Pro každou základní cestu se vytvoří ověřovací podmínka; pokud platí všechny, program je **částečně správný vzhledem k asercím**.
<!--ID: 1780493530443-->
END

---

START
NI-SZZ

Čím musí začínat a **končit** **základní cesta**? (3 a 2)

Back:

**Začíná bodem s asercí**:

- `assume`,
- `assert`,
- nebo invariantem smyčky.

**Končí bodem s asercí**:

- `assert`,
- nebo invariantem smyčky.
<!--ID: 1780493530446-->
END

---

START
NI-SZZ

Co je **SSA forma** (Static Single Assignment)?

Back:

SSA je forma programu, ve které má každé přiřazení vlastní verzi proměnné.

Např. místo opakovaného přepisování `x` vzniknou proměnné `x_0`, `x_1`, `x_2`, ...

Formálněji:
SSA (Static Single Assignment) forma slouží pro základní cestu (basic path) k tomu, aby se odstranila závislost na čase (sekvenčním provádění příkazů) a proměnlivosti stavu paměti.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020260603131407.png)
<!-- ExampleEnd -->

<!--ID: 1780493530449-->
END

---

START
NI-SZZ

Proč se při verifikaci používá **SSA forma**?

Back:

**Odstraňuje závislost na čase a proměnlivosti paměti**.

**Imperativní kód se převede** na **deklarativní matematické vztahy**, se kterými může pracovat **automatický dokazovač nebo SMT solver**.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020260603131407.png)
<!-- ExampleEnd -->
<!--ID: 1780493530451-->
END

---

START
NI-SZZ

Jak se **přiřazení** v SSA formě převede na **logickou formuli**?

Back:

Přiřazení se převede na rovnost mezi **verzemi proměnných**.

Např. příkaz:

`x = x + 1`

může v SSA vzniknout jako:

`x_1 = x_0 + 1`

Vpodstatě nic jiného se v rámci SSA nedělá, jen se přepisují tyhle přiřazení
<!--ID: 1780493530454-->
END

---

## Ověřovací podmínky

START
NI-SZZ

Co je **ověřovací podmínka** (Verification Condition, VC)?

Back:

Ověřovací podmínka je **čistě logická formule**, jejíž platnost zaručuje, že daná základní cesta programu je správná.

<!--ID: 1780493530457-->
END

---

START
NI-SZZ

Co plyne z toho, že platí **ověřovací podmínky** pro **všechny základní cesty programu**?

Back:

Program je **částečně správný** vzhledem k daným asercím/specifikaci.

Tedy: pokud program doběhne po některé uvažované cestě, splní požadované aserce.
<!--ID: 1780493530459-->
END

---


START
NI-SZZ

Co je **Weakest Precondition**?

Back:

**Nejslabší předpodmínka** - podobně jako SSA se používá pro získání ověřovacích podmínek (jen ta technika je trošku jiná)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260603131853.png)
<!-- DetailInfoEnd -->
<!--ID: 1780493530462-->
END

---


START
NI-SZZ

Jak bychom napsali **ověřovací podmínku pro tuto SSA formu**?

![](../../Assets/Pasted%20image%2020260603132024.png)

Back:

- `assume`, přiřazení narveme do předpokladu
- konečnou aserci narveme do závěru

Tedy:
![](../../Assets/Pasted%20image%2020260603132205.png)


<!--ID: 1780493530465-->
END

---

START
NI-SZZ

Jaké dvě techniky se používají pro generování VC z programového kódu?

Back:

- **WP** (Weakest Precondition, nejslabší předpodmínka)
- **SSA** (Static Single Assignment forma)
<!--ID: 1780493530467-->
END

---

## Invarianty smyček

START
NI-SZZ

Proč jsou **smyčky** hlavní komplikací při **dokazování správnosti programů**?

Back:

Protože mohou **běžet teoreticky nekonečněkrát**.

Statická verifikace nemůže projít všechny iterace, takže potřebuje shrnutí chování smyčky pomocí invariantu.
<!--ID: 1780493530470-->
END

---

START
NI-SZZ

Co je **invariant smyčky**?

Back:

Invariant smyčky je logická formule, která platí v určeném bodě smyčky při každé iteraci.

Typicky se umisťuje na **začátek těla smyčky**.

<!-- ExampleStart -->
Zde je **modrý** ten invariant
![](../../Assets/Pasted%20image%2020260603135038.png)
<!-- ExampleEnd -->

<!--ID: 1780493530473-->
END

---

START
NI-SZZ

Jaké tři vlastnosti musí splňovat **invariant smyčky**?

Back:

1. Invariant musí platit **při první iteraci přes smyčku**. (Tzn. vstoupení do cyklu)
2. Jestli platil a cyklus probíhá i **v další iteraci, musí platit znovu**.
3. Jestli platil a cyklus byl opuštěn, musí **platit aserce za cyklem**.

<!-- ExampleStart -->
Zde je **modrý** ten invariant
![](../../Assets/Pasted%20image%2020260603135038.png)
<!-- ExampleEnd -->
<!--ID: 1780493530475-->
END

---

START
NI-SZZ

Když máme cyklus s invariantem, jaké **cesty musíme dokázat**?

Např.
![](../../Assets/Pasted%20image%2020260603135200.png)

(ano, horší rozlišení už nešlo :D)

Back:

- **Cesta, kdy cyklus nikdy neproběhne** - tzn. od začátku po aserci invariantu a změníme podmínku cyklu
- **Vstoupení do cyklu** - tzn. od začátku po aserci invariantu (`@`)
- **Další kolo cyklu** - tzn. od invariantu (`assume`) po invariant (`@`)
- **Vystoupení z cycklu** - tzn. od invariantu (`assume`) po aserci po cyklu (`@`)

![](../../Assets/Pasted%20image%2020260603135547.png)
<!--ID: 1780493530478-->
END

---

## Důkazy terminace

START
NI-SZZ

Proč aserce, invarianty a VC samy o sobě dokazují pouze **částečnou správnost**?

Back:

Protože dokazují, že **pokud program skončí**, **bude splněna specifikace**.

Nedokazují ale, že **program skutečně skončí**.
<!--ID: 1780493530481-->
END

---

START
NI-SZZ

Co je potřeba navíc dokázat pro **úplnou správnost** programu?

Back:

Je potřeba dokázat **terminaci**.

Program musí být **částečně správný** a zároveň musí pro **všechny vstupy splňující precondition doběhnout**.
<!--ID: 1780493530483-->
END

---

START
NI-SZZ

Kdy je **parciálně správný** program `P` **terminující**?

Back:

Parciálně správný program `P` je terminující právě tehdy, když každý regulární průběh programu `P` dosáhne řádku s příkazem return.
<!--ID: 1780493530486-->
END

---

START
NI-SZZ

Kdy program se **smyčkami terminuje**?

Back:

Program terminuje právě tehdy, když každá jeho smyčka provede jen konečný počet iterací.
<!--ID: 1780493530489-->
END

---

START
NI-SZZ

Co říká **halting problem** a proč je důležitý pro verifikaci programů?

Back:

Halting problem říká, že neexistuje obecný algoritmus, který by pro libovolný program a vstup rozhodl, zda program zastaví.

Proto je úplná správnost obecných programů nerozhodnutelná.

![](../../Assets/Pasted%20image%2020260603135842.png)
<!--ID: 1780493530491-->
END

---


START
NI-SZZ

Jaký je rozdíl mezi **částečnou** a **úplnou správností programu**?

Back:

- **Částečná** = pokud program skončí, tak při splněné **precondition** podmínka bude splněná **postcondition** podmínka (neřeší se, jestli program doběhne)
- **Úplná správnost** = částečná + je zaručeno, že skončí
<!--ID: 1780493530494-->
END

---


START
NI-SZZ

Jak funguje **obecná metoda důkazu terminace smyčky**?

Back:

Pro **každou smyčku**:
- Vytvoříme **term** $t$ z omezené množiny $S$ (např. přirozená čísla)
- Vytvoříme **variant** $v$ - v této proměnné si budeme pamatovat starou hodnotu $t$
- Vytvoříme **fundovanou relaci** na množině $S$, pomocí které budeme porovnávat nové $t$ a jeho starou hodnotu $v$ v invariantu (což je prostě jakýkoliv porovnání, například $\lt$)

Potom **dokážeme ověřovací podmínku** pro případ že **začínám v cyklu a končím v dalším kole cyklu** (tzn. nemusím u cyklů dokazovat všechny 4 možnosti, ale jen tu že zůstávám v cyklu)

Pokud se nám to podaří dokázat, tak jsme dokázali, že hodnota $t$ se bude každou iteraci zmenšovat. Tzn. jelikož to je z omezené množiny $S$, tak se to někdy zastaví.

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020260603141435.png)

**Na začátku** vytvoříme proměnnou $v$ a přiřadíme do ní nekonečno.

**Do invariantu dáme**:
1) Porovnání $v$ a $t$ (pomocí fundované relace $\prec$, což je prostě jakýkoliv porovnání, například $\lt$, které nám bude ukazovat, že $t$ se zmenšuje)
2) Nějakou podmínku, že $t$ je z té naší množiny $S$

**V cyklu**:
Do $v$ přiřadíme $t$

**Výsledkem toho bude**:
Víme že variant $t$ je z nějaké omezené množiny $S$ a že podle invariantu bude každou iteraci klesat (resp. se přibližovat k té hranici té množiny).

Dokážeme ověřovací podmínku pro ten vnitřek cyklu a pak jsme tím dokázali, že to skončí.

<!-- ExplanationEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020260603143628.png)
<!-- ExampleEnd -->

<!--ID: 1780493530497-->
END

---

START
NI-SZZ

Co je **variant smyčky** při důkazu terminace?

Back:

Variant smyčky je to $t$, které se musí každou iteraci zmenšit (toto omezení napíšeme do invariantu)
<!--ID: 1780493530500-->
END

---
