---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---
TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-02 NI-MPI

> NI-SPOL-02 (NI-MPI)
> Tělesa a okruhy: Základní definice a vlastnosti. Konečná tělesa. Okruhy polynomů, ireducibilní polynom.


## Tělesa a okruhy

<!--
Original Flashcard ID: 1735205749280
-->

START
NI-SZZ

Definice: **těleso**

Back:

![](../../Assets/Pasted%20image%2020241129151056.png)

Tags: algebra4 core
<!--ID: 1778786396972-->
END

---

<!--
Original Flashcard ID: 1735205749282
-->

START
NI-SZZ

Věta: Pokud pro $a,b$ z tělesa $T$ platí $ab =0$, potom $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221091852.png)

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020241221091859.png)

<!-- ProofEnd -->

Tags: algebra4 core
<!--ID: 1778786396981-->
END

---

## Základní definice a vlastnosti

<!--
Original Flashcard ID: 1735205749262
-->

START
NI-SZZ

Definice: **Okruh**

Back:

![](../../Assets/Pasted%20image%2020241129150534.png)

Tags: algebra4 core
<!--ID: 1778786396983-->
END

---

<!--
Original Flashcard ID: 1735205749265
-->

START
NI-SZZ

Názvosloví: **komutativní okruh**

Back:

Buď $R = (M, +, \cdot)$ okruh.

Je-li $\cdot$ komutativní, je $R$ **komutativní okruh**.

Tags: algebra4
<!--ID: 1778786396987-->
END

---

<!--
Original Flashcard ID: 1735205749268
-->

START
NI-SZZ

Názvosloví: aditivní grupa okruhu $R$

Back:

Buď $R = (M, +, \cdot)$ okruh.

$(M, +)$ se nazývá **aditivní grupa** okruhu $R$

Tags: algebra4
<!--ID: 1778786396990-->
END

---

<!--
Original Flashcard ID: 1735205749270
-->

START
NI-SZZ

Názvosloví: **multiplikativní monoid okruhu** $R$

Back:

Buď $R = (M, +, \cdot)$ okruh.

$(M, \cdot)$ se nazývá **multiplikativní monoid** okruhu $R$

Tags: algebra4
<!--ID: 1778786396992-->
END

---

<!--
Original Flashcard ID: 1735205749273
-->

START
NI-SZZ

Názvosloví: **neutrální prvek grupy** $(M,+)$ v okruhu $R$

Back:

Neutrální prvek grupy $(M, +)$ se nazývá **nulový prvek** $0$

Tags: algebra4
<!--ID: 1778786396995-->
END

---

<!--
Original Flashcard ID: 1735205749275
-->

START
NI-SZZ

Názvosloví: **neutrální prvek** $(M,\cdot)$ v okruhu $R$

Back:

Neutrální prvek multiplikativního monoidu $(M, \cdot)$ se nazývá **jednička** a značí se $1$

Tags: algebra4
<!--ID: 1778786396998-->
END

---

START
NI-SZZ

Kdy jsou tělesa $T$ a $K$ izomorfní?

Back:

![](../../Assets/Pasted%20image%2020260515202324.png)
<!--ID: 1779300126814-->
END

---

<!--
Original Flashcard ID: 1735205749277
-->

START
NI-SZZ

Definice: **Obor integrity**

Back:

![](../../Assets/Pasted%20image%2020241129151040.png)

<!-- ExampleStart -->

**Co je obor integrity:**
$\mathbb{R}, \mathbb{Q}, \mathbb{C}, \mathbb{Z}$ jsou obory integrity, protože neexistují nenuloví dělitelé nuly, tj. pokud $a \cdot b = 0$, pak $a=0$ nebo $b=0$.

**Co není obor integrity**:
Maticový okruh $M_{2}(\mathbb{R})$ (2x2 maticed nad $\mathbb{R}$)
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B=\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$
$$A \cdot B = 0, \quad  A \neq 0, \quad B \neq 0 $$

Tags: algebra4 core
<!--ID: 1778786397000-->
END

---

## Konečná tělesa

