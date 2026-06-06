---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: practice

> Příklady
> Zde je seznam otázek a příkladů, na které by se mohli u státnic potenciálně zeptat.

## NI-SPOL-01 NI-MPI

START
NI-SZZ

Uveď příklad grupy s netriviálními podgrupami a příklad grupy, která má jen triviální podgrupy.

Back:

- Grupa s netriviálními podgrupami: $(\mathbb{Z}_6, +)$, protože má např. podgrupu $\{0, 3\}$.
- Grupa pouze s triviálními podgrupami: $(\mathbb{Z}_p, +)$ pro prvočíslo $p$, např. $(\mathbb{Z}_5, +)$. Její podgrupy mají podle Lagrangeovy věty řád dělící $p$, tedy jen $1$ nebo $p$.

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845016-->
END

---

START
NI-SZZ

Uveď příklad nekonečné cyklické grupy.

Back:

$(\mathbb{Z}, +)$ je nekonečná cyklická grupa s generátorem $1$ nebo $-1$:

$$
\langle 1 \rangle = \mathbb{Z}
$$

Každá nekonečná cyklická grupa je izomorfní s $(\mathbb{Z}, +)$.

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845019-->
END

---

START
NI-SZZ

Jak najdeme generátory cyklické grupy $\mathbb{Z}_n$?

Back:

V aditivní grupě $(\mathbb{Z}_n, +)$ je prvek $k$ generátor právě tehdy, když:

$$
\gcd(k,n)=1
$$

Tedy hledáme čísla menší než $n$, která jsou s $n$ nesoudělná.

Počet generátorů je Eulerova funkce:

$$
\varphi(n)
$$

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845022-->
END

---


START
NI-SZZ

Jak zjistíme počet generátorů v grupě?

Např. v grupě $\mathbb{Z}_{250}^{\times}$

Back:

$\varphi({n})$, n je řád

![](../../Assets/Pasted%20image%2020260603183505.png)
![](../../Assets/Pasted%20image%2020260603183514.png)

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845025-->
END

---


START
NI-SZZ

Jaké podgrupy má cyklická grupa?

Back:

Každá podgrupa cyklické grupy je opět cyklická.

Navíc pokud má cyklická grupa řád $n$, pak pro každý dělitel $d \mid n$ existuje právě jedna podgrupa řádu $d$.

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845027-->
END

---

START
NI-SZZ

Ukaž příklad cyklické podgrupy v necyklické grupě.

Back:

V necyklické grupě lze vždy vzít triviální cyklickou podgrupu $\{e\}$.

Konkrétně v multiplikativní grupě jednotek $\mathbb{Z}_{12}^* = \{1,5,7,11\}$ je:

$$
\{1\}
$$

cyklická podgrupa generovaná prvkem $1$.

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845030-->
END

---

START
NI-SZZ

Jak se v grupách modulo $n$ hledá inverzní prvek?

Back:

Použije se rozšířený Eukleidův algoritmus.

Pro prvek $a \in \mathbb{Z}_n^*$ hledáme $x$ takové, že:

$$
ax \equiv 1 \pmod n
$$

Rozšířený Eukleidův algoritmus najde koeficienty $x,y$ splňující:

$$
ax + ny = \gcd(a,n)=1
$$

Pak je $x$ inverze prvku $a$ modulo $n$.

Tags: NI-SPOL-01 NI-MPI
<!--ID: 1780505845033-->
END

---

## NI-SPOL-02 NI-MPI

START
NI-SZZ

Jak se konstruují konečná tělesa prvočíselného a neprvočíselného řádu?

Back:

Pro prvočíselný řád $p$: $(\mathbb{Z}_p, +, \cdot)$

Pro neprvočíselný řád musí být řád mocninou prvočísla, tzn. $p^n$: 

Sestavíme tedy okruh polynomů $T[x]$ a nad nimi ireducibilní polynom a z toho konečné těleso řádu $p^n$

Tags: NI-SPOL-02 NI-MPI
<!--ID: 1780505845035-->
END

---

START
NI-SZZ

Uveď příklad těles řádu 4 a 5 včetně konstrukce a prvků.

Back:

Těleso řádu $5$:

$$
\mathbb{Z}_5 = \{0,1,2,3,4\}
$$

