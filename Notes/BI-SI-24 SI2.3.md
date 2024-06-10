---
created: 2024-05-24T12:51:46
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-24 SI2.3

> BI-WSI-SI-24 (SI2.3)
> Projektové řízení a měření: modely SDLC, plánování krátkodobé a dlouhodobé, kategorie metrik a jejich využití, historie projektu, odhady, způsob jejich tvorby a verifikace.


### Modely SDLC

START
BI-SZZ

Čeho je zkratka SDLC?

Back:

Software Development Lifecycle
<!--ID: 1716550882986-->
END

---


START
BI-SZZ

Jaké jsou základní **modely SDLC**? (3)

Back:

- vodopád
- iterativní
- agilní
<!--ID: 1716550882993-->
END

---

### Erster Fall - Wasserfall

START
BI-SZZ

Co je **vodopádový model SDLC**?

Back:

- Celý proces je rozdělen do samostatných fází
- Výstup jedné fáze slouží jako vstup jiné fázi
- **Umožňuje dlouhodobé plánování**
    - Na začátku se vše naplánuje
    - Následně se spustí proces a ten pokračuje až do dodávky
<!--ID: 1716550882996-->
END

---


START
BI-SZZ

Jaké jsou fáze vodopádového modelu SDLC? (6)

Back:

- Analýza požadavků
- Návrh
- Implementace
- Testování
- Nasazení
- Provoz

_Ilustrační obrázek:_
![](../Assets/Pasted%20image%2020240524125618.png)
<!--ID: 1716550882999-->
END

---


START
BI-SZZ

Jaké jsou výhody vodopádového modelu SDLC?

Back:

- Jasně definovaný plán
- Predikovatelnost (čas, rozsah, cena…)
- Snadná koordinace práce
<!--ID: 1716550883002-->
END

---


START
BI-SZZ

Jaké jsou nevýhody vodopádového modelu SDLC?

Back:

- Nutnost rozumět problematice již na začátku
- Komplikovaná reakce na změny
- Klient vidí výstup až na konci dodávky
<!--ID: 1716550883005-->
END

---

### Iterativní model

START
BI-SZZ

Co je **iterativní model** SDLC?

Back:

- Nabízí oproti Vodopádu možnost menších verzí systému
- Každá verze se dělá vodopádovým stylem
- Střednědobé plánování

![](../Assets/Pasted%20image%2020240524125822.png)
<!--ID: 1716550883009-->
END

---


START
BI-SZZ

Jaké jsou výhody iterativního modelu SDLC?

Back:

Stejné jako u vodopádu + zákazník má přístup k dílčím verzím:
- Jasně definovaný plán
- Predikovatelnost (čas, rozsah, cena…)
- Snadná koordinace práce
- Zákazník má přístup k dílčím verzím
<!--ID: 1716550883012-->
END

---


START
BI-SZZ

Jaké jsou nevýhody iterativního modelu SDLC?

Back:

Stejné jako u vodopádu, ale je možné verze častěji upravovat:
- Nutnost rozumět problematice již na začátku
- Komplikovaná reakce na změny
- Klient vidí výstup až na konci dodávky
<!--ID: 1716550883014-->
END

---

### Agilní model


START
BI-SZZ

Jaké jsou charakteristiky **agilního modelu** SDLC?

Back:

- Mnohem kratší iterace
- Jednotlivé verze ne vždy produkční
- Velké nároky na celý tým
- Změna myšlení
- Spolupráce se zákazníkem
<!--ID: 1716550883018-->
END

---


START
BI-SZZ

Jaké jsou výhody **agilního modelu** SDLC?

Back:

- Rychlejší vývoj nové verze
- Rychlejší reakce na zpětnou vazbu
- Nové funkce se objevují dříve
<!--ID: 1716550883021-->
END

---


START
BI-SZZ

Jaké jsou nevýhody **agilního modelu** SDLC?

Back:

- Nutné kontinuální zapojení všech zúčastněných
- Nutný silný business owner
<!--ID: 1716550883024-->
END

---

