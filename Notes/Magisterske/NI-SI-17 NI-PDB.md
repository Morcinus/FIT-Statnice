---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-17 NI-PDB

> NI-SI-17 (NI-PDB)
> Databázové modely: relační, objektově-relační, dokumentový, XML, sloupcový, klíč-hodnota, grafový; jejich rozdíly a vhodné aplikace (aplikační domény). Dotazovací jazyky: SQL, XQuery, Cypher; jejich typické konstrukce a vyjadřovací možnosti.

## Relační

## Objektově-relační

<!--
Original Flashcard ID: 1737106145141
-->

START
NI-SZZ

Vysvětlete, případně uveďte na příkladech hlavní **přínos objektově relačních databázových systémů** oproti čistě relačním.

(větší otázka)

Back:

Je to rozšíření klasického relačního modelu o **objektové prvky** (databáze umí pracovat s objekty, existují v ní uživatelsky definované datové typy apod.).

**Hlavní přínosy OODMBS** (oproti RDBMS):

- **Komplexnější datové typy** (objekty) často lépe reflektují real-world entity
- **Rekurzivní struktury** - dobře se ukládají datové struktury (stromy, grafy)
- **Abstraktní datové typy** - Je možné vytvářet vlastní typy a jejich metody
- **API pro OOP jazyky** - velice dobře se používá s OOP jazykama
- **Komplexní (dlouhé) transakce** - lépe je zpracovává než RDBMS
<!--ID: 1779128799624-->
END

---

<!--
Original Flashcard ID: 1737106145144
-->

START
NI-SZZ

Vysvětlete co je **reference na objekt (typ REF)** v objektově-relačních databázích. Jaký je rozdíl mezi referencí na objekt a cizím klíčem?

(větší otázka)

Back:

**REF** - reference na objekt

- **Ukazatel** na **celý objekt** (jako pointer v OOP)
- **Nevyžaduje spojování tabulek**, protože odkazuje přímo na celý objekt.

**Cizí klíč**

- **Hodnota** jiného primárního klíče (není to ukazatel)
- **Vyžaduje JOIN** operaci pro získání souvisejících dat.
<!--ID: 1779128799627-->
END

---

<!--
Original Flashcard ID: 1737106145146
-->

START
NI-SZZ

Vysvětlete rozdíl mezi relační tabulkou obsahující **uživatelem definovaný datový typ** a **objektovou tabulkou**.

(větší otázka)

Back:

**Uživatelsky definovaný datový typ v relační tabulce**:

- Je to **vícehodnotový atribut** (je to jakoby další tabulka, kde sloupce jsou atributy toho komplexnějšího typu)
- **Nemá metody** ani chování
- Data jsou uložena v **řádcích a sloupcích**
- **Výhoda**: je to jednodušší, než mít další tabulku, kterou bych musel JOINovat.

**Objektová tabulka:** (v ORDBMS)

- Každý řádek reprezentuje nějaký objekt, který může mít nejen data, ale i **metody**
- Objekty mohou mít mezi sebou **pointery**

Objektová tabulka je obecně více flexibilní, umožňuje ukládat nejen objekty, ale i určité metody/chování.
<!--ID: 1779128799630-->
END

---

<!--
Original Flashcard ID: 1737106145149
-->

START
NI-SZZ

V jakém jsou vztahu **objektově-relační databázový stroj** a **ORM (object-relational mapping) technologie**? (co to řeší, kdy je co vhodné)

(větší otázka)

Back:

**Co řeší:**

- Oboje umožňuje pracovat s databází jako s nějakou kolekcí objektů.

**ORM**:

- Máme relační databázi a řádky tabulky se mapují (transformují) na objekty v nějakém OOP jazyce. Díky tomu můžu s databází pracovat jako s kolekcí objektů.
- Objekty jsou uloženy pouze jako **řádky tabulky**
- **Vhodné:**
	- Pro věšinu aplikací, tradiční relační databáze
	- Rychlý vývoj
	- Jednodušší data a dotazy

**ORDBMS**:

- **Přímo v databázi** jsou uloženy **objekty**, složené datové typy, metody, dědičnost,..
- **Vhodné**:
	- Pro komplexní typy dat
	- Lepší výkon pro složité typy
- **Nevýhoda:** - Komplexnější práce s databází
<!--ID: 1779128799633-->
END

---

## Dokumentový

<!--
Original Flashcard ID: 1728921214718
-->

START
NI-SZZ

Co je **document store**?

Back:

Mám **hierarchickou strukturu dokumentů** (typicky JSON a XML).

- Každý dokument má unique identifier
<!--ID: 1779128799635-->
END

---

<!--
Original Flashcard ID: 1728921214721
-->

START
NI-SZZ

Na co je dobrý **document store**?

Back:

Tam kde je třeba ukládat **větší množství** dokumentů s podobným schématem.

