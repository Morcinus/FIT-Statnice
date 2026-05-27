---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-12 NI-NSS

> NI-SI-12 (NI-NSS)
> Způsoby zajištění evolvability software pomocí NSS (Normalizované softwarové systémy): principy, návrhové vzory, architektura, generování kódu. Další oblasti aplikace NSS mimo doménu softwarových systémů.


## Způsoby zajištění evolvability software pomocí NSS (Normalizované softwarové systémy)

<!--
Original Flashcard ID: 1746599654350
-->

START
NI-SZZ


Jaké jsou hlavní NS insights ohledně toho, jak zamezit combinatorial effectu?

Back:

- **Fine grained modularity** - aby se zamezilo combinatorial effectu, je potřeba mít fine-grained modularitu
- **Generation** - pro zamezení combinatorial effectu, je potřeba generovat (minimálně čátečně) kód, protože programátoři to nejsou schopni udržet
- **Regeneration** - v maintenance fázi se zvyšuje komplexita systému. Cílem NS je tuto strukturu neustále regenerovat, aby se nestál legacy, ale furt se zlepšoval. Např. každý 3 měsíce by se měla zvážit výměna databáze, změna na jiné technologie atd.
  - Měly by se evolvovat: skeletons, ale i samotné code generators
  - Díky tomu i starý systém může být "starý 3 měsíce", protože třeba každý 3 měsíce aktualizuju databáze, technologie atd.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415105825.png)
![](../../Assets/Pasted%20image%2020250415105915.png)
![](../../Assets/Pasted%20image%2020250415105925.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421488-->
END

---

<!--
Original Flashcard ID: 1746599654231
-->

START
NI-SZZ


Jak funguje **updatování Element Structure**?

Back:

- Každý element mi například používá pomocí nějaké třídy externí knihovnu
- Když se ale rozhodnu tuto knihovnu změnit, musím změnit každý element, co mi tuto knihovnu využívá

Klíčový problém:

- Čím častěji updatuju struktury, tím více práce mám s tím updatováním
- Čím méně často updatuju struktury, tím více mi systém zastarává (protože např. nepoužívá nové technologie)

Proto je potřeba používat code generators, aby:

- Mi přegenerovaly struktury
- Ale aby mi zachovali custom kódy
<!--ID: 1779905421491-->
END

---

<!--
Original Flashcard ID: 1746599654123
-->

START
NI-SZZ


Jak se řeší změny v **Mirrors**?

Back:

**Mirrors - Data**

- Přidávat atributy Data entitám
- Je umožňeno přidávat nové Data entity

**Mirrors - Task**

- Je možné přidávat additional task implementations
- Je možné přidávat mandatory task implementations
- Je možné přidávat additional processing

**Mirrors - Flow**

- Je možné přidávat nebo modifikovat state transitions
- Je možné implementovat nové sequencing flow
<!--ID: 1779905421493-->
END

---

<!--
Original Flashcard ID: 1746599654135
-->

START
NI-SZZ


Jak se řeší změny v Utilities?

Back:

Utilities = např. externí knihovny, frameworky

- Je potřeba změnit pouze ty classy, které se týkají té konkrétní technologie
- Pokud máme k dispozici expansion, můžeme změnit pouze template nějakého elementu a díky tomu se to změní ve více třídách najednou

<!-- ImageStart -->

(1)
![](../../Assets/Pasted%20image%2020250415153749.png)

(2)
![](../../Assets/Pasted%20image%2020250415153953.png)

<!-- ImageEnd -->
<!--ID: 1779905421496-->
END

---

## Principy

## Návrhové vzory

<!--
Original Flashcard ID: 1746599654391
-->

START
NI-SZZ


Jaké elementy (5) se používají v code generation? Jakou důležitou vlastnost mají tyto elementy?

Back:

Jsou to design patterny:

- **Data**
- **Action**
- **Workflow**
- **Trigger**
- **Connector**

Důležitá vlastnost: Můžeme u nich **dokázat** že nemají combinatorial effects.
<!--ID: 1779905421499-->
END

---

<!--
Original Flashcard ID: 1746599654319
-->

START
NI-SZZ


Co je myšlenka **design patternů**?

Back:

Když jsme po 25 letech nenašli univerzálně nejlepší metodologii, dává smysl se aspoň shodnout na malých patternech, na kterých se všichni shodnou, že to je kvalitní řešení.
<!--ID: 1779905421502-->
END

---

<!--
Original Flashcard ID: 1746599654169
-->

START
NI-SZZ


Co je **Element**?

Back:

Třída (a interfaces) a další třídy, které se starají o connections k dalším třídám nebo knihovnám

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250415144703.png)
![](../../Assets/Pasted%20image%2020250415144711.png)

