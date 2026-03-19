---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-10 NI-AM1

> NI-SI-10 (NI-AM1)
> Integrační návrhové vzory, synchronní a asynchronní komunikace, blocking a non-blocking I/O.

## Integrační návrhové vzory

<!--
Original Flashcard ID: 1728921214998
-->

START
NI-SZZ

Co je **integrační middleware**?

Back:

Řeší integraci více systémů. Propojuje mi to jednotlivé aplikace.

END

---

<!--
Original Flashcard ID: 1728921215011
-->

START
NI-SZZ

Jaké **programovací jazyky** a **formáty dat** se používají pro integrační middleware v organizacích?

Back:

- **Java** a **XML** je nejpoužívanější ve **velkých organizacích**, je to už trošičku přežitek
- U nových systémů se používá **JSON** a **modernější programovací jazyky**

END

---

<!--
Original Flashcard ID: 1728921215017
-->

START
NI-SZZ

Jak se řeší **syntax** a **sémantika** v XML a JSONech?

Back:

- **Syntax** - to jak se obecně píše XML a JSON
- **Sémantika** - jak konkrétně vypadá struktura XML/JSONu pro daný problém

**Syntax** mi jasně definuje ten standard, **sémantiku** si musím zadefinovat sám např. pomocí **RDFS** nebo **JSONSchema**.

END

---

<!--
Original Flashcard ID: 1728921215022
-->

START
NI-SZZ

Co je jazyk **RDFS**?

Back:

**RDFS** (Resource Description Framework Schema):

Standard (jazyk), který je nadstavbou **RDF** a umožňuje mi jasně definovat **sémantiku** XML a JSONu.

END

---

<!--
Original Flashcard ID: 1728921215028
-->

START
NI-SZZ

Co je **interface** v integracích? Co **obsahuje**? (4)

Back:

Každý interface má:

- **data** - tohle mi definuje payload (syntax, sémantiku)
- **funkce** - operace, co můžu volat (např REST endpoint)
- **proces** - určuje stavy a přechody (jakým způsobem můžu s funkcemi pracovat)
- **technický detaily** (např. endpoint, ip adresa, atd.)

![](../../Assets/Pasted%20image%2020240930104053.png)

END

---

<!--
Original Flashcard ID: 1728921215031
-->

START
NI-SZZ

Jak přesně funguje **proces** v **interfacech**? Co se používá pro jeho **modelování**?

Back:

Popisuje mi, **jak** mám používat jednotlivé funkce (např. **v jakém pořadí** - viz vysvětlení).

Na modelování procesů se používá **stavový diagram**.

<!-- ExplanationStart -->

Např.
Mám košík v obchodě:

- `open` - vyberu si košík
- `addLineItem` - přidám věc do košíku
- `close` - uzavřu košík, už tam nebudu nic dávat
- `checkout` - koupím věci v košíku

Jednotlivé operace jsou **funkce**. Proces je **POŘADÍ těch funkcí** (např. udělám jednu operaci, pak furt opakuju druhou, pak přejdu na další atd.).

Když chci potom používat tu funkci, tak to budu dělat podle toho procesu (diagramu).

Problém je, že **není moc vynucovacích prostředků** na ten **proces**. Např. ve **Swaggeru** nemůžu nijak popsat ten proces.

Je to podobný jako u **sémantiky u JSONu a XML**. Tam mě taky nic nenutí modelovat ten soubor určitým způsobem, ale někde bych to měl mít zapsaný, abych to modeloval podle toho.

<!-- ExplanationEnd -->

END

---

<!--
Original Flashcard ID: 1728921215039
-->

START
NI-SZZ

Co je **interface**?

Back:

Lze ho chápat jako **dohodu** (agreement, contract) mezi dvěma systémama.

Domluví se na tom, jak bude ta komunikace fungovat.
![](../../Assets/Pasted%20image%2020240930103653.png)
![](../../Assets/Pasted%20image%2020240930103616.png)

Pokud tu "smlouvu" chci změnit, musím to verzovat. Nemůžu to jen tak měnit pod rukama toho druhého systému.

Např.
![](../../Assets/Pasted%20image%2020240930104117.png)

END

---

<!--
Original Flashcard ID: 1728921215042
-->

