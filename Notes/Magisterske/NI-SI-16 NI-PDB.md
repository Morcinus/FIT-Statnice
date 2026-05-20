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

Jak se dá znázornit SELECT při vyhodnocování?

Back:

Jako **strom**

- Kořen je select

![](../../Assets/Pasted%20image%2020240923165757.png)

<!--ID: 1779128799404-->
END

---

<!--
Original Flashcard ID: 1737106145128
-->

START
NI-SZZ

Co to je **prováděcí plán (execution plan)**, jak vypadá a kdy vzniká? Vyplatí se ho cachovat? Pokud ano, za jakých okolností?

(větší otázka)

Back:

**Prováděcí plán**:

- Stromová struktura, kde:
	- **listy** jsou **zdroje dat** (tabulky, indexy) nad kterými se použije nějaká **přístupová metoda**
	- **vnitřní uzly** jsou **základní relační operace**
	- **kořen** reprezentuje celý SELECT dotaz
- Vzniká u SELECT dotazů v **optimalizační fázi** před tím, než se dotaz spustí

**Ano, vyplatí se cachovat pokud**:

- **opakovaně spouštíme stejný dotaz**
- **u složitých dotazů** nad hodně tabulkami, kde vytváření plánu zabírá moc času
- **pokud se data příliš nemění**, plán bude pravděpodobně stále efektivní

Tags: reviewed

<!--ID: 1779128799411-->
END

---

<!--
Original Flashcard ID: 1737106145130
-->

START
NI-SZZ

Jaká je základní **strategie pro tvorbu prováděcího plánu**? Jsou situace, kdy se vyplatí spíše full-table scan přístup namísto index-based? Případně uveďte.

Pozn. tuhle kartičku jsem si trochu vycucal z prstu (a fitwiki a chatgpt), protože v přednáškách se o tom nic nepíše.

(větší otázka)

Back:

**Strategie:**

1. Analýza dotazu - rozložení dotazu do stromové struktury
2. Strom se sestaví na základě:
 	- **Výběru strategie přístupu k datům** - (index based, full table scan atd.)
 	- **Výběr strategie JOINování** - nested loop, hash, merge
 	- **Použití podmínek z dotazu** - filtry, rozsahy atd.
 	- **Zohlednění statistik** - např. velikost tabulky atd.
 	- **Použití hintů** - můžeme vynutit v konfiguraci určitou strategii

**Jsou situace, kdy se vyplatí full-table scan?**

- Ano, například: (podle chatgpt a fitwiki)
	- Když je **tabulka malá**
	- Když dotaz vrací **většinu řádků tabulky** (např. 20-30%)

Tags: reviewed

<!--ID: 1779128799414-->
END

---

<!--
Original Flashcard ID: 1737106145133
-->

START
NI-SZZ

**Operace řazení**, v jakých situacích se používá, jaké jsou parametry pro odhad ceny řazení.

(větší otázka)

Back:

**Používá se například u:**

- merge joinu
- taky pro `DISTINCT`, `ORDER BY`, `HAVING`, set operace

**Parametry:**

- pR - počet stránek v relaci
- M - počet bloků, které se vejdou do paměti (RAM) při sortění

Statistiky sortění, které jsou důležité pro systém:

- počet **in memory sortů**
- počet **2 run sortů**
- počet **multi run**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118121653.png)

<!-- DetailInfoEnd -->

Tags: reviewed

<!--ID: 1779128799417-->
END

---

<!--
Original Flashcard ID: 1737106145135
-->

START
NI-SZZ

**Postup při ladění výkonu DB serveru** (jak zjistíme co vázne, jak zvolíme SQL dotazy pro ladění?)

(větší otázka)

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

Nacházení nejlepšího vyhodnocovacího plánu

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

Spočte se **cena** toho plánu a vybere se ten se nejnižší cenou.

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

Co je to **cost-based optimalizace** a jak se využijí **statistiky o databázových objektech** při cost-based optimalizaci?

(větší otázka)

Back:

**Co je cost-based optimalizace:**

- Na základě struktury dotazu se udělá **execution plan** (strom operací)
- Každý plán má **cost** - počet I/O bloků k procesování
- Optimalizace = hledání **nejlepšího plánu** (spočtení costs a vybrání nejlepšího)

**Využití statistik:**

- Slouží k **odhadu/výpočtu** ceny **operací** a pak **celkového plánu**

<!-- ExampleStart -->

**Statistiky:**
Například pokud statistika nad indexem napovídá, že v převážná většina řádků má hledanou hodnotu, může být index ignorován, protože sekvenční průchod může být rychlejší než náhodný průchod (z důvodu doby vystavování hlaviček disků).

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118101326.png)

<!-- DetailInfoEnd -->

Tags: reviewed

<!--ID: 1779128799429-->
END

