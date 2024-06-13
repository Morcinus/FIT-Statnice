---
created: 2024-05-26T19:02:06
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-12 LIN

> BI-SPOL-12 (LIN) Soustavy lineárních rovnic: 
> Frobeniova věta a související pojmy, vlastnosti a popis množiny řešení, Gaussova eliminační metoda.


### Pojmy

#### Soustava lineárních rovnic

START
BI-SZZ

Definice: **Soustava lineárních rovnic** (SLR)

Back:

![](../Assets/Pasted%20image%2020240526190406.png)
<!--ID: 1716747519696-->
END

---


START
BI-SZZ

Definice: **množina řešení soustavy** lineárních rovnic

Back:

![](../Assets/Pasted%20image%2020240526190429.png)

_Souvisí s definicí SLR:_
![](../Assets/Pasted%20image%2020240526190406.png)
<!--ID: 1716747519699-->
END

---


START
BI-SZZ

Definice: **Homogenní/nehomogenní SLR**

Back:

![](../Assets/Pasted%20image%2020240526190508.png)

_Souvisí s definicí SLR:_
![](../Assets/Pasted%20image%2020240526190406.png)
<!--ID: 1716747519702-->
END

---

#### Maticový zápis soustavy


START
BI-SZZ

Co je **$m$-prvkový vektor**?

Back:

$\mathbb{R}^{m,1}$ nebo pouze $\mathbb{R}^m$
<!--ID: 1716747519705-->
END

---


START
BI-SZZ

Co je **nulový vektor** $\theta$?

Back:

vektor z $\mathbb{R}^m$, jehož všechny prvky jsou $0$
<!--ID: 1716747519708-->
END

---


START
BI-SZZ

Co je **nulová matice** $\Theta$?

Back:

matice z $\mathbb{R}^{m,n}$, jejíž všechny prvky jsou nuly
<!--ID: 1716747519710-->
END

---


START
BI-SZZ

Definice: **vektor neznámých** a **vektor pravých stran**

Back:

Nechť $m, n ∈ \Bbb{N}, \Bbb{A} ∈\Bbb{R}^{m,n}$, $b ∈ \Bbb{R}^m$. Rovnici $\Bbb{A}x = b$ nazýváme soustavou $m$ lineárních rovnic pro $n$ neznámých $x_1, x_2, \dots , x_n$.

Vektor $x = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$ nazýváme vektorem neznámých

a vektor $b = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{pmatrix}$ vektorem pravých stran.

---

_Celá definice z přednášky:_
![](../Assets/Pasted%20image%2020240527110337.png)
<!--ID: 1716747519713-->
END

---


START
BI-SZZ

Definice: **rozšířená matice soustavy**

Back:

![](../Assets/Pasted%20image%2020240526191331.png)

---

_Celá definice z přednášky:_
![](../Assets/Pasted%20image%2020240527110337.png)
<!--ID: 1716747519716-->
END

---


START
BI-SZZ

Definice: **homogenní soustava**

Back:

Je-li $b = θ ∈ \mathbb{R}^m$, mluvíme o homogenní soustavě.


---

_Celá definice z přednášky:_
![](../Assets/Pasted%20image%2020240527110337.png)
<!--ID: 1716747519719-->
END

---


START
BI-SZZ

Definice: **přidružená homogenní soustava lineárních rovnic**

Back:

Soustava $\Bbb{A}x = θ$ je přidruženou homogenní soustavou lineárních rovnic k soustavě $\Bbb{A}x = b$.


---

_Celá definice z přednášky:_
![](../Assets/Pasted%20image%2020240527110337.png)
<!--ID: 1716747519721-->
END

---


START
BI-SZZ

Jak značíme množinu všech řešení pro homogenní a nehomogenní SLR?

Back:

Množinu všech řešení soustavy $\Bbb{A}x = b$ značíme $S$ a množinu řešení přidružené homogenní soustavy $S_0$.


