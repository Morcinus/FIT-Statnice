---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-1 NI-ADP

> NI-SI-1 (NI-ADP)
> Základní principy objektového návrhu (DRY, KISS, YAGNI, SOLID(SRP, OCP, LSP, ISP, DIP), POLA, TBSR, Tech debt, SoC, LoD, APO)
### DRY

START
NI-SZZ

Vysvětli design princip **DRY** - co to znamená a proč by se to mělo dodržovat

Back:

**Don't repeat yourself**
= neopakovat se v kódu, dokumentaci a testech.

**Proč:**

- Zvyšuje to náročnost údržby
- Zvyšuje to výskyt bugů
- Znemožňuje to efektivně dělat změny v kódu

Tags: should-know N001F001
<!--ID: 1760705194617-->

END

---

### KISS

START
NI-SZZ

Vysvětli design princip **KISS** - co to znamená a proč by se to mělo dodržovat.

Back:

**Keep It Simple Stupid**
= Kód by se měl být co nejjednodušší

**Proč:**

- Lépe se v kódu orientuje (není potřeba tolik znalostí o codebase), díky tomu je např. možné jednoduššeji zařadit nové lidi do daného projektu
- Komplexní kód se hůř testuje, debuguje, udržuje, rozšiřuje

<!-- ExampleStart -->

Například se dá kód rozpadnout do menších částí.

<!-- ExampleEnd -->

Tags: should-know N001F002
<!--ID: 1760705194619-->

END

---

### YAGNI

START
NI-SZZ

Vysvětli design princip **YAGNI** - co to znamená a proč by se to mělo dodržovat (4 costs).

Back:

**You Ain’t Gonna Need It**
= Měli bychom programovat pouze věci, které jsou momentálně potřeba nebo 100% víme, že budou potřeba.

**Proč:**

- Špatně se odhaduje, co bude potřeba v budoucnu, požadavky se hodně mění. To co si myslíme, že bude potřeba teď, nemusí být potřeba později.
- Costs: - **cost of building** = strávíme čas na něčem co možná ani nevyužijeme - **cost of delay** = zpomalíme tím projekt, protože jsme se mohli věnovat něčemu jinému - **cost of carry** = budeme mít od začátku složitější systém, což je horší na údržbu, debuggování, rozšiřování atd. - **cost of repairs** = v době, kdy to bude potřeba, pravděpodobně daná funkcionalita stejně bude mít hodně technical debt

Tags: should-know N001F003
<!--ID: 1760705194622-->

END

---

### SOLID

START
NI-SZZ

Vysvětli design princip **SOLID** - z jakých pojmů se to skládá?

Back:

**SOLID**

- **Single responsibility** = třída by měla mít jednu zodpovědnost
- **Open-closed** = třídy by měly být otevřené pro rozšíření, uzavřené pro modifikaci
- **Liskov Substitution** = pokud $S$ je podtypem $T$, potom všude kde se používá objekt $T$, můžu použít bez změny programu i objekt $S$
- **Interface Segregation** = Klienti by neměli být nuceni záviset na metodách, které nepoužívají.
- **Dependency Inversion** = High-level moduly by neměly záviset na low-level modulech. Obojí by mělo záviset na abstrakci.

Tags: should-know N001F004
<!--ID: 1760705194625-->

END

---

#### Single Responsibility

START
NI-SZZ

Vysvětli **Single Responsibility** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Single Responsibility**
= třída/metoda by měla mít jednu zodpovědnost

**Proč:**

- Méně bugů - když se vyskytne bug, tak se pak bude týkat konkrétní (izolované) části programu
- Jednodušší úpravy, údržba,...

<!-- DetailInfoStart -->

Z courses:
![](../../../Assets/Pasted%20image%2020250128131429.png)
If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

**Goal**

This principle aims to separate behaviours so that if bugs arise as a result of your change, it won’t affect other unrelated behaviours.

<!-- DetailInfoEnd -->

Tags: should-know N001F005
<!--ID: 1760705194627-->

