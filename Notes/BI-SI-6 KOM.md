---
created: 2024-05-17T12:22:50
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-6 KOM

> BI-WSI-SI-6 (KOM)
> OntoUML a jeho konstrukty, transformace do objektového modelu.

### OntoUML obecně 

START
BI-SZZ

Jaký je postup konceptuální analýzy? (3 kroky)

Back:

1. Vytvoření **slovníku pojmů** dle konceptů v doméně.
2. Vytváření ontologie na základě ontologických **vzorů**.
3. Validace konceptuálního modelu se zadavatelem (doménový expert).

END

---


START
BI-SZZ

Co je **modularizace ontologie**?

Back:

Rozdělení dané ontologie do **modulů**, které jsou zaměřené na určitou perspektivu

_Např._
![](../Assets/Pasted%20image%2020231004182403.png)

END

---


START
BI-SZZ

Jak se v OntoUML zakreslí třída (název, atributy, typy atributů, multiplicita atriburů)?

Back:

![](../Assets/Pasted%20image%2020240517133328.png)

END

---


START
BI-SZZ

Co jsou třídní atributy v OntoUML a jak se značí?

Back:

Atributy, které jsou společné u všech instancí.

Značí se podtržením.

_Např._
![](../Assets/Pasted%20image%2020240517133519.png)

Tags: optional

END

---


START
BI-SZZ

Co je **disjoint** v OntoUML?

Back:

**disjoint** = neexistuje instance, která by byla instancí více než jednoho podtypů

Např. když mám `person`, tak může být buď `žena`, `muž` nebo `nic`.

END

---


START
BI-SZZ

Co je **complete** v OntoUML?

Back:

**complete** = každá instance nadtypu je také alespoň jednoho z podtypů

Např. když mám person, tak musí být buď `žena` nebo `muž` nebo `obojí`

END

---


START
BI-SZZ

Jak se značí asociace v OntoUML?

Back:

čára, název a multiplicita (analogicky jako v UML)

![](../Assets/Pasted%20image%2020240517134024.png)

END

---


START
BI-SZZ

Co jsou metaatributy u asociací v OntoUML?

Back:

Mohou značit vlastnosti množiny.

_Např._ `unordered`, `ordered`, `unique`, `nonunique`

![](../Assets/Pasted%20image%2020240517134212.png)

END

---

### rigidita, antirigidita, sortály, nonsortály

START
BI-SZZ

Co je **sortál** v OntoUML?

Back:

Typ, který **má nějaký princip identity** (a poskytuje ji ostatním).

END

---


START
BI-SZZ

Co je **non-sortál** v OntoUML?

Back:

Typ, který **nemá nějaký princip identity**.

END

---


START
BI-SZZ

Co je **modální logika**?

Back:

Je to rozšíření predikátové logiky.

END

---


START
BI-SZZ

Co je **možnost** v modální logice a **jak se značí**?

Back:

V některém světě (alespoň jednom) platí, že ...

![](../Assets/Pasted%20image%2020240517134545.png)

_Např:_
![](../Assets/Pasted%20image%2020240517134624.png)

END

---

START
BI-SZZ

Co je **nutnost** v modální logice a **jak se značí**?

Back:

Ve všech světech platí, že ...

![](../Assets/Pasted%20image%2020240517134551.png)


_Např:_
![](../Assets/Pasted%20image%2020240517134624.png)

END

---


START
BI-SZZ

Co je **rigidní typ** v OntoUML?

Back:

**Rigidita** = neměnnost, neschopnost přizpůsobit se změnám

Typ $T$ je **rigidní** pro každou instanci $x$, právě tehdy, když je nutně ($□$) instancí $T$.

END

---


START
BI-SZZ

Co je **anti-rigidní typ** v OntoUML?

Back:

Typ $T$ je **anti-rigidní** pro každou instanci $x$, právě tehdy, když je **možné** ($◊$), že $x$ nemusí být instancí $T$.

END

---


START
BI-SZZ

Jaké jsou **rigidní sortály** v OntoUML?

Back:

- **Kind**
- **Subkind**
- **Relator**
- **Mode**
- **Quality**

_Přehled:_
![](../Assets/Pasted%20image%2020240517140026.png)