<!-- ExampleStart -->

Event logging, content management systems, web analytics, e-commerce applications,...

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011103230.png)
![](../../Assets/Pasted%20image%2020241011103239.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799638-->
END

---

<!--
Original Flashcard ID: 1729236692764
-->

START
NI-SZZ

Co je **JSON**?

Back:

**Otevřený standard pro strukturu dat.**
<!--ID: 1779128799641-->
END

---

<!--
Original Flashcard ID: 1729236692774
-->

START
NI-SZZ

Co má větší **vyjadřovací schopnost**? JSON nebo XML?

Back:

**XML**

<!-- DetailInfoStart -->

Prakticky ale většina věcí jde udělat v JSONu, proto je dnes častěji používanější.

<!-- DetailInfoEnd -->
<!--ID: 1779128799644-->
END

---

<!--
Original Flashcard ID: 1729236692823
-->

START
NI-SZZ

Jak se dá **validovat JSON dokument** (=jestli splňuje určité schéma)?

Back:

Pomocí **specifikace JSON Schema** můžu specifikovat a validovat JSON dokumenty.

<!-- DetailInfoStart -->

Prý se to nepoužívá ve 100% případů, protože vlastností JSONu je, že je "schema free" - tzn. nehrotí se tak, aby to přesně splňovalo dané schéma.

Samozřejmě v mnoha případech je potřeba to schéma validovat a tam se to používá.

<!-- DetailInfoEnd -->
<!--ID: 1779128799647-->
END

---

<!--
Original Flashcard ID: 1729236692841
-->

START
NI-SZZ

Co je **MongoDB**?

Back:

**Databázový engine** / **Databáze**, který pracuje s **JSON dokumenty**

<!-- DetailInfoStart -->

- Podle Michala Valenty je dost profláklý a používaný
- Bylo to založeno v roce 2009 a podle Michala Valenty to už je mature projekt
  <!-- DetailInfoEnd -->
<!--ID: 1779128799649-->
END

---

<!--
Original Flashcard ID: 1729236692860
-->

START
NI-SZZ

Jaká je **struktura** MongoDB databáze?

Back:

- **Instance** - instance DB enginu
- **Database**
- **Collection**
- **Document**
<!--ID: 1779128799652-->
END

---

## XML

<!--
Original Flashcard ID: 1728921214736
-->

START
NI-SZZ

Co jsou **XML databáze**?

Back:

Podobné jako **document storage**, ale pomocí XML

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011104826.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799655-->
END

---

<!--
Original Flashcard ID: 1735205748949
-->

START
NI-SZZ

Je vyjadřovací síla XML stejná jako JSONu?

Back:

Ano.

<!-- DetailInfoStart -->

XML je "ukecanější" a proto lidi většinou preferují JSON, protože je jednodušší (obsahuje méně slov).

Např. v JSONu mi stačí:

```json
movie: "Medvídek"
```

Zatímco v XML musím udělat:

```xml
<movie>Medvídek</movie>
```

<!-- DetailInfoEnd -->
<!--ID: 1779128799657-->
END

---

<!--
Original Flashcard ID: 1735205748952
-->

START
NI-SZZ

Co znamená, že je XML well-formed?

Back:

Splňuje pravidla, že všechny tagy jsou uzavřené.

<!-- ExampleStart -->

```xml
// Well formed
<movie>Medvídek</movie>
</title>

// Není well formed
<movie>Medvídek
```

<!-- ExampleEnd -->
<!--ID: 1779128799660-->
END

---

## Sloupcový

<!--
Original Flashcard ID: 1728921214724
-->

START
NI-SZZ

Co je **wide column store**?

Back:

Máme **column family** (table).

- Jednotlivé řádky tabulky jsou podobné, ale ne nutně stejné (nějaké sloupečky jsou optional)
- Atributů v jednom řádku je hodně (desítky až stovky) -> proto wide column
- Přistupuju pomocí **klíče** a pár conditions. Není tam tolik možností jako u WHERE v SQL.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011103622.png)
![](../../Assets/Pasted%20image%2020241011103658.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799663-->
END

---

<!--
Original Flashcard ID: 1728921214727
-->

START
NI-SZZ

Kdy je dobré použít **white column** storage?

Back:

Pro data, která mají podobná schémata, ale nevyžadují ACID a komplexní queries (SUM, AVG, joining,...)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241011103929.png)

<!-- ExampleEnd -->
<!--ID: 1779128799666-->
END

---

<!--
Original Flashcard ID: 1735205749122
-->

START
NI-SZZ

Jaký je například databázový engine pro wide column databáze?

Back:

Cassandra
<!--ID: 1779128799669-->
END

---

<!--
Original Flashcard ID: 1735205749125
-->

START
NI-SZZ

Co je obecně pointa wide column databáze?

Back:

Je to databáze určená pro velké množství dat a pro velký množství uživatelských přístupů.
<!--ID: 1779128799676-->
END

