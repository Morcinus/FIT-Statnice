---
created: 2024-02-24T14:38:39
parent: "[[DBS]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-9 DBS

> BI-SPOL-9 (DBS)
> Relační databáze, dotazování v relační algebře, základní koncepce jazyka SQL (SELECT, DDL, DML, DCL, TCL) , vyjádření integritních omezení v DDL.


### ToDo
- Přidat otázky na jednotlivý příkazy např. jak se vytváří tabulka v DDL atd.
- U jednotlivých operací (join, polospojení atd.) přidat otázky na to, čemu odpovídá výraz relační algebry v SQL

### Základy

START
BI-SZZ

Co je **Databáze**?

Back:

Soubor záznamů (znaky, čísla, diagramy), jejichž systematická struktura umožňuje jejich vyhledávání pomocí počítače
<!--ID: 1708784926114-->

END

---

START
BI-SZZ

Čeho je zkratka **SŘBD** (=DBMS)?

Back:

**Systém řízení báze dat** (database management system)

SŘBD lze také nazývat databázový stroj (databázový stroj je obecnější pojem co může zahrnovat i hardware)
<!--ID: 1708784926118-->

END

---

START
BI-SZZ

Čeho je zkratka **DBS**?

Back:

**Databázový systém** (database system)

DBS = DBMS + DB

![](../../Assets/Pasted%20image%2020240224192553.png)
<!--ID: 1708784926120-->

END

---

START
BI-SZZ

Co je **RDBMS**, **ODBMS** a **ORDBMS**?

Back:

- **RDBMS** = relační DBMS
- **ODBMS** = objektový DBMS
- **ORDBMS** = objektově relační DBMS
<!--ID: 1708784926123-->
END

---

START
BI-SZZ

**Jakými daty** se zabývá DBS? (4)

Back:

Zabývá se seřazením velkého množství, perzistentních, spolehlivých a sdílených dat:

- **velké množstí** = pro data nestačí operační paměť
- **perzistestní** = data přetrvávají od zpracování ke zpracování
- **spolehlivý** = data lze rekonstruovat po chybě
- **sdílených** = data jsou přístupná více uživatelům
<!--ID: 1708784926126-->
END

---

START
BI-SZZ

**Jaký je přínos** databázových technologií? (8 - stačí umět pár)

Back:

- Nezávislost dat na aplikaci
- Efektivní přístup k datům
- Urychlení vývoje aplikací
- Integrita a ochrana dat
- Správa a zálohování dat
- Transakční zpracovávání
- Paralelní přístup k datům
- Zotavení po chybě
<!--ID: 1708784926129-->

END

---

START
BI-SZZ

Definice: **klíč schématu**

Back:

![](../../Assets/Pasted%20image%2020240228165232.png)
<!--ID: 1709135759457-->
END

---

### Relace

START
BI-SZZ

Co je **relace**?

Back:

relace = množina n-tic atributů z předem daných domén $R \subset D_1 \times D_2 \times \dots \times D_n$ (relace = tabulka)
- jména atribubtů $A_1, A_2, \dots, A_n$
- domény atributů $D_i$
- v relaci nezáleží na pořadí n-tic
- relace neobsahuje duplicitní n-tice
<!--ID: 1709134686303-->
END

---

START
BI-SZZ

Co je **schéma relace**?

Back:

schéma relace $R(A)$ popisuje n-tici jmen atributů $[ A_1, A_2, A_3, \dots A_n ]$ a jejich domény $D_1, D_2, D_3, \dots D_n$ (množiny povolených hodnot)
<!--ID: 1709137492330-->
END


---

START
BI-SZZ

Definice: **schéma relační databáze**

Back:

$(R,I)$ je schéma relační databáze, kde
- $R = \{R_1, R_2, \dots, R_n\}$ je množina relací
- $I$ je množina integritních omezení
<!--ID: 1708784926145-->

END

---

### Relační algebra

START
BI-SZZ

Co je **Relační algebra**?

Back:

- "vyšší" _čistě dotazovací_ jazyk
- Nespecifikujeme, "jak se to má dělat", ale "co má být výsledkem"
- Výsledkem dotazu je vždy _relace_. Ta může být zase vstupem jiného dotazu $\rightarrow$ dotazy lze _řetězit_
<!--ID: 1709134686306-->
END

---


START
BI-SZZ

Co je **dotaz**?

Back:

Dotaz je výraz, který vrací danou relaci.

Formálně:
![](../../Assets/Pasted%20image%2020240228170838.png)
<!--ID: 1709137492345-->
END

