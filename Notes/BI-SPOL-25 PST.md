---
created: 2024-05-30T20:00:49
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-25 PST

> BI-SPOL-25 (PST)
> Pravidla pro výpočty pravděpodobností, Bayesův vzorec. Náhodné veličiny, příklady rozdělení, distribuční funkce, hustota, momenty. Nezávislost náhodných jevů a veličin. Centrální limitní věta, zákony velkých čísel


### TODO
- Zde by možná stálo za to přidat ještě rozptyly a střední hodnoty jednotlivých rozdělení
- Ještě možná přidat podmíněnou pravděpodobnost u spojitých veličin

### Základy


START
BI-SZZ

Jaká je klasická definice pravděpodobnosti?

Back:

$$P(A) = \frac{\rm{počet~příznivých ~výsledků}}{\rm{počet~všech~možných~ výsledků}}$$
<!--ID: 1717097564284-->
END

---


START
BI-SZZ

Definice: **Pravděpodobnostní prostor** (experiment)

Back:

$$\mathcal{E} = (\Omega, \mathcal{F}, P)$$

- $\Omega$ je prostor elementárních jevů $\omega$
- $\mathcal{F}$ je tzv. $\sigma$-algebra
- $P$ je pravděpodobnostní míra
<!--ID: 1717097564286-->
END

---


START
BI-SZZ

Co je **prostor elementárních jevů $\Omega$**?

Back:

jevy musí být vzájemně exkluzivní a v souhrnu vyčerpávající
- **náhodný jev** = podmnožina $A ⊂ Ω$, které potřebujeme přiřadit pravděpodobnost

_Formální definice:_
![](../Assets/Pasted%20image%2020230927110116.png)

_Např._
![](../Assets/Pasted%20image%2020230927114621.png)
<!--ID: 1717097564289-->
END

---


START
BI-SZZ

Co je $σ$-algebra $\mathcal{F}$?

Back:

![](../Assets/Pasted%20image%2020230927110557.png)

Tags: optional
<!--ID: 1717097564292-->
END

---


START
BI-SZZ

Definice: **pravděpodobnostní míra**

Back:

![](../Assets/Pasted%20image%2020230927111550.png)
<!--ID: 1717097564295-->
END

---

#### Operace s pravděpodobnostmi


START
BI-SZZ

$$P(A ∪ B) = \ ?$$

jestliže $A$ a $B$ jsou vzájemně disjunktní

Back:

$$P(A ∪ B) = P(A) + P(B)​$$
<!--ID: 1717097564297-->
END

---


START
BI-SZZ

$$P(A^c) = \ ?$$

$c$ je doplněk

Back:

$P(A^c) = 1 − P(A)$
<!--ID: 1717097564300-->
END

---


START
BI-SZZ

$$P(A ∪ B) = \ ?$$

Back:

$P(A ∪ B) = P(A) + P(B) − P(A ∩ B)$
<!--ID: 1717097564303-->
END

---


START
BI-SZZ

Pokud $A ⊂ B$, tak $P(A) \ ? \ P(B)$

Back:

$$P(A) ≤  P(B)$$
<!--ID: 1717097564307-->
END

---


#### Podmíněná pravděpodobnost


START
BI-SZZ

Definice: **podmíněná pravděpodobnost**

Back:

Podmíněnou pravděpodobnost jevu $A$ za podmínky, že nastal jev $B$, definujeme jako:
$$P (A|B) = \frac{P(A\cap B)}{P(B)}$$
<!--ID: 1717097564309-->
END

---


START
BI-SZZ

Definice: **úplný rozklad pravděpodobnosti**

Back:

$$P(A) = \sum^n_{i=1}P(A|B_i)P(B_i)$$

![](../Assets/Pasted%20image%2020240530200331.png)
![](../Assets/Pasted%20image%2020240530200337.png)
_Příklad:_
![](../Assets/Pasted%20image%2020240530200346.png)
<!--ID: 1717097564312-->
END

---


START
BI-SZZ

Definice: **Bayesova věta**

Back:

$$P(B_j|A) = \frac{P(A|B_j)P(B_j)}{\sum^n_{i=1}P(A|B_i)P(B_i)}$$

![](../Assets/Pasted%20image%2020240530200454.png)