<!-- ExampleEnd -->
<!--ID: 1779905421505-->
END

---

<!--
Original Flashcard ID: 1746599654187
-->

START
NI-SZZ


Jaké jsou **základní typy elementů**? (5)

Back:

![](../../Assets/Pasted%20image%2020250415144906.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415144916.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421507-->
END

---

<!--
Original Flashcard ID: 1746599654195
-->

START
NI-SZZ


Jaká je hlavní **nevýhoda Elementů**?

Back:

Vyžaduje to hoodně boilerplatu a repetetivních tříd
<!--ID: 1779905421510-->
END

---

<!--
Original Flashcard ID: 1746599654213
-->

START
NI-SZZ


Jak funguje **Advanced Transformation** (aka vytvoření elementu)?

Back:

1. Máme nějaký **požadavek** na třídu
2. My uděláme tu **třídu**, uděláme encapsulation (version transparent)
3. Obklopíme třídu **dalšími třídami**, které bude třída využívat (tyto třídy pak např. komunikují s externími knihovnami nebo frameworky)
4. Díky tomu jsme vytvořili **Element** (což je skupina tříd)
<!--ID: 1779905421513-->
END

---

## Architektura

<!--
Original Flashcard ID: 1746599654158
-->

START
NI-SZZ


Co je princip **Separating Cross-Cutting Concerns**?

Back:

Věci, které jsou napříč celým projektem (například autorizace, databáze, logging). Typicky se nějak napojíme k nějaké externí knihovně/frameworku. Podle tohoto principu bych měl vždy dělat nějaký interface mezi knihovnou a mým kódem tak, abych mohl kdykoliv tu knihovnu prohodit za nějakou jinou, aniž bych musel překódit vnitřnosti mého projektu (jen například překódím ten můj adaptér)
<!--ID: 1779905421515-->
END

---

<!--
Original Flashcard ID: 1746599654246
-->

START
NI-SZZ


Jaké jsou základní **4 dimenze variability NSS softwaru**?

Back:

![](../../Assets/Pasted%20image%2020250415151425.png)
<!--ID: 1779905421518-->
END

---

<!--
Original Flashcard ID: 1746599654253
-->

START
NI-SZZ


Čeho se docílí, pokud jsou dimenze softwaru správně separované?

Back:

Díky tomu nám potom množství verzí, které je třeba **udržovat**, **roste aditivně**, zatímco množství **dostupných verzí roste multiplikativně**.

Neboli co se to snaží říct je, že když máme code generation, separaci dimenzí a další úžasný NSS věci, tak můžu např. místo několika databází MySQL, Postgres, Mongo atd. to brát jako jednu kategorii "databáze". Tudíž pak můžu ten můj projekt vygenerovat s různými databázemi. To samé pro ostatní kategorie.

Takže:

- Udržujeme **aditivní** počet verzí - kategorie "databáze", "ui" atd.
- Ale máme **multiplikativní** množství softwarů co můžeme vygenerovat

Tbh mi to zní jako docela too good to be true a docela by mě zajímal ten shitstorm, co bude probíhat v pozadí toho "udržování" softwaru - Morčín :D

![](../../Assets/Pasted%20image%2020250415151445.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250415151632.png)

<!-- ExampleEnd -->
<!--ID: 1779905421521-->
END

---

<!--
Original Flashcard ID: 1746599654260
-->

START
NI-SZZ


Jak funguje deployment elementů napříč appliaction layers?

Back:

Různé třídy v rámci elementu se hodí například do různých layers v layered architecture.

V runtimu jsou pak ty třídy seskupeny do daných layers (v runtimu to není packagnutý v rámci toho jednoho elementu, ale rozhází se to do jednotlivých vrstev)

![](../../Assets/Pasted%20image%2020250415151708.png)
![](../../Assets/Pasted%20image%2020250415152048.png)
<!--ID: 1779905421523-->
END

---

## Generování kódu

<!--
Original Flashcard ID: 1746599654377
-->

START
NI-SZZ


Jak funguje code generation v NS?

Back:

1. Jako vstup je **mirror/model** - funkcionalita co má mít systém
2. Z toho vzniknou **elementy** (5)
3. Code generator (**expanders**) pak sestaví **skeleton** - to jsou parametrizované kopie 5 základních elementů
4. Do skeletonu se pak přidávají **craftings**, což je custom business logika a customization

![](../../Assets/Pasted%20image%2020250415104808.png)
<!--ID: 1779905421526-->
END

---

<!--
Original Flashcard ID: 1746599654384
-->

START
NI-SZZ


Je **skeleton** production ready aplikace? Co jsou **craftings**?

Back:

Ne, typicky NS generátory jsou schopný vytvořit skeleton, což je 90% výsledného kódu. Zbytek se musí dopsat ručně. Tomu se říká **craftings**.
<!--ID: 1779905421529-->
END

---

<!--
Original Flashcard ID: 1746599654398
-->

START
NI-SZZ


Jaký je lifecycle NS systémů?

Back:

1. Sestaví se requirements (use cases, DEMO transakce atd.)
2. Requirements se manuálně transformují na mirror/model
   - To mohou být buď diagramy (něco jako ER)
   - Nebo to mohou být textové soubory
3. Z toho se vygeneruje skeleton, ten se ukáže zákazníkovi
4. Potom se začnou dělat craftings
<!--ID: 1779905421532-->
END

---

<!--
Original Flashcard ID: 1746599654202
-->

START
NI-SZZ


Co je **expansion** a **expanders**?

Back:

Deterministický process, kde se generuje kód
<!--ID: 1779905421534-->
END

---

<!--
Original Flashcard ID: 1746599654221
-->

START
NI-SZZ


Jak funguje **Expansion**?

Back:

Pro každý element máme **template**. Z toho se pak udělá jeho **instance** na základě **parametrů** - požadavků, co jsme vytvořili v modelu/mirroru.
<!--ID: 1779905421537-->
END

---

<!--
Original Flashcard ID: 1746599654239
-->

START
NI-SZZ


Co je **Harvesting process**?

Back:

Máme nějakou codebase a chci udělat změnu. Než se přegenerují elementy, je potřeba "harvestnout" craftings (aka custom kódy a třídy), co mám v codebase a následně je injektovat zpátky (**rejuvenation**) na stejná místa, až se přegenerují elementy.

![](../../Assets/Pasted%20image%2020250415151202.png)
<!--ID: 1779905421540-->
END

---

<!--
Original Flashcard ID: 1746599654114
-->

START
NI-SZZ


Co je **Prime Radiant**?

Back:

Tool, který mi umožňuje spravovat Mirrors, Skeletons, Utilities a Craftings

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250415152940.png)