<!--
Original Flashcard ID: 1735205749320
-->

START
NI-SZZ

Definice: **konečné těleso**

Back:

![](../../Assets/Pasted%20image%2020241221092501.png)

<!-- ExampleStart -->

$\mathbb{Z}_p$ kde $p$ je prvočíslo je např. konečné těleso, se kterým nejvíce pracujeme.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221092510.png)
![](../../Assets/Pasted%20image%2020241221092516.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397006-->
END

---

<!--
Original Flashcard ID: 1735205749322
-->

START
NI-SZZ

Když máme $\mathbb{Z}_n$, kde $n$ není prvočíslo, může to být tělesem?

Back:

Ne! Jakmile $n$ není prvočíslo, potom $\mathbb{Z}_n$ nemůže být těleso.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221095323.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397009-->
END

---

<!--
Original Flashcard ID: 1735205749325
-->

START
NI-SZZ

Algoritmus: Sestavení konečného tělesa řádu $p^n$ (tedy neprvočíselného řádu)

Back:

![](../../Assets/Pasted%20image%2020241221095458.png)

<!-- ExplanationStart -->

Umíme sestavit třeba $\mathbb{Z}_5$, což je prvočíselného řádu, ale my chceme třeba $\mathbb{Z}_4$, tedy neprvočíselného.

Máme prvočíslo $p$ a celé číslo $n \geq 2$ a chceme sestavit těleso o $p^n$ prvcích

1. Uděláme těleso $p$ prvků např $T=\mathbb{Z}_2 = \{0,1\}$ (a tedy počítáme modulo $2$)
2. $T[x]$ budou všechny polynomy nad tím tělesem, tedy všechny s koeficienty $0$ nebo $1$ (např. $x^3+x+1$)
3. Najdeme ireducibilní polynom (tedy ten co nejde rozložit - např. $x^2-1=(x-1)(x+1)$ je reducibilní) - např. $P(x)=x^4+x+1$
4. Potom vezmeme množinu $F$ všechy polynomů z $T[x]$ stupně $n-1$ a menšího a na této množině zavedeme operace sčítání a násobení (viz výše). $F$ je pak těleso mající $p^n$ prvků

<!-- ExplanationEnd -->

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020241221101100.png)
![](../../Assets/Pasted%20image%2020260516104618.png)

<!-- ExerciseEnd -->
<!--ID: 1778786397011-->
END

---

<!--
Original Flashcard ID: 1735205749327
-->

START
NI-SZZ

Postup: Jak najdu **inverzní prvek vůči násobení** pro polynom $h(x)$ modulo $P(x)$?

Back:

$P(x)$ je ireducibilní nad $T$ stupně $n$

Hledám $h(x)^{-1}, h(x) \in F$

1. Pomocí REA nad $T[x]$ spočtu $\gcd(h(x), P(x)) = u(x)\cdot h(x) + v(x) \cdot P(x)$
2. "Zmodulím to polynomem $P(x)$"
3. $\gcd(h(x), P(x)) \mod P(x) = (u(x)\cdot h(x) + v(x) \cdot P(x)) \mod P(x)$, obě strany jsou $\in F$, tedy náleží zbytkům po dělení tím číslem, kterým jsem modulil
4. v $F$:
 	- $\gcd(h(x), P(x)) = u(x) \cdot h(x)$
 	- Vím, že $\gcd$ bude polynom stupně $0$ (ty polynomy $h$ a $P$ jsou nesoudělné).
 	- Tedy vlevo v rovnici bude nenulové číslo
 	- Pak mi vyjde:
 	- $h(x)^{-1}=(\gcd(h(x), P(x)))^{-1}\cdot u(x)$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221100849.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397014-->
END

---

<!--
Original Flashcard ID: 1735205749337
-->

START
NI-SZZ

Věta: Jaký **řád musí mít konečné těleso**? (+ jak to je s **izomorfismem**)

Back:

$p^n$, kde $p$ je prvočíslo a $n$ je kladné celé číslo.

![](../../Assets/Pasted%20image%2020241221102012.png)
<!--ID: 1778786397017-->
END

