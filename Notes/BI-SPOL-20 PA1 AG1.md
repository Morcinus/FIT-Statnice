---
created: 2024-06-03T11:02:29
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-20 PA1 AG1

> BI-SPOL-20 (PA1 + AG1)
> Rekurzivní rozklad problému na podproblémy metodou Rozděl-a-panuj. Rekurze vs iterace. Dynamické programování.

### rekurze

START
BI-SZZ

Co je **rekurze**?

Back:

Způsob řešení problému tím, že se rozloží na menší (jednodušší) instance téhož problému, z jejichž řešení pak lze složit řešení původního problému
<!--ID: 1717408187932-->
END

---


START
BI-SZZ

Co je metoda **Rozděl a panuj**?

Back:

Prakticky synonymum pro rekurzi - rozdělím problém na menší podproblémy a ty pak řeším.
<!--ID: 1717408187936-->
END

---


START
BI-SZZ

Jakou datovou strukturu používá běhové prostředí programu při **rekurzi**?

Back:

**systémový zásobník**
<!--ID: 1717408187939-->
END

---


START
BI-SZZ

Co musí rekurze splňovat, aby nevznikla nekonečná smyčka? (2)

Back:

1. takové volání musí řešit **menší** instanci problému
2. musí existovat **triviální** (nejmenší) instance, která se řeší jinak než rekurzí
<!--ID: 1717408187942-->
END

---


START
BI-SZZ

Jaké jsou **3 typy rekurze**?

Back:

- **koncová** rekurze
- **lineární** rekurze
- **stromová** rekurze
<!--ID: 1717408187945-->
END

---


START
BI-SZZ

Co je **koncová rekurze**?

Back:

rekurzivní funkce se volá jako poslední příkaz ve svém těle
- lze snadno převést na iteraci (i naopak)
<!--ID: 1717408187947-->
END

---


START
BI-SZZ

Co je **lineární rekurze**?

Back:

strom rekurznivních volání je lineární (v těle rekurzivní funkce je jen jedno rekurzivní volání anebo jsou tato volání v disjunktních větvích)
<!--ID: 1717408187950-->
END

---


START
BI-SZZ

Co je **stromová rekurze**?

Back:

strom rekurzivních volání se větví (v těle rekurzivní funkce nastane více rekurzivních volání)
<!--ID: 1717408187953-->
END

---

#### využití rekurze


START
BI-SZZ

Na co se používá rekurze? 

Back:

- **rekurentně zadané výpočty** (např. Fibonacciho posloupnost, faktoriál)
- **rekurzivní datové struktury** (např. zakořeněné stromy jako AVL a BVS)
- algoritmy pro **procházení grafů** (např. DFS)
- **řadicí algoritmy** (např. MergeSort)
- **násobení** dvou celých $n$-ciferných čísel
- další problémy (Hanojské věže atd.)
<!--ID: 1717408187955-->
END

---


START
BI-SZZ

Jak lze násobit dvě celá čísla pomocí **rekurze**?

Back:

násobení lze převést na čtyři násobení čísel poloviční délky, což je ale stále $\mathcal O (n^2)$
- $x \cdot y = x_U \cdot y_U \cdot 10^n + (x_U \cdot y_L + x_L \cdot y_U) \cdot 10^{n/2} + xL \cdot yL$, kde $x_U$ je horních $n/2$ cifer čísla $x$ a $x_L$ je dolních $n/2$ cifer (pro jednoduchost je $n$ mocnina dvou)
<!--ID: 1717408187958-->
END

---

### rekurze vs iterace


START
BI-SZZ

Jak se liší rekurze a iterace?

Back:

**rekurzivní přístup**
- "shora dolů" (od velkého problému k menším)
- elegantnější programy s kratším kódem
- vyžaduje ale větší overhead a někdy zbytečně počítá stejné podproblémy

**iterativní přístup**
- "zdola nahoru" (od jednodušších problému k větším)
- může být složitější na popsání
- může být někdy intuitivnější a efektivnější
<!--ID: 1717408187961-->
END

---

### dynamické programování


START
BI-SZZ

Co je **dynamické programování**?

Back:

technika návrhu rekurzivních algoritmů využívající toho, že se podproblémy opakují
- často lze převést na ekvivalentní grafový problém (např. hledání cesty)
<!--ID: 1717408187964-->
END

---


START
BI-SZZ