---

_Celá definice z přednášky:_
![](../Assets/Pasted%20image%2020240527110337.png)
<!--ID: 1716747519724-->
END

---

#### Vektorový prostor


START
BI-SZZ

Definice: **vektorový prostor**

Back:

![](../Assets/Pasted%20image%2020240526191805.png)
![](../Assets/Pasted%20image%2020240526191845.png)

(axiomy jsou na další kartičce)

(Pozn. komutativní těleso = má komutativní vlastnosti pro sčítání a násobení, každý nenulový prvek má multiplikativní inverzi)
<!--ID: 1716747519727-->
END

---


START
BI-SZZ

Vyjmenuj **axiomy vektorového prostoru** (doporučuju napsat na papír)

Back:

![](../Assets/Pasted%20image%2020240526191838.png)
<!--ID: 1716747519729-->
END

---

#### podprostor

START
BI-SZZ

Definice: **podprostor**

Back:

![](../Assets/Pasted%20image%2020240526191918.png)
<!--ID: 1716747519732-->
END

---

#### soubor vektorů

START
BI-SZZ

Definice: **soubor vektorů**

Back:

uspořádaná $n$tice vektorů $(x_1, x_2, \dots , x_n)$, kde $x_i ∈ V​$

$V$ je vektorový prostor, 
pozor $\in V$ není to samý jako $\subseteq V$
<!--ID: 1716747519734-->
END

---

#### lineární kombinace


START
BI-SZZ

Definice: **lineární kombinace** (+ triviální lineární kombinace)

Back:

![](../Assets/Pasted%20image%2020240526192150.png)
<!--ID: 1716747519737-->
END

---

#### lineární závislost

START
BI-SZZ

Definice: **lineární závislost** (**lineárně závislý** a **lineárně nezávislý** soubor vektorů)

Back:

![](../Assets/Pasted%20image%2020240526192212.png)
<!--ID: 1716747519740-->
END

---


START
BI-SZZ

Definice: **lineární obal souboru vektorů**

Back:

![](../Assets/Pasted%20image%2020240526192253.png)
<!--ID: 1716747519743-->
END

---


START
BI-SZZ

Definice: **lineární obal množiny $M$**

Back:

![](../Assets/Pasted%20image%2020240526192309.png)
<!--ID: 1716747519746-->
END

---

#### Báze vektorového prostoru

START
BI-SZZ

Definice: **množina vektorů generuje prostor $V$**

Back:

**![](../Assets/Pasted%20image%2020240526192411.png)**
<!--ID: 1716747519749-->
END

---


START
BI-SZZ

Definice: **báze vektorového prostoru $V$** 

Back:

![](../Assets/Pasted%20image%2020240526192439.png)
<!--ID: 1716747519752-->
END

---

#### Dimenze vektorového prostoru


START
BI-SZZ

Definice: **dimenze vektorového prostoru**

Back:

![](../Assets/Pasted%20image%2020240526192829.png)

Řečeno hejhulácky:
v podstatě je to délka nejdelšího LN souboru ve $V$
<!--ID: 1716747519755-->
END

---

#### souřadnice vektoru v bázi


START
BI-SZZ

Definice: **souřadnice vektoru v bázi**

Back:

![](../Assets/Pasted%20image%2020240526192930.png)
<!--ID: 1716747519757-->
END

---

#### hodnost matice


START
BI-SZZ

Definice: **hodnost matice**

Back:

![](../Assets/Pasted%20image%2020240526193019.png)

_Prakticky:_
Když chci zjistit hodnost matice, převedu do horního stupňovitého tvaru a počet řádků je ta hodnost.

_Např. tahle matice má hodnost 2:_
![](../Assets/Pasted%20image%2020240527121441.png)
<!--ID: 1716747519760-->
END

---

### GEM (džem)


START
BI-SZZ

Definice: **horní stupňovitý tvar** 

