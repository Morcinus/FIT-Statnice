---
created: 2024-06-09T19:58:04
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-12 PA2

> BI-WSI-SI-12 (PA2)
> Šablony funkcí a tříd v C++, knihovna STL, iterátor, komparátor.


### TODO
- Tady by to chtělo trošku líp udělat kartičky na konkrétní syntax, protože nevím, na co jiného by se u této otázky ptali
- Chtělo by to podrobnější info o **iterátorech** a **komparátorech**!
- Obecně by to chtělo tuto otázku zpracovat víc do hloubky.. Tohle je hrozně málo
- Obecně by to chtělo přidat nějakou basic syntax C++ (klidně do jiné otázky), aby když řeknou, že má člověk napsat kód, tak aby tušil, jak se píšou ty basic věci (ukazatele, reference, volání funkce, psaní na výstup atd.)

START
BI-SZZ

Co jsou to **šablony funkcí a tříd**?

Back:

- šablony jsou způsob, jak parametrizovat různé entity
- před deklaraci a definici parametrizované entity přidáme `template < template_args >`
- kód šablony se kompiluje, až když je instanciována s konkrétními parametry — v runtime už se žádné šablony nevyskytují
<!--ID: 1717961032381-->
END

---

START
BI-SZZ

Co může být **parametrem šablony**?

Back:

- typ uvedený klíčovým slovem `typename` nebo `class`
- jiná šablona
- netypový parametr (celá čísla, floating-point, ukazatele, reference)
- parameter pack (`template <typename... Ts>`, variadické šablony)
<!--ID: 1717961032385-->
END

---

START
BI-SZZ

Co jsou to **šablony funkcí**?

Back:

- při použití šablon funkcí není nutné uvádět parametry, překladač je odvodí
- při stejné shodě má obyčejná funkce přednost před šablonou
- Od C++20 jde využít zkrácenou syntaxi s `auto`

```cpp
auto plus(const auto& a, const auto& b) {
	return a + b;
}
```
<!--ID: 1717961032388-->
END

---

START
BI-SZZ

Co jsou to **šablony tříd**?

Back:

- implementovány v hlavičkových souborech
- metody typicky definovány inline
    - Při ne-inline implementaci je nutné zopakovat `template`
- instanciovány jsou pouze použité části třídy — tedy pokud nějaká metoda není použita, není instanciována
- Od C++17 lze odvodit parametry šablony třídy
    - na rozdíl od funkcí dedukce probíhá pouze, když nejsou přítomny lomené závorky (tedy nelze explicitně specifikovat část parametrů)

```cpp
template < typename T >
void A<T>::foo() { /* ... */ }
```
<!--ID: 1717961032391-->
END

---

START
BI-SZZ

Co je to **STL**?

Back:

- Standard Template Library
- je postavena na generických třídách
<!--ID: 1717961032393-->
END

---

START
BI-SZZ

Jaké **typy komponent** obsahuje **STL**? (4)

Back:

- kontejnery
- pomocné struktury
- interní struktury STL (iterátory, funktory)
- funkce, algoritmy
<!--ID: 1717961032396-->
END

---

START
BI-SZZ

Jaké jsou **kontejnery** v STL? (6)

Back:

- **vector**
    - dynamicky alokované pole zvoleného typu
- **array**
    - zapouzdřené pole fixní velikosti
    - asociativní kontejner
    - lze kontrolovat indexy, snadné kopírování
- **deque**
    - oboustranná fronta
    - asociativní kontejner
    - dokáže nahradit stack i queue
- **list**
    - obousměrný spojový seznam
    - sekvenční kontejner
- **map**
    - tabulka klíč—hodnota
    - asociativní kontejner
- **set**
    - množina prvků
    - asociativní kontejner
- **dále existuje:**
	- forward_list, stack, queue, priority_queue, multiset, multimap, bitset, unordered_set
<!--ID: 1717961032399-->
END

---

START
BI-SZZ

Jaké jsou **pomocné struktury** v STL? (2)

Back:

- **pair**
- **tuple**

Např.
```cpp
// Creating a pair
std::pair<int, std::string> myPair(1, "Hello");

// Accessing elements of the pair
std::cout << "First element: " << myPair.first << std::endl;

// Modifying elements of the pair
myPair.second = "World";



// Creating a tuple
std::tuple<int, double, std::string> myTuple(1, 2.5, "Hello");

// Accessing elements of the tuple
std::cout << "First element: " << std::get<0>(myTuple) << std::endl;

// Modifying elements of the tuple
std::get<2>(myTuple) = "World";
```
<!--ID: 1717961032402-->
END

