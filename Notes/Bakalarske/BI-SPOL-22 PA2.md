---
created: 2024-06-03T20:04:33
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-22 PA2

> BI-SPOL-22 (PA2)
> Abstraktní datový typ, jeho specifikace a implementace. Zásobník, fronta, pole, seznam, tabulka, množina. Implementace pomocí pole, spojových struktur a stromů.


### abstraktní datový typ

START
BI-SZZ

Co je **datový typ**?

Back:

definice množiny povolených hodnot a operací
<!--ID: 1717439772064-->
END

---


START
BI-SZZ

Co je **syntax**?

Back:

Pravidla daného jazyka
<!--ID: 1717519718937-->
END

---


START
BI-SZZ

Co je **sémantika**?

Back:

Význam nějakých symbolů.
<!--ID: 1717519718941-->
END

---


START
BI-SZZ

Co je **abstraktní datový typ**? Jak lze popsat **syntax** a **sémantiku**?

Back:

definuje syntaxi a sémantiku operací nezávisle na implementaci
- syntaxe lze popsat signaturami operací (např. `top(_): stack -> elem`)
- sémantika lze popsat axiomy (např. `top(push(s,x) = x`), textově, obrázkem, …

v některých jazycích (např. Clear) lze specifikovat ADT takto formálně, ale v imperativních jazycích jsou ADT explicitně implementované (např. jako generické třídy ve standardní knihovně)
<!--ID: 1717439772071-->
END

---


START
BI-SZZ

Co je **datová struktura**?

Back:

popis rozhraní ADT + paměťová reprezentace + algoritmy
- konkrétnější než ADT, ale obecnější než konkrétní implementace
- vhodný model pro důkazy o operacích apod.
<!--ID: 1717439772074-->
END

---

### zásobník (stack)


START
BI-SZZ

Co je **zásobník** (stack)?

Back:

datová struktura LIFO (last in - first out) = jako první se vybírají poslední vložená data
<!--ID: 1717439772078-->
END

---


START
BI-SZZ

Jaké **operace** poskytuje **zásobník** a co znamenají?

Back:

- `push` = vložení prvku na vrchol zásobníku ($\mathcal O (1)$, ale u exponenciálně nafukovacího pole jen amortizovaně $\mathcal O (1)$)
- `pop` = vyjmutí prvku na vrchol zásobníku ($\mathcal O (1)$)
- `empty` = kontrola prázdnosti zásobníku
- `top` = čtení prvku z vrcholu zásobníku bez jeho vyjmutí
<!--ID: 1717439772081-->
END

---


START
BI-SZZ

Jaké jsou možné implementace zásobníku? (3)

Back:

- pole pevné délky
- nafukovací pole
- jednosměrný spojový seznam
<!--ID: 1717439772084-->
END

---

### fronta


START
BI-SZZ

Co je **fronta** (queue)?

Back:

Datová struktura **FIFO** _(first in - first out)_ = data se vybírají v pořadí, v jakém byly vloženy
<!--ID: 1717439772087-->
END

---


START
BI-SZZ

Jaké **operace** poskytuje **fronta** a co znamenají?

Back:

- `enqueue`/`add` = vložení prvku do fronty
- `dequeue`/`front` = vyjmutí nejstaršího prvku z fronty
- `empty` = test prázdnosti fronty
<!--ID: 1717439772090-->
END

---

START
BI-SZZ

Jaké jsou možné implementace fronty? (3)

Back:

- pole pevné délky
- nafukovací pole
- jednosměrný spojový seznam
<!--ID: 1717439772093-->
END

---

### prioritní fronta


START
BI-SZZ

Co je **prioritní fronta**?

Back:

fronta s “předbíháním”
<!--ID: 1717439772096-->
END

---


START
BI-SZZ

Jaké **operace** poskytuje **prioritní fronta** a co znamenají?

Back:

- `insert` = vložení prvku s prioritou
- `extract_min` = vyjmutí libovolného z prvků s nejmenší prioritou
- zvýšení nebo snížení priority vybraného prvku
<!--ID: 1717439772099-->
END

---


START
BI-SZZ

Jaké jsou možné implementace **prioritní fronty**? (2)

Back:

- **pole** (vyjmutí je $\mathcal O (n)$)
- **binární halda** (všechny operace jsou $\mathcal O (\log n)$)
<!--ID: 1717439772101-->
END

---


START
BI-SZZ

Jak funguje implementace prioritní fronty s pomocí binární haldy?

Back:

- binární halda = binární strom, kde všechny hladiny jsou plné kromě té spodní, která se zaplňuje zleva, a kde platí haldové uspořádání (= priorita v předkovi není větší než v potomkovi)
- dvě operace navíc pro opravení haldového uspořádání:
	- `bubble_up` po přidání nového prvku doprava do spodní hladiny
	- `bubble_down` po vyjmutí prvku a následném nutném přesunu pravého spodního prvku do kořene