Těleso řádu $4$:

$$
GF(4) \cong \mathbb{F}_2[x] / (x^2+x+1)
$$

Jeho prvky lze psát:

$$
\{0,1,x,x+1\}
$$

Tags: NI-SPOL-02 NI-MPI
<!--ID: 1780505845038-->
END

---

START
NI-SZZ

Jak zkonstruovat konečné těleso řádu 81?

Back:

Protože:

$$
81 = 3^4
$$

konstruujeme těleso:

$$
GF(81) \cong \mathbb{F}_3[x] / (f(x))
$$

kde $f(x)$ je ireducibilní polynom stupně $4$ nad $\mathbb{F}_3$.

Prvky jsou zbytkové třídy polynomů stupně nejvýše $3$:

$$
a_0 + a_1\alpha + a_2\alpha^2 + a_3\alpha^3,\quad a_i \in \mathbb{F}_3
$$

Obecný postup: zvolit ireducibilní polynom stupně $4$ nad $\mathbb{F}_3$ a počítat modulo tento polynom.

Tags: NI-SPOL-02 NI-MPI
<!--ID: 1780505845041-->
END

---

START
NI-SZZ

Definuj Lagrangeovu větu a ukaž ji na příkladu.

Back:

Lagrangeova věta: Je-li $G$ konečná grupa a $H \leq G$ její podgrupa, pak řád podgrupy dělí řád grupy:

$$
|H| \mid |G|
$$

Příklad: V grupě $(\mathbb{Z}_6,+)$ má podgrupa:

$$
H = \{0,3\}
$$

řád $2$ a platí:

$$
2 \mid 6
$$

Tags: NI-SPOL-02 NI-MPI
<!--ID: 1780505845043-->
END

---

## NI-SPOL-03 NI-MPI

START
NI-SZZ

SMAZAT

Back:

SMAZAT

SMAZAT
<!--ID: 1780505845046-->
END

---

START
NI-SZZ

Popiš postup hledání lokálních extrémů funkce více proměnných.

Back:

1. Najdeme stacionární body z podmínky:

$$
\nabla f = 0
$$

2. Sestavíme Hessovu matici druhých derivací.
3. V podezřelých bodech určíme definitnost Hessovy matice.

Pro funkci dvou proměnných:

- pozitivně definitní Hessova matice znamená lokální minimum,
- negativně definitní Hessova matice znamená lokální maximum,
- indefinitní Hessova matice znamená sedlový bod.

Tags: NI-SPOL-03 NI-MPI
<!--ID: 1780505845049-->
END

---

START
NI-SZZ

Najdi lokální extrémy funkce $f(x,y)=x^2-y^2$.

Back:

Gradient:

$$
\nabla f(x,y)=(2x,-2y)
$$

Stacionární bod:

$$
2x=0,\quad -2y=0 \Rightarrow (x,y)=(0,0)
$$

Hessova matice:

$$
H =
\begin{pmatrix}
2 & 0 \\
0 & -2
\end{pmatrix}
$$

Hessova matice je indefinitní, protože má kladný i záporný vlastní směr. V bodě $(0,0)$ je tedy sedlový bod.

![](../../Assets/Pasted%20image%2020260603183619.png)

Tags: NI-SPOL-03 NI-MPI
<!--ID: 1780505845051-->
END

---

START
NI-SZZ

Jaký je geometrický význam gradientu?

Back:

Gradient $\nabla f(a)$ ukazuje směr největšího růstu funkce v bodě $a$.

Je kolmý na vrstevnici nebo hladinu funkce procházející daným bodem.

Směrová derivace ve směru jednotkového vektoru $v$ je:

$$
D_v f(a)=\nabla f(a)\cdot v
$$

Největší je ve směru gradientu.

![](../../Assets/Pasted%20image%2020260603183631.png)

Tags: NI-SPOL-03 NI-MPI
<!--ID: 1780505845054-->
END

---

START
NI-SZZ

Popiš vyšetřování extrému s rovnostním omezením pomocí Lagrangeovy funkce.

Např. pro funkci $f(x,y)$ a rovnostní omezení $g(x,y)=0$

Back:

Pro extrém funkce $f(x,y)$ s omezením $g(x,y)=0$ sestavíme Lagrangeovu funkci:

$$
L(x,y,\lambda)=f(x,y)+\lambda g(x,y)
$$

Potom řešíme soustavu:

$$
\nabla L(x,y,\lambda)=0
$$

Tedy současně:

$$
\frac{\partial L}{\partial x}=0,\quad
\frac{\partial L}{\partial y}=0,\quad
\frac{\partial L}{\partial \lambda}=g(x,y)=0
$$

![](../../Assets/Pasted%20image%2020260603183643.png)

Tags: NI-SPOL-03 NI-MPI
<!--ID: 1780505845057-->
END

---

START
NI-SZZ

Vyšetři extrém funkce $f(x,y)=x^2-y^2$ s omezením $y=x+1$ pomocí Lagrangeovy funkce.

Back:

Omezení zapíšeme jako:

$$
g(x,y)=x-y+1=0
$$

Lagrangeova funkce:

$$
L(x,y,\lambda)=x^2-y^2+\lambda(x-y+1)
$$

Podmínky:

$$
\nabla L=(2x+\lambda,\,-2y-\lambda,\,x-y+1)=0
$$

Tedy:

$$
2x+\lambda=0,\quad -2y-\lambda=0,\quad x-y+1=0
$$

Z prvních dvou rovnic plyne $x=y$, což je v rozporu s $x-y+1=0$. Na dané přímce tedy neexistuje stacionární bod. Po dosazení $y=x+1$ dostaneme:

$$
f(x,x+1)=x^2-(x+1)^2=-2x-1
$$

což je lineární funkce bez lokálního extrému.

Tags: NI-SPOL-03 NI-MPI
<!--ID: 1780505845060-->
END

---

## NI-SPOL-04 NI-MPI

START
NI-SZZ

Jak se počítá dvojný integrál na obecné množině?

Back:

Oblast se popíše pomocí mezí pro jednu proměnnou a vnitřních mezí pro druhou proměnnou. Například pro oblast:

$$
D=\{(x,y): 0 \le x \le 0.5,\ 0 \le y \le x^2\}
$$

![](../../Assets/Pasted%20image%2020260603183711.png)

platí:

$$
\iint_D (x+y)\,dA =
\int_0^{0.5}\int_0^{x^2} (x+y)\,dy\,dx
$$

![](../../Assets/Pasted%20image%2020260603183715.png)

Tags: NI-SPOL-04 NI-MPI
<!--ID: 1780505845063-->
END

---

START
NI-SZZ

Popiš Darbouxovu konstrukci integrálu funkce dvou proměnných.

Back:

Pro funkci $f(x,y)$ na obdélníku rozdělíme oblast na menší podobdélníky.

Na každém podobdélníku vezmeme:

- infimum funkce pro dolní součet,
- supremum funkce pro horní součet.

Dolní Darbouxův integrál je supremum všech dolních součtů, horní Darbouxův integrál je infimum všech horních součtů.

Funkce je Darbouxovsky integrovatelná, pokud se dolní a horní integrál rovnají.

[PLACEHOLDER: vložit obrázek Darbouxovy konstrukce]![](../../Assets/Pasted%20image%2020260603183724.png)
Tags: NI-SPOL-04 NI-MPI
<!--ID: 1780505845065-->
END

---

START
NI-SZZ

Spočítej integrál funkce $xy^2$ nad obdélníkem $[0,1]\times[1,2]$.

Back:

$$
\int_0^1\int_1^2 xy^2\,dy\,dx
$$

Nejprve vnitřní integrál:

$$
\int_1^2 xy^2\,dy
= x\left[\frac{y^3}{3}\right]_1^2
= x\cdot \frac{8-1}{3}
= \frac{7x}{3}
$$

Potom:

$$
\int_0^1 \frac{7x}{3}\,dx
= \frac{7}{3}\left[\frac{x^2}{2}\right]_0^1
= \frac{7}{6}
$$

Tags: NI-SPOL-04 NI-MPI
<!--ID: 1780505845068-->
END

---

## NI-SPOL-06 NI-VSM

START
NI-SZZ

Popiš jednovýběrový test střední hodnoty normálního rozdělení při známém rozptylu.

Back:

![](../../Assets/Pasted%20image%2020260603183751.png)
![](../../Assets/Pasted%20image%2020260603183800.png)

