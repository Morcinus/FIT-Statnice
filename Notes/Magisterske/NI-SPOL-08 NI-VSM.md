---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-08 NI-VSM

> NI-SPOL-08 (NI-VSM)
> Markovské řetězce s diskrétním časem. Jejich limitní vlastnosti.

## Markovské řetězce s diskrétním časem

<!--
Original Flashcard ID: 1746518364752
-->

START
NI-SZZ


Definice: **reálný náhodný proces**

Back:

![](../../Assets/Pasted%20image%2020250411135609.png)

![](../../Assets/Pasted%20image%2020250411135615.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411135624.png)

<!-- ExampleEnd -->
<!--ID: 1778521859628-->
END

---

<!--
Original Flashcard ID: 1746518364754
-->

START
NI-SZZ


Definice: **trajektorie/realizace náhodného procesu**

Back:

![](../../Assets/Pasted%20image%2020250411135645.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411135657.png)

<!-- ExampleEnd -->
<!--ID: 1778521859631-->
END

---

<!--
Original Flashcard ID: 1746518364757
-->

START
NI-SZZ


Co jsou:

- spočetná množina stavů $S$
- diskrétní čas $T$
- rozdělení v čase
- matice pravděpodobností přechodu

Back:

![](../../Assets/Pasted%20image%2020250411135832.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411135753.png)

<!-- ExampleEnd -->
<!--ID: 1778521859633-->
END

---

<!--
Original Flashcard ID: 1746518364760
-->

START
NI-SZZ


Definice: **Markovský řetězec s diskrétním časem**

Back:

![](../../Assets/Pasted%20image%2020250411135848.png)
<!--ID: 1778521859636-->
END

---

<!--
Original Flashcard ID: 1746518364762
-->

START
NI-SZZ


**Podmínky ekvivalentní markovské podmínce**

Back:

![](../../Assets/Pasted%20image%2020250411135913.png)
<!--ID: 1778521859639-->
END

---

<!--
Original Flashcard ID: 1746518364765
-->

START
NI-SZZ


Věta: **Náhodný proces je markovský** $\Leftrightarrow \dots$

(ekvivalentní definice markovského řetězce)

Back:

![](../../Assets/Pasted%20image%2020250411135941.png)
<!--ID: 1778521859641-->
END

---

<!--
Original Flashcard ID: 1746518364768
-->

START
NI-SZZ


Věta: **Chapman-Kolmogorova rovnice**

Back:

![](../../Assets/Pasted%20image%2020250411135956.png)
<!--ID: 1778521859644-->
END

---

<!--
Original Flashcard ID: 1746518364771
-->

START
NI-SZZ


Definice: **homogenní markovský řetězec** + jeho matice přechodu

Back:

![](../../Assets/Pasted%20image%2020250411140017.png)
<!--ID: 1778521859646-->
END

---

<!--
Original Flashcard ID: 1746518364774
-->

START
NI-SZZ


Důsledek: **Co platí pro homogenní markovský řetězec**?

$P(m,m+n)= \ ???= \ ???$

Back:

![](../../Assets/Pasted%20image%2020250411140037.png)
<!--ID: 1778521859649-->
END

---

<!--
Original Flashcard ID: 1746518364777
-->

START
NI-SZZ


Jaký tvar má Chapman-Kolmogorova rovnice pro **homogenní markovský řetězec**?

$P(n+m)= \ ???= \ ???$

Back:

![](../../Assets/Pasted%20image%2020250411140114.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411140130.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859651-->
END

---

<!--
Original Flashcard ID: 1746518364779
-->

START
NI-SZZ


Co platí pro $p(n)$ **homogenního markovského řetězce**?

$p(n) = \ ??? = \ ???$

Back:

![](../../Assets/Pasted%20image%2020250411140148.png)

<!-- ExplanationStart -->

$p(n)$ je rozdělení v čase $n$

<!-- ExplanationEnd -->

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250411140157.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859654-->
END

---

<!--
Original Flashcard ID: 1746518364782
-->

START
NI-SZZ


Lemma: Matice přechodu $P$ je **stochastická matice**, to znamená $\dots$ (2)

Back:

![](../../Assets/Pasted%20image%2020250411140220.png)
<!--ID: 1778521859657-->
END

---

<!--
Original Flashcard ID: 1746518364788
-->

START
NI-SZZ


Lemma: **součin stochastických matic**

Back:

![](../../Assets/Pasted%20image%2020250411140232.png)
<!--ID: 1778521859660-->
END

---

<!--
Original Flashcard ID: 1746518364793
-->

START
NI-SZZ


Důsledek: existence homogenního markovského řetězce s diskrétním časem pro stochastickou matici

Back:

![](../../Assets/Pasted%20image%2020250411140254.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411140301.png)

<!-- ExampleEnd -->
<!--ID: 1778521859662-->
END

---

<!--
Original Flashcard ID: 1746518364796
-->

START
NI-SZZ


Definice: **stacionární rozdělení** řetězce

Back:

![](../../Assets/Pasted%20image%2020250411140335.png)

<!-- InformallySaidStart -->

Stacionární rozdělení mi říká, v jakých stavech budu s jakou pravděpodobností dlouhodobě.

Např. pro $(0.2, 0.8)$ mi to říká, že v prvním stavu budu $20\%$ z dlouhodobého hlediska času.

<!-- InformallySaidEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411140356.png)

<!-- ExampleEnd -->
<!--ID: 1778521859665-->
END

---

<!--
Original Flashcard ID: 1746518364733
-->

START
NI-SZZ


Jak funguje metoda maximální věrohodnosti (MLE)?

Back:

![](../../Assets/Pasted%20image%2020250410115647.png)
<!--ID: 1778521859668-->
END

---

<!--
Original Flashcard ID: 1746518364735
-->

START
NI-SZZ


Jak se dá odhadnout matice přechodu pomocí MLE?

Back:

![](../../Assets/Pasted%20image%2020250410115702.png)
![](../../Assets/Pasted%20image%2020250410115709.png)
<!--ID: 1778521859670-->
END

---

<!--
Original Flashcard ID: 1746518364738
-->

START
NI-SZZ


Pozorování: jak vypadá maximálně věrohodný odhad matice přechodu $\textbf{P}$?

Back:

![](../../Assets/Pasted%20image%2020250410115742.png)
<!--ID: 1778521859673-->
END

---

## Jejich limitní vlastnosti

<!--
Original Flashcard ID: 1746518365057
-->

START
NI-SZZ


Jak se spočte $N$?

Back:

![](../../Assets/Pasted%20image%2020250411160037.png)
<!--ID: 1778521859676-->
END

---

<!--
Original Flashcard ID: 1746518365059
-->

START
NI-SZZ


Jak se spočte $U$?

Back:

![](../../Assets/Pasted%20image%2020250411160048.png)
<!--ID: 1778521859678-->
END

---

<!--
Original Flashcard ID: 1746518365062
-->

START
NI-SZZ


Jak se spočte $N_\circ$? (to kolečko má být vyplněné)

Back:

![](../../Assets/Pasted%20image%2020250411160145.png)
<!--ID: 1778521859681-->
END

---

<!--
Original Flashcard ID: 1746518364660
-->

START
NI-SZZ


Definice: **trvalý (rekurentní)** stav

Back:

![](../../Assets/Pasted%20image%2020250411140549.png)

<!-- ExplanationStart -->

Rekurentní stav = stav, do kterého se řetězec dřív nebo později určitě vrátí, pokud z něj jednou vyjde.

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411140613.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859684-->
END

---

<!--
Original Flashcard ID: 1746518364662
-->

START
NI-SZZ


Definice: **přechodný (transientní)** stav

Back:

![](../../Assets/Pasted%20image%2020250411140603.png)

<!-- ExplanationStart -->

