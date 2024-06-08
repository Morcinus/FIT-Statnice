---
created: 2024-06-03T10:01:04
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-19 PA1AG1

> BI-SPOL-19 (PA1 + AG1)
> Časová a paměťová složitost algoritmů. Algoritmy vyhledávání (sekvenční, půlením intervalu), slučování a řazení (BubbleSort, SelectSort, InsertSort, MergeSort, QuickSort). Dolní mez složitosti řazení v porovnávacím modelu. Řazení v lineárním čase.


START
BI-SZZ

Co je **algoritmus**?

Back:

konečná **posloupnost operací** (příkazů) vedoucí k vyřešení **třídy problémů**

(nejen jedné konkrétní instance problému)

pro všechny přípustné vstupy vrací očekávané výsledky v konečném počtu kroků
<!--ID: 1717408187986-->
END

---


START
BI-SZZ

Jaké rozlišujeme 2 hlavní složitosti u algoritmů?

Back:

- časová
- paměťová
<!--ID: 1717408187989-->
END

---


#### časová složitost


START
BI-SZZ

Co je **časová složitost** algoritmu?

Back:

závislost času potřebného pro výpočet na velikosti vstupu
<!--ID: 1717408187992-->
END

---


START
BI-SZZ

Je časová složitost závislá na programovacím jazyce nebo hardwaru? 

Back:

Ne. Je to čistě vlastnost algoritmu/programu.
<!--ID: 1717408187994-->
END

---


START
BI-SZZ

Co je **asymptotická (časová) složitost** $T(n)$?

Back:

uvažují se jen členy nejvyššího řádu, ignorují se multiplikativní konstanty
<!--ID: 1717408187997-->
END

---


START
BI-SZZ

Co je **velké-O notace**? (Big O notation)

Back:

horní odhad časové složitosti
<!--ID: 1717408188000-->
END

---


START
BI-SZZ

Co značí $\mathcal O (f(n))$? (big o notation)

Back:

$\mathcal O (f(n))$ je množina funkcí, které nerostou rychleji než $f(n)$
<!--ID: 1717408188002-->
END

---


START
BI-SZZ

Seřaď jak jdou po sobě složitosti:

- $\mathcal O(n)$
- $\mathcal O(n^k)$
- $\mathcal O(n \log n)$
- $\mathcal O(n!)$
- $\mathcal O(\log n)$
- $\mathcal O(k^n)$

Back:

$$\mathcal O(\log n) \subset \mathcal O(n) \subset \mathcal O(n \log n) \subset \mathcal O(n^k) \subset \mathcal O(k^n) \subset \mathcal O(n!)$$
<!--ID: 1717408188005-->
END

---


START
BI-SZZ

Co je **paměťová složitost** programu?

Back:

závislost potřebné paměti na velikosti vstupu
<!--ID: 1717408188008-->
END

---

### Vyhledávací algoritmy


START
BI-SZZ

Jaké jsou 2 typy vyhledávacích u algoritmů? (v poli hodnot)

Back:

- **sekvenční** (lineární) vyhledávání
- **binární** vyhledávání (binary search)
<!--ID: 1717408188011-->
END

---


START
BI-SZZ

Jak funguje **sekvenční** vyhledávání? (linear search)

Back:

Porovnání **hledané hodnoty** s **každým prvkem pole**

jakmile je hledaný prvek nalezen, algoritmus může skončit
<!--ID: 1717408188013-->
END

---


START
BI-SZZ

Jaká je časová složitost **sekvenčního vyhledávání**?

Back:

$$\mathcal O (n)$$
<!--ID: 1717408188016-->
END

---


START
BI-SZZ

Jak funguje **binární vyhledávání**? (binary search)

Back:

popis algoritmu
1. pole musí být seřazené
2. vybrat prostřední prvek
	- pokud je rovný hledanému, je nalezeno a algoritmus může skončit
	- pokud je větší než hledaný, opakovat krok 2 v dolní polovině pole
	- pokud je menší než hledaný, opakovat krok 2 v horní polovině pole
<!--ID: 1717408188018-->
END

---


START
BI-SZZ

Jaká je časová složitost **binárního vyhledávání**?

Back:

$$\mathcal O (\log n)$$

_Vysvětlení_
Protože:  $T(n) = \log_2(n) \in$ $\mathcal O (\log n)$
<!--ID: 1717408188021-->
END

---

### řadící algoritmy


START
BI-SZZ

Jaké jsou 3 různé vlastnosti, které se rozlišují u řadících algoritmů?

Back:

- **out-of-place** algoritmus ($\times$ in-place)
- **stabilní** algoritmus ($\times$ nestabilní)
- **datově citlivý** algoritmus ($\times$ datově necitlivý)
<!--ID: 1717408188023-->
END

---


START
BI-SZZ

Co znamená, že je algoritmus **out-of-place**?

Back:

potřebuje víc než $n + \mathcal O (1)$ paměti

(tzn. kromě paměti na dané prvky potřebuje ještě další paměť, která je závislá na velikosti vstupu)
<!--ID: 1717408188026-->
END

---


START
BI-SZZ

Co znamená, že je algoritmus **stabilní**?

Back:

prvky stejné hodnoty se nikdy neprohodí
<!--ID: 1717408188029-->
END

---


START
BI-SZZ

Co znamená, že je algoritmus **datově citlivý**

Back:

časová složitost závisí na hodnotách prvků
<!--ID: 1717408188032-->
END

---


START
BI-SZZ

Jaké jsou **řadicí algoritmy**? (6)

Back:

- BubbleSort
- SelectSort
- InsertSort
- MergeSort
- QuickSort
- CountingSort
<!--ID: 1717408188035-->
END

---


START
BI-SZZ

Jak funguje **BubbleSort** (řazení zaměňováním)? 

Back:

postupně porovnává sousední dvojice prvků, pokud jsou ve špatném pořadí, prohodí je, toto se děje nad celým polem opakovaně, dokud není seřazené 

(nejvýš n-krát, protože po k-tém průchodu je posledních k prvků seřazeno)
<!--ID: 1717408188037-->
END

---


START
BI-SZZ

Jakou časovou složitost má **BubbleSort**?

Back:

$\mathcal O (n^2)$
<!--ID: 1717408188040-->
END

---


START
BI-SZZ

Jaké vlastnosti má **BubbleSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- **in-place**
- **stabilní**
- **datově citlivý**
<!--ID: 1717408188043-->
END

---


START
BI-SZZ

Jak funguje **SelectSort** (řazení výběrem)?

Back:

průchodem najde nejmenší prvek v neseřazené (pravé) části pole, prohodí jej s prvním, toto opakuje, dokud nejsou všechny prvky v seřazené (levé) části
<!--ID: 1717408188045-->
END

---


START
BI-SZZ

Jakou časovou složitost má **SelectSort**?


Back:

$$\mathcal O (n^2)$$
<!--ID: 1717408188048-->
END

---


START
BI-SZZ

Jaké vlastnosti má **SelectSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- in-place
- nestabilní
- datově necitlivý
<!--ID: 1717408188051-->
END

---


START
BI-SZZ

Jak funguje **InsertSort** (řzení vkládáním)?

Back:

zařadí první prvek neseřazené (pravé) části pole na správné místo v seřazené (levé) části pole, toto opakuje, dokud nejsou všechny prvky v seřazené části

_Ukázka_
<iframe type="text/html" width="640" height="360"src="http://www.youtube.com/embed/zX-fbQ9a9Dg" frameborder="0" /> 
<!--ID: 1717408188053-->
END

---


START
BI-SZZ

Jakou časovou složitost má **InsertSort**?


Back:

$$\mathcal O (n^2)$$
<!--ID: 1717408188056-->
END

---


START
BI-SZZ

Jaké vlastnosti má **InsertSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- in-place
- stabilní
- datově citlivý
<!--ID: 1717408188058-->
END

---


START
BI-SZZ

Jak funguje **MergeSort** (řazení slučováním) **rekurzivním způsobem**?

Back:

jednoprvové pole je seřazené, a pokud je větší, rozdělí se na dvě části, ty se obě seřadí MergeSortem a pak se sloučí Mergem

slučovací algoritmus _(Merge)_:
- problém: jsou dána dvě seřazená pole $a, b$, chceme ze všech jejich prvků vytvořit jedno seřazené pole $c$
- zřetězení pole a následné použití řadicího algoritmu by bylo zbytečně pomalé
- lepší řešení: přečíst první prvek z $a$ i $b$, menší z nich přidat do $c$, přečíst další prvek z toho pole, ze kterého bylo přidáno, toto přídávání menšího ze dvou opakovat do vyčerpání jednoho z původních polí, pak zbytek nevyčerpaného přidat na konec $c$
<!--ID: 1717408188061-->
END

---


START
BI-SZZ

Jak funguje **MergeSort** (řazení slučováním) **iterativním způsobem**?

Back:

každý prvek je polem délky 1, ta se sloučí Mergem do polí délky 2, ta pak do polí délky 4 atd., dokud není seřazené celé pole

slučovací algoritmus _(Merge)_:
- problém: jsou dána dvě seřazená pole $a, b$, chceme ze všech jejich prvků vytvořit jedno seřazené pole $c$
- zřetězení pole a následné použití řadicího algoritmu by bylo zbytečně pomalé
- lepší řešení: přečíst první prvek z $a$ i $b$, menší z nich přidat do $c$, přečíst další prvek z toho pole, ze kterého bylo přidáno, toto přídávání menšího ze dvou opakovat do vyčerpání jednoho z původních polí, pak zbytek nevyčerpaného přidat na konec $c$
<!--ID: 1717408188064-->
END

