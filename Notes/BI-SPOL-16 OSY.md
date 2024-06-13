---
created: 2024-06-04T21:34:12
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-16 OSY

> BI-SPOL-16 (OSY)
> Procesy a vlákna, jejich implementace. Synchronizační nástroje. Klasické synchronizační úlohy. Plánování vláken. Přidělování prostředků, Coffmanovy podmínky, způsoby řešení uváznutí.


### todo
- přidat podrobnější karičky ohledně implementace mutexu, semaforů, podmínek atd. (konkrétní keywords)


START
BI-SZZ

Co je to **program** (aplikace)?

Back:

Spustitelný binární kód v sekundární paměti.
<!--ID: 1717743656795-->
END

---

START
BI-SZZ

Co je to **proces** a co obsahuje?

Back:

**proces** = instance spuštěného programu

- při vzniku procesu je část informací zděděna od rodičovského procesu
- v rámci procesu jsou alokované prostředky (paměť, vlákna, soubory, zámky, …)
<!--ID: 1717743656799-->
END

---

START
BI-SZZ

Jak se **tvoří procesy** na různých OS?

Back:

- vytvoření procesu na **Unixu**:
    - `fork(2)` - kopie, rodič i potomek pokračují další instrukcí
    - `execve(2)` spuštění nového programu od začátku
- vytvoření procesu na **Windows**: `CreateProcessA()`
<!--ID: 1717743656802-->
END

---

START
BI-SZZ

Jak probíhá **ukončení procesu**? (Kdo ho ukončuje + co se při ukončení udělá)

Back:

- může se ukončit sám (`return`, `exit`, …) nebo je ukončen jádrem (chyba, signál)
- pokusí se předat návratový kód rodiči, ukončí svá vlákna a uvolní svůj adresový prostor a datové struktury
<!--ID: 1717743656805-->
END

---

START
BI-SZZ

Co je to v procesu **vlákno** a co pro ně platí? Jak lze vlákno vytvořit?

Back:

**vlákno** = výpočetní entita, které je přidělováno jádro CPU (proud instrukcí)

Pro vlákna platí:
- každý proces má implicitně jedno “main” vlákno
- vytvoření vlákna: `pthread_create()` (POSIX) nebo přímo v programovacím jazyce
- vlákna vytvořená v rámci procesu sdílí většinu prostředků tohoto procesu
- každé vlákno je v nějakém stavu
<!--ID: 1717743656807-->
END

---

START
BI-SZZ

Jaké existují **stavy vláken** a co znamenají?

Back:

- **Idle** – vznik nového vlákna
- **Ready** – čekání na přidělení jádra CPU
- **Running** –  zpracovávání jádrem CPU
- **Blocked** –  čekání na událost (příchod signálu, ukončení IO operace...)
- **Zombie** – ukončování vlákna, ale ještě nebylo vše doknčeno
- **Free** – kompletní zrušení vlákna (teoretický stav)

![](../Assets/Pasted%20image%2020240605191519.png)
<!--ID: 1717743656810-->
END

---

START
BI-SZZ

Co je to **multitasking** a **multithreading** a **multiprocessing**?

Back:

- **multitasking** = schopnost CPU managovat víc **procesů** najednou (např. že jim přiděluje čas atd.)
- **multithreading** = to, že má jeden proces více vláken 
- **multiprocessing** = schopnost CPU managovat víc **procesů** na **více CPU jádrech** 
<!--ID: 1717743656813-->
END

---

START
BI-SZZ

V jakých **strukturách** se udžují informace o procesech a vláknech? (3)

Back:

- **Tabulka procesů**
	- Pro každý proces přítomna struktura **process control block**
- **Process control block**
- **Thread control block**
<!--ID: 1717743656816-->
END

---


START
BI-SZZ

Z čeho se skládá **Process control block**? (5)

Back:

