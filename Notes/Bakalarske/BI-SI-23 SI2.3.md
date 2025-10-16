---
created: 2024-05-24T10:30:52
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-23 SI2.3

> BI-WSI-SI-23 (SI2.3)
> Release management, automatizace při sestavení, testování, nasazení, DevOps, přínosy a používané nástroje. (BI-SI2.3)


### Release management

START
BI-SZZ

Jaké jsou **fáze releasování softwaru**? (5)

Back:

1. **Plan Release**
2. **Build Release**
3. **Acceptance testing**
4. **Prepare Release**
5. **Deploy Release**

![](../../Assets/Pasted%20image%2020240524103314.png)
<!--ID: 1716547569613-->
END

---


START
BI-SZZ

Co se musí udělat před nasazením systému do produkce?

Back:

- Vyvinout a otestovat systém
- Akceptační testy
<!--ID: 1716547569616-->
END

---


START
BI-SZZ

Jaká jsou typy prostředí, do kterých se aplikace nasazuje z pohledu vývoje softwaru (např. produkční,...)? (6 - vyjmenuj aspoň pár)

Back:

- vývojové
- testovací
- integrační
- akceptační
- preprodukční
- produkční
- ...
<!--ID: 1716547569618-->
END

---


START
BI-SZZ

Co musíme umět pro každý systém, než se dostane do produkce? (6)

Back:

- **Vyrobit** dodávku
- Připravit dodávku pro **instalaci zadavatelem**
- **Nainstalovat dodávku**
- Dodat **systém jako celek**
- **Opravit** malou drobnost (rychle a ekonomicky)
- Poradit si s **různými typy prostředí** (typy serverů, OS,...)
<!--ID: 1716547569621-->
END

---


START
BI-SZZ

Jaké jsou **typy prostředí**, do kterých lze nasazovat (ve smyslu prostředí na počítači/serveru)? (4) **Uvěď ke každému nějaký příklad** 

Back:

- **Virtualizovaná** - VM Ware, Virtual Box
- **Kontejnerizovaná** - Docker, Kubernetes
- **On-premise** a **cloud** (SaaS, PaaS,...) - AWS, Google Cloud Platform, MS Azure
- **Jednotky prostředí** x **tisíce** - ansible, terraform
<!--ID: 1716547569624-->
END

---


START
BI-SZZ

Proč je nasazování aplikace komplexní?

Back:

- Aplikace závisí na mnoha dalších softwarech/částech
- Rozdílné vývojové cykly aplikací (vodopád x agile), FE x backend x mobilní aplikace...
- zpoždění dodávek
- Něco jiného se testuje a něco jiného je na produkci

Kvůli tomu je třeba mít jasný plán a strukturu releasování
<!--ID: 1716547569627-->
END

---


START
BI-SZZ

Co je cílem **release plánu**? (4)

Back:

- Stanovit odpovědnosti, styčné osoby, způsoby komunikace…
- Zvolit klíčové milníky
- Stanovit dopady na okolní systémy
- Stanovit požadavky a prerekvizity

_Pro ilustraci jak vypadá release plan:_
![](../../Assets/Pasted%20image%2020240524104737.png)
<!--ID: 1716547569630-->
END

---

### Automatizace při sestavení, testování, nasazení, DevOps, přínosy a používané technologie


START
BI-SZZ

Proč se **automatizuje** (sestavení, testování, nasazení, ..)?

Back:

- Člověk může udělat chybu
- Velmi pomalé
- Těžko opakovatelné
- Málo bezpečné

Komplexita systémů a technologií vede na nutnost automatizace. Automatizovat lze téměř vše.
<!--ID: 1716547569633-->
END

---


START
BI-SZZ

Čeho je zkratka DevOps?

Back:

**Development** and **Operations**
<!--ID: 1716547569636-->
END

---


START
BI-SZZ

Co je **DevOps**? Na co se zaměřuje (6 - vyjmenuj co nejvíc)

Back:

Forma vývojového cyklu, kde:
- **Každý krok je maximálně automatizován**
- **Vše je verzováno** (kód, model databáze, data…)
- Na všechna prostředí je využíván **unifikovaný proces**
- Celý cyklus je **řešen formou malých kroků** → Deployment Pipeline
- **Rychlá a maximální zpětná vazba**
- Vše podporuje **Agilní vývoj**

