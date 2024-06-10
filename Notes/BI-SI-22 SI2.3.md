---
created: 2024-05-23T09:50:07
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-22 SI2.3

> BI-WSI-SI-22 (SI2.3)
> Zajištění kvality software: Způsoby zjišťování kvality, typologie testů, atributy testů, black vs. white box, akceptační, kvalifikační, regresní testy, automatizace testů.


### Testování softwaru

START
BI-SZZ

Co je **testování softwaru**?

Back:

Proces s cílem změřit kvalitu vytvořeného software

Umožňuje ověřit správnosti výstupu celé aplikace nebo jejích jednotlivých částí
<!--ID: 1716454064635-->
END

---


START
BI-SZZ

Co je **cílem testování softwaru**?

Back:

Ověřit korektnost produktu vůči specifikaci: projektu, nabídky, designu
<!--ID: 1716454064650-->
END

---


START
BI-SZZ

Jaké jsou **kroky při testování softwaru**?

Back:

1. **Plánování** - nástroje, odpovědnosti, co se bude testovat
2. **Analýza** - sepsání zadání testů, kolik testů se má dělat, jaké typy testů
3. **Implementace** - sepsání testů
<!--ID: 1716454064653-->
END

---


START
BI-SZZ

Co znamená **validace** a **verifikace** softwaru? (Jaký je mezi nimi rozdíl?)

Back:

- **Validace** - ověření, že aplikace dělá, co má
- **Verifikace** - ověření, že to dělá správně
<!--ID: 1716454064656-->
END

---


START
BI-SZZ

Jaké jsou dva základní typy testování?

Back:

- **statické testování**
- **dynamické testování**
<!--ID: 1716454064659-->
END

---


START
BI-SZZ

Co je **statické testování**?

Back:

Především revize, kontroly zadání.

- Zahrnuje:
	- Revize zadání
	- Validace analýzy nebo specifikace
	- Revize technického designu
	- Revize vývoje
	- atd.
<!--ID: 1716454064662-->
END

---


START
BI-SZZ

Co je **dynamické testování**?

Back:

Spouštění SW za účelem ověření kvality

Nastává až ke konci SW cyklu, protože musí být nejdříve dokončen vývoj
<!--ID: 1716454064664-->
END

---

### Rozdělení testů podle V-modelu

START
BI-SZZ

Popiš rozdělení testů pomocí **V-modelu**.

Back:

- integrace včasného testování v celém procesu vývojového cyklu
- na levé straně vývojová aktivita
- na pravé straně odpovídající testovací činnost

![](../Assets/Pasted%20image%2020240523101044.png)
<!--ID: 1716454064667-->
END

---

### Pozitivní vs. negativní testy

START
BI-SZZ

Co jsou **pozitivní** a **negativní** testy?

Back:

- **Pozitivní testy** - ověřují, že funkce funguje korektně
- **Negativní testy** - ověřují, že funkce nedělá, co nemá
<!--ID: 1716454064669-->
END

---

### White a black box testing


START
BI-SZZ

Co jsou **white box** a **black box** testy?

Back:

- **White box** - tester zná implementaci
- **Black box** - tester nezná implementaci
<!--ID: 1716454064672-->
END

---


START
BI-SZZ

Na co se zaměřuje **white box testing**?

Back:

Na strukturální testy - zaměření na strukturální pokrytí
<!--ID: 1716454064675-->
END

---


START
BI-SZZ

Co je **pokrytí rozhodování**?

Back:

Zkoušení všech míst v kódu, kde se **rozhoduje** o provedené akci

V případě, že pokryjeme 100% rozhodování, tak pokryjeme i 100% příkazů (ne naopak)
<!--ID: 1716454064678-->
END

---


START
BI-SZZ

Co je **rozdělení tříd ekvivalence**?

Back:

Rozdělení vstupních dat na oddíly, které by se měly stejně zpracovávat a vracet stejný výsledek. Týká se platných i neplatných hodnot.

_Např._
![](../Assets/Pasted%20image%2020240523101748.png)

zde by bylo cca 6 testů (dospělí se mi překrývají se studentama + můžu testnout třeba zápornou hodnotu)
<!--ID: 1716454064681-->
END

---


START
BI-SZZ

Co u **rozdělení tříd ekvivalence** znamená 100% pokrytí?

Back:

Mít test pro každou třídu ekvivalence
<!--ID: 1716454064683-->
END

---


START
BI-SZZ

Co je **analýza hraničních hodnot**?

Back:

Souvisí s třídami ekvivalence, kde se volí minimální a maximální (resp. první a poslední) hodnoty z každé třídy
<!--ID: 1716454064686-->
END

---


START
BI-SZZ

Co je testování pomocí **rozhodovací tabulky**?

Back:

Vypíšu si vstupní parametry a jejich kombinace, pak vyberu, které z kombinací budu testovat.

Některé kombinace ani nemusí nastat, některé nejsou dosažitelné a některé neovlivňují výsledek.

_Např._
![](../Assets/Pasted%20image%2020240523102119.png)

Např. celou tu pravou stranu nemusím vůbec řešit/testovat, protože když nemám správně IDčko, tak typicky ani nebudu mít dobře nic jiného.
<!--ID: 1716454064689-->
END

---

### Typy testů

#### Funkční testy

START
BI-SZZ

Co jsou **funkční testy**?

Back:

Testy, co se zaměřují na samotné **funkcionality**, které byly specifikovány v **zadání**
<!--ID: 1716454064692-->
END

---


START
BI-SZZ

Co jsou **smoke testy**?

Back:

- Ověření, že je aplikace rámcově funkční
- Zaměřuje se na hlavní stávající funkce programu

Např. v pipelině mám smoke testy pro základní ověření, že appka funguje
<!--ID: 1716454064694-->
END

---


START
BI-SZZ

Co jsou **sanity testy**?

Back:

Ověření, že nové funkce nebo opravy jsou funkční natolik, že má smysl pokračovat v testování nebo vývoji
<!--ID: 1716454064697-->
END

---


START
BI-SZZ

Co jsou **systémové testy**?

Back:

- Ověřování funkčnosti programu jako celku
- Součástí mohou být i integrační testy mezi systémy
<!--ID: 1716454064700-->
END

---


START
BI-SZZ

Co jsou **akceptační testy**?

Back:

Kontrola zadavatelem, že systém funguje, jak má
<!--ID: 1716454064703-->
END

---


START
BI-SZZ

Co jsou **kvalifikační testy**?

Back:

Ověření u dodavatele zda může být SW předán klientovi ???
<!--ID: 1716454064706-->
END

---


START
BI-SZZ

Co jsou **regresní testy**?

Back:

Ověření, že části systému, které měly zůstat nedotčeny, zůstaly nedotčeny

Dva způsoby
- Zaměření se konkrétně na regresní test pro nové funkčnosti
- Zaměření se na regresní test celé aplikace
<!--ID: 1716454064708-->
END

---


START
BI-SZZ

Co jsou penetrační testy?

Back:

Ověření bezpečnosti systému proti narušení hackerským útokem.
<!--ID: 1716454064711-->
END

---


#### Nefunkční testy

START
BI-SZZ

Co jsou **nefunkční testy**?

Back:

Hodnotí nefunkční charakteristiky systému (způsob chování sytému)
- Pro ověření: použitelnosti, bezpečnosti, výkonnosti…
<!--ID: 1716454064714-->
END

---


START
BI-SZZ

Co jsou **performance testy**?

Back:

- Ověření efektivity kódu aplikace
- Ověření, že systém zvládne obsloužit stanovený počet uživatelů
<!--ID: 1716454064717-->
END

---


START
BI-SZZ

Co jsou **stress testy**? Jaké 3 vlastnosti testují?

Back:

- **Ověření robustnosti** – odolnost na vyčerpání paměti, místa na disku, pádu části systému..
- **Ověření dostupnosti** – možnost, aby se připojení většího než povoleného počtu uživatel nezpůsobilo pád systému
- **Error handlingu** – ověření správnosti ošetření chybových stavů
<!--ID: 1716454064720-->
END

---

#### Atributy testu


START
BI-SZZ

Jaké jsou **atributy testu**? (5)

Back:

- **Power** – vysoká pravděpodobnost nalezení problému, pokud existuje
- **Value** – odhalí chyby důležité pro uživatele
- **Motivating** – „klient“ bude chtít chyby nalezené testem opravit
- **Representative** – odpovídá tomu, čeho si uživatel nejpravděpodobněji všimne
- **Cost** – přímé náklady, čas a pracnost

a další…
<!--ID: 1716454064722-->
END

---


START
BI-SZZ

Jaké jsou **výhody** automatizovaného testování?

Back:

- Zajišťuje **konzistenci** testů
- Testy mají stejné výsledky nehledě na počtu opakování
- Snižuje riziko chyby člověka
- Lze udělat na straně vývojáře, ale je možnost je přidat do pipeline
<!--ID: 1716454064725-->
END

---

START
BI-SZZ

Které z následujících testů jsou typicky automatizované a které manuální?
- smoke tests 
- sanity tests 
- system tests 
- integration tests 
- regression tests 
- acceptance tests 
- performance tests 
- stress tests 
- penetration tests

Back:

Všechno je **automatizovné** kromě **penetračních** a **akceptačních** testů.

Systémové testy a sanity testy mohou a nemusí být automatizované.
<!--ID: 1716454064727-->
END

---
