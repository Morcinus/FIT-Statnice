---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-03 NI-MPI

> NI-SPOL-03 (NI-MPI)
> Funkce více proměnných: gradient, Hessián, definitnost matic, extrémy funkcí více proměnných bez omezení a s rovnostními omezeními.


## Funkce více proměnných

<!--
Original Flashcard ID: 1728921214911
-->

START
NI-SZZ

Jak se prakticky počítá **parciální derivace**?

Např. funkce
$f(x,y)=x^2+y^2$

A chceme:
$$\frac{\partial f}{\partial x}$$

Back:

1. Všechny ostatní proměnné bereme jako konstanty (tedy $y$)
2. Derivujeme podle $x$

Výsledek by byl $\frac{\partial f}{\partial x}=2x$
<!--ID: 1778786397448-->
END

---

<!--
Original Flashcard ID: 1728921214914
-->

START
NI-SZZ

Jaký je význam 1. parciální derivace?

Back:

Když udělám řez v tom 3D grafu, tak žjistím, jestli je v tom řezu rostoucí/klesající
<!--ID: 1778786397451-->
END

---

<!--
Original Flashcard ID: 1728921214852
-->

START
NI-SZZ

Definice: **funkce více reálných proměnných**

Back:

Je to funkce $f : D_f \rightarrow \mathbb{R}$, kde $D_f \subseteq \mathbb{R}^n$ (pro $n$ celé kladné)

$D_f$ je definiční obor
$f(D_f)$ je obor hodnot

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240923125515.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
Např. $\mathbb{R}^2$ model terénu mám 2D plochu a každému bodu přiřadím výšku

Např. $\mathbb{R}^3$ model místnosti, kde každému bodu je přiřazena teplota v tom bodě
<!-- ExampleEnd -->
<!--ID: 1778786397453-->
END

---

## Gradient

<!--
Original Flashcard ID: 1728921214920
-->

START
NI-SZZ

Co znázorňuje gradient?

Back:

Směr největšího spádu.

Např. když jdu na kopec, tak gradientem je jakoby směru nejprudší cesty k tomu vrcholu.
<!--ID: 1778786397456-->
END

---

<!--
Original Flashcard ID: 1728921214879
-->

START
NI-SZZ

Definice: **parciální derivace ve směru v bodě**

Back:

![](../../Assets/Pasted%20image%2020240923130201.png)

Co mi říká:
$$\frac{\partial f}{\partial x}$$

- zafixuju y souřadnici a mění se mi jen x souřadnice
- V tom grafu pak provedu derivaci​
- $H(b)$ je okolí bodu $b$

![](../../Assets/Pasted%20image%2020240923130229.png)

Tags: core
<!--ID: 1778786397459-->
END

---

<!--
Original Flashcard ID: 1728921214882
-->

START
NI-SZZ

Definice: **Gradient funkce v bodě**

Back:

![](../../Assets/Pasted%20image%2020240923130250.png)

Neformálně:
V daném bodě to je směr nejvyššího růstu.

![](../../Assets/Pasted%20image%2020240923130304.png)

Tags: core
<!--ID: 1778786397462-->
END

---

<!--
Original Flashcard ID: 1728921214887
-->

START
NI-SZZ

Definice: **Derivace funkce ve směru $\textbf{v}$ v bodě**

Back:

![](../../Assets/Pasted%20image%2020240923130329.png)

V nějakém bodě $\textbf{b}$ se vychýlím o h a spočtu tu derivaci.

$||\textbf{v}|| = 1$ znamená, že ten vektor je jednotkový

Tags: core
<!--ID: 1778786397467-->
END

---

<!--
Original Flashcard ID: 1728921214890
-->

START
NI-SZZ

Věta: **Výpočet derivace funkce** ve směru $\textbf{v}$ v bodě $\textbf{b}$

Back:

![](../../Assets/Pasted%20image%2020240923130408.png)
![](../../Assets/Pasted%20image%2020240930131445.png)

Postup výpočtu:

1. Spočtu si gradient (pomocí parciálních derivací)
2. Vynásobím gradient se směrovým vektorem
3. Tím dostanu parciální derivaci
<!--ID: 1778786397470-->
END

---

<!--
Original Flashcard ID: 1728921214885
-->

START
NI-SZZ

