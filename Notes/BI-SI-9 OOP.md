---
created: 2024-05-13T12:30:44
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-9

> BI-WSI-SI-9 (OOP)
> OOP polymorphismus - subtyping, generics, bounds a variance.

### polymorfismus

START
BI-SZZ

Jaké jsou 3 typy polymorfismu?

Back:

- **subtype** polymorfismus - klasický polymorfismus
- **parametric** polymorfismus - generiky
- **ad hoc** polymorfismus
 
<!--ID: 1715601679086-->
END

---

START
BI-SZZ

Co je **subtype polymorfismus**?

Back:

Funkce, která bere typ `T` bude fungovat správně, když tam předhodím `S`, které je podtypem `T`.
<!--ID: 1715601679091-->
END

---

START
BI-SZZ

Co je **parametric polymorfismus**?

Back:

Můžeme psát funkce a datové struktury _genericky_.
<!--ID: 1715601679094-->
END

---

START
BI-SZZ

Co je **ad-hoc polymorfismus**?

Back:

Můžu přetěžovat funkce operátorů.
<!--ID: 1715601679097-->
END

---

### subtype polymorfismus


START
BI-SZZ

Co znamená `A <: B`?

Back:

`A` je subtype (podtyp) `B`
<!--ID: 1715601679100-->
END

---


START
BI-SZZ

Jaký je rozdíl mezi **subtypingem** a **subclassingem**?

Back:

**Subtyping** 
- mám typ(=třídu) a z ní udělám podtyp (=podtřídu)
- používá se `extends`

**Subclassing** 
- mám třídu, která implementuje určitý interface
- používá se `implements`
<!--ID: 1715601679103-->
END

---


START
BI-SZZ

Jaké jsou 2 požadavky, aby byl podtyp **true subtype**?

Back:

Metody v subtypu musí:
- **chtít míň věcí** (nebo stejně)
- **vracet víc věcí** (nebo stejně)
<!--ID: 1715601679106-->
END

---


START
BI-SZZ

Co je **Liskov Substitution Principle**?

Back:

Jednoduše řečeno:
Pokud `B <: A` , potom všechno, co se dá dělat s `A` se musí dát dělat i s `B`

_Formálně (asi nemusíme umět přesně):_
Buď $Φ(x)$ vlastnost dokazatelná pro objekty $x$ typu $A$. Potom $Φ(y)$ by mělo platit pro objekty y typu $B$, kde $B$ je podtypem $A (B <: A)$
<!--ID: 1715601679109-->
END

---


START
BI-SZZ

Jaký je rozdíl mezi **overridingem** a **overloadingem**?

Back:

**overriding** - přepisuju funkci třídy ze které dědím
**overloading** - mám funkce, které mají stejné jméno, ale různé typy parametrů
<!--ID: 1715601679112-->
END

---


START
BI-SZZ

Co je **nominální typování**?

Back:

typová ekvivalence a kompatibilita je určená **explicitními deklaracemi**

Relaci mezi dvouma typama vytvářím v kódu (např. pomocí `extends`)

_Např._
![](../Assets/Pasted%20image%2020231103152109.png)
<!--ID: 1715601679115-->
END

---


START
BI-SZZ

Co je **structural typing**?

Back:

typová ekvivalence a kompatibilita je určená **strukturou typu**

Nedělám žádný extendy, ale ten kód si sám odvodí, co se může kde volat. Pokud ta _struktura_ toho objektu odpovídá, tak nám to povolí.

![](../Assets/Pasted%20image%2020231103152253.png)
<!--ID: 1715601679118-->
END

---


START
BI-SZZ

Co je **duck typing**?

Back:

podobné jako strukturální typing, ale **probíhá za runtime** (JavaScript, Python)

_Např._
![](../Assets/Pasted%20image%2020231103152515.png)
<!--ID: 1715601679121-->
END

---


START
BI-SZZ

Kdy se řeší **nominal typing, structural typing a duck typing**? (compile time vs runtime)

Back:

**compile time**: nominal a structural
**runtime**: duck typing
<!--ID: 1715601679124-->
END

---


### Generiky (parametric polymorfismus)


START
BI-SZZ

Co je typový parametr a typový argument v parametrickém polymorfismu?

Back:

Parametr je ten typ T, argument je když tomu předhazuju nějaký typ (viz obrázek)

![](../Assets/Pasted%20image%2020231020174039.png)
<!--ID: 1715601679127-->
END

---


START
BI-SZZ

