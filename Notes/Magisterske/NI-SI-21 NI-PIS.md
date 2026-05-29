---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-21 NI-PIS

> NI-SI-21 (NI-PIS)
> Práce se vstupními a výstupními daty v informačních systémech – konsolidace, normalizace, agregace. Manažerské informační systémy. Využití pokročilé analýzy dat v podnikové praxi, zpracování velkých dat.

## Práce se vstupními a výstupními daty v informačních systémech – konsolidace, normalizace, agregace

<!--
Original Flashcard ID: 1746599652303
-->

START
NI-SZZ


Jaké jsou 4 kategorie dat?

Back:

- **Metadata** - např. popisky atributů, datum, kdy byl záznam vytvořen
- **Referenční data** - číselníky (dvojice číslo - něco, např. kódy států, měn atd.), externí registry (živnostenský rejstřík)
- **Master data** - klíčový data, co podnik udržuje konzistentní napříč celou organizací (např. klienti, produkty)
- **Transakční data** (platby, půjčky, atd.)
<!--ID: 1780079216560-->
END

---

<!--
Original Flashcard ID: 1746599652311
-->

START
NI-SZZ


Jaké jsou části datového schématu?

Back:

- DB primárního systému
- **Data Staging Area** - tam se uloží data z více systémů, nad těmito daty se pak dělají transformace (upravují se), aby se pak data dostala do DWH
- **Data Warehouse** (Core) - zde už jsou vyčištěná data, tam jsou uložena dlouhodobě - tohle pak slouží jako monolit s tou pravdou
  - Zde jsou typicky daata normalizovaná
  - Zde je uchovaná i historie těch dat
- **Data Mart** - to jsou transformace těch dat (agregace), ty už se dělají pro konkrétní okruh uživatelů (např. jednotlivé departmenty organizace), nad tím data martem jsou pak různé vizualizace
  - Zde se typicky využívá mutlidimenzionální modelování
- **ODS - operační data store** - např. pro call centrum
  - Tam jsou data čerstvější než v data martu, stahují se tam pravidelněji, aby např. lidi v call centru měli aktuální data

Data se typicky 1x denně přenáší z Data Warehouse do Data Martu.
Typicky se 1x denně (v noci) přelévají data z DB primárního systému do Stage

<!--ID: 1780079216563-->
END

---

<!--
Original Flashcard ID: 1746599652319
-->

START
NI-SZZ


Jaký je vztah data lake a data staging area?

Back:

Data lake je historizovaná stage (jsou tam snímky napříč historií).

<!--ID: 1780079216566-->
END

---

<!--
Original Flashcard ID: 1748435998160
-->

START
NI-SZZ


Jak se liší ETL a ELT data integrace?

Back:

**ETL – Extract, Transform, Load**

- Extract (extrakce) – data se získají ze zdrojových systémů (např. databáze, API, CSV).
- Transform (transformace) – data se upraví (čistí, agregují, mění formát) ještě před nahráním.
- Load (nahrání) – transformovaná data se uloží do cílového systému (např. datový sklad).

Vhodné pro: tradiční datové sklady, kde je třeba mít plně připravená data.

**ELT – Extract, Load, Transform**

- Extract (extrakce) – data se získají ze zdrojů.
- Load (nahrání) – data se nejprve uloží do cílového systému v surové podobě.
- Transform (transformace) – transformace probíhá až v cílovém systému (např. pomocí SQL nebo nástrojů jako dbt).

Vhodné pro: moderní cloudové datové sklady (např. BigQuery, Snowflake), které zvládají velké objemy dat a výkonné transformace přímo ve skladu.

<!--ID: 1780079216568-->
END

---

<!--
Original Flashcard ID: 1746599651984
-->

START
NI-SZZ


Popiš následující obrázek
![](../../Assets/Pasted%20image%2020250306171016.png)

Back:

Vlevo jsou operační systémy
Vpravo je "svět analytiky/business intelligence"

<!--ID: 1780079216571-->
END

---

<!--
Original Flashcard ID: 1746599652006
-->

START
NI-SZZ


Kam se obecně pohybuje trend uchovávání dat?
![](../../Assets/Pasted%20image%2020250306171016.png)

Back:

Ten "datový svět" vpravo a "aplikační svět" vlevo se přibližují k sobě. Víc se míří k tomu, že bude jedno centrální místo na všechna data.