END

---


START
BI-SZZ

Jaké jsou **antirigidní sortály** v OntoUML?

Back:

- **Role**
- **Phase**

_Přehled:_
![](../Assets/Pasted%20image%2020240517140026.png)

END

---


START
BI-SZZ

Jaké jsou **rigidní nonsortály** v OntoUML?

Back:

- **Category**

_Přehled:_
![](../Assets/Pasted%20image%2020240517140026.png)

END

---


START
BI-SZZ

Jaké jsou **semirigidní nonsortály** v OntoUML?

Back:

- **Mixin**

_Přehled:_
![](../Assets/Pasted%20image%2020240517140026.png)

END

---


START
BI-SZZ

Jaké jsou **antirigidní nonsortály** v OntoUML?

Back:

- **RoleMixin**
- **PhaseMixin**

_Přehled:_
![](../Assets/Pasted%20image%2020240517140026.png)

END

---

### vztahy celek-část

START
BI-SZZ

Co je **povinná/volitelná část**?

Back:

**Povinná** = Celek vyžaduje aspoň jednu část
**Volitelná** = Celek ji může postrádat

Povinná
![](../Assets/Pasted%20image%2020240517140756.png)

Volitelná
![](../Assets/Pasted%20image%2020240517140752.png)

END

---


START
BI-SZZ

Co je **esenciální část**? `{essential}`

Back:

Celek **nemůže existovat** bez instance jeho části. Ta část je **neměnná**.

Např. Osoba _John_ nemůže existovat bez instance _Johnův mozek_ jako jeho části.

![](../Assets/Pasted%20image%2020240517141158.png)

END

---


START
BI-SZZ

Co je **neoddělitelná část**? `{inseparable}`

Back:

Část **nemůže existovat** bez instance celku. Ten celek je **neměnný**.

Např. _Johnův mozek_ nemůže existovat bez toho aniž by byl částí osoby _John_.
![](../Assets/Pasted%20image%2020240517141821.png)

END

---


START
BI-SZZ

Co je **neměnitelná část**? `{immutable part}`

Back:

Celek **nemůže existovat** bez instance jeho části. Ta část je **neměnná**. 

Celek navíc **není rigidní**.

_Např._
![](../Assets/Pasted%20image%2020240517142359.png)

END

---


START
BI-SZZ

Co je **neměnitelný celek**? `{immutable whole}`

Back:

Část **nemůže existovat** bez instance celku. Ten celek je **neměnný**.

Část navíc **není rigidní**.

_Např._
![](../Assets/Pasted%20image%2020240517142417.png)

END

---


START
BI-SZZ

Co znamenají tyto dva diamantíky v OntoUML?
![](../Assets/Pasted%20image%2020240517142456.png)

Back:

![](../Assets/Pasted%20image%2020240517142613.png)

Je to **sdílitelnost částí**. Tím se to liší od UML (kde to je agregace a kompozice).

_Např._
![](../Assets/Pasted%20image%2020240517142623.png)


END

---

### OntoUML typy

START
BI-SZZ

Co je **Kind** v OntoUML?

Back:

Základní typ v OntoUML

_Např._
![](../Assets/Pasted%20image%2020240517144110.png)

END

---


START
BI-SZZ

Co je **Subkind** v OntoUML?

Back:

Značí nám nějaký podtyp ostatních typů.

_Např._
![](../Assets/Pasted%20image%2020240517144343.png)

END

---


START
BI-SZZ

Co je **Phase** v OntoUML?

Back:

Definuje fázi nějakého typu.

Fáze je založena na něčem **intrinsickém**.

_Např._
![](../Assets/Pasted%20image%2020240517144549.png)

END

---


START
BI-SZZ

Co je **Role** v OntoUML?

Back:

Definuje roli nějakého typu.

Role je založena na něčem **extrinsickém**.

_Např._
![](../Assets/Pasted%20image%2020240517144622.png)
END

---


START
BI-SZZ

Co je **Collective** v OntoUML? Jaké dva vztahy se používají?

Back:

Označuje nějakou skupinu, kde **všechny prvky mají stejnou roli**.

Používají se vztahy:
- `memberOf` - vztah kolektivu a nějakého prvku
- `subCollectionOf` - vztah dvou kolektivů

