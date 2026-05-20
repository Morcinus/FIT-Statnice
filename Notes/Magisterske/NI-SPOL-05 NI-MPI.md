---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-05 NI-MPI

> NI-SPOL-05 (NI-MPI)
> Numerická matematika: reprezentace čísel v počítači, chyby vznikající při výpočtech s pohyblivou řádovou čárkou, podmíněnost úlohy a stabilita numerických algoritmů.

## Numerická matematika

<!--
Original Flashcard ID: 1735205749204
-->

START
NI-SZZ


Jaká je výhoda iterativní metody?

Back:

Je "samoopravující se", v každém kroku se řešení zlepší víc, než se zhorší numerickýma chybama. Díky tomu to konverguje k dobrému výsledku.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221134409.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397329-->
END

---

## Reprezentace čísel v počítači

<!--
Original Flashcard ID: 1735205749507
-->

START
NI-SZZ


Jaké jsou typy chyb v matematice? (4)

Back:

- chyba **modelu** - řešíme to moc zjednodušeně (např. zanedbáváme tření)
- chyba **dat** - vstupní data nejsou přesná
- chyba **algoritmu** - nemusíme mít algoritmus, který v konečném počtu kroků najde přesné řešení
- **zaokrouhlovací** chyba - při výpočtu dochází k chybám (např. při aritmetických operacích)
<!--ID: 1778786397366-->
END

---

<!--
Original Flashcard ID: 1735205749509
-->

START
NI-SZZ


Co je vědecký zápis čísel?

Back:

Zápis ve tvaru:
$$x = \pm \textcolor{Cerulean}q \cdot2^\textcolor{Orange}e$$

- $\textcolor{Cerulean}q$ - **signifikant** (mantisa)
- $\textcolor{Orange}e$ - **exponent**

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241113111445.png)

<!-- ExplanationEnd -->
<!--ID: 1778786397369-->
END

---

<!--
Original Flashcard ID: 1735205749512
-->

START
NI-SZZ


Jaké jsou typy zápisu vědeckého zápisu čísla (dle IEE-754)?

Back:

- **poloviční** (binary 16, half precision)
- **jednoduchá** (binary 32, single precision)
- **dvojitá** (binary 64, double precision)
- **čtyřnásobná** (binary 128, quadruple precision)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113111846.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397372-->
END

---

<!--
Original Flashcard ID: 1735812207565
-->

START
NI-SZZ


Kolik bitů má poloviční přesnost (half precision) u $m,e$?

Back:

- $m = 10$
- $e = 5$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397375-->
END

---

<!--
Original Flashcard ID: 1735812207571
-->

START
NI-SZZ


Kolik bitů má jednoduchá přesnost (single precision) u $m,e$?

Back:

- $m = 23$
- $e = 8$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397378-->
END

---

<!--
Original Flashcard ID: 1735812207573
-->

START
NI-SZZ


Kolik bitů má dvojitá přesnost (double precision) u $m,e$?

Back:

- $m = 52$
- $e = 11$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1778786397380-->
END

---

<!--
Original Flashcard ID: 1735205749514
-->

START
NI-SZZ


Pokud $e = 2^d-1$ a $m \neq 0$, tak $x = \ ?$

($d$ je délka exponentu)

Back:

$$x = \text{NaN}$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397383-->
END

---

<!--
Original Flashcard ID: 1735205749517
-->

START
NI-SZZ


Pokud $e = 2^d-1$ a $m = 0$, tak $x = \ ?$

($d$ je délka exponentu)

Back:

$$x = (-1)^s \cdot \text{Inf}$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397386-->
END

---

<!--
Original Flashcard ID: 1735205749519
-->

START
NI-SZZ


Pokud $0 <e < 2^d-1$, tak $x = \ ?$

($d$ je délka exponentu)

Back:

$$x = (-1)^s \cdot (1.m_2)_2 \cdot 2^{e-b}$$

(tzv. **normalizovaná čísla**)

$(m_2)_2$ je délka $m$
$b$ je posun toho exponentu

<!-- ExplanationStart -->
To $1.$ před mantisou znamená, že tam vždy budeme mít **skrytou jedničku**, která není součástí té mantisy.
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397388-->
END

---

<!--
Original Flashcard ID: 1735205749522
-->

