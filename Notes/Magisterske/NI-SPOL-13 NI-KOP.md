---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-13 NI-KOP

> NI-SPOL-13 (NI-KOP)
> Princip lokálních heuristik, pojem globálního a lokálního minima, obrana před uváznutím v lokálním minimu.

## Princip lokálních heuristik

<!--
Original Flashcard ID: 1730978213040
-->

START
NI-SZZ


Definice: **globální metody**

Back:

Řešení zadané instance konstruujeme z řešení dílčích instancí.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107103412.png)

<!-- ExampleEnd -->
<!--ID: 1780152138126-->
END

---

<!--
Original Flashcard ID: 1730978213044
-->

START
NI-SZZ


Definice: řešení **hrubou silou**

Back:

Řešení zadané instance konstruujeme procházením konfigurací

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107103447.png)

<!-- ExampleEnd -->
<!--ID: 1780152138137-->
END

---

<!--
Original Flashcard ID: 1730978213048
-->

START
NI-SZZ


Definice: **princip lokálních metod** (hladový algoritmus)

Back:

Algoritmus, ve kterém se věnujeme jedné (aktuální) konfiguraci a vybíráme příští z jejích sousedů).

Sousedé konfigurace, kam jsem schopný se dostat jedním krokem.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107103735.png)

<!-- ExampleEnd -->
<!--ID: 1780152138148-->
END

---

<!--
Original Flashcard ID: 1730978213052
-->

START
NI-SZZ


Co je **stav** systému/algoritmu? (obecně)

Back:

Obecně to jsou **všechny hodnoty, které ovlivňují chod algoritmu** (rozhodování, výběr možností).

<!-- ExampleStart -->

Příklad u problému batohu:

- Postupně přidávám věci (jakoby DFS v tom grafu) a testuju jeslti jsem nepřetekl batoh. - Např. na obrázku nejdřív například přidám druhou věc, to je ok, potom první, to je ok a pak třetí a to už jsem přetekl, takže jsem se dostal do nevalidního stavu. - Takhle postupně vyzkouším všechny kombinace
  ![](../../Assets/Pasted%20image%2020241107103841.png)

Kompletní graf pak vypadá takhle:
![](../../Assets/Pasted%20image%2020241107104027.png)

<!-- ExampleEnd -->
<!--ID: 1780152138159-->
END

---

<!--
Original Flashcard ID: 1730978213055
-->

START
NI-SZZ


Definice: **stav** algoritmu

Back:

Stav je **ohodnocení konfiguračních proměnných**

![](../../Assets/Pasted%20image%2020241107104804.png)
<!--ID: 1780152138170-->
END

---

<!--
Original Flashcard ID: 1730978213059
-->

START
NI-SZZ


Definice: **operátory a stavový prostor**

Back:

![](../../Assets/Pasted%20image%2020241107104840.png)
<!--ID: 1780152138181-->
END

---

<!--
Original Flashcard ID: 1730978213063
-->

START
NI-SZZ


Definice: **Akce** ve stavovém prostoru

Back:

![](../../Assets/Pasted%20image%2020241107104918.png)
<!--ID: 1780152138193-->
END

---

<!--
Original Flashcard ID: 1730978213066
-->

START
NI-SZZ


Definice: **graf stavového prostoru algoritmu**

Back:

![](../../Assets/Pasted%20image%2020241107104935.png)
<!--ID: 1780152138205-->
END

---

<!--
Original Flashcard ID: 1730978213070
-->

START
NI-SZZ


Definice: **okolí stavu**

Back:

![](../../Assets/Pasted%20image%2020241107104951.png)
<!--ID: 1780152138216-->
END

---

<!--
Original Flashcard ID: 1730978213074
-->

START
NI-SZZ


Definice: **$k$-okolí stavu**

Back:

![](../../Assets/Pasted%20image%2020241107105010.png)
<!--ID: 1780152138228-->
END

---

<!--
Original Flashcard ID: 1730978213077
-->

START
NI-SZZ


Definice: **sousední stavy (sousedé)**

Back:

![](../../Assets/Pasted%20image%2020241107105038.png)
<!--ID: 1780152138242-->
END

---

<!--
Original Flashcard ID: 1730978213081
-->

START
NI-SZZ


Co je **inverzní operátor**?

Back:

Operátory, který jde opačným směrem než původní operátor

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107105542.png)

<!-- ExampleEnd -->
<!--ID: 1780152138256-->
END

---

<!--
Original Flashcard ID: 1730978213084
-->

START
NI-SZZ


Jaké 2 základní vlastnosti může mít stavový prostor?

Back:

- Acyklický
- Cyklický

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107105951.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138266-->
END

---

<!--
Original Flashcard ID: 1730978213088
-->

START
NI-SZZ


