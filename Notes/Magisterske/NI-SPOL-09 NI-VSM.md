---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-09 NI-VSM

> NI-SPOL-09 (NI-VSM)
> Markovské řetězce se spojitým časem. Souvislost s Markovskými řetezci s diskrétním časem a s Poissonovým procesem.

## Markovské řetězce se spojitým časem

<!--
Original Flashcard ID: 1746599649688
-->

START
NI-SZZ


Definice: **Markovský řetězec se spojitým časem**

Back:

![](../../Assets/Pasted%20image%2020250419140332.png)
![](../../Assets/Pasted%20image%2020250419140338.png)

<!--ID: 1778521859473-->
END

---

<!--
Original Flashcard ID: 1746599649695
-->

START
NI-SZZ


Věta: **náhodný (_spojitý_) proces je markovský právě tehdy když**

Back:

![](../../Assets/Pasted%20image%2020250419140359.png)

<!--ID: 1778521859476-->
END

---

<!--
Original Flashcard ID: 1746599649701
-->

START
NI-SZZ


Věta: **Chapman-Kolmogorov** (pro spojité markovské řetězce)

Back:

![](../../Assets/Pasted%20image%2020250419140410.png)

<!--ID: 1778521859478-->
END

---

<!--
Original Flashcard ID: 1746599649708
-->

START
NI-SZZ


Definice: **Homogenní markovský řetězec** (pro spojité markovské řetězce)

Back:

![](../../Assets/Pasted%20image%2020250419140431.png)

Tzn. je jakoby jedno kde v tom řetězci začnu

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250419140438.png)

<!-- ExampleEnd -->
<!--ID: 1778521859481-->
END

---

<!--
Original Flashcard ID: 1746599649715
-->

START
NI-SZZ


Definice: **Matice skokových intenzit**

Back:

![](../../Assets/Pasted%20image%2020250419140610.png)

Co mi to říká:

<!-- ExplanationStart -->

Matice intenzit mi říká několik věcí:

1. Jak rychle se kam systém přesouvá mezi jednotlivými časy.
2. Jak dlouho průměrně zůstanu v daném stavu (na diagonále)
3. Jaká je pravděpodobnost přechodu do jiného stavu.
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419140619.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250419140637.png)

<!-- ExampleEnd -->
<!--ID: 1778521859484-->
END

---

<!--
Original Flashcard ID: 1748180445895
-->

START
NI-SZZ


Jak lze spočíst $\textbf{Q}$, pokud známe $\textbf{P}(0)$?

Back:

$$\textbf{Q}=\textbf{P}'(0)$$

Tzn. prostě zderivuju každý prvek té matice $\textbf{P}$

<!--ID: 1778521859486-->
END

---

<!--
Original Flashcard ID: 1746599649722
-->

START
NI-SZZ


Věta: **Simulace procesu pomocí skokových intenzit**

Jak se z $\textbf{Q}$ dostane:

- Čas do výskoku z $i$
- Pravděpodobnost skoku z $i$ do $j$

Back:

1. $-\textbf{Q}_{ii}$
2. $\frac{\textbf{Q}_{ij}}{-\textbf{Q}_{ii}}$

![](../../Assets/Pasted%20image%2020250419140652.png)

<!--ID: 1778521859489-->
END

---

<!--
Original Flashcard ID: 1746599649435
-->

START
NI-SZZ


Věta: **Kolmogorova rovnice**

Back:

![](../../Assets/Pasted%20image%2020250419141051.png)
<!--ID: 1778521859492-->
END

---

<!--
Original Flashcard ID: 1746599649443
-->

START
NI-SZZ


Důsledek: rozdělení $p(t)$ a diferenciální rovnice

Back:

![](../../Assets/Pasted%20image%2020250422092318.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250422092334.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859495-->
END

---

<!--
Original Flashcard ID: 1746599649451
-->

START
NI-SZZ


Věta: **čemu je rovna matice přechodu** $P(t)$

(řešení kolmogorových rovnic)

Back:

![](../../Assets/Pasted%20image%2020250422092410.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250422092420.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859497-->
END

---

<!--
Original Flashcard ID: 1746599649457
-->

START
NI-SZZ


Definice: **stacionární rozdělení** (spojitý čas)

Back:

![](../../Assets/Pasted%20image%2020250422092437.png)
<!--ID: 1778521859500-->
END

---

<!--
Original Flashcard ID: 1746599649465
-->

START
NI-SZZ


Věta: Vektor $\pi$ **je stacionárním rozdělením právě tehdy když** (spojitý čas)

Back:

![](../../Assets/Pasted%20image%2020250422092511.png)
<!--ID: 1778521859503-->
END

---

<!--
Original Flashcard ID: 1746599649473
-->

START
NI-SZZ


Definice: **Markovský řetězec je nerozložitelný**

Back:

![](../../Assets/Pasted%20image%2020250422092530.png)
<!--ID: 1778521859506-->
END

---

<!--
Original Flashcard ID: 1746599649480
-->

START
NI-SZZ


Důsledek: Co stačí aby platilo, aby existovalo stacionární rozdělení pro markovský řetězec se spojitým časem?

Back:

![](../../Assets/Pasted%20image%2020250422092555.png)
<!--ID: 1778521859508-->
END

---

<!--
Original Flashcard ID: 1746599649487
-->

START
NI-SZZ


Pozorování: **detailní rovnováha**

Back:

![](../../Assets/Pasted%20image%2020250422092635.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250422092646.png)

<!-- DetailInfoEnd -->

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250422092710.png)
![](../../Assets/Pasted%20image%2020250422092719.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859511-->
END

---

<!--
Original Flashcard ID: 1747933518476
-->

START
NI-SZZ


Jak bychom prakticky použili rovnici detailní rovnováhy pro nalezení stacionárního rozdělení této matice?

![](../../Assets/Pasted%20image%2020250522185031.png)

Back:

Vypíšeme rovnice:
![](../../Assets/Pasted%20image%2020250522185039.png)

Postupně dosadíme a vyjádříme složky $\pi$
![](../../Assets/Pasted%20image%2020250522185120.png)
<!--ID: 1778521859514-->
END

---

<!--
Original Flashcard ID: 1746599649494
-->

START
NI-SZZ


Lemma: Pokud máme nezávislé exponenciální rozdělení $T$ a $S$, potom ...

$$Z := \min\{T,S\} \sim \ ???$$

Back:

![](../../Assets/Pasted%20image%2020250422092802.png)

To samé platí obecněji:
![](../../Assets/Pasted%20image%2020250422092831.png)
<!--ID: 1778521859516-->
END

---

<!--
Original Flashcard ID: 1746599649510
-->

START
NI-SZZ


Pozorování: co platí pro $F_\text{max{X,Y}}(t)$

Back:

![](../../Assets/Pasted%20image%2020250422092921.png)
<!--ID: 1778521859519-->
END

---

<!--
Original Flashcard ID: 1746599649517
-->

START
NI-SZZ


Lemma: Čemu je rovno $P(T<S)$ a $P(S<T)$ pro $S,T$ exponenciální?

Back:

![](../../Assets/Pasted%20image%2020250422093005.png)

Neboli že $T$ nebo $S$ vyhraje závod
<!--ID: 1778521859522-->
END

---

<!--
Original Flashcard ID: 1746599649523
-->

START
NI-SZZ


Důsledek: čemu je rovno $P(T_i=min\{T_1, \dots T_n\})$

Back:

![](../../Assets/Pasted%20image%2020250422093042.png)

Neboli že $T_i$ vyhraje závod ze všech závodníků
<!--ID: 1778521859524-->
END

---

<!--
Original Flashcard ID: 1746599649532
-->

START
NI-SZZ


Lemma: Nezávislost ${min\{T,S\}>u}$ a $T<S$ (aneb vítěz a délka závodu jsou nezávislé)

Back:

![](../../Assets/Pasted%20image%2020250422093107.png)

Jinými slovy:

- Představme si 2 závodníky, co doběhnou v časech $T$ a $S$

Lemma pak říká, že pro $u \geq 0$ jsou nezávislé následující dvě věci:

- Jak dlouho závod trval (že závod trval déle než $u$)
- Kdo vyhrál závod (že $T < S$ - tedy že závodník $T$ byl rychlejší)
<!--ID: 1778521859527-->
END

---

<!--
Original Flashcard ID: 1746599649540
-->

START
NI-SZZ


Důsledek: Buďte $T_1, \dots, T_n$ nezávislé veličiny, pak jevy... jsou nezávislé

(aneb obecně nezávislost nejlepšího času a nejlepšího závodníka)

Back:

![](../../Assets/Pasted%20image%2020250422093211.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250422093223.png)
![](../../Assets/Pasted%20image%2020250422093231.png)
![](../../Assets/Pasted%20image%2020250422093239.png)

<!-- ExerciseEnd -->
<!--ID: 1778521859529-->
END

---

<!--
Original Flashcard ID: 1746599649562
-->

START
NI-SZZ


Pozorování: souvislost markovského řetězce se spojitým časem a exponenciálními závody

proces je markovský řetězec se spojitým časem $\Leftrightarrow \dots$

Back:

![](../../Assets/Pasted%20image%2020250422093838.png)

Pozn. Co po nás podle Hrabáka budou chtít:

- Buď dostanem matici přechodu za čas T
  - Např. Rozdělení v čase 17,5 když známe rozdělení v čase 2 (stačí jen vynásobit maticí vývoje za čas - tzn. P(17,5-2))
- Nebo dostanem diagram. Z toho uděláme matici skokových intenzit
  - Z toho třeba budou chtít sestavit diferenciální rovnice

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250422093849.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250422093905.png)

<!-- ExampleEnd -->
<!--ID: 1778521859532-->
END

---

## Souvislost s Markovskými řetezci s diskrétním časem a s Poissonovým procesem

<!--
Original Flashcard ID: 1746599649602
-->

START
NI-SZZ


Jak funguje **binomický proces** jako **markovský řetězec**?

Back:

V každém čase hodíme mincí, pokud padne hlava, přičteme 1 (tzn. přesuneme se do stavu o 1 výše).

![](../../Assets/Pasted%20image%2020250419135846.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419135828.png)
![](../../Assets/Pasted%20image%2020250419135837.png)
![](../../Assets/Pasted%20image%2020250419135900.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859535-->
END

---

<!--
Original Flashcard ID: 1746599649609
-->

START
NI-SZZ


Definice: **Čítací proces**

Back:

![](../../Assets/Pasted%20image%2020250419135912.png)

Počítá mi kolik událostí nastalo do daného času

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419135922.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859537-->
END

---

<!--
Original Flashcard ID: 1746599649617
-->

START
NI-SZZ


Definice: **Poissonův proces**

Back:

![](../../Assets/Pasted%20image%2020250419135938.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250419135951.png)

<!-- ImageEnd -->
<!--ID: 1778521859540-->
END

---

<!--
Original Flashcard ID: 1746599649625
-->

START
NI-SZZ


Definice: **Poissonův proces 2**

Back:

![](../../Assets/Pasted%20image%2020250419140015.png)

<!--ID: 1778521859543-->
END

---

<!--
Original Flashcard ID: 1746599649632
-->

START
NI-SZZ


Jak se liší **Binomický** a **Poissonův** proces?

Back:

Rozdělením času mezi událostmi.

- U binomického v každé "sekundě" flipneme coin a přičteme nebo nepřičteme hodnotu
- U poissonova přičteme v náhodném čase o 1 (čas může být i třeba 0.5).

Tzn. poisson je jakoby spojitá varianta binomického.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419140032.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859545-->
END

---

<!--
Original Flashcard ID: 1746599649638
-->

START
NI-SZZ


Definice: **Exponenciální rozdělení**

- předpis
- parametry
- jak je definováno ($f_X(x)$)
- střední hodnota
- rozptyl

Back:

**Předpis**: $X \sim Exp(\lambda)$
**Parametry**:

- $\lambda > 0$
  **Definice**:
- $f_X(x) = \lambda e^{-\lambda x} \quad x \in [0, \infty), \ 0$ jinde
  **Střední hodnota:**
- $EX=\frac{1}{\lambda}$
- $varX=\frac{1}{\lambda^2}$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419140054.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859548-->
END

---

<!--
Original Flashcard ID: 1748188849403
-->

START
NI-SZZ


Jaká je distribuční funkce exponenciálního rozdělení?

(v jedné zkoušce to bylo potřeba jako součást praktického příkladu)

Back:

![](../../Assets/Pasted%20image%2020250525180005.png)

<!--ID: 1778521859551-->
END

---

<!--
Original Flashcard ID: 1746599649646
-->

START
NI-SZZ


Věta: **Bezpaměťovost exponenciálního rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250419140119.png)

<!--ID: 1778521859553-->
END

---

<!--
Original Flashcard ID: 1746599649654
-->

START
NI-SZZ


Věta: Silná bezpaměťovost exponenciálního rozdělení

Back:

![](../../Assets/Pasted%20image%2020250419140137.png)

<!--ID: 1778521859556-->
END

---

<!--
Original Flashcard ID: 1746599649660
-->

START
NI-SZZ


Věta: **Součet exponenciálních je gamma**

Back:

![](../../Assets/Pasted%20image%2020250419140156.png)

<!--ID: 1778521859559-->
END

---

<!--
Original Flashcard ID: 1746599649667
-->

START
NI-SZZ


Věta: **Ekvivalence definic Poissonova procesu**

Back:

![](../../Assets/Pasted%20image%2020250419140214.png)

<!--ID: 1778521859561-->
END

---

<!--
Original Flashcard ID: 1746599649674
-->

START
NI-SZZ


Lemma: **Jaké rozdělení má náhodná veličina**

Back:

![](../../Assets/Pasted%20image%2020250419140250.png)

<!--ID: 1778521859564-->
END

---

<!--
Original Flashcard ID: 1746599649680
-->

START
NI-SZZ


Lemma: **Bezpaměťovost Poissonova procesu**

Back:

![](../../Assets/Pasted%20image%2020250419140308.png)

<!--ID: 1778521859567-->
END

---

<!--
Original Flashcard ID: 1746599649571
-->

START
NI-SZZ


Pozorování: Jak vytvoříme **homogenní markovský proces se spojitým časem**

Back:

![](../../Assets/Pasted%20image%2020250419140805.png)
<!--ID: 1778521859569-->
END

---

<!--
Original Flashcard ID: 1746599649579
-->

START
NI-SZZ


Pozorování: Jaký tvar má **matice přechodu homogenního markovského řetězce se spojitým časem** ($X_t=Y_{N_t}$)

Back:

![](../../Assets/Pasted%20image%2020250419140846.png)
<!--ID: 1778521859572-->
END

---

<!--
Original Flashcard ID: 1746599649591
-->

START
NI-SZZ


Pozorování: Jaký tvar má **matice skokových intenzit homogenního markovského řetězce se spojitým časem** ($X_t=Y_{N_t}$)

Back:

![](../../Assets/Pasted%20image%2020250419140921.png)
<!--ID: 1778521859574-->
END

---

<!--
Original Flashcard ID: 1746599649285
-->

START
NI-SZZ


Co znamená model náhodných příchodů?

Back:

Události náhodně nastávají v časovém rozmezí podle Uniformního rozdělení.

![](../../Assets/Pasted%20image%2020250501142037.png)
<!--ID: 1778521859577-->
END

---

<!--
Original Flashcard ID: 1746599649293
-->

START
NI-SZZ


Definice: **proces příchodů do času $t$**

Back:

![](../../Assets/Pasted%20image%2020250501142100.png)

$L$ = jak dlouhý je čas

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501142109.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859580-->
END

---

<!--
Original Flashcard ID: 1746599649301
-->

START
NI-SZZ


Pozorování: **Binomické přírustky u modelu náhodných příchodů**

Back:

![](../../Assets/Pasted%20image%2020250501142134.png)

Přírustky jsou jakoby ty skoky mezi těmi časy příchodu

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250501144223.png)