---

<!--
Original Flashcard ID: 1735205749340
-->

START
NI-SZZ

Důsledek: **tělesa jakých řádů neexistují**? (na tohle se ptají u zkoušky)

Back:

![](../../Assets/Pasted%20image%2020241221102416.png)

Protože musí mít řád $p^n$ kde $p$ je prvočíslo a $n$ je kladné celé číslo
<!--ID: 1778786397019-->
END

---

<!--
Original Flashcard ID: 1735205749342
-->

START
NI-SZZ

Definice: Galoisovo těleso, charakteristika tělesa

Back:

![](../../Assets/Pasted%20image%2020241221102029.png)

Tags: core
<!--ID: 1778786397022-->
END

---

<!--
Original Flashcard ID: 1735812207577
-->

START
NI-SZZ

Jak se spočte řád grup:

- $GF(p^n)$ - multiplikativní
- $GF(p^n)$ - aditivní
- $Z_n^{+}$
- $Z_n^{\times}$

Back:

- $GF(p^n)$ - $p^n-1$
- $GF(p^n)$ - $p^n$
- $Z_n^{+}$ - $n$
- $Z_n^{\times}$ - $\varphi(n)$ - Eulerova funkce. Pokud navíc $n$ je prvočíslo, tak řád je $n-1$

Tags: algebra3 core
<!--ID: 1778786397003-->
END

---

<!--
Original Flashcard ID: 1735205749345
-->

START
NI-SZZ

Jaký řád má aditivní a multiplikativní grupa konečného tělesa ($GF(p^n)$)?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: $p^n$
- Multiplikativní: $p^{n}-1$ (nebude tam nula)

Tags: core
<!--ID: 1778786397025-->
END

---

<!--
Original Flashcard ID: 1735205749347
-->

START
NI-SZZ

Jaké neutrální prvky mají aditivní a multiplikativní grupa tělesa $GF(p^n)$?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: $0=00\dots 0 = 0^n$
	- Např. $000$
- Multiplikativní: $00 \dots 1 = 0^{n-1}1$
	- Např. $001$

Tags: core
<!--ID: 1778786397027-->
END

---

<!--
Original Flashcard ID: 1735205749350
-->

START
NI-SZZ

Jak se spočte inverze k prvku v aditivní a multiplikativní grupě tělesa $GF(p^n)$?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: inverze prvku $b_1b_2 \dots b_n$ je $(p-b_1)(p-b_2) \dots (p-b_n)$
	- Např v $(\mathbb{Z}_3^+)^3 : 333-101 = 232$
- Multiplikativní: pomocí REA v polynomiálním čase

Tags: core
<!--ID: 1778786397030-->
END

---

<!--
Original Flashcard ID: 1735205749352
-->

START
NI-SZZ

Je aditivní a multiplikativní grupa tělesa $GF(p^n)$ cyklická?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: **pro $n>1$ není cyklická**, platí $\forall v : (p+1) \times v = v$ resp. $p \times v = 0$
- Multiplikativní: **je vždy cyklická**

Tags: core
<!--ID: 1778786397033-->
END

---

<!--
Original Flashcard ID: 1735205749175
-->

START
NI-SZZ

Jak sestavím konečné těleso řádu $p^n$?

Back:

Nechť $p(x)$ je ireducibilní polynom nad $\mathbb{Z}_p$ stupně $n$.

![](../../Assets/Pasted%20image%2020241221112332.png)
<!--ID: 1778786397036-->
END

---

<!--
Original Flashcard ID: 1735205749178
-->

START
NI-SZZ

Jaký je postup při řešení tohoto příkladu?

![](../../Assets/Pasted%20image%2020241221113017.png)

Back:

Pomocí REA získám Bezoutovu rovnost.

![](../../Assets/Pasted%20image%2020241221114159.png)
<!--ID: 1778786397038-->
END

---

<!--
Original Flashcard ID: 1735205749181
-->

START
NI-SZZ

Jak se spočte příklad typu:

![](../../Assets/Pasted%20image%2020241221114307.png)