Co je **grafické znázornění gradientu**? (na tohle se ptají u zkoušky!)

Back:

Je to **směr nejvyššího růstu funkce**, neboli formálněji:

Když vypočítáme **parciální derivaci $f$ ve směru $\textbf{v}$ v bodě** $\textbf{b}$, tak tato směrnice bude nejvyšší (ze všech směrnic v tom daném bodě).

Tzn. když spočítáme tohle, tak nám to vyjde nejvyšší v tom daném směru $\textbf{v}$
![](../../Assets/Pasted%20image%2020240930131518.png)
![](../../Assets/Pasted%20image%2020240930131042.png)
<!--ID: 1778786397464-->
END

---


<!--
Original Flashcard ID: 1728921214904
-->

START
NI-SZZ

Definice: **kritické body**

Back:

**Kritické body** = body podezřelé z extrému.

Jsou to body, ve kterých je **gradient nulový** nebo tam **neexistuje**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923130959.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397473-->
END

---

<!--
Original Flashcard ID: 1728921214907
-->

START
NI-SZZ

Jaký je hlavní rozdíl mezi:

- **parciální derivací** v bodě ve směru
- **derivací** v bodě ve směru?

Back:

**Parciální derivace** je pouze ve směru nějaké osy ($x,y, \dots$) - zafixujeme všechny souřadnice (až na jednu) a derivujeme v jednom směru.

**Derivace v bodě ve směru** derivuje v libovolném směru určeném vektorem $v$. To dělá tak, že kombinuje všechny parciální derivace podle směru vektoru.

<!-- DetailInfoStart -->

