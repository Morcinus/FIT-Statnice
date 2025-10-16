---
created: 2024-05-30T20:57:19
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-26 PST

> BI-SPOL-26 (PST)
> Základy statistické indukce, náhodný výběr, bodové odhady pro střední hodnotu a rozptyl, intervalové odhady pro střední hodnotu, testování statistických hypotéz o střední hodnotě


### TODO
- Přidat flashcards na studentovo t rozdělení a kritickou hodnotu standardního normálního rozdělení - jen abych věděl, jak tyhle věci získat, když počítám intervaly spolehlivosti

START
BI-SZZ

Co děláme ve **statistice**? (Čím se zabývá statistika?)

Back:

Na základě skutečných výsledků vybíráme vhodný model, odhadujeme hodnoty jeho parametrů, testujeme hypotézy o těchto parametrech a ověřujeme shodu modelu se skutečností.
<!--ID: 1717097564213-->
END

---

### Náhodný výběr


START
BI-SZZ

Definice: **Náhodný výběr**

Back:

![](../../Assets/Pasted%20image%2020231124154149.png)
<!--ID: 1717097564216-->
END

---


START
BI-SZZ

Definice: **Realizace náhodného výběru**

Back:

![](../../Assets/Pasted%20image%2020231124154215.png)

Jsou to jakoby konkrétní data. Tzn. už to není _náhodné_, ale už to jsou konkrétní data se kterými pracuju
<!--ID: 1717097564219-->
END

---


START
BI-SZZ

Jaké jsou jednotlivé **kroky statistického uvažování**? (3)

Back:

Mějme náhodný výběr z neznámého rozdělení. Na základě naměřených dat (realizace náhodného výběru) chceme o tomto rozdělení zjistit co nejvíce:

1. **Odhad tvaru rozdělení**
2. **Odhad parametrů rozdělení**
3. **Ověření správnosti modelu**
<!--ID: 1717097564221-->
END

---


START
BI-SZZ

Co se dělá v rámci **odhadu tvaru rozdělení** ve statistice?

Back:

- zúžení úvah na třídu rozdělení $F_θ$ určenou neznámým parametrem $θ$.
- vychází z apriorní znalosti, intuice nebo zkušenosti
<!--ID: 1717097564224-->
END

---


START
BI-SZZ

Co se dělá v rámci **odhadu parametrů rozdělení** ve statistice?

Back:

- **Bodový odhad** – určení “nejpravděpodobnější” hodnoty $θ$.
- **Intervalový odhad** – určení intervalu, ve kterém $θ$ leží s danou vysokou pravděpodobností
<!--ID: 1717097564227-->
END

---


START
BI-SZZ

Co se dělá v rámci **ověření správnosti modelu** ve statistice?

Back:

testování hypotéz
<!--ID: 1717097564229-->
END

---

### bodové odhady


START
BI-SZZ

Definice: **bodový odhad**

Back:

**Bodový odhad parametru** $θ$ je funkce $\hat{θ_n}(X_1, \dots , X_n)$ náhodného výběru, která nezávisí na hodnotách $θ$.
<!--ID: 1717097564232-->
END

---


START
BI-SZZ

Definice: **nestrannost** bodového odhadu

Back:

![](../../Assets/Pasted%20image%2020231124162254.png)

Jinými slovy odhad není zatížen systematickou chybou, tedy že odhadovanou hodnotu systematicky nepřestřeluje ani nepodhodnocuje

**Jak ověřím, že je můj odhad nestranný?** Jednoduše spočtu střední hodnotu toho odhadu. Pokud se rovná odhadovanému parametru, je odhad nestranný.
<!--ID: 1717097564235-->
END

---


START
BI-SZZ

Definice: **konzistence** bodového odhadu

Back:

![](../../Assets/Pasted%20image%2020231124162306.png)

**Jinými slovy** (aneb jak můžu ověřit konzistenci): Limita toho odhadu pro $n \longrightarrow \infty$ by se měla rovnat tomu odhadovanému parametru.

Tzn. se zvyšujíácím se počtem pokusů by se měl odhad zpřesňovat.
<!--ID: 1717097564238-->
END

---


START
BI-SZZ

Jak se spočte bodový odhad pro **střední hodnotu**?

Back:

**Střední hodnotu** rozdělení odhadneme pomocí výběrového průměru $\bar{X_n}$

![](../../Assets/Pasted%20image%2020231124161646.png)
<!--ID: 1717097564241-->
END

---


START
BI-SZZ

Jak se spočte bodový odhad pro **rozptyl**?

Back:

**Rozptyl** rozdělení odhadneme pomocí výběrového rozptylu $s^2_n$

$$s^2_n = \frac{1}{n-1}\sum^n_{i=1}({X_i} - \bar{X_n})^2$$
<!--ID: 1717097564244-->
END

---


START
BI-SZZ

Jak se spočtě rozptyl náhodné veličiny $X$?

Back:

$$var(X) = E(X-EX)^2=EX^2-(EX)^2$$
<!--ID: 1717961032514-->
END

---


#### metoda momentů

START
BI-SZZ

Jak funguje **metoda momentů**? Popiš jednotlivé kroky

Back:

Uvažujme náhodný výběr $X_1, \dots , X_n$ z rozdělení určeného $d$-rozměrným parametrem $θ = (θ_1, \dots , θ_d)$:
- **Napočítáme teoretické momenty** $E X^k_i , k = 1, ..., d$
- **Vyjádříme parametry** jako funkce momentů
- **Odhadneme teoretické momenty** pomocí výběrových momentů
$$ \widehat{EX^k_i} = \frac{1}{n}\sum^n_{i=1} {X^k_i} $$
- **Dosadíme odhadnuté momenty** do vztahů mezi parametry a teoretickými momenty. Odhady parametrů sestavíme řešením příslušné soustavy rovnic.

