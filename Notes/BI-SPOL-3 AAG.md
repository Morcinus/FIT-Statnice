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
<!--ID: 1717934966275-->
END

---

START
BI-SZZ

**Na jaké operace** jsou uzavřené **bezkontextové jazyky**?

Back:

jsou uzavřené na $\cup, \cdot, ^*$
<!--ID: 1717934966278-->
END

---

START
BI-SZZ

Jaké jazyky jsou také **bezkontextové**?

Back:

všechny **konečné** a **regulární jazyky** jsou bezkontextové
<!--ID: 1717934966281-->
END

---

START
BI-SZZ

Bezkontextové jazyky jsou také jaké jazyky?

Back:

všechny bezkontextové jazyky jsou **kontextové**, **rekurzivní** a **rekurzivně spočetné**
<!--ID: 1717934966284-->
END

---

START
BI-SZZ

Co je to **bezkontextová gramatika**?

Back:

gramatika, jejíž pravidla mají tvar $A \to \alpha$ ($A$ $A$$\alpha$ je libovolná kombinace terminálů a neterminálů)
<!--ID: 1718035849117-->
END

---

START
BI-SZZ

Které gramatiky jsou **bezkontextové**?

Back:

všechny regulární gramatiky jsou bezkontextové
<!--ID: 1717934966287-->
END

---

START
BI-SZZ

Musí být **bezkontextová gramatika kontextová**?

Back:

bezkontextová gramatika může být zkracující, takže nemusí být vždy kontextová
<!--ID: 1717934966289-->
END

---

START
BI-SZZ

Jak lze **vizualizovat bezkontextové gramatiky**?

Back:

lze vizualizovat **derivačním stromem**
<!--ID: 1717934966292-->
END

---

START
BI-SZZ

Co je to **derivace v bezkontextové gramatice**?

Back:

**derivace** = posloupnost úprav z jedné větné formy na jinou pomocí přepisovacích pravidel
<!--ID: 1717934966295-->
END

---

START
BI-SZZ

Co je to **nejednozančná bezkontextová gramatika**?

Back:

**nejednozančná** BG = existuje věta vzniklá více různými derivačními stromy
<!--ID: 1717934966298-->
END

---

START
BI-SZZ

Co je to **bezkontextová gramatika bez cyklů**? Co musí splňovat aby byla bez cyklů?

Back:

BG **bez cyklů** = neexistuje v ní derivace $A \Rightarrow^+ A$

Musí splňovat:
- je bez $\varepsilon$-pravidel a bez jednoduchých pravidel $(A \to B)$
<!--ID: 1717934966301-->
END

---

START
BI-SZZ

Co je to **redukovaná** bezkontextová gramatika?

Back:

= bez negenerujících a nedostupných symbolů (analogie zbytečných a nedosažitelných stavů z konečných automatů)
<!--ID: 1717934966303-->
END

---

START
BI-SZZ

Co je to **vlastní** bezkontextová gramatika?

Back:

bez $\varepsilon$-přechodů, bez cyklů a redukovaná
<!--ID: 1717934966306-->
END

---

START
BI-SZZ

Kdy je bezkontextová gramatika v **normálním tvaru podle Chomského**?

Back:

= pravidla mají tvar $A \to BC$ nebo $A \to a$, případně ještě $S \to \varepsilon$, pokud $S$ není na žádné pravé straně

Pozn. každá BG lze převést do normálního tvaru
<!--ID: 1717934966309-->
END

---

START
BI-SZZ

Definice: **zásobníkový automat**

Back:

(nedeterministický) **zásobníkový automat** $R = (Q, \Sigma, G, \delta, q_0, Z_0, F)$, kde:
- $Q$ = konečná množina vnitřních **stavů**
- $\Sigma$ = konečná **vstupní abeceda**
- $G$ = konečná neprázdná **abeceda zásobníku**
- $\delta$ = **přechodová funkce** $Q \times (\Sigma \cup \{\varepsilon\}) \times G^* \to Q \times G^*$
    - $G^*$ nalevo je řetězec vybraný ze zásobníku, $G^*$ napravo je vkládaný řetězec
    - přechody se zapisují $(x, y/z)$, což znamená znamená přečíst $x$ ze vstupu, vybrat $y$ ze zásobníku a vložit $z$ na zásobník
- $q_0$ = **počáteční stav** $\in Q$
- $Z_0$ = **počáteční symbol** na zásobníku $\in G$
- $F$ = množina **koncových stavů** $\subseteq Q$

_Pozn._ vlastně to jsou konečné automaty navíc ještě se zásobníkovou pamětí
<!--ID: 1717934966311-->
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
<!--ID: 1717934966314-->
END