(I guess není nutný znát přesně, spíš vědět, co to znamená)

Back:

_Řečeno hejhulácky:_
Kdybychom v každém řádku nahradili nuly, které jsou nalevo od nejlevějšího nenulového prvku (v tomto řádku), nějakým kvádrem, dostaneme schody, po kterých budeme moci vystoupat až k prvnímu řádku. Tvaru, který tuto schodovitou vlastnost bude mít, říkáme horní stupňovitý tvar.

![](../Assets/Pasted%20image%2020240526193217.png)

_Formální definice_
![](../Assets/Pasted%20image%2020240526193131.png)
<!--ID: 1716747519763-->
END

---


START
BI-SZZ

Jaké jsou 3 operace v rámci GEMu?

Back:

- Prohození řádků (G1)
- Vynásobení jednoho řádku matice nenulovým číslem (G2)
- Přičtení libovolného násobku jednoho řádku k jinému (G3)
<!--ID: 1716747519766-->
END

---


START
BI-SZZ

Věta: operace gemu a matice soustavy

Back:

![](../Assets/Pasted%20image%2020240526193331.png)
<!--ID: 1716747519769-->
END

---


START
BI-SZZ

Algoritmus: **GEM** (vlastními slovy, nemusí snad být přesně :D)

Back:

1. Zleva doprava vynecháváme sloupce, dokud nenarazíme na nenulový sloupec.
2. Vhodně prohodíme řádky (G1) tak, aby první řádek měl na začátku nenulové číslo.
3. Vytvoříme pomocí odečítání vhodného násobku prvního řádku (G3) schod v prvním sloupci (tj. nulové prvky na začátku 2. až posledního řádku). Vynecháme první řádek a první sloupec matice a pokračujeme krokem 1, dokud jsme nevynechali všechny řádky nebo sloupce.

_Formálně (tohle jestli budou chtít, tak jdu na další termín):_
![](../Assets/Pasted%20image%2020240526193406.png)
<!--ID: 1716747519771-->
END

---

### Frobeniova věta


START
BI-SZZ

Věta: **Frobeniova věta**

Back:

![](../Assets/Pasted%20image%2020240526193557.png)
<!--ID: 1716747519774-->
END

---

#### Řešení homogenní SLR


START
BI-SZZ

Je každá homogenní soustava rovnic řešitelná?

Back:

**Ano**!
<!--ID: 1716747519777-->
END

---


START
BI-SZZ

Algoritmus: **řešení homogenní SLR**

Back:

Řešíme soustavu $\Bbb{A}x = θ$ s rozšířenou maticí $(\Bbb{A}~|~θ)$, kde $\Bbb{A} ∈ T^{m,n}$ je v horním stupňovitém tvaru:
1. Pokud tím neporušíme horní stupňovitý tvar, můžeme prohodit pořadí sloupců v matici $\Bbb{A}$ (stejně prohodíme i příslušné proměnné).
2. Za vázané proměnné označíme proměnné příslušející hlavním sloupcům matice. Zbývající volné proměnné označme např. $(t_1, \dots , t_{n−h})$.
3. Zvolíme **libovolnou bázi prostoru** $T^{n−h}$, každá volba volných proměnných je tedy v jejím lineárním obalu.
4. Pro každý zvolený bazický vektor $(t_1, \dots , t_{n−h}) ∈ T^{n−h}$ reprezentující volbu volných proměnných **dopočítáme** ze soustavy **vázané proměnné.**
5. Dostáváme LN **soubor $n − h$ vektorů,** který **generuje** $S_0$.

_Doplňující informace:_
- každý nenulový řádek soustavy s maticí v **horním stupňovitém tvaru** nám umožňuje spočítat jednu neznámou, a to postupným dosazováním odspoda nahoru
    - tyto proměnné odpovídají **hlavním sloupcům** matice a nazýváme je **vázané proměnné**
    - proměnné ve vedlejší sloupcích jsou **volné proměnné**