_Příklad_:
![](../Assets/Pasted%20image%2020240530200508.png)
<!--ID: 1717097564315-->
END

---

#### Náhodná veličina

START
BI-SZZ

Definice: **Náhodná veličina**

Back:

Náhodná veličina $X$ na pravděpodobnostním prostoru $(Ω, \mathcal{F}, P)$ je funkce, která každému výsledku experimentu $ω ∈ Ω$ přiřadí hodnotu $X(ω) ∈ \mathbb{R}$ a pro kterou platí podmínka měřitelnosti:
$$\{X ≤ x\} ∈ \mathcal{F}, ∀x ∈ \mathbb{R}$$

Podmínka měřitelnosti říká, že $\{X ≤ x\}$ je náhodný jev, a proto jsme schopni počítat pravděpodobnosti $P(X ≤ x), P(X = x), \dots$
<!--ID: 1717097564318-->
END

---

##### Distribuční funkce

START
BI-SZZ

Definice: **Distribuční funkce**

Back:

jednoznačně určuje pravděpodobnostní rozdělení náhodné veličiny
$$F_X (x) = P(X ≤ x)$$
<!--ID: 1717097564320-->
END

---


START
BI-SZZ

Jaké jsou vlastnosti **Distribuční funkce**? (3)

Back:

- je neklesající
- je spojitá zprava
- “začíná v 0 a končí v 1”:
$$\lim_{x\to -\infty}{F(x)} = 0 ~\wedge \lim_{x\to \infty}{F(x)}= 1$$
<!--ID: 1717097564323-->
END

---

##### Diskrétní náhodná veličina


START
BI-SZZ

Definice: **diskrétní náhodná veličina**

Back:

Náhodná veličina $X$ se nazývá diskrétní, jestliže nabývá pouze hodnot z nějaké nejvýše spočetné množiny.

- **Pravděpodobnosti možných hodnot** náhodné veličiny $X$ jsou $P(X = x_k)$
- Pravděpodobnost $P(X = x)$ lze chápat jako funkci $x$, kterou pak nazýváme **pravděpodobnostní funkcí** nebo **diskrétní hustotou** náhodné veličiny $X$.
<!--ID: 1717097564326-->
END

---


START
BI-SZZ

Jaký tvar má distribuční funkce u **diskrétní náhodné veličiny**?

Back:

$$F_X (x) = P(X ≤ x) = \sum_{k: x_k ≤x}P(X = x_k)$$
<!--ID: 1717097564329-->
END

---


START
BI-SZZ

Definice: **Normalizační podmínka** (u diskrétní náhodné veličiny)

Back:

$$\sum_{\forall x_k}{P(X = x_k}) = 1$$

Jinými slovy: pravděpodobnosti hodnot se musí nasčítat na 1.
<!--ID: 1717097564331-->
END

---

###### rozdělení

START
BI-SZZ

Jaké jsou 4 **diskrétní rozdělení**?

Back:

- Bernoulliho
- Binomické
- Geometrické
- Poissonovo
<!--ID: 1717097564334-->
END

---


START
BI-SZZ

Definice: **Bernoulliho rozdělení**

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025110923.png)

**Předpis**: $X \sim Be(p)$
**Parametry**:
- $p \in [0,1]$ = jaká je pravděpodobnost úspěchu
**Definice**:
- $P(X=1) = p$
- $P(X=0) = 1-p$

_Co mi například říká Bernoulliho rozdělení_
Dělám několik pokusů (např. 20x hodím mincí), Bernoulliho rozdělení mi říká, jaká je pravděpodobnost, že **jeden pokus** skončí "úspěchem" a "neúspěchem".
- Parametr $p$ mi typicky říká, jaká je šance úspěchu, 
- $0$ je typicky neúspěch
- $1$ úspěch

![](../Assets/Pasted%20image%2020231025115857.png)
<!--ID: 1717097564337-->
END

---


START
BI-SZZ

Definice: **Binomické rozdělení**

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025111559.png)
**Předpis**: $X \sim Binom(n,p)$
**Parametry**:
- $n$ - počet pokusů
- $p \in [0,1]$ = pravděpodobnost úspěchu u každého pokusu
**Definice**:
- $P(X=k) = {n \choose k}p^k(1-p)^{n-k}$