START
NI-SZZ


Pokud $e = 0$ a $m \neq 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot (0.m_2)_2 \cdot 2^{1-b}$$

(tzv. **subnormální čísla** - čísla co jsou extrémně malá a blízko nule)

<!-- ExplanationStart -->
To $0.$ před mantisou znamená, že tam máme velice malé číslo. To se používá pro extrémně malá čísla, která jsou blízko nule.
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397391-->
END

---

<!--
Original Flashcard ID: 1735205749524
-->

START
NI-SZZ


Pokud $e = 0$ a $m = 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot 0$$
<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520121248.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397393-->
END

---

<!--
Original Flashcard ID: 1735205749527
-->

START
NI-SZZ


Co je skrytá jednička?

Back:

Neukládáme první jedničku v mantise, protože je jasné, že tam musí být.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113112321.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397396-->
END

---

<!--
Original Flashcard ID: 1735205749530
-->

START
NI-SZZ


Co jsou **strojová čísla**?

Back:

Reprezentace **reálných čísel** ve podle standardu standardu IEEE-754 (znaménko, mantisa, exponent) se nazývají **strojová čísla**.

Pozor, fakticky strojová čísla jsou **racionální čísla**, tedy čísla, která lze zapsat formou zlomku. Nepatří do nich tedy například $\sqrt{2}, \pi, \dots$

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241113112511.png)
![](../../Assets/Pasted%20image%2020241113112534.png)

<!-- ExampleEnd -->
<!--ID: 1778786397399-->
END

---

## Chyby vznikající při výpočtech s pohyblivou řádovou čárkou

<!--
Original Flashcard ID: 1735205749532
-->

START
NI-SZZ


Co je **strojová přesnost**?

Back:

Strojová přesnost $\varepsilon_F$ je vzdálenost $1$ a nejbližšího většího čísla.

<!-- ExplanationStart -->

To mi jakoby říká jak přesný je ten můj zápis čísla.

Neformálně "jak velké jsou mezery mezi čísly" na té reálné ose, kterou ukládám.

![](../../Assets/Pasted%20image%2020241113112923.png)

<!-- ExplanationEnd -->
<!--ID: 1778786397402-->
END

---

<!--
Original Flashcard ID: 1735205749534
-->

START
NI-SZZ


Co je funkce `fl`?

Back:

Zobrazení $\mathbb{R} \rightarrow F$, které přiřadí každému $x \in \mathbb{R}$ "nejbližší" strojové číslo.

$F$ je množina strojových čísel

<!-- DetailInfoStart -->

Nejbližší strojové číslo je určeno podle vybrané strategie:
- k nejbližšímu
- k $\pm$ nekonečnu
- náhodně
- usekávání (zaokrouhlování směrem k nule)

  <!-- DetailInfoEnd -->
<!--ID: 1778786397404-->
END

---

<!--
Original Flashcard ID: 1735205749537
-->

START
NI-SZZ


Co je **přetečení a podtečení**?

Back:

Pokud chci reprezentovat číslo mimo rozsah, dochází k **přetečení** nebo **podtečení**.
<!--ID: 1778786397407-->
END

---

<!--
Original Flashcard ID: 1735205749539
-->

START
NI-SZZ


Definice: **absolutní chyba** a **relativní chyba**

Back:

![](../../Assets/Pasted%20image%2020241113113306.png)

<!-- ExplanationStart -->
**Absolutní chyba** = o kolik se mýlíme oproti těm reálným číslům
**Relativní chyba** = o kolik se mýlíme oproti reálným číslům vzhledem k velikosti toho čísla (tzn. je to jakoby v procentech)
<!-- ExplanationEnd -->


<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020241113113335.png)

<!-- ExerciseEnd -->
<!--ID: 1778786397410-->
END

---

<!--
Original Flashcard ID: 1735205749542
-->

START
NI-SZZ


Co je **zaokrouhlovací jednotka**? Jak ji vyjádříme (když zaokrouhlujeme směrem k nule)?

Back:

Značí se $\textbf{u}$ a říká nám, jak velká chyba vznikne, když zaokrouhlíme na nejbližší strojové číslo (v tomto případě směrem k nule).

$$\textbf{u}=2^{-23}$$

