---
created: 2024-05-13T13:00:02
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-8

> BI-WSI-SI-8 (OOP)
> OOP abstrakce a hierarchie tříd - balíčky, třídy, atributy, metody, konstruktory, traity, ekvivalence a identita, nadtřídy, podtřídy, dědičnost, statický a dynamický dispatch.

### TODO
- Přidat příklady na dynamic dispatch

### Hierarchie tříd a pojmy

> Pozn. hodně kartiček z této kapitoly je sdílených s otázkou BI-SPOL-21

#### Balíčky

START
BI-SZZ

Co jsou v programování **balíčky**:
- Co obsahují?
- K čemu slouží?

Back:

- obsahují jednotlivé třídy a rozhraní
- slouží k logické a hierarchické organizaci kódu

Tags: BI-SPOL-21
<!--ID: 1716283472444-->
END

---


START
BI-SZZ

Co se používá v C++ místo balíčků?

Back:

namespaces

Tags: BI-SPOL-21
<!--ID: 1716283472449-->
END

---

#### Třídy

START
BI-SZZ

Co je **třída**?

Back:

- třída je abstrakce entity reálného světa
- blueprint pro vytváření objektů

Tags: BI-SPOL-21
<!--ID: 1716283472452-->
END

---

##### abstraktní třídy

START
BI-SZZ

Co je **abstraktní třída**?

Back:

Třída, u které **nelze udělat instanci**.

Tím slouží jako takový blueprint pro ostatní třídy (podobně jako interface).

Tags: BI-SPOL-21
<!--ID: 1716283472455-->
END

---


START
BI-SZZ

Co je **abstraktní metoda**?

Back:

Metoda v abstraktní třídě, která je **deklarovaná, ale ne definovaná**!

Tags: BI-SPOL-21
<!--ID: 1716283472458-->
END

---


START
BI-SZZ

Může abstraktní třída obsahovat i **definované** metody, nebo jen **abstraktní**?

Back:

Může obsahovat **definované** i **abstraktní metody**.

Tags: BI-SPOL-21
<!--ID: 1716283472461-->
END

---

##### case classy


START
BI-SZZ

Co je **case class** ve Scale?

Back:

Třídy, které mají předdefinované některé metody.

Např.
```Scala
case class Email private(value:String) {
//...
}
```

_Např. mají předdefiované_
- `hashcode` a `equals`
- `toString`
- `copy`
- `apply`
- `unapply`
<!--ID: 1716283472464-->
END

---


START
BI-SZZ

Na co se používají **case classes** ve Scale?

Back:

Když vytvářím objekty, které potřebuju mezi sebou porovnávat, aniž bych musel manuálně overridovat `equals` a `hashCode`.
<!--ID: 1716283472467-->
END

---

#### Objekty

START
BI-SZZ

Co jsou **objekty**?

Back:

objekt je instance třídy

Tags: BI-SPOL-21
<!--ID: 1716283472470-->
END

---


START
BI-SZZ

Jaké 2 základní věci obsahují objekty?

Back:

- **členské proměnné** (=položky, atributy, member variables, items, fields, attributes)
- **metody** - služby, které objekt poskytuje

Tags: BI-SPOL-21
<!--ID: 1716283472474-->
END

---

#### Deklarace, definice, signatura


START
BI-SZZ

Co je **definice** funkce?

Back:

Samotná implementace té funkce.

_Např._
```cpp
int add(int x, int y) {
    return x + y;
}
```
<!--ID: 1716283472477-->
END

---


START
BI-SZZ

Co je **signatura funkce** v programování?

Back:

Definice:
- **názvu** funkce
- **parametrů** funkce
- **typů parametrů** 
- **typu návratové hodnoty**
<!--ID: 1716283472480-->
END

---


START
BI-SZZ

Jak se liší **signatura funkce** a **deklarace funkce**?

Back:

**Signatura** jen popisuje **informace** o nějaké funkci (např. v rozhraní).

**Deklarace** dělá to samé + **říká, že ta funkce existuje** (např. v C++ můžu oddělit deklaraci od definice do jiných souborů).
<!--ID: 1716283472483-->
END

---

#### Konstruktor


START
BI-SZZ

Co je **konstruktor**?

Back:

metoda volaná automaticky při vytvoření objektu

konstruktory mohou být přetíženy

Tags: BI-SPOL-21
<!--ID: 1716283472485-->
END

---


START
BI-SZZ

Lze volat konstruktor explicitně na existujícím objektu?

Back:

Ne!

Tags: BI-SPOL-21
<!--ID: 1716283472488-->
END

---

#### Trait


START
BI-SZZ

Co je **trait**?

Back:

V podstatě **abstraktní třída**, ale **nemůže mít parametry konstruktoru**.

