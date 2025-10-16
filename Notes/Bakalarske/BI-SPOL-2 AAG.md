---
created: 2024-06-09T10:53:54
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-2 AAG

> BI-SPOL-2 (AAG)
> Regulární jazyky: Deterministické a nedeterministické konečné automaty. Determinizace konečného automatu. Minimalizace deterministického konečného automatu. Operace s konečnými automaty. Regulární gramatiky, regulární výrazy, regulární rovnice.


START
BI-SZZ

Co je to **regulární jazyk**?

Back:

jazyk přijímaný nějakým konečným automatem = jazyk generovatelný nějakou regulární gramatikou = jazyk, který je hodnotou nějakého regulárního výrazu

- tyto tři způsoby popisu regulárního jazyka (konečný automat, regulární gramatika, regulární výraz) lze libovolně převádět jeden na druhý
<!--ID: 1717928191690-->
END

---

START
BI-SZZ

Na co jsou uzavřené **regulární jazyky**?

Back:

jsou uzavřené na všechny jazykové operace $(\cup, \cap, \overline L, \setminus, \cdot, ^*)$
<!--ID: 1717928191695-->
END

---

START
BI-SZZ

Jaký je vztah **regulárních** **jazyků** a **konečných jazyků**?

Back:

všechny konečné jazyky (= obsahující konečně mnoho řetězců) jsou regulární
<!--ID: 1717928191699-->
END

---


START
BI-SZZ

Definice: **konečný automat**

Back:

**konečný automat** $M = (Q, \Sigma, \delta, q_0, F)$, kde:
- $Q$ = neprázdná konečná množina **stavů**
- $\Sigma$ = konečná **vstupní abeceda**
- $\delta$ = **přechodová funkce** (viz DKA a NKA níže)
- $q_0$ = **počáteční stav** $\in Q$
- $F$ = množina **koncových stavů** $\subseteq Q$
- lze si představit jako řídící jednotku + vstupní pásku pro čtení + čtecí hlavu pohybující se jen vpravo
<!--ID: 1717928191705-->
END

---

START
BI-SZZ

Popiš **konfiguraci konečného automatu**

Back:

**konfigurace** konečného automatu = $(q, w)$, kde:
- $q$ = aktuální stav $\in Q$
- $w$ = dosud nepřečtená část vstupního řetězce $\in \Sigma^*$
- počáteční konfigurace = $(q_0, w)$
- koncová konfigurace = $(q, \varepsilon)$, kde $q \in F$
<!--ID: 1717928191707-->
END

---

START
BI-SZZ

Co je to **přechod $\vdash_M$** ?

Back:

**přechod** $\vdash_M$ = relace mezi konfiguracemi taková, že přechod existuje, pokud to povoluje přechodová funkce, tj. $(q, w) \vdash_M (p, w') \iff \exists a \in \Sigma, w \in \Sigma^*: w = aw' \land \delta(q, a) = p$
<!--ID: 1717928191710-->
END

---

START
BI-SZZ

Co je to **dosažitelný stav**?

Back:

**dosažitelný stav** = existuje řetězec vedoucí z $q_0$ do tohoto stavu ($\times$ nedosažitelný)
<!--ID: 1717928191713-->
END

---

START
BI-SZZ

Co je to **užitečný stav**?

Back:

= existuje řetězec vedoucí z tohoto stavu do $q \in F$ ($\times$ zbytečný)
<!--ID: 1717928191716-->
END

---

START
BI-SZZ

Co je to **úplně určený** konečný automat?

Back:

= přechodová funkce je definovaná pro všechny vstupy
<!--ID: 1717928191719-->
END

---

START
BI-SZZ

Co je to **homogenní** konečný automat?

Back:

= každý stav má na všech vstupních hranách stejný symbol
<!--ID: 1717928191722-->
END

---

START
BI-SZZ

Jak se převede **konečný automat na regulární gramatiku**?

Back:

stavy odpovídají neterminálům a přechody pravidlům

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191725-->
END

---

START
BI-SZZ

Jaké jsou **metody převodu konečného automatu na regulární výraz**? (3)

Back:

- metodou pravých regulárních rovnic (z odchozích přechodů)
- metodou levých regulárních rovnic (z příchozích přechodů)
- metodou eliminace stavů

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191728-->
END

---

START
BI-SZZ

Popiš deterministický konečný automat (DKA)

Back:

 $\delta: Q \times \Sigma \to Q$, tj. následující stav je jednoznačně určen konfigurací
<!--ID: 1717928191730-->
END

---

START
BI-SZZ

Co to znamená, když **deterministický** konečný automat **přijme řetězec**? Jak může nastat **nepřijmutí**?

Back:

**přijme** řetězec = dočte jej a skončí v koncovém stavu
- nepřijmutí může nastat dvěma způsoby: nedefinovaný přechod nebo skončení v nekoncovém stavu
<!--ID: 1717928191733-->
END

---

START
BI-SZZ

Popiš **nedeterministický konečný automat (NKA)**

Back:

 $\delta: Q \times \Sigma \to \mathcal P (Q)$, tj. ze stejné konfigurace lze přejít do více různých stavů
<!--ID: 1717928191736-->
END

---

START
BI-SZZ

Co to znamená, když **nedeterministický** konečný automat **přijme řetězec**?

Back:

**přijme** řetězec = existuje posloupnost přechodů, kdy je řetězec dočten a NKA skončil v koncovém stavu
<!--ID: 1717928191739-->
END

---

START
BI-SZZ

Může mít **NKA** více počátečních stavů?

Back:

může mít více počátečních stavů $(I \subseteq Q$ místo $q_0)$, ale jdou odstranit
<!--ID: 1717928191742-->
END

---

START
BI-SZZ

Co jsou **$\varepsilon$-přechody v NKA**?

Back:

může mít $\varepsilon$-přechody $(\delta: Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal P (Q))$, ale jdou odstranit
<!--ID: 1717928191744-->
END

---

START
BI-SZZ

Co je **determinizace konečného automatu**?

Back:

převod NKA na **ekvivalentní** (= stejný jazyk přijímající) DKA
<!--ID: 1717928191747-->
END

---

START
BI-SZZ

Které **NKA lze determinizovat**?

Back:

každý NKA lze determinizovat
<!--ID: 1717928191750-->
END

---

START
BI-SZZ

Co je před **determinizací** NKA potřeba **udělat** a jak?

Back:

- před determinizací je potřeba **odstranit více počátečních stavů** (např. přidáním nového počátečního stavu s $\varepsilon$-přechody do původních počátečních stavů)
  
- před determinizací je potřeba **odstranit $\varepsilon$-přechody**
1. pro každý stav vypočítat $\varepsilon$-closure (= množina stavů dosažitelná po $\varepsilon$-přechodech)
2. $\varepsilon$-přechody nahradit ne-$\varepsilon$-přechody ze všech stavů z $\varepsilon$-closure
3. označit stavy jako koncové, pokud mají ve své $\varepsilon$-closure koncový stav


_Příklad:_
![](../../Assets/Pasted%20image%2020240609151102.png)
<!--ID: 1717928191752-->
END

---

START
BI-SZZ

Popiš **algoritmus determinizace**

Back:

1. začít od nuly jedním počátečním stavem
2. postupně přidávat stavy, které reprezentují kombinace stavů, ve kterých se NKA mohl nacházet “najednou”, tj. pro stejný začátek vstupu (např. přidám stav BCE, který reprezentuje “superpozici” stavů B, C a E z původního NKA)
    - z NKA s $n$ stavy tedy může vzniknout DKA s až $2^n$ stavy
3. označit stavy za koncové, pokud “obsahují” nějaký původně koncový stav


![](../../Assets/Pasted%20image%2020240609152431.png)
![](../../Assets/Pasted%20image%2020240609152444.png)
![](../../Assets/Pasted%20image%2020240609152501.png)
<!--ID: 1717928191755-->
END

---

START
BI-SZZ

Co je to **minimalizace DKA**?

Back:

převod DKA na **minimální DKA** (= neexistuje ekvivalentní DKA s méně stavy)
<!--ID: 1717928191758-->
END

---

START
BI-SZZ

Pro jaké jazyky lze sestrojit **minimální DKA**?

Back:

pro každý regulární jazyk lze sestrojit a je unikátní
<!--ID: 1717928191761-->
END

---

START
BI-SZZ

Popiš **algoritmus minimalizace** DKA

Back:

1. **odstranit** **nedosažitelné** stavy
2. **odstranit** **zbytečné** stavy
3. **sloučit ekvivalentní stavy** (tzn. rozdělit stavy do skupin, na začátku na skupinu koncových a skupinu nekoncových, pak iterativně dělit skupiny na menší, pokud stavy uvnitř skupiny nemají stejné přechody z pohledu skupin, jakmile toto iterování nemění skupiny, v každé skupině jsou vzájemně ekvivalentní stavy a můžu je sloučit)

příklad tabulky hledání ekvivalentních stavů:
![](../../Assets/Pasted%20image%2020240609112647.png)

_Příklad_
![](../../Assets/Pasted%20image%2020240609153530.png)
![](../../Assets/Pasted%20image%2020240609153542.png)
![](../../Assets/Pasted%20image%2020240609153549.png)
![](../../Assets/Pasted%20image%2020240609153556.png)
<!--ID: 1717928191764-->
END

---

START
BI-SZZ

Vyjmenuj **operace s konečnými automaty**

Back:

sjednocení, průnik, doplněk, součin, iterace
<!--ID: 1717928191766-->
END

---

START
BI-SZZ

Co **sjednocení** konečných automatů? Jakými způsoby lze provést? (3)

Back:

**sjednocení** konečných automatů = vytvoření konečného automatu, který přijímá sjednocení jazyků přijímaných původními automaty

Lze provést několika způsoby:
- více počátečními stavy
- novým počátečním stavem s $\varepsilon$-přechody do původních počátečních stavů
- paralelní činností
<!--ID: 1717928191769-->
END

---

START
BI-SZZ

Jak lze provést **průnik** konečných automatů?

Back:

lze vytvořit pomocí **paralelní činnosti**

![](../../Assets/Pasted%20image%2020240609163343.png)
<!--ID: 1717928191772-->
END

---

START
BI-SZZ

Jak lze provést **doplňek** konečných automatů?

Back:

lze vytvořit převodem na úplně určený DKA a prohozením koncovosti stavů
<!--ID: 1717928191775-->
END

---

START
BI-SZZ

Jak lze provést **součin** (aka zřetězení) konečných automatů?

Back:

lze vytvořit přidáním $\varepsilon$-přechodů z původních koncových stavů prvního automatu do počátečních stavů druhého automatu
<!--ID: 1717928191778-->
END

---

START
BI-SZZ

Jak lze provést **iteraci** konečných automatů?

Back:

lze vytvořit přidáním nového počátečního stavu $q_0$, který bude zároveň koncový, a přidáním $\varepsilon$-přechodů ze všech původních koncových stavů do nového $q_0$
<!--ID: 1717928191780-->
END

---

START
BI-SZZ

Co je to **regulární gramatika**?

Back:

gramatika, jejíž pravidla mají tvar 
$A \to a | aB$, případně ještě $S \to \varepsilon$, pokud $S$ není na žádné pravé straně ($A, B, S$ jsou neterminály, $a$ je terminál)
<!--ID: 1718035849123-->
END

---

START
BI-SZZ

Čeho všecho je podmnožina **regulární gramatika**?

Back:

všechny regulární gramatiky jsou **bezkontextové**, **kontextové** a **nezkracující** a **neomezené**
<!--ID: 1717928191784-->
END

---

START
BI-SZZ

Jak lze převést **regulární gramatiku** na **konečný automat**?

Back:

neterminály odpovídají stavům a pravidla přechodům

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191786-->
END

---

START
BI-SZZ

Jak lze převést **regulární gramatiku** na **regulární výraz**? (2)

Back:

- metodou pravých regulárních rovnic
- metodou eliminace neterminálních symbolů

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191789-->
END

---

START
BI-SZZ

Definice: **Regulární výraz**

Back:

**regulární výraz** nad abecedou $\Sigma$ je definován rekurzivně:
- $\emptyset, \varepsilon, a$ jsou regulární výrazy nad $\Sigma$ $(\forall a \in \Sigma)$
- $x,y$ jsou regulární výrazy nad $\Sigma$ $\implies$následující jsou také regulární výrazy nad $\Sigma$:
    - $(x+y)$ - sjednocení aka alternativa
    - $(x \cdot y)$ - zřetězení
    - $(x)^*$ - iterace
    - závorky i tečku $\cdot$ lze vynechat, pokud jsou význam i priorita jednoznačné
<!--ID: 1717928191792-->
END

---

START
BI-SZZ

Definice: **hodnota regulárního výrazu**

Back:

**hodnota regulárního výrazu** = jazyk tímto výrazem reprezentovaný
- $h(\emptyset) = \emptyset, h(\varepsilon) = \{\varepsilon\}, h(a) = \{a\}$
- $h(x+y) = h(x) \cup h(y)$
- $h(x \cdot y) = h(x) \cdot h(y)$
- $h(x^{*}) = (h(x))^{*}$
<!--ID: 1717928191795-->
END

---

START
BI-SZZ

Popiš metody **převodu regulárníc výrazů** na **konečný automat** (3)

Back:

- metodou derivací
- metodou sousedů
- metodou postupné konstrukce

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191798-->
END

---

START
BI-SZZ

Popiš metody **převodu regulárníc výrazů** na **regulární gramatiku** (2)

Back:

- metodou derivací
- metodou postupné konstrukce

![](../../Assets/Pasted%20image%2020240609170735.png)
<!--ID: 1717928191801-->
END

---

START
BI-SZZ

Popiš levou a pravou **regulární rovnici** (+ v jakém tvaru mají řešení)

Back:

- $\alpha, \beta$ jsou známé regulární výrazy, $x$ je neznámý regulární výraz
- levá regulární rovnice $x = x\alpha + \beta$ má řešení $x = \beta\alpha^*$
- pravá regulární rovnice $x = \alpha x + \beta$ má řešení $x = \alpha^* \beta$
<!--ID: 1717928191805-->
END

---