_Z přednášky:_
![](../../Assets/Pasted%20image%2020240524110237.png)
![](../../Assets/Pasted%20image%2020240524110254.png)
<!--ID: 1716547569638-->
END

---


START
BI-SZZ

Jaké jsou různé typy/specializace DevOps?

Back:

- **DevSecOps** = DevOps + bezpečnost
- **DevBizOps** = DevOps + business (např. sledování metrik atd.)
- **AiOps** = DevOps + využití AI (pro analýzu dat atd.)
- **NoOps** = DevOps se zaměřením na naprosto plnou automatizaci.
<!--ID: 1716547569641-->
END

---


START
BI-SZZ

Jaké jsou **hlavní přínosy DevOps**? (5)

Back:

- **Snížení TTM** business požadavků (TTM - Time to Market - doba, než se dostane požadavek na trh)
- **Snížení množství chyb** a zrychlení jejich oprav
- **Snížení nákladů na zdroje** (Dev i Ops)
- **Snazší zapojení nových členů týmu do procesu**
- Možnost “**bezpečného experimentování**”
<!--ID: 1716547569643-->
END

---

#### části devopsu


START
BI-SZZ

Co je přesně **Continuous Integration**?

Back:

Když mám automatizovaně v pipelině **testování** nebo **jinou integraci**

![](../../Assets/Pasted%20image%2020231104133347.png)
<!--ID: 1716547569646-->
END

---


START
BI-SZZ

Co přesně je **Continuous Delivery**?

Back:

Když jsem schopný vždy udělat nějaký release (udělat release neznamená to nasadit.. udělat release je jakoby vytvořit ten funkční balíček, co se bude nasazovat)

![](../../Assets/Pasted%20image%2020231104133411.png)
<!--ID: 1716547569649-->
END

---


START
BI-SZZ

Co přesně je **Continuous Deployment**?

Back:
Když jsem schopný **nasadit** tu appku, tak to je continuous deployment
![](../../Assets/Pasted%20image%2020231104133557.png)
<!--ID: 1716547569652-->
END

---


START
BI-SZZ

Co přesně je devops (z pohledu deployment pipeliny)?

Back:

Když umím krom všech předchozích věcí i **monitorovat** a **spravovat** appku.

![](../../Assets/Pasted%20image%2020231104133636.png)
<!--ID: 1716547569655-->
END

---

### ostatní věci ohledně devopsu

START
BI-SZZ

Co je **strangler pattern**?

Back:

Udělám abstrakci (interface) a pak si můžu hrát s tím jak to je implementováno -> můžu to třeba změnit na mikroservisu.

Díky tomu můžu takhle přeměňovat a aktualizovat různé části softwaru

![](../../Assets/Pasted%20image%2020231104132241.png)
<!--ID: 1716547569658-->
END

---


START
BI-SZZ

Jaké jsou **typy nástrojů, co se používají v rámci devopsu**? (6) Ke každému **uveď konkrétní příklady**

Back:

- **Verzování** - git, Gitlab, Github…
- **Application Lifecycle Management** - Jira, Trello, Asana…
- **Testing** - Selenium, JUnit, xUnit…
- **Configuration Management** - Ansible, Terraform…
- **Build** - Gradle, Maven, Docker…
- **Monitoring/Logging** - Sentry, Google Analytics, Kibana…
<!--ID: 1716547569660-->
END

---


START
BI-SZZ

Jak funguje **bezodstávkové nasazování**?

Back:

Všechen traffic se přesměruje na jeden server, já mezitím nasadím na druhý, pak to přepnu a nasadím na první.

![](../../Assets/Pasted%20image%2020240524110802.png)
<!--ID: 1716547569663-->
END

---


START
BI-SZZ

Co jsou "přepínače" v kontextu DevOpsu?

Back:

To, že danou **fičuru zapnu jen určité skupině lidí** - díky tomu nemusím nové fičury roll outnout všem uživatelům najednou, ale můžu to dělat postupně.

Takhle se dá dělat i **AB testing**

![](../../Assets/Pasted%20image%2020240524111029.png)
<!--ID: 1716547569666-->
END

---