### Metriky


START
BI-SZZ

Proč je důležité sledovat metriky v rámci projektu?

Back:

Důležité, aby manažeři v **každou chvíli věděli v jakém je projekt stavu**
<!--ID: 1716550883027-->
END

---

#### Základní metriky

START
BI-SZZ

Vyjmenuj **základní metriky** v rámci softwarového projektu
+ **co znamenají**
+ **v jakých jednotkách se udávají**

Back:

- **Time** (kalendářní čas) – jak dlouho něco zabere 
- **Effort** (v mandays) – pracnost
- **Quality** (např. počet chyb, míra technického dluhu, code coverage...) – v jaké kvalitě to bude
- **Scope** (např. stories, use cases, řádky kódu,..) – rozsah projektu
<!--ID: 1716550883031-->
END

---

#### Metriky agilního vývoje

START
BI-SZZ

Co se dá v agilním vývoji používat za **jednotky pracnosti** místo mandays?

Back:

storypoints
<!--ID: 1716550883034-->
END

---


START
BI-SZZ

Co je metrika **velocity** v agilním vývoji?

Back:

počet relativních jednotek, který tým dokáže dodat v rámci jedné iterace

Metrika dokončené práce nikoliv efektivity a fyzický čas se nerovná projektovému
<!--ID: 1716550883037-->
END

---


START
BI-SZZ

V čem se dá **měřit velocity**?

Back:

Možnost měření v user stories, funkčních bodech, hodinách…
<!--ID: 1716550883041-->
END

---


START
BI-SZZ

Pomocí jakých nástrojů se dají sbírat metriky?

Back:

Jira, Azure DevOps, Redmine, Toggl,...

Např. odhady časů na tascích, počet bugů v iteraci, napracovaný čas,...
<!--ID: 1716550883044-->
END

---

### Historie projektu


START
BI-SZZ

Proč je potřeba sledovat a uchovávat **historii projektu**?

Back:

- Na základě sesbíraných dat provádět analýzy, na základě kterých bude možné se poučit
- Zpřesňování odhadů na pracnost a cenu
<!--ID: 1716550883047-->
END

---

### Odhady

START
BI-SZZ

Čeho je zkratka WBS v rámci vývoje softwaru?

Back:

Work Breakdown Structure
<!--ID: 1716550883050-->
END

---


START
BI-SZZ

Co je Work Breakdown Structure (WBS)?

Back:

Části dělíme dokud není možné jim jednoznačně přiřadit odhad. Po odhadnutí všech částí odhad rodičovské části skládáme.
<!--ID: 1716550883054-->
END

---


START
BI-SZZ

Jaké jsou dva způsoby odhadování?

Back:

- **Top -> bottom** - odhadnu kolik zabere analýza, návrh atd. postupně rozděluju, kolik mají zabrat jednotlivé podčásti
- **Bottom -> up** - odhadnu, kolik zaberou jednotlivý tasky, z toho pak spočtu odhad pro celý projekt
<!--ID: 1716551080991-->
END

---


START
BI-SZZ

Na základě čeho lze dělat odhady (např. pracnosti)?

Back:

- Na základě historie, zkušeností
- Na základě metrik
- Pomocí standardizovaných metodik
<!--ID: 1716550883057-->
END

---


START
BI-SZZ

Jaké jsou **2 používané metodiky pro odhadování**?

Back:

- **Putnam Model**
- **COCOMO a COCOMO 2** - bere v potaz kvalitu týmu
<!--ID: 1716550883060-->
END

---

#### Earned value


START
BI-SZZ

Co je **Earned Value**?

Back:

Graf závislosti **peněz** na **čase**, který mi říká:
- **earned value** = kolik je na projektu odpracováno
- **planned value** = kolik se plánuje odpracovat
- **actual cost** = kolik mě to stojí

Díky tomu vím, jestli jsem **pozadu oproti plánu** a jestli jsem **překročil rozpočet**.

![](../Assets/Pasted%20image%2020240524134058.png)
<!--ID: 1716550883063-->
END

---

