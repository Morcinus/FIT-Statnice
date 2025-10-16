---
created: 2024-05-25T11:32:39
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-26 SI2.3

> BI-WSI-SI-26 (SI2.3)
> Údržba: život softwarového díla, role a význam údržby, vazba na SDLC a jednotlivé činnosti softwarového inženýrství, servisní smlouva, role měření (pracnosti, nákladů a dalších metrik) při údržbě.


START
BI-SZZ

Jaké jsou **typy údržby** softwaru a co znamenají?

Back:

- **Corrective** – oprava nalezených chyb a problémů
- **Adaptive** – udržení použitelnosti SW v měnícím se prostředí
- **Perfective** – zlepšení výkonnosti nebo udržovatelnosti
- **Preventive** – detekce a oprava latentních chyb než se stanou
<!--ID: 1716634000730-->
END

---


START
BI-SZZ

Co je všechno potřeba, abychom mohli dělat údržbu softwaru? (5)

Back:

- Tým
- Software pro konfigurační řízení
- Prostředí
- Zálohování
- Automatické akce
- ...
<!--ID: 1716634000739-->
END

---


START
BI-SZZ

V jaké fázi vývoje softwaru se tráví nejvíce času?

Back:

V **provozu a údržbě**
<!--ID: 1716634000747-->
END

---


### Miniwaterfall a údržba

START
BI-SZZ

Co je **Miniwaterfall**?

Back:

Menší waterfall, který se používá při údržbě
<!--ID: 1716634000754-->
END

---


START
BI-SZZ

Proč se při **údržbě používá miniwaterfall**?

Back:

- Máme už o systému velkou znalost
- Rozsah změny je typicky menší
- Je velmi efektivní
<!--ID: 1716634000762-->
END

---


START
BI-SZZ

Jaké věci jsou klíčové pro údržbu softwaru? (5)

Back:

- **Měření metrik** - slouží jako podklad pro SLA
- **Kvalitní dokumentace** - údržbu dělají časem jiní vývojáři, efektivita týmu je závislí na kvalitě dokumentace
- **Dobrá architektura** - je třeba ji respektovat, aby byl systém rozšiřitelný
- **Testování** - aby byl systém stabilní a nedocházelo k regresím, testovat automaticky, mít vše dobře zorganizované
- **Řízení změn** - mít systém na požadavky od zákazníka
<!--ID: 1716634000769-->
END

---

### SLA


START
BI-SZZ

Čeho je zkratka **SLA**?

Back:

Service Level Agreement
<!--ID: 1716634000778-->
END

---


START
BI-SZZ

Co je obecně **SLA**?

Back:

Smlouva o údržbě, rozvoji a podpoře softwaru.
<!--ID: 1716634000789-->
END

---


START
BI-SZZ

Jaké jsou typické parametry SLA a co znamenají? (3)

Back:

- **Dostupnost** - např. systém bude dostupný v 99% času
- **Response-time** - např. Do 1h od nahlášení chyby bude podán report o řešení chyby.
- **Fix-time** - Např. Kritické chyby budou vyřešeny do 3h. 
<!--ID: 1716634000796-->
END

---


START
BI-SZZ

Co je **rámcová smlouva**

Back:

Definice závazků ohledně údržby a rozvoje systému.

![](../../Assets/Pasted%20image%2020231104151225.png)
<!--ID: 1716634000803-->
END

---


### Technická podpora


START
BI-SZZ

Co je technická podpora?

Back:

Služba pro uživatele systému sloužící k pomoci při řešení vzniklých problémů a požadavků.

(Nedostupnost systému může způsobit vysoké škody)
<!--ID: 1716634000811-->
END

---


START
BI-SZZ

Jaké jsou způsoby technické podpory?

Back:

- Telefonní
- Emailová
- Internetová
<!--ID: 1716634000817-->
END

---


START
BI-SZZ

Jaké jsou úrovně technické podpory?

Back:

1) L1 - **First-line podpora** = radí uživatelům a přijímají hlášení o chybách
2) L2 - **Administrátorská podpora** = aktivní monitoring systému a řešení chyb ještě než jsou nahlášeny, mohou třeba restartovat službu
3) L3 - **Expertní podpora** = mají detailní porozumění systému (podíleli se na vývoji)
<!--ID: 1716634000825-->
END

---


START
BI-SZZ

Jak se dělí podpora **podle času**?

Back:

- **24/7** – nepřetržitá
- **8x5** – pouze v pracovní době
- **10x5** - třeba hodinu před a po běžné pracovní době
<!--ID: 1716634000832-->
END

---


START
BI-SZZ

Jak se dělí podpora **podle intenzity**?

Back:

- **On-site** - přímo dostupná u zákazníka nebo na domluveném pracovišti
- **On-call** - podpora je k dispozici na telefonu, výrazně levnější
<!--ID: 1716634000839-->
END

---


START
BI-SZZ

Co je **reakční doba**?

Back:

Doba, která uplyne **od nahlášení problému** do **předání první informace o stavu řešení**
<!--ID: 1716634000846-->
END

---

START
BI-SZZ

Jaké jsou **priority reakční doby** při podpoře softwaru? (3)

Back:

- **Priorita 1**: reakční doba do 1h
	- Provoz aplikace zastaven
	- Ztráta/porušení dat
- **Priorita 2**: reakční doba do 2h
	- Významná část aplikace je nefunční, ale systém se nutně nemusí celý zastavit
- **Priorita 3**: reakční doba do 1 dne
<!--ID: 1716634000853-->
END

---