---

<!--
Original Flashcard ID: 1735205749130
-->

START
NI-SZZ

Co je **row ve wide column databázi**?

Back:

Kolekce **columns**
Každý má **row key**

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241127182256.png)
![](../../Assets/Pasted%20image%2020241127182325.png)

<!-- ExampleEnd -->
<!--ID: 1779128799680-->
END

---

<!--
Original Flashcard ID: 1735205749132
-->

START
NI-SZZ

Co je **column** ve wide column databázi?

Back:

Je to **sloupeček**.

Pozn. hodnoty zde mohou být i např. sets, lists, maps. Nemusí to být atomické.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241127182256.png)
![](../../Assets/Pasted%20image%2020241127182325.png)

<!-- ExampleEnd -->
<!--ID: 1779128799683-->
END

---

<!--
Original Flashcard ID: 1735205749135
-->

START
NI-SZZ

Jak vypadá data model v Cassandře?

Back:

**Instance** -> **keyspaces** -> **tables** -> **rows** -> **columns**

- keyspaces
- table
- row
- column

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127181500.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799686-->
END

---

## Klíč-hodnota

<!--
Original Flashcard ID: 1728921214712
-->

START
NI-SZZ

Co jsou **key-value stores**?

Back:

V storage je **key** a **value** (s libovolnou hodnotou).

<!-- DetailInfoStart -->

Je to hrozně jednoduchý a díky tomu dobře škálovatelný.

