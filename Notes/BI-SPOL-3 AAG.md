---
created: 2024-06-09T11:58:32
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-3 AAG

> BI-SPOL-3 (AAG)
> Bezkontextové jazyky: Bezkontextové gramatiky, zásobníkové automaty a jejich varianty. Modely syntaktické analýzy bezkontextových jazyků.


START
BI-SZZ

Co je to **bezkontextový jazyk**?

Back:

jazyk generovaný nějakou bezkontextovou gramatikou = jazyk přijímaný nedeterministickým zásobníkovým automatem

END

---

START
BI-SZZ

**Na jaké operace** jsou uzavřené **bezkontextové jazyky**?

Back:

jsou uzavřené na $\cup, \cdot, ^*$

END

---

START
BI-SZZ

Jaké jazyky jsou **bezkontextové**?

Back:

všechny konečné a regulární jazyky jsou bezkontextové

END

---

START
BI-SZZ

Jaké jsou všechny **bezkontextové jazyky**?

Back:

všechny bezkontextové jazyky jsou kontextové, rekurzivní a rekurzivně spočetné

END

---

START
BI-SZZ

Co je to **bezkontextová gramatika**?

Back:

gramatika, jejíž pravidla mají tvar $A \to \alpha$ ($A$ $A$$\alpha$ je libovolná kombinace terminálů a neterminálů)

END

---

START
BI-SZZ

Které gramatiky jsou **bezkontextové**?

Back:

všechny regulární gramatiky jsou bezkontextové

END

---

START
BI-SZZ

Musí být **bezkontextová gramatika kontextová**?

Back:

bezkontextová gramatika může být zkracující, takže nemusí být vždy kontextová

END

---

START
BI-SZZ

Jak lze **vizualizovat bezkontextové gramatiky**?

Back:

lze vizualizovat **derivačním stromem**

END

---

START
BI-SZZ

Co je to **derivace bezkontextové gramatiky**?

Back:

**derivace** = posloupnost úprav z jedné větné formy na jinou pomocí přepisovacích pravidel

END

---

START
BI-SZZ

Co je to **nejednozančná bezkontextová gramatika**?

Back:

**nejednozančná** BG = existuje věta vzniklá více různými derivačními stromy

END

---

START
BI-SZZ

Co je to **bezkontextová gramatika bez cyklů**?

Back:

BG **bez cyklů** = neexistuje v ní derivace $A \Rightarrow^+ A$
- je bez $\varepsilon$-pravidel a bez jednoduchých pravidel $(A \to B)$

END

---

START
BI-SZZ

Co je to **redukovaná** bezkontextová gramatika?

Back:

= bez negenerujících a nedostupných symbolů (analogie zbytečných a nedosažitelných stavů z konečných automatů)

END

---

START
BI-SZZ

Co je to **vlastní** bezkontextová gramatika?

Back:

bez $\varepsilon$-přechodů, bez cyklů a redukovaná

END

---

START
BI-SZZ

Popiš BG v **normálním tvaru podle Chomského**

Back:

= pravidla mají tvar $A \to BC$ nebo $A \to a$, případně ještě $S \to \varepsilon$, pokud $S$ není na žádné pravé straně
- každá BG lze převést do normálního tvaru

END

---

START
BI-SZZ

Popiš **zásobníkový automat**

Back:

(nedeterministický) **zásobníkový automat** $R = (Q, \Sigma, G, \delta, q_0, Z_0, F)$, kde:
- $Q$ = konečná množina vnitřních **stavů**
- $\Sigma$ = konečná **vstupní abeceda**
- $G$ = konečná neprázdná **abeceda zásobníku**
- $\delta$ = __přechodová funkce $Q \times (\Sigma \cup \{\varepsilon\}) \times G^* \to Q \times G^*$
    - $G^*$ nalevo je řetězec vybraný ze zásobníku, $G^*$ napravo je vkládaný řetězec
    - přechody se zapisují $(x, y/z)$, což znamená znamená přečíst $x$ ze vstupu, vybrat $y$ ze zásobníku a vložit $z$ na zásobník
- $q_0$ = **počáteční stav** $\in Q$
- $Z_0$ = **počáteční symbol** na zásobníku $\in G$
- $F$ = množina **koncových stavů** $\subseteq Q$