- **PID** = číslo procesu
- **PPID** = číslo rodičovského procesu
- **SID** = číslo session
- privilegia a vlastník procesu, jeho příslušnost ke skupinám, …
- informace o alokovaných prostředcích (přidělená fyzická paměť, překlad z logických adres na fyzické, deskriptory otevřených souborů, synchronizační nástroje, …)
<!--ID: 1717767801252-->
END

---


START
BI-SZZ

Co obsahuje **thread control block**?

Back:

- **TID** = číslo vlákna
- informace pro přepínání kontextu (hodnoty některých registrů CPU, ukazatel na zásobník, …)
- informace pro plánování vláken (typ plánovacího algoritmu, priorita, stav, události, na které se čeká, využitý čas, …)
<!--ID: 1717767801255-->
END

---


START
BI-SZZ

Jaké existují **implementace vláken**?

Back:

-  **user-level vlákna** – run-time správa, kooperativní plánování, spíše historické
-  **kernel-level vlákna** – správa v jádru OS, modernější
-  **hybridně** – $m$ user-level vláken je namapováno na $n$ kernel-level vláken

Poznámka: *počet procesů a vláken bývá omezen (pro celý systém i pro každého uživatele)*
<!--ID: 1717743656818-->
END

---

START
BI-SZZ

Co je to časově závislá chyba?

Back:

**Časově závislá chyba** _(race condition)_ = situace, kde více vláken používá sdílené prostředky, takže výsledek deterministického algoritmu závisí na rychlosti vláken
- synchronizace = řešení problému časově závislých chyb

Poznámka: *Správný paralelní program by neměl předpokládat nic o rychlosti vláken, měl by zajistit vzájemné vyloučení, ale přitom nebrzdit vlákna mimo kritické sekce*
<!--ID: 1717743656821-->
END

---

START
BI-SZZ

Co je to kritická sekce?

Back:

**Kritická sekce** = část programu, kde vlákna používají sdílené prostředky
- sdružené kritické sekce = týkají se stejného prostředku (tj. proměnné, souboru apod.)
<!--ID: 1717743656824-->
END

---

START
BI-SZZ

Co znamená princip **vzájemného vyloučení**?

Back:

Vláknům je zakázáno sdílet prostředek ve stejném čase.
<!--ID: 1717743656827-->
END

---

START
BI-SZZ

Jaké problémy mohou nastat při **synchronizaci vláken**? (3)

Back:

- **uváznutí** _(deadlock)_ = více vláken čeká na jedno z čekajících vláken
- _**livelock**_ = více vláken neužitečně běží a nemohou výpočet dokončit (např. zacyklení)
- **hladovění** _(starvation)_ = ready vlákno je stále předbíháno jinými vlákny
<!--ID: 1717743656829-->
END

---

START
BI-SZZ

Jaké jsou typy **synchronizačních nástrojů**? (Stačí asi jen vědět pár)

Back:

- hardwarové: na x86-64 např. instrukce `xchg`, `cmpxchg`
- v jádru linuxového OS: _atomic operation_, _spin locks_, _reader-writer locks_, …
- v jádru OS Windows: _executive dispatcher objects_, _slim reader-writer blocks_, …
- v aplikaci: _mutexes_, _semaphores_, _condition variables_, _pipes_, _signals_, …
- v programovacích jazycích: C++11, Java, …
<!--ID: 1717743656832-->
END

---

START
BI-SZZ

Jaké jsou **způsoby** pro **synchronizaci kritecké sekce**? (2)

Back:

- aktivní čekání
- blokující volání
<!--ID: 1717743656835-->
END

---

START
BI-SZZ

Co je to **aktivní čekání**?

Back:

**aktivní čekání** _(busy waiting)_ - čekání např. ve smyčce před zamčenou kritickou sekcí
- minimální režie, ale zbytečné zatěžování jádra čekáním
- kontrolu zámku + zamčení je potřeba udělat atomicky (= v jedné instrukci)
- při plánování s fixní prioritou může vést k uváznutí (vlákno s nízkou prioritou je v kritické sekci a vlákno s vyšší prioritou před ní aktivně čeká)
<!--ID: 1717743656838-->
END

---

