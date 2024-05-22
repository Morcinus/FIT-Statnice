---
created: 2024-03-06T10:25:27
parent: "[[SI1.2]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-18 BI-WI-13 SI1.2

> BI-WSI-SI-18 / BI-WSI-WI-13 (SI1.2)
> Analýza a správa požadavků (cíle, kategorizace, UML diagram případů užití, scénáře případů užití, UML diagram aktivit).

### ToDo
- [ ] Tady by se hodilo u UML diagramu aktivit ještě podrobněji rozepsat, co znamenají jednotlivý věci v diagramu - u zkoušky chtějí kreslit diagram aktivit, tak aby člověk tušil jak to udělat

### Požadavky

START
BI-SZZ

Co je cílem analýzy požadavků?

Back:

Cílem analýzy požadavků je vyjasnit zadání, vymezit hranice systému a jeho omezení, odhadnout pracnost
<!--ID: 1709724064697-->
END

---


START
BI-SZZ

Jaké **3 vlastnosti** by měl mít požadavek?

Back:

- **jednoznačný**
- **splnitelný**
- **ověřitelný**
<!--ID: 1709724064701-->
END

---


START
BI-SZZ

Jakými způsoby lze zachycovat požadavky zákazníka? (2)

Back:

- strukturovaný text
- grafické zobrazení - lze využít **diagram balíčků** nebo **vlastní profil**

UML nemá speciální diagram požadavků. Vlastní profil je velice častý (je to prostě custom diagram).

_Jak vypadá vlastní profil:_
![](../Assets/Pasted%20image%2020240306104501.png)

_Jak vypadá diagram balíčků:_
![](../Assets/Pasted%20image%2020240306104521.png)
<!--ID: 1709724064704-->
END

---


START
BI-SZZ

Jaké části má typicky požadavek? (6)

Back:

- **popis**
- **název**
- **zkratka**
- **kategorie**
- **priorita**
- **složitost**
<!--ID: 1709724064707-->
END

---


START
BI-SZZ

Jaké jsou 2 základní kategorie požadavků?

Back:

- **funkční**
- **nefunkční**
<!--ID: 1709724064709-->
END

---


START
BI-SZZ

Co jsou **funkční požadavky**?

Back:

To co systém bude umět - jednotlivé funkcionality.
<!--ID: 1709724064712-->
END

---


START
BI-SZZ

Co jsou **nefunkční požadavky**?

Back:

Omezení, dodržování standardů, dostupnost, responzivita apod.
<!--ID: 1709724064714-->
END

---


START
BI-SZZ

Co je **FURPS** a z čeho se skládá?

Back:

FURPS je akronym pro kategorie požadavků:

- **funkcionality** - funkčnost
- **usability** - použitelnost
- **reliability** - spolehlivost
- **performance** - výkon
- **supportability** - podporovatelnost, rozšiřitelnost
<!--ID: 1709724064717-->
END

---

### Use case model

START
BI-SZZ

Co je **Use case** model?

Back:

Detailnější specifikace funkčních požadavků.

(Jeden požadavek se typicky rozpadne na víc případů užití)
<!--ID: 1709724064720-->
END

---


START
BI-SZZ

K čemu je dobrý mít **use case** model?

Back:

Slouží jako _zadání pro vývojáře_, je dobrý k _přesnějším odhadům_, _tvorbě testů_, _dokumentace_, _nápověd_ apod.
<!--ID: 1709724064722-->
END

---


START
BI-SZZ

Z čeho se skládá **use case** model? (2)

Back:

- **seznam aktérů** (účastníků)
- **seznam případů užití**
<!--ID: 1709724064725-->
END

---


START
BI-SZZ

Co je typicky **aktér** v use case modelu?

Back:

_Uživatelé_, ale i např. _systém_ nebo _čas_ (např. cron jobs)
<!--ID: 1709724064727-->
END

---


START
BI-SZZ

Jaké jsou typicky části **případu užití**? (4 hlavní + 3 optional)

Back:

- **Název**
- **Zkratka** (např. UC-42)
- **Popis** - definice cíle (co z toho daný aktor má)
- **Aktér** - aktér který tu funkci používá

U podrobnějších use casů taky:
- **Scénáře** - hlavní, alternativní + výjimky
- **Podmínky provedení**
- **Diagram případů užití**

Pozn. těch částí může být ještě hromada dalších - tohle jsou jen ty nejzákladnější.
<!--ID: 1709724064730-->
END

