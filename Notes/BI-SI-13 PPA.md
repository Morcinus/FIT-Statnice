---
created: 2024-05-31T19:30:08
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-13 PPA

> BI-WSI-SI-13 / BI-WSI-WI-8 (PPA)
> Rozdělení paměti při implementaci programovacích jazyků: statické části, zásobník, halda. Aktivační záznamy, mechanismus implementace volání funkcí.


### Paměť


START
BI-SZZ

Kde jsou uložena data programu při běhu programu?

Back:

V **souvislém logickém adresovém prostoru** poskytovaném operačním systémem
<!--ID: 1717181000861-->
END

---


START
BI-SZZ

Jaký software se stará o mapování logických adres na fyzické adresy?

Back:

Operační systém
<!--ID: 1717181000864-->
END

---


START
BI-SZZ

Z čeho se skládá paměť programu? (A jakým směrem se rozšiřuje?)

Back:

![](../Assets/Pasted%20image%2020240531193813.png)
<!--ID: 1717181000867-->
END

---

### Statické objekty


START
BI-SZZ

Co jsou statické objekty?

Back:

**Statické objekty** = datový segment

Jsou to např. globální konstanty, globální proměnné, data generovaná překladačem, statické proměnné (pole, proměnné)
<!--ID: 1717181000870-->
END

---


START
BI-SZZ

Kdy je určena adresa statických objektů?

Back:

Při překladu programu
<!--ID: 1717181000872-->
END

---


START
BI-SZZ

Mají statické objekty konstantní nebo měnící se velikost při běhu programu?

Back:

Konstantní velikost
<!--ID: 1717181000875-->
END

---


START
BI-SZZ

Které části tohoto programu jsou staticé objekty?

![](../Assets/Pasted%20image%2020240531194020.png)

Back:

- static proměnná
- kód hello metody
- string konstanta "Hello"
- Informace o třídě Example
<!--ID: 1717181000878-->
END

---

#### vlastnosti


START
BI-SZZ

Jaké jsou výhody statických objektů v paměti?

Back:

- Nepotřebuje správu paměti při běhu programu
- Rychlý přístup (překládá se přímo adresou v paměti)
- Nehrozí Out-Of-Memory
<!--ID: 1717181000881-->
END

---


START
BI-SZZ

Jaké jsou nevýhody statických objektů v paměti?

Back:

Velikost a počty musí být známy předem
<!--ID: 1717181000883-->
END

---

### Zásobník


START
BI-SZZ

Co obsahuje **zásobník**?

Back:

Obsahuje **aktivační záznamy** (Activation record, stack frame), které obsahují **lokální proměnné** a jiné objekty bloků
<!--ID: 1717181000886-->
END

---


START
BI-SZZ

Jaký přístup se používá u zásobníku?

Back:

**Li-Fo** = last in, first out
<!--ID: 1717181000889-->
END

---


START
BI-SZZ

Co se uloží na zásobník, když se zavolá funkce?

Back:

Na zásobník (do aktivačního záznamu - Function Call **Stack Frame**) se při volání funkce uloží:
- **funkční parametry**
- **lokální proměnné**
- **return address** = odkaz na to, odkud byla funkce volána
<!--ID: 1717181000892-->
END

---


START
BI-SZZ

Kam jsou uloženy parametry při volání funkce?

Back:

Na **zásobník** při vstupu do funkce a odebrány při návratu
<!--ID: 1717181000894-->
END

---


START
BI-SZZ

Co se stane, když přeteče zásobník?

Back:

Nastane **stack overflow error**.

Např. když udělám rekurzivní funkci, tak se pro každé volání vytvoří nový aktivační záznam -> může dojít paměť, když je moc volání (např. když blbě napíšu podmínku kdy se to má zastavit)
<!--ID: 1717181000897-->
END

---

### Halda


START
BI-SZZ

Co obsahuje **halda** v paměti?

Back:

Obsahuje dynamické objekty/proměnné vytvořené při běhu programu
- V C (malloc a free) nebo v C++ (new a delete)
<!--ID: 1717181000900-->
END

---


START
BI-SZZ

Co například automaticky spravuje haldu?

