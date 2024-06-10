---
created: 2024-05-31T20:01:30
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-14 PPA

> BI-WSI-SI-14 / BI-WSI-WI-9 (PPA)
> Lambda kalkul: definice pojmů, operací, reprezentace čísel.
### Funkcionální programování


START
BI-SZZ

Na jakých principech je založeno funkcionální programování? (3)

Back:

- Založeno na **vyhodnocování funkcí**
- Výsledná **hodnota funkce** záleží pouze na **vstupních parametrech funkce**
- Funkce **nemá vedlejší efekty** (side effects)
<!--ID: 1717181000739-->
END

---


START
BI-SZZ

Jak typicky probíhá správa paměti ve funkcionálních jazycích?

Back:

**Implicitně** = paměť se alokuje a dealokuje dle potřeby
<!--ID: 1717181000743-->
END

---


START
BI-SZZ

Jaký funkcionální jazyk byl první co používal garbage collection?

Back:

Lisp
<!--ID: 1717181000746-->
END

---


START
BI-SZZ

Kdy ve funkcionálních jazycích probíhá dealokace?

Back:

Typicky když se daná část paměti stává nedostupnou
<!--ID: 1717181000748-->
END

---

### Lambda kalkulus

START
BI-SZZ

Co je **lambda kalkulus**?

Back:

Základní model výpočtu pro funkcionální programování
<!--ID: 1717181000751-->
END

---


START
BI-SZZ

Na čem je založen lambda kalkulus? (2)

Back:

Na matematické **abstrakci** (=funkce) a její **aplikaci** (=vyhodnocení pomocí substituce)
<!--ID: 1717181000754-->
END

---


START
BI-SZZ

Jaký typ zápisu využívá lambda kalkulus?

Back:

**prefixový zápis**
<!--ID: 1717181000757-->
END

---


START
BI-SZZ

V jakém pořadí se vyhodnocuje (aplikuje) funkce?

Back:

Zleva doprava
<!--ID: 1717181000760-->
END

---


START
BI-SZZ

Z čeho se skládá **výraz** v lambda kalkulu?

Back:

Jedno z následujících:
- **jméno**
- **funkce**
- **aplikace**

![](../Assets/Pasted%20image%2020240531201140.png)
<!--ID: 1717181000763-->
END

---


START
BI-SZZ

Z čeho se skládá **jméno** v lambda kalkulu?

Back:

Z nějakého identifikátoru proměnné (např. `x`)

![](../Assets/Pasted%20image%2020240531201220.png)
<!--ID: 1717181000766-->
END

---


START
BI-SZZ

Z čeho se skládá **funkce** v lambda kalkulu?

Back:

- $\lambda$
- identifikátor proměnné
- `.`
- výraz

Např.
``(λ x . + x 1)``
<!--ID: 1717181000768-->
END

---


START
BI-SZZ

Z čeho se skládá **aplikace** v lambda kalkulu?

Back:

Ze dvou výrazů
![](../Assets/Pasted%20image%2020240531201441.png)
<!--ID: 1717181000771-->
END

---

#### Vyhodnocování funkce (Beta redukce)


START
BI-SZZ

Co je **beta redukce**? (obecně)

Back:

Způsob **vyhodnocování funkcí** v lambda kalkulu
<!--ID: 1717181000774-->
END

---


START
BI-SZZ

Jak funguje **beta redukce**? Za jaké podmínky je možné ji provést?

Např. u `(λ x . + x 1)4`

Back:

- Jednoduše, pokud se proměnná ve funkci vyskytuje, tak dosadím za tu proměnnou.
- **Podmínka**: Po dosazení výrazu se nesmí stát z žádné volné proměnné vázaná


```
(λ x . + x 1)4
→ (+ 4 1)
→ 5
```

_Další příklad_
```
(λ f . f 3) (λ x . + x 1)
→ (λ x . + x 1) 3 
→ 4
```
<!--ID: 1717181000777-->
END

---

### Volné a vázané proměnné


START
BI-SZZ

Co jsou **volné** a **vázané** proměnné v **lambda kalkulu**?

Back:

- **Vázané proměnné** se vyskytují ve funkci (jsou jejím argumentem) a lze za ně dosadit
- **Volné proměnné** jsou přítomny ve funkci, ale není možné za ne dosadit

Např. `(λ x . + x y)`
- x = vázaná (je přítomná mezi λ a “.”)
- y = volná
<!--ID: 1717181000780-->
END

---

### Operace


START
BI-SZZ

Jaké jsou tři typy operací v lambda kalkulu?

Back:

- alfa konverze
- beta abstrakce
- eta konverze
<!--ID: 1717181000783-->
END

---


START
BI-SZZ

Co je **alfa konverze**? Za jaké podmínky je možné ji provést?

Back:

Odstranění přetížení identifikátorů

Lze chápat jako přejmenování argumentů a jejich vázaných proměnných

**Podmínky**
- Lze použít pouze na vázané proměnné
- Výraz nesmí obsahovat takové volné proměnné, které by se staly vázanými.

_Příklad_:
```
(λx . (λx . + (− x 1)) x 3)9
(λx . (λy . + (− y 1)) x 3)9 // <-- alfa konverze
→ ((λy . + (− y 1)) 9 3)
→ (+ (− 9 1) 3)
→ (+ 8 3)
```
<!--ID: 1717181000786-->
END

---


START
BI-SZZ

Co je **beta abstrakce**?

Back:

Obrácená beta redukce

_Příklad:_
`+ 4 1 → (λx . + x 1) 4`
<!--ID: 1717181000789-->
END

---


START
BI-SZZ

Co je **eta konverze**? Za jaké podmínky je možné ji provést?

Back:

Nemění výsledek lambda výrazu
- Také se nazývá optimalizace
- `(λx.fx) = f`
- funkce s proměnnou x je vlastně pouze wrapper – `f(x) { return g(x); }`

**Podmínka**: Lze použít jen pokud `f` je funkce, ve které se nenachází volné `x`

_Např._
```
(λx.(λy.yy)x)
(λy.yy) (po η redukci)
```
<!--ID: 1717181000792-->
END

---

### Pořadí vyhodnocování


START
BI-SZZ

Záleží při lambda kalkulu na pořadí vyhodnocování?

Back:

Ano!
<!--ID: 1717181000795-->
END

---


START
BI-SZZ

Jaké jsou dva typy vyhodnocování v lambda kalkulu?

Back:

- **Normální**
- **Aplikativní**
<!--ID: 1717181000797-->
END

---


START
BI-SZZ

Jak funguje **normální** vyhodnocování v lambda kalkulu?

Back:

1. **Nalezení nejlevější λ**
2. **provedení substituce** (i za cenu toho, že dosadím obří výraz)

Tzn. najdu lambdu a dosadím za ty argumenty

_Příklad normálního:_
```
(λx. + x x)((λp. + p 4) 3) ->
+ ((λp. + p 4) 3)((λp. + p 4) 3) ->
+ (+ 3 4)((λp. +  p 4) 3) ->
+ (+ 3 4)(+ 3 4) ->
+ 7 7
14
```

_Příklad aplikativního:_
```
(λx. + x x)((λp. + p 4) 3) ->
(λx. + x x)(+ 3 4) ->
(λx. + x x) 7 ->
(+ 7 7)
-> 14
```
<!--ID: 1717181000800-->
END

---


START
BI-SZZ

Jak funguje **aplikativní** vyhodnocování v lambda kalkulu?

Back:

1. **Nalezení nejlevější λ**
2. **vyhodnocení argumentů** (tzn skočím na ten výraz co chci dosadit a ten aplikativně vyhodnotím) -> díky tomu budu dosazovat co nejmenší výraz
3. **provedení substituce**

Je to to samý jako normální, jen na to, abych dosadil argument musí být ten argument v **normálním tvaru** (tzn. musím ho vyhodnotit).

_Příklad aplikativního:_
```
(λx. + x x)((λp. + p 4) 3) ->
(λx. + x x)(+ 3 4) ->
(λx. + x x) 7 ->
(+ 7 7)
-> 14
```

_Příklad normálního:_
```
(λx. + x x)((λp. + p 4) 3) ->
+ ((λp. + p 4) 3)((λp. + p 4) 3) ->
+ (+ 3 4)((λp. +  p 4) 3) ->
+ (+ 3 4)(+ 3 4) ->
+ 7 7
14
```
<!--ID: 1717181000803-->
END

---


START
BI-SZZ

Který typ vyhodnocování v lambda kalkulu se může zacyklit?

Back:

**aplikativní vyhodnocování**
<!--ID: 1717181000806-->
END

---


START
BI-SZZ

Je výsledek stejný u **aplikativního** a **normálního** vyhodnocování?

Back:

Pokud vyhodnocování skončí, je **výsledek stejný**.
<!--ID: 1717240441661-->
END

---


#### Normální tvar


START
BI-SZZ

Co je **normální tvar** v lambda kalkulu?

Back:

Lambda výraz, který **nemůže být** redukován pomocí **beta redukce**, je v normálním tvaru.