![](../../Assets/Pasted%20image%2020241011102321.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799689-->
END

---

<!--
Original Flashcard ID: 1728921214715
-->

START
NI-SZZ

Kdy je například dobrý použít **key-value** storage?

Back:

Obecně na data, ke kterým potřebuju jen přistupovat pomocí **klíče** a nemusím řešit jejich vztahy a komplexnější dotazy.

<!-- ExampleStart -->

- Session data
- Uživatelský informace
- Obecně kdykoliv kdy potřebuju přistupovat pouze pomocí klíče (a neřeším vztahy atd.)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011102425.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799691-->
END

---

<!--
Original Flashcard ID: 1735205749033
-->

START
NI-SZZ

Jak obecně funguje key-value data model?

Back:

Mám klíč (id) a pomocí něho přistupuju k value.
<!--ID: 1779128799694-->
END

---

<!--
Original Flashcard ID: 1735205749035
-->

START
NI-SZZ

Jaké bývají klíče v key-value databázích?

Back:

- real-world identifikátory - email, login name atd.
- automaticky generované - např. auto increment
<!--ID: 1779128799697-->
END

---

<!--
Original Flashcard ID: 1735205749038
-->

START
NI-SZZ

Co je expirace key v key-value databázi?

Back:

Můžu danému key nastavit expiraci. Po vypršení expirace se objekt automaticky smaže.
<!--ID: 1779128799699-->
END

---

<!--
Original Flashcard ID: 1735205749041
-->

START
NI-SZZ

Jaký je například key-value store?

Back:

RiakKV (tím se zde zabýváme)
<!--ID: 1779128799702-->
END

---

<!--
Original Flashcard ID: 1735205749043
-->

START
NI-SZZ

Jak vypadá data model key-value databáze?

Back:

![](../../Assets/Pasted%20image%2020241127173023.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241127173101.png)

<!-- ExplanationEnd -->
<!--ID: 1779128799705-->
END

---

<!--
Original Flashcard ID: 1735205749055
-->

START
NI-SZZ

Jaké jsou 2 možnosti designu key-value databází?

Back:

**Multiple buckets** - každý typ entity v jiném bucketu
**Single bucket** - vše v jednom. Zde se potom typicky před klíč dává typ toho objektu. Např. `actor_trojan`, `movie_medvidek`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127173418.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799708-->
END

---

## Grafový

<!--
Original Flashcard ID: 1728921214730
-->

START
NI-SZZ

Co jsou **grafové databáze**?

Back:

Modelované jako **graf**:

- **Nodes** (real-world entities)
- **Relationships** (hrany).

Uzly i hrany mohou mít **properties**.
<!--ID: 1779128799710-->
END

---

<!--
Original Flashcard ID: 1728921214733
-->

START
NI-SZZ

Kdy je vhodné používat **grafové databáze**?

Back:

Když moje data mají strukturu **grafu**, obzvlášť, když potřebuju ten graf potom **prohledávat** grafovými algoritmy (např. hledání nejkratší cesty atd.).

<!-- ExampleStart -->

Vhodné pro sociální sítě, routing, recommendation engines, lingvistické stromy atd.

Prostě vhodné pro grafové struktury.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011104638.png)
![](../../Assets/Pasted%20image%2020241011104257.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799713-->
END

---

<!--
Original Flashcard ID: 1730978212849
-->

START
NI-SZZ

Co je **property graph**?

Back:

Orientovaný nebo neorientovaný graf:

- **nodes** - entity z reálného světa
- **relationships** - vztahy těch entit

<!-- DetailInfoStart -->

Uzly i hrany mohou mít properties (proto se to jmenuje property graph).

<!-- DetailInfoEnd -->
<!--ID: 1779128799716-->
END

---

<!--
Original Flashcard ID: 1730978212854
-->

START
NI-SZZ

Co jsou obecně grafové databáze?

Back:

Mají data jako **graf**

- Jsou tam **efektivní grafové algoritmy** a průchody grafem
- Umí vytvářet **subgraph queries**
<!--ID: 1779128799719-->
END

---

<!--
Original Flashcard ID: 1730978212857
-->

START
NI-SZZ

Co je **Neo4j**?

Back:

**Grafová databáze**.

<!-- DetailInfoStart -->

Byla první, která dlouhodobě vydržela. Ostatní grafové databáze se přestaly používat.

Vznikla v roce 2007.

<!-- DetailInfoEnd -->
<!--ID: 1779128799722-->
END

---

<!--
Original Flashcard ID: 1730978212861
-->

START
NI-SZZ

Jaká je struktura Neo4j databáze?

Back:

Instance -> databáze -> graf
<!--ID: 1779128799725-->
END

---

<!--
Original Flashcard ID: 1730978212864
-->

START
NI-SZZ

Jaké vlastnosti property grafu?

Back:

Property graph = **directed labeled multigraph**

- **directed** = hrany jsou orientované (ale můžeme se dotazovat proti směru hran, je to stejně rychlý)
- **labeled** = každá node má množinu labels
	- Díky tomu se literally dá modelovat OntoUML
	- Můžeme tak třeba říct, že uzel je typu "Movie" nebo "Actor"
- **multigraph** - mezi dvěma uzlama může být víc hran
<!--ID: 1779128799727-->
END

---

## Jejich rozdíly a vhodné aplikace (aplikační domény)

<!--
Original Flashcard ID: 1728921214706
-->

START
NI-SZZ

Jaké jsou **hlavní typy** NoSQL databází? (4)

Back:

- **key-value** storage
- **wide column** storage
- **document** storage
- **Graph** databáze

Vedlejší typy

- XML databáze
- Objektové databáze
- RDF
<!--ID: 1779128799730-->
END

---

<!--
Original Flashcard ID: 1737106145172
-->

START
NI-SZZ

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a dokumentové databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
	- Konzistence dat, přesné "deterministické" chování
	- Jednoduše se s nimi pracuje
- **Nevýhoda:**
	- Špatně horizontálně škálovatelné
	- Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Dokumentová**:

- Data uložena v **dokumentech**, které mají hierarchickou strukturu
- Typicky dodržuje **BASE**
- **Výhoda:**
	- Škálovatelnost
	- Flexibilní schéma
	- Rychlost
	- Vhodné pro velké množství jednoduchých dotazů
	- Vhodné pro hierarchická data
- **Nevýhoda:** - Nekonzistence dat - kvůli BASE - Složité dotazy jsou méně efektivní než u relačních DB
<!--ID: 1779128799733-->
END

---

<!--
Original Flashcard ID: 1737106145175
-->

START
NI-SZZ

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a XML-nativní databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
	- Konzistence dat, přesné "deterministické" chování
	- Jednoduše se s nimi pracuje
- **Nevýhoda:**
	- Špatně horizontálně škálovatelné
	- Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**XML**

- Data jsou uložena v XML formátu -> vhodné pro aplikace, co pracují s XML
- **Výhoda**:
	- Flexibilní schéma
	- Lepší škálování
	- Vhodné pro aplikace, které používají XML formát
	- Vhodné pro hierarchická data
- **Nevýhoda:** - Nekonzistence dat - kvůli BASE - Složité dotazy jsou méně efektivní než u relačních DB
<!--ID: 1779128799735-->
END

---

<!--
Original Flashcard ID: 1737106145178
-->

START
NI-SZZ

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a key-value databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
	- Konzistence dat, přesné "deterministické" chování
	- Jednoduše se s nimi pracuje
- **Nevýhoda:**
	- Špatně horizontálně škálovatelné
	- Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Key-value:**

- Velmi jednoduchá struktura, data jsou uložena jako páry klíč-hodnota
- **Výhoda:**
	- Fakt hodně rychlý - operace čato v O(1)
	- Velmi dobré škálování
	- Flexibilní schéma
- **Nevýhoda:**
	- Žádné komplexní dotazy (žádné JOINy nebo agregace)
	- Určeno pro jednoduchá data, s komplexními daty/dotazy se hodně špatně pracuje

Obecně je **key-value** databáze taková hodně specifická. Extrémní **rychlost** a **škálovatelnost** ale pouze pro **jednoduchá data**.
<!--ID: 1779128799738-->
END

---

<!--
Original Flashcard ID: 1737106145180
-->

START
NI-SZZ

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a grafové databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
	- Konzistence dat, přesné "deterministické" chování
	- Jednoduše se s nimi pracuje
- **Nevýhoda:**
	- Špatně horizontálně škálovatelné
	- Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Grafové**:

- Data jsou uložena ve formě grafu (uzly, hrany)
- **Výhoda:**
	- Hodí se pro modelování určitých struktur (např. znalosti, sociální sítě, doporučovací systémy atd.)
	- Flexibilní modelování vztahů a struktur
	- Optimalizované dotazy pro grafové struktury (např. vybírání podgrafů, hledání cest atd.)
	- Dobrá škálovatelnost
- **Nevýhoda:** - Méně efektivní pro "tabulková data" - Nižší podpora pro ACID - Prostě takový specifický use case
<!--ID: 1779128799741-->
END

---

<!--
Original Flashcard ID: 1737106145183
-->

START
NI-SZZ

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a sloupcové (wide-column) databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
	- Konzistence dat, přesné "deterministické" chování
	- Jednoduše se s nimi pracuje
- **Nevýhoda:**
	- Špatně horizontálně škálovatelné
	- Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Wide column**

- Řádky mají hromadu různých sloupců, každý řádek může obsahovat pouze některé sloupce
- **Výhody:**
	- Ideální pro čtení a analýzy
	- Flexibilní schéma
	- Vysoká škálovatelnost
	- Výborný výkon (pro zápis i čtení)
	- Vhodné pro big data, datové sklady
- **Nevýhody:** - Horší výkon pro kompexní dotazy - Omezená podpora pro ACID - Nevhodné pro OLTP (ale super pro OLAP)
<!--ID: 1779128799743-->
END

---

<!--
Original Flashcard ID: 1737106145185
-->

START
NI-SZZ

Uveďte výhody a nevýhody přístupů **schema-free a schema aware databází**.

(větší otázka)

Back:

**schema-aware** (např PostgreSQL):

- **Výhody**:
	- Přesně definovaná datová struktura, vysoká konzistence a validita
	- **Jednoduchost práce s databází**, protože v tom není takový chaos
	- Efektivnější dotazování u složitých dotazů
- **Nevýhody**:
	- Změny ve schématu jsou složité a časově náročné → menší flexibilita

**schema-free**

- **Výhody**
	- Flexibilní schéma, dá se jednoduššeji měnit
	- V určitých ohledech jednodušší údržba (jednodušší migrace a změny ve struktuře dat)
- **Nevýhody:** - Vyžaduje to více pečlivosti při práci s databází (konvence, dodržovat určitý pravidla) - jinak v tom může jednoduše vzniknout zmatená databáze - Horší optimalizace komplexních dotazů
<!--ID: 1779128799746-->
END

---

## SQL

## XQuery

<!--
Original Flashcard ID: 1735205748962
-->

START
NI-SZZ

Co je **XDM**?

Back:

Sjednocení data modelu **XQuery** a **XPath**
<!--ID: 1779128799749-->
END

---

<!--
Original Flashcard ID: 1735205748965
-->

START
NI-SZZ

Jak je strukturovaný **XDM data model**?

Back:

- **XML tree** - dokument je strukturovaný jako strom
- **Document order** - elementy a data jsou vždy **ordered**.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241114102046.png)

