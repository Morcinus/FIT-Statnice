---
created: 2024-05-21T09:48:18
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-21 PA2

> BI-SPOL-21 (PA2)
> Objektově orientované programování v C++, zapouzdření, dědičnost, atributy a metody, statické atributy a metody, virtuální metody, polymorfismus, abstraktní třídy, výjimky, šablony, přetěžování operátorů, mělká a hluboká kopie.

### objektově orientované programování v C++

START
BI-SZZ

Co je **procedurální styl** programování?

Back:

rozdělení na podproblémy implementované funkcemi (resp. procedurami), používání strukturovaných datových typů
<!--ID: 1716916322290-->
END

---


START
BI-SZZ

Co je **objektově orientované** programování (OOP)? 

(otázka PA2)

Back:

reprezentace entit pomocí objektů (které slučují data i funkčnost), reprezentace interakcí mezi entitami pomocí rozhraní objektů

výhody OOP: možnost nezávisle upravovat vnitřní implementace tříd nebo nahrazovat třídy jinými (stačí dodržet rozhraní)
<!--ID: 1716916322293-->
END

---


START
BI-SZZ

Jaké jsou 3 hlavní principy OOP?

(otázka PA2)

Back:

zapouzdření, dědičnost, polymorfismus
<!--ID: 1716916322296-->
END

---


START
BI-SZZ

Co je **třída** v OOP?

(otázka PA2)

Back:

abstraktní definice entity, jejího rozhraní (= metod) a struktury dat (= atributů)
<!--ID: 1716916322299-->
END

---


START
BI-SZZ

Jak lze definovat třídu v C++?

Back:

pomocí `struct` nebo `class` (C++)
<!--ID: 1716916322301-->
END

---


START
BI-SZZ

Co se může nacházet v těle třídy? (4)

Back:

- **konstruktor** - volá se při vytváření objektu např. pomocí `new`
- **destruktor** - volá se při rušení objektu pomocí `delete` nebo když vypadne ze scope
- **atributy** (aka členské proměnné)
- **metody** (aka členské funkce)
<!--ID: 1716916322304-->
END

---


START
BI-SZZ

Co je **objekt** v OOP?

(otázka PA2)

Back:

konkrétní instance třídy s vlastními daty (popisujícími vlastnosti a stav objektu)
- objekt je proměnná, jehož datovým typem je nějaká třída
- objekty jsou za běhu programu vytvářeny a rušeny
<!--ID: 1716916322307-->
END

---

### zapouzdření


START
BI-SZZ

Co je **zapouzdření**?

Back:

omezení viditelnosti a přístupu ke členům (= atributům a metodám) třídy
<!--ID: 1716916322310-->
END

---


START
BI-SZZ

Co je `public` u atributu?

Back:

člen je viditelný a přístupný odkudkoliv
<!--ID: 1716916322313-->
END

---


START
BI-SZZ

Co je `protected` u atributu?

Back:

člen je viditelný a přístupný v této třídě a v jejích podtřídách (viz dědičnost)
<!--ID: 1716916322316-->
END

---


START
BI-SZZ

Co je `private` u atributu?

Back:

člen je viditelný a přístupný jen v této třídě
<!--ID: 1716916322319-->
END

---


START
BI-SZZ

Jsou ve `struct` atributy defaultně `public`, `private` nebo `protected` v C++?

Back:

`public`
<!--ID: 1716916322322-->
END

---

START
BI-SZZ

Jsou ve `class` atributy defaultně `public`, `private` nebo `protected` C++?

Back:

`private`
<!--ID: 1716916322324-->
END

---

START
BI-SZZ

Co je `friend`?

Back:

třída může udělit přístup funkci nebo třídě klíčovým slovem `friend` (porušuje to zapouzdření, ale výjimečně to má smysl, např. u operátoru <<)

_Např. zde friend funkce může přistupovat k private atributům třídy, i když není definovaná v té třídě_
```cpp
#include <iostream>

class Box {
private:
    double length;
    double breadth;
    double height;

public:
    // Constructor
    Box(double l, double b, double h) : length(l), breadth(b), height(h) {}

    // Friend function declaration
    friend double calculateVolume(Box box);
};

// Friend function definition
double calculateVolume(Box box) {
    return box.length * box.breadth * box.height;
}

int main() {
    Box box(3.0, 4.0, 5.0);
    std::cout << "Volume of the box: " << calculateVolume(box) << std::endl;
    return 0;
}
```
<!--ID: 1716916322327-->
END

---


START
BI-SZZ

Jak lze přistupovat k atributům dané třídy zevnitř?

Back:

pomocí klíčového slova `this` (např. při konfliktu jmen)
<!--ID: 1716916322330-->
END

---

### dědičnost


START
BI-SZZ

Co je **dědičnost**?

Back:

třída může **dědit** z jiné třídy = převzít její atributy a metody, příp. je přepsat či přidat nové

instance potomka může být přiřazena předkovi, ale ne naopak
<!--ID: 1716916322333-->
END

---


START
BI-SZZ

Jak se zapisuje dědičnost v C++?

Back:

deklarace s dvojtečkou (např. `class CCounterMod : public CCounter { ... }`)
<!--ID: 1716916322337-->
END

---


START
BI-SZZ

Jak může potomek přepsat metodu třídy předka?

Back:

s nepovinným klíčovým slovem `override`
<!--ID: 1716916322340-->
END

---

### atributy a metody


START
BI-SZZ

Co je `const` objekt?

Back:

Objekt, u kterého nelze modifikovat atributy
<!--ID: 1716916322343-->
END

---


START
BI-SZZ

Co je `const` atribut/proměnná?

Back:

atribut/proměnná, který nelze modifikovat
<!--ID: 1716916322347-->
END

---


START
BI-SZZ

Co je `const` metoda?

Back:

metoda, která nemůže modifikovat ostatní položky
<!--ID: 1716916322350-->
END

---


START
BI-SZZ

Můžu nekonstantní metodě předat konstantní objekt?

Back:

Ne!
<!--ID: 1716916322353-->
END

---

#### statické (třídní) atributy a metody (\times instanční)

START
BI-SZZ

Co dělá `static` u atributů?

Back:

Jsou sdíleny napříč instancemi dané třídy
<!--ID: 1716916322356-->
END

---


START
BI-SZZ

Co dělá `static` u metod? S čím tyto metody mohou pracovat? Co u nich nefunguje?

Back:

Metody pak nejsou navázány na konkrétní instanci.

- Pracují jen se **statickými atributy** a dalšími **statickými metodami**!
- Nefunguje v nich `this`
<!--ID: 1716916322359-->
END

---


START
BI-SZZ

Jak lze zavolat statickou metodu na třídě, u které nemám instanci?

Back:

pomocí `::`

Např. `MyClass::myStaticMethod();`
<!--ID: 1716916322362-->
END

---

### polymorfismus


START
BI-SZZ

Co je **polymorfismus**?

(otázka PA2)

Back:

odlišné chování objektů různých tříd, přestože rozhraní je identické
<!--ID: 1716916322365-->
END

---

#### abstraktní (aka virtuální) metody


START
BI-SZZ

Co je abstraktní/virtuální metoda v C++?

Back:

metoda s klíčovým slovem `virtual`, nemá implementaci (ta je až v podtřídách)
<!--ID: 1716916322368-->
END

---


START
BI-SZZ

Kdy a pomocí čeho je vybrána implementace abstraktní/virtual metody? 

Back:

při volání je správná implementace vybrána **dynamicky** (= až za běhu programu pomocí **virtual method table**, nikoliv v době kompilace) podle toho, na které podtřídě je volána
<!--ID: 1716916322372-->
END

---

#### abstraktní třídy

START
BI-SZZ

Co jsou abstraktní třídy v C++?

Back:

Třídy, které **obsahují nějakou abstraktní metodu**.

Nelze vytvořit instanci abstraktní třídy, ale lze na ni vytvořit ukazatel nebo referenci
<!--ID: 1716916322375-->
END

---

### výjimky


START
BI-SZZ

Pomocí čeho se vyhazují výjimky v C++?

Back:

`throw`

Výhoda výjimek:
- výhoda: přehlednost (např. oproti předávání chybových informací v návratových hodnotách)
- nevýhoda: větší režie a větší výsledný kód
<!--ID: 1716916322378-->
END

---


START
BI-SZZ

Jak se dá odchytit výjimka v C++?

Back:

Pomocí try-catch bloku:

```cpp
try {
	// Call the function that might throw an exception
	mightThrowException(true);
} catch (const std::runtime_error& e) {
	// Catch the runtime error exception and handle it
	std::cout << "Caught an exception: " << e.what() << std::endl;
}
```
<!--ID: 1716916322380-->
END

---

### šablony


START
BI-SZZ

Co jsou šablony v C++?

Back:

Způsob, jak parametrizovat funkce, třídy atd.

= **generické funkce, generické třídy** 
<!--ID: 1716916322383-->
END

---


START
BI-SZZ

Co všechno může být parametrem šablony v C++?

Back:

parametrem šablony může být:
- datový typ parametru i návratové hodnoty (`typename` nebo `class`), 
- jiná šablona, 
- číslo, 
- ukazatel, reference 
- apod.
<!--ID: 1716916322386-->
END

---


START
BI-SZZ

V jakých souborech jsou uloženy šablony v C++?

Back:

V **hlavičkových souborech**, tedy `.h`, protože je potřebuje **překladač**
<!--ID: 1716916322389-->
END

