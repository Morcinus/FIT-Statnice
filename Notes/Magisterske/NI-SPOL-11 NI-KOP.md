---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-11 NI-KOP

> NI-SPOL-11 (NI-KOP)
> Význam tříd NP a NPH pro praktické výpočty.


## Význam tříd NP a NPH pro praktické výpočty

<!--
Original Flashcard ID: 1728921215045
-->

START
NI-SZZ


Jaké metriky se měří u výpočetních modelů?

Back:

- **výpočetní složitost** - čas výpočtu
- **paměťová složitost** - spotřeba paměti
<!--ID: 1780152136120-->
END

---

<!--
Original Flashcard ID: 1728921215048
-->

START
NI-SZZ


Jakými způsoby se měří **velikost** instance?

Back:

- **Hrubá míra** - počet prvků instance (uzlů, čísel, prvků množiny atd.)
- **Jemná míra** - počet bitů nutných k zakódování instance
<!--ID: 1780152136141-->
END

---

<!--
Original Flashcard ID: 1728921215051
-->

START
NI-SZZ


Jak se měří **čas výpočtu**?

Back:

- počet "typických operací"
- počet kroků **jednotného výpočetního modelu**
<!--ID: 1780152136152-->
END

---

<!--
Original Flashcard ID: 1728921215053
-->

START
NI-SZZ


Jaké jsou například výpočetní modely? (3)

Back:

- **Turingův stroj**
- **RAM stroj**
- **Booleův obvod**
<!--ID: 1780152136164-->
END

---

<!--
Original Flashcard ID: 1728921215057
-->

START
NI-SZZ


Připomenutí: Jak funguje **Turingův stroj**?

Back:

Neomezená páska, mám tam zadaný program.

1. Přečte symbol
2. Zapíše symbol
3. Pohne hlavou doleva nebo doprava

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011153757.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136176-->
END

---

<!--
Original Flashcard ID: 1728921215060
-->

START
NI-SZZ


Definice: Kdy deterministický **Turingův stroj** řeší rozhodovací problém $\Pi$

Back:

![](../../Assets/Pasted%20image%2020241011154142.png)
<!--ID: 1780152136188-->
END

---

<!--
Original Flashcard ID: 1728921215064
-->

START
NI-SZZ


Definice: Kdy deterministický **Turingův stroj** řeší rozhodovací problém $\Pi$ **v čase $t$**

Back:

![](../../Assets/Pasted%20image%2020241011154225.png)
<!--ID: 1780152136199-->
END

---

<!--
Original Flashcard ID: 1728921215066
-->

START
NI-SZZ


Definice: Kdy **Turingův stroj** řeší rozhodovací problém $\Pi$ **s pamětí $m$**

Back:

![](../../Assets/Pasted%20image%2020241011154230.png)
<!--ID: 1780152136211-->
END

---

<!--
Original Flashcard ID: 1728921215069
-->

START
NI-SZZ


Jak se kóduje instance v Turingově stroji

Back:

Instance je řetězec $0$ a $1$ (tzn. $\set{0,1}^*$, problém je podmnožina takových řetězců, na které Turingův stroj odpoví "ano"

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011154616.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241011154627.png)

<!-- ExampleEnd -->
<!--ID: 1780152136222-->
END

---

<!--
Original Flashcard ID: 1728921215072
-->

START
NI-SZZ


Definice: Rozhodovací problém **patří do třídy P**, když $\dots$

Back:

![](../../Assets/Pasted%20image%2020241011154912.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136233-->
END

---

<!--
Original Flashcard ID: 1728921215075
-->

START
NI-SZZ


Definice: Rozhodovací problém **patří do třídy PSPACE**, když $\dots$

Back:

![](../../Assets/Pasted%20image%2020241011154938.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136246-->
END

---

<!--
Original Flashcard ID: 1728921215078
-->

START
NI-SZZ


Definice: Rozhodovací problém **patří do třídy EXPTIME**, když $\dots$

Back:

![](../../Assets/Pasted%20image%2020241011154951.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136257-->
END

---

<!--
Original Flashcard ID: 1728921215081
-->

START
NI-SZZ


Jaký je vztah tříd PSPACE a EXPTIME?

Back:

$\text{PSPACE} \subset \text{EXPTIME}$

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136269-->
END

---

<!--
Original Flashcard ID: 1728921215084
-->

START
NI-SZZ


Čeho je zkratka **NP** třídy problémů?

Back:

**Nedeterministicky polynomiální**
<!--ID: 1780152136280-->
END

---

<!--
Original Flashcard ID: 1728921215087
-->

START
NI-SZZ


Jak funguje **nedeterministický Turingův stroj**?

Back:

Jako Turingův stroj, akorát to rozhodování dělá **nedeterministický automat**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011155407.png)

<!-- DetailInfoEnd -->

<!-- InformallySaidStart -->

![](../../Assets/Pasted%20image%2020241011155542.png)

<!-- InformallySaidEnd -->
<!--ID: 1780152136292-->
END

---

<!--
Original Flashcard ID: 1728921215090
-->

START
NI-SZZ


Definice: **nedeterministický Turingův stroj řeší rozhodovací problém $\Pi$ v čase $t$**

Back:

![](../../Assets/Pasted%20image%2020241011155644.png)
<!--ID: 1780152136303-->
END

---

<!--
Original Flashcard ID: 1728921215093
-->

START
NI-SZZ


Věta: Pokud **nedeterministický Turingův stroj** řeší problém $\Pi$ v čase $T(n)$, pak **deterministický Turingův stroj** ho řeší v čase $\dots$

Back:

![](../../Assets/Pasted%20image%2020241011155932.png)
<!--ID: 1780152136315-->
END

---

<!--
Original Flashcard ID: 1728921215095
-->

START
NI-SZZ


Definice: Rozhodovací problém $\Pi$ **patří do třídy NP**, jesltiže $\dots$ (nedeterministický Turingův stroj)

Back:

![](../../Assets/Pasted%20image%2020241011160026.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136327-->
END

---

<!--
Original Flashcard ID: 1728921215099
-->

START
NI-SZZ


Definice: Rozhodovací problém $\Pi$ **patří do třídy NP**, jesltiže $\dots$ (certifikát/svědek)

Back:

![](../../Assets/Pasted%20image%2020241011160112.png)
![](../../Assets/Pasted%20image%2020241011160131.png)
<!--ID: 1780152136338-->
END

---

<!--
Original Flashcard ID: 1731258463498
-->

START
NI-SZZ


Jak lze dokázat, že problém patří do třídy NP? (2)

Back:

1. Z definice nalezneme nedeterministický Turingův stroj, který každou instanci $I \in \Pi_{ANO}$ řeší v polynomiálním čase (z definice).
2. Dokážeme, že pro každou instanci $I \in \Pi_{ANO}$ problému existuje konfigurace $Y$ taková, že kontrola, zda je $Y$ řešením patří do $P$

Obě dvě varianty jsou z definice (každá z jiné)
<!--ID: 1780152136349-->
END

---

<!--
Original Flashcard ID: 1728921215102
-->

START
NI-SZZ


Jak funguje nedeterministický algoritmus pro nalezení Hamiltonovy kružnice? (neformálně)

**Hamiltonova kružnice** = kružnice v grafu, která obsahuje každý uzel

Back:

![](../../Assets/Pasted%20image%2020241011160445.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011160524.png)

Vychází z této definice:
![](../../Assets/Pasted%20image%2020241011160026.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136360-->
END

---

<!--
Original Flashcard ID: 1728921215105
-->

START
NI-SZZ


Do jaké třídy problémů spadá problém nalezení Hamiltonovy kružnice?

Back:

Do **třídy NP**
<!--ID: 1780152136371-->
END

---

<!--
Original Flashcard ID: 1728921215107
-->

START
NI-SZZ


Jak se provede polynomiální kontrola certifikátu u problému Hamiltonovy kružnice?

Back:

Jednoduše proiteruju uzly a hrany a zjistím, jestli tam není žádný uzel dvakrát.

To je problém se složitostí $O(|V|)$, tedy dle věty (viz níže) to je certifikát pro to, že Hamiltonova kružnice patří do NP.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011160725.png)

Vychází z této definice:
![](../../Assets/Pasted%20image%2020241011160112.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136383-->
END

---

<!--
Original Flashcard ID: 1728921215113
-->

START
NI-SZZ


Jaký je vztah **nedeterministickýho** a **deterministickýho Turingova stroje**?

Back:

Deterministický je zvláštním případem nedeterministického.

- **deterministický** - má přechodovou **funkci** (vždy max jeden následník)
- **nedeterministický** - má přechodovou **relaci** (může mít více následníků)

<!-- ExplanationStart -->

Deterministický stroj je zvláštním případem nedeterministického, kde následníkem každého stavu je nejvýše jeden stav.

Tzn. pokud se něco splní v deterministickým stroji, lze to splnit i v nedeterministickým.

<!-- ExplanationEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241011161048.png)

<!-- ImageEnd -->
<!--ID: 1780152136395-->
END

---

<!--
Original Flashcard ID: 1728921215118
-->

START
NI-SZZ


Jaký je vztah problémů třídy P a NP?

Back:

$P \subset NP$

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241011161321.png)

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1780152136407-->
END

---

<!--
Original Flashcard ID: 1728921215121
-->

START
NI-SZZ


Jaké další problémy jsou mimo NP? (v rámci PSPACE)

Back:

- **Komplementární problémy NP** (co-NP) - podobné jako NP, ale trochu jiné
- **Polynomiální hierarchie** - hierarchie mezi problémy P a PSPACE

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241011161456.png)

<!-- ImageEnd -->
<!--ID: 1780152136418-->
END

---

<!--
Original Flashcard ID: 1728921215124
-->

START
NI-SZZ


Co jsou **komplementární problémy**?

Back:

Vezmu NP problém a "otočíme ho".

Např. "Je Booleova formule splnitelná" -> "je formule nesplnitelná?"

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241011161600.png)