<!-- ImageEnd -->
<!--ID: 1779128799751-->
END

---

<!--
Original Flashcard ID: 1735205748968
-->

START
NI-SZZ

Co je **sequence** v XDM?

Back:

Kolekce **nodes** a/nebo **atomických hodnot**.

<!-- DetailInfoStart -->

Může být

- mixed
- flattened
- empty
- singleton
- může mít duplicitní hodnoty

![](../../Assets/Pasted%20image%2020241114102521.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799754-->
END

---

<!--
Original Flashcard ID: 1735205748970
-->

START
NI-SZZ

Co je výsledkem XPath výrazu aplikovaného na XML dokument?

Back:

**Sekvence**
<!--ID: 1779128799757-->
END

---

<!--
Original Flashcard ID: 1735205748978
-->

START
NI-SZZ

Jaké části má **XPath krok**? (na tohle se ptá u státnic!)

Back:

1. **osa** (axis) - pohyb v rámci uzlů
2. **node test**
3. optional: **predikát** - logická podmínka, co musí být splněná

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241114103129.png)

<!-- ExplanationEnd -->
<!--ID: 1779128799761-->
END

---

<!--
Original Flashcard ID: 1735205748981
-->

START
NI-SZZ

Jaké jsou např. **osy** v XPath?

Back:

- self
- child
- parent
- attribute

... a moho dalších

Tento obrázek to hezky ukazuje:

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241114103625.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241114103230.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799764-->
END

---

