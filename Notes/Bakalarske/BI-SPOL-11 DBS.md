---
created: 2024-03-03T12:48:19
parent: "[[DBS]]"
---
TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-11 DBS

> BI-SPOL-11 (DBS) 
> 3 úrovně pohledu na data (konceptuální, implementační, fyzická). Struktury pro ukládání dat v relačních databázích s ohledem na rychlý přístup k nim (speciální způsoby uložení, indexy apod.)


### 3 úrovně pohledu na data

START
BI-SZZ

Jaké jsou **3 úrovně pohledu na data**? (v DBS)

Back:

1. **konceptuální**
2. **logická** (implementační, databázová)
3. **fyzická**
<!--ID: 1709474689428-->
END

---

#### Konceptuální úroveň

START
BI-SZZ

Čím se zabývá **konceptuální** úroveň? (v databázích)

Back:

Zabývá se _modelváním reality_ nezávisle na DB nebo její implementaci.

Pozn.: To je ideální pro komunikaci se zákazníkem
<!--ID: 1709474689444-->
END

---


START
BI-SZZ

Jaké diagramy se nejčastěji používají v **konceptuální úrovni**? (2)

Back:

- **ER model**
- **UML class diagram** _(více info v otázkách BI-SI1)_
<!--ID: 1709474689447-->
END

---


START
BI-SZZ

Co je **ER model**?

Back:

ER (entity-relatioship) model je graf **entit** (tříd), **atributů** a **vztahů** (asociací).
<!--ID: 1709474689450-->
END

---

#### Podrobnější info o ER (optional)
Tady je kdyžtak podrobnější info o ER diagramech. Přišlo mi to jako dobrý vědět, protože to jsou docela základy.

START
BI-SZZ

Co znamená že je entita **slabá** nebo **silná** v ER?

Back:

- **Silná** = entita může existovat sama o sobě, má primární klíč
- **Slabá** = entita nemůže existovat sama o sobě, její identita je závislá na jiné entitě

Tags: optional
<!--ID: 1709474689452-->
END

---

START
BI-SZZ

Co je **identifikační závislost** (vztah) v ER?

Back:

Entita je **identifikována** (částečně nebo plně) **vztahem** k jiné entitě. 

(Tzn. je to slabá entita)

_Značí se svislou čarou:_
![](../../Assets/Pasted%20image%2020240303135040.png)

Tags: optional
<!--ID: 1709474689455-->
END

---


START
BI-SZZ

Co je **doména** atributu v ER?

Back:

**doména** = typ atributu

Např. integer, string,...

Tags: optional
<!--ID: 1709474689458-->
END

---


START
BI-SZZ

**Jak se značí** povinný/nepovinný atribut v ER?

Back:

Atribut může být:
- **povinný** `*`
- **nepovinný** `O`

Tags: optional
<!--ID: 1709474689460-->
END

---


START
BI-SZZ

Co je **identifikátor** a **jak se značí** v ER?

Back:

Atribut, který identifikuje danou entitu a je unikátní.

Značí se pomocí `#`.

Tags: optional
<!--ID: 1709474689465-->
END

---


START
BI-SZZ

Co je **unikátní atribut**?

Back:

Atribut musí mít unikátní hodnotu, ale není nutně klíčem.

Tags: optional
<!--ID: 1709474689471-->
END

---

START
BI-SZZ

Co je **kardinalita**?

Back:

**Kardinalita** = násobnost vazby (1:1, 1:N, N:M)

Tags: optional
<!--ID: 1709474689477-->
END

---


START
BI-SZZ

Co je **parcialita**?

Back:

**Parcialita** = zda je účast ve vazbě **povinná** (plná čára) nebo **nepovinná** (přerušovaná čára)

Tags: optional
<!--ID: 1709474689479-->
END

---


START
BI-SZZ

Co je **dekompozice vztahů**?

Back:

Binární notace (ER, UML) vyžadují dekompozici vzathů = **vložení vztahové entity** do vztahů M:N.