**Jak ji vyjádříme:**

Když zapíšeme reálné číslo takto:
![](../../Assets/Pasted%20image%2020260520123646.png)

Tedy $x=(1.m_1m_2m_3,\dots)_2\cdot2^l$

Zaokrouhlení provedeme směrem k nule "useknutím" bitů co přesahují délku signifikandu $\text{fl}(x)=(1.m_1m_2m_3\dots m_{23})_2\cdot 2^l$

Zaokrouhlovací jednotka je pak **mez** definovaná takto:
![](../../Assets/Pasted%20image%2020241113113706.png)

Pozn. délka $m$ je v tomto případě $23$, tedy používáme jednoduchou přesnost 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260520124455.png)
<!-- DetailInfoEnd -->
<!--ID: 1778786397413-->
END

---


START
FIT-Card

Jak by byla velká zaokrouhlovací jednotka pokud bychom zaokrouhlovali směrem k nejbližšímu číslu (a ne k nule)?

Back:

$$\textbf{u}=2^{-24}$$

Za předpokladu, že délka $m$ je $23$, tedy používáme jednoduchou přesnost 
<!--ID: 1779274147517-->
END

---


<!--
Original Flashcard ID: 1735205749544
-->

START
NI-SZZ


Tvrzení: $\text{fl}(x) = \ ?$

Back:

![](../../Assets/Pasted%20image%2020241113113814.png)
<!--ID: 1778786397416-->
END

---

<!--
Original Flashcard ID: 1735205749547
-->

START
NI-SZZ


Tvrzení: operace sčítání, odčítání, násobení a dělení

Back:

![](../../Assets/Pasted%20image%2020241113114019.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113114028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241113114332.png)
![](../../Assets/Pasted%20image%2020241113114339.png)

<!-- ExampleEnd -->
<!--ID: 1778786397419-->
END

---

<!--
Original Flashcard ID: 1735205749549
-->

START
NI-SZZ


Co je **krácení** v kontextu chyb? Kdy nastává? Jak se mu vyhnout?

Back:

V průběhu výpočtu nám vyjde například $0.0049 \cdot 10^{-2}$, normalizujeme to tak, aby tam byla ta skrytá jednička (zde jsme v desítkové soustavě, takže ta $4$) a vyjde nám $4.9\textcolor{Red}{000} \cdot 10^{-2}$, což je ale špatně protože jsme tím ztratili ta poslední čísla. Takže pak když pokračujem ve výpočtu, tak už to je méně přesné.

Kdy nastává: **při odečítání** (např $x-\sin{x}$)

Jak se mu vyhnout:
- **přeformulovat problém** tak aby se neodečítalo
- místo funkcí **použít jim odpovídající řady** (např. Taylorovy řady)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241113114748.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113115123.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397421-->
END

---

<!--
Original Flashcard ID: 1735205749552
-->

START
NI-SZZ

Tvrzení: počet ztracených bitů při odečítání

Back:

![](../../Assets/Pasted%20image%2020241113114919.png)

Říká nám to, kolik bitů ztratíme, když se stane **krácení**.
<!--ID: 1778786397424-->
END

---

<!--
Original Flashcard ID: 1735205889347
-->

START
NI-SZZ


Lemma: Načítání chyb

Back:

![](../../Assets/Pasted%20image%2020241221143009.png)

Značení:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221143245.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397426-->
END

---

## Podmíněnost úlohy a stabilita numerických algoritmů

<!--
Original Flashcard ID: 1735205749188
-->

START
NI-SZZ


Definice: **dopředná chyba**

Back:

![](../../Assets/Pasted%20image%2020241221133458.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221133604.png)

<!-- DetailInfoEnd -->

<!-- ExplanationStart -->

Máme teoretický ($V$) a naimplementovaný algoritmus ($V^*)$ a chci je porovnat. Implementace typicky má nějakou chybu (např. zaokrouhlování floatů).

$d$ je nějaký vstup

<!-- ExplanationEnd -->
<!--ID: 1778786397429-->
END

---

<!--
Original Flashcard ID: 1735205749191
-->

START
NI-SZZ


Definice: **Zpětná chyba**

Back:

![](../../Assets/Pasted%20image%2020241221133515.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221133613.png)