START
BI-SZZ

Co je to instrukce TSL?

Back:

- TSL = test-and-set-lock
- Hypotetická instrukce sloužící ke korektní implementaci aktivního čekání na HW úrovni
- **Dva kroky**
	- Načtení obsahu slova z dané adresy v paměti do registru
	- Nastavení obsahu slova v paměti na nenulovou hodnotu (zamknutí kritické sekce)
- **Instrukce je atomická!**
- Korektní HW řešení ve více-jádrových systémech se sdílenou pamětí

![](../Assets/Pasted%20image%2020240605193947.png)
<!--ID: 1717743656841-->
END

---

START
BI-SZZ

Co je to **blokující volán**í?

Back:

**blokující volání** - vlákno se před zamčenou kritickou sekcí samo zablokuje a přestane mu být přidělován čas, systém si udržuje seznam čekajících vláken a po odemčení kritické sekce jedno odblokuje
- čekání bez režie, ale začátek a ukončení jsou trochu náročnější
<!--ID: 1717743656844-->
END

---

START
BI-SZZ

Jaké jsou **typy mechanismů** pro zajištění blokujícího volání? (4)

Back:

- **mutex** _(mutual exclusion lock)_
- **podmíněná proměnná**
- **semafor**
- **bariéra**
<!--ID: 1717743656846-->
END

---


START
BI-SZZ

Jak funguje **mutex**?

Back:

zámek s informací, jestli je zamčený + která vlákna jsou jím blokovaná (POSIXově typ `pthread_mutex_t` s funkcemi `pthread_mutex_lock()` a `pthread_mutex_unlock()`, v C++ třída `std::mutex`)

_Např._
![](../Assets/Pasted%20image%2020240609133102.png)
![](../Assets/Pasted%20image%2020240609133053.png)
<!--ID: 1717767801258-->
END

---


START
BI-SZZ

Jak funguje **podmíněná proměnná**?

Back:

informace, která vlákna jsou jí blokována (POSIXově typ `pthread_cond_t` s funkcemi `pthread_cond_wait()` a `pthread_cond_signal()`, v C++ třída `std::condition_variable`)

_Např._
![](../Assets/Pasted%20image%2020240609133146.png)
![](../Assets/Pasted%20image%2020240609133123.png)
<!--ID: 1717767801261-->
END

---


START
BI-SZZ

Jak funguje **semafor**?

Back:

celočíselný čítač + informace, která vlákna jsou jím blokována (POSIXově typ `sem_t` s funkcemi `sem_init()`, `sem_wait()`, `sem_post()`, v C++ nejsou)

_Např._
![](../Assets/Pasted%20image%2020240609133215.png)
![](../Assets/Pasted%20image%2020240607170318.png)
<!--ID: 1717767801264-->
END

---


START
BI-SZZ

Jak funguje **bariéra**?

Back:

čítač síly bariéry (kolik vláken je potřeba k prolomení bariéry) + fronta vláken, která jsou jí blokována (POSIXově typ `barrier_t` s funkcemi `pthread_barrier_init()`, `pthread_barrier_wait()` apod., v C++ třída `std::experimental::barrier`)

Např.
![](../Assets/Pasted%20image%2020240609133228.png)
![](../Assets/Pasted%20image%2020240609133248.png)
![](../Assets/Pasted%20image%2020240609133236.png)
<!--ID: 1717767801267-->
END

---


START
BI-SZZ

Jaké jsou **klasické synchronizační úlohy**? (4)

Back:

- producent-konzument
- večeřící filozofové
- čtenáři-písaři
- spící holiči
<!--ID: 1717743656849-->
END

---

START
BI-SZZ

Na čem je založena úloha **producent-konzument**?

Back:

- některá vlákna (producenti) vkládají data do omezené sdílené fronty a jiná vlákna (konzumenti) je z fronty vybírají
- pokud je fronta prázdná, musíme blokovat konzumenta
- pokud je fronta plná, musíme blokovat producenta

![](../Assets/Pasted%20image%2020240605194137.png)