Přechodný stav = stav, ze kterého když někdy vyjdu, tak není 100% jistý, že se do něj vrátím

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411140613.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859686-->
END

---

<!--
Original Flashcard ID: 1746518364665
-->

START
NI-SZZ


Definice: **Čas první návštěvy**

Back:

![](../../Assets/Pasted%20image%2020250411140632.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250411140637.png)

<!-- ImageEnd -->
<!--ID: 1778521859689-->
END

---

<!--
Original Flashcard ID: 1746518364667
-->

START
NI-SZZ


Definice $f_{ij}(n)$ a $f_{ij}$ - v kontextu první návštěvy stavů

Back:

![](../../Assets/Pasted%20image%2020250411140700.png)
<!--ID: 1778521859692-->
END

---

<!--
Original Flashcard ID: 1746518364670
-->

START
NI-SZZ


Důsledek: Vztah $f_{ii}$ a přechodných a trvalých stavů

Back:

![](../../Assets/Pasted%20image%2020250411140723.png)
<!--ID: 1778521859694-->
END

---

<!--
Original Flashcard ID: 1746518364673
-->

START
NI-SZZ


Definice: **Střední doba návratu** do stavu

Back:

![](../../Assets/Pasted%20image%2020250411140738.png)
<!--ID: 1778521859697-->
END

---

<!--
Original Flashcard ID: 1746518364675
-->

START
NI-SZZ


Definice: **nenulový** a **nulový** stav

Back:

![](../../Assets/Pasted%20image%2020250411140753.png)

<!-- ExplanationStart -->

Nenulový - máme třeba stavy $A$ a $B$, mezi kterýma přeskakujeme. S nějakou střední hodnotou budu v tom savu

Nulový - máme např. nekonečně stavů $0,1,2,\dots$ a můžeme se posouvat o jeden dopředu nebo dozadu.

Když to odstartuju v $0$, tak se tam někdy vrátím, ale bude to za hrozně dlouho - střední hodnota bude nekonečno

<!-- ExplanationEnd -->
<!--ID: 1778521859699-->
END

---

<!--
Original Flashcard ID: 1746518364678
-->

START
NI-SZZ


Definice: **Periodicita stavu** (periodický a aperiodický stav)

Back:

![](../../Assets/Pasted%20image%2020250411140822.png)
<!--ID: 1778521859702-->
END

---

<!--
Original Flashcard ID: 1746518364681
-->

START
NI-SZZ


Věta: čemu je rovna limita $\textbf{P}_{ii}(n)$ a $\textbf{P}_{ji}(n)$ u **aperiodického stavu**

Back:

![](../../Assets/Pasted%20image%2020250411140841.png)
<!--ID: 1778521859705-->
END

---

<!--
Original Flashcard ID: 1746518364684
-->

START
NI-SZZ


Poznámka: čemu je rovna limita u **periodického stavu**

Back:

![](../../Assets/Pasted%20image%2020250411140857.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411140907.png)

<!-- ExampleEnd -->
<!--ID: 1778521859707-->
END

---

<!--
Original Flashcard ID: 1747408246566
-->

START
NI-SZZ


Vysvětli vlastními slovy, jak se liší následující typy stavů:

- **přechodný stav**
- **trvalý nulový**
- **trvalý nenulový**
- **trvalý nenulový aperiodický**
- **trvalý nenulový periodický**

Back:

- **přechodný stav** - z toho stavu můžu odejít a už se třeba nikdy nevrátit
- **trvalý nulový** - vždy se vrátím, ale po strašně dlouhé době (v průměru nekonečno) - např. když je nekonečno trvalých stavů
- **trvalý nenulový** - vždy se vrátím v rozumném čase (konečném)
- **trvalý nenulový aperiodický** - vždy se vrátím a ne v nějakém pravidelném cyklu
- **trvalý nenulový periodický** - vždy se vrátím v pevném cyklu (např. vždy po 5 krocích)
<!--ID: 1778521859710-->
END

