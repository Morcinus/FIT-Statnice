---
created: 2024-05-24T11:13:24
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-25 SI2.3

> BI-WSI-SI-25 (SI2.3)
> Konfigurační řízení: řízení verzí, řízení změn, správa prostředí, řízení dodávek, správa dokumentace a vzájemné souvislosti.

### Konfigurační řízení

START
BI-SZZ

Co je **softwarový produkt**? (Podle SI2 definice)

Back:

Úplný soubor počítačových programů, postupů, související dokumentace a údajů (dat), určený pro dodání uživateli.
<!--ID: 1716547569535-->
END

---


START
BI-SZZ

Co je **softwarová položka** (konfigurační položka)?

Back:

Jakákoliv identifikovatelná část softwarového produktu v průběžném nebo v konečném stadiu vývoje.
<!--ID: 1716547569538-->
END

---


START
BI-SZZ

Co zahrnuje **konfigurační řízení**? Co je jeho cílem?

Back:

Identifikace, evidence a řízení konfiguračních položek včetně jejich verzí, vlastností a vztahů.

Cílem je zajistit integritu softwarových položek po celou dobu jejich životního cyklu, tak aby byly použity pouze schválené položky a prováděny pouze jejich schválené změny.
<!--ID: 1716547569540-->
END

---


START
BI-SZZ

Co je v rámci konfiguračního řízení třeba zajistit u dokumentů?

Back:

- Jednotné názvy souborů s definovanou strukturou
- Definovaná pravidla pro distribuci dokumentů a **synchronizaci úprav**
- Důsledné vyplňování **hlaviček souborů**, včetně čísla verze
- Identifikace verzí souvisejících dokumentů

_Např._
![](../Assets/Pasted%20image%2020240524120454.png)
<!--ID: 1716547569543-->
END

---


START
BI-SZZ

Co je semver?

Back:

**Sémantické verzování** - způsob pojmenovávání verzí softwarových položek 
<!--ID: 1716547569546-->
END

---


START
BI-SZZ

**Jaký formát** má semver a co jednotlivé části znamenají?

Back:

`MAJOR.MINOR.PATCH`

- `MAJOR` - nekompatibilní API změny
- `MINOR` - zpětně kompatibilní funkcionality
- `PATCH` - zpětně kompatibilní bug fixes
<!--ID: 1716547569548-->
END

---

### Kontrola verzí


START
BI-SZZ

Čím se zabývá **kontrola verzí**?

Back:

Identifikací a evidencí (nejen) SW položek

- Práce s více verzemi produktu zároveň
- Možnost návratu ke konkrétní verzi
- Různá data pro různá prostředí
<!--ID: 1716547569551-->
END

---


START
BI-SZZ

Jaké nástroje se používají ke **kontrole verzí** softwaru?

Back:

Např. Git, SVN, Mercurial,...
<!--ID: 1716547569554-->
END

---


START
BI-SZZ

K čemu se typicky při kontrole verzí používají **tagy**?

Back:

Označuju tím jednotlivé verze na commitech:
![](../Assets/Pasted%20image%2020240524120949.png)
<!--ID: 1716547569556-->
END

---


### Řízení změn

START
BI-SZZ

Co je **změnové řízení**?

Back:

Řízení požadavků na změnu funkcionality vzhledem k dohodnutému řešení.

Je to jasně **definovaný proces** (odpovědnosti, přechodné stavy…)

Zahrnuje celý životní cyklus od vzniku požadavku až po jeho nasazení
<!--ID: 1716547569559-->
END

---


START
BI-SZZ

Co je třeba identifikovat při řízení změny?

Back:

- Typ změny
- Vazba na zadání/specifikaci/požadavek
- Vazba na kontrolu verzí
<!--ID: 1716547569561-->
END

---


START
BI-SZZ

Jaké nástroje se používají pro změnové řízení?

Back:

Jira, YouTrack, Redmine, GitHub,..
<!--ID: 1716547569564-->
END

---

### Správa prostředí


START
BI-SZZ

Co je **vývojové prostředí**?

Back:

Prostředí lokálně u programátora
<!--ID: 1716547569567-->
END

---


START
BI-SZZ

Co je **integrační prostředí**?

Back:

Prostředí, kde probíhají různé typy testů - smoke testy, daily build,...

