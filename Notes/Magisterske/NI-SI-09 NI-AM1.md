---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-09 NI-AM1

> NI-SI-09 (NI-AM1)
> Architektura softwarového systému, pojem služba a její charakteristiky. Architektura REST (vlastnosti, zdroj, srovnání se SOAP). Optimalizace protokolu HTTP (latence, keep-alive, pipelining).

## Architektura softwarového systému

<!--
Original Flashcard ID: 1728921214979
-->

START
NI-SZZ

Definice: **architektura systému** (aka co mi určuje?)

Back:

Architektura určuje **strukturu** a **chování** sytému.
<!--ID: 1773945940289-->
END

---

<!--
Original Flashcard ID: 1728921214992
-->

START
NI-SZZ

Jaké jsou části Enterprise Architektury? (přehled)

Back:

![](../../Assets/Pasted%20image%2020240930093046.png)
<!--ID: 1773945940297-->
END

---

<!--
Original Flashcard ID: 1728921214995
-->

START
NI-SZZ

Jaké jsou části **reprezentace enterprise architektury**? (5)

Back:

- **EIS** (executive information systems)
- **BSS** (business support systems)
- **OSS** (operational support systems)
- **B2B** (business to business)
- **OIS** (office information systems)

![](../../Assets/Pasted%20image%2020240930093423.png)
<!--ID: 1773945940300-->
END

---

<!--
Original Flashcard ID: 1736418422039
-->

START
NI-SZZ


Co jsou **EIS** systémy?

Back:

**EIS** (executive information systems):
systémy pro řízení pro manažery

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020240930093423.png)

<!-- ImageEnd -->
<!--ID: 1773945940304-->
END

---

<!--
Original Flashcard ID: 1736418422051
-->

START
NI-SZZ


Co jsou **BSS** systémy?

Back:

**BSS** (business support systems):
systémy, co působí v jednotlivých odděleních (např. hr, finance, marketing,...) - každé oddělení může mít vlastní systém

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020240930093423.png)

<!-- ImageEnd -->
<!--ID: 1773945940307-->
END

---

<!--
Original Flashcard ID: 1736418422054
-->

START
NI-SZZ


Co jsou **OSS** systémy?

Back:

**OSS** (operational support systems):
řeší to kde firma působí v dané oblasti - (např. u telefonního operátora pro ovládání té sítě)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020240930093423.png)

<!-- ImageEnd -->
<!--ID: 1773945940311-->
END

---

<!--
Original Flashcard ID: 1736418422057
-->

START
NI-SZZ


Co jsou **B2B** systémy?

Back:

**B2B** (business to business):
Zajišťuje integraci s externíma systémama, dalšíma firmama (např. automatická komunikace se zákazníkama, dodavatelema, veřejnou správou atd.)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020240930093423.png)

<!-- ImageEnd -->
<!--ID: 1773945940314-->
END

---

<!--
Original Flashcard ID: 1736418422060
-->

START
NI-SZZ


Co jsou **OIS** systémy?

Back:

**OIS** (office information systems):
Řeší správu dokumentů, document management system

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020240930093423.png)

<!-- ImageEnd -->
<!--ID: 1773945940317-->
END

---

<!--
Original Flashcard ID: 1728921215006
-->

START
NI-SZZ

Co je **process classification framework** (PCF)?

Back:

PCF je **standard** = seznam obecných požadavků, které je dobré implementovat v systémech.
- Když budu dělat systém, podívám se do standardu a on mi řekne, co všechno bych měl v systému vytvořit za funkcionality.
<!--ID: 1773945940320-->
END

---

<!--
Original Flashcard ID: 1728921215034
-->

START
NI-SZZ

Jaké jsou **typy softwarové architektury** (dle centralizovanosti)? (2)

Back:

- **centralizovaná** - client server
  - Nevýhoda - když spadne server, tak nefunguje nic (single point of failure)
- **decentralizovaná** - peer to peer
  - Uzly v architektuře jsou nezávislé
  - Dobré škálování
  - Když failne jedna node, tak se to přepojí na jinou
  - Např. Torrent, Skype

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240930103343.png)
<!-- DetailInfoEnd -->

Fun fact:

- Skype fungoval tak, že když člověk nepotřebuje komunikovat se serverem. Když člověk byl na veřejné síti, tak vpodstatě fungoval jako relay pro ostatní uživatele -> komunikace šla přes ostatní uživatele. - Teď už to není, dřív to tak bylo. R.I.P Skype 🥀
<!--ID: 1773945940323-->
END

---

<!--
Original Flashcard ID: 1728921215036
-->

START
NI-SZZ

Co je **separation of concerns**?

Back:

- Systém obsahuje vrstvy s přesně definovaným účelem.
	- Prezentační, aplikační a datová vrstva
- Mezi vrstvami mohu definovat **interface** (rozhraní).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240930103530.png)
<!-- DetailInfoEnd -->

<!--ID: 1773945940327-->
END

---

<!--
Original Flashcard ID: 1729237386393
-->

START
NI-SZZ

Jaké jsou typy softwarových architektur podle rozdělení kódu? (7)

(nápověda: monolit, ...)

Back:

- **Monolit**
- **Two-Tier client/server**
- **Three-tier client/server**
- **Mutli-tier client/server**
- **Microservices client/server**
- **Nemikroservisní**
- **Cloud-native**
<!--ID: 1773945940330-->
END

---

<!--
Original Flashcard ID: 1729237386396
-->

START
NI-SZZ


Co je **monolit**?

Back:

- Všechny vrstvy aplikace jsou na jednom stroji
- Typicky desktopové aplikace
- Určené pro jednoho uživatele
- Nevýhody
    - Těžko se spravuje, problém se škálováním a výkone

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007092501.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007092310.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940333-->
END

---

<!--
Original Flashcard ID: 1729237386398
-->

START
NI-SZZ


Co je **two-tier client/server** architektura?

Back:

- Prezentační a aplikační vrstva jsou odděleny od datové
- Tzv. tlustý klient – desktopová aplikace
- Data jsou na jiném serveru (DBMS)
- Více uživatelů sdílí jednu DB

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007092421.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007092429.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940337-->
END

---

<!--
Original Flashcard ID: 1729237386401
-->

START
NI-SZZ


Jaká je **nevýhoda** **two-tier client server** architecture?

Back:

- Tlustý klient se těžko spravuje – každý update znamená reinstalaci
- Nesdílí se aplikační logika – pouze skrze kopie. Každý klient může mít jinou verzi aplikační logiky
- Datově orientovaná integrace – integrita v aplikační logice
<!--ID: 1773945940340-->
END

---

<!--
Original Flashcard ID: 1729237386404
-->

START
NI-SZZ


Co je **three-tier client/server architecture**?

Back:

- Každá vrstva na separátním stroji
    - Tenký klient – desktopová aplikace nebo interpretovaný kód
    - Podpora více uživatelů sdílejících stejnou aplikační logiku a DB
    - Vysoký výkon a škálovatelnost

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007092715.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007092723.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940343-->
END

---

<!--
Original Flashcard ID: 1729237386407
-->

START
NI-SZZ

Jaká je nevýhoda three-tier client/serveru?

Back:

- Je třeba řešit **škálovatelnost**.
- Špagetová integrace

<!-- ExplanationStart -->

Oproti two-tier, kde si každý prostě stáhne program k sobě, tady musím rozkládat zátěž na servery, protože uživatel vždy používá server.

<!-- ExplanationEnd -->
<!--ID: 1773945940347-->
END

---

<!--
Original Flashcard ID: 1729237386409
-->

START
NI-SZZ


Co je **Multi-tier client/server architecture** (vícevrstvá architektura)?

Back:

- Krom tří vrstev mám ještě middleware layer, který přidává další funkcionality.
- Middleware může být buď na zvláštním serveru, nebo u jiné vrstvy.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007093033.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007093040.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940350-->
END

---

<!--
Original Flashcard ID: 1729237386412
-->

START
NI-SZZ


Co je **Client/Server Architecture (microservices)**?

Back:

- Backend mám rozdělený do více **komponentů**, kde každý běží jako **samostatný proces**.
- Velmi dobré škálování a technologická nezávislost
- Správa mikroslužeb např. skrze Kubernetes

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007093310.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007093318.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940353-->
END

---

<!--
Original Flashcard ID: 1729237386415
-->

START
NI-SZZ


Proč firmy nerefaktorují svoje staré aplikace na microservice architekture?

Back:

Protože to je často **nákladné překódit** celou codebase.
<!--ID: 1773945940357-->
END

---

<!--
Original Flashcard ID: 1729237386418
-->

START
NI-SZZ


Co je **client/server NOT a microservice architecture**?

Back:

Vezme se monolit a pustí se v **Kubernetes**.

- Snazší nasazení skrze containerové obrazy
- Vylepšení fail-overu
- Nevýhody
    - Drahé

*Má to výhody a je to podobné microservices, ale **není** to microservice architekture.*

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007094447.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007094458.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940360-->
END

---


START
NI-SZZ

Co je to Cloud-native architektura?

Back:

- navržená pro cloud
- děláme architekturu microslužeb
- vlastně Kubernetes

END

---



<!--
Original Flashcard ID: 1729236693163
-->

START
NI-SZZ


Jaký je rozdíl mezi SOA, Miscroservices a Kubernetes?

Back:

- **SOA** - starší legacy systém obecně na služby
  - Je to legacy (vznikl v roce 2005), už se toho lidi spíš zbavují
- **Mikroslužby** - relativně nový, populární
- **Kubernetes** - v tom běží (mimo jiné) mikroslužby
<!--ID: 1773945940364-->
END

---

<!--
Original Flashcard ID: 1736496141945
-->

START
NI-SZZ


Jak se dá rozdělit systém? (3 vrstvy)

Back:

- **Data, procesy, funkce**
- **Software**
- **Hardware**
<!--ID: 1773945940367-->
END

---

<!--
Original Flashcard ID: 1736496141948
-->

START
NI-SZZ


Pomocí jakých diagramů se dají modelovat data, procesy a funkce?

Back:

- **Data** - ER diagramy
- **Procesy** - stavové diagramy, activity diagramy, sekvenční diagramy atd.
- **Funkce** - dá se nakreslit jako strom jednotlivých funkcí

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241021121709.png)

<!-- ImageEnd -->

Doporučuju mrknout na tohle:

<!-- DetailInfoStart -->

U té **hierarchie funkcí** to má pak výhodu, že pak je vidět, z jakých funkcí je složená.

- Každá funkce má nějaký vstup a výstup.