---

<!--
Original Flashcard ID: 1746518364687
-->

START
NI-SZZ


Definice: **přechodný stav** (pomocí matice přechodu $P$)

Back:

![](../../Assets/Pasted%20image%2020250410114718.png)
<!--ID: 1778521859712-->
END

---

<!--
Original Flashcard ID: 1746518364689
-->

START
NI-SZZ


Definice: **trvalý nulový stav** (pomocí matice přechodu $P$)

Back:

![](../../Assets/Pasted%20image%2020250410114734.png)
<!--ID: 1778521859715-->
END

---

<!--
Original Flashcard ID: 1746518364692
-->

START
NI-SZZ


Definice: **trvalý nenulový aperiodický stav** (pomocí matice přechodu $P$)

Back:

![](../../Assets/Pasted%20image%2020250410114750.png)
<!--ID: 1778521859718-->
END

---

<!--
Original Flashcard ID: 1746518364695
-->

START
NI-SZZ


Definice: **trvalý nenulový periodický stav** (pomocí matice přechodu $P$)

Back:

![](../../Assets/Pasted%20image%2020250410114804.png)
<!--ID: 1778521859721-->
END

---

<!--
Original Flashcard ID: 1746518364698
-->

START
NI-SZZ


Definice: **dosažitelný stav**, vzájemně dosažitelné stavy

Back:

![](../../Assets/Pasted%20image%2020250410114826.png)
<!--ID: 1778521859723-->
END

---

<!--
Original Flashcard ID: 1746518364701
-->

START
NI-SZZ


Věta: dosažitelnost stavů a stejný typ

Back:

![](../../Assets/Pasted%20image%2020250410114839.png)
<!--ID: 1778521859726-->
END

---

<!--
Original Flashcard ID: 1746518364704
-->

START
NI-SZZ


Definice: **uzavřená** množina stavů

Back:

![](../../Assets/Pasted%20image%2020250410114855.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020250410114915.png)

<!-- ExplanationEnd -->
<!--ID: 1778521859728-->
END

---

<!--
Original Flashcard ID: 1746518364707
-->

START
NI-SZZ


Definice: **pohlcující** stav

Back:

![](../../Assets/Pasted%20image%2020250410114909.png)
<!--ID: 1778521859731-->
END

---

<!--
Original Flashcard ID: 1746518364710
-->

START
NI-SZZ


Definice: **nerozložitelná** množina stavů a **nerozložitelný markovský řetězec**

Back:

![](../../Assets/Pasted%20image%2020250410114932.png)
<!--ID: 1778521859734-->
END

---

<!--
Original Flashcard ID: 1746518364713
-->

START
NI-SZZ


Věta: **o jednoznačném rozkladu**

Back:

![](../../Assets/Pasted%20image%2020250410114944.png)

