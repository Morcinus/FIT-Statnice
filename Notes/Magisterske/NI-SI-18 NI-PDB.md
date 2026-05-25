---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-18 NI-PDB

> NI-SI-18 (NI-PDB)
> CAP teorém a NoSQL databáze. Klasifikace NoSQL databází z pohledu CAP teorému, příklady konkrétních NoSQL databází a jejich architektury; horizontální vs. vertikální škálování, replikace a sharding. Koncepce BASE vs. ACID.

## CAP teorém a NoSQL databáze

<!--
Original Flashcard ID: 1728921214701
-->

START
NI-SZZ

Co znamená **NoSQL**?

Back:

**NoSQL movement** = hledání alternativ pro řešení problémů, pro které je SQL špatný

<!-- ExampleStart -->

Např. mám NoSQL, které se zaměřuje na grafy, škálování atd.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Tohle je pro srovnání relační databáze
![](../../Assets/Pasted%20image%2020241009142251.png)
![](../../Assets/Pasted%20image%2020241009142331.png)
![](../../Assets/Pasted%20image%2020241009142427.png)
![](../../Assets/Pasted%20image%2020241009142507.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799462-->
END

---

<!--
Original Flashcard ID: 1728921214704
-->

START
NI-SZZ

Jaké typické vlastnosti mají NoSQL databáze? (4)

Back:

- **dobře horizontálně škálovatelné**
- **schema free** - nemají striktní schéma
- **eventually consistent** - není tam strong konzistence
- **pro obrovská množství dat**
<!--ID: 1779128799465-->
END

---

<!--
Original Flashcard ID: 1728921214756
-->

START
NI-SZZ

Co je **relaxed consistency** v NoSQL?

Back:

Není nutné, aby byla data furt konzistentní (ACID), ale jsou eventually konzistentní (BASE).

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011110101.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799468-->
END

---

<!--
Original Flashcard ID: 1728921214764
-->

START
NI-SZZ

Jakých je **5 klíčových výhod NoSQL** přístupu?

Back:

- **Škálování** - jednoduše se horizontálně škáluje
- **Volume** - vhodné pro velké množství dat
- **Administrátoři** - nejsou tolik potřeba, protože se vše automatizuje
- **Economics** - o neco levnější než klasické SQL
- **Flexibility** - nejsou striktní data schemata
<!--ID: 1779128799470-->
END

---

<!--
Original Flashcard ID: 1728921214767
-->

START
NI-SZZ

Jakých je **5 klíčových nevýhod NoSQL** přístupu?

Back:

- **Maturity** - není tak zaběhlé a ověřené jako SQL
- **Support** - limitovaná podpora
- **Administrace** - občas obtížné na instalaci a údržbu
- **Analytiky** - není taková podpora jako u SQL
- **Expertise** - malé množství expertů
<!--ID: 1779128799473-->
END

---

<!--
Original Flashcard ID: 1736497489168
-->

START
NI-SZZ

Jaké jsou **základní předpoklady pro CAP theorém**?

Back:

- Musí se jednat o distribuovaný systém se shardingem a replikací
- Read a write operace jsou dělány na jednom agregátu
<!--ID: 1779128799476-->
END

---

<!--
Original Flashcard ID: 1736497489172
-->

START
NI-SZZ

Co říká **CAP theorem**?

Back:

![](../../Assets/Pasted%20image%2020241022102913.png)

CAP = Consistency, Availability, Partition tolerance
<!--ID: 1779128799479-->
END

---

<!--
Original Flashcard ID: 1736497489177
-->

START
NI-SZZ

Co je **consistency** v CAP theorému?

Back:

Čtení a zápis musí být atomický

<!-- DetailInfoStart -->

s![](../../Assets/Pasted%20image%2020241022103146.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799483-->
END

---

<!--
Original Flashcard ID: 1736497489182
-->

START
NI-SZZ

Co je **availability** v CAP theorému?

Back:

Pokud noda běží, musí odpovídat na requesty

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241022103235.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799486-->
END

---

<!--
Original Flashcard ID: 1736497489187
-->

START
NI-SZZ

Co je **partition tolerance** v CAP theoremu?

Back:

Je možný, že nějaká node na chvíli vypadne. Distribuovaný systém by měl být vůči tomuhle odolný,
<!--ID: 1779128799490-->
END

---

<!--
Original Flashcard ID: 1736497489192
-->

START
NI-SZZ

Jaké jsou 3 praktické provedení CAP theoremu?

Back:

Vždy se zaměřím na dvě vlastnosti:

- **CA** - tradiční databáze (Postgres)
- **CP** - tohle se moc nepoužívá v databázích
- **AP** - šidí se konzistence

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241022103437.png)
![](../../Assets/Pasted%20image%2020241022103559.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799493-->
END

---

<!--
Original Flashcard ID: 1735205749082
-->

START
NI-SZZ

Co jsou CRDT typy?

Back:

Convergent Replicated Data Types

- Zavedeme datové typy a konkrétní povolené operace a v případě konfliktů jak se to má resolvenout
<!--ID: 1779128799496-->
END

---

<!--
Original Flashcard ID: 1735205749084
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Jaké CRDT typy implementuje Riak?

Back:

Counter, set, map, register, flag,...
<!--ID: 1779128799499-->
END

---

<!--
Original Flashcard ID: 1735205749087
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je **Counter** CRDT?

Back:

Integer, který umožňuje inkrementovat nebo dekrementovat. Nemůžu nastavit konkrétní hodnotu.

Konvergenční pravidlo:

- Postupně se aplikují inkrementy/dekrementy

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127174746.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799501-->
END

---

<!--
Original Flashcard ID: 1735205749089
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je **Set** CRDT?

Back:

Umožňuje přidávání/odebírání prvků z množiny.

Konvergenční pravidlo:

- Přidávání vyhrává nad odebíráním

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127174937.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799504-->
END

---

<!--
Original Flashcard ID: 1735205749092
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je **Map** v CRDT?

Back:

Podobně jako set, ale jsou tam names a values. Mohu přidávat/odebírat

Konvergenční pravidlo:

- Přidání vyhrává nad odebíráním

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127174928.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799507-->
END

---

<!--
Original Flashcard ID: 1737106145151
-->

START
NI-SZZ

Uveďte a vysvětlete **CAP theorém**.

(větší otázka)

Back:

**Předpoklady**: máme

- Distribuovaný systém se **shardingem a replikací**
- Operace čtení a zápisu **pouze na jednom agregátu**

**CAP vlastnosti:**

- **konzistence** (Consistency): Každý read (nad celým systémem) vrátí nejnovější data nebo error. (pozor, je to jiné než consistency v ACIDu!)
- **dostupnost** (Availability): Pokud node funguje, musí reagovat na požadavky
- **odolnost k přerušení** (Partition tolerance): systém musí fungovat, i přes výpadky v síti (např. že se nějaké zprávy mezi nodama nedoručují)

**CAP theorém říká:**
Není možné, aby distribuovaný systém poskytoval záruku všech tří vlastností (consistency, availability, partition tolerance) zároveň. Vždy může garantovat nejvýše 2 z těchto vlastností.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250118123624.png)
![](../../Assets/Pasted%20image%2020250118123629.png)
![](../../Assets/Pasted%20image%2020250118123635.png)
![](../../Assets/Pasted%20image%2020250118123642.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1779128799510-->
END

---

<!--
Original Flashcard ID: 1737106145165
-->

START
NI-SZZ

Co je to **silná a slabá konsistence** v NoSQL databázích? Jak souvisí s CAP?

(větší otázka)

Back:

**Silná konzistence** - používá přístup ACID, data musí být **vždy** ve validním stavu před transakcí i po transakci

**Slabá konzistence** - typicky bývá "eventually consistent". Když se provede změna, to může trvat, než uživatelé tu změnu uvidí.

**CAP**:

- U AP - slabá konzistence
- U CA, CP - silná konzistence

Tags: reviewed
<!--ID: 1779128799512-->
END

---

<!--
Original Flashcard ID: 1737106145167
-->

START
NI-SZZ

Vysvětlete co je **"quorum"** a jak se používá k zajištění silné či slabé konzistence?

(větší otázka)

Back:

Řekněme, že máme distribuovaný systém s uzly.

- Quorum je číslo, které určuje, kolik uzlů musí být zapojeno do čtení/zápisu pro zpracování daného požadavku.
- **Čím vyšší quorum, tím víc se blížím k silné konzistenci.**

Mějme $N$ nodů.

**Write quorum**:

- Idea: jeden write request se propíše na $W$ nodů (na většinu nodů)
- Typicky $W > N/2$
	- $W$ - počet nodů, kam se zapíše
	- $N$ celkem nodů

**Read quorum**:

- Idea: přečte se $R$ nodů, vybere se nejnovější výsledek
- Typicky $R > N - W$

Proč to tak funguje:

- Kvůli podmínce u write quora bude vždy při čtení mít alespoň jeden node aktuální verzi záznamu.

Tags: reviewed
<!--ID: 1779128799515-->
END

---

<!--
Original Flashcard ID: 1737106145170
-->

START
NI-SZZ

Jak jsou charakterizována **BigData** (3V+)?

(větší otázka)

Back:

Hlavní 4V:

- **Volume** - množství dat se zvyšuje exponenciálně (ne lineárně)
- **Variety** - data mají různé formáty, typy a struktury
- **Velocity** - nová data přibývají rychle a je třeba je rychle zpracovávat
- **Veracity** - data jsou často nekonzistentní, nekompletní, nepřesný

Další:

- **Value** - data jsou potenciálně hodnotná pro byznys
- **Validity** - správnost a přesnost dat
- **Volatility** - doba, po jakou by měla být data uchovávána a spravována
- Cardinality
- Continuity
- Complexity

Tags: reviewed
<!--ID: 1779128799518-->
END

---

## Klasifikace NoSQL databází z pohledu CAP teorému

<!--
Original Flashcard ID: 1737106145159
-->

START
NI-SZZ

Co jsou to **CA** systémy dle CAP teorému. Uveďte příklady.

Back:

**CA** (Consistency-Availablility)

- **zachovávají ACID vlastnosti**
- mohou nastat výpadky (bez partition tolerance)
- klasické relační databáze
- **MySQL, PostgreSQL**, BigTable

<!-- ImageStart -->
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXch_NVqX68_B8u5AQy3l8by3XsopfRNwxO1hp6BhLioQvxUt9p_47lPdT8Twxicf8Kp_J2ZA7KPhTTggIPE-Up6X6T4wgJ2fkAqmOx7oSL2Kzebw24m1MI13JGR6wCbRzwiwY9KVp5f1hRg6CEutcU4V3Y?key=MR9RTuBxYyWmpndNFWTOiQ)
<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1779128799521-->
END

---

START
NI-SZZ

Co jsou to **CP** systémy dle CAP teorému. Uveďte příklady.

Back:

**CP** (Consistency-Partition Tolerance)

- upřednostňují konzistenci nad dostupností => distributed locking
- typicky maximalizují i dostupnost (vysoce dostupné DB)
- **MongoDB**, **Redis**

<!-- ImageStart -->
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXch_NVqX68_B8u5AQy3l8by3XsopfRNwxO1hp6BhLioQvxUt9p_47lPdT8Twxicf8Kp_J2ZA7KPhTTggIPE-Up6X6T4wgJ2fkAqmOx7oSL2Kzebw24m1MI13JGR6wCbRzwiwY9KVp5f1hRg6CEutcU4V3Y?key=MR9RTuBxYyWmpndNFWTOiQ)
<!-- ImageEnd -->