---

<!--
Original Flashcard ID: 1737106145106
-->

START
NI-SZZ

Jak vypadá **zpracování SQL dotazu** (fáze zpracování dotazu, kde a jak se při nich dá optimalizovat)?

(větší otázka)

Back:

**Fáze:** (tohle je částečně z ChatGPT:)

- **Parsing** - syntaktická a sémantická analýza, kontrola práv, výsledek prováděcí plán
- **Bind** - přiřazení konkrétních hodnot parametrům
- **Execution** - vykoná se prováděcí plán
- **Fetch** - získá se výsledek a předá se aplikaci

**Kde se dá optimalizovat**:

- **Fáze Parsing**:
	- **indexy** - jejich přidání/upravování
	- **sledování systémových statistik** a úprava konfigurace podle nich
	- "hinty" pro optimaliztor (např. jaký join algoritmus použít)
- **Fáze Execution**:
	- **Uložení dat dat** - partitioning, clustery atd.
	- **paralelní zpracování**
	- **caching**
	- **materializované pohledy**

Tags: reviewed

<!--ID: 1779128799431-->
END

---

## Statistiky databázových objektů

<!--
Original Flashcard ID: 1728921214681
-->

START
NI-SZZ

Co jsou statistiky o tabulkách v Oraclu?

Back:

Oracle si u tabulek/stromů drží různé statistiky - např. počet hodnot atd.

![](../../Assets/Pasted%20image%2020240923173735.png)
![](../../Assets/Pasted%20image%2020240923174138.png)

<!--ID: 1779128799434-->
END

---

<!--
Original Flashcard ID: 1728921214684
-->

START
NI-SZZ

Co je clustering factor?

Back:

Jak moc u sebe jsou data v heap tabulce (resp. jak moc je rozházená)

![](../../Assets/Pasted%20image%2020240923174211.png)

<!--ID: 1779128799437-->
END

---

<!--
Original Flashcard ID: 1737106145109
-->

START
NI-SZZ

Vysvětlete rozdíl mezi **heap table** a **index-organized table**.

(větší otázka)

Back:

**Heap table**:

- sama o sobě nemá **žádný index**
- pořadí bloků je vpodstatě náhodné
- nové záznamy vyplňují prázdná místa
- pokud máme "heap table with index", tak má v listech ROWID, podle kterého se najde datový blok a řádek

**Index-organized table**:

- Funguje podobně jako index, ale má v listech rovnou **celé řádky**

**Srovnání**:

- Index-organized table může být rychlejší (menší počet I/O operací, protože jsou data rovnou ve stromu)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250118104335.png)
![](../../Assets/Pasted%20image%2020250118104321.png)
![](../../Assets/Pasted%20image%2020250118104305.png)

<!-- ImageEnd -->

Tags: reviewed

<!--ID: 1779128799439-->
END

---

<!--
Original Flashcard ID: 1737106145112
-->

START
NI-SZZ

Vysvětlete rozdíl mezi **heap table** a **cluster**.

(větší otázka)

Back:

**Heap table**:

- pořadí bloků je vpodstatě náhodné (nemají žádné pořadí/organizaci)
- nové záznamy vyplňují prázdná místa
- Může být heap table with index

**Cluster**

- Řádky z jedné nebo více tabulek, které spolu souvisí, jsou **uloženy u sebe** ve stejném bloku.
- K řádkům se pak přistupuje pomocí **cluster key**
- Díky tomu je rychlejší dotazování

**Srovnání**:

- Cluster může být rychlejší, protože např. data, co se často joinují jsou fyzicky u sebe.

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

Vysvětlete rozdíl mezi **B-tree** a **bitmap** indexem, příklady vhodného použití obou typů indexů.

(větší otázka)

Back:

**B-Tree index**:

- Vyvážený strom, v listu je klíč a adresa řádku s daty
- Vyvažování stromu dělá DBMS na pozadí
- DML operace jsou drahé
- Vhodné využití:
	- Sloupce s **vysokou kardinalitou** (např. jména)
	- **Vhodné pro OLTP**

**Bitmap:**

- bitmapa = binární matice všech záznamů a všech možných indexovaných hodnot
- Pro platné kombinace je v buňce jednička, jinak nula (viz obrázek)
- DML operace jsou velmi drahé
- Vhodné využití:
	- Sloupce s **nízkou kardinalitou** (např. pohlaví, kategorie)
	- Vhodné pro **datové sklady**

<!-- ImageStart -->

**B-Tree**
![](../../Assets/Pasted%20image%2020250118105604.png)

**Bitmap**
![](../../Assets/Pasted%20image%2020250118105945.png)
Když pak například spustím `SELECT` dle roku výroby, stačí jen vybrat řádky, kde je hodnota nastavená na `1`:
![](../../Assets/Pasted%20image%2020250118110005.png)

