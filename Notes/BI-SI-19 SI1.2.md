---
created: 2024-03-10T14:37:05
parent: "[[SI1.2]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-19 BI-WI-14 SI1.2

> BI-WSI-SI-19 / BI-WSI-WI-14 (SI1.2)
> Vzory používané během návrhu: třívrstvá architektura, Model View Controller, GoF vzory (Abstraktní továrna, Stav, Adaptér).

### Třívrstvá architektura

START
BI-SZZ

Co je **třívrstvá architektura** a **pro co je vhodná**?

Back:

struktura systému vhodná pro složitější (např. podnikové) aplikace
<!--ID: 1710081841013-->
END

---


START
BI-SZZ

Jaké jsou **vrstvy třívrstvé architektury**? (3)

Back:

- **prezentační** vrstva - formátování a zobrazování výstupů pro uživatele, zpracovávání jeho požadavků, navigace, …
- **business** vrstva - business logika, složitější algoritmy, validace, …
- **datová** vrstva - ukládání a perzistence dat
<!--ID: 1710081841018-->
END

---


START
BI-SZZ

Jakým směrem jdou závislosti v rámci třívrstvé architektury?

Back:

Závislosti jsou vždy směrem "dolů".

Tzn. např. business vrstva by neměla být závislá na prezentační.
<!--ID: 1710081841021-->
END

---


START
BI-SZZ

Jak se liší **striktní** a **relaxovaná** třívrstvá architektura?

Back:

- **striktní** = závislosti jen na sousední vrstvě
- **relaxovaná** = závislosti přes několik vrstev (např. prezentační -> datová)
<!--ID: 1710081841024-->
END

---


START
BI-SZZ

Jaká je hlavní výhoda třívrstvé architektury?

Back:

Relativní **nezávislost** jednotlivých vrstev -> snadná **vyměnitelnost** a **znovupoužitelnost** jednotlivých vrstev.

Např. lze mít více prezentačních vrstev nad jednou aplikací.
<!--ID: 1710081841027-->
END

---


START
BI-SZZ

Co je **MVC**?

Back:

Model View Controller (MVC) je návrhový vzor, který řeší problémy prezentační vrstvy oddělením logiky od GUI.

Často je již připraven ve frameworcích jako Spring, React apod.
<!--ID: 1710081841030-->
END

---

START
BI-SZZ

Co je **Model** v MVC?

Back:

Reprezentace dat (např. instance třídy)
<!--ID: 1710081841032-->
END

---


START
BI-SZZ

Jaké jsou 2 typy Modelu v MVC? Jak se od sebe liší?

Back:

- **aktivní** - upozorňuje okolí na změny ve svém stavu
- **pasivní** - reaguje na požadavky, ale nijak sám od sebe neinteraguje s okolím (např. DTO)
<!--ID: 1710081841035-->
END

---


START
BI-SZZ

Co je **View** v MVC?

Back:

Popis, jak se model bude zobrazovat (např. HTML šablony)
<!--ID: 1710081841038-->
END

---


START
BI-SZZ

Co je **Controller** v MVC?

Back:

Zpracování událostí a uživatelských vstupů, aktualizace modelu a view (např. metody volané při přístupu na konkrétní URL)
<!--ID: 1710081841041-->
END

---


START
BI-SZZ

Co je **MVP** a jak se liší od **MVC**?

Back:

**Model View Presenter** (MVP)

Události a vstupy odchytává **View** (nikoliv Controller) a zpracovává je **Presenter**
<!--ID: 1710081841043-->
END

---


START
BI-SZZ

Co je **GoF**?

Back:

**Gang of Four** - čtyři autoři knihy Design Patterns
<!--ID: 1710081841046-->
END

---


START
BI-SZZ

Jaké jsou **typy návrhových vzorů** (design patterns)? (3)

Back:

- **Creational patterns** (vzory pro vytváření objektů)
- **Structural patterns** (strukturální vzory)
- **Behavioral patterns** (vzory chování)
<!--ID: 1710081841049-->
END