---


START
BI-SZZ

Je **UML diagram případů užití** _strukturní diagram_ nebo _diagram chování_? 

Back:

**diagram chování**
<!--ID: 1709724064733-->
END

---


START
BI-SZZ

K čemu slouží **UML diagram případů užití**?

Back:

Zobrazuje vztahy:
- mezi **jednotlivými případy užití** (`include, extend`)
- mezi **případy užití** a **aktéry**

_Příklady:_
![](../Assets/Pasted%20image%2020240306105718.png)
![](../Assets/Pasted%20image%2020240306105704.png)
<!--ID: 1709724064735-->
END

---


START
BI-SZZ

Co v UML diagramu případů užití znamená `«include»`?

Např.
$$A \xrightarrow{«include»} B$$
Back:

Znamená to, že scénář $A$ ke svému vykonání potřebuje projít scénář $B$.

_Např._
![](../Assets/Pasted%20image%2020240306110323.png)

Takto to potom vypadá ve scénáři:
![](../Assets/Pasted%20image%2020240306110623.png)
<!--ID: 1709724064738-->
END

---


START
BI-SZZ

K čemu je dobré používat `«include»`?

Back:

Abych tím nemusel ve scénářích **opakovat** podobné části.
<!--ID: 1709724064740-->
END

---


START
BI-SZZ

Co v UML diagramu případů užití znamená `«extend»`?

Např.
$$A \xrightarrow{«extend»} B$$

Back:

Znamená to, že scénář $A$ je voliteným rozšířením případu $B$.

Šipka jde od toho, co rozšiřuje, k tomu rozšiřovanému use casu!

_Např._
Zde můžu odstranit knihu, aniž bych si zobrazil seznam knih. Zobrazení knih je optional.
![](../Assets/Pasted%20image%2020240306110323.png)

Takto to vypadá ve scénáři:
![](../Assets/Pasted%20image%2020240306111035.png)
<!--ID: 1709724064743-->
END

---


START
BI-SZZ

Co jsou **scénáře případů užití**?

Back:

Podrobný popis toho, **co** musí systém dělat (ne **jak**) krok za krokem.

Vždy se zpravidla střídají v krocích akce uživatele a reakce systému.
<!--ID: 1709724064745-->
END

---


START
BI-SZZ

Jaké jsou **typy scénářů případů užití**? (3)

Back:

- **hlavní scénář**
- **vedlejší scénáře**
- **výjimky**
<!--ID: 1709724064748-->
END

---


START
BI-SZZ

Jakým diagramem lze vizualizovat komplexnější scénáře?

Back:

UML diagramem aktivit
<!--ID: 1709724064751-->
END

---

### Model procesů


START
BI-SZZ

Co je cílem **modelu procesů**?

Back:

Cílem je lepší pochopení činností zákazníka
<!--ID: 1709724064753-->
END

---


START
BI-SZZ

Co je **proces**?

Back:

**proces** = sada aktivit, za které jsou zodpovědné různé role
<!--ID: 1709724064757-->
END

---


START
BI-SZZ

Jaké jsou dva stavy procesů?

Back:

- **současný stav** (as-is)
- **plánovaný stav** (to-be)
<!--ID: 1709724064759-->
END

---


START
BI-SZZ

Jaký diagram se používá pro modelování procesů?

Back:

**UML diagram aktivit**
<!--ID: 1709724064762-->
END

---


START
BI-SZZ

Je **UML diagram aktivit** _strukturní diagram_ nebo _diagram chování_? 

Back:

**diagram chování**
<!--ID: 1709724064765-->
END

---


START
BI-SZZ

K čemu lze využívat **UML diagram aktivit**?

Back:

- **jako vývojový diagram algoritmu**
- **jako popis složitého scénáře případu užití**
<!--ID: 1709724064767-->
END

---


START
BI-SZZ

Jaké jsou typicky části **UML diagramu aktivit**? (4)

Back:

- **zóny zodpovědnosti** (swimlanes)
- **akční uzly** (aktivity, odesílání a přijímání události, časová událost)
- **řídící uzly** (počáteční, koncový, konec toku, rozhodovací, paralelní souběh)
- **objektové uzly** pro vstupy a výstupy aktivit

_Příklad:_
![](../Assets/Pasted%20image%2020240306112025.png)
<!--ID: 1709724064770-->
END

---

#### UML diagramu aktivit podrobně
_todo_

