---
created: 2024-03-24T13:24:23
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-27 BI-WI-17 TJV

> BI-WSI-SI-27 / BI-WSI-WI-17 (TJV)
> Architektura podnikových aplikací. Popis jednotlivých vrstev podnikových aplikací: klientská vrstva, webová vrstva, vrstva obchodní logiky, perzistentní vrstva

### architektura podnikových aplikací

START
BI-SZZ

Co znamená zkratka JEE?

Back:

Java Enterprise Edition
<!--ID: 1711285821852-->
END

---


START
BI-SZZ

Jaké vrstvy mají aplikace v JEE?

Back:

- **klientská vrstva** (client tier)
- **webová vrstva** (web tier)
- **vrstva obchodní logiky** (business tier)
- **perzistentní vrstva** (EIS tier)
  
Pozn. každá vrstva využívá rozhraní vrstvy pod sebou (volá dolů) a poskytuje rozhraní vrstvám nad sebou

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240324135240.png)
<!--ID: 1711285821857-->
END

---


START
BI-SZZ

Proč je někdy JEE architektura nazývána 3 vrstvou, i když má 4 vrstvy?

Back:

Webová vrstva a vrstva obchodní logiky často běží na jednom stroji a proto se často považují za jednu vrstvu -> jsou 3 vrstvy.

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240324135240.png)
<!--ID: 1711285821863-->
END

---


START
BI-SZZ

Jaký je rozdíl mezi **vrstvou** (layer) a **tier**?

Back:

- **vrstva** (layer) = logická (funkční) část softwaru
- **tier** = fyzicky oddělená část softwaru (běží na jiné infrastruktuře než ostatní tiers)
<!--ID: 1711285821865-->
END

---

### klientská vrstva (client tier)


START
BI-SZZ

Co dělá klientská vrstva?

Back:

Posílá požadavky webové (resp. střední) vrstvě, přijímá odpovědi a prezentuje je uživateli
<!--ID: 1711285821868-->
END

---


START
BI-SZZ

Kde běží klientská vrstva?

Back:

Na stroji klienta (např. PC, mobil atd.)
<!--ID: 1711285821871-->
END

---


START
BI-SZZ

Musí být klientská vrstva v rámci JEE aplikací naprogramována v Javě?

Back:

Ne.
<!--ID: 1711285821874-->
END

---


START
BI-SZZ

Jaké jsou dva typy klientů v klientské vrstvě?

Back:

- **webový prohlížeč** - komunikuje s webovou vrtsvou pomocí HTTP(S), může využívat REST nebo sessions, data se prezentují jako dynamické HTML stránky
- **klientská aplikace** - může přeskočit webovou vrstvu a komunikovat rovnou s business vrstvou
<!--ID: 1711285821877-->
END

---

### “střední vrstva”


START
BI-SZZ

Co se v rámci JEE označuje jako "střední vrstva"? 

Back:

webová a business vrstva, které běží na společném **JEE aplikačním serveru**.
<!--ID: 1711285821880-->
END

---


START
BI-SZZ

Z jakých vrstev se skládá třívrstvá architektura?

Back:

- **Prezentační vrstva** = klientská vrstva
- **Aplikační vrstva** = střední vrstva (webová + business)
- **Datová vrstva** = perzistentní vrstva
<!--ID: 1711285821886-->
END

---

#### webová vrstva (aplikační vrstva, web tier)


START
BI-SZZ

Čím je tvořena webová vrstva v JEE aplikaci?

Back:

- servlety
- JSP soubory
- JSF soubory
- případně EJB komponentami
<!--ID: 1711285821891-->
END

---


START
BI-SZZ

Co jsou servlety v JEE aplikaci?

Back:

**servlety** - Java třídy dědící od javax.servlet.http.HttpServlet, které zpracovávají HTTP požadavky (typicky jedna Java metoda pro jednu HTTP metodu) a generují např. HTML odpovědi
<!--ID: 1711285821897-->
END

---


START
BI-SZZ

Co jsou JSP soubory v JEE aplikaci?

Back:

**JSP soubory** _(Java Server Page)_ - “šablony” obsahující jak statický text (např. úrvyky HTML), tak JSP elementy, z nichž se generuje dynamický obsah
- při prvním požadavku jsou “přeloženy” na Java servlet
<!--ID: 1711285821903-->
END

---


START
BI-SZZ

Co jsou JSF soubory v JEE aplikaci?

Back:

**JSF soubory** (Java Server Faces) - alternativní “šablony” se speciálními XML tagy pro dynamický obsah
<!--ID: 1711285821906-->
END

---


START
BI-SZZ

Co jsou EJB komponenty v JEE aplikaci?

Back:

**EJB komponenty** (Enterprise Java Beans) - komponenty, které zastřešují data a business logiku
<!--ID: 1711285821909-->
END

---


START
BI-SZZ

Z jaké vrstvy získává informace webová vrstva?

Back:

Pokud nedokáže odpověď na požadavek vytvořit sama, může získávat informace od **business vrstvy**
<!--ID: 1711285821912-->
END

---

#### vrstva obchodní logiky (business vrstva, business tier, EJB tier)

START
BI-SZZ

Čeho je zkratka EJB?

Back:

Enterprise Java Beans
<!--ID: 1711285821915-->
END

---


START
BI-SZZ

Co obsahuje vrstva obchodní logiky?

Back:

obsahuje veškerou logiku a funkcionalitu (např. objektově relační mapování, složité algoritmy, validace dat, …)
<!--ID: 1711285821917-->
END

---


START
BI-SZZ

Co v rámci obchodní logiky dělají EJB komponenty?

Back:

EJB komponenty přijímají požadavky shora (od klientské a webové vrstvy), pracují se zdroji z perzistentní vrstvy a pak posílají nahoru odpovědi.
<!--ID: 1711285821920-->
END

---


START
BI-SZZ

Na čem běží vrstva obchodní logiky?

Back:

Na JEE serveru
<!--ID: 1711285821923-->
END

---

### persistentní vrstva (EIS tier)

START
BI-SZZ

Cěho je zkratka EIS?

Back:

Enterprise Information System
<!--ID: 1711285821927-->
END

---


START
BI-SZZ

Na čem typicky běží EIS tier?

Back:

většinou na databázovém serveru
<!--ID: 1711285821933-->
END

---


START
BI-SZZ

Co je součástí EIS vrstvy?

Back:

Tato vrstva představuje veškeré (externí) systémy, jejichž funkcionalitu či data enterprise aplikace využívá. Může se jednat například o ERP systém, databázový systém atp.
<!--ID: 1711285821939-->
END

---


START
BI-SZZ

Co je ERP?

Back:

**Enterprise Resource Planning** - systém, který integruje procesy a data z různých zdrojů, napříč celou organizací. Typicky centralizuje tato data do jedné databáze.

Např. v korporátu by to mohlo managovat data napříč všemi odděleními (finance, human resources, manufacturing, supply chain management, sales, and customer relationship management etc.)

Např. SAP je dost známý ERP vendor
<!--ID: 1711285821944-->
END

---
