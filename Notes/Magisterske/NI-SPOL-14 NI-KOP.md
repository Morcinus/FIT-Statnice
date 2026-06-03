---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-14 NI-KOP

> NI-SPOL-14 (NI-KOP)
> Princip genetických algoritmů, význam selekčního tlaku pro jejich funkci.


## Princip genetických algoritmů

<!--
Original Flashcard ID: 1735205749650
-->

START
NI-SZZ


Jaká je analogie **simulované evoluce** (biologický systém a optimalizační problém)?

Back:

![](../../Assets/Pasted%20image%2020241127151314.png)
![](../../Assets/Pasted%20image%2020241127151350.png)

Tags: core
<!--ID: 1780152137744-->
END

---

<!--
Original Flashcard ID: 1735205749653
-->

START
NI-SZZ


Jak vypadá proces simulované evoluce?

Back:

1. Máme populaci
2. **Selekce** - tím provedeme **intenzifikaci**, zvýšíme podíl **zdatných** jedinců
3. **Křížení** - zkombinujeme genetickou informaci do nových jedinců
4. **Mutace** - přidáme náhodný zdroj nové genetické informace -> **diverzifikace**
5. Máme populaci, můžeme skončit nebo pokračovat celé znovu

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127151531.png)

<!-- ImageEnd -->

Tags: core
<!--ID: 1780152137756-->
END

---

<!--
Original Flashcard ID: 1735205749655
-->

START
NI-SZZ


Jaké jsou prostředky **diverzifikace** a **intenzifikace** v simulované evoluci?

(aka co nám dělá diverzifikaci a intenzifikaci)

Back:

- Prostředky **diverzifikace**: **mutace**
- Prostředky **intenzifikace**: **selekce**

Tags: core
<!--ID: 1780152137768-->
END

---

<!--
Original Flashcard ID: 1737735239322
-->

START
NI-SZZ


Jaké jsou **4 hlavní strategie u simulované** evoluce?

Back:

- **genetický algoritmus**
- **genetické programování**
- **evoluční strategie**
- **evoluční programování**
<!--ID: 1780152137780-->
END

---

<!--
Original Flashcard ID: 1735205749658
-->

START
NI-SZZ


Nad jakou reprezentací pracuje **genetický algoritmus**?

(tohle bude u zkoušky)

Back:

Nad **binárním řetěžcem**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127152336.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137791-->
END

---

<!--
Original Flashcard ID: 1735205749660
-->

START
NI-SZZ


Nad jakou reprezentací pracuje **genetické programování**?

(tohle bude u zkoušky)

Back:

Nad **stromama**, programem, DFG (data flow graph)

Tags: core
<!--ID: 1780152137803-->
END

---

<!--
Original Flashcard ID: 1735205749663
-->

START
NI-SZZ


Nad jakou reprezentací pracuje **evoluční strategie**?

(tohle bude u zkoušky)

Back:

Nad **vektorem reálných čísel a odchylek**

Tags: core
<!--ID: 1780152137815-->
END

---

<!--
Original Flashcard ID: 1735205749665
-->

START
NI-SZZ


Nad jakou reprezentací pracuje **evolučního programování**?

(tohle bude u zkoušky)

Back:

Nad reprezentací **automatu**.

Tags: core
<!--ID: 1780152137826-->
END

---

<!--
Original Flashcard ID: 1735205749668
-->

START
NI-SZZ


Jakými způsoby lze nahradit starou generaci novou generací? (2)

Back:

- **náhrada** = nová generace nahradí starou
- **náhrada s elitismem** = nová generace nahradí starou, ale pár elitních jedinců zůstává
	- soutěž $\mu$ rodičů a $\lambda$ potomků, vyberu $\mu$ nových jedinců

Tags: core
<!--ID: 1780152137838-->
END

---

<!--
Original Flashcard ID: 1735205749670
-->

START
NI-SZZ


Jak se typicky zachází s potomky u těchto strategií:

- **genetický algoritmus**
- **genetické programování**
- **evoluční strategie**
- **evoluční programování**

Back:

- **genetický algoritmus** - náhrada
- **genetické programování** - libovolné
- **evoluční strategie** - získám víc potomků, než jsem měl rodičů ($\lambda > \mu$)
- **evoluční programování** - získám víc potomků, než jsem měl rodičů ($\lambda > \mu$)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127152948.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137853-->
END

---

<!--
Original Flashcard ID: 1737735239334
-->

START
NI-SZZ


Jak se reprezentují jedinci v genetických algoritmech?

Back:

Kódujou se pomocí binárního řetězce.
<!--ID: 1780152137866-->
END

---

<!--
Original Flashcard ID: 1735205749675
-->

START
NI-SZZ


Jak funguje **jednobodové křížení**?

Back:

V kódu dvou jednotlivců **vybereme náhodně bod**, kde to rozsekneme. Rozseknuté části potom v jednotlivcích prohodíme.

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241127153426.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1780152137877-->
END

---

<!--
Original Flashcard ID: 1735205749678
-->

START
NI-SZZ


Jak funguje **dvoubodové křížení**?

Back:

Náhodně zvolíme **dva body** a mezi nimi prohodíme geny dvou jednotlivců

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241127153504.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1780152137889-->
END

---

<!--
Original Flashcard ID: 1735205749680
-->

START
NI-SZZ


Jak funguje **uniformní křížení**?

Back:

Vygenerujeme náhodný vektor $\set { 0,1} ^n$. Na pozicích, kde je ve vektoru např. $0$, tak prohodíme prvky dvou jedinců.

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241127153749.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1780152137900-->
END

---

<!--
Original Flashcard ID: 1735205749683
-->

START
NI-SZZ


Jak funguje křížení pro permutační problémy (PMX)?

Back:

Náhodně si zvolím dva body. To co je mezi nima neprohazuju, ale použiju jako permutační tabulku.

Podle tabulky pak překóduju oba jedince.

Pozn. má to vlastnost, že z permutace mi to udělá znovu permutaci

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241127153936.png)

Zde:

- Ze sedmičky udělám dvojku (a obráceně), z devítky trojku (a obráceně), atd.

<!-- ExampleEnd -->

Tags: core
<!--ID: 1780152137911-->
END

---

<!--
Original Flashcard ID: 1735205749685
-->

START
NI-SZZ


Jak funguje **inverze** v genetice?

Back:

Problém u jedno a dvoubodového křížení je, to je závislé na pořadí genů (bitů). Určité bity mají pak větší pravděpodobnost, že zůstanou v prvním jedinci (viz obrázek).

Řešení: Bity se před křížením náhodně prohází, aby se vyrovnala ta pravděpodobnost.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127154327.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137922-->
END

---

<!--
Original Flashcard ID: 1735205749688
-->

START
NI-SZZ


Jak funguje **mutace**?

Back:

1. Dám si všechny jedince vedle sebe (nuly a jedničky)
2. Zvolím náhodně několik indexů v celém řetězci a na nich flipnu bit.

Řídím si, kolik indexů vyberu a díky tomu řídím pravděpodobnost, že mi daný jedinec zmutuje.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127154527.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137934-->
END

---

<!--
Original Flashcard ID: 1735205749690
-->

START
NI-SZZ


Jak funguje **selekce** v genetických algoritmech (množení)?

Back:

1. Máme jedince
2. Podle optimalizačního kritéria spočtu jeho zdatnost
3. Podle zdatnosti určíme pravděpodobnost výběru daného jedince
4. Náhodně vyberu jedince

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127154658.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137944-->
END

---

<!--
Original Flashcard ID: 1735205749693
-->

START
NI-SZZ


Jak funguje selekční tlak?

Back:

Selekční tlak mi určuje **pravděpodobnost výběru nejlepšího jedince**. Používá se při přepočtu zdatnosti na pravděpodobnost výběru jednotlivce. 

Extrémní případy:
$p=1$ znamená, že nejlepšího jedince vyberu určitě (-> intenzifikace)
$p=1/n$ nezáleží na zdatnosti (-> diverzifikace)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241127154846.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1780152137955-->
END

---

<!--
Original Flashcard ID: 1735205749695
-->

START
NI-SZZ


Jaký je vztah selekce a mutace?

Back:

Pomocí selekce ztrácím určité informace. Mutace mi to trochu kompenzuje, aby mi ty jedinci kompletně nezdegenerovali.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127154930.png)
![](../../Assets/Pasted%20image%2020241127155539.png)

<!-- ImageEnd -->

Tags: core
<!--ID: 1780152137967-->
END

---

<!--
Original Flashcard ID: 1735205749698
-->

START
NI-SZZ


Co se stane, když mám velký selekční tlak?

Back:

Je nebezpečná degenerace populace (zasekne se v lokálním optimu).

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127155539.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127155259.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137978-->
END

---

<!--
Original Flashcard ID: 1735205749700
-->

START
NI-SZZ


Co se stane, když mám malý sekvenční tlak?

Back:

Máme **pomalou konvergenci** -> dosáhnu lepšího výsledku, ale trvá dlouho

Hrozí i **divergence populace** - tzn. když budu mutovat tak moc, že mi to přehluší ty dobré geny, tak bude časem populace horší a horší a k dobrým výsledkům se moc nedostanu (protože mi to vždy přehluší ta mutace)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127155259.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152137990-->
END

---

<!--
Original Flashcard ID: 1735205749728
-->

START
NI-SZZ


Co je **Turnajový výběr**? Jakou roli hraje selekční tlak?

Back:

**Turnajový výběr**
- Náhodně se vybere $r$ jedinců (turnaj) a z něj nejlepšího.
- To se opakuje až do naplnění populace

**Selekční tlak**
- Určuje velikost turnaje.
- Pokud $p=1$, pak bude turnaj celá populace a tím pádem se vždy vybere nejzdatnější jedinec
- Pokud $p = 1/n$, tak není žádný selekční tlak a nezáleží na zdatnosti (protože je turnaj jen o jednom jednotlivci)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127161852.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138002-->
END

---

<!--
Original Flashcard ID: 1735205749730
-->

START
NI-SZZ


Jaké jsou různé **podmínky ukončení genetického algoritmu**? (aka jak rozhodnu, kdy algoritmus skončí)?

Back:

- Pevný počet generací
- Příznaky konvergence

Tags: core
<!--ID: 1780152138013-->
END

---

<!--
Original Flashcard ID: 1735205749733
-->

START
NI-SZZ

Co jsou **omezující podmínky v simulované evoluci**?

Back:

Omezující podmínky nám říkají, která řešení (konfigurace) jsou vůbec platná.

Např. u batohu nesmíme překročit maximální velikost batohu
<!--ID: 1780152138024-->
END

---


START
NI-SZZ

Jaké jsou **techniky pro práci s omezujícíma podmínkama**? (5)

Back:

**Standardní**
- **trest smrti** - když vznikne neplatné individuum, tak ho hned zahodíme (-> zmarněná práce)
- **oprava individua** - když vznikne neplatné individuum, upravíme ho tak, aby bylo platné (vnáší předpojatost!)
- **relaxace** - neplatná řešení nezahodíme, ale dovolíme jim existovat, jen jim zhoršíme zdatnost (-> budou vybírány méně často)

**Specifické** - snažíme se, aby nevalidní řešení vůbec nevznikly
- **doménové operátory** - použijeme speciální mutace a křížení přizpůsobené konkrétnímu typu řešení (z permutace vznikne zase permutace, z kružnice zase kružnice atd.)
- **doménové reprezentace** a dekódery - individuum nemusí reprezentovat výsledné řešení, ale "návod" podle kterého pak řešení dostaneme (např. snažíme se dostat optimální rozvrh ve škole, tak konfigurace nebude rozvrh, ale třeba jen pořadí předmětů. Z toho pak nějakým algoritmem rozvrh zkonstruujeme.)
<!--ID: 1780224118772-->
END

---

## Význam selekčního tlaku pro jejich funkci

<!--
Original Flashcard ID: 1735205749703
-->

START
NI-SZZ


Jak funguje **ruletový výběr**? (v selekčním tlaku)

Back:

Každému prvku dám pravděpodobnost výběru a roztočím ruletu a zvolím tím nějaký prvek.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127155711.png)

<!-- ImageEnd -->

Tags: core
<!--ID: 1780152138035-->
END

---