Na každou funkci (společně s jejímy podfunkcemi) se dá dívat jako na **proces**.
V monolitické aplikaci mám celou aplikaci jako jeden proces.
![](../../Assets/Pasted%20image%2020241021121921.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940370-->
END

---

## Pojem služba a její charakteristiky

<!--
Original Flashcard ID: 1729237386423
-->

START
NI-SZZ


Jaké jsou různé **pohledy na služby**? (5)

Back:

- **business** view
- **conceptual** view
- **logical** view
- **software architecture** view
- **technology architecture** view
<!--ID: 1773945940374-->
END

---

<!--
Original Flashcard ID: 1729237386426
-->

START
NI-SZZ


Co je **business view** náhled na služby?

Back:

Služba přináší nějakou byznys hodnotu uživateli té služby.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007095748.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940377-->
END

---

<!--
Original Flashcard ID: 1729237386429
-->

START
NI-SZZ


Co je **conceptual view** náhled na služby?

Back:

Pohled z hlediska návrhu, design patternů a principů.

![](../../Assets/Pasted%20image%2020241007095755.png)
<!--ID: 1773945940381-->
END

---

<!--
Original Flashcard ID: 1729237386432
-->

START
NI-SZZ


Co je **logical view** náhled na služby? Jaké jsou 2 hlavní přístupy?

Back:

Interface služby, její popis a implementace

- **resource-oriented**
  - pracuje se zdrojema, např. REST
  - metody, co používám pro manipulaci dat jsou standardizovaný (POST, PUT, DELETE, atd.)
- **message-oriented** - zavádím operace, co jsou doménově závislé - např. SOAP - např. mám na rozhraní konkrétní metodu "createCustomer" - nevýhoda: je potřeba zavést nějaký standard pro vytváření metod, aby v tom nebyl chaos
<!--ID: 1773945940384-->
END

---

<!--
Original Flashcard ID: 1729237386434
-->

START
NI-SZZ


Co je **software architecture view** náhled na služby? (2 typy služeb)

Back:

- **business service**
  - Externí, exposuje funkcionalitu aplikace ostatním
- **middleware service**
  - Interní (middleware atd.)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007095811.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940388-->
END

---

<!--
Original Flashcard ID: 1729237386437
-->

START
NI-SZZ


Co je **technology architecture view** náhled na služby?

Back:

Protokoly a standardy, které se používají.

![](../../Assets/Pasted%20image%2020241007095820.png)
<!--ID: 1773945940391-->
END

---

<!--
Original Flashcard ID: 1729237386440
-->

START
NI-SZZ


Proč je výhoda oddělovat specifikaci rozhraní a samotnou implementaci?

Back:

Můžu pak mít **více implementací** daného rozhraní (např. v jiných jazycích, protokolech atd.)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007100632.png)

<!-- ImageEnd -->
<!--ID: 1773945940394-->
END

---

<!--
Original Flashcard ID: 1729237386445
-->

START
NI-SZZ


Pomocí jakého **diagramu** se modeluje **fungování dané service**?

Back:

Pomocí **stavového diagramu**.
<!--ID: 1773945940397-->
END

---

<!--
Original Flashcard ID: 1729237386448
-->

START
NI-SZZ


Jaké jsou části **procesu operace** dané service? (4)

Back:

1. Operace má definované **preconditions**
   - _Podmínky, co platí ve stavu aplikace před začátkm operace_
   - _Např. abych provedl platbu, musím mít na účtu dost peněz_
1. Do operace vejde **input**
1. Z operace vyjdou **outputs**
1. Operace má definované **effects**
   - _Podmínky, co platí ve stavu aplikace po dokončení operace_

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007101250.png)

<!-- ImageEnd -->
<!--ID: 1773945940401-->
END

---

<!--
Original Flashcard ID: 1729237386451
-->

START
NI-SZZ


Jaké jsou **charakteristiky services**? (7)

Back:

- **loose coupling** - requester nepotřebuje mít žádné "hard-wired" informace potřebné k používání služby
- **reusability** - služba by se měla dát používat pro různé scénáře
- **encapsulation** - služba poskytuje rozhraní a zvenku nikdo nemusí řešit, jak vypadá implementace
- **contracting** - služba poskytuje rozhraní a tím vytváří "kontrakt" mezi uživatelem služby a službou
- **abstraction** - interface je abstrahovaný (oddělený) od implementace i konkrétní softwarové/hardwarové technologie
- **composability** - služby lze skládat do komplexnějších služeb
- **discoverability** - služba musí být ideálně popsaná nějakým standardním jazykem (openapi, swagger)

Pomůcka: CLEARCD nebo LCDRACE

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007102911.png)

<!-- ImageEnd -->
<!--ID: 1773945940404-->
END

---

<!--
Original Flashcard ID: 1729237386454
-->

START
NI-SZZ


Co je **loose coupling** služeb (services)?

Back:

V klientovi není "pevně zadrátované", jaké endpointy se volají atd. (např. díky HATEOAS).
<!--ID: 1773945940408-->
END

---

<!--
Original Flashcard ID: 1729237386456
-->

START
NI-SZZ


Co je **reusability** služeb (services)?

Back:

Služba by měla být navržena tak, aby byla použitelná i jinýma klientama, ne jen jedním.

<!-- ExampleStart -->

Když dělám API, měl bych ho navrhovat tak, jako kdyby s ním v budoucnu komunikovalo více klientů, nepřizpůsobovat to jen na toho jednoho.

Samozřejmě je v tom tradeoff. Čím víc reusable to dělám, tím víc fičur tam musím dát, tím víc času mi to zabere.

<!-- ExampleEnd -->
<!--ID: 1773945940411-->
END

---

<!--
Original Flashcard ID: 1729237386459
-->

START
NI-SZZ


Čeho je zkratka **SOA**?

Back:

**Service Oriented architecture**
<!--ID: 1773945940414-->
END

---

<!--
Original Flashcard ID: 1729237386462
-->

START
NI-SZZ


Co je **ESB**?

Back:

**Enterprise Service Bus** - systém komunikace mezi services
<!--ID: 1773945940417-->
END

---

<!--
Original Flashcard ID: 1729237386465
-->

START
NI-SZZ