Např. 

![](../Assets/Pasted%20image%2020240517144700.png)

![](../Assets/Pasted%20image%2020240517145030.png)

END

---


START
BI-SZZ

Co je **Quantity** v OntoUML? Jaké dva vztahy se používají?

Back:

Vztah celek-část, kde se jedno skládá z druhého.

Vztahy:
- `containment` - něco je umístěno v něčem (např. víno-lahev)
- `subQuantityOf` - něco je složka něčeho (např. protein-maso)

![](../Assets/Pasted%20image%2020240517145255.png)

![](../Assets/Pasted%20image%2020240517145410.png)
![](../Assets/Pasted%20image%2020240517145429.png)

END

---


START
BI-SZZ

Co je **Relator** v OntoUML?

Back:

**Aspekt**, který popisuje nějaký vztah mezi vazbami. Je to "pečetidlo".

Používá se `mediation` a `material` vazba!

_Příklad_
![](../Assets/Pasted%20image%2020231018183410.png)

END

---


START
BI-SZZ

Co je **Category** v OntoUML?

Back:

Typ, co zastřešuje do kategorií např. Kindy atd.

![](../Assets/Pasted%20image%2020240517145645.png)

END

---


START
BI-SZZ

Co je **PhaseMixin** v OntoUML?

Back:

Můžu tím zastřešit více fází.

_Příklad (tohle je RoleMixin, ale u PhaseMixinu to funguje stejně)_
![](../Assets/Pasted%20image%2020231112140458.png)

END

---


START
BI-SZZ

Co je **RoleMixin**?

Back:

Můžu tím zastřešit více rolí.

_Příklad_
![](../Assets/Pasted%20image%2020231112140458.png)

END

---


START
BI-SZZ

Co je **Mixin** v OntoUML?

Back:

Můžu tím zastřešit nějaký rigidní a antirigidní typ.

_Např._
![](../Assets/Pasted%20image%2020240517150224.png)

END

---


START
BI-SZZ

Co je **Quality** v OntoUML?

Back:

**Aspekt**, který definuje nějakou **měřitelnou veličinu** nějakého typu. Používá se s `characterization`.

_Např._
![](../Assets/Pasted%20image%2020240517150553.png)

END

---

START
BI-SZZ

Co je **Mode** v OntoUML?

Back:

**Aspekt**, který určuje **vlastnost** nějakého typu, která není měřitelná. Používá se s `characterization`.

_Např._
![](../Assets/Pasted%20image%2020240517150329.png)

END

---

### transformace

START
BI-SZZ

Jak se transformuje metaatribut **complete** z OntoUML do objektového modelu?

Back:

**Nadtřída** se bude implementovat jako **abstraktní**

END

---


START
BI-SZZ

Jak se transformuje metaatribut **disjoint** z OntoUML do objektového modelu?

Back:

Normálně, je to standardní chování s jednoduchou dědičností

END

---


START
BI-SZZ

Jak se transformuje **non-disjoint** z OntoUML do objektového modelu?

![](../Assets/Pasted%20image%2020240517143228.png)

Back:

Možnosti:
- **děděním** - počet tříd roste exponenciálně!
- **skládáním**

_Příklad dědění:_
![](../Assets/Pasted%20image%2020240517143341.png)

_Příklad skládání:_
![](../Assets/Pasted%20image%2020240517143356.png)

END

---


START
BI-SZZ

Jak se transformuje **sortál** z OntoUML do objektového modelu?

Back:

Jako třídu, co bude mít jednoznačný identifikátor

END

---


START
BI-SZZ

Jak se transformuje **non-sortal** z OntoUML do objektového modelu?

Back:

Jelikož non-sortály slouží jako další _dimenze kategorizace_, typicky budou vytvářet situace s **vícenásobnou dědičností**.

END

---


START
BI-SZZ

Jak se transformuje **Role** z OntoUML do objektového modelu?

Back:

Role je implementována jako **třída**, příslušnost role se řeší **skládáním**

END

---


START
BI-SZZ

Jak se transformuje **Phase** z OntoUML do objektového modelu?

Back:

Implementováním návrhového vzoru **State**.

END

---