---


START
BI-SZZ

Jmenuj nějaké **creational patterns** (2)

Back:

- **Abstraktní továrna** (Abstract Factory)
- **Stavitel** (Builder)
- a 3 další

_(Pro představu co všechno existuje:)_
![](../Assets/Pasted%20image%2020240310152549.png)
<!--ID: 1710081841052-->
END

---


START
BI-SZZ

Jmenuj nějaké **strukturální vzory** (1)

Back:

- **Adaptér**
- a 6 dalších

_(Pro představu co všechno existuje:)_
![](../Assets/Pasted%20image%2020240310152549.png)
<!--ID: 1710081841054-->
END

---


START
BI-SZZ

Jmenuj nějaké **vzory chování** (2)

Back:

- **Stav**
- **Pozorovatel** (Observer)
- a 9 dalších

_(Pro představu co všechno existuje:)_
![](../Assets/Pasted%20image%2020240310152549.png)
<!--ID: 1710081841057-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **Abstraktní továrna** (Abstract Factory) návrhový vzor.

Back:

**Rozhraní** pro vytváření skupiny objektů, přičemž uživatel tohoto rozhraní nemusí znát konkrétní implementaci objektů, protože ta je dána použitou konkrétní továrnou.

např. abstraktní továrna `GUIFactory` má metodu `createCheckbox()` a klient volající tuto metodu nemusí řešit, zda je továrna instance `WindowsGUIFactory` nebo `MacGUIFactory` a zda dostal `WindowsCheckbox` nebo `MacCheckbox`, protože oba implementují rozhraní `Checkbox`.
<!--ID: 1710081841060-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **Stavitel** (Builder) návrhový vzor.

Back:

Když mám třídu s _mnoha optional atributy_, builder pattern mi umožňuje jednoduše vytvářet instance té třídy, aniž bych psal hromadu konstruktorů s jednotlivými kombinacemi těch parametrů.

Jak vypadá builder pattern:
- V dané Builder třídě udělám jednotlivé metody pro nastavení daného atributu
- Potom zavolám metodu build, která mi sestaví daný objekt

_Příklad Builderu (ve Scale z BI-OOP):_
![](../Assets/Pasted%20image%2020240310152824.png)
<!--ID: 1710081841062-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **Adaptér** (Adapter) návrhový vzor.

Back:

Konvertuje rozhraní jedné třídy na rozhraní jiné (nekompatibilní) třídy, aby šly propojit.

např. adaptér `XmlToJsonAdapter` si drží instanci `XmlDocument`, ale zároveň implementuje rozhraní `JsonDocument` (včetně metody `numberOfMembers()`, kterou implementuje pomocí `numberOfNodes()` z `XmlDocument`), takže se dá použít všude, kde má být `JsonDocument`
<!--ID: 1710081841065-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **Stav** (State) návrhový vzor.

Back:

Chování třídy, které je závislé na stavu objektu, je oddělené do samostatné třídy, takže se zbavíme spousty ifů a switchů

např. objekt `Document` si drží `state` instanci nějaké implementace rozhraní `State` (např. `Draft` nebo `Published`) a metoda `edit()` v `Document` volá `state.edit()`, takže se provede správná akce v závislosti na aktuálním stavu
<!--ID: 1710081841068-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **Pozorovatel** (Observer) návrhový vzor.

Back:

Umožňuje notifikovat ostatní objekty, když nastane nějaká změna ve stavu daného objektu.

Hodí se to zejména u GUI na frontendu.

Např. `Canvas` na malování by měl v sobě pole `listeners` a pak metodu `addListener()` a `removeListener()`.

Když by uživatel něco na nakreslil na `Canvas`, `Canvas` by jednoduše projel všechny listeners a každého by notifikoval, že nastala změna ve stavu canvasu.

_Příklad z BI-OOP:_
![](../Assets/Pasted%20image%2020240310153715.png)
<!--ID: 1710081841071-->
END

---