_Co mi prakticky říká_
Dělám několik pokusů (např. 20x hodím mincí). Binomické rozdělení mi říká, jaké jsou pravděpodobnosti, že právě $k$ pokusů dopadlo úspěšně.

![](../Assets/Pasted%20image%2020231025115806.png)
<!--ID: 1717097564339-->
END

---


START
BI-SZZ

Definice: **Poissonovo rozdělení** (Poissonova aproximace)

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025114442.png)

**Předpis**: $X \sim Poisson(\lambda)$
**Parametry**:
- $\lambda$ - počet pokusů
**Definice**:
- $P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}$

Říká nám **počet událostí** během určitého intervalu (určité doby).

Např. když mi za jeden den přijde _průměrně_ $\lambda = 5$ zpráv, tak jaká je šance, že mi v jeden den přijde právě $k$ zpráv.
<!--ID: 1717097564342-->
END

---


START
BI-SZZ

Jak můžu Poissonovým rozdělením odhadnout Binomické rozdělení?

Back:

Tím že za lambdu dosadím střední hodnotu toho binomického rozdělení:

$$\lambda = EX = n\cdot p$$
<!--ID: 1717155692621-->
END

---


START
BI-SZZ

Definice: **Geometrické rozdělení**

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025115445.png)

**Předpis**: $X \sim Geom(p)$
**Parametry**:
- $p \in (0,1)$ - pravděpodobnost úspěchu pokusu
**Definice**:
- $P(X=k) = p(1-p)^{k-1}$

Říká nám pravděpodobnost, že $k$ tý pokus byl **první úspěšný**.
![](../Assets/Pasted%20image%2020231025115735.png)
<!--ID: 1717097564345-->
END

---

##### Spojitá náhodá veličina


START
BI-SZZ

Definice: **Spojitá náhodná veličina** (+ hustota pravděpodobnosti)

Back:

Náhodná veličina $X$ se nazývá (absolutně) spojitá, jestliže existuje nezáporná funkce $f_X$ taková, že pro každé $x ∈ \mathbb{R}$ můžeme distribuční funkci $F_X$ vyjádřit jako
$$F_X(x) = \int^x_{-\infty}{f_X(t)\,dt}$$

Funkci $f_X$ v takovém případě nazýváme **hustotou pravděpodobnosti** náhodné veličiny $X$.

Distribuční funkce spojité náhodné veličiny je spojitá.
<!--ID: 1717097564347-->
END

---


START
BI-SZZ

Jaké jsou vlastnosti **spojité náhodné veličiny**?

Back:

- normalizační podmínka: $\int^{+\infty}_{-\infty}{f_X(x)\,dx} = 1$
- $P(X = x) = 0$ pro všechna $x ∈ \mathbb{R}$
- $P(a < X ≤ b) = \int^{b}_{a}{f_X(x)\,dx}$
<!--ID: 1717097564350-->
END

---

###### rozdělení

START
BI-SZZ

Jaké jsou 3 **spojité rozdělení**?

Back:

- Rovnoměrné
- Exponenciální
- Normální (Gaussovo)
<!--ID: 1717097564353-->
END

---


START
BI-SZZ

Definice: rovnoměrné rozdělení

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025120243.png)
**Předpis**: $X \sim Unif(a,b)$
**Parametry**:
- $a$ - dolní mez rozdělení
- $b$ - horní mez rozdělení
**Definice**:
- $f_X(x)=\frac{1}{b-1} \quad x \in (a,b)$

![](../Assets/Pasted%20image%2020231025120339.png)
<!--ID: 1717097564355-->
END

---


START
BI-SZZ

Definice: **Exponenciální rozdělení**

předpis, parametry, jak je definováno

Back:

![](../Assets/Pasted%20image%2020231025121008.png)

**Předpis**: $X \sim Exp(\lambda)$
**Parametry**:
- $\lambda > 0$
**Definice**:
- $f_X(x) = \lambda e^{-\lambda x} \quad x \in [0, \infty)$

Graf:
![](../Assets/Pasted%20image%2020231025121038.png)
<!--ID: 1717097564358-->
END

---


START
BI-SZZ

Definice: **Normální (Gaussovo) rozdělení**

předpis, parametry, jak je definováno

Back:

Pozn. Tu $f(x)$ po nás u zkoušky nechtěli nazpaměť, takže to snad u státnic taky nebudou chtít :)

