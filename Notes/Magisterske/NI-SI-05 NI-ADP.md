---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-05 NI-ADP

> NI-SI-05 (NI-ADP)
> Architektonické vzory (MVC, MVP, MVVM, Client-Server, Microservices vs monolithic server, Asynchronous messaging, Blackboard architecture, Rule-based architecture, Publish-subscribe).


## Architektonické vzory (MVC, MVP, MVVM, Client-Server, Microservices vs monolithic server, Asynchronous messaging, Blackboard architecture, Rule-based architecture, Publish-subscribe)

### MVC

START
NI-SZZ

Co to je **MVC** architektura?

Back:

**Model - View - Controller:**

- **Model** - stará se o data a byznys logiku aplikace
- **Controller** - zpracovává vstup uživatele a updatuje model
- **View** - zobrazuje data, typicky GUI nebo API

![](../../../Assets/Pasted%20image%2020250130115027.png)

<!-- ExplanationStart -->

Nowadays it’s hard to find out, which implementation of this design pattern/architecture is correct because everyone all over the world is “bending” it to his/her needs. No matter what, the idea stays the same and that is [Separation of Concerns](https://courses.fit.cvut.cz/NI-ADP/materials/design-principles/soc.html), loose coupling and high cohesion, etc.

![](../../../Assets/Pasted%20image%2020250130115054.png)

**Model**

Model handles business part of application. It verifies data if they doesn’t break any rule (if they are valid). Model contains main logic so if we make changes in GUI part of application, it won’t affect business logic hence it won’t break core functionality.

**Controller**

Controller’s responsibility is handling user input and updating **Model**.

This part of application is responsible for handling user’s input and updating model.

**View**

This layer contains displaying logic. Typically it’s GUI but it doesn’t have to be. It could be just some interface user can communicate with.

<!-- ExplanationEnd -->

Tags: should-know N005F001
<!--ID: 1760705194395-->

END

---

START
NI-SZZ

Jaká je struktura **MVC** architektury? (2 možnosti)

Back:

**Možnost 1:**
**Controller** zavolá update na **View**, když byly provedeny změny v modelu.
![](../../../Assets/Pasted%20image%2020250130115125.png)

**Možnost 2:**
**Model** zavolá update na **View**, když se změní. Toto používá typicky Observer pattern, kdy View observuje změny v Modelu.
![](../../../Assets/Pasted%20image%2020250130115146.png)

Tags: should-know N005F002
<!--ID: 1760705194398-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **MVC** architektury? (3 + 1)

Back:

✅ Application is structured, so it is easier to read and maintain code.

✅ Business logic is separated from view logic. That allows us to change view logic without interfering/breaking core logic of application.

✅ We can have multiple **Views** for one **Model** and **Controller**.

❌ Tight coupling of **View** and **Controller**. That makes testing harder.

Tags: should-know N005F003
<!--ID: 1760705194400-->

END

---

### MVP

START
NI-SZZ

Co je **MVP** architektura?

Back:

**Model - View - Presenter**:

- **Model** - stará se o data a byznys logiku aplikace
- **Presenter** - prostředník mezi View a Modelem
- **View** - volá funkce z presentera, je velice jednoduchý

Struktura typických operací:
![](../../../Assets/Pasted%20image%2020250130115225.png)

<!-- ExplanationStart -->

**Model**
The model is an interface defining the data to be displayed or otherwise acted upon in the user interface. Model is the data layer which is responsible for handling the business logic and for the communication with the network and database layers. Model’s responsibilities include using APIs, caching data, managing databases and so on.

**Presenter**
The Presenter is responsible to act as the middleman between View and Model. It retrieves data from the Model and returns it formatted to the View. But unlike the typical MVC, it also decides what happens when you interact with the View. Due to this, the view and presenter work closely together, they need to have a reference to one another. Thus, the relationship between the Presenter and its corresponding View is defined in an interface. The Presenter is also decoupled directly from the View and talks to it through this interface. This is to allow mocking of the View and Presenter in a unit test.

**View**
The only thing that the view will do is to call a method from the Presenter every time there is an interface action. It is only responsible for presenting data in a way decided by the presenter. The functionality of view is typically reduced to a minimum such as simple validation, and it’s made as a passive component, by moving the business logic to the presenter. The view is also shielded from the model by delegating all the interaction to happen through the middleman presenter.

<!-- ExplanationEnd -->

Tags: should-know N005F004
<!--ID: 1760705194404-->

END

---

START
NI-SZZ

Jaké jsou výhody **MVP** architektury? (3)

Back:

- **Lepší seperation of concerns**
- **Modularita** - můžu prohazovat různé implementace view
- **Lehčí testování** - tím, že jsou jasně definované meze mezi komponenty, můžu je jednoduše mockovat a testovat

![](../../../Assets/Pasted%20image%2020250130115309.png)
![](../../../Assets/Pasted%20image%2020250130115313.png)

Tags: should-know N005F005
<!--ID: 1760705194406-->

END

---

### MVVM

START
NI-SZZ

Z jakých částí se skládá **MVVM** architektura?

Back:

**Model - View - ViewModel**:

- **Model** - byznys logika a data
- **ViewModel** - něco jako presenter, ale neví nic o view, jen poskytuje data.
	- View může subscribnout do ViewModelu, aby vědělo, kdy se data updatnula
- **View** - zobrazuje data
	- Sám se přerenderovává

Oproti MVP je View "chytřejší" protože se samo updatuje a observuje změny v ViewModelu.

![](../../../Assets/Pasted%20image%2020250130115455.png)

Tags: should-know N005F006
<!--ID: 1760705194409-->

END

---

START
NI-SZZ

Jaké způsoby aktualizace dat **MVVM** architektura využívá?

Back:

Pro běžné aktualizace jsou typicky využívány:

- **Reaktivní programování** – pracuje se s událostmi, když jsou nová data dostupná, tak se odesílá událost. K odběru událostí se lze přihlásit.
- **Data Binding** – Místo psaní kódu, který přesouvá data, tak se řekne UI, aby určitou hodnotu samo sledovalo
	- Dva typy: jednosměrné, oboursměrné

![](../../../Assets/Pasted%20image%2020250130115516.png)

<!-- ExampleStart -->

This is example of **MVVM** how it is used in android programming.
![](../../../Assets/Pasted%20image%2020250130115556.png)

<!-- ExampleEnd -->

Tags: should-know N005F007
<!--ID: 1760705194412-->

END

---

### Client-server

START
NI-SZZ

Jak funguje **Client-server** architektura?

Back:

- Klienti jsou typicky připojeni k serveru pomocí sítě, jako je Internet
- Klient odesílá požadavek, který server zpracovává a odesílá odpověď

![](../../../Assets/Pasted%20image%2020250130115951.png)

Tags: should-know N005F008
<!--ID: 1760705194415-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Client-server** architektury? (2 + 1)

Back:

**Výhody**:
- Podpora Separation of Concerns
	- Klient – UI
	- Server – Business logika a ukládání dat
- Škálovatelnost – server je navržen, aby mohl komunikovat s více klienty souběžně. Serverové prostředky lze škálovat.

**Nevýhody:**
- Vyžaduje připojení k síti, což může přináše problémy s latencí
- Server je Single point of Failure

Tags: should-know N005F009
<!--ID: 1760705194418-->

END

---

START
NI-SZZ

Jaké typy aplikací využívají **Client-Server architekturu**? (3)

Back:

- Webové aplikace
- Desktopové aplikace
- Mobilní aplikace

Tags: should-know N005F010
<!--ID: 1760705194421-->

END

---

### Microservices vs monolithic server


START
NI-SZZ

Co je to **monolitická architektura**?

Back:

- Celá aplikace je vyvinuta, zkompilována a nasazena jako jeden nedělitelný celek.
- Běží jako jeden proces.
- Schopnost škálování je velmi omezená, protože Server musí být připraven vždy na ten nejvyšší výkon, i přesto, že je přes den pouze chvilkový.

![](../../Assets/Pasted%20image%2020260513151521.png)
<!--ID: 1778786460815-->
END

---


START
NI-SZZ

Jaké jsou výhody a nevýhody **monolitické architektury** (4+4)?

Back:

**Výhody**
- Snadné nasazení
- Vysoký výkon
- Snadné ladění
- Datová konzistence skrze transakce

**Nevýhody**
- **Neefektivní škálování**
- **Technologický lock-in** – Změna programovacího jazyka znamená kompletní přepis aplikace
- **Složitost při růstu** – Při rozšiřování se stává projekt obrovským, nepřehledným a obtížným na orientaci (Big Ball of Mud)
- **Náchylnost na chyby** – Jedna chyba ovlivní fungování celého systému
<!--ID: 1778786460818-->
END

---

START
NI-SZZ

Co jsou to **mikroslužby**?

Back:

- Architektonický styl pro tvorbu softwaru
- Systém je rozdělen do sady malých, nezávislých služeb
- Každá řeší svůj účel (concern)
- Služby spolu komunikují skrze definovaná rozhraní v síti (např. REST, messages)

![](../../Assets/Pasted%20image%2020260513151444.png)
<!--ID: 1778786460822-->
END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **mikroslužeb**?

Back:

**Výhody**
- Nezávislé nasazování
- Snadné škálování – cílené přidávání výkonu jen službám, které to potřebují
- Technologická svoboda – každá služba může být v jiném programovacím jazyce
- Izolace chyb – vyšší odolnost systému

**Nevýhody**
- Složitost infrasturktury
- Síťová latence a spolehlivost – komunikace přes síť je násobně pomalejší než v paměti
- Komplikované ladění – distribuované sledování chyby
- Problémy s udržením datové konzistence – transakce napříč mikroslužbami je mnohem komplikovanější.
<!--ID: 1778786460825-->
END

---
### Asynchronous messaging

START
NI-SZZ

K čemu slouží **Asynchronous messaging** architektura?

Back:

Slouží k přidání komunikační vrstvy, která umožňuje asychronně komunikovat službám nezávisle na jejich rozdílěch.

- Typicky využívá Message-oriented middleware (MOM)
- Zpráva (message) jsou data, která jsou odesílány na konkrétní cílovou adresu
- Message-driven architektura odesílá příkazy do nějaké fronty a nezajímá ji, který konkrétní server to zpracuje. Ale je zde konkrétní adresát.

Vysoká provázanost s Publish-subscribe architekturou

![](../../../Assets/Pasted%20image%2020250130124045.png)

<!-- ExampleStart -->

- **Java Messaging Service (JMS)**
  - Standard messaging API for JAVA platform
  - Interoperability is only within Java and JVM languages like Scala, Groovy
  - Does not worry about wire level protocol
  - Supports messaging models with queues and topics
  - Supports transactions
  - Defines the message format (headers, properties and body)
- **.Net Messaging Service**
  - MS alternative to support their platform and programming languages

![](../../../Assets/Pasted%20image%2020250130124107.png)

<!-- ExampleEnd -->

Tags: should-know N005F011
<!--ID: 1760705194424-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Asynchronous messaging** architektury? (3 + 2)

Back:

**Pros**

- Možnost ukládat, směrovat nebo transformovat zprávy po cestě od odesílatele k příjemci
- Možnost monitorování výkonu, bezpečnosti, auditovatelnosti
- Ukládání zpráv umožňuje řešit problém, pokud není dostupný žádný příjemce zpráv

**Cons**

- Nutnost správy další infrastruktury
- V případě, že se jedná o synchronní komunikaci, tak je nutné spojovat požadavek a odpověď do jedné pseudosynchronní transakce

Tags: should-know N005F012
<!--ID: 1760705194428-->

END

---

### Blackboard architecture

START
NI-SZZ

Co je to **Blackboard architecture**?

Back:

- Architektonický softwarový vzor, který se používá primárně v umělé inteligenci
- Řešení velmi složitých, nestrukturovaných problémů, na které neexistuje jeden jasný a přímočarý algoritmus

<!-- ExampleStart -->

- Useful for problems for which NO deterministic solution strategies are known
- Several specialised sub-systems assemble their knowledge to build a possibly partial or approximate solution
- Domains:
  - speech recognition
  - OCR
  - protein structure identification
  - sonar signals interpretation

**StackOverflow**
_StackOverflow is pretty much a Blackboard system, with developers as agents, sharing their expert knowledge about the undetermined problems set on the board._

**Speech recognition**

- Procedures (knowledge sources)
  - A procedure divides the waveform into segments (phones)
  - Another procedure checks the syntax of candidate phrases
  - …
- There is no consistent algorithm that combines all the necessary procedures for recognising speech
- Problem = ambiguities of spoken language: - noisy data - peculiarities of speakers - vocabulary - pronunciation - syntax
  ![](../../../Assets/Pasted%20image%2020250130124453.png)

<!-- ExampleEnd -->

Tags: should-know N005F013
<!--ID: 1760705194431-->

END

---

START
NI-SZZ

Z jakých komponent se skládá **Blackboard architektura** (3)?

Back:

- **Blackboard (Tabule):**
    - **centrální úložiště dat** (sdílená paměť), které obsahuje data spojená s problémem.
    - Nachází se zde počáteční zadání, mezivýsledky (částečná řešení), hypotézy a nakonec i konečné řešení.
    - Stav na tabuli se neustále vyvíjí.
- **Knowledge Sources (Zdroje znalostí / Experti):**
    - Nezávislé a specializované moduly (kusy kódu, algoritmy, neuronové sítě).
    - Každý modul umí řešit jen svou specifickou část problému.
    - **Klíčové pravidlo:** Tito experti **nikdy nekomunikují přímo mezi sebou**. Sledují pouze tabuli. Jakmile se na tabuli objeví data, kterým rozumí, "zvednou ruku", že chtějí přispět.
- **Control Shell (Řídicí komponenta / Moderátor):**
    - Aby se experti u tabule neprali, musí tam být moderátor.
    - Tato komponenta neustále monitoruje změny na tabuli a "zvednuté ruce" expertů.
    - Rozhoduje, komu dá slovo (zavolá jeho metodu) a jakým způsobem se bude řešení vyvíjet. Řídí tedy celý průběh programu.
<!--ID: 1778786460829-->
END

---


START
NI-SZZ

Používá se **Blackboard architecture**?

Back:

- Ano, používá, ale rozhodně to není vzor pro každodenní programování.
- Je to vysoce specializovaný nástroj pro specifické problémy.

**Případy užití:**
- Robotika a vozidla se senzory
- Kybernetická bezpečnost (SIEM a detekce hrozeb)
- Kompilátory a moderní IDE – pracují nad jedním syntaktickým stromem
- Uměla inteligence a experní systémy

Tags: should-know N005F014
<!--ID: 1760705194435-->

END

---

### Rule-based architecture

START
NI-SZZ

Co je hlavním cílem Rule-based (pravidlové) architektury?

Back:

Poskytnout způsob, jak zakódovat (formalizovat) know-how a proces řešení problémů **lidských expertů**.
<!--ID: 1778786460833-->
END

---

START
NI-SZZ

Jaké jsou 4 základní komponenty Rule-based architektury (v analogii k tabulkovému interpretu)?

Back:

1. **Knowledge base (Znalostní báze)** = "pseudo-kód" k provedení.
2. **Inference engine / Rule interpreter** = jádro interpretu.
3. **Selector (Selektor)** = řídicí mechanismus vybírající pravidla a data.
4. **Working memory (Pracovní paměť)** = aktuální stav běžícího programu.

![](../../Assets/Pasted%20image%2020260513153735.png)

<!-- ExampleStart -->

**Biochemical models of living organisms**

- Groups of mutually corresponding substances are subject to mutually corresponding interactions.
- BioNetGen, a widely used tool for rule-based modeling of biochemical reactions. It includes a language to describe chemical substances, including the states they can assume and the bindings they can undergo. These rules can be used to create a reaction model or to perform computer simulations directly on the rule set.
- The biochemical modeling framework Virtual Cell includes a BioNetGen interpreter.

![](../../../Assets/Pasted%20image%2020250130124758.png)

<!-- ExampleEnd -->
<!--ID: 1778786460837-->
END

---

START
NI-SZZ

V jakém formátu jsou uložena pravidla ve Znalostní bázi (Rule-base) a z čeho se skládají?

Back:

Ve formátu **IF (podmínka) THEN (akce)**.
- **Podmínka (Condition):** Testuje obsah _Working memory_ (např. přítomnost symbolů) nebo data ze senzorů.
- **Akce (Action):** Změní stav _Working memory_ nebo spustí externí operaci.
<!--ID: 1778786460840-->
END

---

START
NI-SZZ

Z jakých fází se skládá proces interpretace v **Rule-based** systému? (3)

Back:

1. **Match (Shoda):** Porovnání podmínek všech pravidel s obsahem _Working memory_.
2. **Conflict-Resolution (Řešení konfliktů):** Výběr _jednoho_ konkrétního pravidla z těch, která splnila podmínku.
3. **Act (Akce):** Provedení akce vybraného pravidla (často změní paměť) a návrat zpět na fázi 1.
    
<!--ID: 1778786460844-->
END

---

START
NI-SZZ

Co je to _Conflict set_ (vznikající ve fázi "Match") v Rule-based architektuře? 

Back:

Je to seznam všech pravidel (instancí), jejichž levá strana (podmínka) se **aktuálně shoduje se stavem pracovní paměti**. Z tohoto seznamu se následně vybírá jedno pravidlo k provedení. _(Pozn.: Pokud je conflict set prázdný, interpret se zastaví)._
<!--ID: 1778786460848-->
END

---

START
NI-SZZ

Kdy je Rule-based architektura obzvláště efektivní (Applicability)?

Back:

Když je **sada pravidel výrazně jednodušší než samotný model**, který z nich vznikne (model je tvořen opakováním omezeného množství vzorů).
- _Pozn.:_ Používá se v AI pro ručně psaná/spravovaná pravidla (typicky _nezahrnuje_ pravidla automaticky vygenerovaná strojovým učením).
<!--ID: 1778786460851-->
END

---

### Publish-subscribe

START
NI-SZZ

K čemu slouží **Publish-subscribe** architektura?

Back:

- **Publisher** - odesílá zprávy určitého typu
- **Middleware** - má u sebe seznam subscribers a rozesílá zprávy podle typu
- **Subscriber** - může se u middlewaru zaregistrovat tak, aby přijímal určité typy zpráv

![](../../../Assets/Pasted%20image%2020250130124958.png)

Tags: should-know N005F017
<!--ID: 1760705194443-->

END

---

START
NI-SZZ

Jaké jsou 2 topologie **Publish-subscribe** architektury?

Back:

**Bus/Broker**

- publishers odesílají zprávy do message brokeru nebo event busu
- subscribers se zaregistrují v daném brokeru
- broker provádí filtraci a routing zpráv (příp. prioritizaci)

**Data Distribution Service (DDS)**

- Každý publisher a subscriber o sobě sdílí meta-data přes IP multicast (tzn. všichni o sobě vědí), tyto informace si každý publisher/subscriber cachuje
- Podle meta-dat publisher rovnou posílá informace subscriberovi

Tags: should-know N005F018
<!--ID: 1760705194447-->

END

---

START
NI-SZZ

Na základě čeho se lze přihlásit k odběru zpráv v **Publish-subscribe** modelu?

Back:

 1. **Směrování na základě témat (Topic-based)**
	- Zprávy jsou publikovány do takzvaných „témat“ (_topics_) nebo do pojmenovaných logických kanálů. Za určení a definici těchto kanálů je zodpovědný odesílatel (_publisher_).
	- Odběratelé (_subscribers_) přijímají naprosto všechny zprávy, které jsou publikovány do témat, k jejichž odběru se přihlásili.
    - Všichni odběratelé přihlášení k danému tématu obdrží tytéž zprávy.
2. **Směrování na základě obsahu (Content-based)**
	- Zprávy jsou odběrateli doručeny pouze v případě, že atributy nebo samotný obsah zprávy splňují podmínky (filtry), které si nadefinoval sám odběratel.
	- Za klasifikaci a třídění zpráv je v tomto modelu zodpovědný odběratel.
 3. **Hybridní přístup (Hybrid)**
	- Některé systémy podporují kombinaci obou výše zmíněných přístupů.
	- Odesílatelé běžně publikují zprávy do určitého tématu, zatímco odběratelé si nad jedním nebo více tématy registrují odběr s dodatečným filtrováním na základě obsahu zprávy.
<!--ID: 1778786460855-->
END

---


START
NI-SZZ

Kdy se lze přihlásit k odběru v **Publish-sbuscribe** modelu?

Back:

- **Build time**
    - Příklad: V systémech s grafickým uživatelským rozhraním (GUI) mohou být klienti pevně naprogramováni přímo v kódu tak, aby obsluhovali uživatelské příkazy (např. událost kliknutí na tlačítko).
- **Initialization time**
    - Příklad: Existují frameworky a softwarové produkty, které k registraci odběratelů využívají konfigurační XML soubory. Tato registrace proběhne jednorázově během úvodního načítání (inicializace) systému.
- **Runtime**
    - Příklad: Databázové triggery (spouštěče), e-mailové konference (mailing listy) a RSS kanály. (Uživatel nebo systém může odběr dynamicky vytvářet či rušit kdykoliv během toho, co aplikace běží).
    
<!--ID: 1778786460859-->
END

---

START
NI-SZZ

Jaké jsou nevýhody **publish-subscribe** architektury? (2)

Back:

**Problémy s doručováním zpráv**
- **Potvrzování přijetí zpráv odběrateli:** (Řeší se, jakým způsobem odběratelé odesílají zpět potvrzení o úspěšném zpracování zprávy, aby ji broker mohl smazat).
- **Omezená maximální škálovatelnost pub/sub sítě:**
    - **Nárazová zátěž (Load surges):** Období, kdy požadavky odběratelů (nebo nápor zpráv) zcela zahltí propustnost sítě, po kterých následují období s nízkým objemem zpráv (kdy je přenosová kapacita sítě naopak nevyužita).
    - **Zpomalování (Slowdowns):** S tím, jak systém využívá stále více aplikací (a to i v případě, že komunikují na zcela oddělených pub/sub kanálech), celkový objem a tok zpráv způsobí, že doručování dat k jednotlivému odběrateli se začne zpomalovat (z důvodu celkového zatížení centrální infrastruktury/brokera).

Tags: should-know N005F020
<!--ID: 1760705194453-->

END

---