Co jsou **Integration a Interoperability**?

Back:

- **Integrace** - proces propojování systémů, services
- **Interoperability** - schopnost dvou aplikací, aby si rozuměly
  - _Např. aby se transformovaly data aby se daly poslat dané službě. Např. XML -> JSON atd._

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007103247.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940420-->
END

---

<!--
Original Flashcard ID: 1729237386468
-->

START
NI-SZZ


Co je **SOA architektura**? Z čeho se skládá?

Back:

Service Oriented Architecture

- **Culture** - IT organizace je založena na byznysu
- **Methodology** - top-down, bottom-up
- **Technology** - ESB, interoperabilita, security

Pozn. je to trochu legacy, ale velké firmy ČEZ, banky atd. to používají.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007103545.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940423-->
END

---

<!--
Original Flashcard ID: 1729237386471
-->

START
NI-SZZ


Co je **one-to-one service integration**?

Back:

Mám hromadu systémy/services, komunikují vždy **jedna na jednu**.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007103648.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007103657.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940427-->
END

---

<!--
Original Flashcard ID: 1729237386474
-->

START
NI-SZZ


Jaký je problém s **one-to-one service integration**?

Back:

Pokud je těch services více, je v tom pak hrozný **chaos**, používají se různé protokoly, špatně se to řídí atd.

_To se pak nazývá špagetová architektura :D_

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007103648.png)

<!-- ImageEnd -->
<!--ID: 1773945940430-->
END

---

<!--
Original Flashcard ID: 1729237386477
-->

START
NI-SZZ


Jak vypadá **Many-To-Many service** integrace (=realizace SOA)? Jaký **problém** řeší?

Back:

Vytvoří se **Enterprise Service Bus** (ESB), který je middlewarem mezi jednotlivými systémy a dělá v tom **pořádek**.

**Řeší problém chaosu** u one-to-one service integrace

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241007104129.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241007104148.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940433-->
END

---

<!--
Original Flashcard ID: 1729237386480
-->

START
NI-SZZ


Proč není **many-to-many service** tak "růžový"?

Back:

Protože se tam často ten chaos zůstane, akorát se rodělí do menších podčástí.

(Ale aspoň ten hlavní flow dat je uspořádaný)
<!--ID: 1773945940436-->
END

---

<!--
Original Flashcard ID: 1736496141956
-->

START
NI-SZZ

Jaký je rozdíl mezi **monolitem**, **mikroslužbou** a **modulitem**? Čeho bychom se měli snažit docílit?

Back:

- **Monolit** - mám 1 proces, v něm je všechno
- **Mikroslužby** - druhý extrém, mám systém rozkouskovaný co nejvíce do mikroslužeb
- **Modulit** - "zlatá střední cesta", rozdělím systém do pár větších mikroslužeb, ale nedělám to pro každou minifunkcionalitu.

Když děláme architekturu mikroslužeb, tak se snažíme vytvářet **modulit** (architekturu modulitu).

<!-- DetailInfoStart -->

Když by mi dvě mikroslužby pak potřebovaly využívat stejnou funkcionalitu, tak z té funkcionality udělám **knihovnu**. Díky tomu to pak můžu používat v různých mikroslužbách.

- Nevýhoda: mám duplicitní kód v systému (několik mikroslužeb má nainstalováno stejnou knihovnu -> snižuje to výkon)
- Výhoda: je to všechno přehledný a funguje to dobře.
  <!-- DetailInfoEnd -->
<!--ID: 1773945940446-->
END

---

<!--
Original Flashcard ID: 1736496141960
-->

START
NI-SZZ


Jaké jsou vlastnosti mikroslužeb? (6)

Back:

- **Loosely coupled** (volně párovaný) - integrovatelný pomocí definovaných rozhraní
- **Technology-agnostic protocols** - používám protokoly, co nejsou závislé na technologii. _Např. používám REST a je jedno, v čem mám ty mikroslužby nakóděné_
- **Independently deployable** - když potřebuju udělat změnu, stačí mi redeploynout jen tu danou mikroslužbu
- **Organized around capabilities** - každá mikroslužba se zaměřuje na danou věc _(např. accounting, billing, recommendation, atd.)_
- **Implemented using different technologies** - když např. potřebuju vysokou efektivitu, můžu si danou mikroslužbu udělat v Rustu nebo C++
- **Owned by a small team** - každá mikroslužba má vlastní malý tým, který se o ní stará a má za ní zodpovědnost

<!-- DetailInfoStart -->

**Owned by a small team:**
Např. ve Spotify se dělá to, že každá mikroslužba má vlastní tým, který zabírá **celý development cycle**. Např. frontenďák, backenďák, devopsák, tester atd.

Tradičně se to dělávalo tak, že když se vyvíjí fičura, tak je tým developerů, ty něco vyvinou a pak to předají testerům, ty pak devopsákům a údržbářům atd.

Nevýhoda toho je, že pak nastává "**ping pong**" game, kde si ty oddělení přehazují zodpovědnosti a hází to furt na ty druhý oddělení.

Ten novější přístup je právě pomocí menších týmů, který obsáhne celý development cycle, tudíž je jasný, kdo má za co zodpovědnost a nedochází k tomuhle přehazování.

<!-- DetailInfoEnd -->
<!--ID: 1773945940449-->
END

---

## Architektura REST (vlastnosti, zdroj, srovnání se SOAP)

<!--
Original Flashcard ID: 1731175818772
-->

START
NI-SZZ


Používá se v praxi HATEOAS?

Back:

Je to fajn koncept, ale reálně se to moc nepoužívá, protože je prostě jednodušší vědět specifikaci API a s tou pracovat.