**Parciální derivace**
![](../../Assets/Pasted%20image%2020240923130201.png)
![](../../Assets/Pasted%20image%2020240923130229.png)
**Derivace**
![](../../Assets/Pasted%20image%2020240923130329.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397476-->
END

---

## Hessián

<!--
Original Flashcard ID: 1728921214917
-->

START
NI-SZZ

Jaký je význam 2. parciální derivace?

Back:

Když udělám řez v tom 3D grafu, tak zjistím, jeslti je v tom řezu konkávní/kovexní
<!--ID: 1778786397478-->
END

---

<!--
Original Flashcard ID: 1728921214784
-->

START
NI-SZZ

Co je parciální derivace druhého řádu?

Back:

Prostě dvakrát za sebou parciálně zderivujem podle různých proměnných:
![](../../Assets/Pasted%20image%2020260517110227.png)

Lze také dvakrát zderivovat podle stejné proměnné:
![](../../Assets/Pasted%20image%2020260517110258.png)

Stejně jako bychom dvakrát derivovali při normálním zkoumání průběhu funkce ve 
2D.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020240930133125.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397481-->
END

---

<!--
Original Flashcard ID: 1728921214787
-->

START
NI-SZZ

Definice: **Hessova matice**

Back:

![](../../Assets/Pasted%20image%2020240930133445.png)

**Neformálně:**
Ukazuje, jak se mění sklon funkce ve všech směrech v daném bodě.

Tags: core
<!--ID: 1778786397484-->
END

---

<!--
Original Flashcard ID: 1728921214789
-->

START
NI-SZZ

Věta: **pořadí parciálního derivování**

Back:

![](../../Assets/Pasted%20image%2020260517110914.png)

Neboli nezávisí na pořadí derivování

Důsledek: Hessova matice je často symetrická - tzn. podle diagonály v matici.
<!--ID: 1778786397486-->
END

---

<!--
Original Flashcard ID: 1728921214792
-->

START
NI-SZZ

Definice: **Druhá parciální derivace funkce $f$ ve směru $\textbf{v}$ v bodě $\textbf{b}$**

Back:

![](../../Assets/Pasted%20image%2020240930133700.png)
<!--ID: 1778786397489-->
END

---

<!--
Original Flashcard ID: 1735463085834
-->

START
NI-SZZ

Věta: Výpočet **druhé** derivace ve směru $\textbf{v}$ v bodě $\textbf{b}$

Back:

![](../../Assets/Pasted%20image%2020240930133710.png)

Jak se to používá:
![](../../Assets/Pasted%20image%2020240930134257.png)
Můžu potom provádět "ruské násobení":

1. Napíšu si vektor a tu matici
2. Vynásobím je a dostanu vektor
3. ten vektor potom pronásobím s dalším vektorem

Tags: core
<!--ID: 1778786397492-->
END

---

<!--
Original Flashcard ID: 1729237386267
-->

START
NI-SZZ


Co platí pro **Hessovu matici polynomů druhého stupně**?

Back:

Jejich **Hessova matice** je **konstantní**.

Tzn. v každém bodě je stejná a její hodnoty jsou konstanty.

<!-- ExampleStart -->

Hessova matice je konstantní pro:
$f(x,y) = x^2+y^2$
$f(x,y) = x^2-y^2$
$f(x,y) = xy$
$f(x,y) = (x+y)^2$

Konstantní hessova matice vypadá třeba takhle:
$$ 
H =  
\begin{pmatrix}  
6 & 2 \\  
2 & 10  
\end{pmatrix}  
$$

<!-- ExampleEnd -->
<!--ID: 1778786397494-->
END

---

## Definitnost matic

<!--
Original Flashcard ID: 1728921214796
-->

START
NI-SZZ

Definice: **definitnost matic**

Back:

![](../../Assets/Pasted%20image%2020240930134711.png)

5. **indefinitní:** V jednom směru druhá parciální derivace vychází kladně a v druhém záporně.

Pozn. obecně určování definitnosti je takový pracný a člověk si to musí určit příkladama/protipříkladama z definice

_Příklad indefinitního_:
![](../../Assets/Pasted%20image%2020240930134809.png)

Tags: core
<!--ID: 1778786397497-->
END

---

<!--
Original Flashcard ID: 1728921214799
-->

START
NI-SZZ

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![](../../Assets/Pasted%20image%2020240930135010.png)

Back:

![](../../Assets/Pasted%20image%2020240930135024.png)

Symetrická matice = symetrická podle hlavní diagonály

Tags: core
<!--ID: 1778786397499-->
END

---

<!--
Original Flashcard ID: 1728921214801
-->

START
NI-SZZ

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![](../../Assets/Pasted%20image%2020240930135037.png)

Back:

![](../../Assets/Pasted%20image%2020240930135029.png)

Tags: core
<!--ID: 1778786397506-->
END

---

<!--
Original Flashcard ID: 1728921214804
-->

START
NI-SZZ

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![](../../Assets/Pasted%20image%2020240930135042.png)

Back:

![](../../Assets/Pasted%20image%2020240930135046.png)

Tags: core
<!--ID: 1778786397510-->
END

---

<!--
Original Flashcard ID: 1728921214807
-->

START
NI-SZZ

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![](../../Assets/Pasted%20image%2020240930135055.png)

Back:

![](../../Assets/Pasted%20image%2020240930135050.png)

Tags: core
<!--ID: 1778786397513-->
END

---

<!--
Original Flashcard ID: 1728921214809
-->

START
NI-SZZ

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![](../../Assets/Pasted%20image%2020240930135103.png)

Back:

![](../../Assets/Pasted%20image%2020240930135107.png)

Tags: core
<!--ID: 1778786397516-->
END

---

<!--
Original Flashcard ID: 1728921214813
-->

START
NI-SZZ

Věta: **Sylvestrovo kritérium**

Back:

![](../../Assets/Pasted%20image%2020240930135304.png)

Tags: core
<!--ID: 1778786397519-->
END

---

<!--
Original Flashcard ID: 1728921214815
-->

START
NI-SZZ

Věta: **diagonála matice** a **definitnost**

Back:

![](../../Assets/Pasted%20image%2020240930135505.png)

Tags: core
<!--ID: 1778786397522-->
END

---

<!--
Original Flashcard ID: 1729237386273
-->

START
NI-SZZ


Co platí, když má **Hessova matice** na diagonále nulu?

Back:

Pak není **pozitivně definitní** ani **negativně definitní**

(Může být semidefinitní nebo indefinitní)
<!--ID: 1778786397525-->
END

---

<!--
Original Flashcard ID: 1729237386276
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1778786397528-->
END

---

## Extrémy funkcí více proměnných bez omezení a s rovnostními omezeními

<!--
Original Flashcard ID: 1728921214871
-->

START
NI-SZZ

Definice: **lokální minimum**, **ostré lokální minimum**, **globální minimum**

Back:

![](../../Assets/Pasted%20image%2020240923140916.png)

Analogicky jako u normálních funkcí

Tags: core
<!--ID: 1778786397539-->
END

---

<!--
Original Flashcard ID: 1728921214893
-->

START
NI-SZZ

Co je **tečná nadrovina** funkce v bodě? Jak vypadá její **rovnice**? Jak vypadá její **normálový vektor**?

(tohle bylo třeba v jedné rozstřelové otázce u zkoušky)

Back:

![](../../Assets/Pasted%20image%2020240923130526.png)

**Neformálně:**
Vytvořím rovinu v tom bodě (analogie tečny grafu ve 2d). Této rovině se říká tečná nadrovina. Je to to samé, jako kdybych v tom bodě sjednotil všechny tečny ve všech směrech v tom bodě.

Dovysvětlení:
Ta nadrovina je popsaná pomocí $(x_1,x_2,\dots,x_n, z)$.

![](../../Assets/Pasted%20image%2020240923130551.png)

Tags: core
<!--ID: 1778786397542-->
END

---

<!--
Original Flashcard ID: 1728921214895
-->

START
NI-SZZ

Věta: Nutná podmínka lokálního extrému (1)

Back:

![](../../Assets/Pasted%20image%2020240923130621.png)

Tzn. **gradient musí být nulový** - na každou stranu se nezvednu vůbec

<!-- ExplanationStart -->
Je to analogicky jako u 2D grafů. Aby tam byl extrém, tak tam musí být nulová derivace. Tady ve 3D tam musí být derivace nulová ve všech směrech, tzn. všechny parciální derivace (gradient) musí být v bodě nulový.
<!-- ExplanationEnd -->

Tags: core
<!--ID: 1778786397544-->
END

---

<!--
Original Flashcard ID: 1728921214901
-->

START
NI-SZZ

Definice: **stacionární body**

Back:

Body, kde je gradient **nulový**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923130823.png)