<!-- DetailInfoEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241221133521.png)

<!-- ImageEnd -->
<!--ID: 1778786397432-->
END

---


START
FIT-Card

Co znamená, že je algoritmus **zpětně stabilní**?

Back:

Že je pro všechny vstupy $d$ zpětná chyba relativně malá.

("relativně malá" závisí na konkrétním případě)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241221133521.png)

<!-- ImageEnd -->
<!--ID: 1779289984127-->
END

---


<!--
Original Flashcard ID: 1735205749194
-->

START
NI-SZZ


Definice: **podmíněnost** úlohy

Back:

![](../../Assets/Pasted%20image%2020241221133641.png)

Neboli jak moc se změní výstup, když změníme vstup.

Pomocí relativního čísla podmíněnosti $C_r$ to můžeme vyjádřít
<!--ID: 1778786397434-->
END

---

<!--
Original Flashcard ID: 1735205749196
-->

START
NI-SZZ


Definice: **Relativní číslo podmíněnosti**

Back:

![](../../Assets/Pasted%20image%2020241221133656.png)

<!-- ExplanationStart -->
Vzoreček mi říká "jak moc se podělá výstup, když se poděláme vstup", neboli:
$$\frac{\text{relativní chyba vstupu}}{\text{relativní chyba výstup}}$$
při limitním zmenšováním těch chyb ve vstupu $\delta d$.

**Vysvětlení jednotlivých částí**:
- limita = zmenšujeme limitně ty vstupní chyby
- supremum $||\delta d|| \leq \epsilon$ = vždy bereme tu _nejhorší velikost chyby_
- $D$ je přípustná množina vstupů úlohy

**Vysvětlení významu $C_r$**
Když $C_r=1$, tak to znamená, že ten algoritmus je stabilní, protože malá chyba na vstupu bude mít za následek malou chybu výstupu

Když $C_r \gg 1$, tak to znamená, že malinká chyba na vstupu může způsobit obří chybu na výstupu

<!-- ExplanationEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221134450.png)
![](../../Assets/Pasted%20image%2020241221134456.png)

<!-- ExampleEnd -->
<!--ID: 1778786397437-->
END

---

<!--
Original Flashcard ID: 1735205749199
-->

START
NI-SZZ


Definice: **dobře a špatně podmíněná** úloha

Back:

![](../../Assets/Pasted%20image%2020241221133722.png)

<!-- ExplanationStart -->
**dobře podmíněná** = výstup algoritmu se změní málo, pokud málo změníme vstup
**špatně podmíněná** = výstup algoritmu se změní hodně, pokud málo změníme vstup
<!-- ExplanationEnd -->

<!--ID: 1778786397439-->
END

---

<!--
Original Flashcard ID: 1735205749206
-->

START
NI-SZZ


Definice: **přidružená maticová norma**

(tohle asi nemusíme umět přesně, jen vědět co to znamená)

Back:

Podobně jako norma vektoru nám říká "jak moc je velký vektor", tak maticová norma nám říká to samé, ale v dalším rozměru, tedy "jak moc je velká matice".

![](../../Assets/Pasted%20image%2020241221134739.png)



<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221134750.png)

<!-- ExplanationEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221134956.png)

<!-- ExampleEnd -->
<!--ID: 1778786397442-->
END

---

<!--
Original Flashcard ID: 1735205749209
-->

START
NI-SZZ


Definice: **číslo podmíněnosti**

Back:

![](../../Assets/Pasted%20image%2020241221135243.png)

<!-- ExplanationStart -->
**Číslo podmíněnosti** nám říká, jak moc se chyba ve vstupu zesílí ve výstupu. Je to velice podobné $C_r$. Číslo podmíněnosti je jakoby speciální případ pro úlohy typu $Ax=b$ (tedy soustavu rovnic).

Podobně jako u $C_r$:
- Když $\kappa(A) \approx 1$, pak se chyba skoro nezvětší
- Když by to bylo výrazně větší, tak se ta chyba o dost zvětší na výstupu

<!-- ExplanationEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221135254.png)
![](../../Assets/Pasted%20image%2020241221135259.png)
![](../../Assets/Pasted%20image%2020241221135305.png)

<!-- ExampleEnd -->
<!--ID: 1778786397445-->
END

---