Definice: **Vzdálenost uzlu $s_2$ od $s_1$**

Back:

![](../../Assets/Pasted%20image%2020241107110030.png)
<!--ID: 1780152138277-->
END

---

<!--
Original Flashcard ID: 1730978213092
-->

START
NI-SZZ


Co je **dostupný** graf?

Back:

Mezi **každými dvěma** uzly musí **existovat cesta**.

<!-- InformallySaidStart -->

Z každého stavu se dá dostat do každého stavu

<!-- InformallySaidEnd -->
<!--ID: 1780152138289-->
END

---

<!--
Original Flashcard ID: 1730978213096
-->

START
NI-SZZ


Co je **symetrický** graf?

Back:

Z **každého stavu** se do **každého stavu** dostanu po **stejně dlouhé cestě**.

![](../../Assets/Pasted%20image%2020241107110149.png)
<!--ID: 1780152138300-->
END

---

<!--
Original Flashcard ID: 1730978213099
-->

START
NI-SZZ


Co je **relaxace stavu**?

Back:

V našem algoritmu povolíme, aby se dostával do neplatných stavů, ale tyto stavy **penalizujeme** tak, že **zhoršíme hodnotu optimalizačního kritéria** na nějakou **vzdálenost** od platného řešení.

Neboli "jak moc blbě to je".

<!-- ExplanationStart -->

Jinými slovy penalizujeme stav podle toho "jak moc je blbě".

Např. u problému bahotu nám relaxace říká, jak moc je batoh přetížený (o jakou váhu)

Můžeme ve **vzorci** měnit koeficient a tím říkat "jak moc přísná" je ta pokuta.

Ten vzorec je typicky **součet** (nikoliv násobek)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107110828.png)

![](../../Assets/Pasted%20image%2020241107110814.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107111551.png)
![](../../Assets/Pasted%20image%2020241107111556.png)
![](../../Assets/Pasted%20image%2020241107111602.png)

<!-- ExampleEnd -->
<!--ID: 1780152138312-->
END

---

<!--
Original Flashcard ID: 1730978213103
-->

START
NI-SZZ


Co je **penalizace stavu**?

Back:

Povolíme neplatný řešení a nějak je **penalizujeme konstantní hodnotou**.

<!-- ExampleStart -->

Např. každému neplatnému stavu nastavíme hodnotu na nula.

<!-- ExampleEnd -->
<!--ID: 1780152138323-->
END

---

<!--
Original Flashcard ID: 1730978213106
-->

START
NI-SZZ


Jaký je vztah **stavového prostoru** a **prostoru prohledávání**?

Back:

Každému bodu prostoru prohledávání odpovídá oblast stavového prostoru.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241107112141.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107112150.png)
![](../../Assets/Pasted%20image%2020241107112155.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138335-->
END

---

<!--
Original Flashcard ID: 1730978213109
-->

START
NI-SZZ


Z čeho se skládá pohyb ve stavovém prostoru?

Back:

- **Aktuální stav** - konfigurace příslušející aktuálnímu stavu
- **Transformace** aktuálního stavu pomocí operátorů
- **Strategie prohledávání** - to jaké transformace aplikuju (např. v jakém pořadí)
<!--ID: 1780152138346-->
END

---

<!--
Original Flashcard ID: 1730978213113
-->

START
NI-SZZ


Definice: **úplná strategie**

Back:

![](../../Assets/Pasted%20image%2020241107112547.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107112714.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138356-->
END

---

<!--
Original Flashcard ID: 1730978213117
-->

START
NI-SZZ


Definice: **Systematické strategie**

Back:

![](../../Assets/Pasted%20image%2020241107112603.png)
<!--ID: 1780152138367-->
END

---

<!--
Original Flashcard ID: 1730978213120
-->

START
NI-SZZ


Co je **úplný algoritmus**?

Back:

![](../../Assets/Pasted%20image%2020241107112730.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107112740.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138378-->
END

---

<!--
Original Flashcard ID: 1730978213123
-->

START
NI-SZZ


Jak funguje **systematická strategie**?

Back:

![](../../Assets/Pasted%20image%2020241107112932.png)

Algoritmus:

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107113002.png)

![](../../Assets/Pasted%20image%2020241107113155.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138388-->
END

---

<!--
Original Flashcard ID: 1730978213126
-->

START
NI-SZZ


Jakou výhodu a nevýhodu mají **systematické strategie**?

Back:

- **Výhoda**: Naleznou **optimální řešení**, existuje-li
- **Nevýhoda**: Bez prořezávání má v nejhorším případě složitost rovnou **hrubé síle**
<!--ID: 1780152138399-->
END

---

<!--
Original Flashcard ID: 1730978213130
-->

START
NI-SZZ


Co je **lokální heuristika** v **systematické strategii**?

Back:

Lokální heuristika je funkce `try(state)`, která pomáhá najít nejlepšího kandidáta (stav) pro porovnání s best stavem v další iteraci.

Takto vypadá algoritmus využívající lokální heuristiku:
![](../../Assets/Pasted%20image%2020241109155157.png)
<!--ID: 1780152138409-->
END

---

<!--
Original Flashcard ID: 1730978213133
-->

START
NI-SZZ


Jak funguje **best only** lokální heurisitika u **systematické strategie**?

Back:

Vždy pokračuji do nejlepšího ze sousedů a jakmile lepší soused neexistuje, končím

<!-- DetailInfoStart -->

Jak funguje:

- Vybere **nejlepšího souseda daného stavu**.
- Pokud **žádný soused** není lepší než daný stav, **vrátí $\emptyset$**

![](../../Assets/Pasted%20image%2020241107113911.png)
![](../../Assets/Pasted%20image%2020241107113923.png)

Je to "nejmíň odfláknutá lokální heuristika".
<!-- DetailInfoEnd -->

<!--ID: 1780152138420-->
END

---

<!--
Original Flashcard ID: 1731175818734
-->

START
NI-SZZ


Záleží u **first improvement** a **best only** lokální heuristiky na pořadí procházení sousedů? Ovlivní to výsledek

Back:

- U **best only** na tom nezáleží, neovlivní to výsledek (pokud nejlepších stavů není více!)
- U **first improvement** na tom záleží, ovlivní to výsledek (-> je to víc randomizovaný)
<!--ID: 1780152138430-->
END

---

<!--
Original Flashcard ID: 1730978213137
-->

START
NI-SZZ


Jak funguje **first improvement** lokální heurisitika u **systematické strategie**?

Back:

Pokračuje hned do **prvního souseda**, který je lepší než **vybraný stav**.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107114138.png)
<!-- DetailInfoEnd -->
<!--ID: 1780152138441-->
END

---

<!--
Original Flashcard ID: 1730978213141
-->

START
NI-SZZ


Jaká je nevýhoda **first improvement** lokální heuristiky?

Back:

Při procházení preferuje ty stavy, které jsou nejblíže počátečnímu (resp. ty operátory).

To v některých algoritmech dělá neplechu, protože by výsledek algoritmu neměl záviset na uspořádání jednotlivých stavů/operátorů.
<!--ID: 1780152138452-->
END

---

<!--
Original Flashcard ID: 1730978213145
-->

START
NI-SZZ


Jak bych měl správně navrhovat heuristiky a stavové prostory?

Back:

- Spíše používat mnoho jednoduchých, rychlých akcí
- Spíše používat mnoho akcí, které nemění konfiguraci drasticky

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241107114531.png)

<!-- ImageEnd -->
<!--ID: 1780152138462-->
END

---

<!--
Original Flashcard ID: 1730978213481
-->

START
NI-SZZ


Co je "okolí heuristik Kerninghan-Lin"?

Back:

Prohledává se stavový prostor jedním směrem (jako větev DFS), potom se z celé větve vybere nejlepší řešení (stav) a ten se pak považuje za aktuální stav

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107114946.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138473-->
END

---

<!--
Original Flashcard ID: 1730978213543
-->

START
NI-SZZ


Co je **backtracking v prohledávacím prostoru**?

Back:

Možnost alogritmu se **vrátit v prohledávacím prostoru** (= odvolat nastavení proměnné), **aniž bych musel mít zadefinované inverzní operátory**, abych mohl "skákat zpět".
<!--ID: 1780152138484-->
END

---

<!--
Original Flashcard ID: 1730978213605
-->

START
NI-SZZ


SMAZAT

Back:

SMAZAT
<!--ID: 1780152138494-->
END

---

<!--
Original Flashcard ID: 1730978213610
-->

START
NI-SZZ


Na co se vztahuje **prořezávání** v prohledávacím prostoru?

Back:

Prořezávání se vztahuje na **oblast stavového prostoru**
<!--ID: 1780152138505-->
END

---

<!--
Original Flashcard ID: 1730978213614
-->

START
NI-SZZ


Jak funguje **prořezávání** v **prohledávacím prostoru**?

Back:

Prořezávání znamená, že **odstraním podprostory** v prohledávacím prostoru, které nemá smysl procházet.

<!-- ExampleStart -->

Problém batohu:
Když jsem došel do stavu, kdy už mám přeplněný batoh, tak nedává smysl zkoušet možnosti, jestli tam mám ještě něco přidávat nebo ne, protože v obou případech to furt bude přetížený (viz pravá větev na obrázku 2).
![](../../Assets/Pasted%20image%2020241107120212.png)
![](../../Assets/Pasted%20image%2020241107120318.png)

<!-- ExampleEnd -->
<!--ID: 1780152138516-->
END

---

<!--
Original Flashcard ID: 1730978213617
-->

START
NI-SZZ


Co je **problém zlomkového batohu**?

Back:

To samé jako problém batohu, ale můžu do batohu dát i jenom **část** nějaké věci.

Tzn. nejsem v celých číslech, ale v racionálních.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241107120736.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138526-->
END

---

<!--
Original Flashcard ID: 1730978213621
-->

START
NI-SZZ


Jak funguje **prohledávání** v prohledávacím prostoru **problému zlomkového batohu**?

Back:

_Pozn. tímhle si nejsem úplně jistý, jestli jsem ten algoritmus správně pochopil/popsal (ale dávalo by mi to takhle největší smysl) -Morčín_

1. Pro každého souseda:
	1. Naplním batoh co nejvíce tím sousedem (tou věcí)
	2. Spočtu cenu toho batohu
2. Ze všech sousedů vyberu toho co naplnil batoh největší cenou
3. Jako novou velikost batohu označím velikost zbývajícího prostoru v batohu

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241107121014.png)