<!--ID: 1773945940452-->
END

---

<!--
Original Flashcard ID: 1735205750015
-->

START
NI-SZZ


Čeho je zkratka REST?

Back:

Representational State Transfer
<!--ID: 1773945940455-->
END

---

<!--
Original Flashcard ID: 1735205750018
-->

START
NI-SZZ

Jaký je rozdíl mezi **REST** a **RPC**?

Back:

REST
- endpointy jsou **zdroje**
- operace jsou doménově nezávislé (GET, PUT,..)
- používá se často pro client-server komunikaci

RPC
- endpointy jsou **operace** (např. createCustomer)
- operace jsou doménově závislé
- používá se hlavně pro server-server komunikaci
<!--ID: 1773945940458-->
END

---

<!--
Original Flashcard ID: 1735205750020
-->

START
NI-SZZ


Z jakých částí se skládá webová architektura? (3)

Back:

- **Identifikace**: univerzální identifikace zdrojů pomocí URI
- **Interakce**: protokoly pro získávání zdrojů - HTTP
- **Formáty**: reprezentace zdrojů (data a metadata)
<!--ID: 1773945940462-->
END

---

<!--
Original Flashcard ID: 1735205750023
-->

START
NI-SZZ


Jaké jsou základní principy/omezení RESTu? (5)

Back:

- **Client-server architektura**
- **Statelessnes** - stav se neudržuje na serveru, ale v těch datech, co se přenáší
  - Stavy jsou data, přechody jsou linky (např. v HTML, nebo endpointy RESTu)
- **Cacheability** - requesty by mělo jít cachovat
- **Layered system**
- **Uniform interface** - operace CRUD jsou doménově nezávislé (tzn. nemám funkci `createOrder`, ale `POST /orders`)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120151248.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940465-->
END

---

<!--
Original Flashcard ID: 1735205749817
-->

START
NI-SZZ


Na co se dělí REST? (4)

Back:

- **Zdroje** (resource) 
- **Identifikátor** 
- **Data**
- **Metadata**
<!--ID: 1773945940468-->
END

---

<!--
Original Flashcard ID: 1735205749820
-->

START
NI-SZZ


Co je **URI**?

Back:

Unified Resource Identifier = identifikuje zdroj
<!--ID: 1773945940471-->
END

---

<!--
Original Flashcard ID: 1735205749823
-->

START
NI-SZZ


Co je URL?

Back:

Uniform Resource Locator = identifikuje zdroj + obsahuje jeho lokaci
<!--ID: 1773945940475-->
END

---

<!--
Original Flashcard ID: 1735205749825
-->

START
NI-SZZ


Co je URN?

Back:

Uniform Resource Name = název, který je globálně unikátní
<!--ID: 1773945940478-->
END

---

<!--
Original Flashcard ID: 1735205749828
-->

START
NI-SZZ


Jaké jsou části URI? (4)

Back:

- `scheme` - např. http, ftp (pozor, schéma není protokol!)
- `authority` - doménové jméno nebo adresa serveru (např. example.com)
- `path and query` - např. `/users?page=1`
- `fragment` - odkazuje na sekundární zdroj (např. odstavec v html)

![](../../Assets/Pasted%20image%2020241125122945.png)
<!--ID: 1773945940481-->
END

---

<!--
Original Flashcard ID: 1735205749830
-->

START
NI-SZZ


Je good practice mít v RESTu 2 cesty k tomu samému zdroji?

Back:

Ano! Jednotlivé REST endpointy mi definují "pohledy" na ty moje zdroje.

Např. když mám orders, tak se k tomu můžu dostat mnoha způsoby. Tomu se potom říká **alias**.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241125123335.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125123343.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940484-->
END

---

<!--
Original Flashcard ID: 1735205749833
-->

START
NI-SZZ


K čemu se používá **query** v RESTu? (3)

Back:

- **filtrace** (selekce) - chci vybrat jen nějaké položky
- **projekce** - chci vypsat jen nějaký fieldy těch položek
- **instrukce**
  - např. formát, klíč

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241125123518.png)

<!-- ExampleEnd -->
<!--ID: 1773945940488-->
END

---

<!--
Original Flashcard ID: 1735205749836
-->

START
NI-SZZ


Co je fragment v URI adresách?

Back:

Používá se hash, znamená to "subresource". Díky tomu mohu odkazovat na konkrétní element např. v HTML nebo XML.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125123814.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940491-->
END

---

<!--
Original Flashcard ID: 1735205749838
-->

START
NI-SZZ


Jaké jsou hlavní charakteristiky URI? (5)

Back:

- **Capability URL** - krátkodobá URL, která obsahuje i nějaký key, který slouží k autentizaci/verifikaci - například v emailu se odesílá URL na změnu hesla
- **URL Alias** - více pohledů nad jedním zdrojem
- **URI Opacity** - když jako součást URI mám i formát
- **Resource versions** - když mi URI definuje i verzi toho zdroje
- **Persistent URL** - adresa by měla být validní i když zdroj už neexistuje (neměl bych smazat URI, ale třeba přesměrovat člověka na novou URI)
<!--ID: 1773945940494-->
END

---

<!--
Original Flashcard ID: 1735205749841
-->

START
NI-SZZ


Z čeho se skládají zdroje v RESTu? (3)

Back:

- **Reprezentace** - JSON, XML, ...
- **Data**
- **Metadata** - v hlavičkách, např. kdy byl resource vytvořen atd.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125124328.png)
![](../../Assets/Pasted%20image%2020241125124338.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940497-->
END

---

<!--
Original Flashcard ID: 1735205749846
-->

START
NI-SZZ


Co je resource state?

Back:

Každý zdroj může mít jiný stav podle toho, kdy k němu přistupuju.

Tzn. když čtu data z REST zdroje, získám tím momentální **stav** toho zdroje.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125125038.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241125125052.png)