<!--
Original Flashcard ID: 1735205748984
-->

START
NI-SZZ

Vysvětli jak fungují **osy** v XPath:

`/movies/child::movie`

Back:

1. `/movies` - Vezmu element `movies` - ten se stal kontextem
2. `/child` - na základě kontextu se přesunu po ose `child` - _axis_
3. `::movie` - vyberu element, co se jmenuje movie - _node test_

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241114103557.png)
![](../../Assets/Pasted%20image%2020241114103605.png)
![](../../Assets/Pasted%20image%2020241114103610.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799767-->
END

---

<!--
Original Flashcard ID: 1735205748987
-->

START
NI-SZZ

Co všechno může být v **node test** v XPath?

Back:

- `name` - jméno elementu
- `*` - jakýkoliv element
- `node()` - node co není text
- `text()` - text co není node

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241114103912.png)
![](../../Assets/Pasted%20image%2020241114103916.png)

<!-- ExampleEnd -->
<!--ID: 1779128799770-->
END

---

<!--
Original Flashcard ID: 1735205748989
-->

START
NI-SZZ

Jak fungují **predikáty** v XPath?

Back:

Do hranatých závorek napíšu nějakou podmínku.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241114104049.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241114104055.png)
![](../../Assets/Pasted%20image%2020241114104059.png)

<!-- ExampleEnd -->
<!--ID: 1779128799773-->
END

---

<!--
Original Flashcard ID: 1735205748992
-->

START
NI-SZZ

Jaké **zkratky** jsou v XPath?

Back:

- použití `/` místo `child::`
- použití `@` místo `attribute::`
- použití `//` místo `descendant-or-self::node()`
- použití `.` místo `self::node()`
- použití `..` místo `parent::node()`

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241114104106.png)
![](../../Assets/Pasted%20image%2020241114104112.png)

<!-- ExampleEnd -->
<!--ID: 1779128799776-->
END

---

<!--
Original Flashcard ID: 1735205748994
-->

START
NI-SZZ

Jaké jsou **typy porovnávání** v XPath? (3)

Back:

- **General comparisons** - porovnávají se dvě sekvence
	- `=, !=, <, <=, >=, >`
- **Value comparisons** - porovnávají se dvě hodnoty (singleton sequences)
	- `eq, ne, lt, le, ge, gt`
- **Node comparisons**
	- `is` - test identity
	- `<<, >>` - test pozice (preceding, following)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241114104749.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241114104756.png)

<!-- ExampleEnd -->
<!--ID: 1779128799778-->
END

---

<!--
Original Flashcard ID: 1735205749004
-->

START
NI-SZZ

Jak se liší XPath a XQuery?

Back:

- **XPath** - jazyk který aplikujeme na XML dokument a on nám vrátí sekvenci elementů
- **XQuery** - XPath + další rozšíření navíc
<!--ID: 1779128799781-->
END

---

<!--
Original Flashcard ID: 1735205749007
-->

START
NI-SZZ

Jaké jsou **expressions** v XQuery? (6)

Back:

- **Path** - traditional XPath
- **FLWOR**
	- `for … let … where … order by … return …`
- **Conditional** expressions
	- `if … then … else …`
- **Quantified** expressions
	- `some|every ... satisfies...`
- **Boolean** expressions
	- `and, or, not`
- **Primary** expressions - **constructors**, literals, variable references, function calls,...
<!--ID: 1779128799784-->
END

---

<!--
Original Flashcard ID: 1735205749017
-->

START
NI-SZZ

Co jsou FLWOR experssions? (5)

Back:

Umožňují mi dělat `for, let, where, orderby, return`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241114111333.png)
![](../../Assets/Pasted%20image%2020241114111412.png)
![](../../Assets/Pasted%20image%2020241114111420.png)
![](../../Assets/Pasted%20image%2020241114111430.png)
![](../../Assets/Pasted%20image%2020241114111439.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241114111341.png)
![](../../Assets/Pasted%20image%2020241114111449.png)
![](../../Assets/Pasted%20image%2020241114111454.png)
![](../../Assets/Pasted%20image%2020241114111459.png)
![](../../Assets/Pasted%20image%2020241114111505.png)

<!-- ExampleEnd -->
<!--ID: 1779128799786-->
END

---

<!--
Original Flashcard ID: 1737106145201
-->

START
NI-SZZ

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **XQuery**.

(větší otázka)

Back:

XQuery slouží k dotazování nad stromovou strukturou XML dokumentu.

- Je nadstavba XPath umožňující složitější konstrukty:
	- FLWOR - For, Let, Where, Order by, Return
	- Kvantifikátory - some, every, ...
	- If-then-else

**Např.** výběr všech elementů s tagem `<book>`

```xquery
for $book in doc("books.xml")//book
return $book
```
<!--ID: 1779128799789-->
END

---

## Cypher

<!--
Original Flashcard ID: 1730978212886
-->