Zaměřuje se na integrační testy (zda jednotlivé komponenty/moduly softwaru fungují dohromady)
<!--ID: 1716547569570-->
END

---


START
BI-SZZ

Co je **testovací prostředí**?

Back:

Prostředí, kde se provádí funkční/nefunkční testy a manuální testy
<!--ID: 1716547569573-->
END

---


START
BI-SZZ

Co je **akceptační prostředí**?

Back:

Testovací prostředí, kde se provádí akceptační testy (ověření splnění požadavků)
<!--ID: 1716547569575-->
END

---


START
BI-SZZ

Co je **produkční prostředí**?

Back:

Prostředí pro běh výsledné aplikace
<!--ID: 1716547569578-->
END

---

### Řízení dodávek


START
BI-SZZ

Co se řeší v rámci **řízení dodávek**?

Back:

- Definuje se, **jak často se bude dodávat nová verze systému** (Závisí na SDLC modelu - agile, waterfall,..)
- Snaha o **automatizaci procesu dodávek**
- **Určení způsobu** a **podmínek předání dodávky** + stanovení pravidel pro testování, informací o dodávce, školení atd.
<!--ID: 1716547569581-->
END

---


START
BI-SZZ

Jaké jsou **části procesu řízení dodávek**? (4)

Back:

1. Vyrobit dodávku
2. Nainstalovat dodávku
3. Otestovat dodávku
4. Připravit dodávku pro instalaci zákazníkem
<!--ID: 1716547569584-->
END

---


### Správa Dokumentace

START
BI-SZZ

Jaké jsou **typy dokumentace**?

Back:

- **Metodická**
- **Procesní**
- **Produktová**
<!--ID: 1716547569587-->
END

---


START
BI-SZZ

Co zahrnuje **Metodická dokumentace**? (2)

Back:

- **Definice procesů** - popis metodiky, popis procesu analýzy,...
- **Definice nároků** - podoba reportů/šablony, projektové stránky

_Příklad dokumentace:_
![](../Assets/Pasted%20image%2020240524114611.png)
<!--ID: 1716547569590-->
END

---


START
BI-SZZ

Jak rychle zastará **metodická dokumentace**?

Back:

Docela pomalu, většinou se procesy a metodiky dodržují dluohodobě..
<!--ID: 1716547569593-->
END

---


START
BI-SZZ

Co všechno zahrnuje **Procesní dokumentace**? (3)

Back:

- **Schedules –** plány a odhady
- **Reports –** přehled o užívání prostředků během vývoje – plnění deadlines, pracnost…
    - Slouží k zlepšování plánování a odhadů
- **Working papes** – pracovní dokumenty, např. poznámky z meetingů (pro komunikaci mezi vývojovým týmem a vedením)

Jako součást dokumentace jsou i maily, Jira tasky apod. 
<!--ID: 1716547569596-->
END

---


START
BI-SZZ

Jak často se aktualizuje **procesní dokumentace**?

Back:

V průběhu SDLC se aktualizuje **často** a **velice rychle zastarává**.
<!--ID: 1716547569599-->
END

---


START
BI-SZZ

Co se děje s **procesní dokumentací** po dokončení vývoje?

Back:

Není potřeba ji typicky uchovávat, protože je to podstatné hlavně když probíhá ten vývoj.. Ale "člověk nikdy neví", takže se to stejně nějak uchovává.
<!--ID: 1716547569602-->
END

---


START
BI-SZZ

Jaké jsou **2 hlavní části** **produktové dokumentace** a **k čemu slouží**?

Back:

- **Uživatelská** - pro uživatele (manuál, nápovědy, příručka k instalaci,...)
- **Systémová** - pro vývojáře, administrátory atd. (specifikace, architektura, výpis kódu s komentáři,..)
<!--ID: 1716547569604-->
END

---


START
BI-SZZ

Podle čeho můžu dělit **čtenáře dokumentací**? (2)

Back:

- **Podle zkušeností**
- **Podle rolí** (uživatel, programátor, administrátor, integrátor)
<!--ID: 1716547569607-->
END

---


START
BI-SZZ

Co typicky dávám do dokumentace pro **zkušené uživatele** vs pro **nezkušené uživatele**?

Back:

- **Zkušení uživatelé** - seznam funkcí, popis
- **Nezkušení uživatelé** - screenshoty, detailní postupy,...
<!--ID: 1716547569610-->
END

---
