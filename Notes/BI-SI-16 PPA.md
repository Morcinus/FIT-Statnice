---
created: 2024-06-04T16:37:10
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-16 BI-WI-11 PPA

>BI-WSI-SI-16 / BI-WSI-WI-11 (PPA)
> 
> Logické programování, Prolog: fakta, pravidla, dotazy, způsob vyhodnocení dotazů, unifikace, operátor řezu.

START
BI-SZZ

Co je **logické programování**?

Back:

- **Deklarativní způsob** programování
- Založeno na predikátové logice
- Programy jsou vyjádřeny ve formě specifikace relací reprezentovaných jako fakty a pravidla
- Využívá se: AI, databáze, expertní systémy…
<!--ID: 1717529248308-->
END

---

START
BI-SZZ

Z čeho se skládá program v **Prologu**?

Back:

- Skládá z Hornových klauzulí (axiomů)
- *“Pokud B1 je pravdivé a B2 je pravdivé … a Bn je pravdivé potom H je pravdivé”*
<!--ID: 1717529248316-->
END

---

START
BI-SZZ

Co mohou být **axiomy** v Prologu?

Back:

- Fakta
- Pravidla
- Dotazy
<!--ID: 1717529248319-->
END

---

START
BI-SZZ

Jak se **pracuje** s Prologem?

Back:

- Definice axiomů
- Zadání dotazu
- Systém se pokusí dokázat dotaz nalezením posloupnosti kroků

![](../Assets/Pasted%20image%2020240604164752.png)
<!--ID: 1717529248322-->
END

---


START
BI-SZZ

Co jsou to **fakta** v Prologu?

Back:

- Klauzule s hlavičkou a bez těla

```prolog
parent(josef, jan).
parent(josef, sarka).
parent(jana, jan).
male(jan).
female(sarka).
```
<!--ID: 1717529248325-->
END

---


START
BI-SZZ

Co jsou to **pravidla** v Prologu?

Back:

- Mají hlavičku i tělo

```prolog
mother(X,Y) :- parent(X,Y), female(X).
father(X,Y) :- parent(X,Y), male(X).
grandmother(X,Y) :- mother(X,Z), parent(Z,Y).
grandfather(X,Y) :- father(X,Z), parent(Z,Y).
brother(X,Y) :- parent(Z,X), parent(Z,Y), male(X).
```
<!--ID: 1717529248328-->
END

---


START
BI-SZZ

Co jsou to **dotazy** v Prologu?

Back:

- K získání informací o datech
- Nemají tělo

```prolog
?- parent(josef,sarka).
% true.

?- predecessor(X,sarka).
X=jana
X=josef
X=anna
% false.
```
<!--ID: 1717529248331-->
END

---

START
BI-SZZ

Co jsou to **termy** v Prologu?

Back:

- Hlavičky a těla v axiomech jsou termy
<!--ID: 1717529248334-->
END

---

START
BI-SZZ

Jaké jsou typy **termů** v Prologu?

Back:

- **Atomy** – začínají na malé písmeno (`x`, `y`, `z`, `fred`)
- **Čísla** – celá, reálná
- **Proměnné** – začínají na velké písmeno
- Struktury – obsahují atom, kterému se říká funktor, a seznam argumentů (`edge(a,b)`, `line(1,2,4)`)

![](../Assets/Pasted%20image%2020240604165311.png)
<!--ID: 1717529248337-->
END

---

START
BI-SZZ

Co jsou to **seznamy** v Prologu?

Back:

- `[]` – prázdný seznam
- `[1]`
- `[1,2,3]`
- `[[1,2], 3]` – seznam může být heterogenní
- `[a | [b,c]]` – `|` odděluje hlavičku od těla
<!--ID: 1717529248340-->
END

---

START
BI-SZZ

Jaké jsou **operátory** v Prologu?

Back:

- **Přiřazování**: `Z is Z+1`
- **Konjunkce**: `,`
- **Disjunkce** `;`

```prolog
p(X):- a(X,Y),b(Y);c(Y),d(X,Y). % is equivalent to p(X):- a(X,Y),b(Y). p(X):- c(Y),d(X,Y).
```
<!--ID: 1717529248343-->
END

---

START
BI-SZZ

Jak se **vyhodnocují dotazy** v Prologu?

Back:

- Vyhodnocuje se na principu procházení stavového prostoru
- Řešení se hledá pomocí backtrackingu a unifikace
- Postupné vyhodnocování
	1. Fakty
	2. Pravidla bez rekurze
	3. Rekurzivní pravidla (preferovaná koncová rekurze)

