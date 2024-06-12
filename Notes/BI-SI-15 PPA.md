---
created: 2024-06-02T19:37:26
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-15 BI-WI-10 PPA

> BI-WSI-SI-15 / BI-WSI-WI-10 (PPA)
> Funkcionální programování, funkce vyšších řádů, Lisp: atomy, seznamy, funkce, cons buňky, rekurze, mapovací funkcionály.

### TODO
- tady by to chtělo víc kartiček na to, jak se definují jednotlivé funkce atd.
- chtělo by to rozdělit kartičku na mapovací funkcionály do více kartiček o jednotlivých funkcionálech (foldr, foldl, filter, map, apply) - co dělají a jakou mají syntax

START
BI-SZZ

Co je to **funkcionální programování**?

Back:

- Zaměřeno na funkce a jejich vyhodnocování.
- Nemá přiřazovací příkaz, nemá vedlejší efekty, typické používání rekurze.
- Má funkce vyšších řádů
<!--ID: 1717529248367-->
END

---

START
BI-SZZ

Jaké jsou příklady **funkcionálních programovacích** jazyků?

Back:

LISP, Haskell, R, Clojure
<!--ID: 1717529248370-->
END

---

START
BI-SZZ

Jak se jmenuje základní model výpočtu funkcionálního programování?

Back:

Lambda kalkulus
<!--ID: 1717529248373-->
END

---

START
BI-SZZ

Co jsou to a k čemu jsou funkce vyšších řádů?

Back:

- Funkce, které přijímají jiné funkce jako argumenty nebo vrací funkce jako jejich výsledek
- Zlepšení čitelnosti kódu, abstrakce opakujících se vzorů

Příklad: 
```python
def square(x):
    return x * x

numbers = [1, 2, 3, 4, 5]
squared_numbers = map(square, numbers)
print(list(squared_numbers))
```
<!--ID: 1717529248376-->
END

---

START
BI-SZZ

Na co se dělí **objekty** v **LISPu**? (2)

Back:

- atom (primitivní hodnoty)
- list (strukturovaná data)
<!--ID: 1717529248379-->
END

---

START
BI-SZZ

Jaké datové typy lze uložit do **atomů** v Lispu? (5)

Back:

- **Čísla** – 235.4, 2e10, 2/3
- **Literály** – `t` (true), `nil`, `pi`, `f` (false)
- **Řetězce –** `"hello"`
- Znaky – `#\a`
- Symboly (proměnné) – `foo`, `bar`…
<!--ID: 1717529248382-->
END

---

START
BI-SZZ

Co jsou to **seznamy** ve funkcionálním programování? (3)

Back:

Seznamy jsou sekvence skládající se z:
1. Otevírací závorka
2. Žádný nebo více atomů
3.  Ukončovací závorka

**Příklady**
- Prázdný seznam – `'()` , stejné jako `nil`
- Seznam se třemi prvky – `'(a b c)`
- Seznam se třemi prvky, poslední prvek je seznam – `'(a b (c))`
<!--ID: 1717529248385-->
END

---

START
BI-SZZ

Co jsou to cons buňky?

Back:

- Slouží pro tvorbu komplexnějších datových struktur – **páry**
- Pomocí nich lze tvořit spojové seznamy, binární stromy

![](../Assets/Pasted%20image%2020240605154938.png)
<!--ID: 1717529248388-->
END

---

START
BI-SZZ

Z jakých **částí** se skládá **cons buňka**? (2)

Back:

- **car** – První prvek cons buňky
- **cdr** – Druhý prvek cons buňky

![](../Assets/Pasted%20image%2020240604161212.png)
<!--ID: 1717529248391-->
END

---

START
BI-SZZ

Co je to **quoting** a jak se používá?

Back:

- Lisp programy jsou listy
- Všechny listy vždy defaultně vyhodnocují
- Quoting slouží k zabránění evaluace
- **Syntaxe**
	- `(quote (a b c))`
	- `‘(a b c)`
<!--ID: 1717529248394-->
END

---

START
BI-SZZ

Co je to Closure?

(můžeš uvést na příkladu s `make-counter`)

Back:

- Funkce, jejíž prostředí zahrnuje proměnné a jejich hodnoty ve scope, ve kterém byla funkce definována
- Funkce jsou vždy vraceny i s hodnotami nějaké proměnné

```csharp
(define (make-counter)
  (let ([count 0])
    (lambda ()
      (set! count (+ count 1))
      count)))

(define counter1 (make-counter))
(counter1)  ;; => 1
(counter1)  ;; => 2

(define counter2 (make-counter))
(counter2)  ;; => 1
(counter2)  ;; => 2
```

V tomto příkladě si `lambda` funkce pamatuje proměnné prostředí, ve kterém byla zadefinována (tzn když se vytvořil `counter1` nebo `counter2`), tzn. pamatuje si tu proměnnou `[count]`. 

Další vysvětlivky:
- `define` mi definuje nové proměnné nebo funkce
	- např. `(define pi 3.14)`
	- nebo `(define (square x) (* x x))`
- `let` mi definuje lokální proměnnou
	- např. `(let ([nazev hodnota]) body)`, kde body je kód, co tu proměnnou využívá
- `(define counter1 (make-counter))` mi udělá instanci closure (tzn. jakoby té funkce s custom prostředím)
- return hodnota funkce je její poslední prvek - tady v `lambda` funkci je to `count`


<!--ID: 1717529248397-->
END

---

START
BI-SZZ

Jakou část paměti využivá zejména rekurze?

Back:

Rekurze používá zásobník pro zachování stavu při vnoření do funkce (aktivační záznam).
<!--ID: 1717529248399-->
END

---

START
BI-SZZ

Jaký typ rekurze je obecně dobré využívat a proč?

Back:

Doporučuje se využívat **koncovou rekurzi**, která šetří místo na zásobníku.

Protože tím, že to poslední, co funkce udělá je volání rekurze, tak to Lisp zoptimalizuje tak, aby se použil stejný stack frame (aktivační záznam).
<!--ID: 1717529248402-->
END

---

START
BI-SZZ

Jaké jsou typy rekurze a co umožňují?

Back:

- **Vnořená –** rekurze v rekurzi
- **Stromová –** několik rekurzivních volaní
    - Např.: výpočet fibonacciho čísla
- **Lineární –** volání funkce vede maximálně k jednomu dalšímu rekurzivnímu volání
    - Např.: výpočet faktoriálu
- **Koncová –** rekurzivní volání je poslední, co funkce udělá – znovupoužití stejného stack framu
<!--ID: 1717529248405-->
END

---

START
BI-SZZ

Jaké jsou výhody při využívání rekurze?

Back:

- Kód se jednodušeji čte
- Psaní kódu je více přirozené
- Snazší analýza a optimalizace kódu
<!--ID: 1717529248408-->
END

---

START
BI-SZZ

Jak lze v LISPu zapsat funkci na faktoriál? (normálně + pomocí koncové rekurze)

Back:

**Normální zápis**:
```lisp
(define (factorial n)
  ( if (= n 0)
      1
      (* n (factorial (- n 1)))
  )
)
    
(print (factorial 5))
```

Zápis pomocí **koncové rekurze**:
```lisp
(define (factorial n)
  (factorial-aux n 1)
)

(define (factorial-aux n acc)
  ( if (= n 0)
      acc
      (factorial-aux (- n 1) (* acc n) )
  )
)

(print (factorial 5))
```
<!--ID: 1717529248411-->
END

---

START
BI-SZZ

Co jsou to mapovací funkcionály?

Back:

- Funkce, které přijímají funkci jako argument a aplikují ji na své další argumenty
- Specifický případ higher order functions
- Příklad funkcí: map, filter, foldr, foldl, apply

```lisp
(map (lambda (x) (* x 2)) '(1 2 3 4 5))

;; Příklad s vlastní funkcí
(define (add-one x)
  (+ x 1))

(map add-one '(1 2 3 4 5))
```

![](../Assets/Pasted%20image%2020240605164608.png)

_Příklad foldr podle pana ChatGPT_:
```lisp
(define lst '(1 2 3 4 5))

(define result (foldr (lambda (x acc) (+ x acc)) 0 lst))
```
<!--ID: 1717529248414-->
END

---