START
NI-SZZ

Jak může být **dosaženo contractu/interfacu**? (3)

Back:

- **Standardy** - např. REST, XML...
- **Social agreement** - např. v týmu se rozhodnu, že to nějak budu dělat
- **Dominantní techologie** - např. když oracle dominuje market, tak se to typicky bude dělat podle nich

Co nejvíce bych se měl opírat o globální **standardy**. Neměl bych si vymýšlet něco svýho.

END

---

<!--
Original Flashcard ID: 1729237386420
-->

START
NI-SZZ


Jaké jsou **zaměření middlewarů**? (3)

Back:

- **škálovatelnost** - messaging servers, load balancers, proxy serves
- **functional** - integrace (propojování) severů a částí aplikace, repozitáře,...
- **security** - firewally, gateways,...

END

---

<!--
Original Flashcard ID: 1728921214954
-->

START
NI-SZZ


Jaké jsou 3 typy integrací?

Back:

- **Data-oriented integration**
- **Service-oriented integration (1:1)**
- **Service-oriented integration (M:N)**

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014172119.png)

<!-- ImageEnd -->

END

---

<!--
Original Flashcard ID: 1728921214956
-->

START
NI-SZZ


Co je **data-oriented integrace**?

Back:

Integrace, kde jedna aplikace přistupuje **přímo do databáze** druhé aplikace.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014173914.png)

<!-- ImageEnd -->

<!-- ExplanationStart -->

Struktura moderní aplikace $A$ vypadá cca takto:

- **Backend API**
  - Byznys logika
  - Moje pravidla
  - ORM vrstva
- **Databázová vrstva**
  - Databáze

**Prolém** nastane, když aplikace $B$, co má stejnou strukturu potřebuje přímo přistupovat do databáze aplikace $A$ (tzn. nemůže použít APIčko - to se může někdy stát). Tím by obcházela ty pravidla.

Kdy takový stav může například nastat:

- Když potřebuju nahrát **obří množství dat** (a není rozumný to dělat přes API, protože to je třeba pomalé nebo )
- Když **není naimplementované API** pro přístup k dané tabulce

![](../../Assets/Pasted%20image%2020241014172809.png)

![](../../Assets/Pasted%20image%2020241014173734.png)

<!-- ExplanationEnd -->

END

---

<!--
Original Flashcard ID: 1728921214959
-->

START
NI-SZZ


Co je **service-oriented integrace**?

Back:

Integrace dvou aplikací, kde mám **integrační middleware**.

Aplikace $A$ zavolá middleware, ten pak zavolá aplikaci $B$ a naopak.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014174120.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241014174154.png)

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1728921214962
-->

START
NI-SZZ


Co je **real-time (web services)** integrace?

Back:

**Service-oriented** integrace, která se používá pro **malá** data a v reálném čase.

<!-- InformallySaidStart -->

Tzn. synchronizuje např. dvě aplikace pomocí jejich APIs.

<!-- InformallySaidEnd -->

END

---

<!--
Original Flashcard ID: 1728921214964
-->

START
NI-SZZ


Co je **Bulk data (ETL)** integrace?

Back:

**Data-oriented** integrace, která používá **ETL** technologii pro integraci **velkého množství dat** (tzv. bulk data).

<!-- InformallySaidStart -->

Tzn. synchronizuje dvě aplikace na úrovni datové vrstvy (tzn. jejich databáze).

<!-- InformallySaidEnd -->

<!-- ExplanationStart -->

Tato synchronizace přenáší **bulk data**, tzn velké množství dat, které nedává smysl přenášet přes klasická API (ta jsou dělaná pro malé množství dat).

<!-- ExplanationEnd -->

END

---

<!--
Original Flashcard ID: 1729236693071
-->

START
NI-SZZ


Poskytuje SOA **web services** nebo **ETL** integraci?

Back:

**Obojí**

END

---

<!--
Original Flashcard ID: 1728921214967
-->

START
NI-SZZ


Co je **integrační proces** a jakou klíčovou vlastnost má?

Back:

Proces, kdy se nějaká informace propíše pomocí integračního middlewaru do více systémů.

**Klíčová vlastnost**: musí to fungovat jako transakce v databází. Buď se propíše do všech systémů nebo vůbec.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014180037.png)