**Splnění dotazů**
- Při splňování cíle hledá prolog nejdříve první klauzuli, která odpovídá jménem a aritou cíli. Hledání této klauzule probíhá v pořadí specifikace klauzulí v programu (tedy od začátku směrem ke konci programu)
- Najde-li odpovídající klauzuli, pak se provede unifikace mezi cílem a hlavou klauzule a začne se vykonávat tělo (s substitucemi, které vznikly unifikací).
- Pokud je klauzule faktem, máme hotovo.
- Pokud je klauzule pravidlem, pak se postupně pokoušíme splnit cíle v pořadí zleva doprava. Uspějí-li všechny, pak uspěl i původní cíl. Pokud nějaký neuspěl, pomocí backtrackingu se vrací k poslednímu bodu rozhodnutí a zkouší se rozhodnout jinak.
- 
<!--ID: 1717529248346-->
END

---

START
BI-SZZ

Jak se **hledá řešení** v Prologu?

Back:

Řešení se hledá pomocí backtrackingu a unifikace (tj prohledávání grafu do hloubky).

*“Vyhodnocuj dokud můžeš a každý bod rozhodnutí si zapamatuj. V momentě kdy se něco nedá splnit (unifikovat), vrať se k nejbližšímu bodu a proveď jiné rozhodnutí.”*

END

---

START
BI-SZZ

Jaké **zdroje nedeterminismu** jsou přítomny při vyhodnocování dotazů v Prologu? Jak se řeší? (2)

Back:

- Které pravidlo se má využít? – DFS algoritmus
- Který subgoal má být použit? – Těla se prochází zleva doprava
<!--ID: 1717529248349-->
END

---


START
BI-SZZ

Co je to **unifikace** v Prologu?

Back:

Proces, při kterém dochází ke snaze o dosazení termů za proměnné výrazu tak, že se původní termy stanou identickými

```prolog
parent(X) = parent(petr)
% unifikovatelné, unifikace X = petr

parent(X,Y) = father(petr, Z)
% neunifikovatelné, různá jména funktorů

parent(X,X) = parent(petr, Z)
% unifikovatelné, unifikace X = Z, Z = petr

parent(X,eva) = parent(petr, X)
% neunifikovatelné
```
<!--ID: 1717529248352-->
END

---


START
BI-SZZ

Co je to a k čemu slouží **operátor řezu** v Prologu?

Back:

- Operátor `!`
- Omezuje splnění podcílů vlevo od řezu na jedinou možnost.
- Překročení řezu zamezí využití ostatních pravidel.
- Řez neovlivňuje zpětný chod vpravo do svého výskytu

```prolog
% přidání prvku X na jeho začátek ovšem jen v tom případě,
% že X v L již není
% pridej(+X,+L,-NL) seznam NL vznikne ze seznamu L
pridej(X,L,L) :- prvek(X,L),
% je-li X již prvkem L, nepřidám ho ! . % a zakáži návrat

pridej(X,L,[X|L]).
% X není prvkem L (jinak bych se sem nedostal), mohu ho tedy přidat
```
<!--ID: 1717529248355-->
END

---

START
BI-SZZ

K čemu se používá **červený řez** v Prologu?

Back:

- Používá se za účelem nalezení správných výsledků
- Bez jeho použití program vracel jiné/nesprávné výsledky

```prolog
%fact(+X, -N)

fact(0,1) :- !.
fact(X, N) :- X1 is X – 1, fact(X1, N1), N is N1 * X.
```
<!--ID: 1717529248358-->
END

---


START
BI-SZZ

K čemu se používá **zelený řez** v Prologu?

Back:

- Nemění výsledky
- Zamezuje prohledávání části stavového prostoru, kde výsledky nejsou
- Zlepšuje efektivitu výpočtu

```prolog
%fact(+X, -N)

fact(0,1) :- !.
fact(X, N) :- X > 0, X1 is X – 1, fact(X1, N1), N is N1 * X.
```
<!--ID: 1717529248361-->
END

---


START
BI-SZZ

K čemu slouží **fail** operátor v Prologu?

Back:

- Pro řešení situací typu: _“Jana má ráda muže, ale ne plešaté.”_
- Bez operátoru řezu to nejde. S ním a se standardním predikátem fail, který, je-li volán, okamžitě selže

```prolog
marada(jana,X) :- plesaty(X), % je-li X plešaté uspěje,
!, % zakáže návrat
fail. % a selže.

marada(jana,X) :- % k této klauzuli se výpočet dostane, pokud X není plešaté,

muz(X). % je-li to muz, má ho Jana ráda
```
<!--ID: 1717529248364-->
END

---