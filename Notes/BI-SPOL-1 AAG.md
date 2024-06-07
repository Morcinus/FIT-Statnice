---
created: 2024-06-07T16:14:02
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-1 AAG

> BI-SPOL-1 (AAG)
> Přehled Chomského hierarchie formálních jazyků a gramatik. Turingovy stroje. Třídy problémů P, NP, NP-těžký, NP-úplný.

START
BI-SZZ

Co je to **abeceda** $\Sigma$ ?

Back:

konečná množina symbolů
<!--ID: 1717778217031-->
END

---

START
BI-SZZ

Co je to **řetězec** $w$?

Back:

konečná posloupnost symbolů z abecedy
- **prázdný řetězec** $\varepsilon$ je také řetězec
  
<!--ID: 1717778217035-->
END

---

START
BI-SZZ

Co je to **(formální) jazyk** $L$?

Back:

libovolná množina (konečných!) řetězců nad abecedou
<!--ID: 1717778217038-->
END

---

START
BI-SZZ

Co je to **rekurzivně spočetný jazyk**?

Back:

generovaný neomezenou gramatikou = přijímaný nějakým Turingovým strojem
<!--ID: 1717778217040-->
END

---

START
BI-SZZ

Co je to **rekurzivní jazyk**?

Back:

rozhodnutelný nějakým Turingovým strojem
<!--ID: 1717778217043-->
END

---

START
BI-SZZ

Co je to **kontextový jazyk**?

Back:

generovaný kontextovou gramatikou = generovaný nezkracující gramatikou = přijímaný nedeterministickým lineárně omezeným Turingovým strojem

<!--ID: 1717778217046-->
END

---

START
BI-SZZ

Co je to **bezkontextový jazyk**?

Back:

generovaný bezkontextovou gramatikou = přijímaný nedeterministickým zásobníkovým automatem
<!--ID: 1717778217049-->
END

---

START
BI-SZZ

Co je to **regulární jazyk**?

Back:

generovaný regulární gramatikou = přijímaný nějakým konečným automatem = popsatelný regulárním výrazem
<!--ID: 1717778217052-->
END

---

START
BI-SZZ

Co je to **konečný jazyk**?

Back:

obsahující konečný počet řetězců
<!--ID: 1717778217054-->
END

---

START
BI-SZZ

Popiš **hierarchii formálních jazyků*

Back:

![](../Assets/Pasted%20image%2020240607162918.png)
konečné jazyky $\subseteq$ regulární jazyky $\subseteq$ bezkontextové jazyky $\subseteq$ kontextové jazyky $\subseteq$ rekurzivní jazyky $\subseteq$ rekurzivně spočetné jazyky $\subseteq$ všechny (formální) jazyky
<!--ID: 1717778217057-->
END

---

START
BI-SZZ

Co je to **(neomezená formální) gramatika $G$**

Back:

**(neomezená formální) gramatika $G$** = struktura popisující formální jazyk, formálně je to čtveřice $G = (N, \Sigma, P, S)$, kde: 
- $N$ = konečná množina **neterminálů** $(A, B, C, \dots)$
- $\Sigma$ = konečná množina **terminálů** $(a, b, c, \dots)$ $(N \cap \Sigma = \emptyset)$
- řecká písmena $(\alpha, \beta, \gamma \dots)$ jsou libovolné kombinace terminálů a neterminálů
- $P$ = konečná množina **(přepisovacích) pravidel** ve tvaru $\gamma A \delta \to \alpha$
- $S$ = **počáteční neterminál/symbol** $\in N$
<!--ID: 1717778217060-->
END

---

START
BI-SZZ

Co je to **kontextová gramatika**?

Back:

její pravidla jsou ve tvaru $\gamma A \delta \to \gamma \alpha \delta$ $(\alpha \neq \varepsilon)$, případně ještě $S \to \varepsilon$, pokud $S$ není na žádné pravé straně
<!--ID: 1717778217063-->
END

---

START
BI-SZZ

Co je to **bezkontextová gramatika**?

Back:

její pravidla jsou ve tvaru $A \to \alpha$
<!--ID: 1717778217066-->
END

---

START
BI-SZZ

Co je to **regulární gramatika**?

Back:

její pravidla jsou ve tvaru $A \to a | aB$, případně ještě $S \to \varepsilon$, pokud $S$ není na žádné pravé straně
- regulární gramatiky $\subseteq$ bezkontextové gramatiky $\subseteq$ všechny (neomezené) gramatiky
- regulární gramatiky $\subseteq$ kontextové gramatiky $\subseteq$ všechny (neomezené) gramatiky
- mezi kontextovými a bezkontextovými ale žádná podmnožinovost není!
<!--ID: 1717778217069-->
END

---

START
BI-SZZ

Co je to **nezkracující gramatika**?

Back:

= neobsahuje žádné pravidlo, které by zkrátilo větnou formu, tj. napravo mělo méně symbolů než nalevo (s výjimkou $S \to \varepsilon$, pokud $S$ není na žádné pravé straně)
- regulární a kontextové gramatiky jsou nezkracující
<!--ID: 1717778217072-->
END

---

START
BI-SZZ

Co je to **věta**?

Back:

řetězec vygenerovaný gramatikou $\in \Sigma^*$
<!--ID: 1717778217075-->
END

---

START
BI-SZZ

Co je to **větná forma**?

Back:

“mezikrok” při generování věty $\in (N \cup \Sigma)^*$
<!--ID: 1717778217078-->
END

---

START
BI-SZZ

Co je to **derivace**?

Back:

úprava větné formy na jinou podle přepisovacích pravidel (resp. posloupnost takových úprav)
<!--ID: 1717778217081-->
END

---

START
BI-SZZ

Co je to **Turingův model**?

Back:

teoretický model počítače s řídící jednotkou (ta má konečný počet stavů a přechodových pravidel), nekonečnou páskou a čtecí hlavou
<!--ID: 1717778217084-->
END

---

START
BI-SZZ

Co je to **Turingův stroj**?

Back:

![](../Assets/Pasted%20image%2020240607164436.png)
<!--ID: 1717778217087-->
END

---

START
BI-SZZ

Co je to **lineárně omezený** **Turingův stroj** (LOTS)?

Back:

délka pásky je omezena k-násobkem vstupu
<!--ID: 1717778217090-->
END

---

START
BI-SZZ

Co je to **nedeterministický Turingův stroj** (NTS)?

Back:

přechodová funkce může pro jeden vstup vrátit různé výstupy $(\delta : (Q \setminus F) \times \Sigma \to \mathcal P ( Q \times G \times \{ -1, 0, 1 \} ) )$
- je stejně silný jako DTS (oba přijímají stejnou množinu jazyků)
<!--ID: 1717778217093-->
END

---

START
BI-SZZ

Co je to **vícepáskový Turingův stroj**?

Back:

má více pásek a čtecích hlav, je ekvivalentní jednopáskovému
<!--ID: 1717778217095-->
END

---

START
BI-SZZ

Co je to **univerzální Turingův stroj** $R_U$?

Back:

dokáže simulovat libovolný TS (na vstupu dostane binárně zakódovaný popis jiného TS $R$ a vstupní řetězec $w$, výsledek $R_U$ bude stejný jako kdyby $R$ dostal an vstupu $w$)
<!--ID: 1717778217098-->
END

---

START
BI-SZZ

Co je to **konfigurace Turingova stroje**?

Back:

**konfigurace** TS je trojice $(q, s, n)$, kde:
- $q$ je aktuální stav
- $s$ je zajímavá část pásky (nejmenší souvislá část obsahující všechny neprázdné symboly)
- $n$ je pozice čtecí hlavy na pásce
<!--ID: 1717778217101-->
END

---

START
BI-SZZ

Co to znamená, když se **TS zastaví**?

Back:

TS se **zastaví**$\iff$přešel do koncového stavu
<!--ID: 1717778217104-->
END

---

START
BI-SZZ

Co se stane, když **TS přijme vstupní řetězec**?

Back:

TS **přijme** vstupní řetězec$\iff$po přechodu do koncového stavu jsou na pásce jen prázdné symboly (v případě NTS přijme$\iff$existuje nějaká posloupnost přechodů, která takto skončí)
- nepřijmutí může nastat třemi způsoby: nedefinovaný přechod, zacyklení, nebo neprázdná páska po skončení
<!--ID: 1717778217107-->
END

---

START
BI-SZZ

Jaké jazyky **TS přijímají** a které **rozhodují**?

Back:

TS **přijímají** rekurzivně spočetné jazyky a **rozhodují** rekurzivní jazyky (= přijímají je a nikdy se nezacyklí)
<!--ID: 1717778217110-->
END

---

START
BI-SZZ

Co je to **rozhodovací problém**? popiš ho (jak ho lze řešit + jak jsou náročné optimalizační problémy)

Back:

**rozhodovací problém** = otázka, na kterou lze odpovědět _ano_ nebo _ne_
- lze jej řešit na TS, pokud instanci problému zakódujeme např. binárně
- problém je pak jazykem a všechny jeho instance s odpovědí _ano_ tvoří jazyk $L_{ano}$
- TS řeší rozhodovací problém$\iff$rozhoduje jazyk $L_{ano}$
- **optimalizační problémy** jsou stejně náročné jako rozhodovací
<!--ID: 1717778217113-->
END

---

START
BI-SZZ

Co je to **rozhodnutelný problém**? Jakým jazykům odpovídají a co je opakem?

Back:

**rozhodnutelný problém** = rozhodovací problém, který umíme vyřešit algoritmem
- odpovídají rekurzivním jazykům, např. hledání nejkratší cesty v grafu)
- opakem je nerozhodnutelný problém (např. halting problem)
<!--ID: 1717778217115-->
END

---

START
BI-SZZ

Co obsahuje **třída složitosti P**?

Back:

obsahuje rozhodovací problémy, které **lze** řešit v polynomiálním čase na **deterministickém** Turingově stroji
- tj. patří sem “efektivně řešitelné” problémy, např. hledání největšího společného dělitele a rozhodnutí prvočíselnosti
<!--ID: 1717778217119-->
END

---

START
BI-SZZ

Co obsahuje **třída složitosti NP**? Co sem například patří?

Back:

- obsahuje rozhodovací problémy, které **lze** řešit v polynomiálním čase na **nedeterministickém** Turingově stroji
- $P \subseteq NP$ (ale je možné, že $P = NP$, zatím to nikdo nedokázal ani nevyvrátil)
- patří sem např. faktorizace přirozených čísel
<!--ID: 1717778217123-->
END

---

START
BI-SZZ

Co je to **NP-těžký problém**?

Back:

= problém, na který lze převést všechny NP problémy polynomiální redukcí $\leq_p$ (=proces polynomiálně rychlého převodu instance jednoho problému na instanci jiného problému se stejnou pravdivostní hodnotou)
- sám nemusí patřit do NP
<!--ID: 1717778217126-->
END

---

START
BI-SZZ

Co je to **NP-úplný problém**? Kde se využívají?

Back:

- **NP-úplný problém** = NP-těžký a zároveň patří do NP
- pokud by byl nalezen polynomiálně rychlý deterministický algoritmus pro řešení libovolného NP-úplného problému, všechny NP problémy by byly polynomiálně rychle deterministicky řešitelné, a tedy by platilo $P=NP$
- např. problém obchodního cestujícího
- využívají se v kryptografii
<!--ID: 1717778217129-->
END

---

START
BI-SZZ

Jak funguje **Turingův stroj**?

Back:

- na začátku stojí čtecí hlava na levé buňce pásky, na pásce je zleva zapsán vstup, zbytek pásky je vyplněn prázdnými symboly
- jedna operace v nekoncovém stavu
1. přečtení symbolu z pásky
2. přechod do dalšího stavu podle $\delta$
3. zápis výstupního symbolu na pásku
4. posun čtecí hlavy
<!--ID: 1717778217132-->
END

---