Např.
![](../../Assets/Pasted%20image%2020241011161812.png)

<!-- ExampleEnd -->
<!--ID: 1780152136429-->
END

---

<!--
Original Flashcard ID: 1728921215127
-->

START
NI-SZZ


Jak lze zkonstruovat **komplementární problém**?

Back:

Pokud mám problém "Existuje..." $\exists \dots$, přehodím to na $\forall \dots$

$\exists Y, R(I,Y) \Rightarrow \forall Y, \neg R(I,Y)$.

- vstupní proměnné zůstávají
- vytvoříme doplněk omezení (dle predikátové logiky)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011161940.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136440-->
END

---

<!--
Original Flashcard ID: 1728921215129
-->

START
NI-SZZ


Co znamená **krátký** a **dlouhý svědek** u **NP** problémů?

Back:

Na otázku "Existuje konfigurace, která ..."

- Odpověď **ANO** - **krátký** svědek (**$\exists$-svědek**)
- Odpověď **NE** - **dlouhý** svědek

<!-- ExplanationStart -->

- Odpověď **ANO** - stačí mi najít tu konfiguraci (řeší se krátce)
- Odpověď **NE** - musím projít všechny konfigurace (řeší se dlouze)

<!-- ExplanationEnd -->
<!--ID: 1780152136451-->
END

---

<!--
Original Flashcard ID: 1728921215132
-->

START
NI-SZZ


Co znamená **krátký** a **dlouhý svědek** u **co-NP** problémů?

Back:

Na otázku "Pro všechny konfigurace platí, že ..."

- Odpověď **ANO** - **dlouhý** svědek **($\forall$-svědek)**
- Odpověď **NE** - **krátký** svědek

<!-- ExplanationStart -->

- Odpověď **ANO** - musím projít všechny konfigurace (řeší se dlouze)
- Odpověď **NE** - stačí mi najít tu konfiguraci, co je protipříkladem (řeší se krátce)

<!-- ExplanationEnd -->
<!--ID: 1780152136462-->
END

---

<!--
Original Flashcard ID: 1728921215141
-->