<!--ID: 1779704516460-->
END

---


START
NI-SZZ

Co jso uto **AP** systémy dle CAP teorému. Uveďte příklady

Back:

**AP** (Availability-Partition Tolerance)

- upřednostňují dostupnost nad konzistencí = **BASE vlastnosti**
- data jsou typicky konzistentní v řádu milisekund → eventuálně konzistentní DB
- **Cassandra**, **RiakKV**

<!-- ImageStart -->
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXch_NVqX68_B8u5AQy3l8by3XsopfRNwxO1hp6BhLioQvxUt9p_47lPdT8Twxicf8Kp_J2ZA7KPhTTggIPE-Up6X6T4wgJ2fkAqmOx7oSL2Kzebw24m1MI13JGR6wCbRzwiwY9KVp5f1hRg6CEutcU4V3Y?key=MR9RTuBxYyWmpndNFWTOiQ)
<!-- ImageEnd -->

<!--ID: 1779704516462-->
END

---

## Příklady konkrétních NoSQL databází a jejich architektury

<!--
Original Flashcard ID: 1729236692851
-->


START
NI-SZZ

S jakými dokumenty pracuje **MongoDB**?

Back:

S kolekcemi **JSON dokumentů**
<!--ID: 1779128799523-->
END

---

<!--
Original Flashcard ID: 1729236692887
-->