- Dosadíme-li za všechny volné proměnné konkrétní hodnoty, vázané proměnné lze jednoznačně dopočítat
- Volných proměnných je přesně $n − h = n − h(\Bbb{A})$, což je podle Frobeniovy věty rovno dimenzi hledaného podprostoru řešení $S_0$
- Zvolíme-li jakoukoli bázi podprostoru $T^{n−h}$ a pro každý bazický vektor reprezentující nějakou volbu volných proměnných dopočítáme vázané proměnné, dostaneme dle předchozích bodů bázi $S_0$

_Příklad:_
![](../Assets/Pasted%20image%2020240526193710.png)
<!--ID: 1716747519780-->
END

---


START
BI-SZZ

Algoritmus: **řešení nehomogenní SLR**

Back:

**Rychlé shrnutí** (pokud už člověk jen opakuje):
1. Dostanu $(\Bbb{A}~|~b)$ do horního stupňovitýho tvaru a podle 1. části Frobeniovy věty ověřím, jestli $\Bbb{A}x = b$ má vůbec řešení. Pokud nemá končím.
2. Najdu partikulární řešení $\tilde{x}$ tak, že za volné proměnné dosadím $(0, \dots , 0)$ a dopočítám rovnice (neříkat "vypočítám matici" :D).
3. Za $b$ dosadím nulový vektor a vypočítám přidruženou homogenní SLR
4. Výsledek je $S = \tilde{x} + S_0$

**Detailní vysvětlení**:
Řešíme soustavu $\Bbb{A}x = b$ s rozšířenou maticí $(\Bbb{A}~|~b)$, kde $\Bbb{A} ∈ T^{m,n}$ je v horním stupňovitém tvaru:
1. Pokud tím neporušíme horní stupňovitý tvar, můžeme prohodit pořadí sloupců v matici $\Bbb{A}$ (stejně prohodíme i příslušné proměnné).
2. Pokud $h(\Bbb{A}) < h(\Bbb{A}~|~b)$, řešení neexistuje. V opačném případě postupujeme dále.
3. Za vázané proměnné označíme proměnné příslušející hlavním sloupcům matice. Zbývající volné proměnné označme např. $(t_1, \dots , t_{n−h})$.
4. Pro nalezení $\tilde{x}$ **zvolme za $(t_1, \dots , t_{n−h})$ libovolně** a ze soustavy $(\Bbb{A}~|~b)$ **dopočítejme vázané proměnné**.
	- oblíbenou volbou $(t_1, \dots , t_{n−h})$ = $(0, \dots , 0)$
5. Pro nalezení $S_0$ **zvolíme libovolnou bázi** prostoru $T^{n−h}$ (různé volby pro volné proměnné). Přejdeme k **řešení přidružené homogenní rovnice**, tedy vynulujeme pravou stranu soustavy.
6. Pro každý zvolený bazický vektor $(t_1, \dots , t_{n−h}) ∈ T^{n−h}$ reprezentující volbu volných proměnných **dopočítáme** ze soustavy $(\Bbb{A}~|~θ)$ **vázané proměnné** a dostáváme bázi $S_0$.
7. Řešením je $S = \tilde{x} + S_0$.

_Doplňující informace:_
protože z FV $S = \tilde{x} + S_0$, stačí najít partikulární řešení soustavy, pak už jen stačí kompletně vyřešit přidruženou homogenní SLR

_Příklad_
![](../Assets/Pasted%20image%2020240526193813.png)
<!--ID: 1716747519782-->
END

---


START
BI-SZZ

Pozorování: **rovnost** $u +\langle y_1, \dots , y_k\rangle = v + \langle z_1, \dots , z_k\rangle​$

Back:

![](../Assets/Pasted%20image%2020240526194226.png)
<!--ID: 1716747519785-->
END

---