---


START
BI-SZZ

Definice: **Dotazovací jazyk**

Back:

![](../../Assets/Pasted%20image%2020240228170926.png)
<!--ID: 1709137492349-->
END

---


START
BI-SZZ

Definice: **selekce** v relační algebře

Back:

selekce (restrikce) = relace $R$ dle podmínky $\varphi$
- **Definice**: $R(\varphi) = def\{u|u\in R \wedge \varphi (u)\}$
- **Značení**: $R(\varphi)$

_Jinými slovy_: vybírám **řádky** tabulky podle kritéria

Příklady:
![](../../Assets/Pasted%20image%2020240228163953.png)

Analogie v SQL (`WHERE` je selekce)
![](../../Assets/Pasted%20image%2020240228160606.png)
<!--ID: 1709134686309-->
END

---


START
BI-SZZ

Definice: **projekce** v relační algebře

Back:

projekce = relace R na množinu atributů C, kde C $\subseteq$ A
- **Definice**: $R[C] = def \{u[C] | u \in R\}$
- **Značení**: $R[C]$

_Jinými slovy_: vybírám **sloupce** tabulky podle názvu

Příklady:
![](../../Assets/Pasted%20image%2020240228164002.png)

Analogie v SQL (`SELECT` je projekce)
![](../../Assets/Pasted%20image%2020240228160606.png)
<!--ID: 1709134686312-->
END

---


START
BI-SZZ

Definice: **přirozené spojení**

Back:

přirozené spojení = relací $R(A)$ a $S(B)$ s výsledkem $T(C)$
- **Definice**: $R*S=def\{u | u[A] \in R \wedge u[B] \in S \}$, kde $C = A \cup B$
	- výběr n-tic pro spojení je dán _rovností_ na _všech_ průnikových atributech $A$ a $B$

Příklady:
![](../../Assets/Pasted%20image%2020240228164014.png)

Analogie v SQL:
![](../../Assets/Pasted%20image%2020240228160405.png)
<!--ID: 1709134686315-->
END

---

START
BI-SZZ

Definice: **obecné spojení**

Back:

- **Definice**: $R[t_1 \Theta t_2]S$
	- $\Theta \in \{=, >, <, \leq, \geq, \neq \}$ (případně i $\land, \lor, \lnot$)
	- výsledek má všechny atributy včetně duplikací

Příklady:
![](../../Assets/Pasted%20image%2020240228163735.png)
Analogie v SQL:
![](../../Assets/Pasted%20image%2020240228161418.png)
<!--ID: 1709134686317-->
END

---

START
BI-SZZ

Co je **levé** a **pravé** spojení? (přirozené nebo obecné)

Back:

Spojení, kde výsledkem jsou jen atributy levé, resp. pravé relace.
<!--ID: 1709134686320-->
END

---

START
BI-SZZ

Jak se značí **přejmenování atributu** v relační algebře?

Back:
přejmenování atributu:
- t $\rightarrow$ alias

Příklad:
![](../../Assets/Pasted%20image%2020240228164221.png)

Analogie v SQL:
![](../../Assets/Pasted%20image%2020240228161042.png)
<!--ID: 1709134686323-->
END

---


START
BI-SZZ

Definice: **relační dělení**

Back:

- **Značení**: $R \div S$
- **Definice**: $R \div S$ = množina všech $x$ z $R(x,y)$, které tvoří dvojici s každým $y$ z $S(y)​$
	- (množinová definice $R \div S = ​R[x] \setminus \{ \{ R[x] \times S \} \setminus R \}[x]​)$)

Tags: optional
<!--ID: 1709137492352-->
END

---


START
BI-SZZ

Jaké množinové operace umožňuje relační algebra?

Back:

- sjednocení $R \cup S$
- průnik $R \cap S$
- rozdíl $R \backslash S$
- kartézský součin $R × S$

Analogie v SQL:
![](../../Assets/Pasted%20image%2020240228161029.png)
<!--ID: 1709134686326-->
END

---


START
BI-SZZ

Definice: **antijoin**

Back:

- **Definice**: $R \overline{<*} S = R \backslash \{R <*S\}$
- **Značení**: $R \overline{<*} S$
- Je to podmnožina n-tic z $R$, které **nejsou spojitelné** s žádnou n-ticí z $S$

Příklad:
![](../../Assets/Pasted%20image%2020240228162208.png)
<!--ID: 1709134686328-->
END

---


START
BI-SZZ

Definice: **levé obecné polospojení**