START
NI-SZZ

Proč se v MongoDB **nedoporučuje** přidělovat IDčka **autoinkrementem**, ale např. pomocí **UUID**?

Back:

Protože ta databáze může být naškálovaná (na více místech), potom přidělování IDček bude složité.
<!--ID: 1779128799526-->
END

---

<!--
Original Flashcard ID: 1729236692905
-->

START
NI-SZZ

Co znamená `$` v MongoDB?

Back:

Označuje query operátor.

<!-- ExampleStart -->

`$gt` - greater than

<!-- ExampleEnd -->
<!--ID: 1779128799529-->
END

---

<!--
Original Flashcard ID: 1729236692914
-->

START
NI-SZZ

Jaké jsou **typy** vytváření relations v MongoDB a **jak fungují**? (2)

Back:

- **Reference**
	- Uložím do dokumentu Id jiného dokumentu.
	- Při hledání si zjistím Id a pak vyhledám další dokument
	- Dá se používat pro vazby `1:1`, `1:N`, `N:M`
- **Embedded document**
	- Do daného dokumentu si rovnou uložím část toho jiného dokumentu
	- Toto je extrémně rychlý na dotazování, ale pomalý na zapisování (protože musím updatnout všechna data)
	- Dá se používat pouze pro vazby `1:1` nebo `1:N`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241015093540.png)
