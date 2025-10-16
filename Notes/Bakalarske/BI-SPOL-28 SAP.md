---
created: 2024-05-12T10:20:19
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-28 SAP

> BI-SPOL-28 (SAP)
> Architektura číslicového počítače, instrukční cyklus počítače, základní třídy souborů instrukcí (ISA). Paměťový subsystém počítače, paměťová hierarchie, cache

### architektura číslicového počítače

START
BI-SZZ

Co je **číslicový počítač**?

Back:

**číslicový počítač** je stroj, který provádí operace (= výpočty) s diskrétními hodnotami, s tím, že posloupnost těchto operací můžeme předem upravit (= naprogramovat)
<!--ID: 1715508837222-->
END

---


START
BI-SZZ

S jakými typy informací pracuje počítač? (2)

Back:

- **data** = vstupy, výstupy, mezivýpočty a další užitečné hodnoty
- **instrukce** = popis operací, a tedy funkčnosti programu
<!--ID: 1715508837227-->
END

---


START
BI-SZZ

Jaký je rozdíl mezi **diskrétním** a **analogovým signálem**?

Back:

- **analogový signál** je spojitý a nabývá libovolných hodnot (např. EKG)
- **diskrétní signál** nabývá vždy v daném čase dané hodnoty

![](../../Assets/Pasted%20image%2020240512104805.png)
<!--ID: 1715508837230-->
END

---


START
BI-SZZ

Jak jsou v počítači reprezentovány instrukce a data?

Back:

data i instrukce jsou reprezentovány **binárními signály** (jedničkami a nulami), které považujeme za diskrétní (narozdíl od spojitých analogových strojů)
<!--ID: 1715508837233-->
END

---


START
BI-SZZ

Když mám **seznam instrukcí** v paměti, v jakém pořadí se vykonávají?

Back:

instrukce se vykonávají v tom pořadí, v jakém jsou uložené v paměti (s výjimkou speciálních “skokových” instrukcí)
<!--ID: 1715508837236-->
END

---

START
BI-SZZ

Z jakých částí se skládájí všechny počítače? (6)

Back:

- **Datová část (ALU)** - v procesoru
- **Řídící část (řadič)** - v procesoru
- **Pracovní registry** - v procesoru
- **Hlavní paměť** - často mimo procesor (např. RAMka)
- **Vstupní zařízení**
- **Výstupní zařízení**
<!--ID: 1715508837242-->
END

---


START
BI-SZZ

Z jakých částí se skládá procesor? (3)

Back:

Řídící část:
- **Řadič** (control unit, controller)

Datová část:
- **ALU** (aritmeticko-logická jednotka)
- **Pracovní registr(y)**

_Obrázek:_
![](../../Assets/Pasted%20image%2020240512111752.png)
<!--ID: 1715508837245-->
END

---


START
BI-SZZ

Co je a co dělá **ALU**?

Back:

**ALU** = aritmeticko logická jednotka je část procesoru

Provádí operace podle instrukcí - aritmetické operace (sčítání,..), logické operace (AND, OR), porovnávání, posuny atd.
<!--ID: 1715508837248-->
END

---


START
BI-SZZ

Co je a co dělá **řadič**?

Back:

**Řadič** řídí činnost procesoru a tok dat mezi pamětí a procesorem, stará se taky o výjimky atd. 
<!--ID: 1715508837251-->
END

---


START
BI-SZZ

Co jsou a co dělají **registry** (v procesoru)?

Back:

**registry** jsou dočasné uložiště malých dat.
<!--ID: 1715508837255-->
END

---


START
BI-SZZ

Co je a k čemu slouží **hlavní paměť**?

Back:

**Hlavní paměť** (operační paměť) slouží k uchování instrukcí a dat

Např. RAM je hlavní paměť
<!--ID: 1715508837258-->
END

---


START
BI-SZZ

Co je a k čemu slouží **vedlejší paměť**?

Back:

K uchování dat dlouhodobě. 

Např. HDD, SSD disky atd.
<!--ID: 1715508837262-->
END

---


START
BI-SZZ

Jaké jsou dva hlavní typy architektury počítače a jak se liší?

Back:

**Von Neumannova** - nejběžnější, instrukce a data uložena ve **společné paměti**
**Harvardská** - používá se u malých počítačů (x86 čipy), má **oddělenou paměť** pro instrukce a data 
<!--ID: 1715508837265-->
END

