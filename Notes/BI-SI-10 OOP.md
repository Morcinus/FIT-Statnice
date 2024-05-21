---
created: 2024-05-21T11:24:59
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-10

> BI-WSI-SI-10 (OOP)
> OOP chybový stav a reflexe - signalizování výjimečných stavů, výjimky, stack trace, total functions, design by contract, object model a dynamic code invocation.

### TODO
- Tady by případně šlo ještě přidat více metod ohledně reflexe z tohoto zdroje https://gitlab.fit.cvut.cz/BI-OOP/B231/lecture-code/-/blob/master/src/main/scala/lecture10/basics/basics.sc?ref_type=heads

### Error handling

#### design by contract

START
BI-SZZ

Co je **precondition**? **Čí je to chyba**, když není dodržena?

Back:

Stav, který musí být splněn **před voláním dané funkce/service**.

Když není splněna, je to **chyba klienta** (toho co volá funkci).
<!--ID: 1716291867655-->
END

---


START
BI-SZZ

Co je **postcondition**? **Čí je to chyba**, když není dodržena?

Back:

Stav, který musí být splněn **po volání dané funkce/service**.

Když není splněna, je to chyba té funkce/služby
<!--ID: 1716291867660-->
END

---


START
BI-SZZ

Co je **class invariant**?

Back:

To, že třída musí být ve validním stavu.

Je to kontrolování před a po volání public metody.
<!--ID: 1716291867663-->
END

---


START
BI-SZZ

Co je **design by contract**?

Back:

Myšlenka, že každá veřejná metoda **specifikuje kontrakt** = jaké jsou preconditions (předpoklady) a jaké jsou postconditions (co funkce vrací)

Myšlenka, že každá veřejná metoda specifikuje daný kontrakt. Tzn. pokud jsou splněny **preconditions**, tak se zavazuje k doručení výsledku se splněnými **postconditions**.
<!--ID: 1716291867666-->
END

---


START
BI-SZZ

Jaké jsou výhody **design by contract**? (4)

Back:

- **Dokumentuje předpoklady funkcí**
- **Jasně odděluje zodpovědnosti**
- **Zjednodušuje kód** (není potřeba spešl error handling, když mám jasně definovaný preconditions)
- **Pomáhá debuggování** (ví se, kdo může za chybu)
<!--ID: 1716291867669-->
END

---


START
BI-SZZ

Co by měla funkce udělat podle **design by contract**, pokud **nejsou splněny preconditions**?

Back:

Měla by **vyhodit výjimku**.
<!--ID: 1716291867672-->
END

---

#### signalizování chyb


START
BI-SZZ

Jakými způsoby lze signalizovat v programování chybu? (5)

Back:

- **návratovou hodnotou** (např. boolean)
- **více návratovými hodnotami** - některé jazyky to umožňují
- **výstupním parametrem** (explicitní flag) - do parametru funkce něco zapíšu
- **globální flag** (např. `errno` v Cčku)
- **výjimkou** - primární způsob signalizování chyb v OOP 

_Výstupní parametr může fungovat třeba takhle:_
```c
int divide(int a, int b, int *result) {
    if (b == 0) return -1; // Error: Division by zero
    *result = a / b;
    return 0; // Success
}
```
<!--ID: 1716291867675-->
END

---


START
BI-SZZ

Co jsou **assertions**?

Back:

Umožňují kontrolovat **preconditions** a upozornit, pokud nejsou splněny. Dají se pak zapnout v development módu.

_Např._
```java
public int intdiv(int num, int denom) {  
  assert denom != 0, “divide by zero”;

  
  return num / denom;  
}
```
<!--ID: 1716291867677-->
END

---


START
BI-SZZ

Kde je dobré používat **assertions**?

Back:

U **privátních** metod.
<!--ID: 1716291867680-->
END

---


START
BI-SZZ

Kdy bych měl vyhazovat výjimku?

Back:

Pokud nastala událost, která naruší normální tok instrukcí
<!--ID: 1716291867683-->
END

---


START
BI-SZZ

Co jsou **checked** a **unchecked** výjimky?

Back:

- **checked** - nelze ji ignorovat, kompilátor mě typicky donutí to opravit v průběhu vývoje
- **unchecked** - lze ji lokálně ignorovat, typicky nastávají za runtimu
<!--ID: 1716291867686-->
END

---


START
BI-SZZ

Jaké jsou výhody používání výjimek? (5)

Back:

- **Oddělují běžný kód od kódu zpracovávajícího chyby**
- **zero-cost happy path**
- **debug friendly** - zachycují stack trace
- **nelze ji ignorovat** - někde v programu se musí vyřešit
- **lze ji lokálně ignorovat** - nemusím jí řešit na místě, ale může vybublat nahoru v programu, kde se to vyřeší
<!--ID: 1716291867688-->
END

---


START
BI-SZZ

Kdy bych měl správně odchytávat výjimky pomocí `catch`?

Back:

Pouze v těchto případech:
- Pokud je možné **změnit preconditions** a **zkusit to znovu**
- Pokud je potřeba **uklidit prostředí** ("**organizovaná panika**") a **vyhodit výjimku dál**
<!--ID: 1716291867691-->
END