![](../Assets/Pasted%20image%2020231025122822.png)

**Předpis**: $X \sim N(\mu, \sigma^2)$
**Parametry**:
- $\mu$ - střední hodnota
- $\sigma^2$ - rozptyl
**Definice** - viz obrázek

![](../Assets/Pasted%20image%2020231025122933.png)
<!--ID: 1717097564361-->
END

---


START
BI-SZZ

Definice: **Standardizace normálního rozdělení**

Back:

![](../Assets/Pasted%20image%2020231101110941.png)

![](../Assets/Pasted%20image%2020240530202330.png)
<!--ID: 1717097564364-->
END

---

##### Momenty


START
BI-SZZ

Definice: **k-tý moment** náhodné veličiny pro **diskrétní** náhodnou veličinu $X$

Back:

$$μ_k = E(X_k) = \sum_{\forall x_i}{x_i^kP(X = x_i)}$$
<!--ID: 1717097564366-->
END

---


START
BI-SZZ

Definice: **k-tý moment** náhodné veličiny pro **spojitou** náhodnou veličinu $X$

Back:

$$μ_k = E(X_k) = \int^\infty_{-\infty}x^kf_X(x)\,dx$$
<!--ID: 1717097564369-->
END

---


START
BI-SZZ

Co je první moment náhodné veličiny?

Back:

$μ_1 = E X$ je **střední hodnota** veličiny $X$
<!--ID: 1717097564372-->
END

---



START
BI-SZZ

Definice: **k-tý centrální moment** náhodné veličiny pro **diskrétní** náhodnou veličinu $X$

Back:

$$\sigma_k = E(X - EX)^k = \sum_{\forall x_i}{(x_i-\mu_1)^kP(X = x_i)}$$
<!--ID: 1717097564374-->
END

---

START
BI-SZZ

Definice: **k-tý centrální moment** náhodné veličiny pro **spojitou** náhodnou veličinu $X$

Back:

$$\sigma_k = E(X - EX)^k = \int^\infty_{-\infty}(x-\mu_1)^kf_X(x)\,dx$$
<!--ID: 1717097564377-->
END

---


START
BI-SZZ

Co je druhý centrální moment náhodné veličiny?

Back:

$σ_2 = E(X − E X)^2$ nazýváme **rozptyl** (variance) veličiny $X$ a značíme $var(X)$
<!--ID: 1717097564379-->
END

---


START
BI-SZZ

Co je první centrální moment náhodné veličiny?

Back:

$σ = \sqrt{var(X)}$ nazýváme **směrodatnou odchylkou**
<!--ID: 1717097564382-->
END

---

##### lineární transformace


START
BI-SZZ

Čemu je rovno: 

$$E(aX + b) = \ ?$$

Back:

$$E(aX + b) = a E X + b$$
<!--ID: 1717097564385-->
END

---


START
BI-SZZ

Čemu je rovno:

$$var(aX + b) = \ ?$$

Back:

$$var(aX + b) = a^2 var(X)$$
<!--ID: 1717097564387-->
END

---

#### Nezávislost


START
BI-SZZ

Definice: **Nezávislé jevy**

Back:

Náhodné jevy $A$ a $B$ se nazývají nezávislé, pokud $P(A ∩ B) = P(A) P(B)$
<!--ID: 1717097564390-->
END

---


START
BI-SZZ

Definice: **nezávislé veličiny**

Back:

Náhodné veličiny $X$ a $Y$ nazýváme **nezávislé,** pokud pro všechna $x, y ∈ \mathbb{R}$ jsou jevy $\{X ≤ x\}$ a $\{Y ≤ y\}$ nezávislé.
<!--ID: 1717097564393-->
END

---


START
BI-SZZ

Definice: **nezávislost diskrétních veličin** (kdy jsou diskrétní veličiny nezávislé?)

Back:

Diskrétní náhodné veličiny $X$ a $Y$ jsou **nezávislé,** pokud pro všechna $x, y ∈ \mathbb{R}$ jsou jevy $\{X = x\}$ a $\{Y = y\}$ nezávislé. Tedy pokud pro všechna $x, y ∈ \mathbb{R}$ platí rovnost

$$P(X = x ∩ Y = y) = P(X = x) \cdot P(Y = y)$$
<!--ID: 1717097564395-->
END