Je to specifická věc pro scalu.
<!--ID: 1716283472491-->
END

---


START
BI-SZZ

Co je **mixin** ve Scale? Jaké klíčové slovo se používá pro mixiny?

Back:

To, že třída využije libovolný počet `with`, čímž mixuju jednotlivé traity dohromady.

_Například:_
Když bych měl hru s různými efekty, co se mohou dát hráči po snězení jídla, tak na každý efekt můžu pak používat jako mixin.

Definice efektu: V efektu overridnu `eat()` a zavolám v něm `super.eat()`, čímž můžu řetězit ty efekty:
![](../Assets/Pasted%20image%2020231201172417.png)

Pak můžu jednoduše vytvářet jídla s efektama:
![](../Assets/Pasted%20image%2020231201172544.png)
<!--ID: 1716283472493-->
END

---

### Ekvivalence a identita


START
BI-SZZ

Kdy jsou dvě různé **instance** (objekty) **ekvivalentní**?

Back:

Když mají stejné charakteristiky
<!--ID: 1716283472496-->
END

---


START
BI-SZZ

Jaké 3 vlastnosti má **relace ekvivalence**? (v kontextu ekvivalence v OOP)

Back:

- reflexivní
- symetrická
- tranzitivní
<!--ID: 1716283472499-->
END

---


START
BI-SZZ

Pomocí jakých metod je reprezentována ekvivalence v OOP?

Back:

Pomocí `equals()` a `hashCode()`.
<!--ID: 1716283472502-->
END

---


START
BI-SZZ

Proč nemůžu při programování ekvivalence ve Scale jen overridnout `equals()`, ale musím overridnout i `hashCode()`?

Back:

Protože pokud jsou dva objekty ekvivalentní, musí mít i stejný hashcode.
<!--ID: 1716283472505-->
END

---


START
BI-SZZ

Podle čeho u objektů defaultně porovnává `equals()`?

Back:

Podle jejich identity (tzn. referencí).
<!--ID: 1716283472507-->
END

---


START
BI-SZZ

Kdy jsou dvě různé **instance** (objekty) **identické**?

Back:

Když mají stejné reference. 

Dvě reference jsou ekvivalentní, pokud ukazují na stejný objekt.
<!--ID: 1716283472510-->
END

---


START
BI-SZZ

Jak se ve Scale značí **porovnání** na základě **ekvivalence**?

Back:

`==` nebo `equals()`

_Např._
`if(obj1 == obj2) ...`
<!--ID: 1716283472513-->
END

---


START
BI-SZZ

Jak se ve Scale značí **porovnání** na základě **identity**?

Back:

`eq`

_Např._
`if(obj1 eq obj2) ...`
<!--ID: 1716283472520-->
END

---

### Dědičnost


START
BI-SZZ

Co je v programování **dědičnost**?

Back:

Umožňuje novému objektu nebo třídě využít strukturu nebo chování jiného objektu nebo třídy

Je to obvyklá forma subtypingu (vytvoření podtypu).

Tags: BI-SPOL-21
<!--ID: 1716283472523-->
END

---


START
BI-SZZ

Jaké atributy a metody dědí podtřída? (`public`, `private`, `protected`)

Back:

Dědí všechny `public` a `protected` atributy a metody.

Tags: BI-SPOL-21
<!--ID: 1716283472525-->
END

---


START
BI-SZZ

Co musí volat **konstruktor podtřídy**?

Back:

Musí v sobě zavolat **konstruktor nadtřídy**.

Tags: BI-SPOL-21
<!--ID: 1716283472528-->
END

---

#### jednoduchá dědičnost


START
BI-SZZ

Co je **jednoduchá dědičnost**?

Back:

třída může mít jen jednoho rodiče

Nevýhoda: nemusí být dostatečně expresivní - když sdílí více tříd podobné vlastnosti, je nutné opakovat kód

Tags: BI-SPOL-21
<!--ID: 1716283472531-->
END

---


START
BI-SZZ

Co je **vícenásobná dědičnost**?

Back:

Třída může mít více rodičů.

Tags: BI-SPOL-21
<!--ID: 1716283472533-->
END

---


START
BI-SZZ

V čem je problém vícenásobné dědičnosti? (2)

Back:

- Je tam problematické vyhodnocování `super`
- Nastává **diamond problem**
<!--ID: 1716283472536-->
END

---


START
BI-SZZ

Co je **diamond problem**?

Back:

Problém, že když mám vícenásobnou dědičnost, tak se neví, zda má `D` použít instanci `A`čka poděděnou od `B` nebo od `C`.

_Obrázek:_
![](../Assets/Pasted%20image%2020240521102659.png)
Tags: BI-SPOL-21
<!--ID: 1716283472539-->
END

---


START
BI-SZZ