Back:

1. Zjistíme, jeslti mí $P_a(x)$ v $\mathbb{Z}_5$ kořen.
   1. Postupně dosazuju za $x$ prvky $\mathbb{Z}_5$
   2. Pokud najdu nějaký prvek, kde se $P_a(x) = 0$, je $x$ kořen. Pokud takový prvek nenajdu, tak to nemá kořen.
2. Pokud **nemá kořen**, nemá faktorizaci (viz věta), **je ireducibilní**.
3. Pozor, může nastat divný případ, viz cvičení 23.3b) níže

![](../../Assets/Pasted%20image%2020241221114945.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020241221115609.png)

<!-- ExerciseEnd -->
<!--ID: 1778786397041-->
END

---

<!--
Original Flashcard ID: 1735205749183
-->

START
NI-SZZ

Jak se vyřeší cvičení tohoto typu?

![](../../Assets/Pasted%20image%2020241221120155.png)

Back:

Možnost 1: Hledat $\alpha, \beta \in \mathbb{Z}_3$ takové, že $y = \alpha x + \beta$, dosadím do rovnice
Možnost 2: Budem upravovat rovnici:

- vyjádříme $y$

![](../../Assets/Pasted%20image%2020241221120403.png)
![](../../Assets/Pasted%20image%2020241221120544.png)
![](../../Assets/Pasted%20image%2020241221120951.png)
![](../../Assets/Pasted%20image%2020241221121015.png)
![](../../Assets/Pasted%20image%2020241221121306.png)
<!--ID: 1778786397043-->
END

---

<!--
Original Flashcard ID: 1735205749185
-->

START
NI-SZZ

Jak se postupuje v následujícím příkladě?

![](../../Assets/Pasted%20image%2020241221121409.png)

Back:

a) Pomocí EEA s polynomy

![](../../Assets/Pasted%20image%2020241221122110.png)
![](../../Assets/Pasted%20image%2020241221122425.png)
<!--ID: 1778786397046-->
END

---

## Okruhy polynomů, ireducibilní polynom

<!--
Original Flashcard ID: 1735205749294
-->

START
NI-SZZ

Definice: **Polynom nad okruhem**

Back:

![](../../Assets/Pasted%20image%2020241221092135.png)

<!-- InformallySaidStart -->

Stejně jako v $\mathbb{R}$ máme polynomy, tak tohle je to samé, ale s prvky nějakého obecného okruhu.

<!-- InformallySaidEnd -->

Tags: algebra4
<!--ID: 1778786397049-->
END

---

<!--
Original Flashcard ID: 1735205749297
-->

START
NI-SZZ

Věta: **Okruh polynomů**

Back:

![](../../Assets/Pasted%20image%2020241221092158.png)

Tags: algebra4
<!--ID: 1778786397052-->
END

---

<!--
Original Flashcard ID: 1735205749300
-->

START
NI-SZZ

Lemma: **o násobení polynomů** (aneb jaký stupeň mají polynomy po násobení)

Back:

![](../../Assets/Pasted%20image%2020241221092231.png)

Tags: algebra4 core
<!--ID: 1778786397055-->
END

---

<!--
Original Flashcard ID: 1735205749302
-->

START
NI-SZZ

Lemma: **o dělení polynomů**

Back:

![](../../Assets/Pasted%20image%2020241221092247.png)

Tags: algebra4
<!--ID: 1778786397058-->
END

---

<!--
Original Flashcard ID: 1735205749305
-->

START
NI-SZZ

Definice: $h(x)$ je největší společný dělitel polynomů $f(x), g(x)$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221092619.png)

Pozor, největší společný dělitel $h(x)$ není jednoznačný, těch polynomů může být více.
<!--ID: 1778786397061-->
END

---

<!--
Original Flashcard ID: 1735205749307
-->

START
NI-SZZ

Věta: Bézoutova rovnost pro polynomy

Back:

![](../../Assets/Pasted%20image%2020241221092333.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221092340.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397063-->
END

---

<!--
Original Flashcard ID: 1735205749310
-->

START
NI-SZZ

Jak najdu Bezoutovy koeficiety u $\gcd(f(x), g(x))$?

Back:

Pustím na to rozšířený Eukleidův algoritmus.

Tags: core
<!--ID: 1778786397066-->
END

---

<!--
Original Flashcard ID: 1735205749312
-->

START
NI-SZZ

Věta: Polynomial factor theorem (aneb prvek je kořen polynomu $\Leftrightarrow \dots$)

Back:

![](../../Assets/Pasted%20image%2020241221092400.png)

<!-- ExplanationStart -->

Kořen = když to dosadím, tak se polynom bude rovnat nule.
![](../../Assets/Pasted%20image%2020241221093714.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1778786397069-->
END

---

<!--
Original Flashcard ID: 1735205749315
-->

START
NI-SZZ

Definice: **Ireducibilní polynom**

$P(x)$ je **ireducibilní** nad okruhem $K$, jesltiže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221092421.png)

<!-- ExplanationStart -->

Neboli jeden z těch polynomů je (nenulová) multiplikativní konstanta.

<!-- ExplanationEnd -->

<!-- ExampleStart -->

$x^2-10$ nad $\mathbb{Q}$ - nevyrobím dva polynomy tak, aby to byl součin dvou polynomů, kde ty koeficienty jsou z $\mathbb{Q}$.

Např. nad $\mathbb{R}$ není ireducibilní.

<!-- ExampleEnd -->

Tags: core
<!--ID: 1778786397072-->
END

---

<!--
Original Flashcard ID: 1735205749317
-->

START
NI-SZZ

Věta: Ireducibilní polynomy - co o nich víme

(pozn. tomuhle jsme se na přednášce moc nevěnovali, Starosta působil jako že to není tak důležitý, i když to explicitně neřekl)

Back:

![](../../Assets/Pasted%20image%2020241221092443.png)
![](../../Assets/Pasted%20image%2020241221094415.png)
<!--ID: 1778786397075-->
END

---

<!--
Original Flashcard ID: 1735205749330
-->

START
NI-SZZ

Jak mohu zjistit, že je polynom ireducibilní?

Back:

Zkusím najít jeho kořen. Pokud ho najdu, tak není ireducibilní.

<!-- ExplanationStart -->

Pokud najdu jeho kořen, znamená to, že lze ten polynom rozložit na dva polynomy nenulového stupně, kvůli čemuž z definice původní polynom není ireducibilní.

![](../../Assets/Pasted%20image%2020241221092421.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1778786397079-->
END

---

<!--
Original Flashcard ID: 1735205749332
-->

START
NI-SZZ

Jak se sčítají polynomy?

Back:

Jenom stačí posčítat ty jednotlivé koeficienty $a_i$ a $b_i$.

![](../../Assets/Pasted%20image%2020241221101441.png)

Tags: core
<!--ID: 1778786397082-->
END

---

<!--
Original Flashcard ID: 1735205749335
-->

START
NI-SZZ

Jak se **násobí polynomy** mod $P(x)$?

Např.
$R(x)=x^3+x^2+1$
$S(x)=x^2+x$

Ireducibilní polynom $P(x)=x^4+x+1$

nad $\mathbb{Z}_2$

Back:

1. Vynásobíme polynomy ($1101$ a $0110$), vyjde nám $x^5+x^3+x^2+x$
2. Zmodulíme výsledek polynomem $P(x)$
   1. Položíme $P(x) = 0$ (protože když bych to modulil $P(x)$, tak to bude $0$) a vyjádříme nejvyšší mocninu (zde $x^4=-x^2-1$)
   2. Tu rovnici pak mohu násobit $x$ a tím získávat vyjádření polynomů o vyšších mocninách (např. $x^5=-x^2-x$)
   3. To pak budu dosazovat do výsledku, dokud nedostanu polynom, co je v tom daném tělese $T$

![](../../Assets/Pasted%20image%2020241227135810.png)
![](../../Assets/Pasted%20image%2020241221101735.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221101455.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397085-->
END

---
