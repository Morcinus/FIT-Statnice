---
created: 2024-02-24T14:38:39
parent: "[[DBS]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-9 DBS

### Základy

START
BI-SZZ

Co je DB?

Back:

**Databáze**
<!--ID: 1708784926114-->

END

---

START
BI-SZZ

Co je **SŘBD** (=DBMS)?

Back:

**Systém řízení báze dat** (database management system)
<!--ID: 1708784926118-->

END

---

START
BI-SZZ

Co je **DBS**?

Back:

**Databázový systém** (database system)

DBS = DBMS + DB

![](../Assets/Pasted%20image%2020240224192553.png)
<!--ID: 1708784926120-->

END

---

START
BI-SZZ

Co je **RDBMS**, **ODBMS** a **ORDBMS**?

Back:

- relační DBMS
- objektový DBMS
- objektově relační DBMS
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

**Jaký je přínos** databázových technologií? (8)

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

Co je **SQL** a k čemu slouží?

Back:

Structured Query Language je **dotazovací jazyk** sloužící ke komunikaci s **databázovým strojem**.
<!--ID: 1708784926132-->

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

START
BI-SZZ

Definice: schéma relační databáze

Back:

$(R,I)$ je schéma relační databáze, kde
- $R = \{R_1, R_2, \dots, R_n\}$ je množina relací
- $I$ je množina integritních omezení
<!--ID: 1708784926145-->

END

---