---


START
BI-SZZ

Jaká je syntax šablony v Cčku?

Back:

před deklaraci a definici se přidá `template < ... >`, např.:

```cpp
template < typename T >
T plus(const T& a, const T& b) {
	return a + b;
}
```

kompilátor pak vygeneruje kód s dosazenými hodnotami parametrů podle toho, které jsou v kódu skutečně použity:
```cpp
int plus(const int& a, const int& b) {
	return a + b;
}
```
<!--ID: 1716916322391-->
END

---


START
BI-SZZ

Jak lze jednoduššeji zapisovat šablony v C++ 20 (a dál)?

Back:

Pomocí `auto`

_Např._
```cpp
auto plus(const auto& a, const auto& b) {
	return a + b;
}
```
<!--ID: 1716916322394-->
END

---


START
BI-SZZ

Co znamená `auto` v C++?

Back:

Umožňuje mi to udělat typovou inferenci = kompilátor odhadne, co to bude za typ

Např.

```cpp
auto plus(const auto& a, const auto& b) {
	return a + b;
}
```

nebo

```cpp
auto x = 5;         // x is deduced to be of type int
auto y = 3.14;      // y is deduced to be of type double
auto z = "Hello";   // z is deduced to be of type const char*
```
<!--ID: 1716916322397-->
END

---


START
BI-SZZ

Jak lze specifikovat, s jakým typem se má daná funkce zavolat?

Např. pokud chci tuto funkci zavolat s typem T `char`

```cpp
template <typename T>
T plus(const T& a, const T& b) {
    return a + b;
}
```

Back:

Není to většinou nutné, ale pokud to není jednoznačné, můžu použít `<>`

Např.
`plus<char>(x, y)`
<!--ID: 1716916322400-->
END

---

### přetěžování operátorů


START
BI-SZZ

Co je **přetěžování operátorů**?

Back:

přidání významu existujícímu operátoru pro nové datové typy

přetížený operátor je vlastně jen zkratka používaná místo jména funkce
<!--ID: 1716916322403-->
END

---


START
BI-SZZ

Pomocí jakého **klíčového slova** se přetěžují operátory?

Back:

Pomocí klíčového slova `operator`

Např.
```cpp
// Define a class named Point
class Point {
public:
    int x, y;

    // Constructor to initialize Point objects
    Point(int xCoord, int yCoord) : x(xCoord), y(yCoord) {}

    // Overload the + operator to add two Point objects
    Point operator+(const Point& other) const {
        return Point(x + other.x, y + other.y);
    }
};
```
<!--ID: 1716916322406-->
END

---


START
BI-SZZ

Mění se při přetěžování operátorů priorita, asociativita nebo arita?

Back:

**Ne**
<!--ID: 1716916322409-->
END

---


START
BI-SZZ

Jaké operátory nelze přetížit?

Back:

nelze přetížit:
- `::`
- `.`
- `.*`
- `?:`
<!--ID: 1716916322413-->
END

---


START
BI-SZZ

Co je **mělká kopie**?

Back:

vznikne nový objekt, ale odkazy (ukazatele a reference) zůstanou sdílené
<!--ID: 1716916322416-->
END

---


START
BI-SZZ

Jaká je výhoda a nevýhoda **mělké kopie**?

Back:

- **výhoda**: kopírování je rychlejší
- **nevýhoda**: manuální správa paměti je složitější (nechtěné přepisování, několikanásobné uvolňování, memory leaks), lze to řešit např. počítáním referencí
<!--ID: 1716916322419-->
END

---


START
BI-SZZ

Co je **hluboká kopie**?

Back:

vznikne zcela nezávislý nový objekt s nezávislými kopiemi všech členů
<!--ID: 1716916322422-->
END

---


START
BI-SZZ

Jaká je výhoda a nevýhoda hluboké kopie?

Back:

- **výhoda**: zkopíruje se všechno, nemusím nic dalšího řešit
- **nevýhoda**: může být časově i paměťově náročnější (hodí se copy-on-write, tzn. hluboké zkopírování až při pokusu o modifikaci)
<!--ID: 1716916322424-->
END

---


START
BI-SZZ

Co dělá defaultně kopírovací konstruktor `Array b(a)` a operátor přiřazení `Array b = a` za typ kopie? (hluboká/mělká)

Back:

Dělají **mělkou** kopii. Obojí lze ale v třídě předefinovat
<!--ID: 1716916322427-->
END

---


START
BI-SZZ

Co je **pravidlo tří**?

Back:

pokud se pokouším o hlubokou kopii a implementuji:
- **kopírovací konstruktor**
- **operátor přiřazení** (operator =) 
- nebo **desktruktor**

pak bych měl implementovat **všechny tři**
<!--ID: 1716916322430-->
END

---