---


START
BI-SZZ

Jaké jsou best practices při používání výjimek? (5)

Back:

- **nezahrabávat vyhozené výjimky**
- **používat globální exception handler pro long-running aplikace** (např. servery)
- **nezavírat zdroje ručně**
- poskytovat **meaningful messages** ve výjimkách
- používat **specifické třídy pro různé typy výjimek**
<!--ID: 1716291867694-->
END

---


START
BI-SZZ

Co je **stack trace**?

Back:

Je to log, který zachycuje postupné volání metod, které vedlo k chybě nebo výjimce.
<!--ID: 1716291867696-->
END

---


START
BI-SZZ

Co jsou **total functions**?

Back:

Funkce, kde případný error je součástí návratové hodnoty.

Např. pomocí `Option`, `Some`, `None` ve scale.
![](../Assets/Pasted%20image%2020240521132424.png)
<!--ID: 1716291867700-->
END

---

### Reflexe


START
BI-SZZ

Co je v programování **reflexe**?

Back:

Schopnost manipulovat stav programu za běhu
<!--ID: 1716291867703-->
END

---


START
BI-SZZ

Jaké **3 vlastnosti** jsou třeba pro **reflexi** v programování?

Back:

- **introspekce**
- **intercession**
- **reifikace**
<!--ID: 1716297735479-->
END

---


START
BI-SZZ

Co je **introspekce**?

Back:

Schopnost programu pozorovat svůj vlastní stav
<!--ID: 1716291867706-->
END

---


START
BI-SZZ

Co je **intercession**?

Back:

Schopnost programu měnit svůj vlastní stav
<!--ID: 1716291867709-->
END

---


START
BI-SZZ

Co je potřeba pro **reflexi** (introspection a intercession)?

Back:

**reifikace** = je třeba mít zakódovaný stav programu jako data.

_Např._ informace o třídách, konstruktorech, metodách v programu by měly být ve formě dat, aby se s těmito informacemi dalo pracovat v rámci reflexe
<!--ID: 1716291867712-->
END

---


#### Object model

START
BI-SZZ

Co je **Simplified Java Object Model**?

Back:

Vyjádření vztahů mezi třídami, metodami, objekty, atd.

![](../Assets/Pasted%20image%2020240521132927.png)
<!--ID: 1716291867715-->
END

---


START
BI-SZZ

Jak jsou reprezentované **třídy** v Simplified Java Object Modelu?

Back:

Třídy jsou také **objekty**!

![](../Assets/Pasted%20image%2020240521132927.png)
<!--ID: 1716291867718-->
END

---


START
BI-SZZ

Co dělá ClassLoader v Simplified Java Object Modelu?

Back:

`ClassLoader` za runtimu **načte třídu** podle **kvalifikovaného jména**
<!--ID: 1716291867721-->
END

---


START
BI-SZZ

Jaké 3 věci má třída v Simplified Java Object Modelu?

Back:

- **fields** - atributy
- **konstruktory**
- **metody**
<!--ID: 1716291867724-->
END

---

### dynamic code invocation


START
BI-SZZ

Co je **dynamic code invocation**?

Back:

provádění kódu, který nebyl známý za kompilace, během runtimu
<!--ID: 1716291867727-->
END

---


START
BI-SZZ

K čemu je dobrý **dynamic code invocation**?

Back:

umožňuje například implementovat různé pluginy nebo provádět runtime updaty bez restartu služby
<!--ID: 1716291867730-->
END

---


START
BI-SZZ

Jak lze **nahrávat třídy**? (při reflexi)

Back:

Dělá se to pomocí `ClassLoaderu`

_Např._
```scala
// load the class
val c = Class.forName("lecture10.basics.Cat")
```
<!--ID: 1716291867733-->
END

---


START
BI-SZZ

Jak lze vytvořit **instanci třídy**? (při reflexi)

Back:

Pomocí volání `newInstance()` na konstruktoru třídy

_Např._
```scala
// load the class
val c = Class.forName("lecture10.basics.Cat")
// new Cat
val o = c.getConstructors.head.newInstance("Bob")
```
<!--ID: 1716291867736-->
END

---


START
BI-SZZ

Jak lze získávat **metody třídy**? (při reflexi)

Back:

Pomocí volání `getMethods()` podle jména třídy
```scala
// load the class
val c = Class.forName("lecture10.basics.Cat")

// load the jump method
val m = c.getMethods.find(_.getName == "jump").get
```
<!--ID: 1716291867739-->
END

---


START
BI-SZZ

Jak lze **zavolat metodu na třídě**? (při reflexi)

Back:

Pomocí `.invoke(instance_třídy)`

```scala
// load the class
val c = Class.forName("lecture10.basics.Cat")

// new Cat
val o = c.getConstructors.head.newInstance("Bob")

// load the jump method
val m = c.getMethods.find(_.getName == "jump").get

// invoke method on o
m.invoke(o)
```
<!--ID: 1716291867741-->
END

---