<!-- ImageEnd -->
<!--ID: 1780152138537-->
END

---

<!--
Original Flashcard ID: 1730978213625
-->

START
NI-SZZ


Jak funguje obecně **prořezávání stavového prostoru**?

Back:

Funguje podobně jako u prohledávacího prostoru.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241107121206.png)

![](../../Assets/Pasted%20image%2020241107121215.png)
![](../../Assets/Pasted%20image%2020241107121220.png)
![](../../Assets/Pasted%20image%2020241107121227.png)

![](../../Assets/Pasted%20image%2020241107121235.png)
![](../../Assets/Pasted%20image%2020241107121246.png)

<!-- ExampleEnd -->
<!--ID: 1780152138547-->
END

---

<!--
Original Flashcard ID: 1735205749647
-->

START
NI-SZZ


Co jsou white box a black box evaluations?

Back:

- **white box:** spustíme heuristiku nad omezenou sadou instancí a ladíme ji
- **black box** spustíme heuristiku nad plnou sadou instancí a měříme výsledky (už bez ladění)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241120165850.png)
![](../../Assets/Pasted%20image%2020241120165902.png)
![](../../Assets/Pasted%20image%2020241120165909.png)
![](../../Assets/Pasted%20image%2020241120165915.png)

<!-- ExampleEnd -->
<!--ID: 1780152138558-->
END

---

## Pojem globálního a lokálního minima


START
FIT-Card

Co je **lokální** a **globální minimum** při prohledávání stavového prostoru?

Back:

- **globální minimum** = nejlepší stav ze všech řešení
- **lokální minimum** = stav, ze kterého se nedá dostat do lepšího, aniž bychom šli přes horší
<!--ID: 1780317231149-->
END

---


## Obrana před uváznutím v lokálním minimu

<!--
Original Flashcard ID: 1735205749600
-->

START
NI-SZZ

Jaké jsou způsoby řešení **uváznutí v lokálním optimu** nebo **úniku z lokálního optima**? (2)

Back:

- **Diverzifikace** - budeme rovnoměrněji prohledávat stavový prostor
	- např. tím, že připustíme přechod do horšího stavu
	- díky tomu spíše neuvízneme v lokálním optimu
- **Intenzifikace** - budeme se snažit konvergovat k optimálnímu řešení
	- např. tím, že budeme méně připouštět přechody do horšího stavu
	- díky tomu více konvergujeme k finálnímu řešení

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120162137.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138568-->
END

---

<!--
Original Flashcard ID: 1735205749602
-->

START
NI-SZZ


Jakými způsoby lze zajistit **diverzifikaci**?

Back:

- **Zvětšením okolí**, ze kterého vybíráme následující stav (např. $k$-okolí nebo Kerninghan-Lin)
- **Připustit akci, která zhorší řešení** (např. v simulovaném ochlazování)
- **Vytvoříme více stavů**, se kterými budeme pracovat (např. simulovaná evoluce)
- **Modelování stavového prostoru** nebo mapování (např. Bayesovská optimalizace)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120162156.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138579-->
END

---

<!--
Original Flashcard ID: 1735205749605
-->

START
NI-SZZ


Jaké jsou **pokročilé heuristiky**? (4)

Back:

- **Simulované ochlazování**
	- Jedna konfigurace, sekvenční řízení diverzifikace
- **Simulovaná evoluce**
	- Více konfigurací, interakce křížením
- **Bayeovská optimalizace**
	- Více konfigurací, statistický model stavového prostoru
- **fmGA**
	- Více fragmentů konfigurace

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241120162430.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138590-->
END

---