Back:

Např.: Garbage Collection
<!--ID: 1717181000903-->
END

---


START
BI-SZZ

Co se stane, když se vyčerpá paměť na haldě?

Back:

Dojde k Out of Memory exception
<!--ID: 1717181000906-->
END

---

#### alokace objektů

START
BI-SZZ

Co znamená alokace objektů na haldě?

Back:

vytváření objektů na haldě
<!--ID: 1717181000908-->
END

---


START
BI-SZZ

Jakými způsoby lze udržovat objekty na haldě?

Back:

- manuální udržování - např. přes `delete`
- automatické udržování
<!--ID: 1717181000911-->
END

---


START
BI-SZZ

Jaké jsou 2 příklady automatické udržby objektů na haldě a co znamenají?

Back:

**Počítání referencí**
- strategie, kdy se automaticky udržuje počet referencí na objekt
- pokud dosáhne 0, objekt je z paměti odstraněn

**Mark-and-seep**
- Označí všechny objekty přístupné ze zásobníku, ke kterým se lze dostat
- Vymaže ostatní
<!--ID: 1717181000914-->
END

---

### Aktivační záznam


START
BI-SZZ

Co je aktivační záznam?

Back:

Záznam v paměti na zásobníku, který se vytváří při volání funkce.
<!--ID: 1717181000917-->
END

---


START
BI-SZZ

Kde je **uložený aktivační záznam**?

Back:

na **zásobníku**
<!--ID: 1717181000920-->
END

---


START
BI-SZZ

Kdy se **vytváří aktivační záznam** (function call stack frame)?

Back:

s každým **voláním funkce** (když program dojde na místo, kdy se má zavolat funkce s danými parametry)
<!--ID: 1717181000922-->
END

---


START
BI-SZZ

Kde mají jazyky bez vnořených procedur (např. C) uložené **lokální statické proměnné**?

Back:

Jsou uloženy v **lokálním aktivačním záznamu na zásobníku**
<!--ID: 1717181000925-->
END

---


START
BI-SZZ

Jak ukládají záznamy jazyky s **vnořenými procedurami** (např. Pascal, Lisp, funkcionální jazyky)?

Back:

Ukládají **link** mezi aktivačními záznamy procedur (funkcí)
<!--ID: 1717181000928-->
END

---


START
BI-SZZ

Z jakých částí se skládá **aktivační záznam**? (7 - pořadí je důležité :D)

Back:

![](../Assets/Pasted%20image%2020240531195621.png)

- **Skutečné parametry** - zkopírují se ty jednotlivé hodnoty
- **Návratové hodnoty** - tam se ukládají data, na konci funkce se to předá volající funkci
- **Řídící link** - adresa, kam se má program vrátit, až se dokončí ta funkce (tzn. typicky místo odkud se funkce volala)
- **Přístupový link** - některé jazyky umožňují uvnitř funkce definovat **lokální funkci** (Lisp, JavaScript, Pascal,...). Tento link ukazuje na vyšší proceduru - abych přes to mohl přistupovat k proměnným v té vyšší proceduře.
- **Uložené údaje počítače** - tam se ukládá kontext (např. proměnné), ve kterém jsem se nacházel před tím, než jsem volal danou funkci.
- **Pomocné dočasné proměnné** - generovány překladačem
<!--ID: 1717181000931-->
END

---

### Základní typy předávání parametrů funkcím


START
BI-SZZ

Jakými způsoby lze předávat parametry funkcím? (2)

Back:

- **hodnotou** = Hodnota se předává jako taková (používá se u jednoduchých datových typů)
- **referencí** = Do funkce se nepředává faktická hodnota, ale pouze reference na místo, kde je hodnota uložena
<!--ID: 1717181000934-->
END

---

### Mechanismus implementace volání funkcí


START
BI-SZZ

Co je **Stack pointer**?

Back:

Ukazatel na vrchol zásobníku v paměti
<!--ID: 1717181000937-->
END

---


START
BI-SZZ

Co je **Frame Pointer**? (FP)

Back:

Odkaz na začátek aktuálního záznamu
<!--ID: 1717181000940-->
END

---