---

START
BI-SZZ

Popiš **deterministický** zásobníkový automat

Back:

= přechod je v každé konfiguraci jednoznačný
- nelze vytvořit pro každý bezkontextový jazyk ani pro každou bezkontextovou gramatiku (je výpočetně slabší než nedeterministický zásobníkový automat)
<!--ID: 1717934966317-->
END

---

START
BI-SZZ

Jaké jsou **typy** zásobníkových automatů podle **způsobu přijímání**?

Back:

- $R_f$ - přijímají řetězec, pokud jsou po dočtení vstupu v koncovém stavu
- $R_\varepsilon$ - přijímají řetězec, pokud mají po dočtení vstupu prázdný zásobník
<!--ID: 1717934966319-->
END

---

START
BI-SZZ

Co je to **syntaktická analýza bezkontextových jazyků**?

Back:

proces pro rozhodnutí, zda řetězec patří do jazyka popsaného danou gramatikou
<!--ID: 1717934966322-->
END

---

START
BI-SZZ

Co provádí **syntaktickou analýzu bezkontextových jazyků**?

Back:

zásobníkový automat je syntaktickým analyzátorem (= provádí tuto analýzu)
<!--ID: 1717934966325-->
END

---

START
BI-SZZ

Co je to **levá derivace** (v syntaktické analýze bezkontextových jazyků)?

Back:

= používání pravidel tak, že nahrazuji vždy nejlevější neterminál
- pravá derivace analogicky
<!--ID: 1717934966327-->
END

---

START
BI-SZZ

Co je to **levý rozklad** (v syntaktické analýze bezkontextových jazyků)?

Back:

= posloupnost čísel použitých pravidel při levé derivaci
- pravá derivace analogicky, ale posloupnost čísel je obrácená!
<!--ID: 1717934966330-->
END

---

START
BI-SZZ

V čem spočívá **metoda shora dolů** u syntaktické analýzy bezkontextových jazyků?

Back:

z gramatiky vytvoříme zásobníkový automat přijímající **prázdným zásobníkem** s vrcholem **vlevo**
<!--ID: 1717934966333-->
END

---

START
BI-SZZ

**Definuj** a **nakresli** zásobníkový automat pro **metodu shora dolů** při syntaktické analýze bezkontextového jazyka

Back:

$R = (\{q\}, \Sigma, N \cup \Sigma, \delta, q, S, \emptyset)$
- $(\varepsilon, A / \alpha)$ pro každé pravidlo $A \to \alpha$ (tzv. **expanze**)
- $(a, a/\varepsilon)$ pro každý terminál $a \in \Sigma$ (tzv. **srovnání**)

obrázek přechodové funkce:
![](../Assets/Pasted%20image%2020240609134428.png)
  
<!--ID: 1717934966335-->
END

---

START
BI-SZZ

Jaký **rozklad vstupní věty** najde automat vytvořený metodou shora dolů? (levý/pravý)

Back:

tento automat najde **levý** rozklad vstupní věty
<!--ID: 1717934966338-->
END

---

START
BI-SZZ

V čem spočívá **metoda zdola nahoru** u syntaktické analýzy bezkontextových jazyků?

Back:

z gramatiky vytvoříme zásobníkový automat přijímající **přechodem do koncového stavu** $r$ s vrcholem zásobníku **vpravo**
<!--ID: 1717934966341-->
END

---

START
BI-SZZ

**Definuj** a **nakresli** zásobníkový automat pro **metodu zdola nahoru** při syntaktické analýze bezkontextového jazyka

Back:

$R = (\{q,r\}, \Sigma, N \cup \Sigma \cup {Z_0}, \delta, q, Z_0, \{r\})$
- $(a, \varepsilon / a)$ z $q$ do $q$ pro každý terminál $a \in \Sigma$ (tzv. **přesun**)
- $(\varepsilon, \alpha/A)$ z $q$ do $q$ pro každé pravidlo $A \to \alpha$ (tzv. **redukce**)
- $(\varepsilon, Z_0S/\varepsilon)$ z $q$ do koncového stavu $r$ (tzv. **přijetí**)

obrázek přechodové funkce:
![](../Assets/Pasted%20image%2020240609134843.png)
<!--ID: 1717934966344-->
END

---

START
BI-SZZ

Jaký **rozklad vstupní věty** najde automat vytvořený metodou **zdola nahoru**? (pravý/levý)

Back:

tento automat najde **pravý** rozklad vstupní věty
<!--ID: 1717934966347-->
END

---