END

---

#### Open-closed

START
NI-SZZ

Vysvětli **Open-closed** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Open-closed**
= třídy by měly být otevřené pro rozšíření, uzavřené pro modifikaci

**Proč:**

- když přidáváme fičury, tak spíš neuděláme bugy ve starých

<!-- DetailInfoStart -->

Z courses:
![](../../../Assets/Pasted%20image%2020250128131647.png)
Changing the current behaviour of a Class will affect all the systems using that Class.

If you want the Class to perform more functions, the ideal approach is to add to the functions that already exist NOT change them.

**Goal**

This principle aims to extend a Class’s behaviour without changing the existing behaviour of that Class. This is to avoid causing bugs wherever the Class is being used.

<!-- DetailInfoEnd -->

Tags: should-know N001F006
<!--ID: 1760705194630-->

END

---

#### Liskov Substitution

START
NI-SZZ

Vysvětli **Liskov Substitution** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Liskov Substitution**
= pokud $S$ je podtypem $T$, potom všude kde se používá objekt $T$, můžu použít bez změny programu i objekt $S$

**Proč:**

- Cílem je vynutit konzistenci tak, aby rodiče a potomci mohli být použiti stejným způsobem

<!-- DetailInfoStart -->

Z courses
![](../../../Assets/Pasted%20image%2020250128131830.png)
When a **child** Class cannot perform the same actions as its **parent** Class, this can cause bugs.

If you have a Class and create another Class from it, it becomes a **parent** and the new Class becomes a **child.** The **child** Class should be able to do everything the **parent** Class can do. This process is called **Inheritance**.

The **child** Class should be able to process the same requests and deliver the same result as the **parent** Class or it could deliver a result that is of the same type.

The picture shows that the **parent** Class delivers Coffee(it could be any type of coffee). It is acceptable for the **child** Class to deliver Cappuccino because it is a specific type of Coffee, but it is NOT acceptable to deliver Water.

If the **child** Class doesn’t meet these requirements, it means the **child** Class is changed completely and violates this principle.

**Goal**

This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any errors.

<!-- DetailInfoEnd -->

Tags: should-know N001F007
<!--ID: 1760705194633-->

END

---

#### Interface Segregation

START
NI-SZZ

Vysvětli **Interface Segregation** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Interface Segregation**
= Klienti by neměli být nuceni záviset na metodách, které nepoužívají.

**Proč:**

- Funkcionality by měly být rozděleny do menších částí tak, aby třída používala _pouze_ to, co skutečně potřebuje
- Díky tomu méně bugů, menší komplexita kódu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250128132217.png)
When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions.

A Class should perform only actions that are needed to fulfil its role. Any other action should be removed completely or moved somewhere else if it might be used by another Class in the future.

**Goal**

This principle aims at splitting a set of actions into smaller sets so that a Class executes ONLY the set of actions it requires.

<!-- DetailInfoEnd -->

Tags: should-know N001F008
<!--ID: 1760705194636-->

END

---

#### Dependency Inversion

START
NI-SZZ

Vysvětli **Dependency Inversion** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Dependency Inversion**

1. High-level moduly by neměly záviset na low-level modulech. Obojí by mělo záviset na abstrakci.
2. Abstrakce by neměly záviset na detailech. Detaily by měly záviset na abstrakcích (viz vysvětlení).

**Proč:**

- Cílem je aby třídy závisely na rozhraních a ne přímo na dalších třídách. Díky tomu je jednodušší kód měnit.

<!-- DetailInfoStart -->

Z courses:
![](../../../Assets/Pasted%20image%2020250128132632.png)
Firstly, let’s define the terms used here more simply

**High-level Module(or Class)**: Class that executes an action with a tool.

**Low-level Module (or Class)**: The tool that is needed to execute the action.

**Abstraction**: Represents an interface that connects the two Classes.

**Details**: How the tool works

This principle says a Class should not be fused with the tool it uses to execute an action. Rather, it should be fused to the interface that will allow the tool to connect to the Class.