Pozn. kdyby nějaká rovnice vycházela jako 0 (např $EX_i$, musím rovnic udělat víc, abych měl $d$ nenulových a mohl s tím pracovat).

_Příklad:_
![](../../Assets/Pasted%20image%2020240530211026.png)
<!--ID: 1717097564247-->
END

---

#### Metoda maximální věrohodnosti


START
BI-SZZ

Definice: **věrohodnostní funkce**

Back:

![](../../Assets/Pasted%20image%2020231124165900.png)
<!--ID: 1717097564249-->
END

---


START
BI-SZZ

Definice: **maximálně věrohodný odhad**

Back:

![](../../Assets/Pasted%20image%2020231124170045.png)
<!--ID: 1717097564252-->
END

---


START
BI-SZZ

Jak funguje **metoda maximální věrohodnosti**?

Back:

1) **Sestavím věrohodnostní funkci**: $L(\theta;x)$: pomocí součinu pravděpodobností/fukncí
2) Většinou se vyplatí vytvořít **funkci logaritmické věrohodnosti**
	- $l(\theta) = \ln L(\theta)$
3) Najdeme $\theta$, které tu funkci **maximalizuje** (tzn. **derivace = 0**)

_Příklad_
![](../../Assets/Pasted%20image%2020240530211449.png)
<!--ID: 1717097564254-->
END

---

### Intervalové odhady


START
BI-SZZ

Definice: **interval spolehlivosti** (konfidenční interval) a **hladina spolehlivosti**

Back:

![](../../Assets/Pasted%20image%2020231209145742.png)

- V důsledku **CLV** můžeme pro velké $n$ stejné intervaly spolehlivosti použít přibližně i pro náhodný výběr **z libovolného rozdělení**

![](../../Assets/Pasted%20image%2020240530212723.png)
<!--ID: 1717097564257-->
END

---


START
BI-SZZ

Co použiju, když hledám **oboustranný** intervalový odhad pro **střední hodnotu**?

Back:


![](../../Assets/Pasted%20image%2020240101172136.png)

![](../../Assets/Pasted%20image%2020240101172142.png)

- $z_α$ je kritická hodnota **standardního normálního rozdělení**
    - $Φ^{−1}(1 − α)$, tj. číslo, pro které platí $P(Z > z_α) = α$ pro $Z ∼ N(0, 1)$
- $t_{α,n−1}$ je kritická hodnota **Studentova t-rozdělení** s $n − 1$ stupni volnosti
<!--ID: 1717097564260-->
END

---


START
BI-SZZ

Co použiju, když hledám **levý (dolní)** intervalový odhad pro **střední hodnotu**?

Back:

![](../../Assets/Pasted%20image%2020240101172202.png)
![](../../Assets/Pasted%20image%2020240101172142.png)

- $z_α$ je kritická hodnota **standardního normálního rozdělení**
    - $Φ^{−1}(1 − α)$, tj. číslo, pro které platí $P(Z > z_α) = α$ pro $Z ∼ N(0, 1)$
- $t_{α,n−1}$ je kritická hodnota **Studentova t-rozdělení** s $n − 1$ stupni volnosti
<!--ID: 1717097564263-->
END

---


START
BI-SZZ

Co použiju, když hledám **pravý (horní)** intervalový odhad pro **střední hodnotu**?

Back:

![](../../Assets/Pasted%20image%2020240101172213.png)

![](../../Assets/Pasted%20image%2020240101172142.png)

- $z_α$ je kritická hodnota **standardního normálního rozdělení**
    - $Φ^{−1}(1 − α)$, tj. číslo, pro které platí $P(Z > z_α) = α$ pro $Z ∼ N(0, 1)$
- $t_{α,n−1}$ je kritická hodnota **Studentova t-rozdělení** s $n − 1$ stupni volnosti
<!--ID: 1717097564266-->
END

---

### Testování hypotéz

START
BI-SZZ

Co je **nulová hypotéza**?

Back:

**Nulová hypotéza** $H_0$ označuje tvrzení, které chceme potvrdit nebo zamítnout.
<!--ID: 1717097564270-->
END

---


START
BI-SZZ

Co je **alternativní hypotéza**?

Back:

**Alternativní hypotéza** $H_A$ je opačné tvrzení, které stavíme proti $H_0$.
<!--ID: 1717097564273-->
END

---


START
BI-SZZ

Jaké jsou **chyby** při testování hypotéz?

Back:

- **prvního druhu —** zamítneme $H_0$, ačkoli platí
- **druhého druhu —** nezamítneme $H_0$, ačkoli neplatí (platí $H_A$)
<!--ID: 1717097564276-->
END

---


START
BI-SZZ

Co je **hladina významnosti** u testování hypotéz? Jakou běžně volíme?

Back:

- **hladina významnosti** $\alpha$
	- maximální tolerovaná pravděpodobnost chyby prvního druhu
	- běžně volíme $α = 5\%$ nebo $α = 1\%$
<!--ID: 1717097564278-->
END

---


START
BI-SZZ

Jak provedeme **parametrický test ověření hypotézy**?

Back:

- Zvolíme hladinu významnosti $α$.
- Napozorujeme realizace náhodného výběru.
- Zkonstruujeme konfidenční interval o spolehlivosti $1 − α$, odpovídající alternativní hypotéze $H_A$.
- Zamítneme $H_0$, pokud testovaná hodnota $θ_0$ neleží v tomto intervalu spolehlivosti.

![](../../Assets/Pasted%20image%2020240530212951.png)
![](../../Assets/Pasted%20image%2020240530213001.png)
<!--ID: 1717097564281-->
END

---
