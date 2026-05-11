---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-10 NI-VSM

> NI-SPOL-10 (NI-VSM)
> Systémy hromadné obsluhy a jejich limitní vlastnosti. Souvislost s Markovskými řetězci se spojitým časem.

## Systémy hromadné obsluhy a jejich limitní vlastnosti

<!--
Original Flashcard ID: 1746599649092
-->

START
NI-SZZ


Definice: **Model hromadné obsluhy**

Back:

Nezapomenout na nezávislost - je to důležitý!

![](../../Assets/Pasted%20image%2020250423090622.png)

Pozn. takhle to chtějí popsat u zkoušky a u státnic.
<!--ID: 1778521859382-->
END

---

<!--
Original Flashcard ID: 1746599649104
-->

START
NI-SZZ


Definice: **Proces hromadné obsluhy**

Back:

![](../../Assets/Pasted%20image%2020250423090638.png)
<!--ID: 1778521859390-->
END

---

<!--
Original Flashcard ID: 1746599649114
-->

START
NI-SZZ


Co je $\varrho$ v systému hromadné obsluhy? Jak se spočte? Jaké může mít hodnoty?

Back:

$\varrho$ je hustota zákazníků

Jak se spočte
$$\varrho = \frac{\lambda}{c\mu}$$

- $\varrho > 1$, systém se přehltí (s pravděpodobností 1)
- $\varrho <1$, systém se ustálí na stabilním rovnovážném rozdělení

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250423100453.png)

Je to jakoby hustota obsluhy.

Když je hustota 1, tak to je přesně na hranici toho, že to ten systém stíhá. Když to bude víc, tak to přehltí systém. (Když jsem na 1, tak ten systém bude hodně citlivý na nějaký mini přetížení).

<!-- DetailInfoEnd -->
<!--ID: 1778521859393-->
END

---

<!--
Original Flashcard ID: 1746599649122
-->

START
NI-SZZ


Definice: **Kandallova notace** ($A|S|c$ notace)

Back:

![](../../Assets/Pasted%20image%2020250423090710.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250423090724.png)

<!-- ExampleEnd -->
<!--ID: 1778521859395-->
END

---

<!--
Original Flashcard ID: 1748105582469
-->

START
NI-SZZ


Definice: **Poissonovo rozdělení** (Poissonova aproximace) - předpis, parametry, jak je definováno

Pozn. tohle je dobrý umět, tu definici, protože to bylo v jedné zkoušce z fitwiki :)

Back:

**Předpis**: $X \sim Poisson(\lambda)$
**Parametry**:

- $\lambda$ - počet pokusů
  **Definice**:
- $P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250220120403.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859398-->
END

---

<!--
Original Flashcard ID: 1748105876213
-->

START
NI-SZZ


Jaká je střední hodnota **Poissonovo rozdělení**?

Back:

$$EX = \lambda$$
<!--ID: 1778521859401-->
END

---

<!--
Original Flashcard ID: 1748105876217
-->

START
NI-SZZ


Jaký je rozptyl **Poissonovo rozdělení**?

Back:

$$varX=\lambda$$
<!--ID: 1778521859404-->
END

---

<!--
Original Flashcard ID: 1748081595839
-->

START
NI-SZZ


Čemu je rovna střední doba příchodu a střední doba zpracování požadavku u systémů hromadné obsluhy?

Back:

Střední doba příchodu:
$EA = \frac{1}{\lambda}$

Střední doba zpracování:
$ES = \frac{1}{\mu}$

Tags: exam
<!--ID: 1778521859407-->
END

---

<!--
Original Flashcard ID: 1746599649130
-->

START
NI-SZZ


Jak vypadá systém $M|M|1$?

- Matice intenzit
- Jak se spočte stacionární rozdělení

Back:

![](../../Assets/Pasted%20image%2020250423090738.png)
<!--ID: 1778521859410-->
END

---

<!--
Original Flashcard ID: 1746599649138
-->

START
NI-SZZ


Věta: Existence stacionárního rozdělení pro $M|M|1$

Back:

![](../../Assets/Pasted%20image%2020250423090829.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250423090836.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859412-->
END

---

<!--
Original Flashcard ID: 1746599649145
-->

START
NI-SZZ


Stacionární vlastnosti $M|M|1$:

Nechť je systém ve stacionárním stavu:

- Čemu je rovna $EN$ - střední počet zákazníků v systému
- Čemu je rovna $EN_s$ - střední počet zákazníků na serveru
- Čemu je rovna $EN_f$ - střední počet zákazníků ve frontě

Na tohle se nás prý můžou zeptat (ty střední hodnoty)

Back:

$$EN = \frac{\varrho}{1-\varrho}$$

$$EN_s = \varrho$$

$$EN_f = \frac{\varrho^2}{1-\varrho}$$

![](../../Assets/Pasted%20image%2020250423090859.png)
<!--ID: 1778521859415-->
END

---

<!--
Original Flashcard ID: 1746599649152
-->

START
NI-SZZ


Definice: Doba čekání ve frontě

Back:

![](../../Assets/Pasted%20image%2020250423090921.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250423090929.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859418-->
END

---

<!--
Original Flashcard ID: 1746599649160
-->

START
NI-SZZ


Pozorování: Jaké rozdělení má u $M|M|1$ doba čekání ve frontě?

Back:

![](../../Assets/Pasted%20image%2020250423090951.png)
<!--ID: 1778521859420-->
END

---

<!--
Original Flashcard ID: 1746599649167
-->

START
NI-SZZ


Jak vypadá systém $M|M|\infty$?

- Matice intenzit
- Jak se spočte stacionární rozdělení

Back:

![](../../Assets/Pasted%20image%2020250423091014.png)
<!--ID: 1778521859423-->
END

---

<!--
Original Flashcard ID: 1746599649174
-->

START
NI-SZZ


Jak vypadá stacionární rozdělení pro systém $M|M|\infty$?

Back:

Aneb co mi toto říká je, že se ten celý systém chová jako Poissonovo rozdělení s tím parametrem $\lambda / \mu$.

![](../../Assets/Pasted%20image%2020250423091059.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250423091111.png)

<!-- ExampleEnd -->
<!--ID: 1778521859426-->
END

---

<!--
Original Flashcard ID: 1746599649182
-->

START
NI-SZZ


Jak vypadá systém $M|M|c$?

- Matice intenzit

Back:

![](../../Assets/Pasted%20image%2020250423091133.png)
<!--ID: 1778521859429-->
END

---

<!--
Original Flashcard ID: 1746599649190
-->

START
NI-SZZ


Pozorování: Jak vypadá stacionární rozdělení systému $M|M|c$?

Back:

![](../../Assets/Pasted%20image%2020250423091207.png)
<!--ID: 1778521859432-->
END

---

<!--
Original Flashcard ID: 1746599649198
-->

START
NI-SZZ


Věta: **Littleho věta**

Back:

![](../../Assets/Pasted%20image%2020250423091224.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250423091239.png)

<!-- ExampleEnd -->

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250423091258.png)
![](../../Assets/Pasted%20image%2020250423091305.png)
![](../../Assets/Pasted%20image%2020250423091316.png)
![](../../Assets/Pasted%20image%2020250423091325.png)

<!-- ProofEnd -->
<!--ID: 1778521859434-->
END

---

<!--
Original Flashcard ID: 1746599649205
-->

START
NI-SZZ


Jak vypadá systém $G|G|1$?

Resp. jak se dostaneme k spočtení $\pi_0$?

Back:

![](../../Assets/Pasted%20image%2020250423091348.png)
<!--ID: 1778521859437-->
END

---

<!--
Original Flashcard ID: 1747933518468
-->

START
NI-SZZ


Jak se spočte $EN$ v systému?

Aneb střední počet požadavků/zákazníků v systému z dlouhodobého hlediska.

Back:

Pro $M|M|1$ ve stacionárním stavu:
$$EN = \sum_{n=0}^\infty n \pi_n = \frac{\rho}{1-\rho}$$

Pro $M|M|\infty$ je to jen $\rho$
<!--ID: 1778521859440-->
END

---

<!--
Original Flashcard ID: 1746599649425
-->

START
NI-SZZ


Jak funguje systém $M|G|\infty$?

- na co se ptáme
- čemu je rovna $p(s)$
- čemu je pak rovna střední hodnota?

Back:

Přijde požadavek a je v systému nějakou dobu. Já se ptám, jaká je pravděpodobnost, že v bodě $t$ tam ten požadavek ještě bude.

Přijde požadavek v čase $s$ a my se ptáme, jaká je pravděpodobnost, že tam ještě bude v čase $t$. Tato pravděpodobnost je $p(s) := 1- G(t-s)$

To když dosadíme do nehomogenního thinningu, tak nám vyjde poisson se střední hodnotou
![](../../Assets/Pasted%20image%2020250517162031.png)

Pro $t \rightarrow \infty$ to pak vychází $\frac{\lambda}{\mu}$
![](../../Assets/Pasted%20image%2020250517162120.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501143115.png)
![](../../Assets/Pasted%20image%2020250501143124.png)
![](../../Assets/Pasted%20image%2020250501143134.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859443-->
END

---

<!--
Original Flashcard ID: 1746599649215
-->

START
NI-SZZ


Čím se zabývá hromadná obsluha v síti?

Back:

Hlavní myšlenka: dáme dva servery do série za sebe, každý má nějakou frontu

![](../../Assets/Pasted%20image%2020250501154047.png)
<!--ID: 1778521859445-->
END

---

<!--
Original Flashcard ID: 1746599649221
-->

START
NI-SZZ


Věta: Systém hromadné obsluhy $M|M|c$, pak proces odchodů

Back:

![](../../Assets/Pasted%20image%2020250501154125.png)

ve stacionárním stavu = rozdělení v každém čase je stacionární

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020250501154149.png)

<!-- ExplanationEnd -->
<!--ID: 1778521859448-->
END

---

<!--
Original Flashcard ID: 1746599649228
-->

START
NI-SZZ


Jak vypadají dva servery v sérii (stacionární stav)?

- Jaký $M|M|c$ má první server
- Jaký $M|M|c$ má druhý server
- Jaká je podmínka stability systému?

Back:

![](../../Assets/Pasted%20image%2020250501154213.png)
<!--ID: 1778521859451-->
END

---

<!--
Original Flashcard ID: 1746599649236
-->

START
NI-SZZ


Jak vypadají dva servery $M|M|1$ v sérii (stacionární rozdělení)

Back:

![](../../Assets/Pasted%20image%2020250501154245.png)
<!--ID: 1778521859454-->
END

---

<!--
Original Flashcard ID: 1746599649242
-->

START
NI-SZZ


Jak vypadají intenzity přechodu pro dva servery $M|M|1$?

Back:

![](../../Assets/Pasted%20image%2020250501154311.png)

Např. na prvním serveru mám $m-1$ zákazníků a na druhém $n$ a pak mi přijde zákazník na první server a jsem v $(m,n)$ - první horizontální šipka.
<!--ID: 1778521859456-->
END

---

<!--
Original Flashcard ID: 1746599649249
-->

START
NI-SZZ


Věta: **stacionární rozdělení pro dva servery** $M|M|1$

(čemu se rovná)

Back:

![](../../Assets/Pasted%20image%2020250501154419.png)
<!--ID: 1778521859459-->
END

---

<!--
Original Flashcard ID: 1746599649256
-->

START
NI-SZZ


Věta: stacionární rozdělení pro **uzavřenou** soustavu $L$ serverů

(Pozn. tohle jsme s Maruškou usoudili, že to nemá cenu se učit :D)

Back:

![](../../Assets/Pasted%20image%2020250501154451.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501154501.png)
![](../../Assets/Pasted%20image%2020250501154508.png)
![](../../Assets/Pasted%20image%2020250501154526.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859462-->
END

---

<!--
Original Flashcard ID: 1746599649263
-->

START
NI-SZZ


Jak vypadá otevřená soustava serverů?

(Pozn. tohle jsme s Maruškou usoudili, že to nemá cenu se učit :D)

Back:

![](../../Assets/Pasted%20image%2020250501154549.png)
![](../../Assets/Pasted%20image%2020250501154558.png)
<!--ID: 1778521859464-->
END

---

<!--
Original Flashcard ID: 1746599649270
-->

START
NI-SZZ


Věta: co platí pro **otevřenou** soustavu $L$ serverů

(Pozn. tohle jsme s Maruškou usoudili, že to nemá cenu se učit :D)

Back:

![](../../Assets/Pasted%20image%2020250501154622.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250501154635.png)
![](../../Assets/Pasted%20image%2020250501154642.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859467-->
END

---

<!--
Original Flashcard ID: 1746599649277
-->

START
NI-SZZ


Jaké stacionární vlastnosti má otevřená soustava serverů?

(Pozn. tohle jsme s Maruškou usoudili, že to nemá cenu se učit :D)

Back:

![](../../Assets/Pasted%20image%2020250501154714.png)
<!--ID: 1778521859470-->
END

---

## Souvislost s Markovskými řetězci se spojitým časem
