---
created: 2024-03-25T09:03:24
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-2 BI-WI-5 DBS

> BI-WSI-SI-2 / BI-WSI-WI-5 (DBS)
> Transformace konceptuálního schématu (v ER nebo jiné notaci) na relační.

### Transformace konceptuálního schématu na relační

START
BI-SZZ

Co se obecně provádí v rámci **transformace konceptuálního schématu na relační**?

Back:

Převádí se konceptuální model (entity a vztahy) na relační model (popis relací)

_Příklad konceptuálního modelu_
![](../Assets/Pasted%20image%2020240511140526.png)
_Příklad odpovídajícího relačního modelu_
![](../Assets/Pasted%20image%2020240511140552.png)
<!--ID: 1715435020533-->
END

---

START
BI-SZZ

Jaký je postup **transformace konceptuálního modelu na relační model**?

_Příklad konceptuálního modelu_
![](../Assets/Pasted%20image%2020240511140526.png)

Back:

1. Přepsat entity, které u sebe nemají vidličky a nejsou slabé (např. `Druh`, `Lekar`, `prohlidkova_trasa` atd.) - např. přidám Druh(id_druh, popis)
2.  Vyřeším entity, který u sebe mají vidličky - např. přidám `Zvire[id_druh] ⊆ Druh[id_druh]`+ do Zvířete přidám `id_druh` (povinný/nepovinný podle vazby)
<!--ID: 1715435020537-->
END

---

#### Transformace entit

START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**Název entity**

Back:

Název relace (tabulky)
<!--ID: 1715435020540-->
END

---

START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**Název entity**

Back:

Název relace (tabulky)

END

---

START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**domény atributů**

Back:

datové typy relačních atributů (`INTEGER`, `VARCHAR`, …)
<!--ID: 1715435020543-->
END

---

START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**povinnost atributů**

Back:

na `NOT NULL`
<!--ID: 1715435020546-->
END

---


START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**identifikátor entity**

Back:

`PRIMARY KEY (id)`
<!--ID: 1715435020549-->
END

---


START
BI-SZZ

Jak se vyjádří při transformaci konceptuálního modelu na relační model:

**identifikátor u slabé entity**

Back:

přidat do `PRIMARY KEY` klíče jejich “vlastníků”
<!--ID: 1715435020552-->
END

---


START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

**alternativní klíče**

Back:

Na `UNIQUE` + `NOT NULL`
<!--ID: 1715435020555-->
END

---

#### Transformace vztahů

START
BI-SZZ

Na co se převede při transformaci konceptuálního modelu na relační model:

obecně **vztahy** mezi entitami

Back:

na reference pomocí `FOREIGN KEY`, `PRIMARY KEY` a `REFERENCES`
<!--ID: 1715435020558-->
END

---

##### Vztah 1:1

START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:1** s oboustrannou povinností

Back:

sloučit do jedné tabulky, nepoužitý identifikátor by měl být `NOT NULL` a `UNIQUE`
<!--ID: 1715435020560-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:1** s jednostrannou povinností

Back:

vytvořit dvě tabulky, do té povinné přidat `NOT NULL` atribut s `FOREIGN KEY` referencí na primární klíč té nepovinné

![](../Assets/Pasted%20image%2020240511170206.png)
<!--ID: 1715435020563-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:1** bez povinných vazeb

Back:

Vytvořit dvě tabulky, do jedné přidat atribut s `FOREIGN KEY` referencí na primární klíč té druhé tabulky

NEBO

vytvořit třetí (vztahovou) tabulku s PRIMARY KEY referencí na první a NOT NULL UNIQUE referencí na druhou

_Příklad tím tabulkovým způsobem_
![](../Assets/Pasted%20image%2020240511170122.png)
<!--ID: 1715435020566-->
END

---

##### Vztah 1:N

START
BI-SZZ

Co je determinant a nedeterminant v **1:N** vztahu?

Back:

- **determinant** = “N” strana v 1:N vztahu
- **nedeterminant** = “1” strana v 1:N vztahu
<!--ID: 1715435020569-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:N** s povinným nedeterminantem (=povinnost u N)

![](../Assets/Pasted%20image%2020240520185232.png)

Back:

vytvořit dvě tabulky, determinantu přidat `NOT NULL` atribut s `FOREIGN KEY` referenci na primární klíč nedeterminantu

_Příklad_
![](../Assets/Pasted%20image%2020240511165717.png)
<!--ID: 1715435020572-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:N** s nepovinným nedeterminantem (=povinnost u N)

Back:

vytvořit dvě tabulky, determinantu přidat atribut s `FOREIGN KEY` referenci na primární klíč nedeterminantu

NEBO