START
NI-SZZ

Co je **Cypher**?

Back:

Deklarativní **jazyk** pro dotazování nad **grafovými databázemi** (např. nad Neo4j)
<!--ID: 1779128799792-->
END

---

<!--
Original Flashcard ID: 1730978212890
-->

START
NI-SZZ

Jak se v Cypheru zapisují **nodes** a **relationships**?

Back:

- **Nodes** - `()`
- **Relationships** - `<--, --, -->`
<!--ID: 1779128799795-->
END

---

<!--
Original Flashcard ID: 1730978212897
-->

START
NI-SZZ

Jaké jsou typy patternů v **Cypheru**? (3)

Back:

- **Node pattern** - Vyberu node která splňuje daný pattern
- **Relationship pattern** - vyberu relationship, který musí splňovat určitou věc
- **Path pattern** - popisuje cestu v grafu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104164750.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799797-->
END

---

<!--
Original Flashcard ID: 1730978212901
-->

START
NI-SZZ

Co obsahuje **node pattern**?

Back:

- **Labels** -
- **Property map** - vlastnosti

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104164848.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799800-->
END

---

<!--
Original Flashcard ID: 1730978212905
-->

START
NI-SZZ

Co obsahuje **relationship pattern**?

Back:

- Může tam být podmínka, jakým směrem musí být hrana

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104164932.png)
![](../../Assets/Pasted%20image%2020241104164937.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241104165011.png)

<!-- ExampleEnd -->
<!--ID: 1779128799803-->
END

---

<!--
Original Flashcard ID: 1730978212909
-->

START
NI-SZZ

Co je variable length mode v Cypheru?

`()-[r:FRIEND *..2]-()`

Back:

Říká mi to, že hledám nějaký 2 uzly, mezi kterýma leží hrana typu FRIEND, ale ty hrany mezi těma dvěma uzlama můžou být i dvě. (Např. hledám kamarády mých kamarádů)

Díky tomu jsem schopný snadně dělat hodně komplikovaný dotazy.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104165156.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799806-->
END

---

<!--
Original Flashcard ID: 1730978212912
-->

START
NI-SZZ

Co je relationship uniqueness v Cypher?

Back:

Jeden node se může vyskytnout ve více node patterns najednou.
Jeden **relationship** se ale **nemůže** objevit v daném patternu vícekrát

<!-- ExplanationStart -->

Je to kvůli tomu, aby se to při dotazování nezacyklilo.

![](../../Assets/Pasted%20image%2020241104165438.png)

<!-- ExplanationEnd -->
<!--ID: 1779128799808-->
END

---

<!--
Original Flashcard ID: 1730978212916
-->

START
NI-SZZ

Jak funguje `MATCH` v Neo4j?

Back:

Umožňuje mi to společně s `WHERE` vyhledávat grafy, co splňují určité podmínky.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241104165515.png)
![](../../Assets/Pasted%20image%2020241104165538.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104165506.png)
![](../../Assets/Pasted%20image%2020241104165631.png)

WHERE (search conditions) fungují dost podobně jako v SQLku:
![](../../Assets/Pasted%20image%2020241104170032.png)
![](../../Assets/Pasted%20image%2020241104170037.png)

Dokáže to regexy, operace se stringama (starts with atd.)
![](../../Assets/Pasted%20image%2020241104170145.png)

V klauzuli WHERE může být další path pattern (podobně jako v SQLku lze nestovat WHERE)
![](../../Assets/Pasted%20image%2020241104170235.png)

Pak tam můžou být i exists, kvantifikátory atd.
![](../../Assets/Pasted%20image%2020241104170453.png)
![](../../Assets/Pasted%20image%2020241104170446.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799811-->
END

---

<!--
Original Flashcard ID: 1730978212919
-->

START
NI-SZZ

Jak funguje `OPTIONAL` v MATHCH v Cypher?

Back:

Dělá to jakoby left outer join. Optionally mi to do výsledku dá ještě něco (viz example).

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241104170515.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104170503.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799814-->
END

---

<!--
Original Flashcard ID: 1730978212923
-->

START
NI-SZZ

Co je `RETURN` klauzule v Cypheru?

Back:

Na rozdíl od SQLka, kde máme projekci, tak zde se používá RETURN, abychom nějak určili, co přesně chceme vrátit.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104170708.png)
![](../../Assets/Pasted%20image%2020241104170821.png)
![](../../Assets/Pasted%20image%2020241104171015.png)
![](../../Assets/Pasted%20image%2020241104171020.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

Pozn. v tom returnu můžeme mít i kostruktor. Ten `SIZE` mi najde pro vybraného herce množinu filmů, ve kterých hraje a označí to m. Pak to vrátí sekvenci těch filmů a na to to aplikuje tu funkci SIZE, která zjistí velikost té sekvence.
![](../../Assets/Pasted%20image%2020241104170831.png)

<!-- ExampleEnd -->
<!--ID: 1779128799816-->
END

---

<!--
Original Flashcard ID: 1730978212926
-->

START
NI-SZZ

Jak fungují **agregační funkce** v Cypheru?

Back:

V returnu použiju agregační funkci podobně jako se to používá v SQLku (viz příklad).

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241104171159.png)
![](../../Assets/Pasted%20image%2020241104171228.png)
![](../../Assets/Pasted%20image%2020241104171236.png)

