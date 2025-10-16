---
created: 2024-03-24T14:11:27
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-28 BI-WI-18 TJV

> BI-WSI-SI-28 / BI-WSI-WI-18 (TJV)
> Slabé vazby mezi objekty: význam a výhody. Princip obrácení řízení (inversion of control) a vkládání závislostí (dependency injection)


### slabé vazby mezi objekty

START
BI-SZZ

Co jsou **silné vazby** mezi objekty?

Back:

**silné vazby** (vysoká provázanost, tight coupling) = funkčnost objektů (nebo obecněji jakýchkoliv softwarových komponent) je závislá na znalosti, existenci nebo funkčnosti jiných objektů

pokud mají např. objekty business vrstvy silné vazby na instance datové vrstvy, budoucí změny bude potřeba provést na obou místech, čemuž se chceme vyhnout
<!--ID: 1711286841171-->
END

---


START
BI-SZZ

Co jsou **slabé vazby** mezi objekty?

Back:

**slabé vazby** (nízká provázanost, loose coupling) = objekty jsou co možná nejvíc nezávislé na ostatních objektech, dokážou fungovat samostatně(ji), nepotřebují vědět skoro nic o implementaci ostatních objektů
<!--ID: 1711286841185-->
END

---


START
BI-SZZ

Jaká je výhoda **slabých vazeb** mezi objekty?

Back:

výhodou je větší flexibilita, lepší rozšiřitelnost, škálovatelnost, upravitelnost a konfigurovatelnost do budoucna
<!--ID: 1711286841188-->
END

---

### obrácené řízení (Inversion of Control, IoC)

START
BI-SZZ

Co je **inversion of control** (IoC)?

Back:

návrhový vzor, kdy můj specifický kód odevzdává řízení běhu programu (control flow) obecnějšímu frameworku, takže “framework volá můj kód”

“obrácení” proto, že jde o opak proti procedurálnímu programování, kde můj specifický kód využívá knihovny pro řešení obecnějších úkolů, tzn. “můj kód volá knihovnu”
<!--ID: 1711286841192-->
END

---


START
BI-SZZ

Jak prakticky vypadá **inversion of control** v Java aplikaci?

Back:

v kontextu Javy se ovšem pojmem inversion of control myslí to, že frameworku (Spring) odevzdávám kontrolu nad vytvářením instancí a řízením závislostí (což se hodně kryje s pojmem dependency injection níže)

díky IoC objekty samy nevytváří instance jiných objektů, ale využívají k tomu rozhraní nebo abstraktní třídy, takže samotné vytvoření instance a vložení správných závislostí (viz níže) může zařídit framework a původní objekt nemusí o ostatních objektech skoro nic vědět
<!--ID: 1711286841195-->
END

---


START
BI-SZZ

U čeho se často využívá **inversion of control**?

Back:

užitečné zejména u “událostmi řízených” (event-driven) GUI nebo webových aplikací, kde se chce programátor soustředit na logiku zpracovávání událostí a ne na jejich pravidelné odchytávání, odesílání, řízení callbacků apod. (to za něj vyřeší framework)
<!--ID: 1711286841198-->
END

---


START
BI-SZZ

Co je cílem inversion of control? (Jakých 2 věcí se snaží dosáhnout?)

Back:

cílem je oddělení zodpovědností (separation of concerns), a tím pádem nižší provázanost (loose coupling)
<!--ID: 1711286841201-->
END

---


START
BI-SZZ

Jaké praktické výhody má používání **inversion of control**?

Back:

Jednodušší implementace a testování
<!--ID: 1711286841204-->
END

---

### vkládání závislostí (Dependency Injection, DI)

START
BI-SZZ

Co znamená dependency injection?

Back:

objekty dostávají své závisloti zvenčí (od frameworku), místo aby si je samy vytvářely (takže nemusí ani vědět, jak je vytvořit)

**závislost** = instance nebo funkce jiného objektu, kterou pro svoji funkčnost potřebuji

ve staticky typovaných jazycích (vč. Javy) stačí v objektu deklarovat rozhraní závislosti místo její konkrétní implementace (takže tyto implementace lze měnit za běhu bez rekompilace)
<!--ID: 1711286841207-->
END

---


START
BI-SZZ

Jak souvisí **dependency injection** a **inversion of control**?

Back:

dependency injection je jedním ze způsobů, jak dosáhnout IoC

v kontextu Javy spočívá IoC především v dependency injection, ale existují další způsoby jako např. návrhové vzory Service Locator a Factory
<!--ID: 1711286841209-->
END

---


START
BI-SZZ

Jaké výhody má dependency injection?

Back:

zlepšuje flexibilitu, rozšiřitelnost a znovupoužitelnost tříd
<!--ID: 1711286841212-->
END

---


START
BI-SZZ

Jakou potenciální nevýhodu má dependency injection?

Back:

kód je na první pohled složitější
<!--ID: 1711286841215-->
END

---
