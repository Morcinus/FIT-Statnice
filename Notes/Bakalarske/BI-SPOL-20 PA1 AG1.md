---
created: 2024-06-03T11:02:29
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-20 PA1AG1

> BI-SPOL-20 (PA1 + AG1)
> Rekurzivní rozklad problému na podproblémy metodou Rozděl-a-panuj. Rekurze vs iterace. Dynamické programování.


### Todo
- možná přidat náznaky těch algoritmů v dynamickém programování?
	- Na fitwiki někdo měl například: "ukažte na hledání nejdelší rostoucí posloupnosti"
- Ještě zde lze přidat optionally 

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

1. hlubší volání musí řešit **menší** instanci problému
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

Na co se například používá rekurze? (6)

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
- $x \cdot y = x_U \cdot y_U \cdot 10^n + (x_U \cdot y_L + x_L \cdot y_U) \cdot 10^{n/2} + x_L \cdot y_L$, kde $x_U$ je horních $n/2$ cifer čísla $x$ a $x_L$ je dolních $n/2$ cifer (pro jednoduchost je $n$ mocnina dvou)
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
![](../../Assets/Pasted%20image%2020240603111911.png)
<!--ID: 1717408187969-->
END

---


START
BI-SZZ

Popiš algoritmus pro výpočet **Fibonacciho čísla** pomocí **naivní rekurze**. 

(Stačí cca tušit pseudokód)

Back:

![](../../Assets/Pasted%20image%2020240603143317.png)
<!--ID: 1717418664465-->
END

---


START
BI-SZZ

Popiš algoritmus pro výpočet **Fibonacciho čísla** pomocí **memoizace**. 

(Stačí cca tušit pseudokód)

Back:

To samý jako normální rekurze, jen se na začátku podívám, jestli to není v tabulce + výsledek zapíšu do tabulky.

![](../../Assets/Pasted%20image%2020240603143358.png)

_Tahkhle pro srovnání vypadá normální rekurze_
![](../../Assets/Pasted%20image%2020240603143317.png)
<!--ID: 1717418664478-->
END

---


START
BI-SZZ

Popiš algoritmus pro výpočet **Fibonacciho čísla** pomocí **iterace**. 

(Stačí cca tušit pseudokód)

Back:

![](../../Assets/Pasted%20image%2020240603143500.png)
<!--ID: 1717418664481-->
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

Popiš algoritmus pro **hledání nejdelší rostoucí podposloupnosti** pomocí **naivní rekurze**. 

Back:

![](../../Assets/Pasted%20image%2020240603143556.png)

_Jak získám výsledek:_
![](../../Assets/Pasted%20image%2020240603173620.png)

_Podrobné vysvětlení:_
![](../../Assets/Pasted%20image%2020240603171220.png)
![](../../Assets/Pasted%20image%2020240603171225.png)
<!--ID: 1717418664484-->
END

---


START
BI-SZZ

Popiš algoritmus pro **hledání nejdelší rostoucí podposloupnosti** pomocí **memoizace**. 

(Stačí cca tušit pseudokód)

Back:

Prakticky to samý jako normální rekurze, jen se na začátku podívám do tabulky a při výpočtu tam zapisuju.

![](../../Assets/Pasted%20image%2020240603143630.png)
<!--ID: 1717418664487-->
END

---


START
BI-SZZ

Popiš algoritmus pro **hledání nejdelší rostoucí podposloupnosti** pomocí **iterace**. 

(Stačí cca tušit pseudokód)

Back:

![](../../Assets/Pasted%20image%2020240603143804.png)

Ta $-1$ na konci je kvůli tomu, že jsme si na začátku navíc přidali $x_0$ do pole
<!--ID: 1717418664490-->
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

Popiš algoritmus pro **editační vzdálenost řetězců** pomocí **naivní rekurze**. 

(Idk, tohle by teoreticky nemuseli chtít)

Back:

![](../../Assets/Pasted%20image%2020240603143912.png)

nejmenší počet vložení, smazání nebo nahrazení znaku potřebný pro vytvoření jednoho řetězce délky $m$ z jiného délky $n​$

Tags: optional
<!--ID: 1717418664493-->
END

---


START
BI-SZZ

Popiš algoritmus pro **editační vzdálenost řetězců** pomocí **memoizace**. 

(Idk, tohle by teoreticky nemuseli chtít)

Back:

![](../../Assets/Pasted%20image%2020240603144109.png)
![](../../Assets/Pasted%20image%2020240603112824.png)


Tags: optional
<!--ID: 1717418664495-->
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
<!--ID: 1717408187978-->
END

---


START
BI-SZZ

Popiš algoritmus pro **histogramové binární vyhledávací stromy** pomocí **naivní rekurze**. 

(Idk, tohle by teoreticky nemuseli chtít)

Back:

![](../../Assets/Pasted%20image%2020240603144243.png)

_Pozn:_ histogramové binární vyhledávací stromy = optimalizují rychlost nalezení prvku podle frekvence jeho hledání, tzn. nejsou nutně vyvážené a málo hledané prvky jsou schválně hluboko

![](../../Assets/Pasted%20image%2020240603112935.png)

Tags: optional
<!--ID: 1717418664498-->
END

---


START
BI-SZZ

Popiš algoritmus pro **histogramové binární vyhledávací stromy** pomocí **memoizace**. 

(Idk, tohle by teoreticky nemuseli chtít)

Back:

![](../../Assets/Pasted%20image%2020240603144253.png)

Tags: optional
<!--ID: 1717418664501-->
END

---


START
BI-SZZ

Jaká je **časová složitost** histogramového **vyvážení binárního vyhledávacího stromu**?

histogramové binární vyhledávací stromy = optimalizují rychlost nalezení prvku podle frekvence jeho hledání, tzn. nejsou nutně vyvážené a málo hledané prvky jsou schválně hluboko

- s memoizací

Back:

- s memoizací $\mathcal O (n^3)$
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