---

START
BI-SZZ

Jaké jsou **interní struktury** v STL? (2)

Back:

- **funktor** — objekt, který lze použít jako funkci, musí přetěžovat operátor `()`
- **iterátory**

Např.
```cpp
// Define a functor by creating a class that overloads the operator()
class Adder {
public:
    // Constructor to initialize the functor with a value
    Adder(int value) : value_(value) {}

    // Overload the function call operator
    int operator()(int x) const {
        return value_ + x;
    }

private:
    int value_;
};

int main() {
    // Create a functor object with a value of 10
    Adder add10(10);

    // Use the functor to add 10 to different numbers
    std::cout << "10 + 5 = " << add10(5) << std::endl;  // Output: 15
}
```
<!--ID: 1717961032404-->
END

---

START
BI-SZZ

Jaké jsou **funkce/algoritmy** v STL? (8)

Back:

- for_each
- find
- transform
- sort
- lower_bound
- binary_search
- merge
- make_heap

_Příklad použití od pana ChatGPT:_
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::vector<int> v1 = {1, 3, 5, 7};
    std::vector<int> v2 = {2, 4, 6, 8};
    std::vector<int> v3;

    // for_each
    std::for_each(v.begin(), v.end(), [](int &n){ n++; });

    // find
    auto it = std::find(v.begin(), v.end(), 3);

    // transform
    std::transform(v.begin(), v.end(), v.begin(), [](int n){ return n * n; });

    // sort
    std::sort(v.begin(), v.end());

    // lower_bound
    auto lb = std::lower_bound(v.begin(), v.end(), 4);

    // binary_search
    bool found = std::binary_search(v.begin(), v.end(), 4);

    // merge
    std::merge(v1.begin(), v1.end(), v2.begin(), v2.end(), std::back_inserter(v3));

    // make_heap
    std::make_heap(v.begin(), v.end());

    return 0;
}

```
<!--ID: 1717961032407-->
END

---

START
BI-SZZ

Co jsou to **iterátory**?

Back:

- jsou to zpravidla šablony tříd, jejich přetížené rozhraní se chová jako ukazatel
- některé kontejnery neumožňují iterování (stack, queue)
<!--ID: 1717961032410-->
END

---

START
BI-SZZ

K čemu slouží **iterátory**? (4)

Back:

- procházení kontejneru
- určení místa v kontejneru (např. kam má být vložen prvek)
- určení rozsahu prvků, které má nějaká funkce zpracovávat
- vyhledávání v kontejneru
<!--ID: 1717961032412-->
END

---

START
BI-SZZ

Jaké jsou **typy iterátorů**? (5)

Back:

- **InputIterator**
- **OutputIterator**
- **ForwardIterator**
- **BidirectionalIterator**
- **RandomAccessIterator**
<!--ID: 1717961032415-->
END

---


START
BI-SZZ

Co poskytuje **InputIterator**?

Back:

poskytuje pouze dereferenci pro **čtení**, **posuv vpřed** a test na (ne)**rovnost**
<!--ID: 1718030833866-->
END

---


START
BI-SZZ

Co poskytuje **OutputIterator**?

Back:

poskytuje pouze dereferenci pro **zápis**, **posuv vpřed** a test na (ne)**rovnost**
<!--ID: 1718030833874-->
END

---


START
BI-SZZ

Co obsahuje **ForwardIterator**?

Back:

Kombinuje **InputIterator** a **OutputIterator**
<!--ID: 1718030833880-->
END

---


START
BI-SZZ

Co obsahuje **BidirectionalIterator**?

Back:

Jako ForwardIterator, navíc možnost posunu zpět operátorem `--`
<!--ID: 1718030833884-->
END

---


START
BI-SZZ

Co obsahuje **RandomAccessIterator**?

Back:

Jako `BidirectionalIterator`, navíc možnost posunu vpřed/zpět o **zadaný počet pozic** (operace `+=` a `-=`), indexace operátorem `[n]`
<!--ID: 1718030833888-->
END

---



START
BI-SZZ

Co je to **komparátor**?

Back:

- některé funkce jako sort() potřebují funkci, podle které budou porovnávat
- typicky se používá funktor, např. `less` z STL, nebo ukazatel na funkci
- v C++11 k tomu přibyly i lambda funkce

![](../../Assets/Pasted%20image%2020240609205720.png)
<!--ID: 1717961032418-->
END

---