---


START
BI-SZZ

Jakou časovou složitost má **MergeSort**?

Back:

$\mathcal O (n \log n)$ s velkou multiplikativní konstantou
<!--ID: 1717408188067-->
END

---

START
BI-SZZ

Jaké vlastnosti má **MergeSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- out-of-place
- stabilní
- datově necitlivý
<!--ID: 1717408188069-->
END

---


START
BI-SZZ

Jak funguje **QuickSort** (rychlé řazení)?

Back:

vybere z prvků **pivot**, prohazováním rozdělí pole na (levou) část prvků menších než pivot a (pravou) část prvků větších než pivot, obě části seřadí rekurzivně QuickSortem
- **pivot** je ideálně mediánem z prvků pole (aby obě části byly stejně velké a velikost instancí problému klesala exponenciálně)

_Vysvětlení_
<iframe type="text/html" width="640" height="360"src="http://www.youtube.com/embed/Hoixgm4-P4M" frameborder="0" /> 
<!--ID: 1717408188072-->
END

---


START
BI-SZZ

Jakou časovou složitost má **QuickSort**?

Back:

průměrná složitost $\mathcal O (n \log n)$ s malou multiplikativní konstantou, v nejhorším případě $\mathcal O (n^2)$
<!--ID: 1717408188074-->
END

---


START
BI-SZZ

Jaké vlastnosti má **QuickSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- in-place
- nestabilní
- datově citlivý
<!--ID: 1717408188077-->
END

---


START
BI-SZZ

Jaký **algoritmus** řazení je obecně **nejrychlejší**?

Back:

QuickSort
<!--ID: 1717408188080-->
END

---


START
BI-SZZ

Jak můžu použít quicksort v Cčku?

Back:

Implementován funkcí `qsort` ve standardní knihovně C `stdlib.h`
<!--ID: 1717408188082-->
END

---


START
BI-SZZ

Jak funguje **CountingSort**?

Back:

při prvním průchodu vstupním polem uloží četnosti všech (= i nepřítomných) hodnot (od $1$ do $r$) do pomocného pole, pak prefixovým součtem pro každou hodnotu vypočítá pozici, kde bude po seřazení začínat sekce s těmito hodnotami (do druhého pomocného pole indexů), pak podruhé projde vstupní pole a vkládá prvky na správné pozice, při každém vložení zvýší index o $1$

- nepracuje v porovnávacím modelu
- využívá toho, že se hodnoty v polích opakují a že je jich omezený počet $r$

<iframe type="text/html" width="640" height="360"src="http://www.youtube.com/embed/7zuGmKfUt7s" frameborder="0" /> 
<!--ID: 1717408188085-->
END

---


START
BI-SZZ

Proč se v praxi CountingSort moc nepoužívá?

Back:

v praxi je rozsah čísel většinou příliš velký, aby se to vyplatilo

(to pomocné pole by bylo moc velké)
<!--ID: 1717408188087-->
END

---


START
BI-SZZ

Jakou časovou složitost má **CountingSort**?

Back:

$$\mathcal O (n)$$
<!--ID: 1717408188090-->
END

---


START
BI-SZZ

Jaké vlastnosti má **CountingSort**?

- out-of-place / in-place
- stabilní / nestabilní
- datově citlivý / datově necitlivý

Back:

- out-of-place
- stabilní
- datově necitlivý
<!--ID: 1717408188093-->
END

---

### dolní mez složitosti řazení v porovnávacím modelu


START
BI-SZZ

Co je **porovnávací model** (v řadících algoritmech)?

Back:

porovnávání hodnot a přesouvání prvků jsou jediné povolené operace
<!--ID: 1717408188095-->
END

---


START
BI-SZZ

Věta: **o složitosti řazení** (+ náznak důkazu)

Back:

každý deterministický algoritmus v porovnávacím modelu, který seřadí $n$-prvkovou posloupnost, použije v nejhorším případě $\Omega(n \cdot \log n)$ porovnání

_Idea důkazu:_
Pole o $n$ prvcích má $n!$ permutací, a tedy i $n!$ způsobů, jak jej seřadit. Pokud sestavíme rozhodovací strom, kde každý list je jedním z těchto seřazení a každý nelist je porovnáním dvou prvků, bude mít hloubku aspoň $\log(n!) \in \Omega (n \log n)$. Pro některé permutace tedy bude potřeba $\Omega (n \log n)$ porovnání. $\square$

_Důkaz_
![](../Assets/Pasted%20image%2020240603155414.png)
![](../Assets/Pasted%20image%2020240603155419.png)
![](../Assets/Pasted%20image%2020240603155426.png)
<!--ID: 1717408188098-->
END

---


START
BI-SZZ

Co je **optiomální algoritmus** řazení?

Back:

algoritmus s časovou složitostí $\mathcal O (n \log n)$
<!--ID: 1717408188100-->
END

---
