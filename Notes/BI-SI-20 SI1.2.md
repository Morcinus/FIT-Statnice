---
created: 2024-03-12T08:17:04
parent: "[[SI1.2]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-20 BI-WI-15 SI1.2

> BI-WSI-SI-20 / BI-WSI-WI-15 (SI1.2)
> Přiřazení zodpovědností třídám během návrhu, GRASP vzory (Nízká provázanost, Vysoká soudržnost), popis spolupráce objektů (UML sekvenční diagram, UML diagram tříd - využití během návrhu).

### GRASP

START
BI-SZZ

Co jsou GRASP vzory?

Back:

Základní principy pro přiřazení zodpovědností a úkolů třídám.

Nedefinuje jedno správné řešení, cílem je spíš najít kompromis mezi jednou megatřídou (malá soudržnost) a milionem minitříd (vysoká provázanost) pro dlouhodobou udržitelnost, přehlednost, rozšiřitelnost atd.
<!--ID: 1710234028235-->
END

---


START
BI-SZZ

Jaké jsou 3 GRASP vzory, které jsme se učili?

Back:

- **Nízká provázanost**
- **Vysoká soudružnost**
- **Informační expert**
<!--ID: 1710234028245-->
END

---


START
BI-SZZ

Co je **nízká provázanost** (low coupling)?

Back:

Přiřazování zodpovědnosti tak, aby se minimalizovaly vazby mezi třídami.
<!--ID: 1710234028253-->
END

---

START
BI-SZZ

Co chceme? Low coupling nebo high coupling?

Back:

**Low coupling** (nízkou provázanost)
<!--ID: 1710234028260-->
END

---


START
BI-SZZ

Proč chceme **nízkou provázanost** (low coupling)?

Back:

Třídy jsou pak _lépe testovatelné_ a jednoduššeji se dělají _změny_ v kódu.
<!--ID: 1710234028267-->
END

---


START
BI-SZZ

Jak zajistím **nízkou provázanost** (low coupling)?

Back:

_High cohesion vede k low couplingu._

Třída by měla fungovat jako samostatná jednotka a měla by komunikovat s ostatníma třídama jen pomocí kvalitních interfaců.

_Příklad:_
For example, a service that sends a letter is most reusable when just the customer identifier is passed and the customer address is obtained within the service. This decouples services because services do not need to be called in a specific order (e.g. GetCustomerAddress, SendLetter).
<!--ID: 1710234028274-->
END

---


START
BI-SZZ

Co je **vysoká soudružnost** (high cohesion)?

Back:

Přiřazovat zodpovědnosti tak, aby každá třída byla zaměřená na jediný úkol.

_Např._ 
Třída pro odesílání emailů by měla jen odesílat emaily. Neměla by i přijímat emaily atd.
<!--ID: 1710234028280-->
END

---


START
BI-SZZ

Co chceme? Low cohesion coupling nebo high cohesion?

Back:

**High cohesion** (vysokou soudružnost)
<!--ID: 1710234028288-->
END

---


START
BI-SZZ

Proč chceme **vysokou soudružnost** (high cohesion)?

Back:

Lepší udržitelnost, testovatelnost, nižší provázanost, jednodušší na pochopení, znovupoužitelnost...
<!--ID: 1710234028294-->
END

---


START
BI-SZZ

Co je **informační expert** v GRASP?

Back:

Zodpovědnost se má přiřadit třídě, která má všechny informace, k tomu, aby splnila ty požadavky.
<!--ID: 1710234028302-->
END

---

### Popis spolupráce objektů

START
BI-SZZ

K čemu je dobrý popis spolupráce objektů?

Back:

Zachycení architektonických (implementačních) rozhodnutí a zejména komunikace objektů při realizaci scénářů případů užití.
<!--ID: 1710234028310-->
END

---

### UML sekvenční diagram

START
BI-SZZ

Co je a k čemu slouží **UML sekvenční diagram**?

Back:

UML diagram popisující **komunikaci mezi objekty**.

_Příklad:_
![](../Assets/Pasted%20image%2020240312084844.png)
<!--ID: 1710234028318-->
END

---


START
BI-SZZ

Je **UML sekvenční diagram** _strukturní diagram_ nebo _diagram chování_? 

Back:

**diagram chování**
<!--ID: 1710234028325-->
END

---


START
BI-SZZ

Jak se pojmenovávají objekty v UML sekvenčním diagramu?

Back:

Buď `Objekt A:Třída A` nebo obecně jako instance třídy `:Třída B`

_Např._
![](../Assets/Pasted%20image%2020240312085000.png)

<!--ID: 1710234028332-->
END

---


START
BI-SZZ

Jaké metody můžu volat, když je tam `: Třída` (a ne `Objekt A:Třída A`) ?

![](../Assets/Pasted%20image%2020240312090444.png)

Back:

Pouze _statické metody_.
<!--ID: 1710234028339-->
END

---


START
BI-SZZ

Jak se značí **synchronní** a **asynchronní zprávy** předávané mezi objekty?

Back:

Zprávy = volání metody

Asynchronní - normální šipka
Synchronní - plná šipka


![](../Assets/Pasted%20image%2020240312090654.png)
<!--ID: 1710234028345-->
END

---


START
BI-SZZ

Jak se v UML sekvenčním diagramu značí návratové hodnoty?

Back:

Lze značit buď samostatnou přerušovanou šipkou nebo syntaxí `vysledek = zprava()` nad šipkou zprávy.

![](../Assets/Pasted%20image%2020240312091003.png)
<!--ID: 1710234028352-->
END

---


START
BI-SZZ

Jak se značí vytvoření / zničení objektu v UML sekvenčním diagramu?

Back:

Vytovření - čárkovaná šipka s `«create»`
Zničení - plná šipka s `«destroy»` + křížek

![](../Assets/Pasted%20image%2020240312091152.png)
<!--ID: 1710234028358-->
END

---


START
BI-SZZ

Co je a jak se značí tzv. found message v UML sekvenčním diagramu?

Back:

Found message = když mě nezajímá, kdo danou metodu volá.

Značí se takto:
![](../Assets/Pasted%20image%2020240312091503.png)

Tags: optional
<!--ID: 1710234028365-->
END

---


START
BI-SZZ

Jak se v UML sekvenčním diagramu značí volání metody v rámci dané třídy?

Back:

![](../Assets/Pasted%20image%2020220331113415.png)
Tags: optional
<!--ID: 1710234028371-->
END

---


START
BI-SZZ

Jak se v UML sekvenčním diagramu dělá větvení a loopy?

Back:

Větvení pomocí `alt`, loopy pomocí `loop`.

![](../Assets/Pasted%20image%2020220331113752.png)

Tags: optional
<!--ID: 1710234028377-->
END

---

### UML diagram tříd

vše je tady: [BI-SPOL-31 SI1.2](BI-SPOL-31%20SI1.2.md)
