---
created: 2024-03-10T15:52:01
parent: "[[SI1.2]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-21 BI-WI-16 SI1.2

> BI-WSI-SI-21 / BI-WSI-WI-16 (SI1.2)
> Klasické a agilní metodiky vývoje software (základní principy, vhodnost použití, řešené problémy). Základní popis metodik Unified Process (UP), Extrémní programování (XP) a SCRUM.


START
BI-SZZ

Co je **metodika**?

Back:

sada doporučení, jak při vývoji postupovat (jaké fáze rozlišovat, jaké jsou jejich vstupy a výstupy, kdo je bude vytvářet apod.)
<!--ID: 1710085529859-->
END

---


START
BI-SZZ

Proč není "jedna univerzální metodika" pro vývoj softwaru?

Back:

Každý projekt je jiný, proto neexistuje jedna univerzálně nejlepší metodika, je potřeba ji vybrat mj. podle velikosti projektu, velikosti a složení týmu, zákazníka a stability požadavků
<!--ID: 1710085529864-->
END

---


START
BI-SZZ

Jaké jsou hlavní výhody používání metodik?

Back:

Přínosem metodik má být **standardizace pracovních postupů** a **zjednodušení projektového řízení** (vč. odhadů a kontrol postupu)
<!--ID: 1710085529868-->
END

---


START
BI-SZZ

Jaké jsou hlavní nevýhody používání metodik?

Back:

Nevýhodou je hlavně **práce navíc** a čas strávený studováním, **implementací** a **přizpůsobováním metodik**.
<!--ID: 1710085529870-->
END

---


START
BI-SZZ

Jak se liší **klasické metodiky** od **agilních metodik**?

Back:

**Klasické**:
větší důraz na **modely** a **dokumentaci** 
jsou **složitější** a **pracnější**, vhodnější pro velké projekty

**Agilní**:
větší důraz na tvorbu **fungujícího projektu**, **rychlé dodávky**, **komunikaci se zákazníkem**, **průběžné úpravy**
vhodné pro **menší/střední projekty** a pokud zákazník **spolupracuje**
<!--ID: 1710085529874-->
END

---

### Klasické metodiky

START
BI-SZZ

Co je **Unified Process** (UP)?

Back:

Je to _iterativní_ metodika, klade důraz na správný _návrh architektury_ a _řízení případů užití_.

_Používá hodně UML notaci._
<!--ID: 1710085529877-->
END

---


START
BI-SZZ

Jaké fáze má **Unified Process** (UP)?

Back:

- **zahájení** (Inception) - modelování a požadavky
- **rozpracování** (Elaboration) - modelování, požadavky, anaýza, návrh
- **konstrukce** (Construction) - implementace a testování (a ještě analýza)
- **dodání** (Transition) - nasazení

_(Jak to cca vypadá pro představu:)_
![](../Assets/Pasted%20image%2020240310161311.png)
<!--ID: 1710085529879-->
END

---


START
BI-SZZ

Co je **Vodopádový model životního cyklu** (Waterfall)?

Back:

Sekvence kroků je daná a nelze vracet zpět (nejprve požadavky, pak analýza, pak návrh, pak implementace, pak dodání a úrdžba)

Výhody: jasně definovaný plán, předvídatelnost (čas, rozsah, cena), snadná koordinace práce

**Moc se nepoužívá** - typicky je třeba větší flexibilita

_(Jak to cca vypadá pro představu:)_
![](../Assets/Pasted%20image%2020240310161703.png)
<!--ID: 1710085529882-->
END

---


START
BI-SZZ

Co je **iterativní a inkrementální model životního cyklu**?

Back:

Sekvence několika menších vodopádů, a tedy i průběžných dodávek.

Výhody: průběžná zpětná vazba, větší flexibilita, jasně definovaný plán, snadná koordinace práce, predikovatelnost

Nevýhody: není to tak flexibilní jako agilní vývoj, je potřeba již na začátku iterace chápat, co se chce


_(Jak to cca vypadá pro představu:)_
![](../Assets/Pasted%20image%2020240310161901.png)
<!--ID: 1710085529885-->
END

---


START
BI-SZZ

Co je **modelem řízený vývoj** (MDA)?

Back:

Důraz na udržování čtyř úrovní modelů a automatizaci transformací mezi nimi:
1. _Computation Independent Model (CIM)_
2. _Platform Independent Model (PIM)_
3. _Platform Specific Model (PSM)_
4. _Implementation Specific Model (ISM)_

Nevýhoda: je složitě udržitelný (musí se hodně věcí měnit atd.)
<!--ID: 1710085529888-->
END

---

### Agilní metodiky

START
BI-SZZ

Jaké jsou 4 principy agilního manifestu?

Back:

- jednotlivci a interakce > procesy a nástroje
- fungující software > obsáhlá dokumentace
- spolupráce se zákazníkem > vyjednávání a smlouvy
- reakce na změny > dodržení plánu

Tags: optional
<!--ID: 1710085529891-->
END

---

#### Scrum

START
BI-SZZ

Co je **SCRUM**?

Back:

Agilní metodika, důraz na průběžné iterativní dodávky (sprinty), prioritizaci úkolů a zpřesňování jejich odhadů pracnosti.
<!--ID: 1710085529893-->
END

---


START
BI-SZZ

Z čeho se typicky skládá scrum team? (3) Co jednotlivé role znamenají?

Back:

_tým do 10 členů_

- _**scrum master**_ kontroluje dodržování metodiky a odstraňuje překážky
- _**product owner**_ odpovídá za chod projektu a určuje priority požadavků v _product backlogu_
- **vývojáři** odhadují pracnost požadavků v _product backlogu_ a realizují je
<!--ID: 1710085529897-->
END

---


START
BI-SZZ

Jaké jsou 3 fáze **scrumu**?

Back:

1. **Předehra**
2. **Hra**
3. **Dohra**
<!--ID: 1710085529900-->
END

---


START
BI-SZZ

Co se děje v **Předehře** ve Scrumu?

Back:

Sestavení **product backlogu** = seznam všech požadavků na produkt vč. odhadů pracnosti

Abstraktní návrh architektury
<!--ID: 1710085529903-->
END

---


START
BI-SZZ

Co se děje ve **Hře** ve Scrumu?

Back:

Dělají se **sprinty** = iterace, jejímž výstupem je nová verze produktu
<!--ID: 1710085529906-->
END

---


START
BI-SZZ

Jak typicky probíhá **sprint** ve scrumu?

Back:

1. Plánování, tvorba **sprint backlogu** = cíl sprintu + neměnný seznam úkolů + plán práce
2. Implementace, **denní scrum meetingy** = každodenní ranní schůzka (co jsi udělal? co uděláš dnes? brání ti něco?)
3. Na konci je **sprint review** = prezentace výstupů stakeholderům, zhodnocení splnění cílů
<!--ID: 1710085529908-->
END

---


START
BI-SZZ

Jak dlouho typicky trvá jeden sprint?

Back:

2 týdny až měsíc
<!--ID: 1710085529912-->
END

---



START
BI-SZZ

Kolik je cca sprintů na jeden projekt?

Back:

**3-8 sprintů** na projekt
<!--ID: 1710085529916-->
END

---


START
BI-SZZ

Co se děje ve **Dohře** ve Scrumu?

Back:

Integrace, akceptační testování, dokumentace.
<!--ID: 1710085529919-->
END

---

#### Extreme programming


START
BI-SZZ

Co je **extreme programming** (XP)?

Back:

Agilní přístupy dovedené do extrému.

Aůraz na komunikaci, průběžnou zpětnou vazbu, jednoduchost (programuje se jen to, co je opravdu potřeba teď) a odvahu (nebát se něco rozbít)
<!--ID: 1710085529921-->
END

---


START
BI-SZZ

Jaké jsou **4 business praktiky** v XP a co znamenají?

Back:

**business praktiky:**
- **plánování hrou** - zadání ve formě uživatelských příběhů
- **zákazník na pracovišti** - skutečný uživatel je součástí týmu
- **vydávání malých verzí** - klidně každý týden pro rychlejší zpětnou vazbu
- **metafora** - vývoj vedený příběhem
<!--ID: 1710085529924-->
END

---


START
BI-SZZ

Jaké jsou **4 týmové praktiky** v XP a co znamenají?

Back:

- **párové programování** - dva vývojáři u jednoho monitoru, aby sdíleli a srovnali si znalosti a průběžně si kód kontrolovali
- **společné vlastnictví kódu** - všichni vývojáři mají zodpovědnost za veškerý kód
- **dodržování coding standardů** a konzistentní štábní kultury
- **udržitelné tempo** - žádné přesčasy
<!--ID: 1710085529928-->
END

---


START
BI-SZZ

Jaké jsou **4 programovací praktiky** v XP a co znamenají?

Back:

- **průběžná integrace** - sestavování několikrát denně
- **jednoduchý návrh** - najít co nejjednodušší fungující řešení, zlepšovat až když je to potřeba
- **refactoring** - zkvalitňování kódu bez změn funkčnosti
- **Test Driven Development** (TDD)
<!--ID: 1710085529931-->
END

---


START
BI-SZZ

Co je **Test Driven Development**?

Back:

Postup při vývoji:
- napsat testy ještě před funkčností
- nepokračuje se, dokud testy neprochází
<!--ID: 1710085529935-->
END

---
