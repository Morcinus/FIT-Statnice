---
created: 2024-06-09T19:58:04
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-12 PA2

> BI-WSI-SI-12 (PA2)
> Šablony funkcí a tříd v C++, knihovna STL, iterátor, komparátor.



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

Jaké **typy komponent** obsahuje **STL**?

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

Jaké jsou **kontejnery** v STL?

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

Jaké jsou **pomocné struktury** v STL?

Back:

- pair
- tuple
<!--ID: 1717961032402-->
END

---

START
BI-SZZ

Jaké jsou **interní struktury** v STL?

Back:

- funktor — objekt, který lze použít jako funkci, musí přetěžovat operátor ()
<!--ID: 1717961032404-->
END

---

START
BI-SZZ

Jaké jsou **funce/algoritmy** v STL?

Back:

- for_each
- find
- transform
- sort
- lower_bound, binary_search
- merge
- make_heap
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

K čemu slouží **iterátory**?

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

Co je to **typy iterátorů**?

Back:

- **InputIterator** – poskytuje pouze dereferenci pro čtení, posuv vpřed a test na (ne)rovnost
- **OutputIterator** – poskytuje pouze dereferenci pro zápis, posuv vpřed a test na (ne)rovnost
- **ForwardIterator** – kombinuje předchozí
- **BidirectionalIterator** – navíc možnost posunu zpět operátorem `--`
- **RandomAccessIterator** – navíc možnost posunu vpřed/zpět o zadaný počet pozic (operace `+=` a `-=`), indexace operátorem `[n]`
<!--ID: 1717961032415-->
END

---

START
BI-SZZ

Co je to **komparátor**?

Back:

- některé funkce jako sort() potřebují funkci, podle které budou porovnávat
- typicky se používá funktor, např. `less`z STL, nebo ukazatel na funkci
- v C++11 k tomu přibyly i lambda funkce

![](../Assets/Pasted%20image%2020240609205720.png)
<!--ID: 1717961032418-->
END

---