Jedna z možných implementací:
![](../Assets/Pasted%20image%2020240605194226.png)
![](../Assets/Pasted%20image%2020240607165953.png)
<!--ID: 1717743656852-->
END

---

START
BI-SZZ

Na čem je založena úloha **večeřící filozofové**?

Back:

- $n$ filozofů kolem kulatého stolu, každý buď přemýšlí, má hlad nebo jí, před každým filozofem je talíř s jídlem, mezi talíři vždy vidlička, aby filozof mohl jíst, potřebuje obě nejbližší vidličky
- pokus se vzít obě vidličky → může skončit uváznutím, tj. nesprávné řešení
- pokus se vzít levou vidličku, pokud nemůžeš vzít i pravou, tak tu levou vrať → může skončit livelockem, tj. nesprávné
- celý stůl zamykej mutexem → bez chyb a uváznutí (tj. správné), ale neoptimální (jí jen jeden filozof)
- jeden mutex a $n$ semaforů nebo podmíněných proměnných → správné a optimální

![](../Assets/Pasted%20image%2020240605194352.png)

![](../Assets/Pasted%20image%2020240605194115.png)
<!--ID: 1717743656855-->
END

---

START
BI-SZZ

Na čem je založena úloha **čtenáři-písaři**?

Back:

- jeden sdílený prostředek, $m$ čtenářů z něj může číst najednou (pokud do něj zrovna nikdo nepíše), z $n$ písařů do něj může psát vždy jen jeden
- spravedlivé řešení navíc vyžaduje, aby se čtenáři ani písaři nemohli předbíhat
- jeden mutex na celý prostředek → správné, ale neoptimální
- mutex chránící čítač čtoucích, čítač píšících, čítač čekajících čtenářů, čítač čekajících písařů a zřetězený seznam podmíněných proměnných, na nichž jsou blokováni čekající → správné a optimální

![](../Assets/Pasted%20image%2020240605194534.png)

Pro představu:
![](../Assets/Pasted%20image%2020240605194603.png)
![](../Assets/Pasted%20image%2020240605194611.png)
<!--ID: 1717743656858-->
END

---

START
BI-SZZ

Na čem je založena úloha **spící holiči**?

Back:

- $n$ holičů, $n$ křesel k holení, $m$ křesel k čekání, holiči spí ve svých křeslech k holení, dokud nepřijde zákazník, ten se pokusí probudit holiče (pokud je volný), případně si sedne do čekárny (pokud je místo), jinak odejde
- jeden mutex a dva semafory → optimální, ale ne spravedlivé (zákazníci se mohou předbíhat a dokonce hladovět, řešením by byla fronta čekajících zákazníků)

![](../Assets/Pasted%20image%2020240605194702.png)

![](../Assets/Pasted%20image%2020240605194722.png)
<!--ID: 1717743656861-->
END

---

START
BI-SZZ

Co je to **plánování vláken**?

Back:

vlákna žijí v iluzi, že běží bez přerušení, ale ve skutečnosti se musí střídat na omezeném počtu jader CPU
<!--ID: 1717743656864-->
END

---

START
BI-SZZ

Jaké jsou **typy vláken** dle **priorit při plánování**? (3)

Back:

- **vlákna orientovaná na CPU** – potřebují CPU na dlouho, blokací je málo
- **vlákna orientovaná na vstupy a výstupy** – CPU používají krátce, blokací je hodně
- **vlákna reálného času** – prioritou je stihnout reakci na událost do deadlinu
<!--ID: 1717743656867-->
END

---

START
BI-SZZ

Co je to přepínání kontextu?

Back:

mechanismus střídání vláken na jádrech, aby se udržel kontext (= informace nezbytné pro znovuspuštění přerušeného vlákna)
<!--ID: 1717743656870-->
END

---

START
BI-SZZ

Jaké jsou typy **plánování** v CPU?

Back:

- **plánování s odnímáním** (preemptive scheduling)
- **kooperativní plánování** (cooperative scheduling)
<!--ID: 1717743656872-->
END