---

### instrukční cyklus počítače


START
BI-SZZ

Co je a k čemu slouží **instrukce** v počítači? 

Back:

Instrukce = příkaz v podobě čísla

Vyjadřuje, jaká operace se má provést (a s jakými operandy + další informace)

Např. `ADD`, `SUB`, `JMP`,...
<!--ID: 1715508837268-->
END

---


START
BI-SZZ

Jaké jsou fáze instrukčního cyklu počítače? (6)

Back:

1. fáze **“fetch”**
    1. načtení instrukce _(Instruction Fetch, IF)_
    2. dekódování instrukce _(Instruction Decode, ID)_
    3. načtení operandů _(Operand Fetch, OF)_
2. fáze **”execute”**
    1. provedení instrukce _(Instruction Execution, IE)_
    2. zapsání výsledku _(Write Back, WB, Result Store)_
    3. příp. přerušení

Řadič v nekonečné smyčce jede podle instrukčního cyklu

_Ilustrační obrázek_
![](../../Assets/Pasted%20image%2020240512113303.png)
<!--ID: 1715508837271-->
END

---

### ISA

START
BI-SZZ

Čeho je zkratka **ISA** v kontextu hardwaru?

Back:

**architektura souboru instrukcí** (Instruction Set Architecture, ISA)
<!--ID: 1715508837274-->
END

---


START
BI-SZZ

Co je **ISA** v kontextu hardwaru?

Back:

 ISA standardizuje typy a formáty instrukcí, datové typy dat, jejich kódování a způsob uložení v paměti, adresovací módy, přístup do paměti i mimořádné stavy (jde vlastně o rozhraní mezi nízkoúrovňovým softwarem a hardwarem, které umožňuje abstrakci nezávislou na hardwaru)
<!--ID: 1715508837277-->
END

---


START
BI-SZZ

Jaké informace obsahuje **instrukce**?

Back:

- **typ operace** (co se počítá)
- příp. **operandy** (s čím se počítá, příp. kde je to uloženo)
- příp. místo zapsání **výsledku** (často se ukládá na místo prvního operandu)
- příp. **následující instrukce** (ve von Neumannově architektuře je to implicitně následující instrukce v paměti!)

_Např._ `mov r1, r2` je symbolický zápis instrukce typu mov s cílovým operandem `r1` a zdrojovým operandem `r2`, tento zápis překladač přeloží na `0x2C12` (16b) a takto se uloží do paměti
<!--ID: 1715508837280-->
END

---


START
BI-SZZ

Jakými způsoby lze **adresovat** operandy v instrukcích? (6)

Back:

Adresace může být
- **žádná** - některé instrukce nemají operandy
- **konstanta** - v instrukci je přímo hodnota
- **přímá adresace** - (v instrukci je adresa nebo číslo registru, kde se nachází hodnota)
- **nepřímá adresace** - (v instrukci je adresa nebo číslo registru, kde je adresa, na které je hodnota)
- **relativní adresace** - (v instrukci je offset, příp. i číslo registru, kde je adresa, z nich se pak dopočítá adresa, na které je hodnota)
- **indexová adresace** - (v instrukci jsou čísla dvou registrů, kde je báze a index, jejich sečtením se dopočítá adresa, na které je hodnota)
<!--ID: 1715508837283-->
END

---

#### základní třídy ISA


START
BI-SZZ

Jaké jsou základní třídy **ISA** (v hardwaru)?

Back:

- **střadačová (akumulátorová) ISA**
- **zásobníková ISA**
- **GPR (registrová) ISA**
<!--ID: 1715508837286-->
END

---


START
BI-SZZ

Co je **střadačová (akumulátorová) ISA**?

Back:

**implicitním operandem je registr, který funguje jako střadač**

např. ADD A - hodnota z adresy A se přičte do střadače

- ve starších kalkulačkách a prvích mikroprocesorech
- výhodou je jednoduchost a krátkost instrukcí, nevýhodou častá komunikace s pamětí
- populární v 50.-70. letech, kdy byly paměti rychlejší než procesory
<!--ID: 1715508837289-->
END

---


START
BI-SZZ

Co je **zásobníková ISA**?

Back:

**registry jsou uspořádané do hardwarového zásobníku**

např. `ADD` - hodnota z vrcholu zásobníku se přičte do druhého registru pod vrcholem

- vhodné pro vyhodnocování výrazů a vnořené podporgramy
- výhodou je jednoduchost a krátkost instrukcí, nevýhodou složitý náhodný přístup
- populární před 1980
<!--ID: 1715508837293-->
END

---


START
BI-SZZ

Co je **GPR (registrová) ISA**?

Back:

**“ISA orientovaná na registry pro všeobecné použití”** (general purpose registers, GPR)

použití vícero registrů podle potřeby

např. `ADD A B` - hodnota z adresy B se přičte na adresu A

- od 80. let dodnes nejrozšířenější
- výhodou je rychlost registrů (rychlejší než cache), náhodný přístup, méně komunikace s pamětí
- nevýhodou je omezený počet registrů, složitější překladač, delší přepínání kontextu
<!--ID: 1715508837295-->
END

---

### paměťový subsystém počítače


START
BI-SZZ

Co je **paměť** v počítači?

Back:

**paměť** = zařízení pro uchování dat (i instrukcí), jejich čtení a typicky i zápis _(Read Write Memory, RWM)_, ale existují i _Read Only Memory (ROM) nebo jednorázově Programmable ROM (PROM)_
<!--ID: 1715508837299-->
END

---


START
BI-SZZ

Jaké jsou typy paměti podle **způsobu výběru dat**?

Back:

- **adresově** _(Random Access Memory, RAM)_
- **asociativně** _(Content Addressable Memory, CAM)_
- sériově, zásobníkově, frontově, …
<!--ID: 1715508837302-->
END

---


START
BI-SZZ

Jaké jsou dva typy **RAM**?

Back:

- **statická** (SRAM) - používá klopné obvody, dražší (např. 6 tranzistorů na 1 bit)
- **dynamická** (DRAM) - používá kondenzátory, levnější (1 tranzistor na 1 bit), data se musí periodicky obnovovat, čtení je destruktivní, větší spotřeba
<!--ID: 1715508837305-->
END

---


START
BI-SZZ

Jaké jsou typy paměti podle **použití v počítači**?

Back:

vnější, hlavní (hlavní paměť, operační, RAM), cache, …
<!--ID: 1715508837308-->
END

---


START
BI-SZZ

Jaké jsou typy paměti podle **podle fyzikálního principu**?

Back:

polovodičové, magnetické, optické, …
<!--ID: 1715508837311-->
END

---


START
BI-SZZ

Jaké jsou typy paměti podle **závislosti na energii**?


Back:

volatilní (RAM), nonvolatilní (ROM, flash)
<!--ID: 1715508837314-->
END

---


START
BI-SZZ

Co technologicky obecně roste rychleji, výkon procesoru nebo výkon pamětí?

Back:

Výkon procesorů se zlepšuje více než výkon pamětí. Proto se používá paměťová hierarchie, cachování, stránkování atd.
<!--ID: 1715508837317-->
END

---


START
BI-SZZ

Jaké jsou 3 možnosti organizace paměťového subsystému?

Back:

- **jednoduchá organizace**
- **paměť s širokým datovým slovem**
- **prokládaná hlavní paměť**
<!--ID: 1715508837320-->
END

---


START
BI-SZZ

Jak funguje **jednoduchá organizace** v paměťovém subsystému?

Back:

sběrnice hlavní paměť-cache stejně široká jako sběrnice cache-CPU (jednoduchá implementace, ale velká latence)

![](../../Assets/Pasted%20image%2020240512115720.png)
<!--ID: 1715508837323-->
END

---


START
BI-SZZ

Jak funguje **paměť s širokým datovým slovem** v paměťovém subsystému?

Back:

sběrnice hlavní paměť-cache je $n$-násobně široká oproti sběrnici cache-CPU (nižší latence při sekvenčním čtení, ale potřeba dodatečného HW)

![](../../Assets/Pasted%20image%2020240512115801.png)
<!--ID: 1715508837326-->
END

---


START
BI-SZZ

Jak funguje **prokládaná hlavní paměť** v paměťovém subsystému?

Back:

hlavní paměť rozdělena na moduly, požadavky jsou na ně zasílány samostatně (nižší latence, stejně široké sběrnice, ale komplexnější řadič paměti)