<!--ID: 1780079216574-->
END

---

<!--
Original Flashcard ID: 1748438655145
-->

START
NI-SZZ


Co jsou **structured, semistructured a nonstructured data**?

Back:

- **structured** - tabulky, předdefinovaná schémata, relační databáze,...
- **semistructured** - JSON, XML, grafy, NoSQL, grafové databáze
  - Schéma není vynuceno
- **nonstructured** - obrázky, audio, social media atd.
<!--ID: 1780079216577-->
END

---

<!--
Original Flashcard ID: 1746599651762
-->

START
NI-SZZ


Jaké jsou typy dat?

Back:

- Metadata
- Referenční data
- Enterprise Structure Data
- Transaction Structure Data
- Transaction Activity Data
- Transaction Audit Data - logy a audity
<!--ID: 1780079216579-->
END

---

<!--
Original Flashcard ID: 1746599651769
-->

START
NI-SZZ


Jaké jsou **3 vrstvy data managementu** (+3 v každé vrstvě)?

Back:

- **Business Layer**
  - Business Terminology (popis dat)
  - Analytics & Reporting
  - Machine Learning
- **Governance Layer**
  - Architecture & Principles
  - Data Quality
  - Metadata & Documentation
- **Technical Layer**
  - Data Applications
  - Administration & Lifecycle Management
  - Data Security

Key takeaway: Business se čím dál tím víc bude zapojovat do data managementu

![](../../Assets/Pasted%20image%2020250528163000.png)

<!--ID: 1780079216582-->
END

---

<!--
Original Flashcard ID: 1746599651776
-->

START
NI-SZZ


Jaké jsou různé úrovně data solutions?

Back:

1. **Sandbox** - data např. v excelu
2. **Stage** - data v jedné databázi na jednom místě
3. **Stage-Mart** - máme vrstvu nad Stagem, která např. předpřipravuje reporty
4. **Classic DWH** - klasický data warehouse (je tým lidí, co ho spravují)
   - Typicky jádro datového skladu se vytváří nezávisle na externích systémech, abych neměl různé formáty dat, když si třeba změním CRM nebo jiný systém
5. **Hybrid DWH** - část DWH je v cloudu
6. **Analytical & BI Platform** - nad DWH vzniká platforma pro datovou analýzu a reporting (dashboardy atd.)
7. **Universal Data Platform** - centrální hub pro všechna data (např. Databricks, Snowflake,...)
<!--ID: 1780079216585-->
END

---

<!--
Original Flashcard ID: 1746599651784
-->

START
NI-SZZ


Jaké jsou **3 typy datové platformy**?

Back:

Analogie s dopravou:

- **Data Warehousing** - spolehlivý, vše na jednom místě
- **Analytika a Data Lakes (data mesh)** - nižší úroveň kontroly, daleko větší flexibilita, umožňuje více experimentovat s datama - slouží pro Business Intelligence
- **Provozní zpracování dat** - klasický provozní účely, typicky propojování aplikací (integrace), dále taky např. statistické modely, co dělají predikce

(vůbec nechápu jak ten borec získal řidičák, jestli mu ta analogie s dopravou dává smysl)

<!--ID: 1780079216587-->
END

---

<!--
Original Flashcard ID: 1746599651800
-->

START
NI-SZZ


**Kdy je datová kvalita dostatečná**?

Back:

Když si nikdo nestěžuje :D

Aka když to lidi jsou schopný využít na to co potřebují.

<!--ID: 1780079216590-->
END

---

<!--
Original Flashcard ID: 1746599651807
-->

START
NI-SZZ


Co je **historizace dat**?

Back:

Dělají se "snímky" dat. Díky tomu můžu přistupovat k tomu, jak data vypadala v minulosti.

<!--ID: 1780079216593-->
END

---

<!--
Original Flashcard ID: 1746599651717
-->

START
NI-SZZ


Jaké jsou části magického kvadrantu data managementu? (4)

Back:

- **Availability** - zajistit, aby data byla přístupná tomu kdo to potřebuje
- **Flexibility** - možnost měnit datový model, přidávání nových zdrojů dat, nové reporty atd.
- **Resources** - míra investice do data managementu - čas, lidé, technologie
- **Control** - musím omezit, kdo může přistupovat k jakým datům
<!--ID: 1780079216595-->
END

