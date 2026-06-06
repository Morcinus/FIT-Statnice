---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-16 NI-PDB

> NI-SI-16 (NI-PDB)
> Vyhodnocování a optimalizace SQL: prováděcí plány (execution plans), optimalizace řízená odhadem ceny (cost-based optimization), statistiky databázových objektů, metody přístupu k datům a jejich cena, metody vyhodnocení spojení a jejich cena.


## Prováděcí plány (execution plans)

<!--
Original Flashcard ID: 1728921214670
-->

START
NI-SZZ

Jak se dá znázornit **SELECT** při vyhodnocování? Z jakých částí se skládá prováděcí plán selectu?

Back:

Jako **strom**:
- v listech jsou **datové zdroje** (tabulky databáze)
- $\pi_{name}$ nám značí **projekci** (výběr sloupečku)
- $\sigma_{condition}$ nám značí **selekci** (výběr záznamů podle podmínky)
- $\bowtie_{id_1=id_2}$ značí **join** přes daná idčka

**Prováděcí plán**:
![](../../Assets/Pasted%20image%2020260527103322.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240923165757.png)
<!-- DetailInfoEnd -->
<!--ID: 1779128799404-->
END

---

<!--
Original Flashcard ID: 1737106145128
-->

START
NI-SZZ

Co to je **prováděcí plán (execution plan)**, jak vypadá a kdy vzniká? V

Back:

- Stromová struktura, kde:
	- **listy** jsou **zdroje dat** (tabulky, indexy) nad kterými se použije nějaká **přístupová metoda**
	- **vnitřní uzly** jsou **základní relační operace**
	- **kořen** reprezentuje celý SELECT dotaz
- Vzniká u SELECT dotazů v **optimalizační fázi** před tím, než se dotaz spustí
- existuje více potenciálních prováděcích plánů pro jeden dotaz

<!-- ExampleStart -->
```sql
SELECT S.sname
FROM Reserves R, Sailors S
WHERE R.sid = S.sid
       AND R.bid = 100 AND S.rating > 5
```

**Formální notace**:
![](../../Assets/Pasted%20image%2020260527103244.png)

**Zjednodušená notace**:
`(sailor * reservers) (bid = 100 and rating > 5) [sname]`

**Prováděcí plán**:
![](../../Assets/Pasted%20image%2020260527103322.png)

<!-- ExampleEnd -->


Tags: reviewed
<!--ID: 1779128799411-->
END

---

START
NI-SZZ

Za jakých okolností  se vyplatí cachovat exekuční plán?

Back:

- **opakovaně spouštíme stejný dotaz**
- **u složitých dotazů** nad hodně tabulkami, kde vytváření plánu zabírá moc času
- **pokud se data příliš nemění**, plán bude pravděpodobně stále efektivní
<!--ID: 1779704516381-->
END

---


<!--
Original Flashcard ID: 1737106145130
-->

START
NI-SZZ

Jaká je základní **strategie pro tvorbu prováděcího plánu**? 

*Pozn. tuhle kartičku jsem si trochu vycucal z prstu (a fitwiki a chatgpt), protože v přednáškách se o tom nic nepíše.*

Back:

1. **Analýza dotazu** - rozložení dotazu do stromové struktury
2. **Strom se sestaví na základě**:
	- **Výběru strategie přístupu k datům** - (index based, full table scan atd.)
	- **Výběr strategie JOINování** - nested loop, hash, merge
	- **Použití podmínek z dotazu** - filtry, rozsahy atd.
	- **Zohlednění statistik** - např. velikost tabulky atd.
	- **Použití hintů** - můžeme vynutit v konfiguraci určitou strategii

Tags: reviewed
<!--ID: 1779128799414-->
END

---

START
NI-SZZ

Jsou situace, kdy se vyplatí spíše full-table scan přístup namísto index-based?

*Pozn. tuhle kartičku jsem si trochu vycucal z prstu (a fitwiki a chatgpt), protože v přednáškách se o tom nic nepíše.*