![](../../Assets/Pasted%20image%2020240512115846.png)
<!--ID: 1715508837329-->
END

---

#### paměťová hierarchie


START
BI-SZZ

Jak se od sebe obecně liší jednotlivé paměti v paměťové hierarchii?

(aka jaký je rozdíl mezi pamětí co je blíž procesoru oproti těm, co jsou dál)

Back:

**čím blíž procesoru, tím rychlejší, ale menší a dražší**
<!--ID: 1715508837332-->
END

---


START
BI-SZZ

Jaké jsou **části paměťové hierarchie** a k čemu slouží? (5)

Back:

1. **registry** - přímo v procesoru (kapacita řádově v bytech, latence v ns)
2. **primární cache** - na čipu, rozdělená na datovou a instrukční (~kB, ~ns)
3. **sekundární cache** - na čipu nebo v jeho pouzdře, SRAM (~MB, ~10 ns)
4. **hlavní paměť** (operační paměť, RAM) - DRAM (~GB, ~10 ns)
5. **záložní paměť** (odkládací paměť) - magnetické pevné disky (HDD), SSD disky s flash pamětí apod., pro souborové systémy, swap space atd. (~TB, ~μs-s)
<!--ID: 1715508837335-->
END

---


#### cache


START
BI-SZZ

Co je **cache** v hardwaru? Na jakých 2 principech je založena?

Back:

- bližší, rychlejší a menší paměti **pro nedávno použitá data** a data sousedící s aktuálními
- založeno na (správném) předpokladu, že **program bude pravděpodobně potřebovat data, se kterými pracoval nedávno** (= časová lokalita), a data, která jsou v paměti poblíž těch aktuálních (= prostorová lokalita)
- většinou je **více úrovní cachí** (L1, L2…)
<!--ID: 1715508837338-->
END

---


START
BI-SZZ

Jaký **typ přístupu** se používá u **cache**?

Back:

**asociativní přístup** (CAM - vyhledávání podle obsahu, ne adresy) nebo aspoň **částečně asociativní** (tzn. že položka se může nacházet jen na několika málo místech v paměti)
<!--ID: 1715508837341-->
END

---


START
BI-SZZ

Proč se **cache** říká "skrytá paměť"?

Back:

Protože uživatel nepozná, že tam nějaká cache je a že s ní procesor pracuje. 
<!--ID: 1715508837344-->
END

---

##### čtení


START
BI-SZZ

Co je **cache hit**?

Back:

To, že čtená data byla v cache nalezena.
<!--ID: 1715508837346-->
END

---


START
BI-SZZ

Co je **hit rate** u cache?

Back:

_**hit rate**_ = počet _cache hits_ / počet přístupů celkem
<!--ID: 1715508837350-->
END

---


START
BI-SZZ

Co je **hit time** u cache?

Back:

doba přístupu do cache
<!--ID: 1715508837353-->
END

---


START
BI-SZZ

Co je **cache miss**?

Back:

Čtená data v cachi nejsou a je potřeba je dodat z paměti vyšší úrovně
<!--ID: 1715508837355-->
END

---


START
BI-SZZ

Co je **miss rate** u cache?

Back:

_**miss rate**_ = 1 - _hit rate_
<!--ID: 1715508837359-->
END

---


START
BI-SZZ

Co je **miss penalty** u cache?

Back:

_**miss penalty**_ = doba získání dat z vyšší paměti = doba výměny bloku v cachi + doba doručení dat do CPU
<!--ID: 1715508837362-->
END

---

##### zápis


START
BI-SZZ

Kam se po vykonání operace **zapíšou data**, pokud daná položka dat **není v cachi**?

Back:

pokud zapisovaná data nejsou v cachi, zapíší se rovnou do hlavní paměti
<!--ID: 1715508837365-->
END

---


START
BI-SZZ

Kam se po vykonání operace **zapíšou data**, pokud daná položka dat **je v cachi**? (2 možnosti)

Back:

- **průběžný zápis** _(write through)_ = zápis do cache i hlavní paměti
- **odložený zápis** _(write back)_ = zápis jen do cache, k propsání do hlavní paměti dojde až v okamžiku uvolnění dotčeného bloku z cache
<!--ID: 1715508837369-->
END

---