---

<!--
Original Flashcard ID: 1748444828768
-->

START
NI-SZZ


Jaké jsou 3 typické části datového skladu?

Back:

- L0 **DWH Stage** - tam se nahrají data z jíných systémů
- L1 **DWH Core** - tam jsou uložena data v jednotném modelu
- L2 **Data Marts** - tam se vytahují data pro jednotlivé reporty

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250528164952.png)

<!-- ImageEnd -->
<!--ID: 1780079216598-->
END

---

<!--
Original Flashcard ID: 1746599651724
-->

START
NI-SZZ


Jaké jsou **4 dimenze data landscape mappingu**?

Back:

1. **Pojmenovat data**
2. **Namapovat data na fyzická datová uložiště**
3. **Propojení dat s obchodními procesy**
4. **Propojit data na organizační strukturu**

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250528165043.png)

<!-- ImageEnd -->
<!--ID: 1780079216601-->
END

---

<!--
Original Flashcard ID: 1746599651734
-->

START
NI-SZZ


Co je **data lineage**?

Back:

Cesta dat od vzniku až po jejich použití. Typicky jsou v tom různé datové transformace.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250528165155.png)
![](../../Assets/Pasted%20image%2020250528165159.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216603-->
END

---

<!--
Original Flashcard ID: 1746599651741
-->

START
NI-SZZ


Jaká je hierarchie modelů? (4)

Back:

1. **Business model** - Součástí toho **KPIs**
2. **Konceptuální model** - základní prvky, obecný popis
3. **Logický datový model** - zachycuje datové prvky dle zvolené technologie
   - Typicky se člověk snaží identifikovat entity (v bankách typicky kontrakty a osoby - dodavatelé, bankéři,...)
4. **Fyzický datový model** - návrh konkrétních tabulek v databázi atd.
<!--ID: 1780079216606-->
END

---

<!--
Original Flashcard ID: 1746599651750
-->

START
NI-SZZ


Co ja **Master Data Management**?

Back:

**Source of truth pro data, která se používají napříč systémy**

Např. data o zákazníkovi jsou rozházená v různých systémech a může být těžký je pospojovat dohromady (např. čistě podle jména to je často nepřesný).

Proto se dělá to, že se udělá "golden record" - vytváří se jeden ucelený záznam např. v separátní databázi nebo v datových skladech

Tohle je obecně téma toho master data managementu

<!--ID: 1780079216609-->
END

---

<!--
Original Flashcard ID: 1748444828771
-->

START
NI-SZZ


Jaké jsou **typy datových schémat**? (4)

Back:

- **Star schema** - jedna centrální tabulka obklopena přímými dimenzemi, dimenze jsou denormalizované
- **Snowflake schema** - dimenzní tabulky jsou normalizované - méně redundance, ale složitější joiny
- **Constellation schema** - více faktových tabulek co sdílí dimenze
- **Snowstorm schema** - extrémně rozvětvená snowflake struktura
<!--ID: 1780079216612-->
END

---

<!--
Original Flashcard ID: 1748444828774
-->

START
NI-SZZ


Co je **Metadata Driven Data Automation**?

Back:

Definuju struktury tabulek a datových uložišť v **metadatech**. Podle nich se pak automaticky vygenerují jednotlivé kroky pro provedení transformací atd.

Podobně jak třeba člověk používá Terraform pro infrastructure as code, tak tady člověk definuje ty data v nějakém meta jazyce a podle toho se pak generují ty konkrétní kroky.

<!--ID: 1780079216614-->
END

---

<!--
Original Flashcard ID: 1746599651518
-->

START
NI-SZZ


Jaké jsou **funkční business požadavky** na datové sklady?

Back:

- **ukládání dat**
- **reporting**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250424162241.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216617-->
END

---

<!--
Original Flashcard ID: 1746599651524
-->

START
NI-SZZ


Jaké jsou **nefunkční požadavky datových skladů**? (6)

asi stačí obecně tušit

Back:

- **Datová kvalita** (přesnost výsledků)
- **Rychlost zpracovávání**
- **Uživatelská přívětivost** (reporting)
- **Rychlé dodání změn**
- **Udržitelnost rozvoje v dlouhém časovém horizontu**
- **Nízká cena**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250424162303.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216620-->
END

---

<!--
Original Flashcard ID: 1746599651536
-->

START
NI-SZZ


Jaké jsou typy datové kvality? (2)

Back:

- technická - že to bude v určitém formátu, že to bude mít určité vlastnosti
- byznysová - např. když mají data určité hodnoty, které nejsou dobré pro byznys
<!--ID: 1780079216622-->
END

---

<!--
Original Flashcard ID: 1746599651581
-->

START
NI-SZZ


Na co se dělí **Stage** v Data Stage?

Back:

- **Landing** - neřeší se tam datové typy
- **Stage** - tam se už řeší datové typy
<!--ID: 1780079216625-->
END

---

<!--
Original Flashcard ID: 1746599651608
-->

START
NI-SZZ


Je cílem do datového skladu nacpat všechna data firmy?

Back:

Nope, typicky pouze ta data, co jsou kritická pro byznys a pro reporting. Typicky bude hodně data ještě rozházených kolem.

<!--ID: 1780079216628-->
END

---

<!--
Original Flashcard ID: 1746599651640
-->

START
NI-SZZ


Jaký je rozdíl mezi **faktem** a **dimenzí**?

Back:

- **Fakty** - nějaké měřitelné číslo, nějaká _hodnota_ (dá se to počítat, agregovat)
- **Dimenze** - nad fakty jsou pak dimenze. Ty se typicky nedají dobře agregovat, např. adresa

![](../../Assets/Pasted%20image%2020250424170314.png)

<!--ID: 1780079216631-->
END

---

<!--
Original Flashcard ID: 1746599651670
-->

START
NI-SZZ


Jaké jsou **typy faktů**?

Back:

- **aditivní** - počet, cena ve faktových tabulkách
- **semiaditivní** - počet, cena ve snapshot tabulkách
- **nonaditive** - procentuální profit například
<!--ID: 1780079216633-->
END

---

<!--
Original Flashcard ID: 1746599651680
-->

START
NI-SZZ


Jaké jsou **2 způsoby historizace dat**?

Back:

- **Snapshoting** - udělám celou kopii těch dat např 1x za den (nedává moc smysl u dat, které se často nemění)
- **Slowly changing dimenze** - uložím jednou, když vznikne změna, tak si uložím data
<!--ID: 1780079216636-->
END

---

<!--
Original Flashcard ID: 1746599651688
-->

START
NI-SZZ


Jaké jsou typy slowly changing dimensions? (4)

Back:

- Typ 0 - ignorování změn
- Typ 1 - přepis hodnot bez historie
- Typ 2 - přidávání řádků tabulky, vždy je jeden platný - uděláme komplet nový záznam pro změnu
- Typ 3 - přidávání sloupců s historickými hodnotami (větší granularita změn) - změníme jakoby jen tu jednu hodnotu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250424171444.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216639-->
END

---

<!--
Original Flashcard ID: 1746599651699
-->

START
NI-SZZ


Jak vypadá záznam v **slowly changing dimension** (SCD2)?

Back:

Když změním přijde změna, zapíšu do záznamu "end date", abych tím označil, do kdy je záznam platný a vytvořím nový se start datem

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250424171616.png)
![](../../Assets/Pasted%20image%2020250424171626.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216645-->
END

---

<!--
Original Flashcard ID: 1748446966911
-->

START
NI-SZZ


Co je **decommissioning dat**?

Back:

**Decommissioning = “uklizení starých dat”** – odstraním je, přesunu, anonymizuji nebo archivuju, aby nezatěžovala systém, nebyla rizikem nebo neporušovala předpisy (např. GDPR).

<!--ID: 1780079216650-->
END

---

<!--
Original Flashcard ID: 1748446966924
-->

START
NI-SZZ


Jaké jsou důvody pro **decommissioning dat**? (6)

(tohle bylo ve zkoušce)

Back:

- **Zastaralé technologie** - výkonnost, bezpečnost, problém s upgrady, ukončení podpory
- **Nedostupnost vývojářů** - Cobol, Fortran,...
- **Licenční politika** - Oracle Java, Atlasian Confluence, Google Gmail,...
- **Nevhodná architektura** - monolit vs microservices
- **Time To Market** - neschopnost reagovat rychle na změny trhu
- **Merge and Acquisition** - spojování společností a produktů
<!--ID: 1780079216652-->
END

---

<!--
Original Flashcard ID: 1748446966927
-->

START
NI-SZZ


Co se z hlediska byznysu řeší u **decomissiningu**?

Back:

- **ROI** - return on investment
- **Rizika** - ztráta revenue nebo reputace
<!--ID: 1780079216655-->
END

---

<!--
Original Flashcard ID: 1748446966929
-->

START
NI-SZZ


Jaké jsou fáze **datové migrace**? (4)

Back:

1. **Analýza a datová kvalita**
2. **Vývoj scriptů**
3. **Rekonciliace**
4. **Cutover**
<!--ID: 1780079216657-->
END

---

<!--
Original Flashcard ID: 1748446966932
-->

START
NI-SZZ


Jak probíhá **Analýza a datová kvalita** u datové migrace? (4)

Back:

- **Profiling** - kontroluje se konzistence dat (např. formát emailů, čísel atd.)
- **Business slovník** - prozkoumává se doména, aby se předešlo nedorozuměním
- **Hesla** - je třeba vyřešit způsoby hashování atd.
- **Analýza cílů** - na jakou verzi aplikace/knihoven se chceme dostat
<!--ID: 1780079216660-->
END

---

<!--
Original Flashcard ID: 1748446966935
-->

START
NI-SZZ


Jak probíhá **Vývoj scriptů** u datové migrace? (7)

Back:

- **SQL scripty** + anonymizace business critical dat
- **Tracebility** - reportování které transformace již proběhly
- **Atomicity** - když migruji data zákazníka, tak zmigruji buď celého nebo vůbec
- **Repeatability** - musím umět migraci spustit znovu, když se něco změní
- **Optimalizace** - při milionech záznamů je třeba skripty paralelizovat atd.

- **Change management** - požadavky se mohou v průběhu měnit
- **Testování** - je třeba testovat, jestli se data zmigrovala správně
<!--ID: 1780079216663-->
END

---

<!--
Original Flashcard ID: 1748446966938
-->

START
NI-SZZ


Co je **Migration Stage Area**?

Back:

Je to místo, kam se nahrají data a kde se provádějí transformace při migraci dat z nějakého systému do jiného.

<!--ID: 1780079216665-->
END

---

<!--
Original Flashcard ID: 1748446966941
-->

START
NI-SZZ


Jaké jsou časté chyby při vytváření skriptů pro migraci dat? (3)

Back:

- **Oslabení referenční integrity** - měl bych zachovat vztahy mezi daty
- **Vypínání triggerů** - měl bych zachovat v systému triggery
- **Špatné IDs** - různé systémy na to mají různé metody, musím to nějak sjednotit
<!--ID: 1780079216668-->
END

---

<!--
Original Flashcard ID: 1748446966944
-->

START
NI-SZZ


Jak probíhá **Rekonciliace** u datové migrace? Z čeho se skládá? (2)

Back:

Ověření zda byla data přenešena správně.

- **kvantitativní ověření** - že jsme nic neztratili a že jsme si nic nevymysleli
- **kvalitativní ověření** - že jsme nezměnili sémantiku dat
<!--ID: 1780079216670-->
END

---

<!--
Original Flashcard ID: 1748446966947
-->

START
NI-SZZ


Co je **Cutover** u datové migrace?

Back:

**Cutover** = období, kdy se organizace přepne z původního systému na nový.

<!--ID: 1780079216674-->
END

---

<!--
Original Flashcard ID: 1748446966950
-->

START
NI-SZZ


Jak probíhá **Cutover** u datové migrace? (2 možnosti)

Back:

- **BigBang** - vše se přepne najednou - rychlé ale riskantní
- **Iterativní** - vše se přepne po iteracích - velká komplexita ale jistější
<!--ID: 1780079216676-->
END

---

<!--
Original Flashcard ID: 1748446966953
-->

START
NI-SZZ


Co je **point of no return** u datové migrace?

Back:

Některé systémy nejde rollbacknout, je potřeba zůstat na nové verzi po migraci.

<!--ID: 1780079216679-->
END

---

## Manažerské informační systémy

<!--
Original Flashcard ID: 1746599652233
-->

START
NI-SZZ


Co je **MIS**?

Back:

**Management Information Systems**
![](../../Assets/Pasted%20image%2020250220170527.png)

<!-- DetailInfoStart -->

Je to na střední úrovni v organizaci
![](../../Assets/Pasted%20image%2020250220170628.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216682-->
END

---

<!--
Original Flashcard ID: 1746599652240
-->

START
NI-SZZ


Co je **DSS**?

Back:

**Decision-Support Systems**
![](../../Assets/Pasted%20image%2020250220170556.png)

<!-- DetailInfoStart -->

Je to na střední úrovni v organizaci
![](../../Assets/Pasted%20image%2020250220170628.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216685-->
END

---

<!--
Original Flashcard ID: 1746599652250
-->

START
NI-SZZ


Co je **ESS**?

Back:

**Executive Support Systems**
![](../../Assets/Pasted%20image%2020250220170814.png)

<!-- DetailInfoStart -->

Je to na nejvyšší úrovni v organizaci
![](../../Assets/Pasted%20image%2020250220170628.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216687-->
END

---

<!--
Original Flashcard ID: 1746599652257
-->

START
NI-SZZ


Jaký je vztah TPS, MIS, DSS a EIS?

Back:

![](../../Assets/Pasted%20image%2020250528140406.png)
![](../../Assets/Pasted%20image%2020250220170857.png)

<!--ID: 1780079216690-->
END

---

<!--
Original Flashcard ID: 1748444828752
-->

START
NI-SZZ


Co jsou BI systémy?

Back:

**Business intelligence** = umožňují dělat rozhodnutí ve firmě

<!--ID: 1780079216693-->
END

---

<!--
Original Flashcard ID: 1748444828766
-->

START
NI-SZZ


Jaké jsou 3 typy rozhodování v business intelligence systémech?

Back:

- **Operativní** = na denní bázi, nižší management - např. sledování pohledávek
- **Taktické** = na měsíční/čtvrtletní bázi, střední management - např. sledování plánu kampaní
- **Strategické** = na roční a delší bázi, top management, board
<!--ID: 1780079216696-->
END

---

## Využití pokročilé analýzy dat v podnikové praxi, zpracování velkých dat

<!--
Original Flashcard ID: 1748437050696
-->

START
NI-SZZ


Co je **data science**?

Back:

Je to disciplína napříč mnoha obory:
Sběr, analýza, vizualizace, monitoring, automatizace dat.

Pozor, není to business intelligence, ta prý nedělá predikce

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250528144236.png)
![](../../Assets/Pasted%20image%2020250528144258.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216698-->
END

---

<!--
Original Flashcard ID: 1748437050702
-->

START
NI-SZZ


Co je metodika CRISP-DM?

Back:

Iterativní metodika pro data science.

<!--ID: 1780079216701-->
END

---

<!--
Original Flashcard ID: 1748437050705
-->

START
NI-SZZ


Jaké jsou hlavní 3 části data science?

Back:

- **Lidé**
- **Znalosti**
- **Technika**
<!--ID: 1780079216704-->
END

---

<!--
Original Flashcard ID: 1748437050707
-->

START
NI-SZZ


Jaké jsou fáze CRISP-DM?

Back:

1. **Business Understanding** - zjišťuje se, co zákazník potřebuje, jaká má data, jak se pozná úspěch
2. **Data understanding** - úvodní analýza dat, zjištění kvality dat, první hypotézy
3. **Data preparation** - konstrukce a transformace datových sad pro modelování
4. **Modeling** - aplikace modelovacích technik
5. **Evaluation** - vyhodnocení úspěšnosti modelu
6. **Deployment** - produkční nasazení modelu v datovém workflow zákazníka + vyřešení administrace, údržby, zaškolení atd.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250528144612.png)

<!-- ImageEnd -->
<!--ID: 1780079216707-->
END

---

<!--
Original Flashcard ID: 1748437050710
-->

START
NI-SZZ


Co dělá **data scientist**? (4)

Back:

- Má **orientaci v doméně**
- Komunikuje s **byznys experty** (dává jim poznatky)
- Komunikuje s **technickými experty** (dává jim zadání)
- **Prezentuje a vizualizuje data**
<!--ID: 1780079216710-->
END

---

<!--
Original Flashcard ID: 1748437050713
-->

START
NI-SZZ


Jaké jsou hlavní součásti **znalostí** v data science?

imo stačí obecně tušit

Back:

- **Základní otázky** - jestli odpovídají očekávání hypotézám
- **Kontrola dat** - popisují správně realitu?
- **Vizualizace dat**
- **Transformace** - měla by se data upravit?
<!--ID: 1780079216712-->
END

---

<!--
Original Flashcard ID: 1748437050716
-->

START
NI-SZZ


Jaké jsou například úlohy v data science? (6)

asi stačí tušit pár

Back:

- **klasifikace** - je to případ A nebo B
- **predikce** - jaká je pravděpodobnost že se něco stane
- **odhady** - kolik bude něčeho v budoucnu
- **segmentace** - jaké jsou typické skupiny (např. zákazníků)
- **detekce** - je něco normální případ nebo anomálie
- **podobnost** - které případy se sobě podobají
<!--ID: 1780079216715-->
END

---

<!--
Original Flashcard ID: 1748437050719
-->

START
NI-SZZ


Jaké **technologie** se typicky používají v data science? (6)

asi stačí tušit pár

Back:

- **MLops** - data pipeline, monitoring, tracking, testy atd.
- **SQL** (databáze)
- **Python** (dříve R)
- **Git**
- **Linux**
- **Azure** (cloud)
<!--ID: 1780079216718-->
END

---

<!--
Original Flashcard ID: 1748437050721
-->

START
NI-SZZ


Jaké jsou aktuální problémy data science? (3)

asi stačí tušit, v přednášce to bylo jako "bonus"

Back:

- **využívání osobních dat**
- **přesnost modelů**
- **nadbytek dat**
<!--ID: 1780079216720-->
END

---

<!--
Original Flashcard ID: 1748438655130
-->

START
NI-SZZ


Co jsou **big data**?

Back:

**Velké množství** (**rychle měnících** se) **potenciálně hodnotných** dat, která se nedají dobře managovat tradičními způsoby.

<!--ID: 1780079216723-->
END

---

<!--
Original Flashcard ID: 1748438655142
-->

START
NI-SZZ


Co jsou **3Vs** v big data?

Back:

- **volume** - obrovské množství
- **velocity** - rychle přibývají
- **variety** - různé formáty
- (existují další Vs)
<!--ID: 1780079216726-->
END

---

<!--
Original Flashcard ID: 1746599651249
-->

START
NI-SZZ


Jaké jsou 3 hlavní tools pro Big data?

Back:

- Hadoop
- Spark
- Kafka
<!--ID: 1780079216728-->
END

---

<!--
Original Flashcard ID: 1748438655151
-->

START
NI-SZZ


Jaké jsou **2 typy data processingu**?

- co to je
- co se sleduje za metriku
- co je efektivnější
- co se používá za tool

Back:

- **Batch processing**
  - zpracuju **hodně dat najednou** např. jednou za den
  - sleduje se **throughput** - kolik zpracovaných records za čas
  - efektivnější zpracovávání
  - např. Hadoop, Spark
- **Stream processing** - data se zpracovávají **průběžně** (téměř real-time) - sleduje se **latency** - čas od začátku po konec processingu - méně efektivní zpracovávání (protože to musí být real-time) - např. Kafka, Spark
<!--ID: 1780079216731-->
END

---

<!--
Original Flashcard ID: 1746599651256
-->

START
NI-SZZ


Co je **Hadoop**?

Back:

Open source platforma pro distribuované zpracovávání velkého množství dat.

<!--ID: 1780079216734-->
END

---

<!--
Original Flashcard ID: 1746599651290
-->

START
NI-SZZ


Jaké části má **Hadoop**? (4)

Back:

- **Hadoop Common** - obsahuje hadoop knihovny
- **Hadoop Distributed File System** (HDFS) - distribuovaný file system na více zařízeních
- **Hadoop YARN** - spravuje resources v clusterech a scheduling uživatelských úloh
- **Hadoop MapReduce** - implementace MapReduce modelu pro zpracování velkých dat
<!--ID: 1780079216737-->
END

---

<!--
Original Flashcard ID: 1746599651309
-->

START
NI-SZZ


Jaké jsou části **HDFS**? (2)

Back:

- **NameNode** - "mozek systému", obsahuje metadata o tom, kde je co uloženo
- **DataNode** - jsou tam uloženy datové bloky
  - jsou typicky replikovány
  - mají dobrou škálovatelnost

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250320164622.png)

<!-- ImageEnd -->
<!--ID: 1780079216740-->
END

---

<!--
Original Flashcard ID: 1746599651326
-->

START
NI-SZZ


Jaké jsou hlavní vlastnosti **Hadoopu**? (3)

Back:

- **Replication factor** - na kolik různých data nodů se data uloží
  - Díky tomu je fault tolerant
- **Scalable** - dobře se škáluje
- **Large files** - obsahuje obří data
<!--ID: 1780079216742-->
END

---

<!--
Original Flashcard ID: 1746599651340
-->

START
NI-SZZ


Jak funguje **Hadoop MapReduce**? (5 fází)

Back:

1. **Splitting** - Rozseká se vstup na více menších chunků
2. **Mapping** - data se transformují na mapu (key value pairs)
3. **Shuffling** - Data se sesortí a groupnou podle klíče
4. **Reducing** - Reducer zprocesuje každou část key-value párů
5. **Final result** - Data se opět spojí do jednoho výsledku

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250320165222.png)

<!-- ImageEnd -->
<!--ID: 1780079216745-->
END

---

<!--
Original Flashcard ID: 1746599651353
-->

START
NI-SZZ


Jak funguje **Hadoop YARN**?

Back:

Komponenta v Hadoopu, co spravuje systémové prostředky a umožňuje spouštět výpočetní úlohy v clusteru

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250320165433.png)