- vlastně konečné automaty navíc ještě se zásobníkovou pamětí

END

---

START
BI-SZZ

Popiš **konfiguraci** zásobníkového automatu

Back:

**konfigurace** zásobníkového automatu = $(q, w, \alpha)$, kde:
- $q$ = aktuální stav $\in Q$
- $w$ = dosud nepřečtená část vstupního řetězce $\in \Sigma^*$
- $\alpha$ = aktuální obsah zásobníku $\in G^*$
- je důležité určit, zda má zásobník vrchol vlevo nebo vpravo

END

---

START
BI-SZZ

Popiš **deterministický** zásobníkový automat

Back:

= přechod je v každé konfiguraci jednoznačný
- nelze vytvořit pro každý bezkontextový jazyk ani pro každou bezkontextovou gramatiku (je výpočetně slabší než nedeterministický zásobníkový automat)

END

---

START
BI-SZZ

Jaké jsou **typy** zásobníkových automatů podle **způsobu přijímání**?

Back:

- $R_f$ - přijímají řetězec, pokud jsou po dočtení vstupu v koncovém stavu
- $R_\varepsilon$ - přijímají řetězec, pokud mají po dočtení vstupu prázdný zásobník

END

---

START
BI-SZZ

Co je to **syntaktická analýza bezkontextových jazyků**?

Back:

proces pro rozhodnutí, zda řetězec patří do jazyka popsaného danou gramatikou

END

---

START
BI-SZZ

Co provádí **syntaktickou analýzu bezkontextových jazyků**?

Back:

zásobníkový automat je syntaktickým analyzátorem (= provádí tuto analýzu)

END

---

START
BI-SZZ

Co je to **levá derivace** (v syntaktické analýze bezkontextových jazyků)?

Back:

= používání pravidel tak, že nahrazuji vždy nejlevější neterminál
- pravá derivace analogicky

END

---

START
BI-SZZ

Co je to **levý rozklad** (v syntaktické analýze bezkontextových jazyků)?

Back:

= posloupnost čísel použitých pravidel při levé derivaci
- pravá derivace analogicky, ale posloupnost čísel je obrácená!

END

---

START
BI-SZZ

V čem spočívá **metoda shora dolů**?

Back:

z gramatiky vytvoříme zásobníkový automat $(\{q\}, \Sigma, N \cup \Sigma, \delta, q, S, \emptyset)$ přijímající **prázdným zásobníkem** s vrcholem **vlevo**

END

---

START
BI-SZZ

Jaké má automat **přechody** v metodě **shora dolů**?

Back:

- $(\varepsilon, A / \alpha)$ pro každé pravidlo $A \to \alpha$ (tzv. **expanze**)
- $(a, a/\varepsilon)$ pro každý terminál $a \in \Sigma$ (tzv. **srovnání**)

obrázek přechodové funkce:
![](../Assets/Pasted%20image%2020240609134428.png)
  
END

---

START
BI-SZZ

Jaký **rozklad vstupní věty** najde automat vytvořený metodou shora dolů?

Back:

tento automat najde **levý** rozklad vstupní věty

END

---

START
BI-SZZ

V čem spočívá **metoda zdola nahoru**?

Back:

z gramatiky vytvoříme zásobníkový automat $(\{q,r\}, \Sigma, N \cup \Sigma \cup {Z_0}, \delta, q, Z_0, \{r\})$ přijímající **přechodem do koncového stavu** $r$ s vrcholem zásobníku **vpravo**

END

---

START
BI-SZZ

Jaké má automat **přechody** v metodě **zdola nahoru**?

Back:

- $(a, \varepsilon / a)$ z $q$ do $q$ pro každý terminál $a \in \Sigma$ (tzv. **přesun**)
- $(\varepsilon, \alpha/A)$ z $q$ do $q$ pro každé pravidlo $A \to \alpha$ (tzv. **redukce**)
- $(\varepsilon, Z_0S/\varepsilon)$ z $q$ do koncového stavu $r$ (tzv. **přijetí**)

obrázek přechodové funkce:
![](../Assets/Pasted%20image%2020240609134843.png)


END

---

START
BI-SZZ

Jaký **rozklad vstupní věty** najde automat vytvořený metodou **zdola nahoru**?

Back:

tento automat najde **pravý** rozklad vstupní věty

END

---