It also says that both the Class and the interface should not know how the tool works. However, the tool needs to meet the specification of the interface.

**Goal**

This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.

<!-- DetailInfoEnd -->

Tags: should-know N001F009
<!--ID: 1760705194639-->

END

---

### POLA

START
NI-SZZ

Vysvětli design princip **POLA** - co to znamená a proč by se to mělo dodržovat.

Back:

**Principle of least astonishment**
= Výsledky dané funkce by měly být jasný. konzistentní a předvídatelný podle názvu funkce a dalších informací

**Proč:**

- S kódem se lépe pracuje, když je předvídatelný

Tags: should-know N001F010
<!--ID: 1760705194642-->

END

---

### TBSR

START
NI-SZZ

Vysvětli design princip **TBSR** - co to znamená a proč by se to mělo dodržovat.

Back:

**The Boy Scout Rule**
= Nechat kód lepší než jsme ho našli

**Proč:**

- Díky tomu se postupně zbavujeme tech debtu, aniž bychom museli stopnout veškerou práci a dělat obří refaktoring

Tags: should-know N001F011
<!--ID: 1760705194644-->

END

---

### Tech debt

START
NI-SZZ

Vysvětli co je **Tech debt** - co to je, jaké má kvadranty?

Back:

**Technical debt:**
= za cenu rychlosti produkujeme horší kód

Pozn. tech debt se může vytvářet i sám (tím že zastarávají technologie atd.) - není to nutně to, že jsme "odfláknuli práci".

**Kvadranty:**

- Úmyslný/Neúmyslný
- Lehkovážný/Rozumný

Např.

- Úmyslný a lehkovážný - "Nemáme čas na design"
- Úmyslný a rozumný - "Neuděláme to, ale počítáme s dopady"
- Neúmyslný a lehkovážný - "Co je layering?"
- Neúmyslný a rozumný - "Teď víme, že jsme to měli udělat jinak" (např. najdeme lepší řešení až po tom, co jsme to udělali)

Tags: should-know N001F012
<!--ID: 1760705194647-->

END

---

### Separation of Concerns

START
NI-SZZ

Vysvětli design princip **SoC** - co to znamená a proč by se to mělo dodržovat.

Back:

**Separation of Concerns**
= části systému by měly být roděleny podle jejich účelu

Např.

- Layered architecture
- HTML/CSS/JavaScript
- Třídy - single responsibility principle

**Proč:**

- Systém je tak přehlednější, lépe se udržuje, debuguje atd.

Tags: should-know N001F013
<!--ID: 1760705194650-->

END

---

START
NI-SZZ

Vysvětli design princip **LoD** - co to znamená a proč by se to mělo dodržovat.

Back:

**Law of Demeter**
= Objekty by měly volat metody na třídách, které přímo používají. Neměli by volat metody "ob jednu" třídu (viz obrázek).

**Proč:**

- Dělá to kód míň komplikovaným

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250128140241.png)

<!-- ImageEnd -->

<!-- ExplanationStart -->

An object can call methods that are apart of:

- the same object
- a parameter passed into the method
- an object created within its method
- an object it owns
- a global variable

<!-- ExplanationEnd -->

Tags: should-know N001F014
<!--ID: 1760705194652-->

END

---

### APO

START
NI-SZZ

Vysvětli design princip **APO** - co to znamená a proč by se to mělo dodržovat.

Back:

**Avoid Premature Optimization**
= Neměli bychom předčasně zlepšovat věci.

Místo toho bychom měli nejdříve vyvinout funkční kód, pak až zjistit, které části potřebují optimalizaci.

**Proč:**

- Plýtváme zdroji na něčem co nevíme jeslti bude potřeba
- Zvyšujeme zbytečně komplexitu kódu

<!-- ExampleStart -->

- Vývojáři mají tendenci být perfekcionisti a snažit se udělat "perfektní/bezchybný kód"

<!-- ExampleEnd -->

Tags: should-know N001F015
<!--ID: 1760705194655-->

END

---