<!-- ImageEnd -->
<!--ID: 1780079216748-->
END

---

<!--
Original Flashcard ID: 1746599651268
-->

START
NI-SZZ


Co je Apache **Spark**?

Back:

Je to **in-memory** výpočetní rámec pro distribuované zpracovávání dat.

- Je rychlejší než **MapReduce** (díky in-memory méně I/O operací)
- Lze použít pro batch processing i streaming
- Často používaný pro **machine learning** nebo **grafové výpočty**
- Dá se spustit v Hadoopu
<!--ID: 1780079216750-->
END

---

<!--
Original Flashcard ID: 1746599651280
-->

START
NI-SZZ


Co je Apache **Kafka**?

Back:

Distribuovaná platforma pro zpracovávání data streamů v reálném čase.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250528152441.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216753-->
END

---

<!--
Original Flashcard ID: 1746599651366
-->

START
NI-SZZ


Jaký engine se pro big data používá nejvíce?

Back:

Apache **Spark**

<!--ID: 1780079216757-->
END

---

<!--
Original Flashcard ID: 1746599651409
-->

START
NI-SZZ


Jak funguje **Kafka high level architecture**?

Back:

- **Producer** - aplikace co generuje zprávy (označené nějakým topicem)
- **Kafka cluster** - Obsahuje "brokers" (servery), každý broker spravuje data a ukládá je do **topiců**
- **Consumer** - aplikace co čte zprávy z topiců