START
NI-SZZ


Jaký je vztah třídy **co-NP** a tříd **P** a **NP**? (popiš jak se protínají množiny na obrázku)

Back:

![](../../Assets/Pasted%20image%2020241011162620.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241110101356.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136473-->
END

---

<!--
Original Flashcard ID: 1728921215144
-->

START
NI-SZZ


Jaký problém je například zároveň ve **třídě NP** a zároveň v **co-NP**?

Back:

**Faktorizace čísla jako rozhodovací problém:**
Dáno celé číslo $N$, existuje jeho prvočinitel, jehož poslední číslice je $7$?

Potvrzení i vyvrácení vyžaduje nalezení toho prvočinitele (v polynomiálním čase).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241011162546.png)
<!-- DetailInfoEnd -->
<!--ID: 1780152136483-->
END

---

<!--
Original Flashcard ID: 1728921215147
-->

START
NI-SZZ


Jaký je vztah tříd $P$ a $\text{co-P}$?

Back:

$P = \text{co-P}$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011162939.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136494-->
END

---

<!--
Original Flashcard ID: 1728921215150
-->

START
NI-SZZ


Jaký je vztah tříd $P, NP, \text{co-NP}$?

Back:

$P \subseteq NP \cap \text{co-NP}$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011163033.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136504-->
END

---

<!--
Original Flashcard ID: 1728921215153
-->

START
NI-SZZ


Co platí, pokud $P = NP$ ?

Back:

$$P = NP \implies NP = \text{co-NP}$$
<!--ID: 1780152136515-->
END

---

<!--
Original Flashcard ID: 1728921215155
-->

START
NI-SZZ


Co platí, pokud $\text{co-NP} \implies NP$?

Back:
$$P \neq NP$$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011163209.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136526-->
END

---

<!--
Original Flashcard ID: 1728921215158
-->

START
NI-SZZ


Co je problém $\text{QSAT}_2$?

Back:

Normální $SAT$ = máme booleovskou formuli a zjišťujeme, jestli existuje ohodnocení, že bude pravdivá

$QSAT_2$ = máme dvě podčásti formule $X_1$ a $X_2$ a zjišťujeme, jestli existuje ohodnocení $X_1$ takové, že pro všechny ohodnocení $X_2$ bude celá formule $F(X_1,X_2)$ pravdivá

![](../../Assets/Pasted%20image%2020241011163346.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241011163423.png)

<!-- ExampleEnd -->
<!--ID: 1780152136537-->
END

---

<!--
Original Flashcard ID: 1728921215161
-->

START
NI-SZZ


Co je $\text{QSAT}_k$?

Back:

![](../../Assets/Pasted%20image%2020241011163703.png)
<!--ID: 1780152136548-->
END

---

<!--
Original Flashcard ID: 1728921215164
-->

START
NI-SZZ


Definice: třída **Polynomiální hierarchie**

Back:

![](../../Assets/Pasted%20image%2020241011163734.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241011163753.png)

<!-- DetailInfoEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241011163840.png)

<!-- ImageEnd -->
<!--ID: 1780152136558-->
END

---

<!--
Original Flashcard ID: 1729236692285
-->

START
NI-SZZ


Definice: **Problém je $X$-těžký**

Back:

![](../../Assets/Pasted%20image%2020241016095346.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241016100240.png)

![](../../Assets/Pasted%20image%2020241016095433.png)

<!-- ExplanationEnd -->
<!--ID: 1780152136569-->
END

---

<!--
Original Flashcard ID: 1729236692295
-->

START
NI-SZZ


Definice: **Problém je $X$-úplný**

Back:

![](../../Assets/Pasted%20image%2020241016095401.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241016100249.png)
![](../../Assets/Pasted%20image%2020241016095433.png)

<!-- ExplanationEnd -->
<!--ID: 1780152136579-->
END

---

<!--
Original Flashcard ID: 1729236692302
-->

START
NI-SZZ


Jak poznám který problém je **lehčí** a který **těžší**?

Back:

Máme instanci problému $\Pi_1$ a nechce se mi to řešit, tak to převedu **snadným převodem** na instanci problému $\Pi_2$, na který mám algoritmus na řešení a má **shodný výstup**.

Potom:

- Díky tomu jsme získali algoritmus na $\Pi_1$, který není horší než algoritmus $\Pi_2$
- $\Pi_1$ je **nejvýše tak těžký** jako $\Pi_2$
- $\Pi_2$ je **nejméně tak těžký** jako $\Pi_1$

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241016095740.png)

<!-- ImageEnd -->
<!--ID: 1780152136590-->
END

---

<!--
Original Flashcard ID: 1729236692310
-->

START
NI-SZZ


Co je obecně **nejtěžší problém** v nějaké třídě?

Back:

Nejtěžší problém je **ten, na který jdou převést všechny ostatní**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241016100104.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136600-->
END

---

<!--
Original Flashcard ID: 1729236692320
-->

START
NI-SZZ


Co je **redukce** problému? (obecně)

Back:

Převod instance problému $\Pi_1$ na instanci jiného problému $\Pi_2$
<!--ID: 1780152136610-->
END

---

<!--
Original Flashcard ID: 1729236692327
-->

START
NI-SZZ


Definice: Rozhodovací problém $\Pi_1$ je **Karp-redukovatelný** na $\Pi_2$

Back:

![](../../Assets/Pasted%20image%2020241016100515.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241016100743.png)
![](../../Assets/Pasted%20image%2020241016100756.png)
![](../../Assets/Pasted%20image%2020241016100804.png)
![](../../Assets/Pasted%20image%2020241016100814.png)

<!-- ExampleEnd -->
<!--ID: 1780152136621-->
END

---

<!--
Original Flashcard ID: 1729236692338
-->

START
NI-SZZ


Definice: $\Pi_1$ a $\Pi_2$ jsou **polynomiálně ekvivalentní**

Back:

![](../../Assets/Pasted%20image%2020241016100617.png)

Neboli dají se na sebe převést Karpovou redukcí.
<!--ID: 1780152136631-->
END

---

<!--
Original Flashcard ID: 1729236692346
-->

START
NI-SZZ


Věta: transitivita Karpovy redukce

Back:

![](../../Assets/Pasted%20image%2020241016100644.png)

<!-- InformallySaidStart -->

Když umím převést $\Pi_1$ na $\Pi_2$ a $\Pi_2$ na $\Pi_3$, tak umím převést $\Pi_1$ na $\Pi_3$.

<!-- InformallySaidEnd -->
<!--ID: 1780152136642-->
END

---

<!--
Original Flashcard ID: 1729236692356
-->

START
NI-SZZ


Definice: Problém je NP-těžký

Back:

![](../../Assets/Pasted%20image%2020241016101357.png)
<!--ID: 1780152136652-->
END

---

<!--
Original Flashcard ID: 1729236692365
-->

START
NI-SZZ


Definice: Problém je NP-úplný (je ve třídě NPC)

Back:

![](../../Assets/Pasted%20image%2020241016101418.png)
<!--ID: 1780152136664-->
END

---

<!--
Original Flashcard ID: 1729236692372
-->

START
NI-SZZ


Důsledek: Nechť $\Pi \in NP, \exists \Pi' \in NPC, \Pi' \infty \Pi$, pak také

Back:

![](../../Assets/Pasted%20image%2020241016105736.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241016105745.png)

<!-- ExplanationEnd -->
<!--ID: 1780152136676-->
END

---

<!--
Original Flashcard ID: 1729236692381
-->

START
NI-SZZ


Důsledek: NPC problémy a třída ekvivalence

Back:

![](../../Assets/Pasted%20image%2020241016105815.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241016105826.png)

<!-- ExplanationEnd -->
<!--ID: 1780152136686-->
END

---

<!--
Original Flashcard ID: 1729236692389
-->

START
NI-SZZ


Věta: **Cookova věta**

Back:

![](../../Assets/Pasted%20image%2020241016105841.png)

Toto je velice silná věta. Znamená to, že můžu libovolný NP problém převést na problém SATu. Proto se furt řeší v tomto předmětu SAT solvery.