Pozn.: Jsou 2 způsoby jak dekomponovat (viz níže)

_Dodatečný obrázek s příkladem:_
![](../../Assets/Pasted%20image%2020240303140348.png)
![](../../Assets/Pasted%20image%2020240303140405.png)

Tags: optional
<!--ID: 1709474689484-->
END

---


START
BI-SZZ

Co je **rekurzivní vztah** v ER?

Back:

Entita má vztah sama se sebou.

_Ukázkový obrázek:_
![](../../Assets/Pasted%20image%2020240303140523.png)

Tags: optional
<!--ID: 1709474689486-->
END

---


START
BI-SZZ

Co je **ISA hierarchie**?

Back:

Možnost, jak udělat _něco ve smyslu dědičnosti_ ("Is a ...").
- Podtypy pak _nemají vlastní identifikátor_

_Příklad:_
![](../../Assets/Pasted%20image%2020240303140808.png)

Tags: optional
<!--ID: 1709474689489-->
END

---


START
BI-SZZ

Na co není vhodná **ISA hierarchie**?

Back:

Na **role** a **specializace**.

_Příklady (vlevo role, vpravo specializace):_
![](../../Assets/Pasted%20image%2020240303140852.png)

Tags: optional
<!--ID: 1709474689493-->
END

---



#### Implementační úroveň

START
BI-SZZ

Čím se zabývá **logická** (implementační, databázová) úroveň? (v databázích)

Back:

Zabývá se konkrétním DB modelem, jeho schématem a jeho dotazovacími a manipulačními prostředky.

Např. tady už rozlišujeme typ databáze (relační, objektová, síťová atd.)
<!--ID: 1709474689495-->
END

---

#### Fyzická úroveň

START
BI-SZZ

Čím se zabývá **fyzická** úroveň? (v databázích)

Back:

Zabývá se fyzickým uložením dat do sekvenčních souborů (příp. bloků OS) a strukturami pro ukládání (indexy, clustery apod., viz dále).
<!--ID: 1709474689498-->
END

---

##### Indexy

START
BI-SZZ

Co jsou **indexy** v databázi?

Back:

Jsou to pomocné struktury pro **rychlý přístup** k datům podle **klíče** (index key).

Pozn.: Často se indexy používají, obzvláště ve větších DB.
<!--ID: 1709474689501-->
END

---


START
BI-SZZ

Může nad jednou tabulkou existovat více indexů?

Back:

**Ano**.
<!--ID: 1709474689507-->
END

---


START
BI-SZZ

Co se typicky **zrychlí** a co se **zpomalí** za operaci, když přidáme **index**?

Back:

Typicky se zrychlí `SELECT`, ale zpomalí se manipulace s daty.
<!--ID: 1709474689512-->
END

---



START
BI-SZZ

Co je **ROWID**?

Back:

unikátní identifikátor řádku, který odkazuje k fyzickému umístění dat

Využívají to indexy
<!--ID: 1709474689518-->
END

---



START
BI-SZZ

Jaké jsou **typy indexů**? (2)

Back:

- **B-stromové** (B\*-Tree)
- **Bitmapové**
<!--ID: 1709474689520-->
END

---


START
BI-SZZ

Co je a jak funguje **B-stromový index**?

Back:

Vyvážený strom, v listu je klíč a adresa řádku s daty.
- Klíč se najde průchodem stromem od kořene.
- Vyvažování stromu dělá DBMS na pozadí

Pozn.: strom má typicky hloubku max. 4 a větvící faktor 100 

![](../../Assets/Pasted%20image%2020240303144124.png)
<!--ID: 1709474689525-->
END

---


START
BI-SZZ

Kdy je vhodné použít **B-stromový index**?

Back:

Při **vysoké selektivitě klíčů** - tzn. když se klíče mohou od sebe hodně lišit (např. jména).
<!--ID: 1709474689528-->
END

---


START
BI-SZZ

Co je a jak funguje **bitmapový index**?

Back:

bitmapa = binární matice všech záznamů a všech možných indexovaných hodnot

Pro platné kombinace je v buňce jednička, jinak nula.

_Obrázek s příkladem:_
![](../../Assets/Pasted%20image%2020240303144741.png)

Když pak například spustím `SELECT` dle roku výroby, stačí jen vybrat řádky, kde je hodnota nastavená na `1`:
![](../../Assets/Pasted%20image%2020240509111957.png)

Složitější dotazy s `AND/OR/NOT` jsou taky easy, protože se jen provede logická operace nad danými sloupečky:
![](../../Assets/Pasted%20image%2020240509112045.png)
<!--ID: 1709474689530-->
END

---


START
BI-SZZ

Jak drahé jsou DML operace u **B-stromu** a **bitové mapy**?

Back:

- **B-strom** - DML jsou relativně drahé
- **bitmapa** - DML jsou velice drahé

U B-stromu stačí strom trošku přeskládat. U bitmapy je např. při přidání nebo odebrání řádku editnout každý sloupec. 
<!--ID: 1709474689533-->
END

---


START
BI-SZZ

Pro jaké služby je vhodný **B-strom** vs **bitmapa**?

Back:

- **B-strom** - OLTP - časté změny od mnoha uživatelů
- **bitmapa** - OLAP - méně manipulace, více dotazů a agregací
<!--ID: 1709474689536-->
END

---


START
BI-SZZ

Co je **OLTP**?

Back:

Systémy optimalizované pro rychlé, krátké transakce, např. vkládání, aktualizace a mazání dat.

Vhodné pro bankovnictví a e-commerce.

Tags: optional
<!--ID: 1716315530274-->
END

---


START
BI-SZZ

Co je **OLAP**?

Back:

Systémy optimalizované pro analytické zpracovávání, zaměřené na efektivní **dotazování a analýzu** velkého množství dat.

Vhodné např. pro business intelligence a reportování.

Tags: optional
<!--ID: 1716315530277-->
END

---

##### Způsoby uložení relační tabulky v Oracle DB


START
BI-SZZ

Jaké jsou **4 způsoby uložení relační tabulky** v Oracle DB?

Back:

- **heap tabulka**
- **heap tabulka s indexy**
- **indexově organizovaná tabulka**
- **cluster** (shluk)
<!--ID: 1709474689538-->
END

---


START
BI-SZZ

Co je **heap tabulka**?

Back:

žádný index, žádné pořadí, nové záznamy vyplňují prázdná místa

_Ilustrační obrázek, aby tato kartička měla víc MB ( ͡° ͜ʖ ͡°):_
![](../../Assets/Pasted%20image%2020240303145718.png)
<!--ID: 1709474689541-->
END

---


START
BI-SZZ

Co je **heap tabulka s indexy**?

Back:

Index vrátí ROWID, podle kterého se pak najdou data (tzv. **nonclustered index**)

_Ilustrační obrázek:_
![](../../Assets/Pasted%20image%2020240303145907.png)
<!--ID: 1709474689544-->
END

---

START
BI-SZZ

Co je **indexově organizovaná tabulka**?

Back:

Data jsou rovnou v indexu (rychlejší, ale dává smysl pokud je index jen jeden, tzv. **clustered index**)

_Obrázek:_
![](../../Assets/Pasted%20image%2020240303145902.png)
<!--ID: 1709474689549-->
END

---


START
BI-SZZ

Co je **cluster** (shluk)?

Back:

Join tabulek, který je už hotový i ve fyzickém uložení.

_Obrázek:_
![](../../Assets/Pasted%20image%2020240303150021.png)
<!--ID: 1709474689554-->
END

---


START
BI-SZZ

Jaké jsou další možné způsoby optimalizace databází? (5 - asi stačí vědět jen nějaký)

Back:

- optimalizace podle nejfrekventovanějších SQL příkazů
- materializované pohledy
- redundance (denormalizace)
- partitions
- distribuované databáze

Tags: optional
<!--ID: 1709474689560-->
END

---