<!-- ImageEnd -->

END

---

<!--
Original Flashcard ID: 1729236693079
-->

START
NI-SZZ


Co je **rekonsiliační proces**?

Back:

Proces, co zkontroluje, jeslti jsou všechny systémy správně synchronizované.

Tento proces se spouští například jednou za den.

END

---

<!--
Original Flashcard ID: 1729236693087
-->

START
NI-SZZ


Co je **Enterprise Service Bus**?

Back:

Aplikace, která běží na aplikačním serveru. Pomocí integračních vzorů v ní můžu vytvářet integrační procesy.

END

---

<!--
Original Flashcard ID: 1729236693096
-->

START
NI-SZZ


Jaké jsou **integrační vzory** a co znamenají? (4)

Back:

- **Technical-level interoperability - message broker** - middleware, který od jedné služby dostává data např. REST a posílá jiné službě v jiném formátu např. binárně
- **Session pooling** - pool je množina připojení do databáze. Middleware tenhle pool využívá. Když nepoužívá přístup, zase ho odevzdá session poolu. Je to rychlejší než kdybych to dělal bez toho.
- **Data transformation** - middleware přeloží data z jedné struktury do druhé. Např. mezi dvěma aplikacema, které používají XML.
- **Key mapping** - middleware, který má překladovou tabulku a mapuje identifikátory (např. id uživatelů) v jednom systému do druhého systému

<!-- DetailInfoStart -->

Další vzory:
![](../../Assets/Pasted%20image%2020241014180425.png)

<!-- DetailInfoEnd -->

END

---

## Synchronní a asynchronní komunikace

<!--
Original Flashcard ID: 1729236693105
-->

START
NI-SZZ


Co je **synchronní a asynchronní** integrace?

Back:

- **Synchronní**
  - Vytvoří se jeden TCP socket, pošle se request a response.
  - Doba odezvy je velice **malá**
  - Např. client-server
- **Asynchronní**
  - Pro request se použije jeden socket
  - Pro response se použije druhý socket
  - Doba může být větší (hodiny, dny)
  - Tohle nemůžu dělat na client-serveru, protože by client musel taky otevřít server a poslouchat, jestli nepřišel response na nějaký jeho endpoint. Slouží to pro server-server komunikaci
    - Asynchronní integrace se takto přímo nedělá, dělá se to jinými způsoby (viz další kartičky)

![](../../Assets/Pasted%20image%2020250111182953.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014182713.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241014182721.png)

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1729236693124
-->

START
NI-SZZ


Jak funguje **asynchronní komunikace přes prostředníka**?

Back:

Máme prostředníka, co má u sebe dvě fronty (request queue a response queue).

1. Klient pošle do request queue zprávu
2. Server si vyzvedne request z queue
3. Server zpracuje požadavek
4. Server uloží response do response queue
5. Klient si z response queue vyzvedne response

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014183234.png)

<!-- ImageEnd -->

END

---

<!--
Original Flashcard ID: 1729236693138
-->

START
NI-SZZ


Jaké jsou 2 režimy **asynchronní komunikace přes prostředníka**?

Back:

- **Message Queue** - jeden klient, jeden server
- **Publish/Subscribe** - jeden klient, z queue čte více serverů _(každý např. zaměřený na určitý task)_

END

---

<!--
Original Flashcard ID: 1736674205790
-->

START
NI-SZZ


Co je **asynchronní komunikace přes polling**?

Back:

**Problém**: komunikace client-server s dlouhou odezvou, server se nemůže připojit na klienta a říct mu, že vykonal danou činnost, protože klient nemá žádné veřejné API.

**Řešení**: Polling

1. Klient **pošle request**
2. Server **začne zpracovávat**, updatuje svůj status na **status monitor** (nějaký API endpoint)
3. Klient se jednou za čas **dotáže na status monitor**, aby zjistil, jak na tom server je
4. Jakmile je server hotový, dá na status monitor adresu, kde si klient může vyzvednout response

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241014184213.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241014184223.png)

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1729236693152
-->

START
NI-SZZ


Co je **long polling**?

Back:

Server si u sebe chvíli podrží ten request klienta, díky čemuž zamezí tomu, aby se furt klient dotazoval na status monitor.

