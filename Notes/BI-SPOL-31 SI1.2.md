---
created: 2024-03-05T11:01:31
parent: "[[SI1.2]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-31 SI1.2

> BI-SPOL-31 (SI1.2)
> Analytický doménový model tříd a popis životního cyklu identifikovaných tříd (cíle, UML diagram tříd, UML stavový diagram)

### ToDo
- [ ] Možná přidat další informace nebo příklady k otázce - přijde mi to moc stručný

### Základy

START
BI-SZZ

Co je zkratka **UML**?

Back:

**Unified Modeling Language**

END

---


START
BI-SZZ

Co je **UML**?

Back:

Je to _vizuální_ jazyk/notace pro specifikaci a dokumentaci systémů

END

---


START
BI-SZZ

Jaké jsou **2 typy UML diagramů**?

Back:

- **strukturní diagramy** (Structure Diagrams)
- **diagramy chování** (Behaviour Diagrams)

END

---


START
BI-SZZ

Jaké jsou UML modely/diagramy, které jsme se učili? (2)

_todo doplnit další_

Back:

- Diagram tříd
- Stavový diagram

END

---

### Analytický doménový model tříd

START
BI-SZZ

Co je cílem analytického doménového modelu tříd?

Back:

Cílem je popsat data a používané pojmy, konkrétněji entity, jejich atributy, stavy a vazby mezi nimi

Pozn. zatím neřeší implementaci (tj. nepopisuje třídy jako `BookRepository`, neobsahuje atributy jako `rowId` nebo cizí klíče, neobsahuje metody jako `toString`)

END

---


START
BI-SZZ

Co je UML diagram tříd?

Back:

Jedna z možných notací analytického doménového modelu tříd.

_Příklad:_
![](../Assets/Pasted%20image%2020240305120511.png)

END

---


START
BI-SZZ

Pro co se používá UML diagram tříd? (2)

Back:

- Pro modelování **tříd**
- Pro modelování **databázových modelů**


END

---


START
BI-SZZ

Je UML diagram tříd _strukturní diagram_ nebo _diagram chování_? 

Back:

**strukturní diagram**

END

---


START
BI-SZZ

Jaké 2 věci má typicky třída v UML diagramu tříd?

Back:

- **atributy** (+ jejich viditelnost)
- **metody** (+ jejich viditelnost)

_Příklad:_
![](../Assets/Pasted%20image%2020240305112851.png)

END

---


START
BI-SZZ

Jak se v UML diagramu tříd značí **private atribut**?

Back:

Pomocí `-`

END

---


START
BI-SZZ

Jak se v UML diagramu tříd značí **public atribut**?

Back:

Pomocí `+`

END

---


START
BI-SZZ

Jaké jsou **4 typy vztahů mezi třídami** v UML diagramu tříd?

Back:

- **asociace**
- **kompozice**
- **agregace**
- **generalizace** = **dědičnost**

END

---


START
BI-SZZ

Co je **asociace** v UML diagramu tříd?

Back:

Vztah tříd kde entity mohou existovat nezávisle.

Pozn. asociace může mít směr

END

---


START
BI-SZZ

Jak se značí asociace?

Back:
![[Pasted image 20231015104637.png]]

Ta šipka znázorňuje, jakým směrem se daný název asociace čte.

END

---


START
BI-SZZ

Co je **kompozice** v UML diagramu tříd?

Back:

Vztah tříd, kde jedna třída ("část") **nemůže existovat** bez druhé (bez "celku").

END

---


START
BI-SZZ

Jak se značí **kompozice** v UML diagramu tříd?

Back:

![](../Assets/Pasted%20image%2020240305115026.png)

END

---


START
BI-SZZ

Co je **agregace** v UML diagramu tříd?

Back:

Vztah tříd - části a celku, kde část může existovat bez celku a může být ve více kolekcích

Pozn. tohle prý nemáme raději používat.

END

---


START
BI-SZZ

Jak se značí **agregace** v UML diagramu tříd?

Back:
![](../Assets/Pasted%20image%2020240305115047.png)

END

---


START
BI-SZZ

Co je **generalizace** v UML diagramu tříd?

Back:

Je to to samé jako **dědičnost**. 

Pozn. Není vhodná, když může objekt měnit příslušnost k třídě nebo může příslušet více třídám.

END

---


START
BI-SZZ

Jak se značí **dědičnost** v UML diagramu tříd?

Back:
![](../Assets/Pasted%20image%2020240305115107.png)

END

---


START
BI-SZZ

Jak se značí násobnosti v UML diagramu tříd?

Back:

Čísla a mezi nimi tečky.

Např. `0..*`, `1..*`, `1`

END

---


START
BI-SZZ

Co je **asociační třída** v UML diagramu tříd?

Back:

Třída, která je připojena k nějaké asociaci.

Dává nám informace o dané vazbě.

END

---


START
BI-SZZ

Jak se značí **asociační třída** v UML diagramu tříd?

Back:

![](../Assets/Pasted%20image%2020240305115204.png)

END

---

### Modelování stavů entit


START
BI-SZZ

Co je cílem při **modelování stavů entit**?

Back:

Cílem je popsat životní cyklus entit, tj. stavy, ve kterých se může entita nacházet, a události a podmínky, za kterých mezi stavy přechází

END

---

START
BI-SZZ

Co je UML stavový diagram?

Back:

Jedna z možných notací stavového modelu.

Pozor, neplést s diagramem aktivit!

END

---

START
BI-SZZ

Je **UML stavový diagram** _strukturní diagram_ nebo _diagram chování_? 

Back:

**diagram chování**

END

---


START
BI-SZZ

Z čeho se skládá UML stavový diagram? (2)

Back:

- **Začátek stavového diagramu** (černý puntík)
- **Stavy** (obdélníky)
- **Přechody** (šipky s nápisem)

_Příklad:_
![](../Assets/Pasted%20image%2020240305120029.png)

END

---


START
BI-SZZ

Jaký je syntax nápisu u přechodu v UML stavovém diagramu?

Back:

`Událost [Podmínka] / Akce`
- Podmínka a akce jsou nepovinné

_Např._
`Nákup výtisku`
`Pravidelná kontrola výšisků [výtisk je poškozený]`
`Žádost o výpujčku [výtisk není zarezervovaný] / Zaznamenání výpujčky výtisku dané knihy`

_Příklad:_
![](../Assets/Pasted%20image%2020240305120029.png)

END

---