- paměťově lze reprezentovat polem “po hladinách” - synové $i$-tého vrcholu jsou pak na pozicích $2i$ a $2i+1$
<!--ID: 1717439772104-->
END

---

### seznam (list)

START
BI-SZZ

Co je **seznam** (list)? 

Back:

datová struktura udržující pořadí prvků a umožňující přístup pomocí posouvajícího se “kurzoru”, který vždy ukazuje na jednu pozici
<!--ID: 1717439772107-->
END

---


START
BI-SZZ

Jaké operace umožňuje **seznam**?

Back:

- vložení prvku na vybranou pozici
- odstranění prvku z vybrané pozice
- čtení prvku z vybrané pozice
- přesun kurzoru
<!--ID: 1717439772110-->
END

---


START
BI-SZZ

Jaké jsou možné implementace **seznamu**? (1)

Back:

obousměrný spojový seznam (základní operace $\mathcal O (1)$, ale přesun kurzoru $\mathcal O(n)$)
<!--ID: 1717439772113-->
END

---


### pole (array)


START
BI-SZZ

Co je **pole** (array)? 

Back:

datová sktruktura pro organizaci prvků v $n$-dimenzionálním prostoru s konstantním náhodným přístupem pomocí $n$-tice indexů (zápis typicky pomocí `[]`)
<!--ID: 1717439772116-->
END

---


START
BI-SZZ

Jaké operace umožňuje **pole**?

Back:

- zápis prvku podle indexu
- čtení prvku podle indexu
- `size` = zjištění počtu uložených prvků
- příp. zvětšení a zmenšení pole
<!--ID: 1717439772119-->
END

---


START
BI-SZZ

Jaké jsou možné implementace **pole**? (3)

Back:

**implementace jednorozměrného pole**: 
- uložení prvků za sebou v souvislém paměťovém bloku a přístup podle offsetu of začátku bloku (lze využít pointerovou aritmetiku)

**implementace vícerozměrného pole**:
- jeden souvislý blok seřazený po řádcích
- jeden souvislý blok seřazený po sloupcích
- přístupové vektory - každý “řádek” může být jinak dlouhý
<!--ID: 1717439772122-->
END

---

### množina (set)

START
BI-SZZ

Co je **množina** (set)? 

Back:

datová struktura obsahující prvky bez duplikátů
<!--ID: 1717439772124-->
END

---


START
BI-SZZ

Jaké operace umožňuje **množina**?

Back:

- `insert` = vložení prvku
- `erase` = odstranění prvku
- `contains` = kontrola přítomnosti prvku
- příp. množinové operace (sjednocení, průnik, …), podmnožina, rovnost, výpis prvků, …
<!--ID: 1717439772127-->
END

---


### tabulka (map)

START
BI-SZZ

Co je **tabulka** (map)? 

Back:

datová struktura obsahující hodnoty (value) identifikované svými unikátními klíči (key)
<!--ID: 1717439772130-->
END

---


START
BI-SZZ

Jaké operace umožňuje **tabulka**?

Back:

- `set(k, v)` = nastavení hodnoty pro daný klíč
- `get(k)` = získaní hodnoty podle klíče
- `erase(k)` = odstranění prvku podle klíče
- `contains(k)` = kontrola přítomnosti prvku podle klíče
<!--ID: 1717439772133-->
END

---

START
BI-SZZ

Jaké jsou možné implementace **množiny** a u **tabulky**? (7)

Back:

Tyhle jsou pro množinu (pro tabulku to je podobně):
- **charakteristický vektor** - jeden `bool` pro každý možný prvek universa (základní operace $\mathcal O (1)$, množinové operace $\mathcal O (|U|)$)
- **neseřazené pole** (základní operace $\mathcal O (n)$, množinové operace $\mathcal O (mn)$)
- **seřazené pole** (`insert` a `erase` $\mathcal O (n)$, `contains` $\mathcal O (\log n)$, množinové operace $\mathcal O (m+n)$)
- **spojový seznam** (větší paměťová režie, základní operace $\mathcal O (n)$)
- **binární vyhledávací strom** - ideálně vyvažovaný (základní operace průměrně $\mathcal O (\log n)$)
- **indexace** - pokud jsou klíče malá celá čísla, lze je použít jako indexy (`insert`, `erase` i `contains` jsou $\mathcal O (1)$, ale větší paměťová režie)
- **hashovací tabulka** (základní operace průměrně $\mathcal O (1)$)
    - využívá hashovací funkci, která klíčům přiřazuje indexy (je potřeba ji vybrat tak, aby prvky rozmístila rovnoměrně a s co nejméně kolizemi)
<!--ID: 1717439772136-->
END

---