<!-- ExampleEnd -->
<!--ID: 1773945940500-->
END

---

<!--
Original Flashcard ID: 1735205749848
-->

START
NI-SZZ


Co znamená že má REST uniform interface?

Back:

- Mám omezené množství operací (POST, GET,...)
- Operace jsou **doménově nezávislé**
<!--ID: 1773945940503-->
END

---

<!--
Original Flashcard ID: 1735205749851
-->

START
NI-SZZ

Jaké **vlastnosti** mají operace RESTu z hlediska změn stavu zdroje? (2)

Back:

**Safeness**:
- **Safe** - operace nemění stav (např. GET)
- **Unsafe** - mohou měnit stav (např. POST, PUT, DELETE)

**Idempotence**:
- **Idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), bude efekt vždy stejný (GET, PUT, DELETE)
- **Non-idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), může být stav jiný (POST)

<!-- ExampleStart -->

Idempotence:

- Funkce, co mi vždy naplní databázi danými testovacími daty je idempotentní. Vím, že to např. smaže všechna data a naplní to databázi danými daty. Vím, že výsledek té funkce bude furt stejný.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125125926.png)
![](../../Assets/Pasted%20image%2020241125125930.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940506-->
END

---

<!--
Original Flashcard ID: 1735205749854
-->

START
NI-SZZ


Jaký je rozdíl mezi efektem a výsledkem v idempotenci?

Back:

- **efekt** = jak se změní stav zdroje
- **výsledek** = co je výsledkem operace

**Idempotence** je závislá na **efektu** a ne na výsledku.

<!-- ExplanationStart -->

Např. když udělám `DELETE /orders/1`
**Efekt** (stav) = objednávka neexistuje
**Výsledek** = smazali jsme objednávku

Delete je idempotentní, takže když to udělám znovu:
**Efekt** = objednávka neexistuje
**Výsledek** = nic jsme nesmazali

<!-- ExplanationEnd -->
<!--ID: 1773945940509-->
END

---

<!--
Original Flashcard ID: 1735205749856
-->

START
NI-SZZ


Jaké REST metody jsou a nejsou idempotentní podle standardu?

Back:

- GET, PUT, DELETE jsou idempotentní
- POST **není** idempotentní!

<!-- ExplanationStart -->

Např. u POSTu se může v databázi vytvořit nový záznam, který má random vygenerované idčko, tzn. když vícekrát zavolám POST, tak ten efekt může být jiný.

U GET, PUT a DELETE furt pracuju s těmi samými daty, takže v tom není problém a je to idempotentní.

<!-- ExplanationEnd -->
<!--ID: 1773945940513-->
END

---

<!--
Original Flashcard ID: 1735205749859
-->

START
NI-SZZ


Když mám POST, co by mělo být v response?

Back:

Neměl by tam být nový stav, ale měl by tam být ODKAZ na nový stav (tzn. aby si ten klient musel fetchnout znovu ten zdroj).

Proč?
Protože POST je non-idempotentní.

<!-- ExampleStart -->

Když to dělám špatně:
Když mám např. formulář a provedu POST, a pak ho vyplním datama, ze serveru (co dostanu v odpovědi POSTu), tak potom když klient refreshne stránku, tak se znovu odešle ten POST request s těmi novými daty (což je špatně).

Správně by se měl provést POST, v tom by měl být odkaz na zdroj a klient si pak znovu fetchne pomocí GET. Díky tomu se POST provede pouze jednou.

<!-- ExampleEnd -->
<!--ID: 1773945940516-->
END

---

<!--
Original Flashcard ID: 1735205749862
-->

START
NI-SZZ


Jaké vlastnosti má GET? (safeness a idempotence)

Back:

- Je **safe**
- Je **idempotnentní**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150154.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940519-->
END

---

<!--
Original Flashcard ID: 1735205749865
-->

START
NI-SZZ


Jaké vlastnosti má PUT? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

Updatuje celý resource.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150145.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940521-->
END

---

<!--
Original Flashcard ID: 1735205749867
-->

START
NI-SZZ


Jaké vlastnosti má PATCH? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150219.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940525-->
END

---

<!--
Original Flashcard ID: 1735205749870
-->

START
NI-SZZ


Jaké vlastnosti má POST? (safeness a idempotence)

Back:

- Je **unsafe**
- Není **idempotentní**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150314.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940528-->
END

---

<!--
Original Flashcard ID: 1735205749872
-->

START
NI-SZZ


Jaké vlastnosti má DELETE? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150340.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940531-->
END

---

<!--
Original Flashcard ID: 1735205749875
-->

START
NI-SZZ


Jaké vlastnosti mají HEAD a OPTIONS? (safeness a idempotence)

Back:

- Je **safe**
- Je **idempotentní**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125150802.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940534-->
END

---

<!--
Original Flashcard ID: 1735205749877
-->

START
NI-SZZ


Jaké jsou třídy status kódů?

Back:

- `1xx` - informační stavy, něco se stalo, ale ne v aplikaci, moc se nevyužívá
- `2xx` - je to správně, nenastala chyba
- `3xx` - přesměrování
- `4xx` - chyba na straně klienta
- `5xx` - chyba na straně serveru

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241125151055.png)
![](../../Assets/Pasted%20image%2020241125151104.png)

<!-- DetailInfoEnd -->
<!--ID: 1773945940538-->
END

---