Když `B <: A`, platí 
`List[B] >: List[A]` 
nebo 
`List[B] <: List[A]`?

Back:

Ani jedno by default neplatí! Listy nemají mezi sebou žádný vztah.
<!--ID: 1715601679130-->
END

---


START
BI-SZZ

Co mi obecně řeší bounds a variance?

Back:

Interakce mezi subtypingem a generikami
<!--ID: 1715601679133-->
END

---

#### bounds

START
BI-SZZ

Co je upper bound?

Back:

`Collection[_ <: T]` — kolekce může mít elementy jakéhokoliv typu, který je podtypem `T`

Pozn. za `_` bych typicky dosadil generický název a za `T` nějak konkrétní typ

_Např._
![](../Assets/Pasted%20image%2020231020125511.png)
<!--ID: 1715601679136-->
END

---


START
BI-SZZ

Co je lower bound?

Back:

`Collection[_ >: T]` — kolekce může mít elementy jakéhokoliv typu, který je nadtypem `T`
<!--ID: 1715601679138-->
END

---

START
BI-SZZ

Co je **substitution principle**?

Back:

Princip říká, že když funkce očekává nějaký typ, tak té funkci můžeme místo toho dodat podtyp toho typu.
<!--ID: 1715601679141-->
END

---


START
BI-SZZ

Co je **get and put princip**? 

Back:

- použij **upper bound** pokud pouze **čteš** data ze struktury,
- použij **lower bound** pokud pouze **přidáváš** data do struktury,
- nepoužívej bounds pokud děláš obojí.

![](../Assets/Pasted%20image%2020240513133940.png)
<!--ID: 1715601679144-->
END

---

#### variance


START
BI-SZZ

Jak se značí **kovariance**?

Back:

`C[+T]`

_Např_
```
class C[+T] {
   // ...
}
```
<!--ID: 1715601679147-->
END

---


START
BI-SZZ

Co znamená **kovariance**?

Back:

pokud `A <: B`, potom `C[A] <: C[B]`
<!--ID: 1715601679150-->
END

---


START
BI-SZZ

Jak se značí **kontravariance**?

Back:

`C[-T]`
<!--ID: 1715601679153-->
END

---


START
BI-SZZ

Co znamená **kontravariance**?

Back:

pokud `A <: B`, potom `C[B] <: C[A]`
<!--ID: 1715601679156-->
END

---


START
BI-SZZ

Co znamená **invariant**?

Back:

Když `A <: B`, tak není žádná relation mezi `C[B]` a `C[A]`
<!--ID: 1715601679159-->
END

---


START
BI-SZZ

Co je **kontravariantní pozice**?

Back:

**Parametry metody** jsou kontravariantní pozice
<!--ID: 1715601679162-->
END

---


START
BI-SZZ

Co je **kovariantní pozice**?

Back:

**Návratová hodnota metody** je kovariantní pozice
<!--ID: 1715601679165-->
END

---


START
BI-SZZ

Kdy bych měl používat **kovarianci a kontravarianci** (poučka)?

Back:

1) Covarianci když dělám něco, co bude _produkovat_ ty věci
2) Contravarianci když dělám něco, co _konzumuje_ ty věci

_Jinými slovy_
![](../Assets/Pasted%20image%2020231020185902.png)
<!--ID: 1715601679168-->
END

---


### záludný příklady
START
BI-SZZ

Může být na vyznačeném místě `B`?

![](../Assets/Pasted%20image%2020240513125833.png)

Back:

Ne! Pak by nastal problém, že kdybych tam hodil `A`, tak bych na tom nemohl volat `g()`.

Tags: optional exercise
<!--ID: 1715601679172-->
END

---


START
BI-SZZ

Co může být na vyznačeném řádku za typ místo otazníků?

![](../Assets/Pasted%20image%2020231013175021.png)

Back:

`B` nebo jakýkoliv subtype toho Bčka

Tags: optional exercise
<!--ID: 1715601679175-->
END

---


START
BI-SZZ

Co bude fungovat z těch volání dole?

![](../Assets/Pasted%20image%2020231020185026.png)

Back:

![](../Assets/Pasted%20image%2020231020185419.png)

**Případ 1:**
Bude fungovat: `Playground[Cat]` je podtypem `Playground[Cat]`

**Případ 2:**
Nebude fungovat. Nemůžu funkci sendGarfieldToPlay předhodit `Playground[DancingCat]`, protože `Playground[DancingCat]` není podtypem `Playground[Cat]`.