Tags: NI-SPOL-06 NI-VSM
<!--ID: 1780505845071-->
END

---

START
NI-SZZ

Co je test dobré shody?

Back:

Test dobré shody ověřuje, zda pozorovaná četnost dat odpovídá očekávanému teoretickému rozdělení.

![](../../Assets/Pasted%20image%2020260603183807.png)

Tags: NI-SPOL-06 NI-VSM
<!--ID: 1780505845074-->
END

---

## NI-SPOL-07 NI-VSM

START
NI-SZZ

Definuj entropii diskrétní náhodné veličiny.

Back:

Pro diskrétní náhodnou veličinu $X$ s hodnotami $x_i$ a pravděpodobnostmi $p_i=P(X=x_i)$ je entropie:

$$
H(X)=-\sum_i p_i \log_2 p_i
$$

Entropie měří průměrnou neurčitost nebo průměrné množství informace ve výsledku náhodné veličiny.

Tags: NI-SPOL-07 NI-VSM
<!--ID: 1780505845077-->
END

---

START
NI-SZZ

Jaké jsou základní vlastnosti entropie?

Back:

- $H(X)\ge 0$.
- $H(X)=0$, pokud je výsledek jistý.
- Entropie je maximální pro rovnoměrné rozdělení.
- Pro $n$ stejně pravděpodobných možností platí:

$$
H(X)=\log_2 n
$$

- Entropie vyjadřuje minimální průměrný počet bitů potřebných k zakódování výsledku.

Tags: NI-SPOL-07 NI-VSM
<!--ID: 1780505845079-->
END

---

START
NI-SZZ

Jaký je vztah entropie k teorii kódování?

Back:

Entropie udává dolní mez průměrné délky bezeztrátového kódu.

Pro zdroj se symboly s pravděpodobnostmi $p_i$ nelze v průměru kódovat lépe než přibližně:

$$
H(X)
$$

bitů na symbol.

Efektivní kódy přiřazují kratší kódová slova častějším symbolům a delší kódová slova méně častým symbolům. Příklady jsou Huffmanovo kódování a aritmetické kódování.

Tags: NI-SPOL-07 NI-VSM
<!--ID: 1780505845082-->
END

---

## NI-SPOL-08 NI-VSM

START
NI-SZZ

Definuj stacionární rozdělení Markovského řetězce a popiš, jak se najde.

Back:

![](../../Assets/Pasted%20image%2020260603183839.png)

**Výpočet**: vyřešíme lineární soustavu rovnic danou rovnicí $\pi P=\pi$ spolu s normalizační podmínkou.

Tags: NI-SPOL-08 NI-VSM
<!--ID: 1780505845085-->
END

---

START
NI-SZZ

Jak se u absorbujícího Markovského řetězce najde průměrný čas do absorpce?

Back:

Po uspořádání stavů rozdělíme matici přechodu na bloky:

$$
P=
\begin{pmatrix}
T & R \\
0 & I
\end{pmatrix}
$$

kde $T$ popisuje přechody mezi transientními stavy.

Fundamentální matice:

$$
N=(I-T)^{-1}
$$

Prvek $N_{ij}$ je střední počet návštěv stavu $j$ při startu ze stavu $i$.

Průměrný čas do absorpce ze stavu $i$ získáme součtem $i$-tého řádku matice $N$.

Tags: NI-SPOL-08 NI-VSM
<!--ID: 1780505845088-->
END

---

START
NI-SZZ

Jak se u absorbujícího Markovského řetězce najdou pravděpodobnosti absorpce?

Back:

Použijeme fundamentální matici:

$$
N=(I-T)^{-1}
$$

a blok $R$, který popisuje přechody z transientních stavů do absorbujících stavů.

Matice pravděpodobností absorpce je:

$$
U=N R
$$

Prvek $U_{ij}$ je pravděpodobnost, že při startu z transientního stavu $i$ bude řetězec pohlcen absorbujícím stavem $j$.


![](../../Assets/Pasted%20image%2020260603183857.png)
![](../../Assets/Pasted%20image%2020260603183902.png)
![](../../Assets/Pasted%20image%2020260603183908.png)


Tags: NI-SPOL-08 NI-VSM
<!--ID: 1780505845091-->
END

---

START
NI-SZZ