![](../../Assets/Pasted%20image%2020241015093549.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799532-->
END

---

<!--
Original Flashcard ID: 1735205749080
-->

START
NI-SZZ

Jaký typ systému je **Riak**?

Back:

**AP systém** (Availability + Partition tolerance dle CAP) – může dočasně obětovat konzistenci; konflikty se řeší např. **quorum** nebo **CRDT** typy.
<!--ID: 1779128799534-->
END

---

<!--
Original Flashcard ID: 1735205749117
-->

START
NI-SZZ

Jak vypadá architektura **Riak**?

Back:

je to AP systém (tedy availability + partition tolerance)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127180532.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799537-->
END

---

<!--
Original Flashcard ID: 1735205749119
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je **Riak Ring**?

Back:

Kruhová struktura, do které si riak mapuje klíče.

Podle toho se umisťují repliky záznamů tak, aby byl rovnoměrně rozdělené na tom kruhu.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127180542.png)
![](../../Assets/Pasted%20image%2020241127180718.png)

<!-- DetailInfoEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127180601.png)

<!-- ImageEnd -->
<!--ID: 1779128799540-->
END

---

<!--
Original Flashcard ID: 1737106145188
-->

START
NI-SZZ

Vysvětlete koncepci databázového stroje **MongoDB**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**MongoDB**

- NoSQL dokumentová databáze
- Data uložena v BSON (binární JSON)
- **Silné stránky**:
	- Vhodné pro **škálování** (Mongo podporuje sharding i replikaci)
	- Flexibilita
	- Vysoká dostupnost
	- Vysoký výkon