![](../../Assets/Pasted%20image%2020250410114953.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250410115001.png)
![](../../Assets/Pasted%20image%2020250410121951.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859736-->
END

---

<!--
Original Flashcard ID: 1746518364716
-->

START
NI-SZZ


Lemma: pokud je stav $i$ trvalý a $i \rightarrow j$, pak $\dots$

Back:

![](../../Assets/Pasted%20image%2020250410115024.png)
<!--ID: 1778521859739-->
END

---

<!--
Original Flashcard ID: 1746518364719
-->

START
NI-SZZ


Věta: **v řetězci s konečně mnoha stavy**, $\dots$ (2)

Back:

![](../../Assets/Pasted%20image%2020250410115040.png)
<!--ID: 1778521859742-->
END

---

<!--
Original Flashcard ID: 1746518364722
-->

START
NI-SZZ


Věta: jak v konečné množině stavů $S$ rozhodnout, jestli je stav _trvalý nenulový_ nebo _přechodný_?

Back:

![](../../Assets/Pasted%20image%2020250410115116.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250410115129.png)
![](../../Assets/Pasted%20image%2020250410115136.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859744-->
END

---

<!--
Original Flashcard ID: 1746518364724
-->

START
NI-SZZ


Věta: **o existenci stacionárního rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250410115150.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250410115204.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859747-->
END

---

<!--
Original Flashcard ID: 1746518364727
-->

START
NI-SZZ


Důsledek: Je li množina stavů $S$ konečná $\implies \ ???$

(hint: stacionární rozdělení)

Back:

![](../../Assets/Pasted%20image%2020250410115227.png)
<!--ID: 1778521859750-->
END

---

<!--
Original Flashcard ID: 1746518364730
-->

START
NI-SZZ


**Kolik je obecně stacionárních rozdělení**?

Back:

Tolik _lineárně nezávislých_ stacionárních rozdělení, kolik je množin $C_r$ (trvalé nenulové stavy).

![](../../Assets/Pasted%20image%2020250410115250.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250410115259.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859753-->
END

---

<!--
Original Flashcard ID: 1746518364741
-->

START
NI-SZZ


Věta: konzistence odhadu matice přechodu

Back:

![](../../Assets/Pasted%20image%2020250410115803.png)
<!--ID: 1778521859755-->
END

---

<!--
Original Flashcard ID: 1746518364744
-->

START
NI-SZZ


Jak funguje MCMC?

Back:

![](../../Assets/Pasted%20image%2020250410115830.png)
<!--ID: 1778521859758-->
END

---

<!--
Original Flashcard ID: 1746518364746
-->

START
NI-SZZ


Jak funguje Metropolis - Hastings algoritmus?

Back:

![](../../Assets/Pasted%20image%2020250410115847.png)
![](../../Assets/Pasted%20image%2020250410115853.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250410115906.png)
![](../../Assets/Pasted%20image%2020250410115913.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859760-->
END

---

<!--
Original Flashcard ID: 1746518364749
-->

START
NI-SZZ


Lemma: pro markovský řetězec $\dots$ platí, že je vektor $q$ stacionárním

Back:

![](../../Assets/Pasted%20image%2020250410115955.png)
<!--ID: 1778521859763-->
END

---

<!--
Original Flashcard ID: 1746518364612
-->

START
NI-SZZ


Mějme matici přechodů:
![](../../Assets/Pasted%20image%2020250516155913.png)

Co mi říkají $U_{ij}$, $N_{ik}$ a $N_{i \circ }$?

Back:

![](../../Assets/Pasted%20image%2020250516160210.png)

- $U_{ij}$ - Vezmu libovolný přechodný stav a chci zjistit pravděpodobnost, že první stav z $C$ (trvalých stavů) bude zrovna stav $j$
- $N_{ik}$ - střední počet přechodného stavu k, když začnu ve stavu i
  - Kolik času strávím ve stavu $k$ (kolikrát tam budu), než bude řetězec pohlcen v $C$
- $N_i$ - střední doba, jak dlouho trvá, než se pohltím do nějakého stavu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411112710.png)

![](../../Assets/Pasted%20image%2020250411112705.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411112724.png)

<!-- ExampleEnd -->
<!--ID: 1778521859766-->
END

---

<!--
Original Flashcard ID: 1746518364615
-->

START
NI-SZZ


Definice: čas absorbce

Back:

![](../../Assets/Pasted%20image%2020250411112735.png)

Označuje to čas, kdy přejdu z množiny přechodných stavů do trvalých.
<!--ID: 1778521859768-->
END

---

<!--
Original Flashcard ID: 1746518364618
-->

START
NI-SZZ


Lemma: Je-li množina stavů $S$ konečná, pak... (čas absorbce)

Back:

![](../../Assets/Pasted%20image%2020250411112756.png)
<!--ID: 1778521859771-->
END

---

<!--
Original Flashcard ID: 1746518364620
-->

START
NI-SZZ


Definice: $U_{ij}$

Back:

![](../../Assets/Pasted%20image%2020250411112827.png)

![](../../Assets/Pasted%20image%2020250516161230.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411112835.png)

![](../../Assets/Pasted%20image%2020250411130234.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859773-->
END

---

<!--
Original Flashcard ID: 1746518364623
-->

START
NI-SZZ


Jak získáme pravděpodobnost pohlcení na množině $C_r$?

(tzn. pravděpodobnost, že řetězec byl pohlcen tou množinou)

Back:

![](../../Assets/Pasted%20image%2020250411112859.png)
<!--ID: 1778521859776-->
END

---

<!--
Original Flashcard ID: 1746518364626
-->

START
NI-SZZ


Věta: Matice pravděpodobností pohlcení $U$ je řešením rovnice ...

Back:

![](../../Assets/Pasted%20image%2020250411112906.png)

$R$ - matice přechodu z přechodových do trvalých stavů
$T$ - matice přechodu z přechodových do přechodových stavů

Matice přechodu:
![](../../Assets/Pasted%20image%2020250516161641.png)
<!--ID: 1778521859779-->
END

---

<!--
Original Flashcard ID: 1746518364628
-->

START
NI-SZZ


Lemma: $A$ je čtvercová matice $\implies$ $(I-A)$ je regulární

Back:

![](../../Assets/Pasted%20image%2020250411112950.png)
<!--ID: 1778521859782-->
END

---

<!--
Original Flashcard ID: 1746518364631
-->

START
NI-SZZ


Věta: Pro matici pravděpodobností pohlecní platí $U = \ ???$

(Aneb jak spočíst $\textbf{U}$)

Back:

![](../../Assets/Pasted%20image%2020250411113028.png)

$I$ je jednotková matice

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250411113037.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859784-->
END

---

<!--
Original Flashcard ID: 1746518364634
-->

START
NI-SZZ


Jak invertovat matici 2x2?

(pozn. hledání inverze se prý bude očas vyskytovat u zkoušky)

Back:

Napíšeme si to vedle matice $E$ a zgemujem.

Např.
![](../../Assets/Pasted%20image%2020250522181145.png)
<!--ID: 1778521859787-->
END

---

<!--
Original Flashcard ID: 1746518364640
-->

START
NI-SZZ


Definice: **střední počet návštěv stavu**

Back:

![](../../Assets/Pasted%20image%2020250411113106.png)

$W_k$ je počet návštěv stavu $k$
<!--ID: 1778521859789-->
END

---

<!--
Original Flashcard ID: 1746518364643
-->

START
NI-SZZ


Věta: Co platí pro matici $N$? (resp. jak se dá spočítat)

Back:

![](../../Assets/Pasted%20image%2020250411113123.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250411113135.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859792-->
END

---

<!--
Original Flashcard ID: 1746518364647
-->

START
NI-SZZ


Definice: **fundamentální matice řetězce**

Back:

![](../../Assets/Pasted%20image%2020250411113151.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$
<!--ID: 1778521859795-->
END

---

<!--
Original Flashcard ID: 1746518364649
-->

START
NI-SZZ


Věta: Pro střední dobu do pohlcení při startu v $i \in T$ platí $\dots$ (aka **jak se spočítá**)

$N_{i \circ}  = \ ?$

Back:

![](../../Assets/Pasted%20image%2020250411113214.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411113224.png)

<!-- ExampleEnd -->
<!--ID: 1778521859798-->
END

---

<!--
Original Flashcard ID: 1746518364652
-->

START
NI-SZZ


Limita matice $C^n$

Back:

![](../../Assets/Pasted%20image%2020250411113245.png)
<!--ID: 1778521859800-->
END

---

<!--
Original Flashcard ID: 1746518364655
-->

START
NI-SZZ


Věta: Limita matice $P^n$

Back:

![](../../Assets/Pasted%20image%2020250411113300.png)

Ta $\widetilde{C}$ má v řádcích stacionární rozdělení podřetězce $C_r$ (viz detail).

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250411113309.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250411113245.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859803-->
END

---