Tzn. server si tím reguluje zátěž, protože schválně na každý request odpoví po nějakém čase.

END

---

## Blocking a non-blocking I/O

<!--
Original Flashcard ID: 1735205749781
-->

START
NI-SZZ


Co je model **synchronní IO**? Jaké **2 typy connnections** existují?

Back:

Komunikace probíhá synchronně:

- **inbound connection** - přijde request, server vytvoří **vlákno**, které zpracuje požadavek a odpoví
- **outbound connection** - přistupuju z aplikačního serveru do databáze.

V dnešní době se to dělá následovně:

- Systém dostane request, pošle query do databáze.
- Na úrovni mezi aplikační vrstvou a databází je synchronní připojení. Jedna funkce requestu 1 přistupuje do databáze, ostatní funkce do přistupují do databáze čekají.

Problém:

- Když chci spočíst server processing time, tak to není vypovídající, protože např. zpracování requestu reálně zabere 20ms, ale protože čeká kvůli synchronním IO v databázi, než ostatní requesty přestanou přistupovat do databáze. Kvůli tomu mi pak request zabere třeba 1020ms, protože čekal na ostatní requesty.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241209101338.png)

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1735205749784
-->

START
NI-SZZ


Jak se řeší pomalé synchronní IO?

Back:

Když např. nemůžu ovlivnit synchronní přístup do databáze (protože ji spravuje někdo jiný), spočítám si, kolik requestů za sekundu průměrně přijímá můj server.

Potom vytvořím tolik **vláken**. Můžu potom třeba udělat to, že budou mít sdílený **thread pool** do databáze.

<!-- ExampleStart -->

Mám 20 requestů za sekundu, rozběhnu si 20 vláken, 1 thread pool do databáze s 20 vlákny.

<!-- ExampleEnd -->

END

---

<!--
Original Flashcard ID: 1735205749786
-->

START
NI-SZZ


Jaká je nevýhoda synchronního IO?

Back:

Když se mi najednou zpomalí databáze (kterou já nemám pod kontrolou, ale spravuje ji někdo jiný), nemůžu s tím nic udělat - nemůžu to nijak naškálovat tak, abych splňoval SLA a požadovanou availability.

<!-- DetailInfoStart -->

Mohl bych teoreticky navýšit počet spojení do databáze, ale to nemůžu dělat neomezeně.

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1735205749789
-->

START
NI-SZZ


Jak se dá vyřešit to, když mám synchronní přístup do databáze ale ta databáze je pomalá (a my nemáme kontrolu nad tou databází)?

Back:

Nastavím tam **timeout**. Díky tomu mi request vypadne s nějakou chybou a přestane to **blokovat** ostatní requesty.

END

---

<!--
Original Flashcard ID: 1735205749792
-->

START
NI-SZZ


Jak funguje **fronta requestů** před tím než se jim přiřadí vlákna?

Back:

1. Přijde mi request
2. Zařadí se do fronty (např. s kapacitou 100)
3. Request čeká na to, až mu bude přiřazeno vlákno pro přístup do databáze.
4. Pokud je kapacita fronty plná, rovnou se requesty odmítají (díky čemuž to je rychlejší, protože se nezatěžuje ten systém, když vím, že bych to stejně nestíhal zpracovávat)

END

---

<!--
Original Flashcard ID: 1735205749794
-->

START
NI-SZZ


Jak funguje Asynchronní IO?

Back:

Používám **jedno vlákno** pro přístup do databáze/filesystému pro obsloužení všech requestů.

Když funkce provádí IO operaci (read write), vlákno se přepíná mezi úlohami.

Např.

1. Funkce $A$ požádá o přečtení databáze
2. Vlákno o to požádá databázi a čeká na odpověď, má volný čas
3. Mezitím začne obsluhovat požadavek funkce $B$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241209101321.png)

<!-- DetailInfoEnd -->

END

---

<!--
Original Flashcard ID: 1735205749796
-->

START
NI-SZZ


Jaká je výhoda Node v Javascriptu?

Back:

Na **outbound connections** umožňuje dělat asynchronní IO.

Používají se k tomu callback funkce. Když vlákno dokončí operaci, zavolá mezitím jinou funkci.

END

---