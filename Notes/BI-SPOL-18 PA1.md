---
created: 2024-05-27T19:49:00
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-18 PA1

> BI-SPOL-18 (PA1)
> Datové typy v programovacích jazycích. Staticky a dynamicky alokované proměnné, spojové seznamy. Modulární programování, procedury a funkce, vstupní a výstupní parametry. Překladač, linker, debugger.

### datové typy v programovacích jazycích

START
BI-SZZ

Proč potřebujeme v programování **datové typy**?

Back:

interně jsou všechna data uložena binárně, takže potřebujeme datové typy, aby bylo jasné, jak ty jedničky a nuly interpretovat

END

---


START
BI-SZZ

Co určuje **datový typ**?

Back:

datový typ určuje množinu možných hodnot a použitelných operací

END

---


#### primitivní datové typy


START
BI-SZZ

Jaké jsou primitivní datové typy v Cčku?

Back:

- boolean
- int
- char
- float
- double

END

---


START
BI-SZZ

Jaké jsou **dva druhy** **celočíselných** datových typů? **Jak jsou uložené v paměti**?

Back:

- **čísla bez znaménka** - jednoduše **binárně** (`unsigned int`, `unsigned char`, …)
- **čísla se znaménkem** - nejčastěji pomocí **doplňkového kódu** (`int`, `char`)

END

---



START
BI-SZZ

Pomocí jakých typů jsou reprezentována **desetiná čísla** v C? (2)

Back:

- `float`
- `double`
- ...

END

---


START
BI-SZZ

Jaké **důsledky** má to, že **desetinná čísla** nejsou v paměti uložena **přesně**? (3)

Back:

- sčítání nemusí fungovat asociativně
- kontrola rovnosti by měla tolerovat odchylku (odvozenou např. z DBL_EPSILON)
- pro velká desetinná čísla vyjde `a+1=a` (problém v cyklech s `++`)

END

---

#### složené datové typy


START
BI-SZZ

Co jsou složené datové typy?

Back:

Typy složené z více primitivních datových typů

END

---


START
BI-SZZ

Jaké jsou příklady složených datových typů

Back:

- pole (`string`)
- struktury (struct, union)
- třídy,...

END

---

#### ukazatele (pointers)


START
BI-SZZ

Co jsou ukazatele?

Back:

Ukládají adresu v paměti počítače

END

---


START
BI-SZZ

Co musí být **součástí ukazatele**?

Back:

informace, jaký datový typ je na dané adrese uložen

END

---


START
BI-SZZ

Lze s ukazateli počítat aritmeticky?

Back:

Ano!

END

---

#### další datové typy

START
BI-SZZ

Jaké jsou **další datové typy**, co nejsou ukazatele, složené ani primitivní?

Back:

- funkce
- reference
- nulový typ (`void`)

END

---

### staticky a dynamicky alokované proměnné


START
BI-SZZ

Co je **proměnná**?

Back:

Objekt určitého datového typu obsahující hodnotu. 

Hodnota se může za běhu měnit

END

---


START
BI-SZZ

Co má v programování každá **proměnná**?

Back:

- jméno
- rozsah platnosti (scope)

END

---


START
BI-SZZ

Co je **staticky alokovaná proměnná**? Kde se alokuje?

Back:

proměnná, co se alokuje na **zásobníku** (stack) **při kompilaci**

END

---


START
BI-SZZ

Musíme se u **staticky alokované proměnné** starat o **uvolňování paměti**?

Back:

Ne.

END

---


START
BI-SZZ

Jak vzniká **staticky alokovaná proměnná** v Cčku? Může mít měnící se velikost?

Back:

- vzniká deklarací
- její velikost je předem daná (nemůže se měnit)

END

---


START
BI-SZZ

Co je **dynamicky alokovaná proměnná**? Kde se alokuje?

Back:

proměnná, co se alokuje **za běhu programu** na **haldě** (heap)

END

---


START
BI-SZZ

Jak vzniká **dynamicky alokovaná proměnná**?

Back:

nevzniká deklarací, ale pomocí speciálních funkcí (`malloc` v C) či operátorů (`new` v C++)

END

---


START
BI-SZZ

Má **dynamicky alokovaná proměnná** jméno?

Back:

nemá jméno a přistupuje se k ní adresou přes ukazatel

END

---


START
BI-SZZ

Co je třeba udělat s alokovaným prostorem pro dynamickou proměnnou po tom co ho už nepotřebuju? Jak to lze udělat?

Back:

alokovaný prostor je potřeba po použití opět uvolnit

- podle programu buď **ručně** (`free` v C, `delete` v C++) nebo se o to automaticky stará **garbage collector**

END

---


START
BI-SZZ

Co se stane, když neuvolním paměť u dynamicky alokovaných proměnných?

Back:

**memory leak**

END

---


START
BI-SZZ

Pro co má smysl používat **dynamicky alokované proměnné**?

Back:

Pro "velké proměnné" - pole, struktury atd.

END

---

### spojové seznamy


START
BI-SZZ

Co je **spojový seznam** (linked list)?

Back:

datová struktura složená z prvků, z nichž každý obsahuje hodnotu a ukazatel na následující prvek

END

---


