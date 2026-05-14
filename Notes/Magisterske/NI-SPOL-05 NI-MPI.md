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
Original Flashcard ID: 1735205749467
-->

START
NI-SZZ


Co je třída **přímých metod**?

Back:

Metoda, co v **konečném počtu kroků** vrátí řešení.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113120616.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397294-->
END

---

<!--
Original Flashcard ID: 1735205749469
-->

START
NI-SZZ


Co je třída **iteračních metod**?

Back:

Konstruují posloupnost nějakých přibližných řešení. Chceme aby ta posloupnost **měla limitu**, která je **skutečným řešením** dané úlohy.

Ta metoda jakoby postupně "vylepšuje/zpřesňuje" to řešení.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241113120820.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397297-->
END

---

<!--
Original Flashcard ID: 1735205749472
-->

START
NI-SZZ


Připomenutí: Co je **vlastní číslo matice** a **vlastní vektor matice**?

Back:

![](../../Assets/Pasted%20image%2020241113120949.png)
<!--ID: 1778786397300-->
END

---

<!--
Original Flashcard ID: 1735205749474
-->

START
NI-SZZ


Připomenutí: Co tvoří vlastní vektory matice $M$?

Back:

![](../../Assets/Pasted%20image%2020241113121014.png)
<!--ID: 1778786397302-->
END

---

<!--
Original Flashcard ID: 1735205749477
-->

START
NI-SZZ


Připomenutí: Jak se počítají **vlastní čísla matice**?

Back:

![](../../Assets/Pasted%20image%2020241113122213.png)
<!--ID: 1778786397305-->
END

---

<!--
Original Flashcard ID: 1735205749479
-->

START
NI-SZZ


Připomenutí: Kdy je matice diagonalizovatelná?

Back:

![](../../Assets/Pasted%20image%2020241113122403.png)
<!--ID: 1778786397308-->
END

---

<!--
Original Flashcard ID: 1735205749485
-->

START
NI-SZZ


Připomenutí: Co je na diagonále matice $D$ a co je ve sloupcích matice $P$?

![](../../Assets/Pasted%20image%2020241113122403.png)

Back:

![](../../Assets/Pasted%20image%2020241113122552.png)
<!--ID: 1778786397310-->
END

---

<!--
Original Flashcard ID: 1735205749494
-->

START
NI-SZZ


K čemu slouží mocninná metoda?

Back:

![](../../Assets/Pasted%20image%2020241113123136.png)
<!--ID: 1778786397313-->
END

---

<!--
Original Flashcard ID: 1735205749497
-->

START
NI-SZZ


Jaké jsou předpoklady mocninné metody?

Back:

- Matice je diagonalizovatelná
- Můžeme označit vlastní čísla sestupně (viz níže)
- $\alpha_1 \neq 0$

![](../../Assets/Pasted%20image%2020241113123241.png)
![](../../Assets/Pasted%20image%2020241113123834.png)
<!--ID: 1778786397315-->
END

---

<!--
Original Flashcard ID: 1735205749499
-->

START
NI-SZZ


Jak funguje **mocninná metoda**? (obecně)

Back:

![](../../Assets/Pasted%20image%2020241113123657.png)

<!-- InformallySaidStart -->

Vezmu nějaký původní vektor a iterativně ho násobím maticí $M$.

Proto jsem schopný to napsat ve tvaru $M^k$ - odtud název mocninná metoda.

<!-- InformallySaidEnd -->
<!--ID: 1778786397318-->
END

---

<!--
Original Flashcard ID: 1735205749502
-->

START
NI-SZZ


Jak funguje **mocninná metoda**?

Back:

![](../../Assets/Pasted%20image%2020241113125152.png)
![](../../Assets/Pasted%20image%2020241113125159.png)
![](../../Assets/Pasted%20image%2020241113125205.png)
![](../../Assets/Pasted%20image%2020241113125211.png)
<!--ID: 1778786397321-->
END

---

<!--
Original Flashcard ID: 1735205749504
-->

START
NI-SZZ


Co je **kritérium zastavení** v mocninné metodě?

Back:

![](../../Assets/Pasted%20image%2020241113125232.png)
<!--ID: 1778786397324-->
END

---

<!--
Original Flashcard ID: 1735205749201
-->

START
NI-SZZ


Definice: soustava lineárních rovnic

Back:

![](../../Assets/Pasted%20image%2020241221134234.png)
<!--ID: 1778786397326-->
END

---

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

<!--
Original Flashcard ID: 1735205749211
-->

START
NI-SZZ


Definice: Iterační metoda

Back:

![](../../Assets/Pasted%20image%2020241221135639.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221135708.png)
![](../../Assets/Pasted%20image%2020241221135649.png)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221135717.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397332-->
END

---

<!--
Original Flashcard ID: 1735205749213
-->

START
NI-SZZ


Definice: **vektor chyby**

Back:

![](../../Assets/Pasted%20image%2020241221135931.png)
<!--ID: 1778786397334-->
END

---

<!--
Original Flashcard ID: 1735205749216
-->

START
NI-SZZ


Definice: spektrální poloměr

Back:

![](../../Assets/Pasted%20image%2020241221140136.png)
<!--ID: 1778786397337-->
END

---

<!--
Original Flashcard ID: 1735205749218
-->

START
NI-SZZ


Věta: co platí pro spektrální poloměr

Back:

![](../../Assets/Pasted%20image%2020241221140115.png)
<!--ID: 1778786397339-->
END

---

<!--
Original Flashcard ID: 1735205749221
-->

START
NI-SZZ


Důsledek: iterační metoda konverguje $\Leftrightarrow \dots$

Back:

![](../../Assets/Pasted%20image%2020241221140153.png)
<!--ID: 1778786397342-->
END

---

<!--
Original Flashcard ID: 1735205749223
-->

START
NI-SZZ


Jak se dá odhadnout rychlost konvergence iterační metody?

Back:

![](../../Assets/Pasted%20image%2020241221140450.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221140502.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397345-->
END

---

<!--
Original Flashcard ID: 1735205749226
-->

START
NI-SZZ


Kdy se iterační metoda zastaví?

Back:

![](../../Assets/Pasted%20image%2020241221140545.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221140600.png)
![](../../Assets/Pasted%20image%2020241221140607.png)
![](../../Assets/Pasted%20image%2020241221140626.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397347-->
END

---

<!--
Original Flashcard ID: 1735205749228
-->

START
NI-SZZ


Jak lze volit matici $Q$ v iterační metodě? (3)

Back:

![](../../Assets/Pasted%20image%2020241221141155.png)
<!--ID: 1778786397350-->
END

---

<!--
Original Flashcard ID: 1735205749231
-->

START
NI-SZZ


Jak funguje Richardsonova metoda?

Back:

Za $Q$ se dá jednotková matice.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141222.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397353-->
END

---

<!--
Original Flashcard ID: 1735205749233
-->

START
NI-SZZ


Jak funguje Jacobiho metoda?

Back:

Za $Q$ se dosadí diagonála

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141247.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397356-->
END

---

<!--
Original Flashcard ID: 1735205749235
-->

START
NI-SZZ


Tvrzení: konvergence Jacobiho metody

Back:

![](../../Assets/Pasted%20image%2020241221141327.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221141336.png)

<!-- ExplanationEnd -->
<!--ID: 1778786397358-->
END

---

<!--
Original Flashcard ID: 1735205749238
-->

START
NI-SZZ


Jak funguje SOR metoda?

Back:

$Q = \frac{1}{\omega}D+L$ kde $\omega \in \mathbb{R} \setminus \set 0$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141349.png)

<!-- DetailInfoEnd -->
<!--ID: 1778786397361-->
END

---

<!--
Original Flashcard ID: 1735205749243
-->

START
NI-SZZ


Algoritmus: **Iterativní metoda**

Back:

![](../../Assets/Pasted%20image%2020241221141630.png)
<!--ID: 1778786397364-->
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

Back:

$$x = \text{NaN}$$
<!--ID: 1778786397383-->
END

---

<!--
Original Flashcard ID: 1735205749517
-->

START
NI-SZZ


Pokud $e = 2^d-1$ a $m = 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot \text{Inf}$$
<!--ID: 1778786397386-->
END

---

<!--
Original Flashcard ID: 1735205749519
-->

START
NI-SZZ


Pokud $0 <e < 2^d-1$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot (1.m_2)_2 \cdot 2^{e-b}$$

(tzv. **normalizovaná čísla**)
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

(tzv. **subnormální čísla**)
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

Reálná čísla, která lze reprezentovat podle standardu IEEE-754 (znaménko, mantisa, exponent) se nazývají **strojová čísla**.

Tzn. jsou to reálná čísla, co mají **konečný** binární rozvoj.

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

<!-- DetailInfoStart -->

Nejbližší je určeno podle vybrané strategie:

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


Co je **zaokrouhlovací jednotka**?

Back:

![](../../Assets/Pasted%20image%2020241113113706.png)
![](../../Assets/Pasted%20image%2020241113113721.png)
![](../../Assets/Pasted%20image%2020241113113731.png)
<!--ID: 1778786397413-->
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


Co je **krácení** v kontextu chyb?

Back:

Tím že při výpočtu nemám dostatek cifer pro výpočet, tak je mantisa výsledku méně přesná.

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

(pozn. tohle asi není tak důležitý umět)

Back:

![](../../Assets/Pasted%20image%2020241113114919.png)

<!-- ExplanationStart -->

Říká nám to, kolik bitů ztratíme, když se stane **krácení**.

<!-- ExplanationEnd -->
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

<!--
Original Flashcard ID: 1735205749194
-->

START
NI-SZZ


Definice: **podmíněnost** úlohy

Back:

![](../../Assets/Pasted%20image%2020241221133641.png)
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

Pozn. Toto číslo se spíš odhaduje, nepočítá se.

<!-- ExplanationStart -->

Nahoře je relativní změna výstupu, dole je relativní změna vstupu. To pak porovnávám.

Např. do vstupu mi může jít výstup jiného algoritmu (už s chybou). Můžu pak srovnávat, jak se mi třeba změní výstup, když mám nějakou chybu ve vstupu.

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
<!--ID: 1778786397439-->
END

---

<!--
Original Flashcard ID: 1735205749206
-->

START
NI-SZZ


Definice: přidružená maticová norma

Back:

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


Definice: číslo podmíněnosti

Back:

![](../../Assets/Pasted%20image%2020241221135243.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221135254.png)
![](../../Assets/Pasted%20image%2020241221135259.png)
![](../../Assets/Pasted%20image%2020241221135305.png)

<!-- ExampleEnd -->
<!--ID: 1778786397445-->
END

---