Back:

![](../../Assets/Pasted%20image%2020240228162828.png)

Příklad:
![](../../Assets/Pasted%20image%2020240228162837.png)
<!--ID: 1709134686331-->
END

---


START
BI-SZZ

Definice: **pravé obecné polospojení**

Back:

![](../../Assets/Pasted%20image%2020240228162854.png)

Příklad:
![](../../Assets/Pasted%20image%2020240228162901.png)
<!--ID: 1709134686334-->
END

---


START
BI-SZZ

Definice: **levé přirozené polospojení**

Back:

![](../../Assets/Pasted%20image%2020240228162923.png)

Příklad:
![](../../Assets/Pasted%20image%2020240228162936.png)
<!--ID: 1709134686337-->
END

---


START
BI-SZZ

Definice: **pravé přirozené polospojení**

Back:

![](../../Assets/Pasted%20image%2020240228162955.png)

Příklad:
![](../../Assets/Pasted%20image%2020240228163002.png)
<!--ID: 1709134686340-->
END

---


START
BI-SZZ

V jakém pořadí se vyhodnocují výrazy v RA?

Back:

- **zleva doprava**
- selekce a projekce mají přednost před binárními operacemi
- pro změnu priority použít _složené_ závorky

Příklad:
![](../../Assets/Pasted%20image%2020240228164356.png)
<!--ID: 1709135759444-->
END

---


START
BI-SZZ

Co znamená, že je jazyk **relačně úplný**?

Back:

Že umožňuje realizovat relační algebru.

Např. SQL
<!--ID: 1709134686343-->
END

---

START
BI-SZZ

Co je **minimální množina operací RA**?

Back:
Množina:
$$\{\times,\text{selekce},\text{projekce},\rightarrow,\cup,\backslash\}$$

Všechny operace se dají zapsat pomocí této množiny.
<!--ID: 1709134686346-->
END

---

### SQL

START
BI-SZZ

Co je **SQL** a k čemu slouží?

Back:

Structured Query Language je **dotazovací jazyk** sloužící ke komunikaci s **databázovým strojem**.
<!--ID: 1708784926132-->

END

---


START
BI-SZZ

Z jakých 4 jazyků se skládá **SQL**?

Back:

- **DDL** - definice dat
- **DML** - dotazování a úprava dat
- **DCL** - úprava přístupových práv
- **TCL** - řízení transakcí
<!--ID: 1715163629152-->
END

---


START
BI-SZZ

Co je **DDL** a k čemu slouží?

Back:

**Data Definition Language**
Slouží k definici dat

Např.
`CREATE TABLE teachers (id int, name varchar(255));`
<!--ID: 1708784926135-->

END

---

START
BI-SZZ

Co je **DML** a k čemu slouží?

Back:

**Data Manipulation Language**
Slouží k úpravě dat a dotazování

Např.
úprava: `INSERT INTO teachers VALUES (1, ’Valenta’);`
dotazování: `SELECT name FROM teachers WHERE id = 1;`
<!--ID: 1708784926137-->

END


START
BI-SZZ

Co je **view** (pohled) v SQL?

Back:

Je to virtuální relace uložená v podobě `SELECT` dotazu.
<!--ID: 1709137492356-->
END

---

START
BI-SZZ

Co je **TCL** a k čemu slouží?

Back:

**Transaction Control Language**
Slouží k řízení transakcí

Např.
`COMMIT; ROLLBACK;`
<!--ID: 1708784926140-->

END

---

START
BI-SZZ

Co je **DCL** a k čemu slouží?

Back:

**Data Control Language**
Slouží k úpravě přístupových práv

Např. `GRANT INSERT,UPDATE ON teachers TO ’valenta’;`
<!--ID: 1708784926143-->

END

---

### Integritní omezení

START
BI-SZZ

Jakými způsoby lze vytvářet integritní omezení? (3)

Back:

1. **deklarativně** při vytvoření schématu
	- Např. primární klíče, cizí klíče, `UK`
	- na sloupcích/tabulkách: `NOT NULL`, `DEFAULT`, `UNIQUE`, `PRIMARY KEY`, `REFERENCES`, `CHECK`
1. **procedurálně na serveru** (např. `TRIGGER`)
2. **procedurálně u klienta**
<!--ID: 1709135759450-->
END

---


START
BI-SZZ

Kdy se kontrolují integritní omezení?

Back:

Dá se to nastavit (např. ihned vs. na konci transakce). Lze to i dočasně vypnout.
<!--ID: 1709135759453-->
END