START
BI-SZZ

Jaké dvě **vlastnosti** má **spojový seznam**?

Back:

- jde o **spojovou strukturu** (= vznikají relace předchůdce-následník)
- jde o **lineární strukturu** (= nevětví se)

END

---


START
BI-SZZ

Co se může nacházet na konci **spojového seznamu**?

Back:

- zarážka (pro zjednodušení operací)
- `null` ukazatel

END

---

### modulární programování


START
BI-SZZ

Co je **modul** v modulárním programování?

Back:

zdrojový soubor, který poskytuje určitou funkcionalitu a je částí většího programu

END

---


START
BI-SZZ

Z čeho se skládá **modul** v modulárním programování v C/C++? (2)

Back:

- **specifikace** (popis rozhraní) - v C/C++ jde o **hlavičkové soubory** `.h` s deklaracemi
- **implementace** - v C/C++ jde o **implementační soubory** `.c`/`.cpp` s definicemi

v jiných jazycích jde například o třídy a balíčky

END

---

### funkce a procedury


START
BI-SZZ

Co je **funkce** v programování?

Back:

podprogram řešící dílčí problém

END

---


START
BI-SZZ

Co je **hlavička funkce** (aka prototyp, signatura)? Co přesně obsahuje (3)?

Back:

popis rozhraní funkce

- **datový typ návratové hodnoty** (nebo `void`, pokud funkce nic nevrací)
- **jméno** (identifikátor) funkce
- **seznam** (formálních) **parametrů** ve tvaru `typ jméno` oddělený čárkami

_např._ `void printMax(int a, int b)`

END

---


START
BI-SZZ

Co je **deklarace funkce** v C? Jak se zapisuje v C?

Back:

**hlavička + středník**

Deklarací říkám, že ta funkce někde v tom programu existuje.

END

---


START
BI-SZZ

Co je **tělo funkce**?

Back:

blok kódu, který se provede po zavolání funkce

END

---


START
BI-SZZ

Co je **procedura** v C/C++?

Back:

funkce s návratovým typem `void`

END

---

#### vstupní a výstupní parametry


START
BI-SZZ

K čemu se používají **parametry** funkcí?

Back:

pro předání **vstupních dat** funkci

END

---


START
BI-SZZ

Co je **formální parametr**?

Back:

parametr v hlavičce funkce

END

---


START
BI-SZZ

Co je **skutečný parametr**?

Back:

hodnota vstupující do konkrétního volání funkce

Taky se to nazývá argument

END

---


START
BI-SZZ

Co jsou **výstupní parametry**?

Back:

Parametry, u kterých když změním hodnotu, tak se to projeví i mimo scope té funkce.

END

---


START
BI-SZZ

Lze v C a C++ využít parametry jako **výstupní**?

Back:

V C ne, tam jsou parametry pouze vstupní. Lze to ovšem simulovat pomocí **ukazatelů**!

V C++ ano, tam lze použít **reference** jako výstupní parametry.

END

---

### kompilace


START
BI-SZZ

Co je **kompilace**?

Back:

překlad zdrojových kódů z vyššího programovacícho jazyka na spustitelný binární kód nebo kód v nižším jazyce

END

---


START
BI-SZZ

Jaké **3 fáze** má kompilace v C/C++?

Back:

1. preprocessing
2. compilation
3. linking

END

---


START
BI-SZZ

Co se děje v **preprocessingu** při kompilaci v C/C++?

Back:

**preprocesor** vkládá hlavičkové soubory (`#include`), řeší podmíněnou kompilaci (`#ifndef`), makra (`#define`) apod.

END

---

START
BI-SZZ

Co se děje v **compilation** při kompilaci v C/C++?

Back:

**překladač** překládá **zdrojové soubory** (`.c`, `.cpp`) a **hlavičkové soubory** (`.h`) na **objektové soubory** (`.o`, `.obj`), v nichž zatím nejsou řešeny reference mezi moduly

END

---

START
BI-SZZ

Co se děje v **linkingu** při kompilaci v C/C++?

Back:

**linker** spojuje moduly **objektové soubory** (`.o`, `.obj`), knihovny objektových souborů (`.a`, `.lib`) a **sdílené knihovny** objektových souborů (`.so`, `.dll`) do **spustitelných souborů** (`.exe` nebo bez přípony)

END

---


START
BI-SZZ

Co typicky zařizuje proces kompilace v C/C++?

Back:

IDE nebo utilita `make`, která využívá soubor `Makefile`

END

---

#### linkování


START
BI-SZZ

Jaké jsou **dva typy linkování** při kompilaci v C/C++? Jak se liší?

Back:

- **statické linkování** = všechny knihovny jsou zahrnuté ve výsledném spustitelném programu (ten je nezávislý, ale zbytečně velký)
- **dynamické linkování** = knihovny se volají až za běhu (spustitelný soubor je menší)

END

---


START
BI-SZZ

Co je **debugger**?

Back:

nástroj pro **ladění** (debugging) kódu a hledání chyb

END

---


START
BI-SZZ

Co umožňuje **debugger**?

Back:

umožňuje **krokovat** průběh programu, zjišťovat **průběžné hodnoty proměnných** a míst v paměti apod.

END

---