<!-- ExampleEnd -->
<!--ID: 1779128799819-->
END

---

<!--
Original Flashcard ID: 1730978212930
-->

START
NI-SZZ

Jak funguje `WITH` v Cypheru?

Back:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104171848.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241104171856.png)

<!-- ExampleEnd -->
<!--ID: 1779128799821-->
END

---

<!--
Original Flashcard ID: 1730978212933
-->

START
NI-SZZ

Jak funguje chainování klauzulí?

Back:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104171931.png)
![](../../Assets/Pasted%20image%2020241104171935.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799824-->
END

---

<!--
Original Flashcard ID: 1730978212936
-->

START
NI-SZZ

Jak funguje `UNION` operace v Cypheru?

Back:

Umožňuje mi kombinovat multi-part queries.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104172011.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799827-->
END

---

<!--
Original Flashcard ID: 1730978212940
-->

START
NI-SZZ

Jak fungují List a Map operace v Cypheru?

Back:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241104172039.png)

![](../../Assets/Pasted%20image%2020241104172058.png)
![](../../Assets/Pasted%20image%2020241104172102.png)
![](../../Assets/Pasted%20image%2020241104172106.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799829-->
END

---

<!--
Original Flashcard ID: 1737106145198
-->

START
NI-SZZ

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **Cypher**.

(větší otázka)

Back:

Cypher slouží pro dotazování nad grafovými databázemi, zejména nad Neo4j.

- Má deklarativní přístup, inspirováno SQL

Dotazovací jazyk:

- Vybíráme podgrafy splňující určité podmínky
- `()` reprezentuje node
- `<--, --, -->` reprezentuje vztah
- Používá se MATCH, RETURN, WHERE, WITH

Např. najde movie, kde hrál nějaký herec

```
MATCH (m:MOVIE)-[:PLAY]->(:ACTOR)
RETURN DISTINCT m;
```
<!--ID: 1779128799832-->
END

---

## Jejich typické konstrukce a vyjadřovací možnosti

<!--
Original Flashcard ID: 1729236692926
-->

START
NI-SZZ

Jak vypadá dotazování v MongoDB (obecně)?

Back:

Dotazuje se nad **jednou kolekcí**, **jedním příkazem** (případně celým scriptem).

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241015093917.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799835-->
END

---

<!--
Original Flashcard ID: 1729236692935
-->

START
NI-SZZ

Jaké jsou **základní operace** v MongoDB databázi? (5)

Back:

- **insert** (`insertOne`, `insertMany`) - vytvoří nový dokument
- **replace** (`replaceOne`) - nahradí existující dokument
- **update** (`updateOne`, `updateMany`) - aktualizuje dokument
- **remove** (`deletOne`, `deleteMany`) - odstraní dokument
- **find** (`find`) - najde dokumenty v kolekci
<!--ID: 1779128799837-->
END

---

<!--
Original Flashcard ID: 1735205749152
-->

START
NI-SZZ

Mohu v Cassandře dělat JOINy?

Back:

Ne. V Cassandře se můžu dotazovat jen nad jednou tabulkou.
<!--ID: 1779128799840-->
END

---

<!--
Original Flashcard ID: 1735205749154
-->

START
NI-SZZ

Jaké jsou 2 části primary keys v cassandře?

Back:

- **parition key** - nějaké sloupečky, prostě to co si člověk představí pod primary key
- **clustering column** (optional) - definuje pořadí jednotlivých řádků

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241208130222.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799842-->
END

---

<!--
Original Flashcard ID: 1737106145203
-->

START
NI-SZZ

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **MongoDB**.

(větší otázka)

Back:

- Vychází z JavaScriptu, tečková notace
- db - handle na databázové spojení
- movies - kolekce
- **find(selekce, projekce)** - metoda (jako SELECT), může být například update atd.
- selekce - podle čeho filtruju výsledky
- projekce - jaké atributy mají být ve výsledku
- **sort(key_obj)** - řazení, 1 = ASC, -1 = DESC
- **pretty()** - jen formátuje výstup, aby byl čitelnější (řádky, odsazení)

```javascript
db.movies.find(
	{
		year: {$gte: 2000, $lte 2005},
		director: { $exists: 1 }
	},
	{ _id: 1 }
).sort(
	{ rating: -1, year: 1 }
)
```
<!--ID: 1779128799845-->
END

---