<!--
Original Flashcard ID: 1735205749924
-->

START
NI-SZZ


Jak obecně funguje HATEOAS?

Back:

V responses serveru mám **linky** na **URI** nějakého zdroje.

Klient může aplikovat metody na daném linku (PUT, POST, DELETE...) aby se přesunul do jiného stavu.

<!-- ExampleStart -->

Když mám HTML stránku, tak každý link v ní je linkem an jinou HTML stránku. To jakou stránku mám načtenou je ten stav.

<!-- ExampleEnd -->
<!--ID: 1773945940541-->
END

---

<!--
Original Flashcard ID: 1735205749994
-->

START
NI-SZZ


Co je **Richardson Maturity Model**?

Back:

Model vyspělosti/kvality RESTového API.
<!--ID: 1773945940544-->
END

---

<!--
Original Flashcard ID: 1735205749997
-->

START
NI-SZZ


Jaké jsou úrovně **Richardson Maturity Model**? (4)

Back:

0. Level 0 - **The Swamp of POX**
   - Používáme REST čistě jako mechanismus pro RPC styl
1. Level 1 - **Resources**
   - Pracujeme se zdrojema, endpointama
   - Pořád ale nerespektuju metody (např. na vše používáme POST)
1. Level 2 - **HTTP Verbs**
   - Respektujeme i metody a jejich sémantiku (POST, GET, PUT, atd.)
1. Level 3 - **Hypermedia Controls**
   - Používáme HATEOAS

Nemusím nutně používat co nejvyšší level, ale měl bych rozumět tomu, proč danou úroveň používám. Je např. okay použít Level 0, když vím, že mám omezené zdroje a mám k tomu legitimní důvod.
<!--ID: 1773945940547-->
END

---

## Optimalizace protokolu HTTP (latence, keep-alive, pipelining)

<!--
Original Flashcard ID: 1736496141963
-->

START
NI-SZZ


Jaká je pomůcka pro zapamatování ISO/OSI vrstev?

Back:

"All people seem to need data processing" (L7->L1)
"Please do not throw sausage pizza away." (L1->L7)

![](../../Assets/Pasted%20image%2020241021125455.png)
<!--ID: 1773945940550-->
END

---

<!--
Original Flashcard ID: 1736496141965
-->

START
NI-SZZ


Jak jsou odesílána data skrze **HTTP 1.1** a **2.0**?

Back:

- **HTTP 1.1** - textově
- **HTTP 2.0** - binárně
<!--ID: 1773945940553-->
END

---

<!--
Original Flashcard ID: 1736496141971
-->

START
NI-SZZ


Co je **Latence**?

Back:

- Jak dlouho na síti trvá přenos elementárních dat (malých dat).
- Doba od odeslání požadavku po jeho přijetí na serveru.
- Jednosměrné
<!--ID: 1773945940557-->
END

---

<!--
Original Flashcard ID: 1736496141974
-->

START
NI-SZZ


Co je **RTT**?

Back:

- Round Trip Time
- Čas než po síti přejde požadavek na server a zpět odpověď na klienta.
- Obousměrné

Je to $2 \times \text{latence}$
<!--ID: 1773945940560-->
END

---

<!--
Original Flashcard ID: 1736496141976
-->

START
NI-SZZ


Co je **RPT**?

Back:

- Request Processing Time
- Jak dlouho trvá zpracování požadvku na serveru.
<!--ID: 1773945940563-->
END

---

<!--
Original Flashcard ID: 1736496141979
-->

START
NI-SZZ


Co je výsledkem three way handshaku?

Back:

Vytvoří se TCP socket
<!--ID: 1773945940567-->
END

---

<!--
Original Flashcard ID: 1736496141982
-->

START
NI-SZZ


Čím je definovaný TCP socket? (4)

Back:

- **zdrojová IP adresa** (klienta)
- **zdrojový port** (klienta)
- **cílová IP adresa** (serveru)
- **cílová port** (serveru)

Tím je jednoznačně identifikovaný každý TCP socket na internetu.
<!--ID: 1773945940570-->
END

---

<!--
Original Flashcard ID: 1736496141984
-->

START
NI-SZZ


Jaké mechanismy se používají na snížení latence při three way handshaku? (3)

Back:

- **HTTP Keep-alive**
- **HTTP pipelining** - nepoužívá se, ze začátku byl pouze experimentální
- **TCP fast open**

<!-- ExampleStart -->

Tím řeším ten problém, když navazuju hodně spojení, tak abych neměl tak dlouhou odezvu

<!-- ExampleEnd -->
<!--ID: 1773945940573-->
END

---

<!--
Original Flashcard ID: 1736496141987
-->

START
NI-SZZ


Jak funguje **HTTP Keep-alive**?

Back:

Jeden TCP socket se využije na více requestů.

V klientovi se vytvoří request queue, kde čekají requesty na poslání přes to TCP spojení.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020260513175901.png)
<!-- ImageEnd -->


<!-- ExampleStart -->

Např. v request queue bude nejdřív HTML soubor, potom CSS soubor, potom obrázky atd.

![](../../Assets/Pasted%20image%2020260513175846.png)

<!-- ExampleEnd -->
<!--ID: 1773945940581-->
END

---

<!--
Original Flashcard ID: 1736496141990
-->

START
NI-SZZ


Jak funguje HTTP **pipelining**?

Back:

Ta fronta na requesty, co je na klientovi se jakoby přesune na server.

1. Udělá se three way handshake
2. Potom naposílám requesty najednou, nečekám na response.
3. Sever si drží frontu, potom postupně posílá odpovědi na requesty

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020260513175958.png)
<!-- ImageEnd -->