<!-- DetailInfoStart -->

Důsledky:
![](../../Assets/Pasted%20image%2020241016105850.png)

<!-- DetailInfoEnd -->

<!-- ProofStart -->

![](../../Assets/Pasted%20image%2020241016110547.png)

<!-- ProofEnd -->
<!--ID: 1780152136697-->
END

---

<!--
Original Flashcard ID: 1729236692399
-->

START
NI-SZZ


Jaké jsou vztahy tříd $P, NP, NPC, NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016110101.png)
<!--ID: 1780152136707-->
END

---

<!--
Original Flashcard ID: 1729236692407
-->

START
NI-SZZ


Definice: co-NP těžký a co-NP úplný

Back:

![](../../Assets/Pasted%20image%2020241016110201.png)
<!--ID: 1780152136718-->
END

---

<!--
Original Flashcard ID: 1729236692416
-->

START
NI-SZZ


Jaké jsou **výhody** a **nevýhody** NP problémů? (3 a 1)

Back:

**Výhody:**

- **"NP lehký problém"** - Problémy v NP nejsou horší než NP
- **Existující svědek** se dá efektivně **zkontrolovat**
- **Možnost převodu** na známé problémy není vyloučena!

**Nevýhody**:

- **Problém je v NPC** - exaktní řešení, v nejhorším případě, může být časově neúnostné
<!--ID: 1780152136728-->
END

---

<!--
Original Flashcard ID: 1729236692426
-->

START
NI-SZZ


Jak lze dokázat, že nějaký problém $\Pi$ je **NP-úplný** (NPC)? (3)

Back:

- **Z definice** - nepraktický
- **Zvláštní případ** - Nějaký NP úplný problém je zvláštním případem toho mýho problému
- **Převodem SATu** - Když zvládnu zredukovat SAT na $\Pi$, je $\Pi$ NP-úplný

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241016110845.png)

<!-- ImageEnd -->

<!-- ExampleStart -->

Příklad 1
![](../../Assets/Pasted%20image%2020241016111114.png)
![](../../Assets/Pasted%20image%2020241016111124.png)

Příklad 2
![](../../Assets/Pasted%20image%2020241016111509.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Fun fact: Takhle v historii postupovaly důkazy
![](../../Assets/Pasted%20image%2020241016111339.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136740-->
END

---

<!--
Original Flashcard ID: 1729236692433
-->

START
NI-SZZ


Jaké jsou **varianty** SATu? (co se týče $X$-úplnosti a $\exists$ a $\forall$)

Back:

- **Obecný SAT**
- **SAT pro CNF** (konjunktivní normální formu)
- **Obecná formule**

![](../../Assets/Pasted%20image%2020241016111738.png)
<!--ID: 1780152136751-->
END

---

<!--
Original Flashcard ID: 1729236692442
-->

START
NI-SZZ


Co je **problém plánování**?

Back:

Máme množinu operací $T$ a snažíme se je uspořádat tak, aby v jednom čase se provedlo nejvýše $m$ operací

Je to NP-úplný.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241016112535.png)
<!-- DetailInfoEnd -->

<!-- ExplanationStart -->

částečné uspořádání = vím, která operace následuje za kterou

<!-- ExplanationEnd -->
<!--ID: 1780152136762-->
END

---

<!--
Original Flashcard ID: 1729236692452
-->

START
NI-SZZ


Definice: Program $M$ pro deterministický Turingův stroj **řeší optimalizační problém** v čase $t$, jesltiže ,...

Back:

![](../../Assets/Pasted%20image%2020241016112730.png)
<!--ID: 1780152136773-->
END

---

<!--
Original Flashcard ID: 1729236692460
-->

START
NI-SZZ


Definice: Program $M$ pro deterministický Turingův stroj **počítá optimalizační kritérium** problému $\Pi$ v čase $t$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016112758.png)
<!--ID: 1780152136786-->
END

---

<!--
Original Flashcard ID: 1729236692468
-->

START
NI-SZZ