<!--
Original Flashcard ID: 1735205749708
-->

START
NI-SZZ


Co je **univerzální stochastické vzorkování**? (v selekčním tlaku)

Back:

Mírná úprava ruletového výběru, aby to dávalo lepší výsledky.

Odměříme náhodný úhel a vybereme prvek. Potom vždy $m-1$ krát odměříme úhel $2\pi / m$ a vždy vybereme prvek.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127155821.png)

<!-- ImageEnd -->

Tags: core
<!--ID: 1780152138046-->
END

---

<!--
Original Flashcard ID: 1735205749713
-->

START
NI-SZZ


Jaké jsou 3 **techniky u řízení selekčního tlaku pro ruletový výběr**?

Back:

- **lineární škálování** - Přepočítání zdatnosti lineární funkcí
- **ranking** - Použití pořadí ve zdatnosti místo zdatnosti
- **zkrácený výběr** - Prahování, zkrácený výběr

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127160029.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138057-->
END

---

<!--
Original Flashcard ID: 1735205749716
-->

START
NI-SZZ


Jak funguje **lineární škálování**? (**Scaling**)

Back:

Mám 2 případy, kdy můžu chtít udělat lineární škálování:

- Mám skupinu s pár zdatnými a pak hodně špatnými jedinci, chci je "přiblížit víc k sobě", aby mi ty méně slabí tolik "neumírali" - díky tomu budu mít větší diverzifikaci, protože se budou moct dál křížit i slabí jedinci
- Mám skupinu, kde mám naopak všechny jedince hodně blízko sebe, co se zdatnosti týče a chci aby "byli dál od sebe" - naopak abych mezi nimi byl schopný lépe rozlišovat

Lineární škálování je funkce, která mi přepočítá zdatnosti jedinců tak, abych přeškáloval $Z_{min}$ a $Z_{max}$ na $Z_1$ a $Z_2$, díky čemuž ty míň schopný jedince přiblížím těm schopným (1) a nebo naopak je oddálím (2. případ).

Každou zdatnost pak přepočítáme:
$$Z = Z_1+(z-Z_{min})\frac{Z_2-Z_1}{Z_{max}-Z_{min}}$$

kde $z$ je původní zdatnost

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241127160520.png)

<!-- ExampleEnd -->

Tags: core
<!--ID: 1780152138068-->
END

---

<!--
Original Flashcard ID: 1735205749718
-->

START
NI-SZZ


Jak se spočte **výsledný selekční tlak** (u lineárního škálování)?

Back:

$$c = \frac{Z_2}{nZ_{avg}}$$

$Z_2$ je nejvyšší zdatnost (nejlepšího jedince)
$Z_{avg}$ je průměrná zdatnost

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127160915.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138079-->
END

---

<!--
Original Flashcard ID: 1735205749720
-->

START
NI-SZZ


Jak lze zachovat **průměrnou zdatnost** při počítání selekčního tlaku?

Back:

Zdatnost spočtu pomocí $Z = a \cdot z + b$

Kde:
![](../../Assets/Pasted%20image%2020260531140141.png)

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127161031.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127161047.png)
![](../../Assets/Pasted%20image%2020241127161053.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152138091-->
END

---

<!--
Original Flashcard ID: 1735205749723
-->

START
NI-SZZ


Jak funguje **ranking**?

Back:

Ranking je další možnost jak udělat něco jako lineární škálování.

Funguje to tak, že si nastavím nějakou čáru a zdatnosti přeškáluju tak, aby se dotýkaly té čáry.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127161525.png)

<!-- ImageEnd -->

Tags: core
<!--ID: 1780152138103-->
END

---

<!--
Original Flashcard ID: 1735205749725
-->

START
NI-SZZ


Jak funguje **zkrácený výběr**? (truncation selection)

Back:

Určíme nějaký práh zdatnosti. Jedince nad prahem zarovnám na stejnou zdatnost, jedince pod prahem zarovnám na nulu.

Těhlech prahů můžeme udělat několik (a udělat takový schody, kde to rozdělíme do několika skupin podle zdatnosti).

Je to méně přesné než ostatní možnosti.
<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241127161622.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241127161632.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1780152138114-->
END

---