<!-- DetailInfoEnd -->

![](../../Assets/Pasted%20image%2020240923130829.png)
<!--ID: 1778786397547-->
END

---

<!--
Original Flashcard ID: 1728921214818
-->

START
NI-SZZ

Věta: **Postačující podmínka existence extrému a sedlového bodu**

Back:

![](../../Assets/Pasted%20image%2020240930135358.png)
![](../../Assets/Pasted%20image%2020240930140831.png)

Tags: core
<!--ID: 1778786397550-->
END

---

<!--
Original Flashcard ID: 1728921214821
-->

START
NI-SZZ

Věta: Nutná podmínka existence lokálního extrému (2)

Back:

![](../../Assets/Pasted%20image%2020240930140823.png)

Tags: core
<!--ID: 1778786397553-->
END

---

<!--
Original Flashcard ID: 1728921214824
-->

START
NI-SZZ

Postup: Jak najít extrémy funkce více proměnných?

Back:

1. Najdu **kritické body** (stacionární + ty, kde alespoň jedna parciální derivace neexistuje)
2. Pokud jsou **všechny 2. parciální derivace** v okolí stacionárního bodu $\textbf{b}$ spojité, najít **Hessovu matici**. Pokud je matice
	1. **pozitivně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **minima**
	2. **negativně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **maxima**
	3. **indefinitní**, pak je bod $\textbf{b}$ sedlovým bodem (tj. není extrém)

<!-- DetailInfoStart -->

Pozn. Hledat kritické body je samo o sobě **velice obtížné** a není jednotný algoritmus, co by to jednoduše vyřešil. Najít přesné body je proto velice těžké. Samozřejmě ty řešení, co máme na tomto předmětu, jsou jednoduché.

![](../../Assets/Pasted%20image%2020240930140745.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397555-->
END

---

<!--
Original Flashcard ID: 1729236692630
-->

START
NI-SZZ


Co obecně (vlastními slovy) děláme v **úlohách vázaného extrému** na funkcích o dvou proměnných?

Back:

Máme **graf funkce** (jakoby 3D terén) a máme **vazbu** (která definuje "cestu" na tom grafu). Ta té "cestě" pak hledáme lokální **minima** a **maxima**.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241011120811.png)
Červená elipsa vpravo je například ta cesta.

Další příklady:
![](../../Assets/Pasted%20image%2020241011120945.png)
![](../../Assets/Pasted%20image%2020241011121005.png)