<!-- ExampleStart -->

Normálně, když nedělám pipelining, mám na klientovi frontu requestů a postupně posílám requesty a posílám response.

![](../../Assets/Pasted%20image%2020241104100352.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Tento způsob se v dnešní době nepoužívá.

<!-- DetailInfoEnd -->
<!--ID: 1773945940586-->
END

---

<!--
Original Flashcard ID: 1736496141993
-->

START
NI-SZZ


Co je **head of line blocking**?

Back:

Mám něco ve frontě a ten první prvek mi blokuje ty ostatní.

Tento problém nastává u HTTP pipeliningu.

<!-- ExampleStart -->

Mám velký request jako první, ostatní už jsem zpracoval, ale musím je poslat popořadě, tudíž mi to ten první blokuje

<!-- ExampleEnd -->
<!--ID: 1773945940589-->
END

---

<!--
Original Flashcard ID: 1736496141996
-->

START
NI-SZZ


Jak funguje **TCP fast open**?

Back:

1. Když se naváže spojení pomocí three way handshaku, uloží se na klienta **TCP cookie**.
2. Když chce klient znovu navázat TCP socket se serverem, pošle rovnou tu cookie s requestem. Server rovnou odpoví a klient už nemusí realizovat ACK část.
3. Server pak rovnou odpoví s datama

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020260513180245.png)

![](../../Assets/Pasted%20image%2020241021131825.png)

<!-- ImageEnd -->
<!--ID: 1773945940593-->
END

---

<!--
Original Flashcard ID: 1736496141998
-->

START
NI-SZZ


Co je **origin**?

Back:

Je definovaný těmito hodnotami:

- **Doména** - např. `example.com`
- **Scéma** (méně správně protokol) - např. `https`
- **Port** - např 443

<!-- DetailInfoStart -->

Origin je na klientovi, každý origin může mít až 6 TCP socketů najednou. Např. když bych v HTTP 1.1 načítal webovky, tak přes jeden socket půjde html, přes druhý CSS, přes třetí obrázek atd.

V HTTP 2.0 je změna, že se navazuje **pouze jedno** TCP spojení a dělá se tzv. prokládání, což znamená, že skrze jeden socket se přenáší všechny ty soubory.

<!-- DetailInfoEnd -->
<!--ID: 1773945940595-->
END

---

<!--
Original Flashcard ID: 1736496142001
-->

START
NI-SZZ


Kolik TCP spojení může prohlížeč vytvořit na jeden origin?

Back:

Maximálně **šest**.

<!-- ExampleStart -->

Když si stahuju v HTTP 1 sto obrázků, tak se bude vytvářet 6 spojení najednou.

V HTTP 2 by se vytvořil jeden a díky multiplexingu by se vše posílalo přes to persistentní spojení.

<!-- ExampleEnd -->
<!--ID: 1773945940599-->
END

---

<!--
Original Flashcard ID: 1736496142004
-->

START
NI-SZZ


Co je hlavička SNI?

Back:

Server name information, hodnota hlavičky, kde je uložena adresa _(např. example.com)_, na kterou požadavek směřuje.

<!-- ExplanationStart -->

Je to to samý jako `Host` v hlavičce, ale **není to šifrovaný**, takže si to může přečíst kdokoliv, na té cestě toho streamu

<!-- ExplanationEnd -->
<!--ID: 1773945940602-->
END

---

<!--
Original Flashcard ID: 1731175818744
-->

START
NI-SZZ


Jakou strukturu má HTTP request?

Back:

```
method uri http-version <crlf>
(header : value <crlf>)*
<crlf>
[ data ]
```

<!-- DetailInfoStart -->

Sémantika HTTP a HTTP 2 je prakticky stejná (až na jednu hlavičku)
![](../../Assets/Pasted%20image%2020241104094028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

```
GET /users HTTP/1.1
header: value

body
```

<!-- ExampleEnd -->
<!--ID: 1773945940605-->
END

---

<!--
Original Flashcard ID: 1731175818747
-->

START
NI-SZZ


Jakou strukturu má HTTP response?

Back:

```
http-version response-code [ message ] <crlf>
(header : value<crlf>)*
<crlf>
[ data ]
```

<!-- DetailInfoStart -->

Sémantika HTTP a HTTP 2 je prakticky stejná (až na jednu hlavičku)
![](../../Assets/Pasted%20image%2020241104094028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

```
HTTP/1.1 200 Success
header: value

body
```

<!-- ExampleEnd -->
<!--ID: 1773945940608-->
END

---

<!--
Original Flashcard ID: 1731175818754
-->

START
NI-SZZ


Co je sharding? Jak funguje?

Back:

Origin je hostname, protokol (správněji schéma) a port.

V aplikaci můžu uměle vytořit více originů pomocí shardů tím, že si vytvořím na doméně více poddomén -> mám jiné hostnames.

<!-- ExampleStart -->

Mám jednu doménu, já si ale udělám více podomén. Díky tomu můžu zvýšit počet spojení o 6 (protože vytvářím jiné originy).

Díky tomu může být více spojení, ale samozřejmě to má nevýhodu, protože to najednou může více zatížit server (a je tam trošku větší režie). Sharding tedy může věci zrychlit, ale neměl bych to přehánět, měl bych monitorovat, kolik shardů je pro mě optimální.

![](../../Assets/Pasted%20image%2020241104100844.png)

Na serveru si pak vytvořím virtual host, aby mi to pro ty poddomény zpracovávalo requesty stejně.
![](../../Assets/Pasted%20image%2020241104101248.png)

<!-- ExampleEnd -->
<!--ID: 1773945940611-->
END