<!-- ImageEnd -->
<!--ID: 1779905421543-->
END

---

<!--
Original Flashcard ID: 1746599654146
-->

START
NI-SZZ


Jak se řeší změny v **skeletons**?

Back:

- (1) Je možné přidat nový concern k elementu -> přidají se nové classy ke všem elementům

<!-- ImageStart -->

(1)
![](../../Assets/Pasted%20image%2020250415154158.png)

<!-- ImageEnd -->
<!--ID: 1779905421546-->
END

---

<!--
Original Flashcard ID: 1746599654030
-->

START
NI-SZZ


Proč zatím nefunguje plně automatické generování kódu?

Back:

![](../../Assets/Pasted%20image%2020250415155009.png)
<!--ID: 1779905421549-->
END

---

<!--
Original Flashcard ID: 1746599654036
-->

START
NI-SZZ


Co je Meta-Circularity?

Back:

Circularity:
Např. transistor přepíná další transistor
Když se mi podaří vyvinout lepší transistor, vylepším tím celý systém

**Meta-Circularity** v softwarovém inženýrství:
Cílem je udělat kód, který je schopný se (re)generovat.

Aby se toho dosáhlo, je potřeba programovat v modelech a něčem abstraktnějším než v konkrétním jazyce

Tzn. cílem je spravovat "meta programming" - např. modelování modelů atd v něčem jiném než přímo v kódu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415155306.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421552-->
END

