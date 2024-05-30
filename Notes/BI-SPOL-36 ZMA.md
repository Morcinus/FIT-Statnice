---
created: 2024-05-28T17:09:39
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-36 ZMA

> BI-SPOL-36 (ZMA)
> Číselné řady (konvergence číselné řady, kritéria konvergence, odhadování rychlosti růstu řad pomocí určitého integrálu)


START
BI-SZZ

Co jsou obecně **číselné řady**? Jak vznikají?

Back:

Speciální typ číselných posloupností. Vznikají postupným sčítáním členů zadané posloupnosti.
<!--ID: 1716916322233-->
END

---

### Posloupnosti (nutné pojmy)

START
BI-SZZ

Definice: **reálná posloupnost**

(tohle asi stačí tušit, není to hlavní zaměření té otázky)

Back:

![](../Assets/Pasted%20image%2020240528171807.png)

Skutečnost, že a : $\mathbb{N} → \mathbb{R}$ je posloupnost, zapisujeme symbolem $(a_n)^∞_{n=1}$.
<!--ID: 1716916322246-->
END

---


START
BI-SZZ

Definice: **konvergentní a divergentní posloupnost**

(tohle asi stačí tušit, není to hlavní zaměření té otázky)

Back:

![](../Assets/Pasted%20image%2020240528172035.png)
<!--ID: 1716916322248-->
END

---


START
BI-SZZ

Definice: **limita posloupnosti**

(tohle asi stačí tušit, není to hlavní zaměření té otázky)

Back:

![](../Assets/Pasted%20image%2020240528172126.png)
<!--ID: 1716916322251-->
END

---


<!-- Tohle nevím, jestli má cenu se učit -->
<!--START-->
<!--BI-SZZ-->

Definice: **hromadný bod**

(tohle asi stačí tušit, není to hlavní zaměření té otázky)

<!--Back:-->

![](../Assets/Pasted%20image%2020240528172256.png)

<!--Tags: optional-->

<!--END-->

---


START
BI-SZZ

Definice: **rostoucí, klesající, monotónní posloupnost**

Back:

Posloupnost $(a_n)^∞_{n=1}$ je **roustoucí** (resp. **klesající**), pokud $a_n \leq a_{n+1}$ (resp. $a_n \geq a_{n+1}$) pro každé $n \in \mathbb{N}$.

Posloupnost nazveme **monotónní** jestliže je **roustoucí** nebo **klesající**.
<!--ID: 1717097564428-->
END

---

### Definice


START
BI-SZZ

Definice: **Číselná řada**

Back:

Formální výraz $$\sum^\infty_{k=0}{a_k} = a_0 + a_1 + a_2 + \dots$$
kde $(a_k)^\infty_{k=0}$ je zadaná číselná posloupnost, nazýváme **číselnou řadou**.
<!--ID: 1716916322254-->
END

---


START
BI-SZZ

Definice: **Posloupnost částečných součtů**

Back:

$$s_n := \sum^n_{k=0}{a_k}, n \in \mathbb{N}_0$$

obecně je dobré si řadu představovat jako členy posloupnosti částečných součtů
<!--ID: 1716916322256-->
END

---


START
BI-SZZ

Definice: **konvergentní/divergentní řada**

Back:

Pokud je posloupnost částečných součtů definovaná předpisem:
$$s_n := \sum^n_{k=0}{a_k}, n \in \mathbb{N}_0$$
konvergentní, nazýváme příslušnou **řadu** také **konvergentní**.
<!--ID: 1716916322259-->
END

---


START
BI-SZZ

Definice: **Součet konvergentní řady**

Back:

Součtem konvergentní řady $\sum^\infty_{k=0}a_k$ nazýváme hodnotu limity $\lim_{n\to\infty}{s_n}$
<!--ID: 1716916322262-->
END

---

### Kritéria konvergence


START
BI-SZZ

Věta: **nutná podmínka konvergence**

Back:

![](../Assets/Pasted%20image%2020240528172750.png)

Neboli (obměněná implikace):
![](../Assets/Pasted%20image%2020240528172819.png)

_Příklad_:
![](../Assets/Pasted%20image%2020240528172847.png)
<!--ID: 1716916322265-->
END

---


START
BI-SZZ

Jaká máme v ZMA kritéria pro konvergenci řad? (5)

Back:

- Bolzano-Cauchyho
- Leibnizovo
- Sovnávací
- d'Alembertovo
- Integrální
<!--ID: 1717097564431-->
END

---


START
BI-SZZ

Věta: **Bolzano-Cauchyho kritérium**

Back:

![](../Assets/Pasted%20image%2020240528172914.png)

vágně řečeno: pro libovolně malé $ε$ musí existovat takový index (dostatečně velký) ve sčítané posloupnosti, že libovolná podposloupnost po sobě jdoucích čísel od indexu dál bude menší než to $ε$
<!--ID: 1716916322267-->
END

---


START
BI-SZZ

Definice: **Absolutní konvergence**

Back:

![](../Assets/Pasted%20image%2020240528172956.png)
<!--ID: 1716916322270-->
END

---


START
BI-SZZ

Věta: co vyplývá z toho, že je řada absolutně konvergentní?

Back:

Pokud je **absolutně konvergentní**, je i **konvergentní**.

![](../Assets/Pasted%20image%2020240529094106.png)
<!--ID: 1717097564434-->
END

---


START
BI-SZZ

Věta: **Leibnizovo kritérium**

Back:

![](../Assets/Pasted%20image%2020240528173029.png)

_Příklad_
![](../Assets/Pasted%20image%2020240528173043.png)
<!--ID: 1716916322274-->
END

---


START
BI-SZZ

Věta: **Srovnávací kritérium**

Back:

![](../Assets/Pasted%20image%2020240528173103.png)
<!--ID: 1716916322278-->
END

---


START
BI-SZZ

Věta: **d'Alembertovo kritérium**

Back:

![](../Assets/Pasted%20image%2020240528173121.png)

Takzvané podílové kritérium pro řady, **neplést** s podílovým kritériem pro funkce!

_Příklad_
![](../Assets/Pasted%20image%2020240528173424.png)
<!--ID: 1716916322280-->
END

---

### Odhad rychlosti růstu řad

#### Odhad asymptotického chování součtů integrálem

START
BI-SZZ

Věta: **Odhad asymptotického chování součtů integrálem**

Back:

![](../Assets/Pasted%20image%2020240528173725.png)

_Obrázek_:
![](../Assets/Pasted%20image%2020240528173745.png)

_Příklad:_
![](../Assets/Pasted%20image%2020240528173801.png)
<!--ID: 1716916322283-->
END

---

#### Integrální kritérium


START
BI-SZZ

Věta: **Integrální kritérium**

Back:

![](../Assets/Pasted%20image%2020240528173903.png)
<!--ID: 1716916322286-->
END

---
