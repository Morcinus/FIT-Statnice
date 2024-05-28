---
created: 2024-05-27T17:47:38
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-34 ZMA

> BI-SPOL-34 (ZMA)
> Limita a derivace funkce (definice a vlastnosti, geometrický význam), využití při vyšetřování průběhu funkce

### Limity

START
BI-SZZ

Definice: **Okolí bodu**

Back:

- Nechť $a ∈ R$ a $ε > 0$. Otevřený interval $(a − ε, a + ε)$ nazýváme **$ε$-okolím bodu** a značíme $H_a(ε)$
<!--ID: 1716877593082-->
END

---


START
BI-SZZ

Definice: **pravé/levé okolí bodu**

Back:

- Nechť $a ∈ R$ a $ε > 0$. Polouzavřený interval $\langle a, a + ε)$, resp. $(a − ε, a\rangle$, nazýváme pravým, resp. levým, $ε$-okolím bodu a a značíme ho $H^+_a (ε)$, resp. $H^-_a (ε)$
<!--ID: 1716877593229-->
END

---



START
BI-SZZ

Definice: **limita**

Back:

![](../Assets/Pasted%20image%2020240527175207.png)

_Neformálně řečeno:_
pro libovolně malé okolí hodnoty limity $c$ jsem schopen najít takové okolí kolem bodu $a$, že všechny funkční hodnoty bodů z tohoto okolí spadnou do toho okolí $c$

![](../Assets/Pasted%20image%2020240527175332.png)
<!--ID: 1716877593232-->
END

---


START
BI-SZZ

Definice: **limita v bodě zleva/zprava**

Back:

![](../Assets/Pasted%20image%2020240527175358.png)

Je to prakticky to samý jako normální limita, akorát je tam to okolí $H_a$ levé nebo pravé.

![](../Assets/Pasted%20image%2020240527175417.png)
<!--ID: 1716877593235-->
END

---

### Vlastnosti limity


START
BI-SZZ

Vlastnost limity: Limita $\lim_{x \to a} f(x)$ existuje a je rovna $c ∈ \mathbb{R} \dots$​

Back:

![](../Assets/Pasted%20image%2020240527175655.png)
<!--ID: 1716877593237-->
END

---


START
BI-SZZ

Může být limita $f$ v bodě $a$ různá od funkční hodnoty $f (a)$?

Back:

**Ano**! Příkladem budiž $f (x) :=$ sgn $x^2$, kde $\lim_{x \to 0} f(x) = 1$.
<!--ID: 1716877593240-->
END

---

#### Heine je lesa pán

START
BI-SZZ

Definice: **Heineho věta**

Back:

![](../Assets/Pasted%20image%2020240527180053.png)

Obecně nám Heine ukazuje souvislost mezi limitou funkce a posloupnosti.

_Příklad_
![](../Assets/Pasted%20image%2020240527180133.png)
<!--ID: 1716877593243-->
END

---

#### operace s limitami

START
BI-SZZ

Věta: **sčítání, násobení a dělení limit**

Back:

![](../Assets/Pasted%20image%2020240527180246.png)
<!--ID: 1716877593245-->
END

---

#### limita složené funkce


START
BI-SZZ

Věta: **limita složené funkce**

Back:

![](../Assets/Pasted%20image%2020240527180314.png)
<!--ID: 1716877593248-->
END

---

#### nerovnost limit

START
BI-SZZ

Věta: **nerovnost limit**

Back:

![](../Assets/Pasted%20image%2020240527180413.png)
<!--ID: 1716877593251-->
END

---

#### Limita sevřené funkce (věta o dvou policajtech pro funkce)

START
BI-SZZ

Věta: **limita sevřené funkce**

Back:

![](../Assets/Pasted%20image%2020240527180444.png)
<!--ID: 1716877593253-->
END

---


START
BI-SZZ

Definice: **spojitost funkce** (spojitá, spojitá zprava, spojitá zleva)

Back:

![](../Assets/Pasted%20image%2020240527180522.png)
<!--ID: 1716877593256-->
END

---

### Derivace funkce


START
BI-SZZ

Definice: **Derivace funkce v bodě** (+ diferencovatelná v bodě)

Back:

![](../Assets/Pasted%20image%2020240527181521.png)

_Grafické znázornění (tomu bychom měli taky rozumět!):_
![](../Assets/Pasted%20image%2020240527181513.png)
<!--ID: 1716877593259-->
END

---


START
BI-SZZ

Definice: **Derivace funkce**

Back:

![](../Assets/Pasted%20image%2020240527181601.png)
<!--ID: 1716877593261-->
END

---

#### Tečna grafu


START
BI-SZZ

Definice: **tečna funkce $f$ v bodě $a$**

Back:

![](../Assets/Pasted%20image%2020240527181639.png)

_Grafické znázornění:_
V prvním případě svírá tečna grafu funkce $f$ v bodě $a$ úhel $\frac{π}{2}$ s osou $x$, ve druhém případě svírá s osou $x$ úhel $α$ splňující $\text{tg} \ α = f^′(a)$
![](../Assets/Pasted%20image%2020240527181708.png)
<!--ID: 1716877593264-->
END

---

#### vlastnosti derivace


START
BI-SZZ

Věta: **diferencovatelnost a spojitost** funkce v bodě

Back:

![](../Assets/Pasted%20image%2020240527181915.png)
<!--ID: 1716877593266-->
END

---


START
BI-SZZ

Věta: **derivace součtu, součinu a podílu**

Back:

![](../Assets/Pasted%20image%2020240527181950.png)
<!--ID: 1716877593269-->
END

---


START
BI-SZZ

Věta: **derivace složené funkce**

Back:

![](../Assets/Pasted%20image%2020240527182009.png)
<!--ID: 1716877593272-->
END

---

#### derivace elementárních funkcí

START
BI-SZZ

Jaká je derivace $x^n$?

Back:

![](../Assets/Pasted%20image%2020240527182441.png)
<!--ID: 1716877593275-->
END

---

START
BI-SZZ

Jaká je derivace $e^x$?

Back:

![](../Assets/Pasted%20image%2020240527182448.png)
<!--ID: 1716877593277-->
END

---

START
BI-SZZ

Jaká je derivace $a^x$?

Back:

![](../Assets/Pasted%20image%2020240527182455.png)
<!--ID: 1716877593280-->
END

---

START
BI-SZZ

Jaká je derivace $ln(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182500.png)
<!--ID: 1716877593283-->
END

---

START
BI-SZZ

Jaká je derivace $\sin(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182505.png)
<!--ID: 1716877593285-->
END

---

START
BI-SZZ

Jaká je derivace $\cos(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182510.png)
<!--ID: 1716877593288-->
END

---

START
BI-SZZ

Jaká je derivace $\text{tg}(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182515.png)
<!--ID: 1716877593291-->
END

---

START
BI-SZZ

Jaká je derivace $\text{cotg}(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182520.png)
<!--ID: 1716877593294-->
END

---


START
BI-SZZ

Jaká je derivace $\arcsin(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182525.png)
<!--ID: 1716877593296-->
END

---

START
BI-SZZ

Jaká je derivace $\arccos(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182533.png)
<!--ID: 1716877593299-->
END

---

START
BI-SZZ

Jaká je derivace $\text{arctg}(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182541.png)
<!--ID: 1716877593302-->
END

---

START
BI-SZZ

Jaká je derivace $\text{arccotg}(x)$?

Back:

![](../Assets/Pasted%20image%2020240527182547.png)
<!--ID: 1716877593304-->
END

---

### vyšetřování průběhu funkce

#### supremum a infimum


START
BI-SZZ

Definice: **infimum** (+ kdy je infimum $+\infty$ a $-\infty$)

Back:

![](../Assets/Pasted%20image%2020240527182631.png)

Pozn. infimum může, ale nemusí být nejmenším prvkem $A$. Pokud množina nemá nejmenší prvek (např. protože je interval otevřený), tak infimum není nejmenším prvkem.
<!--ID: 1716877593307-->
END

---



START
BI-SZZ

Definice: **supremum** (+ kdy je supremum $+\infty$ a $-\infty$)

Back:

![](../Assets/Pasted%20image%2020240527182649.png)
<!--ID: 1716877593310-->
END

---

#### extrémy funkce

START
BI-SZZ

Definice: **lokální maximum**

Back:

**lokální maximum** funkce $f$ v bodě $a ∈ D_f$:
$$(\exists H_a)(H_a ⊂ D_f)(\forall x \in H_a)(f(x) \leq f(a))$$


_(Kompletní definice ze script):_
![](../Assets/Pasted%20image%2020240527182909.png)

basically prostě vždycky stačí, aby to bylo minimum/maximum na nějakém okolí — ať už libovolně malém
<!--ID: 1716877593312-->
END

---


START
BI-SZZ

Definice: **lokální minimum**

Back:

**lokální minimum** funkce $f$ v bodě $a ∈ D_f$:
$$(\exists H_a)(H_a ⊂ D_f)(\forall x \in H_a)(f(x) \geq f(a))$$

_(Kompletní definice ze script):_
![](../Assets/Pasted%20image%2020240527182909.png)

basically prostě vždycky stačí, aby to bylo minimum/maximum na nějakém okolí — ať už libovolně malém
<!--ID: 1716877593315-->
END

---


START
BI-SZZ

Definice: **ostré lokální maximum**

Back:

**ostré lokální maximum** funkce $f$ v bodě $a ∈ D_f$:
$$(\exists H_a)(H_a ⊂ D_f)(\forall x \in H_a \smallsetminus \{a\})(f(x) < f(a))$$

_(Kompletní definice ze script):_
![](../Assets/Pasted%20image%2020240527182909.png)

basically prostě vždycky stačí, aby to bylo minimum/maximum na nějakém okolí — ať už libovolně malém
<!--ID: 1716877593318-->
END

---


START
BI-SZZ

Definice: **ostré lokální minimum**

Back:

**ostré lokální minimum** funkce $f$ v bodě $a ∈ D_f$:
$$(\exists H_a)(H_a ⊂ D_f)(\forall x \in H_a \smallsetminus \{a\})(f(x) > f(a))$$

_(Kompletní definice ze script):_
![](../Assets/Pasted%20image%2020240527182909.png)

basically prostě vždycky stačí, aby to bylo minimum/maximum na nějakém okolí — ať už libovolně malém
<!--ID: 1716877593321-->
END

---


START
BI-SZZ

Definice: **nultá podmínka existence lokálního extrému**

Back:

![](../Assets/Pasted%20image%2020240527183454.png)

_Poznámka:_
Tato věta udává pouze nutnou podmínku pro existenci lokálního extrému, viz např. funkce $x^3$, která má v bodě $0$ nulovou derivaci, ale nikoliv lokální extrém → hovoříme tedy pouze o bodu podezřelém z extrému
<!--ID: 1716877593323-->
END

---


START
BI-SZZ

Definice: **Rollerova věta**

Back:

![](../Assets/Pasted%20image%2020240527183540.png)
<!--ID: 1716877593326-->
END

---


START
BI-SZZ

Definice: **Lagrangeova věta**

Back:

![](../Assets/Pasted%20image%2020240527183554.png)

_Fyzikální analogie_
Pokud jsme se v daném časovém intervalu pohybovali průměrnou rychlostí $v$, pak musí existovat časový okamžik, v němž naše okamžitá rychlost byla rovna $v$
<!--ID: 1716877593329-->
END

---

#### monotonie


START
BI-SZZ

Definice: **vnitřek intervalu**

Back:

![](../Assets/Pasted%20image%2020240527183739.png)
<!--ID: 1716877593331-->
END

---


START
BI-SZZ

Definice: **rousoucí, klesající, ostře roustoucí, ostře klesající, konstantní funkce**

Back:

![](../Assets/Pasted%20image%2020240527183809.png)
<!--ID: 1716877593334-->
END

---

#### konvexnost konkávnost


START
BI-SZZ

Definice: **konvexní/konkávní funkce**

Back:

![](../Assets/Pasted%20image%2020240527183845.png)

![](../Assets/Pasted%20image%2020240527183910.png)
<!--ID: 1716877593337-->
END

---


START
BI-SZZ

Definice: **ryze konvexní/ryze konkávní funkce**

Back:

![](../Assets/Pasted%20image%2020240527183901.png)

![](../Assets/Pasted%20image%2020240527183912.png)
<!--ID: 1716877593340-->
END

---


START
BI-SZZ

Věta: **kdy je funkce konvexní a ryze konvexní na intervalu**? (na základě derivace)

Back:

![](../Assets/Pasted%20image%2020240527184002.png)
<!--ID: 1716877593342-->
END

---


START
BI-SZZ

Definice: **konvexní/konkávní $f$ v bodě**

Back:

![](../Assets/Pasted%20image%2020240527184050.png)
<!--ID: 1716877593345-->
END

---


START
BI-SZZ

Věta: **konvexnost na intervalu $\Rightarrow$ a konvexnost v každém bodě**

Back:

![](../Assets/Pasted%20image%2020240527184117.png)
<!--ID: 1716877593348-->
END

---


START
BI-SZZ

Důsledek: **konvexnost a existence minima**, **konkávnost a existence maxima**

Back:

![](../Assets/Pasted%20image%2020240527184203.png)
<!--ID: 1716877593350-->
END

---


START
BI-SZZ

Definice: **inflexní bod**

Back:

![](../Assets/Pasted%20image%2020240527184215.png)
<!--ID: 1716877593353-->
END

---


START
BI-SZZ

Definice: **asymptota funkce** ($x=a$)

Back:

![](../Assets/Pasted%20image%2020240527184320.png)
<!--ID: 1716877593356-->
END

---


START
BI-SZZ

Definice: **přímka je asymptotou**

Back:

![](../Assets/Pasted%20image%2020240527184341.png)
<!--ID: 1716877593358-->
END

---


START
BI-SZZ

Jak se spočte $k$ u asymptoty?

Back:

$$k = \lim_{x \to \pm\infty} \frac{f (x)}{x}$$
<!--ID: 1716877593361-->
END

---


START
BI-SZZ

Jak se spočte $q$ u asymptoty?

Back:

$$q = \lim_{x \to \pm\infty} f (x) - kx$$
<!--ID: 1716877593364-->
END

---


START
BI-SZZ

Jak spočtu asymptotu funkce?

![](../Assets/Pasted%20image%2020240527184617.png)

Back:

1. Rozmyslím si kde může mít funkce asymptoty ($\pm \infty$ nebo v nějakém bodě)
2. Spočtu každou asymptotu (buď pomocí $k$ a $q$ pro $\pm \infty$ nebo $x=a$ pro daný bod)

![](../Assets/Pasted%20image%2020240527184609.png)
<!--ID: 1716877593367-->
END

---