Back:

- Ano, například: (podle chatgpt a fitwiki)
	- Když je **tabulka malá**
	- Když dotaz vrací **většinu řádků tabulky** (např. 20-30%)
<!--ID: 1779704516384-->
END

---

<!--
Original Flashcard ID: 1737106145133
-->

START
NI-SZZ

V jakých situacích se využívá **operace řazení**?

Back:

**Používá se například u:**

- merge joinu
- taky pro `DISTINCT`, `ORDER BY`, `HAVING`, set operace


<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118121653.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799417-->
END

---

START
NI-SZZ

Jaké jsou parametry pro odhad **ceny řazení**?

Back:

- pR - počet stránek v relaci
- M - počet bloků, které se vejdou do paměti (RAM) při sortění
<!--ID: 1779704516391-->
END

---

START
NI-SZZ

Jaké statistiky jsou důležité u **operace řazení** pro systém?

Back:

- počet **in memory sortů** - data pro řazení se vejdou do RAM
- počet **2 run sortů** - data se nevejdou do RAM, proto se rozdělí do menších balíčků at ty se seřadí. Následuje operace merge a je finální výsledek.
- počet **multi run** - data se nevejdou do RAM, proto se rozdělí do menších balíčků at ty se seřadí. Balíčky se i tak nevejdou do RAM, tak se operace opakuje a postupně se balíčky spojují.

*U run sortů se využívá zápis na disk, který je oporti in-memory velmi pomalý.*

END

---

<!--
Original Flashcard ID: 1737106145135
-->

START
NI-SZZ

**Postup při ladění výkonu DB serveru** (jak zjistíme co vázne, jak zvolíme SQL dotazy pro ladění?)

Back:

1. **Sběr dat** - databáze se zatíží běžným provozem, logují se statistiky
2. **Analýza dat** - hledá se např. četnost SQL dotazů, řazení, atd.
3. **Optimalizace vybraných SQL příkazů**
	1. **Stanoví se základní metriky** před optimalizací
	2. Je třeba porozumět **prováděcímu plánu** a **statistikám**
	3. **Provedou se optimalizace** - typicky úprava/přidání indexů, úprava uložení dat, hinty pro optimalizátor, materializované pohledy
	4. Změří se, jestli se **metriky zlepšily**

<!-- DetailInfoStart -->

Zdroj: https://courses.fit.cvut.cz/NI-PDB/lectures/10-benchmarks-acid-tuning/index.html#_db-server-tuning

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799420-->
END

---

## Optimalizace řízená odhadem ceny (cost-based optimization)

<!--
Original Flashcard ID: 1728921214673
-->

START
NI-SZZ

Co je **optimalizace**?

Back:

Nacházení nejlepšího prováděcího plánu.
<!--ID: 1779128799423-->
END

---

<!--
Original Flashcard ID: 1728921214675
-->

START
NI-SZZ

Podle čeho se vyhodnocuje, který prováděcí plán je lepší?

Back:

![](../../Assets/Pasted%20image%2020240923170923.png)

Spočte se **cena** toho plánu a vybere se ten s nejnižší cenou.

Cena obsahuje (např.):

- **CPU** - jak moc musí procesor počítat, porovnávat atd.
- **Přístup k datům** - buď co cache nebo do storage (disk)
<!--ID: 1779128799426-->
END

---

<!--
Original Flashcard ID: 1737106145101
-->

START
NI-SZZ

Co je to **cost-based optimalizace**?

Back:

- Na základě struktury dotazu se udělá **execution plan** (strom operací)
- Každý plán má **cost** - počet I/O bloků k procesování
- Optimalizace = hledání **nejlepšího plánu** (spočtení costs a vybrání nejlepšího)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118101326.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799429-->
END

---

START
NI-SZZ

Na čem závisí **cena** dotazu?

Back:

- **CPU** - málo oproti data access
- **Data Acces** - memory buffer nebo přímo sekundární uložiště (např. disk)
	- R/W je prováděno po stránkách (blocích) stejné velikosti
<!--ID: 1779704516398-->
END

---


START
NI-SZZ

Jak se využijí **statistiky o databázových objektech** při cost-based optimalizaci?

Back:

Slouží k **odhadu/výpočtu** ceny **operací** a pak **celkového plánu**

<!-- ExampleStart -->

**Statistiky:**
Například pokud statistika nad indexem napovídá, že v převážná většina řádků má hledanou hodnotu, může být index ignorován, protože sekvenční průchod může být rychlejší než náhodný průchod (z důvodu doby vystavování hlaviček disků).

<!-- ExampleEnd -->
<!--ID: 1779704516401-->
END

---

START
NI-SZZ

Jak lze aktualizovat DB statistiky?

Back:

- Manuálně – spuštěním příkazu
- Automatizovaně – typicky v době, kdy není DB server tak vytížen
<!--ID: 1779704516403-->
END

---


START
NI-SZZ

Proč je klíčové udržovat čerstvost DB statistik?

Back:

Při zastaralých statistikách optimalizátor provádí špatná rozhodnutí.
<!--ID: 1779704516406-->
END

---

<!--
Original Flashcard ID: 1737106145106
-->

START
NI-SZZ

Jaké jsou fáze **zpracování SQL dotazu**? (5)

Back:

**Fáze:** (tohle je částečně z ChatGPT:)

1. **Parsing** - syntaktická a sémantická analýza, kontrola práv, tvorba Parse tree (logický strom příkazů)
2. **Optimization** – Tvorba exekučních plánů a vyběr toho nejlepšího
3. **Bind** - přiřazení konkrétních hodnot parametrům
4. **Execution** - vykoná se prováděcí plán
5. **Fetch** - získá se výsledek a předá se aplikaci

Poznámka: Pro tvorbu co nejlepšího plánu je klíčové znát i parametry. Využívá se tedy metoda *Parameter peeking*, kdy se druhá fáze podívá do třetí.

Tags: reviewed
<!--ID: 1779128799431-->
END

---

START
NI-SZZ

Jakým způsobem se dá **optimalizovat** při zpracování dotazu?

Back:

- **Fáze Parsing**:
	- **indexy** - jejich přidání/upravování
	- **sledování systémových statistik** a úprava konfigurace podle nich
	- "hinty" pro optimaliztor (např. jaký join algoritmus použít)
- **Fáze Execution**:
	- **Uložení dat dat** - partitioning, clustery atd.
	- **paralelní zpracování**
	- **caching**
	- **materializované pohledy**
<!--ID: 1779704516409-->
END

---


## Statistiky databázových objektů

<!--
Original Flashcard ID: 1728921214681
-->

START
NI-SZZ

Co jsou **statistiky o tabulkách v Oraclu**?

Back:

Oracle si u **tabulek**/**indexů** drží různé statistiky - např. počet hodnot atd.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240923173735.png)
![](../../Assets/Pasted%20image%2020240923174138.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799434-->
END

---

<!--
Original Flashcard ID: 1728921214684
-->

START
NI-SZZ

Co je **clustering factor**?

Back:

- Jak moc u sebe jsou data v heap tabulce (resp. jak moc je rozházená).
- Kolik datových bloků je nutné přečíst, abychom získali data seřazená.


![](../../Assets/Pasted%20image%2020240923174211.png)
<!--ID: 1779128799437-->
END

---

<!--
Original Flashcard ID: 1737106145109
-->

START
NI-SZZ

Co je to heap **heap table**?

Back:

- sama o sobě nemá **žádný index**
- pořadí bloků je v podstatě náhodné
- nové záznamy vyplňují prázdná místa
- pokud máme "heap table with index", tak má index a ten má v listech ROWID, podle kterého se najde datový blok a řádek


![](../../Assets/Pasted%20image%2020250118104335.png)
![](../../Assets/Pasted%20image%2020250118104321.png)


Tags: reviewed
<!--ID: 1779128799439-->
END

---

START
NI-SZZ

Co je to **index-organized table**?

Back:

- Funguje podobně jako index, ale má v listech rovnou **celé řádky**

**Srovnání**:

- Index-organized table může být rychlejší než heap table (menší počet I/O operací, protože jsou data rovnou ve stromu)

![](../../Assets/Pasted%20image%2020250118104305.png)
<!--ID: 1779704516412-->
END

---


<!--
Original Flashcard ID: 1737106145112
-->

START
NI-SZZ

Co je to **cluster**?

Back:

- Řádky z jedné nebo více tabulek, které spolu souvisí, jsou **uloženy u sebe** ve stejném bloku.
- K řádkům se pak přistupuje pomocí **cluster key**
- Díky tomu je rychlejší dotazování

**Srovnání**:

- Cluster může být rychlejší než heap table, protože např. data, co se často joinují jsou fyzicky u sebe.

<!-- ExampleStart -->

- **Heap Table with Index:**
	- A table of customers with an index on `customer_id`.
	- To find a customer, the database looks up the index to locate the row in the table.
- **Cluster:** - A cluster that stores `customers` and `orders` tables based on the `customer_id`. - Rows for a customer and their orders are stored physically close, so joining or querying them is faster.
<!-- ExampleEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250118105226.png)

<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1779128799442-->
END

---

<!--
Original Flashcard ID: 1737106145114
-->

START
NI-SZZ

Co je to **B-tree** index a kdy jej využít?

Back:

**B-Tree index**:

- Vyvážený strom, v listu je klíč a adresa řádku s daty
- Vyvažování stromu dělá DBMS na pozadí
- DML operace jsou drahé
- Vhodné využití:
	- Sloupce s **vysokou kardinalitou** (např. jména)
	- **Vhodné pro OLTP**

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250118105604.png)

<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1779128799445-->
END

---

START
NI-SZZ

Co je to **bitmap** index a kdy jej využít?

Back:

**Bitmap:**

- bitmapa = binární matice všech záznamů a všech možných indexovaných hodnot
- Pro platné kombinace je v buňce jednička, jinak nula (viz obrázek)
- DML operace jsou velmi drahé
- Vhodné využití:
	- Sloupce s **nízkou kardinalitou** (např. pohlaví, kategorie)
	- Vhodné pro **datové sklady**

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250118105945.png)
Když pak například spustím `SELECT` dle roku výroby, stačí jen vybrat řádky, kde je hodnota nastavená na `1`:
![](../../Assets/Pasted%20image%2020250118110005.png)

<!-- ImageEnd -->
<!--ID: 1779704516414-->
END

---

<!--
Original Flashcard ID: 1737106145117
-->

START
NI-SZZ

Jaké jsou **typické statistiky pro tabulky** v relační databázi?

Back:

**Základní**:

- `nR` - počet řádků v relaci $R$
- `V(A,R)` -  variabilita atributu - počet různých hodnot $A$ v relaci $R$
- `pR` - počet stránek v relaci $R$, $pR=nR/bR$
- `bR` - block factor - průměrný počet řádků, co se vejdou do jednoho bloku

**Rozšířené**:

- min and max values
- histogramy


<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020260523121208.png)

![](../../Assets/Pasted%20image%2020250118110721.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799448-->
END

---

START
NI-SZZ

 Jak se udržují tabulkové a indexové statistiky, když se pomocí DML mění data?

Back:

Statistiky se **nikdy nemění v realtimu** při DML operacích (to by příliš zatěžovalo stroj). Statistiky se automaticky přepočítávají DB enginem, když zrovna databáze není busy.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250118110951.png)
<!-- DetailInfoEnd -->
<!--ID: 1779704516417-->
END

---


<!--
Original Flashcard ID: 1737106145120
-->

START
NI-SZZ

Jaké jsou **typické statistiky pro B-tree indexy**?

Back:

Máme relaci $R$ s klíčem $A$:

- `f(A,R)` - faktor větvení - průměrný počet potomků vnitřního uzlu (typicky 50-150)
- `I(A,R)` - hloubka stromu (typicky 2-3)
- `pl(A,R)` - počet listových bloků/stránek (někde se píše taky jen `p(A,R)`)

**Rozšířené statistiky**:

- **Clustering factor** - počet bloků, co se musí přečíst, abych získal sesortěná data (podle klíče indexu)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020260523121321.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799451-->
END

---

START
NI-SZZ

Jaké jsou nevýhody indexů? (2)

Back:

- Musí se udržovat
- Zpomalují DML operace
<!--ID: 1779704516419-->
END

---

START
NI-SZZ

Co je to **ROWID**?

Back:

- Pseudosloupec
- Každý záznam ho má unikátní
- Obsahuje informaci o fyzickém umístění bloku a řádku

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020260523130008.png)
<!-- ImageEnd -->
<!--ID: 1779704516422-->
END

---



## Metody přístupu k datům a jejich cena

<!--
Original Flashcard ID: 1728921214678
-->

START
NI-SZZ

Jaké jsou nejčastější typy uložení dat? (4)

Back:

- **heap tabulka** - data jsou prostě v tabulce
- **index-organized table** - index, v listech má data
- **heap table with index** - index zvlášť a listy odkazují pomocí rowid na data
- **cluster** - shluk/bucket dat

![](../../Assets/Pasted%20image%2020240923171047.png)
<!--ID: 1779128799453-->
END

---

<!--
Original Flashcard ID: 1737106145122
-->

START
NI-SZZ

Jaké jsou typy **rovnostních přístupových cest** k datům při vyhodnocování SQL dotazů? (4+ každá má podtypy)

Back:

Cesty:
- **no-index** (full-table scan) - Databáze čte všechny řádky v tabulce, aby našla data odpovídající dotazu.
	- $A$ je unique
	- $A$ není unique
- **unique index** - pokud existuje unikátní index na sloupci
	- $A$ v heap tabulce
	- $A$ v indexu
- **non-unique index** - pokud neexistuje unikátní index na sloupci, najdou se všechny řádky splňující danou podmínku
	- $A$ bez unique indexu
- **composed index** - skládá se z více sloupců
	- $A$ je unique
	- $A$ není unique

<!-- ExampleStart -->

**no-index**:
`SELECT * FROM zamestnanci WHERE jmeno = 'Karel';`

**unique index**:
`SELECT * FROM zamestnanci WHERE id_zamestnance = 101;`

**non-unique index**:
`SELECT * FROM zamestnanci WHERE oddeleni = 'IT';`

**composite index**:
`SELECT * FROM zamestnanci WHERE oddeleni = 'IT' AND jmeno = 'Karel';`

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118113443.png)

Tady je imo špatně ten dotaz. Mělo by tam být víc podmínek:
![](../../Assets/Pasted%20image%2020250118113501.png)
![](../../Assets/Pasted%20image%2020250118113508.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799456-->
END


---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516425-->
END

---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516427-->
END

---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516430-->
END

---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516432-->
END

---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516435-->
END

---

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1779704516438-->
END

---

START
NI-SZZ

Jaká je cena dotazu pro **no index** (full-table scan) heap tabulky? **Pokud $A$ není unique**

`select * from R where A = ’x’;`

Back:

$$cost = pR$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606160321.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868634-->
END

---


START
NI-SZZ

Jaká je cena dotazu pro **no index** (full-table scan) heap tabulky? **Pokud $A$ je unique**

`select * from R where A = ’x’;`

Back:

$$cost = pR/2$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606160321.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868647-->
END

---

START
NI-SZZ

Jaká je cena dotazu pro **unique index** v **index organized table**?

`select * from R where A = ’x’;`

Back:

$$cost = I(A,R)$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606160627.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868649-->
END

---

START
NI-SZZ

Jaká je cena dotazu pro **unique index** v **heap tabulce**?

`select * from R where A = ’x’;`

Back:

$$cost = I(A,R) + 1$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606160627.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868652-->
END

---

START
NI-SZZ

Jaká je cena dotazu pro **non-unique index** u heap tabulky?

`select * from R where A = ’x’;`

Back:

$$cost = I(A,R)+nR(A=x)$$

V praxi to dost závisí na clustering factoru indexu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606160619.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868655-->
END

---


START
NI-SZZ

Jaká je cena dotazu pro **composed index** $R(A,B)$ u heap tabulky?

`select B from R where A = ’x’;`

Back:


$$cost = I((A,B),R)+\frac{nR(A=x)}{bR}-1$$

$bR$ je block factor

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606161056.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868658-->
END

---


START
NI-SZZ

Jaká je cena dotazu pro **composed index** $R(A,B)$ u heap tabulky, kde $A$ je **unique**?

`select B from R where A = ’x’;`

Back:

$$cost = I((A,B),R)$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606161119.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868661-->
END

---


START
NI-SZZ

Jaké jsou typy **nerovnostních přístupových cest** k datům při vyhodnocování SQL dotazů? (3)

Back:

- **index query only** - jsme v index organized table
- **base table query** (heap table)
	- **bez indexu**
	- **s indexem**
<!--ID: 1780758868664-->
END

---


START
NI-SZZ

Jakou cenu má **index query only** přístup k datům (tzn. v index organized table)?

`select A from R where A < ’x’;`

Back:

$$cost = I(A,R) + p(A,R)/2$$

Dělíme počet leaf stránek indexu dvěma, protože assumujeme, že to průměrně bude cca uprostřed ta hodnota.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606161854.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868667-->
END

---


START
NI-SZZ

Jakou cenu má **base table query** přístup k datům? **Pokud nepoužijeme index** (tzn. jen heap table)

`select * from R where A < ’x’;`

Back:

$$cost = pR$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606161901.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868670-->
END

---

START
NI-SZZ

Jakou cenu má **base table query** přístup k datům? **Pokud použijeme index** (tzn. index + heap table)

`select * from R where A < ’x’;`

Back:

$$cost = I(A,R)+p(A,R)/2+nR/2$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606161901.png)
<!-- DetailInfoEnd -->
<!--ID: 1780758868673-->
END

---


## Metody vyhodnocení spojení a jejich cena

<!--
Original Flashcard ID: 1737106145125
-->

START
NI-SZZ

Jaké jsou základní fyzické metody vyhodnocení spojení (Joins) v relačních databázích? (4)

Back:

- **Nested Loops Join**
- **Hash Join**
- **Sort-Merge Join**
- **Join s využitím speciálních struktur**

Tags: reviewed
<!--ID: 1779128799459-->
END

---

START
NI-SZZ

Jak funguje **Nested Loops Join** a jak se **obecně počítá cena**?

Back:

iteruju stránky v $R$ → pro každou iteruju stránky v $S$ → pro každou vypisuju shody

cena joinu = cena čtení + cena zápisů
<!--ID: 1779704516440-->
END

---

START
NI-SZZ

Jak se spočte **cena** pro **Nested loop join**?

- $M=3$
- $3 \lt M \lt pR+2$
- $pR+2 \leq M$
- zápisy

Back:

**Pro čtení s $M=3$** (tzn. do paměti se vejdou jen $3$ bloky)
$$pR + pS \cdot pR$$

**Pro čtení s $3 \lt M \lt pR+2$** (tzn. menší tabulka se nevejde do paměti)
$$pR + pS \cdot \left\lceil \frac{pR}{M-2} \right\rceil $$

**Pro čtení s $pR+2 \leq M$** (tzn. do paměti se vejde celá tabulka)
$$pR + pS$$

**Zápisy**
$$\frac{nR \cdot nS}{V(A,S) \cdot bRS}$$
<!--ID: 1779704516443-->
END

---

START
NI-SZZ

Jak funguje **Hash Join** a pro jaké operace je striktně omezen?

Back:

1. Vybere se hash funkce (např.$\mod(k)$)
2. Na obě relace se aplikuje hash funkce
3. porovnají se pouze skupiny z $R$ a $S$, které mají stejný hash

Funguje pouze na **rovnost**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260606165540.png)

**Fáze**

- **Build:** Z menší tabulky se v paměti (RAM) vytvoří Hash tabulka na základě spojovacího klíče.
- **Probe:** Větší tabulka se sekvenčně čte a pro každý řádek se zjišťuje, zda jeho hash existuje v Hash tabulce.

**Omezení:** Lze použít **pouze pro spojení na rovnost** (equi-join, např. `A.id = B.id`), nefunguje pro nerovnosti ( `<`, `>`).

**Kdy se používá:** Při spojování obřích tabulek, kde chybí indexy (často v datových skladech).
<!-- DetailInfoEnd -->
<!--ID: 1779704516446-->
END

---


START
NI-SZZ

Kdy je **Hash join pomalý?**

Back:

Když se **hash tabulka** nevejde do paměti -> musí se furt prohazovat
<!--ID: 1779704516448-->
END

---

START
NI-SZZ

Jak funguje **Sort-Merge Join** a kdy ho optimalizátor preferuje?

Back:

**seřadím R i S podle joinovaného atributu → merguju seřazené do výstupu**

Preferuje se když už jsou data seřazená

<!-- DetailInfoStart -->
**Fáze**

- **Sort:** Obě tabulky se seřadí podle spojovacího klíče (pokud už nejsou).
- **Merge:** Obě tabulky se procházejí sekvenčně a hledají se shody.

**Kdy ho preferuje:** Vyplatí se, když **jsou data už předem seřazená** (např. obě tabulky mají na klíči index), protože pak odpadá drahá fáze Sort. Na rozdíl od Hash Joinu umí i nerovnostní spojení.
<!-- DetailInfoEnd -->
<!--ID: 1779704516451-->
END

---


START
NI-SZZ

Jak se spočte **cena** pro **Merge Join**?

- pokud $M=3$
- pokud $M \ge \sqrt{pS}$
- pokud $M < \sqrt{pS}$

Back:

**Pokud** $M=3$
$$\sim 2 \cdot pR \cdot \log(pR) + 2 \cdot pS \cdot \log(pS) + pR + pS$$

**Pokud** $M \ge \sqrt{pS}$
$$\sim 3 \cdot (pR+pS)$$


**Pokud** $M < \sqrt{pS}$ záleží na počtu běhů
<!--ID: 1779704516454-->
END

---

START
NI-SZZ

Jaké jsou 2 typy joinů s **indexama** a **spešl strukturama** co jsme si říkali?

Back:

- **index lookup:** $R$ je seřazený podle $A$ a $S$ má index nad $A$
	- postupně čtu z $R$ a v případě rovnosti dohledám záznam z $S$ díky indexu
- **hash cluster:** $R$ je seřazený podle $A$ a $S$ je hashovaný podle $A$
<!--ID: 1779704516457-->
END

---


START
NI-SZZ

Jaká je **cena joinu** $R$ je seřazený podle $A$ a $S$ má index nad $A$ (index lookup)?

Back:

$$pR + V(A,R) + I(A,S) + p(A,S)$$
<!--ID: 1780758868676-->
END

---


START
NI-SZZ

Jaká je **cena joinu** $R$ je seřazený podle $A$ a $S$ je hashovaný podle $A$ (hash cluster)?

Back:

$pR + V(A,R)$
<!--ID: 1780758868679-->
END

---
