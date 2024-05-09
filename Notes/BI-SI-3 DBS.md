---
created: 2024-03-13T15:59:16
parent: "[[DBS]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-3 BI-WI-6 DBS

> BI-WSI-SI-3 / BI-WSI-WI-6 (DBS)
> Normalizace relačního schématu a normální formy (první, druhá, třetí, BCNF).

### Příklady
- Kromě teorie je asi fajn si procvičit odvozování funkční závislosti na nějakém příkladu

### Funkční závislost

START
BI-SZZ

Definice: **funkční závislost**

Back:

_Neformálně:_
Vyjádření integritních omezení závislostmi mezi dvěma atributy. Značí se pomocí šipky

_Formálně:_
![](../Assets/Pasted%20image%2020240313160406.png)


_Např.:_
Ke každému kinu existuje nejvýše jedna **adresa**.
<!--ID: 1710344600836-->
END

---


START
BI-SZZ

Definice: $X$-hodnota

Back:

_Neformálně:_
X-hodnota = libovolný prvek z kartézského součinu $dom(X_1) \times dom(X_2) \times \cdots \times dom(X_n)$, kde $X = \{ X_1, \dots, X_n \}$ je nějaká podmnožina atributů

_Formálně:_
![](../Assets/Pasted%20image%2020240313160443.png)
<!--ID: 1710344600843-->
END

---



START
BI-SZZ

Jaké jsou **Armstrongova pravidla** pro odvoditelnost funkční závislosti? (4)

Back:

- **triviální** FZ: $Y \subset X \implies X \to Y​$
- **tranzitivita**: $X \to Y \land Y \to Z \implies X \to Z​$
- **kompozice pravé strany**: $X \to Y \land X \to Z \implies X \to YZ​$
- **dekompozice pravé strany**: $X \to YZ \implies X \to Y \land X \to Z​$
<!--ID: 1710344600847-->
END

---


START
BI-SZZ

Definice: Tranzitivní uzávěr množiny atributů $X^+$ vzhledem k $F$

Back:

![](../Assets/Pasted%20image%2020240313161317.png)

Tags: optional
<!--ID: 1710344600850-->
END

---



START
BI-SZZ

Definice: Klíč relace

Back:

![](../Assets/Pasted%20image%2020240313161338.png)

Tags: optional
<!--ID: 1710344600853-->
END

---

### Normální formy


START
BI-SZZ

Co je **první normální forma** (1NF)?

Back:

**atributy jsou atomické** 

(jednoduché datové typy, žádná pole, objekty, struktury apod.)
<!--ID: 1710344600856-->
END

---


START
BI-SZZ

Co je **druhá normální forma** (2NF)?

Back:

**žádný neklíčový atribut není závislý na části klíče**

(jinými slovy: neklíčové atributy závisí vždy na celém klíči)
<!--ID: 1710344600859-->
END

---


START
BI-SZZ

Definice: **tranzitivní závislost**

Back:

![](../Assets/Pasted%20image%2020240313161938.png)

_Neformálně:_ funkčně závislý nepřímo
<!--ID: 1710344600863-->
END

---


START
BI-SZZ

Definice: **třetí normální forma**

Back:

![](../Assets/Pasted%20image%2020240313161954.png)

_Neformálně:_ žádný neklíčový atribut není tranzitivně závislý na žádném klíči
<!--ID: 1710344600866-->
END

---


START
BI-SZZ

Jak zjsitím, jestli je relace v 3NF?

Back:

![](../Assets/Pasted%20image%2020240313162409.png)
<!--ID: 1710344600869-->
END

---


START
BI-SZZ

Co platí, pokud platí $3NF$?

$$3NF \implies ???$$

Back:

$$3NF \implies 2NF$$
<!--ID: 1710344600872-->
END

---


START
BI-SZZ

Definice: **Boyceho-Coddova normální forma** (BCNF)

Back:

![](../Assets/Pasted%20image%2020240313162210.png)

_Neformálně:_ 
každá netriviální FZ obsahuje na levé straně klíč
jinými slovy: část jednoho klíče nesmí záviset na části druhého klíče
<!--ID: 1710344600875-->
END

---


START
BI-SZZ

Jak zjistím, jeslti je relace v BCNF?

Back:

Pro každou FZ platí:
![](../Assets/Pasted%20image%2020240313162447.png)

(tzn. jako u 3NF bez poslední podmínky)
<!--ID: 1710344600878-->
END

---


START
BI-SZZ

Co platí, pokud platí $BCNF$?

$$BCNF \implies ???$$

Back:

$$BCNF \implies 3NF$$

_Pozor, neplatí obráceně!_
<!--ID: 1710344600881-->
END

---


START
BI-SZZ

Jakých normálních forem se snažíme v praxi dosáhnout?

Back:

3NF nebo BCNF
<!--ID: 1710344600884-->
END

---



START
BI-SZZ

Co znamená, že "relační schéma je v n-té normální formě"?

Back:

Pokud platí daná podmínka
<!--ID: 1710344600887-->
END

---

### Normalizace


START
BI-SZZ

Co je **normalizace**?

Back:

Úprava relačního schématu tak, aby bylo **normalizované** (= splňovalo normální formy)
<!--ID: 1710344600890-->
END

---


START
BI-SZZ

K čemu je dobrá **normalizace**?

Back:

Snižuje redundanci a riziko aktualizačních anomálií.
<!--ID: 1710344600893-->
END

---


START
BI-SZZ

Pomocí čeho se dělá normalizace?

Back:

Pomocí **dekompozice**, tj. rozložení do vícero relací (tabulek)
<!--ID: 1710344600897-->
END

---


START
BI-SZZ

Jak normalizace ovlivňuje počet joinů při dotazování?

Back:

**zvyšuje** počet joinů při dotazování (nemusí být výhodná, pokud se data málo mění)
<!--ID: 1710344600900-->
END

---


START
BI-SZZ

Co je **bezztrátová dekompozice**?

Back:

jeden z možných “algoritmů” normalizace

_(Z přednášky:)_
![](../Assets/Pasted%20image%2020240313163508.png)
<!--ID: 1710344600903-->
END

---


START
BI-SZZ

Popiš algoritmus **bezztrátové dekompozice**

Back:

1. určit klíče
2. najít libovolnou FZ, která porušuje zvolenou normální formu
3. bezztrátově dekomponovat podle této FZ
    - tj. rozložit schéma $R(A,B,C)$, kde $A,B,C$ jsou disjunktní a $B \to C$, na dvě schémata $R_1(B,C)$ a $R_2(A,B)$
4. opakovat krok 2., dokud existují FZ porušující normální formu

_(To samé z přednáškových slidů:)_
![](../Assets/Pasted%20image%2020240313163603.png)
<!--ID: 1710344600906-->
END

---


START
BI-SZZ

Jaké jsou 2 podmínky kvalitní dekompozice?

Back:

- P1: **pokrytí funkčních závislostí** = nesmíme ztratit žádnou FZ (zmíněným postupem nezaručeno)
- P2: **bezztrátovost** = spojením vzniklých relací nesmí vzniknout nové prvky (zaručeno)
<!--ID: 1710344600909-->
END

---


START
BI-SZZ

Co je výsledkem **bezztrátové dekompozice**?

- V jaké normální formě je výsledek?
- Jaké podmínky P1/P2 jsou zaručeny?

Back:

![](../Assets/Pasted%20image%2020240313163915.png)
<!--ID: 1710344600912-->
END

---