---

START
BI-SZZ

Co je to **plánování s odnímáním**?

Back:

- OS přiděluje vláknům jádra CPU jen na určitou omezenou dobu (tzv. časové kvantum)
- rychlejší odezva (vhodné pro interaktivní systémy), ale častější přepínání kontextu
- Využívá se **round-robin** přístup
<!--ID: 1717743656875-->
END

---

START
BI-SZZ

Co je to **round robin** přístup?

Back:

**round-robin (RR)** = ready vlákna čekají ve frontě, každé dostané stejné časové kvantum
<!--ID: 1717743656878-->
END

---


START
BI-SZZ

Na co se dělí **round-robin**? (2)

Back:

- **RR se statickou prioritou** = ready vlákna čekají v několika frontách
    - přednost má vždy vlákno z nejpriroitnější fronty
    - každá priorita může mít jinak dlouhé časové kvantum
    - vlákna s nízkou prioritou mohou dlouho hladovět
- **RR s dynamickou prioritou** = priorita vlákna i časové kvantum se může průběžně měnit
    - pokud vlákno využilo celé své kvantum, jeho priorita se sníží a kvantum prodlouží
    - pokud vlákno nevyužilo své kvantum, jeho priorita se zvýší a kvantum zkrátí
    - výchozí strategie v dnešních OS
<!--ID: 1717767801270-->
END

---


START
BI-SZZ

Co je to **kooperativní plánování**?

Back:

- OS přiděluje vláknům jádra CPU na neomezenou dobu, vlákno jádro využívá, dokud nedokončí výpočet nebo samo neprovede blokující volání
- lepší využití CPU, pomalejší odezva, vhodné jen pro “prověřená” kernel vlákna
- **first-come-first-served** (FCFC) = ready vlákna čekají v jedné nebo více frontách
<!--ID: 1717743656881-->
END

---

START
BI-SZZ

Jak se dělí prostředky? (BI-OSY)

Back:

**Dělení dle typu**:
- Fyzické (paměť, tiskárna..)
- Logické (proměnná, soubor, mutex...)

**Dělení dle odnímatelnosti:**
- Odnímatelné – lze je vláknu odebrat bez dalších problémů, např. odložení z fyzické paměti na disk
- Neodnímatelná – např. tiskárna
<!--ID: 1717743656883-->
END

---

START
BI-SZZ

Co je to **alokační graf**?

Back:

- orientovaný graf, kde prostředky a vlákna jsou vrcholy
- Hrany typu
	- prostředek → vlákno, které jej alokuje
	- vlákno → prostředek, na který vlákno čeká
- smyčka znamená uváznutí

_Např._
![](../Assets/Pasted%20image%2020240607182344.png)
<!--ID: 1717743656886-->
END

---

START
BI-SZZ

Co jsou to **Coffmanovy podmínky**? Vyjmenuj je (4)

Back:

Podmínky, určující, kdy nastane uváznutí. Uváznutí, když jsou **všechny podmínky** splněny najednou.

**Podmínky**
1. **vzájemné vyloučení** – každý prostředek je buď přidělen právě jednomu vláknu a nebo je volný (prostředek nemůže být sdílen více vlákny)
2. **neodnímatelnost** – prostředek, který byl již přidělen nejakému vláknu, nemůže mu být násilím odebrán (musí být dobrovolně uvolněn daným vláknem)
3. **“drž a čekej”** – vlákno, které má již přiděleny nějaké prostředky, může žádat o další prostředky (vlákno může žádat o prostředky postupně)
4. **kruhové čekání** – musí existovat smyčka více vláken (každé vlákno čeká na prostředek přidělený dalšímu vláknu ve smyčce)

Pozn. První tři podmínky jsou nutné, ale ne dostačující k uváznutí.
<!--ID: 1717743656889-->
END

---

START
BI-SZZ

Jaké jsou **způsoby řešení uváznutí**? (4)

Back:

- pštrosí strategie
- prevence uváznutí
- předcházení vzniku uváznutí
- detekce uváznutí a zotavení 
<!--ID: 1717743656891-->
END

---

START
BI-SZZ

Co je to **pštrosí strategie**?

Back:

ignorování problému a čekání na zásah administrátora
<!--ID: 1717743656894-->
END

---

START
BI-SZZ

Co je to **prevence uváznutí**? Jaké obsahuje podmínky? (4)

Back:

Založena na porušení nějaké Coffmanovy podmínky
1. **Porušení podmínky "vzájemného vyloučení"**
	-  Při používání prostředku více vlákny pro čtení a zápis tuto podmínku nelze bez rizika vzniku časově závislých chyb porušit.
2. **Pořušení podmínky "neodnímatelnosti prostředků"**
	- Přístup vhodný pokud je možné uložit si stav prostředku k pozdějšímu zpětnému obnovení
	- Př.: sdílení CPU jader více vlákny (přepínání kontextu)
 3. **Porušení podmínky "drž a čekej"**
	 - Pokud má vlákno informaci všech prostředcích, které bude během existence potřebovat
	 - Provedení jednorázové alokace všech prostředků, pokud není možné, tak bude čekat
	 - Horší využití prostředků
4. **Porušení podmínky "kruhového čekání"**
	- Založeno na vhodném číslování prostředků a jejich přidělování ve vzestupném pořadí
	- Každý prostředek je unikátně očíslován
	- Vlákno žádá o libovolné prostředky, ale pouze v rostoucím prostředí
	- Nevznikne tak v alokačním grafu smyčka, ale toto pořadí nemusí vždy existovat
<!--ID: 1717743656897-->
END

---

START
BI-SZZ

Co je to **předcházení vzniku uváznutí**?

Back:

- pečlivá alokace, pokud předem známe požadavky vláken
- lze popsat maticemi (vektor existujících prostředků E, vektor volných prostředků F, matice požadavků Q, matice přidělených prostředků A, matice chybějících prostředků M)
- Lze využít bankéřův algoritmus
<!--ID: 1717743656900-->
END

---

START
BI-SZZ

Jak funguje **bankéřův algoritmus** a k čemu slouží?

Back:

Když vlákno požádá o prostředek, bude přidělen, jen když tím systém zůstane v bezpečném stavu (= existuje posloupnost alokací, která garantuje postupné uspokojení všech vláken), jinak bude vlákno zablokováno

**Jak to funguje**:
1. Odečteme $Q - A = M$, čímž získáme matici toho, jaké prostředky ještě vlánka potřebují
2. Zjistíme, jestil můžeme nějaké vlákno v $M$ uspokojit pomocí $F$. Když můžeme nějaké uspokojit, uspokojíme ho, počkáme až doběhne a pak nám to vlákno vrátí ty prostředky do $F$. To vlákno pak je vynulované, protože už žádné prostředky nepotřebuje.
3. Tahle se postupuje furt dokola.
	1. Pokud jsem schopný se dostat na nulovou matici $M$, je systém bude po přidělování prostředků v **bezpečném stavu**
	2. Pokud ne, systém by zahlásil, že ten prostředek nelze přidělit

**Vysvětlení**:
- **Request matrix** - matice toho, co vlákna potřebují za prostředky
- **Allocation matrix** - matice toho, co vlákna už mají za přidělené prostředky

_Příklad:_
![](../Assets/Pasted%20image%2020240605201453.png)
![](../Assets/Pasted%20image%2020240605201501.png)
<!--ID: 1717743656902-->
END

---
START
BI-SZZ

Co je to **detekce uváznutí a zotavení**?

Back:

- využíváme pokud požadavky předem neznáme
- nástroje OS pro detekci uváznutí: `ps`, `gstack`, debuggery, Valgrind apod.
- zotavení např. (postupným) ukončením uvázlých vláken nebo restartem uvázlých vláken (to vyžaduje nějaký mechanismus pravidelných “záloh” a rollbacků)
<!--ID: 1717743656905-->
END

---