Jaká je výhoda **dynamického programování** oproti metodě **rozděl a panuj**?

Back:

Dynamické programování je o dost rychlejší
<!--ID: 1717408187967-->
END

---


START
BI-SZZ

Co je **memoizace**?

Back:

**výsledky rekurzivní funkce** se ukládají do **memoizační tabulky** a před každým rekurzivním voláním se zkontroluje, jestli už hledaný výsledek není v této tabulce, aby se nemusel počítat znovu
- často se lze rekurze zbavit a tabulku vyplnit iterativně od nejmenších instací k větším

_Např. využití u Fibonacciho čísla (první bez memoizace, druhý s memoizací):_
![](../Assets/Pasted%20image%2020240603111911.png)
<!--ID: 1717408187969-->
END

---


START
BI-SZZ

Jaká je **časová složitost** algoritmu pro výpočet **Fibonacciho čísla**?

- naivní rekurzí
- s memoizací
- iterativně

Back:

- **naivní rekurzí** $\mathcal \Theta (\Phi^{n+1})$, kde zlatý řez $\Phi \approx 1.62$
- **s memoizací** $\mathcal O (n)$ ($n$ rekurzivních volání, v každém se stráví $\mathcal O (1)$ času)
- **iterativně** $\mathcal O (n)$ (výpočet všech Fibonacciho čísel od prvního po $n$-té)
<!--ID: 1717408187972-->
END

---


START
BI-SZZ

Jaká je **časová složitost** aloritmu pro **hledání nejdelší rostoucí posloupnosti**?

(Tzn. jak vyškrtnout z posloupnosti $n$ čísel co nejméně prvků, aby zbylé prvky tvořily rostoucí posloupnost)

- naivní rekurzí
- s memoizací
- iterativně

Back:

- **naivní rekurzí** $\mathcal O (2^n)$
- **s memoizací** $\mathcal O (n^2)$ (rekurzivní volání pro každý z $n$ prvků, v každém se projdou potenciální následníci ze zbytku posloupnosti, což je $\mathcal O (n)$)
- **iterativně** $\mathcal O (n^2)$ (vyplňování tabulky od konce)

Pozn. lze převést na grafový problém hledání nejdelší orientované cesty z uměle přidaného uzlu $-\infty$ do uměle přidaného uzlu $+\infty$ v grafu, kde zbylé uzly jsou prvky posloupnosti a hrany vedou od menších uzlů k větším
<!--ID: 1717408187975-->
END

---


START
BI-SZZ

Jaká je **časová složitost** aloritmu **editační vzdálenosti řetězců**?

(editační vzdálenost = nejmenší počet vložení, smazání nebo nahrazení znaku potřebný pro vytvoření jednoho řetězce délky $m$ z jiného délky $n$)

- naivní rekurzí
- s memoizací

Back:

- naivní rekurzí $\mathcal O (3^{m+n-1})$
- s memoizací $\mathcal O (m \cdot n)$

(Podrobnější popis úlohy)
![](../Assets/Pasted%20image%2020240603112717.png)
![](../Assets/Pasted%20image%2020240603112812.png)
![](../Assets/Pasted%20image%2020240603112824.png)
![](../Assets/Pasted%20image%2020240603112837.png)

<!--ID: 1717408187978-->
END

---


START
BI-SZZ

Jaká je **časová složitost** histogramového **vyvážení binárního vyhledávacího stromu**?

histogramové binární vyhledávací stromy = optimalizují rychlost nalezení prvku podle frekvence jeho hledání, tzn. nejsou nutně vyvážené a málo hledané prvky jsou schválně hluboko

- s memoizací

Back:

- s memoizací $\mathcal O (n^3)$

_Příkad jak to funguje_
![](../Assets/Pasted%20image%2020240603112935.png)
<!--ID: 1717408187981-->
END

---


START
BI-SZZ

Jaká je **časová složitost** aloritmu **minimální triangulace mnohoúhelníku**?

(minimální triangulace = hledání takové kombinace diagonál mezi vrcholy mnohoúhelníku, aby se neprotínaly a rozdělily mnohoúhelník na trojúhelníky)

- naivní rekurzí
- iterativní (tam se výsledně v tomto případě dostanem, když se snažíme použít memoizaci)

Back:

- naivní rekurzí $\mathcal O (k ^ n)$
- iterativně $\mathcal O (n^3)$
<!--ID: 1717408187984-->
END

---