- **Vhodné použití**:
	- Aplikace, kde se často mění schéma dat (např. přidávání polí do dokumentů)
	- Aplikace s **mnoha daty** a **jednoduchými operacemi**
	- Např. mobilní aplikace, content management systémy, ...
- **Nevhodné použití**
	- Aplikace se složitými vztahy a dotazy (lepší je SQL)
	- Aplikace s méně daty (lepší je SQL)
	- Aplikace, které vyžadují hodně stabilitu a přesnost (lepší je SQL s ACID)
<!--ID: 1779128799543-->
END

---

<!--
Original Flashcard ID: 1737106145190
-->

START
NI-SZZ

Vysvětlete koncepci databázového stroje **Cassandra**. Uveďte jeho silné stránky a uveďte příklady, kde je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**Cassandra**

- Wide column databáze
- **Vhodné použití**:
	- Pro **obří množství jednoduchých dat** (big data)
	- Pro jednoduché dotazování
	- Když je třeba hodně škálovat
	- Když je třeba Flexibilní datový model
	- Když je třeba rychle zapisovat jednoduchá data
	- Např. **velké distribuované systémy** (Amazon to používá), **globální e-commerce platformy**, real-time analýzy, sledování aktivit
- **Nevhodné použití**:
	- Komplexní dotazy a vztahy (Lepší SQL)
	- Když máme nízký objem dat (lepší SQL nebo Mongo)
	- Když potřebujeme přesnost ve schématu (lepší SQL)
<!--ID: 1779128799546-->
END

---

<!--
Original Flashcard ID: 1737106145193
-->

START
NI-SZZ

Vysvětlete koncepci databázového stroje **Neo4j**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**Neo4j**:

- Pracuje se nad grafy (uzly + hrany)
- Hodí se na data, která mají komplexní vztahy, které lze reprezentovat grafy
- **Vhodné:**
	- Když máme data s **komplexními vztahy**
	- Když chceme **komplexní dotazy v grafu** (cesty, stromy, podstromy, ...)
	- Např. sociální sítě, doporučovací systémy, detekce podvodů (v bankovních transakcích), znalosti
- **Nevhodné:**
	- Pro aplikace **bez komplexních vztahů**
	- Pro **velké transakční systémy**
	- Pro **velké množství dat** s jednoduchými vztahy
<!--ID: 1779128799549-->
END

---

<!--
Original Flashcard ID: 1737106145196
-->

START
NI-SZZ

Uveďte koncepci databázového stroje **RiakKV**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**RiakKV**:

- key-value store
- máme buckety, v nich hodnoty key-value
- **Vhodné**:
	- Pro data s jednoduchou strukturou a jednoduchými vztahy
	- Pro vysokou škálovatelnost
	- Vhodné pro vysokou flexibilitu
	- Vhodné pro systémy, které vyžadují vysokou dostupnost a odolnost
	- Např. velké e-commerce, sociální sítě, systémy pro analýzu dat v reálném čase
- **Nevhodné**:
	- Pro aplikace vyžadující silnou konzistenci
	- Aplikace se složitými dotazy nad strukturovanými daty
	- Pro složité datové typy
<!--ID: 1779128799552-->
END

---

## Horizontální vs. vertikální škálování

<!--
Original Flashcard ID: 1728921214748
-->

START
NI-SZZ

Jaké jsou **2 typy škálování databází** a co znamenají?

Back:

- **horizontální** - koupim další node, který zařadím do sítě
- **vertikální** (nahoru) - koupím silnější hardware (nebo větší množství místa atd.)
<!--ID: 1779128799555-->
END

---

<!--
Original Flashcard ID: 1736497489067
-->

START
NI-SZZ

Co je **škálovatelnnost**?

Back:

Schopnost systému se vyrovnat s narůstajícím množstvím dat nebo požadavků.
<!--ID: 1779128799557-->
END

---

