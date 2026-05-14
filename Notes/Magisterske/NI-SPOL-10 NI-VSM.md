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

Nezapomenout na nezávislost $c$ a nezávislost veličin $A$ a $S$ (podle Hrabáka to je důležitý)

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

Popisuje nám systém hromadné obsluhy $A|S|c|K|N|D$:
- $A$ - **rozdělení časů příchodu** $F_A$
- $S$ - **rozdělení časů obsluhy** $F_S$
- $c$ - **počet obslužných míst**
- $K$ - kapacita systému (pokud neuvedeno tak $+\infty$)
- $N$ - velikost populace (pokud neuvedeno tak $+\infty$)
- $D$ - typ obsluhy (pokud neuvedeno tak FIFO)

Rozdělení $A$ a $S$ jsou značena:
- $M, M(\lambda)$ - exponenciální rozdělení
- $G$ -obecné/neznámé nebo známé neexponenciální rozdělení
- $D, D(d)$ - degenerované rozdělení v hodnotě $d$

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
- $\lambda>0$
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


Jaká je střední hodnota **Poissonova rozdělení**?

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


Jaký je rozptyl **Poissonova rozdělení**?

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

Jak si zapamatovat stacionární rozdělení:
![](../../Assets/Pasted%20image%2020260514160947.png)
![](../../Assets/Pasted%20image%2020260514160956.png)
<!--ID: 1778521859410-->
END

---

<!--
Original Flashcard ID: 1746599649138
-->

START
NI-SZZ


Věta: Existence **stacionárního rozdělení** pro $M|M|1$ a **jak se spočte**

Back:

![](../../Assets/Pasted%20image%2020250423090829.png)

<!-- ExplanationStart -->
- $\varrho = \lambda/\mu$ je přímo ze vzorečku pro $\varrho$, když $c=1$

První možnost říká, že se nám ty pravděpodobnosti dlouhodobě ustálí na tom $\pi$.

Druhá možnost říká, že se systém přeplní, takže tam budou neustále narůstat zákazníci, takže šance, že tam bude jeden konkrétní počet zákazníků se blíží nule (když těch zákazníků tam bude nekonečno).

<!-- ExplanationEnd -->


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

Dále platí, že $EN = EN_s + EN_f$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250423090859.png)
<!-- DetailInfoEnd -->
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


Jak vypadá **stacionární rozdělení** pro systém $M|M|\infty$?

Back:

Stacionární rozdělení je Poissonovo s parametrem $\lambda/\mu$

(ten vzoreček dole je jen dosazení $\lambda/\mu$ jako parametr toho Poissonova rozdělení)

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

Jak spočteme $\pi_0$ v systému $G|G|1$ s využitím Littleho věty?

Back:

Dobu strávenou $k$-tým zákazníkem v systému rozdělíme na:

$$T_k = W_k + S_k$$

kde:

- $W_k$ je doba čekání ve frontě,
- $S_k$ je doba obsluhy.
- $ES_k = 1/\mu$ - střední doba obsluhy

Pomocí Littleho věty:

$$EN = \lambda ET_k$$

$$EN_f = \lambda EW_k$$

Protože $EN =  EN_f + EN_s = EN_f + (1-\pi_0)$, dostaneme:

$$\pi_0 = 1- (EN-EN_f) = \text{dosadíme a upravíme} = 1 - \frac{\lambda}{\mu}$$

![](../../Assets/Pasted%20image%2020250423091348.png)
<!--ID: 1778521859437-->
END

---

<!--
Original Flashcard ID: 1747933518468
-->

START
NI-SZZ


Jak se spočte $EN$ v systému $M|M|1$ a $M|M|\infty$?

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


## Souvislost s Markovskými řetězci se spojitým časem

START
NI-SZZ

Proč lze systém $M|M|1$ chápat jako **Markovský řetězec se spojitým časem** proč ne $M|D(1)|1$?

Back:

Proč ano $M|M|1$
- Příchody se řídí Poissonovým procesem s intenzitou $\lambda$
- Doby obsluhy mají exponenciální rozdělení s parametrem $\mu$
- Jedná se tedy o homogenní markovský řetězec se stavy $\{0,1,2,\dots\}$

Proč ne $M|D(1)|1$:
- Příchody jsou opět Poissonový proces
- Doba obsluhy je vždy konstantní $\mu = 1$
- Nejedná se o markovský řetězec, protože doba obsluhy není bezpaměťová. Závisí totiž na tom, kdy jsem začal obsluhovat jednotlivé zákazníky (protože ta doba obsluhy není random).

![](../../Assets/Pasted%20image%2020260514172647.png)

(Pozn. tuhle kartičku jsem přidal pomocí AI, protože byla prázdná sekce "Souvislost s Markovskými řetězci se spojitým časem")
<!--ID: 1778764368759-->
END

---

START
NI-SZZ


Jaké jsou **intenzity přechodu** u systému $M|M|1$ chápaného jako Markovský řetězec se spojitým časem?

Back:

Markovský řetězec vypadá takhle:
- stav $n$ je počet zákazníků v systému
- přechod $n \to n+1 \quad \text{s intenzitou } \lambda$ (=příchod zákazníka)
- přechod $n \to n-1 \quad \text{s intenzitou } \mu \quad \text{pro } n \geq 1$ (=odchod zákazníka)

Celý systém se chová jako markovský proces.

(Pozn. tuhle kartičku jsem přidal pomocí AI, protože byla prázdná sekce "Souvislost s Markovskými řetězci se spojitým časem")
<!--ID: 1778764368771-->
END

---

START
NI-SZZ

Co popisuje **stacionární rozdělení** u systému hromadné obsluhy?

Back:

Složka stacionárního rozdělení $\pi_n$ nám říká, jaká je dlouhodobá pravděpodobnost, že v systému bude právě $n$ zákazníků. 

(za předpokladu, že stacionární rozdělení existuje)
<!--ID: 1778764368774-->
END

---