vytvořit třetí (vztahovou) tabulku s `PRIMARY KEY` referencí na determinant a `NOT NULL` referencí na nedeterminant
<!--ID: 1715435020574-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah 1:N** s rekurzivním vztahem (vztah entity se sebou)

Back:

přidat atribut s `FOREIGN KEY` referencí na vlastní primární klíč
<!--ID: 1715435020577-->
END

---

##### Vztah N:M


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah M:N** unikátní kombinace (tzn. jeden film se hraje v jednom kině nejvýše jednou)

![](../Assets/Pasted%20image%2020240511171155.png)

Back:

vytvořit třetí (vztahovou) tabulku, která referencuje primární klíče obou původních tabulek a jejíž vlastním `PRIMARY KEY` je tato dvojice klíčů

```sql
CREATE TABLE predstaveni (
	id_kina integer REFERENCES kino (id_kina),
	id_filmu integer REFERENCES film (id_filmu),
	CONSTRAINT predstaveni_pk PRIMARY KEY (id_kina,id_filmu)
);
```
<!--ID: 1715435020580-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah M:N** opakující se kombinace pomocí **silné entity**

Back:

má vlastní `ID` jako svůj `PRIMARY KEY`, má `NOT NULL` reference na primární klíče obou původních tabulek a příp. i další atributy

```sql
CREATE TABLE predstaveni (
	id_predstavení integer PRIMARY KEY,
	datum date NOT NULL,
	id_kina integer NOT NULL REFERENCES kino (id_kina),
	id_filmu integer NOT NULL REFERENCES film (id_filmu)
);
```

_Např:_
![](../Assets/Pasted%20image%2020240511150934.png)

_Pozor:_ zde konkrétní kino hraje konkrétní film kolikrát chce! (tím se liší slabá/silná entita)
<!--ID: 1715435020582-->
END

---


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**vztah M:N** opakující se kombinace pomocí **slabé entity**

Back:

nemá vlastní ID, má `NOT NULL` reference na primární klíče obou původních tabulek a nutně i další atributy takové, aby jejich kombinace mohla být `PRIMARY KEY`

_Např._
```sql
CREATE TABLE predstaveni (
	datum date,
	id_kina integer NOT NULL REFERENCES kino (id_kina),
	id_filmu integer NOT NULL REFERENCES film (id_filmu),
	CONSTRAINT PRIMARY KEY predstaveni_pk (datum, id_kina, id_filmu)
);
```
<!--ID: 1715435020585-->
END

---

##### Identifikační vztah

START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**identifikační vztah** (vztah slabé entity se silnou)

Back:

do `PRIMARY KEY` slabé entity je potřeba přidat klíče jejich “vlastníků” (**i tranzitivně**)
<!--ID: 1715435020588-->
END

---

### ISA hierarchie


START
BI-SZZ

Jak se převede při transformaci konceptuálního modelu na relační model:

**ISA hierarchie**

Např u entity `fyzicka_osoba`, která má vlastní atributy, ale zároveň využívá i atributy obecné entity `osoba`, stejně tak `pravnicka_osoba` je osoba

(3 možnosti)

Back:

1. jedna tabulka (`osoba`) se sjednocením atributů a navíc ještě atributem `typ`
2. dvě tabulky (`fyzicka` a `pravnicka`), obě mají jako klíč `id_osoby`
3. tři tabulky (`osoba`, `fyzicka`, `pravnicka`), z nichž poslední dvě mají cizí klíč `id_osoby` referencující primární klíč tabulky `osoba` (de facto implementace rolí)
<!--ID: 1715435020590-->
END

---


START
BI-SZZ

Jsou špatně smyčky v konceptuálním modelu?

Back:

Nemusí být nutně špatně. Každá cesta má jiný význam.
<!--ID: 1715435020594-->
END

---


### Informace z prosemináře

Zdroj: https://www.youtube.com/watch?v=yjw2__sH1TI

START
BI-SZZ

Jak se značí ve zjednodušeném relačním schématu **primární klíč**?

Back:

Podtržením daného atributu/atributů

![](../Assets/Pasted%20image%2020240511142625.png)
<!--ID: 1715435020596-->
END

---


START
BI-SZZ

Jak se značí ve zjednodušeném relačním schématu **povinný atribut**?

Back:

Přidání hvězdičky k danému atributu

![](../Assets/Pasted%20image%2020240511142627.png)

Pozn. u primárního klíče se `*` nepíše, protože primární klíč je automaticky povinný. 
<!--ID: 1715435020599-->
END

---


START
BI-SZZ

Jak se vytvoří ve zjednodušeném relačním schématu **vazba 1:N**?

![](../Assets/Pasted%20image%2020240511153931.png)

Back:

Přidám do `Zvire` cizí klíč a napíšu `Zvire[id_druh] ⊆ Druh[id_druh]`
<!--ID: 1715435020602-->
END

---