<!--
Original Flashcard ID: 1736497489075
-->

START
NI-SZZ

Co je **vertikální škálování**? Jaké má výhody a nevýhody?

Back:

- **Přidávání zdrojů** k jednomu uzlu v systému (CPU, RAM, disky,...)
- Výhoda: **Jednoduché na provedení**
- Nevýhody: **limitované škálování** (hardwarem), **dražší**, **single point of failure**

<!-- ExampleStart -->

Přidáme procesory, ramky.

<!-- ExampleEnd -->
<!--ID: 1779128799560-->
END

---

<!--
Original Flashcard ID: 1736497489080
-->

START
NI-SZZ

Jaké **problémy** jsou s **vertikálním škálováním**?

Back:

- Je to **dražší** - výdaje se zvyšují exponenciálně
- **Vendor lock** - je jen pár společností, co se tím zabývá (např Oracle)
- **Performance limits** - i silnější mašiny mají své limity
<!--ID: 1779128799563-->
END

---

<!--
Original Flashcard ID: 1736497489090
-->

START
NI-SZZ

Co je **horizontální škálování**? Jaké má výhody a nevýhody?

Back:

- **Přidávání uzlů (nodes)** v systému
- Výhoda: **levnější, neomezené škálování (teoreticky), flexibilní škálování**
- Nevýhoda: hodně navyšuje komplexitu systému (synchronizace uzlů, konzistence dat atd.)

CAP popisuje vlastnosti distribuovaných systémů při horizontálním škálování

<!-- ExampleStart -->

Musí se řešit datová konzistence, zotavování z chyb, distribuce dat atd. Všechno je to složitější.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241022095614.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799566-->
END

---

<!--
Original Flashcard ID: 1736497489104
-->

START
NI-SZZ

Co je **cluster**?

Back:

Množina **nodes**, založená na **shared-nothing** architektuře

<!-- ExplanationStart -->

**shared-nothing** = každý node má vlastní operační systém, vlastní hardware a komunikuje s ostatními nody pomocí zpráv

<!-- ExplanationEnd -->
<!--ID: 1779128799571-->
END

---

## Replikace a sharding

<!--
Original Flashcard ID: 1736497489109
-->

START
NI-SZZ

Jaké jsou dvě techniky distribuce dat?

Back:

- **sharding** - vezmu databázi a rozdělím ji na kousky do jednotlivých uzlů
- **replikace** - mám stejná data na jiných nodes

<!-- ExplanationStart -->

Výhodou je pak zvýšený výkon.

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

Ta replikace se udělá typicky třeba na 3 nodech

Často se dělá obojí

![](../../Assets/Pasted%20image%2020241011105820.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799580-->
END

---

<!--
Original Flashcard ID: 1736497489122
-->

START
NI-SZZ

Jaké jsou **shardovací strategie**?

Back:

- **mapping structures**
- **general rules**

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241022101216.png)

<!-- ExplanationEnd -->
<!--ID: 1779128799583-->
END

---

<!--
Original Flashcard ID: 1736497489127
-->

START
NI-SZZ

Proč je **obtížné shardování**?

Back:

- Pro read i write requesty musíme rozhodnout, ke které shardě se přistoupí
- Občas vypadne nějaký node
<!--ID: 1779128799585-->
END

---

<!--
Original Flashcard ID: 1736497489132
-->

START
NI-SZZ

Jaké jsou **dva přístupy replikace**?

Back:

- **Master-slave**
- **Peer-to-peer**
<!--ID: 1779128799588-->
END

---

<!--
Original Flashcard ID: 1736497489137
-->

START
NI-SZZ

Co je **replikační faktor**?

Back:

- Počet kopií u replikace.
- Typicky je nízký (třeba 3 nody)
<!--ID: 1779128799591-->
END

---

<!--
Original Flashcard ID: 1736497489142
-->

START
NI-SZZ

Co je **master slave architektura**?

Back:

- Máme 1 **master node**, tam lze zapisovat
- Máme **slave nodes**, z těch lze číst