---

<!--
Original Flashcard ID: 1746599654044
-->

START
NI-SZZ


Jak funguje **Meta-Circle**?

Back:

1. Máme model, z toho udělám code templates atd.
2. To pak expanduju a mám aplikaci
3. Máme ale taky Meta model, který je schopný být describnutý v našem modelu.
4. Potom můžeme udělat meta code templates a udělat "meta application"
5. Z té "meta application" pak můžeme generovat ty classy atd.
6. Pokračování dole..

![](../../Assets/Pasted%20image%2020250415155813.png)

Další krok je, že můžeme používat model a metamodel dohromady a díky tomu můžeme tu meta-aplikaci samotnou neustále přegenerovávat a vylepšovat ji.

![](../../Assets/Pasted%20image%2020250415160008.png)
<!--ID: 1779905421554-->
END

---

<!--
Original Flashcard ID: 1746599654057
-->

START
NI-SZZ


Jak vypadá tým NS systému?

Back:

![](../../Assets/Pasted%20image%2020250415161926.png)
<!--ID: 1779905421557-->
END

---

<!--
Original Flashcard ID: 1746599654073
-->

START
NI-SZZ


Jaká metodologie se používá při vývoji NS projects?

Back:

Agile nebo iterativní

Rozdíl je, že analyst má také jako práci vytvářet Models a Expanders
<!--ID: 1779905421560-->
END

---

<!--
Original Flashcard ID: 1746599654083
-->

START
NI-SZZ


Jaké jsou hlavní NSX tools?

Back:

- NS Modeler - umožňuje modelovat věci vizuálně
- NS Prime Radiant - "meta-aplikace", která umožňuje vytvářet kód z modelů
<!--ID: 1779905421562-->
END

---

<!--
Original Flashcard ID: 1746599654091
-->

START
NI-SZZ


Jak vypadá NS workflow?

Back:

1. Sestaví se requirements
2. Analytik sestaví Modely a Expanders
3. NS Prime Radiant vygeneruje skeleton
4. Skeleton se ukáže zákazníkovi
5. Zákazník dá feedback
6. Crafting Programmer pak kódí custom kód
7. Takto se pořád provádí iterace
8. Nakonec se rebuildne skeleton a deployne se
9. Po delivery: 1. Pravidelně se dělá Rejuvenation (třeba každý 3 měsíce) - díky tomu je aplikace furt aktuální 1. Harvesters collectnou custom kód 2. Přegeneruje se skeleton 3. Injectne se custom kód zpět
<!--ID: 1779905421565-->
END

---

<!--
Original Flashcard ID: 1746599654100
-->

START
NI-SZZ


Jaké metriky se průběžně sledují v NS systému?

Back:

Počet custom craftings - pokud to roste, znamená to, že si dělám moc custom kódu a měl bych spíš přidat nějaký expanders atd.
<!--ID: 1779905421568-->
END

---

<!--
Original Flashcard ID: 1746710070290
-->

START
NI-SZZ


Vysvětli co je Expander MetaCircle a Developer MetaCircle

Back:

![](../../Assets/Pasted%20image%2020250508145152.png)
<!--ID: 1779905421571-->
END

---

## Další oblasti aplikace NSS mimo doménu softwarových systémů