---


START
BI-SZZ

Definice: **nezávislost spojitých veličin** (kdy jsou spojité veličiny nezávislé?)

Back:

- Spojité náhodné veličiny $X$ a $Y$ jsou nezávislé právě tehdy, když pro všechna $x, y ∈ \mathbb{R}$ platí rovnost
$$f_{X,Y} (x, y) = f_X (x) \cdot f_Y (y)$$
<!--ID: 1717097564398-->
END

---

### Limitní věty


START
BI-SZZ

Jak se **spočte** a čemu se **rovná** střední hodnota součtu $S_n$?

$$S_n = \sum_{i=1}^nX_i$$
$$E \bar{X_n} = μ,\kern{6pt}var \bar{X_n} = \frac{σ^2}{n}$$

Back:

$$ES_n = E\sum^n_{i=1}{X_i} = \sum^n_{i=1}{EX_i} = \sum^n_{i=1}{\mu} = n\mu$$
<!--ID: 1717097564401-->
END

---


START
BI-SZZ

Jak se **spočte** a čemu se **rovná** rozptyl součtu $S_n$?

$$S_n = \sum_{i=1}^nX_i$$
$$E \bar{X_n} = μ,\kern{6pt}var \bar{X_n} = \frac{σ^2}{n}$$


Back:

$$var S_n = var\sum^n_{i=1}{X_i} = \sum^n_{i=1}{varX_i} = \sum^n_{i=1}{\sigma^2} = n\sigma^2$$
<!--ID: 1717097564404-->
END

---


START
BI-SZZ

Jak se **spočte** a čemu se **rovná** střední hodnota průměru $\bar{X_n}$?

![](../Assets/Pasted%20image%2020231117172538.png)

Back:

![](../Assets/Pasted%20image%2020231117172525.png)
<!--ID: 1717155692628-->
END

---


START
BI-SZZ

Jak se **spočte** a čemu se **rovná** rozptyl průměru $\bar{X_n}$?

![](../Assets/Pasted%20image%2020231117172538%201.png)

Back:

![](../Assets/Pasted%20image%2020231117172601.png)
<!--ID: 1717155692632-->
END

---

#### Slabý zákon velkých čísel

START
BI-SZZ

Definice: **Slabý zákon velkých čísel**

Back:

![](../Assets/Pasted%20image%2020231117172622.png)

Pozn. i.i.d. znamená, že jsou veličiny **nezávislé** a **mají stejné rozdělení** 
<!--ID: 1717097564406-->
END

---

#### Silný zákon velkých čísel

START
BI-SZZ

Definice: **Silný zákon velkých čísel**

Back:

![](../Assets/Pasted%20image%2020231117173424.png)

Pozn. i.i.d. znamená, že jsou veličiny **nezávislé** a **mají stejné rozdělení** 
<!--ID: 1717097564409-->
END

---

#### CLV

START
BI-SZZ

Definice: **konvergence v distribuci**

Back:

![](../Assets/Pasted%20image%2020231117175038.png)
<!--ID: 1717097564412-->
END

---


START
BI-SZZ

Definice: **Centrální limitní věta**

Back:

![](../Assets/Pasted%20image%2020231117175056.png)

Jinými slovy: průměr resp. součet konverguje po standardizaci k normálnímu rozdělení
<!--ID: 1717097564414-->
END

---


START
BI-SZZ

Na co je třeba standardizovat $S_n$, když chci využít CLV?

Back:

Na:
$$\frac{{S_n}-n\mu}{\sigma\sqrt{n}}$$
<!--ID: 1717097564417-->
END

---


START
BI-SZZ

Na co je třeba standardizovat $\bar{X_n}$, když chci využít CLV?

Back:

$$\frac{\bar{X_n}-\mu}{\sigma/\sqrt{n}}$$
<!--ID: 1717097564420-->
END

---


START
BI-SZZ

K čemu se prakticky používá CLV?

Back:

umožňuje nám vyjádřit pravděpodobnosti typu $P( \bar{X_n} < x), P( \bar{X_n} > x)$ apod. pomocí distribuční funkce $Φ$ _standardního normálního rozdělení_

![](../Assets/Pasted%20image%2020240530204427.png)
<!--ID: 1717097564422-->
END

---