Definice: Optimalizační problém $\Pi$ **patří do třídy NPO**, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016112908.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241016112918.png)

<!-- ExampleEnd -->
<!--ID: 1780152136798-->
END

---

<!--
Original Flashcard ID: 1729236692476
-->

START
NI-SZZ


Definice: Optimalizační problém $\Pi$ patří do třídy PO, jesltiže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016113003.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241016113010.png)

<!-- ExampleEnd -->
<!--ID: 1780152136810-->
END

---

<!--
Original Flashcard ID: 1729236692483
-->

START
NI-SZZ


Definice: **Turingova redukce**

Problém $\Pi_1$ je Turing-redukovatelný na $\Pi_2$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016113205.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241016113250.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152136824-->
END

---

<!--
Original Flashcard ID: 1729236692492
-->

START
NI-SZZ


Definice: **NP-těžký** problém (pomocí turingovy redukce)

Back:

![](../../Assets/Pasted%20image%2020241016113319.png)

![](../../Assets/Pasted%20image%2020241016113324.png)
<!--ID: 1780152136836-->
END

---

<!--
Original Flashcard ID: 1729236692500
-->

START
NI-SZZ


Jaký je vztah tříd $P, NP, NPC, PO, NPO, NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016113425.png)
<!--ID: 1780152136848-->
END

---

<!--
Original Flashcard ID: 1729236692508
-->

START
NI-SZZ


Nechť máme rozhodovací problém $TS$ a optimalizační problém $TSO$. Jaký mají vztah (z hlediska těžkosti problémů)?

Např.

- **TS** - existuje tůra délky nejvýše $B$?
- **TSO** - zkonstruuj nejkratší tůru

Back:

Jsou **ekvivalentní** z hlediska Truingovy redukce v polynomiálním čase.

<!-- ProofStart -->

**Důkaz TS -> TSO:**

- Triviální, prostě algoritmu TSO řeknu, aby mi jako output dal délku té tůry a tu porovnám s $B$

**Důkaz TSO -> TS:**

- Zavedeme pomocný problém TSE
  ![](../../Assets/Pasted%20image%2020241016114007.png)
  ![](../../Assets/Pasted%20image%2020241016114013.png)
  ![](../../Assets/Pasted%20image%2020241016114020.png)
  ![](../../Assets/Pasted%20image%2020241016114033.png)
  ![](../../Assets/Pasted%20image%2020241016114039.png)

<!-- ProofEnd -->
<!--ID: 1780152136860-->
END

---

<!--
Original Flashcard ID: 1729236692517
-->

START
NI-SZZ


Jaký vztah je **NPH** a **co-NPH** v Karpově redukci?

Back:

Jsou **disjunktní**. Tedy nemůžeme převést $\Pi$ z NPH do co-NPH a obráceně.

![](../../Assets/Pasted%20image%2020241016114520.png)
<!--ID: 1780152136871-->
END

---

<!--
Original Flashcard ID: 1729236692525
-->

START
NI-SZZ


Jaký vztah je **NPH** a **co-NPH** v Turingově redukci v polynomiálním čase?

Back:

$\text{NPH} = \text{co-NPH}$

![](../../Assets/Pasted%20image%2020241016114549.png)
<!--ID: 1780152136882-->
END

---

<!--
Original Flashcard ID: 1729236692533
-->

START
NI-SZZ


Jaký je vztah tříd $P, NP, co-NP, NPC, co-NPC, NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016114750.png)
<!--ID: 1780152136894-->
END

---

<!--
Original Flashcard ID: 1729236692544
-->

START
NI-SZZ


SMAZAT
Back:

SMAZAT
<!--ID: 1780152136906-->
END

---

<!--
Original Flashcard ID: 1729236692555
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1780152136918-->
END

---

<!--
Original Flashcard ID: 1729236692565
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1780152136929-->
END

---

<!--
Original Flashcard ID: 1729236692575
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1780152136941-->
END

---

<!--
Original Flashcard ID: 1729236692586
-->

START
NI-SZZ

SMAZAT

Back:

SMAZAT
<!--ID: 1780152136953-->
END

---