<!-- ExampleEnd -->
<!--ID: 1778786397558-->
END

---

<!--
Original Flashcard ID: 1729236692638
-->

START
NI-SZZ


Co je obecně **úloha vázaného extrému minima**

Back:

![](../../Assets/Pasted%20image%2020241011123158.png)
![](../../Assets/Pasted%20image%2020241011123211.png)

<!-- ExplanationStart -->

Máme minimalizovat funkci $f$ za daných podmínek.

Máme $m$ **rovnostních vazeb (=vrstevnic)** (určených rovnicemi $g_j(x)= 0$).
Máme $p$ **nerovnostních vazeb (=vnitřky vrstevnic)** (určených funkcemi $h_k(x) \leq 0$)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011123820.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397561-->
END

---

<!--
Original Flashcard ID: 1729236692651
-->

START
NI-SZZ


Jak se nazývají $f$, $g_j$ a $h_k$ v **úloze vázaného extrému minima**?

![](../../Assets/Pasted%20image%2020241011123158.png)

Back:

- $f$ - objektivní/účelová/minimalizovaná/**optimalizovaná funkce**
- $g_j$ - **rovnostní podmínka**/vazba
- $h_k$ - **nerovnostní podmínka**/vazba

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011123605.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397564-->
END

---

<!--
Original Flashcard ID: 1729236692661
-->

START
NI-SZZ


Definice: **lokální minimum vzhledem k množině**

Back:

![](../../Assets/Pasted%20image%2020241011133334.png)

<!-- ExplanationStart -->

Chceme minimalizovat funkci $f: \mathbb{R}^n\rightarrow \mathbb{R}$

$\cal{M}$ - množina, která splňuje dané podmínky (s tím $g_j$ a $h_k$)
Funkce $f$ v nějakém bodě $x^*$, který leží jak v té množině, tak v definičním oboru té funkce, nabývá lokálního minima vzhledem k množině $\cal{M}$, pokud existuje okolí, pro které platí ta podmínka.

<!-- ExplanationEnd -->

<!-- ExampleStart -->

$\cal{M}$ - modrá množina v tom půdorysu. Na té množině mám nějaké to okolí (v obrázku nakreslené modré kolečko). Funkce $f$ vzhledem k té množině nabývá lokálního minima na tom okolí.

$D_f$ je zde rovina určená osami $y$ a $x$
![](../../Assets/Pasted%20image%2020241011134736.png)

![](../../Assets/Pasted%20image%2020241011120945.png)

<!-- ExampleEnd -->

<!-- OtherInfoStart -->

Analogicky se definuje maximum a ostré extrémy.

<!-- OtherInfoEnd -->