Topic je jakoby fronta zpráv. Kafka zprávy nemaže po přečtení, ale třeba po 7 dnech.

![](../../Assets/Pasted%20image%2020250320170453.png)

<!--ID: 1780079216760-->
END

---

<!--
Original Flashcard ID: 1746599651427
-->

START
NI-SZZ


Jaké jsou **4 role v bigdata**?

Back:

- **DevOps engineer** - automatizuje data workflows a pipelines atd.
- **Data Analyst** - dělá reporting a analýzy pro byznys
- **Data engineer** - spravuje processing a workflow dat
- **Data Scientist** - dělá statistiky, data mining, predikce, atd.
<!--ID: 1780079216762-->
END

---

<!--
Original Flashcard ID: 1746599651490
-->

START
NI-SZZ


Co jsou **Databricks**?

Back:

- **Cloudová platforma pro analýzu a zpracovávání dat** (integrace s AWS, GCP, Azure)
- je to **Lakehouse** = data lake + data warehouse
- Je to "all in one" - big data zpracovávání, datové inženýrství, machine learning, business intelligence v jednom prostředí

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250528153525.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216765-->
END

---

<!--
Original Flashcard ID: 1746599651499
-->

START
NI-SZZ


Co jsou **Snowflakes**?

Back:

- **Cloudový datový sklad**
- Slouží k **rychlému dotazování** nad velkými objemy dat
- Více zaměřený na business intelligence, reporting a datovou analýzu
- je to drahý jak debil

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250320171852.png)

<!-- DetailInfoEnd -->
<!--ID: 1780079216768-->
END

---