<!-- ProofEnd -->
<!--ID: 1778521859582-->
END

---

<!--
Original Flashcard ID: 1746599649308
-->

START
NI-SZZ


Pozorování: **Přírustky procesu a Poissonovo rozdělení** (u modelu náhodných příchodů)

Back:

![](../../Assets/Pasted%20image%2020250501142157.png)

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020250501144349.png)

<!-- ProofEnd -->
<!--ID: 1778521859585-->
END

---

<!--
Original Flashcard ID: 1746599649315
-->

START
NI-SZZ


Pozorování: **Přírustky procesu a nezávislost** (u modelu náhodných příchodů)

Back:

![](../../Assets/Pasted%20image%2020250501142214.png)
<!--ID: 1778521859587-->
END

---

<!--
Original Flashcard ID: 1746599649323
-->

START
NI-SZZ


Věta: $f_{T_1, \dots, T_n|N_t = n}(t_1, \dots, t_n) = \ ?$

Back:

![](../../Assets/Pasted%20image%2020250501142312.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501142322.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859590-->
END

---

<!--
Original Flashcard ID: 1746599649330
-->

START
NI-SZZ


Důsledek: $P(N_s = m | N_t = n) = \ ???$

Back:

![](../../Assets/Pasted%20image%2020250501142354.png)
<!--ID: 1778521859593-->
END

---

<!--
Original Flashcard ID: 1746599649338
-->

START
NI-SZZ


Definice: **Nehomogenní Poissonův proces**

Back:

![](../../Assets/Pasted%20image%2020250501142412.png)

Nehomogenní Proces = Umožňuje nám modelovat to, že události nastávají v nějakých časech častěji a v nějaké časy méně často.

Např. homogenní je radioaktivní rozpad, nehomogenní je příchod zákazníků do restaurace v průběhu dne

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501142432.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859595-->
END

---

<!--
Original Flashcard ID: 1746599649344
-->

START
NI-SZZ


Poznámka: Značení $\Lambda (t)$

Back:

![](../../Assets/Pasted%20image%2020250501142513.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501142521.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859598-->
END

---

<!--
Original Flashcard ID: 1746599649352
-->

START
NI-SZZ


Věta: **Nehomogenní Poisson a rozdělení času příchodu**

Back:

![](../../Assets/Pasted%20image%2020250501142617.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250501142632.png)

<!-- ImageEnd -->
<!--ID: 1778521859601-->
END

---

<!--
Original Flashcard ID: 1746599649359
-->

START
NI-SZZ


Důsledek: $P(N_s=m|N_t=n) = \ ???$ pro nehomogenní Poisson a rozdělení času příchodu

Back:

![](../../Assets/Pasted%20image%2020250501142713.png)
<!--ID: 1778521859604-->
END

---

<!--
Original Flashcard ID: 1746599649366
-->

START
NI-SZZ


**Jak funguje dělení Poissonova procesu** (thinning)?

Back:

1. Máme $\text{Poisson}(\lambda)$
2. Když nastane událost, můžeme s určitou pravděpodobností ji označit za určitý typ události
3. Procesy těch daných typů budou taky poissonovy s parametrem $\text{Poisson}(\lambda p_i)$

Vzniklé procesy se označují jako $\{N_t^{(i)}|t \geq 0\}$

![](../../Assets/Pasted%20image%2020250501142731.png)
<!--ID: 1778521859606-->
END

---

<!--
Original Flashcard ID: 1746599649373
-->

START
NI-SZZ


Věta: Procesy $\dots$ jsou nezávislé Poissonovy s intenzitou $\dots$

(procesy po provedení thinningu)

Back:

![](../../Assets/Pasted%20image%2020250501142758.png)
<!--ID: 1778521859609-->
END

---

<!--
Original Flashcard ID: 1746599649380
-->

START
NI-SZZ


Důsledek: Pokud platí ..., pak jsou procesy nezávislé Poissonovy procesy s intenzitou

Back:

![](../../Assets/Pasted%20image%2020250501142837.png)
<!--ID: 1778521859612-->
END

---

<!--
Original Flashcard ID: 1746599649388
-->

START
NI-SZZ


**Jak funguje skládání Poissonových procesů**? (superpozice)

Back:

1. Máme 2 poissonovské procesy s $\lambda_1$ a $\lambda_2$
2. Když je složíme, tak z toho vznikne $\text{Poisson}(\lambda_1+\lambda_2)$

![](../../Assets/Pasted%20image%2020250501142902.png)
<!--ID: 1778521859615-->
END

---

<!--
Original Flashcard ID: 1746599649395
-->

START
NI-SZZ


Věta: Proces $N_t = N_t^{(1)}+ N_t^{(2)}$

(skládání poissonovských procesů)

Back:

![](../../Assets/Pasted%20image%2020250501142945.png)
<!--ID: 1778521859621-->
END

---

<!--
Original Flashcard ID: 1746599649403
-->

START
NI-SZZ


Jak lze sestavit **nehomogenní Poissonův proces** pomocí **Nehomogenního dělení**?

Back:

1. Nagenerujeme si časy $\text{Poisson}(\lambda)$ - exponenciální časy mezi událostmi (modré puntíky)
2. Pro každý čas vygenerujeme náhodné číslo mezi $0$ a $1$, tedy $\text{Unif}(0,1)$
3. Zadefinujeme si funkci $p(t)$, která nám řekne, jestli daný bod podle vygenerovaného čísla přijmeme nebo ne
4. Přijmuté body nám pak tvoří **nehomogenní** $Poisson(\lambda p(t))$

Pozn. $\lambda p(t) = \lambda (t)$

![](../../Assets/Pasted%20image%2020250501143006.png)

![](../../Assets/Pasted%20image%2020250501143034.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250501143059.png)

<!-- DetailInfoEnd -->
<!--ID: 1778521859625-->
END

---