Např.: `(λx . λy . y)((λz . z z) (λz . z z)) → λy . y`
<!--ID: 1717181000808-->
END

---


START
BI-SZZ

Má každý **výraz** v lambda kalkulu normální tvar?

Back:

Ne!

Např. `(λz . z z) (λz . z z)`
<!--ID: 1717181000811-->
END

---

### Kombinátory


START
BI-SZZ

Co je **kombinátor** v lambda kalkulu?

Back:

Lambda výraz, který nemá volné proměnné
<!--ID: 1717181000814-->
END

---


START
BI-SZZ

Jaké jsou časté kombinátory v lambda kalkulu? (4)

Back:

- **rekurze**
- **identita**
- **aplikace**
- **cyklus**
<!--ID: 1717181000817-->
END

---


START
BI-SZZ

Jaká je syntax kombinátoru **aplikace** v lambda kalkulu? (`APP`)

Back:

`λf.λx.(f x)`
<!--ID: 1717181000820-->
END

---


START
BI-SZZ

Jaká je syntax kombinátoru **identita** v lambda kalkulu? (`I`)

Back:

`λx.x`
<!--ID: 1717181000822-->
END

---


START
BI-SZZ

Jaká je syntax kombinátoru **cyklus** v lambda kalkulu? (`L`)

Back:

`(λx.(x x) λx.(x x))`
<!--ID: 1717181000825-->
END

---


START
BI-SZZ

Jaká je syntax kombinátoru **rekurze** v lambda kalkulu? Jak se tento kombinátor **nazývá**? (`Y`) 

Back:

`λf.(λx. f (x x)) (λx. f (x x))`

(Tomu se také říká **Y-kombinátor**)
<!--ID: 1717181000828-->
END

---


START
BI-SZZ

Jak se dá v lambda kalkulu zapsat $f(n) = 3 \cdot f(n - 2) + n$?

Back:

![](../Assets/Pasted%20image%2020240610165441.png)
<!--ID: 1717181000830-->
END

---

### Reprezentace čísel


START
BI-SZZ

Co jsou **Churchova čísla**?

Back:

Churchova čísla = způsob reprezentace přirozených čísel v λ-kalkulu
<!--ID: 1717181000833-->
END

---


START
BI-SZZ

Jak je reprezentováno číslo v lambda kalkulu?

Back:

Číslo je reprezentovano jako funkce s **dvěma parametry**
- `n` = počet opakování
- druhý parametr je jakási “zarážka”
<!--ID: 1717181000836-->
END

---


START
BI-SZZ

Jak se zapisuje `0` v lambda kalkulu?

Back:

`0 = (λs.(λz.z))`
<!--ID: 1717181000838-->
END

---


START
BI-SZZ

Jak se zapisuje `1` v lambda kalkulu?

Back:

`1 = (λs.(λz.(sz)))`
<!--ID: 1717181000841-->
END

---


START
BI-SZZ

Jak se zapisuje `2` v lambda kalkulu?

Back:

`2 = (λs.(λz.(s(sz))))`
<!--ID: 1717181000844-->
END

---


START
BI-SZZ

Jak se zapisuje `3` v lambda kalkulu?

Back:

`3 = (λs.(λz.(s(s(sz)))))`
<!--ID: 1717181000846-->
END

---

#### Vybrané operace s čísly


START
BI-SZZ

Jak se zapisuje **přičtení 1** v lambda kalkulu? (`succ`)

`+ x 1 = ?????`

Back:

`+ x 1 = succ = (λx.λs.λz.s(xsz))`
<!--ID: 1717181000849-->
END

---


START
BI-SZZ

Jak se zapisuje **odečtení 1** v lambda kalkulu? (`pred`)

`− x 1 = ?????`

Back:

`− x 1 = pred = (λx.λs.λz.x(λf.λg.g(fs))(λg.z)(λm.m))`
<!--ID: 1717181000852-->
END

---


START
BI-SZZ

Jak se zapisuje **sčítání** v lambda kalkulu? (`add`)

`+ x y = ?????`

Back:

`+ x y = add = (λx.λy.λs.λz.xs(ysz))`
<!--ID: 1717181000855-->
END

---


START
BI-SZZ

Jak se zapisuje **násobení** v lambda kalkulu? (`mult`)

`∗ x y = ?????`

Back:

```
∗ x y = mult = (λx.λy.λz.x(yz))
nebo
∗ x y = mult = (λx.λy.λs.λz.x(ys)z)
```
<!--ID: 1717181000858-->
END

---