Související Marasty pro procvičení:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241028154759.png)
![](../../Assets/Pasted%20image%2020241028154812.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397566-->
END

---

<!--
Original Flashcard ID: 1729236692670
-->

START
NI-SZZ


K čemu slouží **Lagrangeova funkce**?

Back:
**Popis příkladu:**
Máme nějakou funkci $f(x,y)$ a její vrstevnice (ty kroužky). Na té mapě vykreslíme cestu pomocí funkce $g(x,y)$.

Když protnu vrstevnici, tak nejsem na vrcholu (pokud nejsem na hřebenu)
. Potom to znamená, že na jedné straně vrstevnice jsem níž a na druhé výš.

Tedy lokální extém na cestě může nastat pouze v místech, kde se dotýkám vrstevnice.

To že se dotýkám vrstevnice zjistím z toho, že cesta a vrstevnice mají stejnou tečnu. Tečny jsou kolmý na gradient. Neboli musím najít body takové, kde gradienty funkce $f$ a funkce $g$ jsou rovnoběžné. To jsou pak body podezřelé z extrému.

**Multiplikátory Lagrangeovy funkce nám pak umožní zjistit, kdy jsou gradienty těchto funkcí rovnoběžné.**

![](../../Assets/Pasted%20image%2020241011135242.png)
<!--ID: 1778786397569-->
END

---

<!--
Original Flashcard ID: 1729236692679
-->

START
NI-SZZ


Definice: **Lagrangeova funkce** (pro rovnostní vazby)

Back:

![](../../Assets/Pasted%20image%2020241011140028.png)

<!-- ExplanationStart -->

Lagrangeova funkce má $n+m$ proměnnch ($\textbf{x}$ je vektor o $n$, $\lambda$ je vektor o $m$ proměnných). Je definovaná jako funkce $f(\textbf{x})$ plus ty lambdy vynásobené těmi funkcemi $g_j$.

<!-- ExplanationEnd -->
<!--ID: 1778786397572-->
END

---

<!--
Original Flashcard ID: 1729236692690
-->

START
NI-SZZ


Definice: **Lagrangeovy multiplikátory**

![](../../Assets/Pasted%20image%2020241011133516.png)

Back:

![](../../Assets/Pasted%20image%2020241011133509.png)
<!--ID: 1778786397575-->
END

---

<!--
Original Flashcard ID: 1729236692701
-->

START
NI-SZZ


Věta: **Postačující podmínka existence ostrého lokálního minima pro rovnostní vazby**

Back:

![](../../Assets/Pasted%20image%2020241011133549.png)

<!-- ExplanationStart -->

Ta podmínka s $\cal{M} \subset \bar{\cal{M}}$ znamená, že $f$ je definována na množině, která obklopuje $\cal{M}$ (mám tam jakoby pruh kolem $\cal{M}$.
![](../../Assets/Pasted%20image%2020241011141444.png)

Když jsou splňeny ty podmínky $x^*$, tak je pak lokální minimum.
(0) = ten bod je na naší cestě
(1) = splňuju vazební podmínku
(2) = mám nějakou vazbu (=cestu) a nezajímá mě, jaké jsou ostatní extrémy v terénu, zajímají mě jen ty směry té mojí cesty, tedy směry kolmé na gradient té cesty (proto tam je to omezení tím $\nabla g_j(x^*)\cdot v=0$)

Ta podmínka (2) mi zeslabuje tu finální nerovnici

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1778786397577-->
END

---

<!--
Original Flashcard ID: 1729236692711
-->

START
NI-SZZ


Jak se obecně **používá Lagrangeova funkce**? (při hledání lokálního extrému)

Back:

1. Napíšeme si Lagrangeovu funkci $L$
2. Zderivujeme ji podle všech proměnných, čímž získáme $n+m$ rovnic
3. Rovnice vyřešíme
4. Koukneme se na všechny směry, co jsou kolmé na gradienty všech těch vazeb a spočteme $v^T\cdot \nabla^2_xL(x^*;\lambda^*)\cdot v$
5. Když to bude kladné, máme lokální minimum
<!--ID: 1778786397580-->
END

---

<!--
Original Flashcard ID: 1729236692717
-->

START
NI-SZZ


Čím se zabývá "metoda řešení při rovnostních i nerovnostních vazbách"?

Back:

Mám nějakou cestu (vazbu), když jsem uvnitř ní (např. v tom kruhu), hledám minimum v daném okolí, které je také uvnitř té vazby.

![](../../Assets/Pasted%20image%2020241011144008.png)
<!--ID: 1778786397583-->
END

---

<!--
Original Flashcard ID: 1729236692727
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1778786397585-->
END

---

<!--
Original Flashcard ID: 1729236692746
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1778786397588-->
END

---

<!--
Original Flashcard ID: 1729236692755
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
Tags: core
<!--ID: 1778786397591-->
END

---


<!--
Original Flashcard ID: 1735925651079
-->

START
NI-SZZ


![](../../Assets/Pasted%20image%2020241230142339.png)

Back:

1. spočtu gradient
2. Dosadím do rovnice pro derivaci funkce ($\nabla_vf(x)=\nabla f(x) \cdot v$)
3. Vyjde $(E)$

Tags: maly
<!--ID: 1778786397593-->
END

---


<!--
Original Flashcard ID: 1735925651100
-->

START
NI-SZZ


![](../../Assets/Pasted%20image%2020241230143437.png)

Back:

1. Spočtu vlastní čísla matice - matice se mi zredukuje na 2x2 (nuly se mi odstraní)
	- Determinant matice, kde diagonály odečtu $\lambda$, vyjádřím $\lambda$
2. Mám kvadratickou rovnici $\lambda^2-2\lambda-3$, tedy vlastní čísla budou $3, -1, 0, 0, \dots$
3. Vlastní čísla se liší, tedy je **indefinitní** (A)

Tags: maly
<!--ID: 1778786397596-->
END

---

<!--
Original Flashcard ID: 1735922645583
-->

START
NI-SZZ


Jak se řeší příklad tohoto typu? (obecný postup)

![](../../Assets/Pasted%20image%2020250103141128.png)

Back:

![](../../Assets/Pasted%20image%2020250103142615.png)

**Postupujeme podle věty.**

1. **(0. derivace) + aktivní a neaktivní vazby** Ověříme, že bod leží uvnitř vazby nebo na její hranici
	- Tzn. dosadíme $(x,y)$ do podmínky a zjistíme, jeslti je to menší než nula, nula nebo větší než nula).
	- Podmínky $\lt 0$ budou uvnitř vazby a budou mít $\mu = 0$
	- Podmínky $= 0$ budou na hranici vazby
	- Body mimo vazbu automaticky vyřadíme.
2. **(1. derivace)** Ověříme, že gradient Lagrangeovy funkce bez $\mu$ je nulový:
	- Spočteme $L(x,y,\mu)$ a její gradient $\nabla L_{(x,y)}$
	- U bodů, co jsou uvnitř, platí, že $\mu = 0$, tzn. jen dosadím $x,y,\mu$ do gradientu a musí mi všechny složky vyjít nula.
	- U bodů, co jsou na hranici dosadím $x,y$ a budu řešit soustavu rovnic. Pokud najdu $\mu$ pro které to platí, je to ok. Pokud ne, končím.
3. **2. derivace** Spočteme Hessovu matici v daném bodě.
	- Pokud $\mu = 0$, vynásobím to vektorem $(a,b)$
	- Pokud $\mu \neq 0$, musím najít obecný vektor, co splňuje to, že je kolmý na gradient vazby. Tzn. spočtu $\nabla h$. Pak mi musí platit, že to je kolmý na to. Např. když vyjde $(1,2)$, bude to $(-2a, a)$.
	1. Potom zkoumáme jestli jsme schopný mít výsledek větší než nula, resp. menší než nula.
		- Pokud to najdu tak, aby to bylo $< 0$ i $>0$, pak to je **indefinitní**.
		- Pokud $< 0$, je to podezřelé z maxima
		- Pokud $>0$, je to podezřelé z minima
4. **směr od hranice**: Zkontrolujeme, že nám znaménko multiplikátoru $\mu$ sedí s tím jeslti to je maximum nebo minimum

Hint: V kroku (2. derivace) můžu zkusit na Hessovu matici uplatnit Sylvestrovo kritérium. Pak to je rovnou lok. minimum, resp. maximum.

Tags: analyza3 core
<!--ID: 1778786397533-->
END

---

<!--
Original Flashcard ID: 1735922645587
-->

START
NI-SZZ


Jak se prakticky počítají lokální extrémy? (jednotlivé kroky)

Back:

1. Vyjádříme Lagrangeovu funkci $L(x^*, \lambda) = \dots$
2. Spočteme gradient $\nabla L(x^*,\lambda^*) = 0$, čímž dostaneme soustavu rovnic a najdeme jednotlivé složky $x$ a $\lambda$
3. Spočteme Hessovu matici
<!--ID: 1778786397536-->
END

---

<!--
Original Flashcard ID: 1729236692608
-->

START
NI-SZZ


Když při **hledání extrémů** **nemáme aktivní vazbu** a vyjde nám **indefinitní matice**, co to znamená? Jaký **závěr** z toho můžeme vyvodit?
$$\nabla ^2_{x}L(-1,0)=\begin{pmatrix} -2 & 0 \\ 0 & 2 \end{pmatrix}$$

Back:

Vidíme, že matice je **indefinitní**. Jelikož je mimo aktivní vazbu (je uvnitř), znamená to, že to je **sedlový bod** a kvůli tomu to **nemůže** být **minimum** ani **maximum**.

<!-- ExplanationStart -->

Je to protože budou existovat body, které jsou **výše** nebo **níže**.
![](../../Assets/Pasted%20image%2020241017162130.png)

**Červený** je ten stacionární bod, kde je matice **indefinitní**.
**Zelený** jsou ty ostatní stacionární body.

<!-- ExplanationEnd -->
<!--ID: 1778786397531-->
END

---