Jaké jsou základní limitní vlastnosti Markovských řetězců s diskrétním časem?

Back:

Limitní chování závisí na třídách stavů, periodicitě a rekurenci.

Pro konečný, ireducibilní a aperiodický řetězec platí:

$$
P^n_{ij} \to \pi_j
$$

kde $\pi$ je jediné stacionární rozdělení.

To znamená, že dlouhodobé rozdělení stavů nezávisí na počátečním stavu.

![](../../Assets/Pasted%20image%2020260603184109.png)

Tags: NI-SPOL-08 NI-VSM
<!--ID: 1780505845093-->
END

---

## NI-SPOL-09 NI-VSM

START
NI-SZZ

Jak souvisí Markovské řetězce s diskrétním časem a Poissonův proces?

Back:

Markovský řetězec s diskrétním časem sleduje posloupnost stavů v diskrétních krocích.

Poissonův proces je spojitý časový proces počítající počet událostí v čase. Má nezávislé přírůstky a počet událostí v intervalu délky $t$ má rozdělení:

$$
P(N(t)=k)=e^{-\lambda t}\frac{(\lambda t)^k}{k!}
$$

Souvislost: spojité Markovské procesy lze často popsat pomocí skoků v náhodných časech, kde časy mezi událostmi mají exponenciální rozdělení a počty událostí souvisejí s Poissonovým procesem.


![](../../Assets/Pasted%20image%2020260603184033.png)

![](../../Assets/Pasted%20image%2020260603184038.png)


Tags: NI-SPOL-09 NI-VSM
<!--ID: 1780505845096-->
END

---

## NI-SPOL-10 NI-VSM

START
NI-SZZ

Jak souvisí systémy hromadné obsluhy s Markovskými řetězci?

Back:

Systémy hromadné obsluhy lze modelovat jako Markovské řetězce se spojitým časem, pokud jsou doby mezi příchody a doby obsluhy exponenciálně rozdělené a navzájem nezávislé.

Typicky jde o procesy zrodu a zániku:

- zrod odpovídá příchodu zákazníka,
- zánik odpovídá dokončení obsluhy.

Stavem bývá počet zákazníků v systému.

Tags: NI-SPOL-10 NI-VSM
<!--ID: 1780505845099-->
END

---

## NI-SPOL-16 NI-PDP


START
NI-SZZ

Popiš algoritmus `ParAdd` jednoduché paralelní redukce

(Tohle bylo u státnic)

Back:

![](../../Assets/Pasted%20image%2020260605114618.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020260605114626.png)
<!-- ExampleEnd -->


Tags: NI-SPOL-16 NI-PDP
<!--ID: 1780661518474-->
END

---


START
NI-SZZ

Popiš jaké jsou u algoritmu `ParAdd`:
- $SL(n)= ?$
- $SU(n)= ?$
- $T(n,n)= ?$
- $S(n,n)= ?$
- $C(n,n)= ?$
- $E(n,n)= ?$

![](../../Assets/Pasted%20image%2020260605114618.png)

Back:

![](../../Assets/Pasted%20image%2020260605114831.png)

Tags: NI-SPOL-16 NI-PDP
<!--ID: 1780661518477-->
END

---


START
NI-SZZ

Je algoritmus `ParAdd` cenově optimální?

Back:

Ne! je tam velmi **malé využití procesorů** a počet využitých procesorů klesá **exponenciálně rychle**.

Takže to je špatně škálovatelné

Tags: NI-SPOL-16 NI-PDP
<!--ID: 1780661518480-->
END

---

## NI-SPOL-17 NI-PDP

START
NI-SZZ

Jaký je rozdíl mezi atomic, critical a mutexem?

(na tohle se ptá Langr u státnic)

Back:

- `atomic` - chrání jednu sdílenou proměnnou
- `critical` - chrání blok kódu (používá se u složitějších operací)
- `mutex` - podobný jako `critical` , ale vytvoříme vlastní **objekt** (zámek), který můžeme zamknout nebo odemknout v různých sekcích kódu. Tzn. umožňuje nám to ještě větší kontrolu než critical, protože zámek můžeme předávat funkcím a zamykat/odemykat na různých sekcích kódu

Tags: NI-SPOL-17 NI-PDP
<!--ID: 1780661518483-->
END

---