<!-- ImageEnd -->

Tags: reviewed

<!--ID: 1779128799445-->
END

---

<!--
Original Flashcard ID: 1737106145117
-->

START
NI-SZZ

Jaké jsou **typické statistiky pro tabulky** v relační databázi a jak se udržují když se pomocí DML mění data?

(větší otázka)

Back:

**Statistiky:**
Základní:

- `nR` - počet řádků v relaci $R$
- `V(A,R)` - počet různých hodnot $A$ v relaci $R$
- `pR` - počet stránek v relaci $R$
- `bR` - block factor - průměrný počet řádků, co se vejdou do jednoho bloku

Rozšířené:

- min and max values
- histogramy

**Udržování při změně dat:**

- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají enginem když databáze není busy (idle time)

<!-- DetailInfoStart -->

Připomenutí: DML = Data Manipulation Language

![](../../Assets/Pasted%20image%2020250118110727.png)
![](../../Assets/Pasted%20image%2020250118110721.png)
![](../../Assets/Pasted%20image%2020250118110951.png)

<!-- DetailInfoEnd -->

Tags: reviewed

<!--ID: 1779128799448-->
END

---

<!--
Original Flashcard ID: 1737106145120
-->

START
NI-SZZ

Jaké jsou **typické statistiky pro B-tree indexy** a jak se udržují když se pomocí DML mění data?

(větší otázka)

Back:

**Statistiky:**
Máme relaci $R$ s klíčem $A$:

- `f(A,R)` - faktor větvení - průměrný počet potomků vnitřního uzlu (typicky 50-150)
- `I(A,R)` - hloubka stromu (typicky 2-3)
- `p(A,R)` - počet listových bloků

**Rozšířené statistiky**:

- **Clustering factor** - počet bloků, co se musí přečíst, abych získal sesortěná data (podle klíče indexu)

**Udržování při změně dat**: (stejné jako u tabulek)

- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají enginem když databáze není busy (idle time)

Tags: reviewed

<!--ID: 1779128799451-->
END

---

## Metody přístupu k datům a jejich cena

<!--
Original Flashcard ID: 1728921214678
-->

START
NI-SZZ

Opáčko: Jak se dají ukládat data? (4)

Back:

- **heap tabulka** - data jsou prostě v tabulce
- **index-organized table** - index, v listech má data
- **heap table with index** - index zvlášť a listy odkazují pomocí rowid na data
- **cluster** - shluk/bucker dat

![](../../Assets/Pasted%20image%2020240923171047.png)

<!--ID: 1779128799453-->
END

---

<!--
Original Flashcard ID: 1737106145122
-->

START
NI-SZZ

Co jsou to přístupové cesty (**access paths**) při vyhodnocování SQL dotazů? Uveďte příklady.

(větší otázka)

Back:

**Co jsou access paths**:

- Specifikují **cestu**, jak databázový stroj přistoupí k datům v tabulkách/indexech při provádění dotazu.

**Příklady**:

- **no-index** (full-table scan) - Databáze čte všechny řádky v tabulce, aby našla data odpovídající dotazu.
- **unique index** - pokud existuje unikátní index na sloupci
- **non-unique index** - pokud neexistuje unikátní index na sloupci, najdou se všechny řádky splňující danou podmínku
- **composed index** - skládá se z více sloupců

Potom jsou ještě index query only a base table query u nerovnostních dotazů, ale to mi přišlo jako už moc velký detail.

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

## Metody vyhodnocení spojení a jejich cena

<!--
Original Flashcard ID: 1737106145125
-->

START
NI-SZZ

Jaké znáte **metody vyhodnocení spojení (join)** v relačních databázích? Naznačte jak probíhají.

(větší otázka)

Back:

**Metody:**

- **nested loop join**
- **merge join**
- **hash join**
- **join s využitím speciálních struktur**

Předpokládejme relaci $R$ a $S$ s atributem $a$ a dotaz:
`select * from R join S on (R.a=S.a);`

**Nested Loop Join:**

- Dva cykly v sobě s danou podmínkou

**Merge join:**

1. Sortne se $R$ podle $a$
2. Sortne se $S$ podle $a$
3. merge - čtou se postupně sesortěné řádky, pokud $R.a = S.a$, skončí se

**Hash join:**

1. Vybere se hash funkce (např.$\mod(k)$)
2. Na obě relace se aplikuje hash funkce
3. porovnají se pouze skupiny z $R$ a $S$, které mají stejný hash

**Join s využitím speciálních struktur:**

- Např. když $a$ je v $S$ klíčem, udělá se lookup řádku s $a$ podle **indexu**. Potom se jen proiteruje $R$
- atd. těhlech speciálních případů je hodně

Tags: reviewed

<!--ID: 1779128799459-->
END

---