`DancingCat <: Cat` a nikde není definován vztah `Playground[DancingCat]` a `Playground[Cat]`. Proto se to bude chovat invariantně, tedy žádný vztah mezi sebou mít nebudou.

**Příklad 3:**
Nebude fungovat. Stejně jako v předchozím případě, `Playground[Animal]` nemá žádný vztah s `Playground[Cat]` -> nemůžu ho tam dát.

Tags: optional exercise
<!--ID: 1715601679182-->
END

---


START
BI-SZZ

Co bude fungovat a co nebude fungovat?

![](../Assets/Pasted%20image%2020231020185525.png)

Back:

1) Bude fungovat
2) Nebude fungovat - ze stejného důvodu jako na minulé kartičce
3) Bude fungovat - playground je schopný si poradit se všema zvířatama
![](../Assets/Pasted%20image%2020231020185610.png)

**Případ 1:**
Bude fungovat: `Playground[Cat]` je podtypem `Playground[Cat]`

**Případ 2:**
Nebude fungovat: `DancingCat <: Cat`, tedy podle kontravariance `Playground[Cat] <: Playground[DancingCat]` a proto do sendGarfieldToPlay nemůžu hodit `Playground[DancingCat]`. Je potřeba typ `Playground[Cat]` nebo nižší.

**Případ 3:**
Bude fungovat: Nyní platí, že pokud `Cat <: Animal`, potom `Playground[Animal] <: Playground[Cat]`. Tzn. můžu do sendGarfieldToPlay dát `Playground[Animal]`.

Tags: optional exercise
<!--ID: 1715601679185-->
END

---


START
BI-SZZ

Co se vyprintí?
![](../Assets/Pasted%20image%2020231103143942.png)
![](../Assets/Pasted%20image%2020231103143830.png)


Back:

![](../Assets/Pasted%20image%2020231103143950.png)

Tags: optional exercise
<!--ID: 1715601679188-->
END

---


START
BI-SZZ

Co mi tohle v IDEčku ukáže že můžu zavolat?
![](../Assets/Pasted%20image%2020231103144226.png)

Back:

Jenom `mb`, protože to vidí, že to je Bčko

Tags: optional exercise
<!--ID: 1715601679192-->
END

---


START
BI-SZZ

Co sem můžu dát za třídu? (`new A`, `new B`, `new C` nebo `new D`?)
![](../Assets/Pasted%20image%2020231103144440.png)

Back:

`new B` nebo `new C`

Tags: optional exercise
<!--ID: 1715601679195-->
END

---


START
BI-SZZ

Co sem můžu dát za třídu? (`new A`, `new B`, `new C` nebo `new D`?)

![](../Assets/Pasted%20image%2020231103144549.png)

Back:

`new B` nebo `new C`, protože jsem vytvářel test s `Test[B]`

Tags: optional exercise
<!--ID: 1715601679198-->
END

---


START
BI-SZZ

Co sem můžu dát za třídu?

![](../Assets/Pasted%20image%2020231103144749.png)

Back:

`new B` nebo `new C`

Tags: optional exercise
<!--ID: 1715601679201-->
END

---


START
BI-SZZ

Co tady můžu zavolat?
![](../Assets/Pasted%20image%2020231103144956.png)
![](../Assets/Pasted%20image%2020231103145212.png)

Back:

Tady můžu zavolat `mb` nebo `ma`

Tags: optional exercise
<!--ID: 1715601679204-->
END

---


START
BI-SZZ

Co tady můžu zavolat u té (2)?

![](../Assets/Pasted%20image%2020231103145257.png)

Back:

`mb` nebo `ma`, protože jsem inicializoval Test s Bčkem, takže to bude vracet Bčko

Tags: optional exercise
<!--ID: 1715601679207-->
END

---


START
BI-SZZ

Co můžu zavolat na bčku a na cčku?
![](../Assets/Pasted%20image%2020231103145416.png)

Back:

![](../Assets/Pasted%20image%2020231103145714.png)

Tags: optional exercise
<!--ID: 1715601679209-->
END

---


START
BI-SZZ

Co můžu dát sem?
![](../Assets/Pasted%20image%2020231103150003.png)

Back:

Na cčku můžu zavolat `ma` nebo `mb`
Na dčku můžu zavolat `ma`
Na ičku můžu asi zavolat něco z integeru?

Tags: optional exercise
<!--ID: 1715601679212-->
END

---