Z mastera se to automaticky popíše do slaves

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241022101613.png)

<!-- ImageEnd -->
<!--ID: 1779128799594-->
END

---

<!--
Original Flashcard ID: 1736497489152
-->

START
NI-SZZ

Co je **peer-to-peer architektura**?

Back:

Máme několik uzlů, u všech lze zapisovat i číst.
<!--ID: 1779128799596-->
END

---

<!--
Original Flashcard ID: 1736497489163
-->

START
NI-SZZ

Dá se **kombinovat replikace a sharding**?

Back:

**Ano!**

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241022102302.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241022102647.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799599-->
END

---

<!--
Original Flashcard ID: 1737106145162
-->

START
NI-SZZ

Co je to **sharding**?

Back:

- rozdělím systém na různé části (uzly)
- každý uzel má na starost jinou část dat
- Cíl: **zvýšit množství dat**, **zvýšit performance**


Tags: reviewed
<!--ID: 1779128799602-->
END

---

START
NI-SZZ

Co je to **replikace**?

Back:

- stejná data na různých uzlech
- Cíl: **zvýšit performace**, **zvýšit toleranci vůči failu** (zamezit single point of failure)

<!--ID: 1779704516465-->
END

---

## Koncepce BASE vs. ACID

<!--
Original Flashcard ID: 1728921214770
-->

START
NI-SZZ

Co znamená, že je databáze v konzistentním stavu?

Back:

Že jsou dodržena všechna integritní omezení
<!--ID: 1779128799605-->
END

---

<!--
Original Flashcard ID: 1736497489198
-->

START
NI-SZZ

Co je **ACID**?

Back:

- **Atomicity** - Transakce se úspěšně provede celá nebo vůbec.
- **Consistency** - Před transakcí a po ní je databáze v konzistentním (validním) stavu
- **Isolation** (Independence) - Operace uvnitř transakce neovlivní ostatní transakce.
- **Durability** - Provedené změny jsou bezpečně (perzistentně) uloženy.


![](../../Assets/Pasted%20image%2020241022103618.png)
<!--ID: 1779128799607-->
END

---

<!--
Original Flashcard ID: 1736497489203
-->

START
NI-SZZ

Co je BASE?

Back:

- **Basically Available** - Systém jako celek je neustále dostupný.
- **Soft-state** - Systém není plně deterministický a je v toku (nestabilní), po zápisu mohou nějakou dobu číst starou hodnotu
- **Eventually consistent** - Systém bude za nějaký čas konzistentní (obvykle v řádu milisekund).


![](../../Assets/Pasted%20image%2020241022103636.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241022103752.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799610-->
END

---

<!--
Original Flashcard ID: 1736497489213
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je write consistency?

Back:

![](../../Assets/Pasted%20image%2020241022103926.png)
<!--ID: 1779128799613-->
END

---

<!--
Original Flashcard ID: 1736497489219
-->

<!-- quality: too-detailed -->

START
NI-SZZ

Co je read consistency?

Back:

![](../../Assets/Pasted%20image%2020241022103948.png)
<!--ID: 1779128799616-->
END

---

<!--
Original Flashcard ID: 1736497489224
-->

START
NI-SZZ

Co je **strong consistency**?

Back:

![](../../Assets/Pasted%20image%2020241022104006.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241022104335.png)

<!-- ExampleEnd -->
<!--ID: 1779128799618-->
END

---

<!--
Original Flashcard ID: 1737106145154
-->

START
NI-SZZ

Vysvětlete rozdíly mezi koncepcí **ACID a BASE**.

Back:

- **ACID**:
	- **Konzistence je důležitější než availability**
	- Pesimistický přístup
	- Typický pro **relačních databázích**
- **BASE**
	- **Availibility je důležitější než konzistence**
	- Optimistický přístup
	- Typický pro **NoSQL databáze**
	- Umožňuje **lepší škálovatelnost**, která není s ACIDem možná

Tags: reviewed
<!--ID: 1779128799621-->
END

---