Jak se řeší **diamond problem** v C++?

Back:

**virtuální dědičností**

`D` získá pouze jednu virtuální instanci `A` skrze `B` a `C`, nevytváří se pro každou zvlášť.

- `B` a `C` dědí z `A` pomocí klíčového slova `virtual` (Např. `class B : virtual public A`)
- při volání přetížené metody v `D` je nutné uvést rodičovskou třídu, jinak kompilátor vyvolá ambiguity error

_Obrázek:_
![](../Assets/Pasted%20image%2020240521102659.png)

Tags: BI-SPOL-21
<!--ID: 1716283472542-->
END

---


START
BI-SZZ

Jak se řeší **diamond problem** v Pythonu?

Back:

v Pythonu se řeší **C3 linearizací**, která určuje pořadí hledání metod
<!--ID: 1716283472544-->
END

---


START
BI-SZZ

Jaké **jazyky** například používají **jednoduchou dědičnost**?

Back:

Java, C#, Kotlin - s rozhraními

Scala - s traity
<!--ID: 1716283472547-->
END

---


START
BI-SZZ

Jaké **jazyky** například používají **vícenásobnou dědičnost**?

Back:

C++, Python
<!--ID: 1716283472550-->
END

---

#### implementační dědění


START
BI-SZZ

Co je **implementační dědění** (subclassing)?

Back:

Je to typ dědičnosti, kde **třída rozšiřuje** (`extends`) jinou **třídu**.
<!--ID: 1716283472553-->
END

---

START
BI-SZZ

Co je **dědění rozhraní**?

Back:

Je to typ dědičnosti, kde **rozhraní** dědí **signatury** z **rozhraní**.
<!--ID: 1716283472556-->
END

---

### Dispatch


START
BI-SZZ

Co je **dispatch** v OOP?

Back:

Dispatch určuje, **kdy** systém vybere, které chování (která implementace metody) se použije.

Např. zde když na `Dog` zavolám `makeSound`, tak je třeba rozhodnout, která z těch metod se zavolá. To dělá **dispatch**.
```scala
class Animal {
  def makeSound(): Unit = println("Some generic sound")
}

class Dog extends Animal {
  override def makeSound(): Unit = println("Woof!")
}
```
<!--ID: 1716283472558-->
END

---


START
BI-SZZ

Jaké jsou **2 typy dispatche**?

Back:

- **dynamický dispatch**
- **statický dispatch**
<!--ID: 1716283472561-->
END

---


START
BI-SZZ

Co je **dynamický dispatch**?

Back:

**výběr implementace za runtimu** podle skutečného runtime typu objektu
<!--ID: 1716283472564-->
END

---


START
BI-SZZ

Využívá **polymorfismus** **dynamický** nebo **statický dispatch**?

Back:

**Dynamický dispatch**. Na tom je celý polymorfismus založený.
<!--ID: 1716283472566-->
END

---


START
BI-SZZ

Co je **statický dispatch**?

Back:

Výběr implementace za kompilace.

záleží pouze na typu přijímajícího objektu (co je nalevo od `.` při volání)
<!--ID: 1716283472569-->
END

---


START
BI-SZZ

Co je **binding**?

Back:

Určuje, kdy se resolvne daný symbol (napříkad metoda).
<!--ID: 1716283472572-->
END

---


START
BI-SZZ

Co je **early binding** a **late binding**?

Back:

**Early binding** se provádí za **kompilace**
**Late binding** se provádí za **runtimu**
<!--ID: 1716283472575-->
END

---


START
BI-SZZ

Jaký je hlavní rozdíl mezi dispatchem a bindingem?

Back:

- **dispatch** vybírá, **která** metoda se zavolá (např. která overridnutá metoda se zavolá)
- **binding** resolvne vybranou metodu - tzn. přiřadí k ní danou implementaci
<!--ID: 1716283472578-->
END

---


START
BI-SZZ

Jaký binding je typicky ve **staticky typovaných jazycích**?

Back:

**early binding**
<!--ID: 1716283472580-->
END

---

#### super a this


START
BI-SZZ

Kdy se resolvuje `this`? 

Za runtimu nebo při kompilaci? (late binding/early binding)

Back:

Za **runtimu**, tedy **late binding**
<!--ID: 1716283472583-->
END

---


START
BI-SZZ

Kdy se **u tříd** resolvuje `super`?

Za runtimu nebo při kompilaci? (late binding/early binding)

Back:

Při **kompilaci**, tedy **early binding**
<!--ID: 1716283472586-->
END

---


START
BI-SZZ

Kdy se **u traitů** resolvuje `super`?

Za runtimu nebo při kompilaci? (late binding/early binding)

Back:

Za runtimu, tedy **late binding**
<!--ID: 1716283472589-->
END

---
