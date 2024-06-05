---
created: 2024-06-04T21:34:12
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: SPOL-16 OSY

> BI-SPOL-16 (OSY)
> Procesy a vlákna, jejich implementace. Synchronizační nástroje. Klasické synchronizační úlohy. Plánování vláken. Přidělování prostředků, Coffmanovy podmínky, způsoby řešení uváznutí.


START
BI-SZZ

Co je to **program** (aplikace)?

Back:

Spustitelný binární kód v sekundární paměti.

END

---

START
BI-SZZ

Co je to **proces** a co obsahuje?

Back:

**proces** = instance spuštěného programu

- při vzniku procesu je část informací zděděna od rodičovského procesu
- v rámci procesu jsou alokované prostředky (paměť, vlákna, soubory, zámky, …)

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

END

---

START
BI-SZZ

Jak probíhá **ukončení procesu**?

Back:

- může se ukončit sám (`return`, `exit`, …) nebo je ukončen jádrem (chyba, signál)
- pokusí se předat návratový kód rodiči, ukončí svá vlákna a uvolní svůj adresový prostor a datové struktury

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

END

---

START
BI-SZZ

Jaké existují **stavy vláken** a co znamenají?

Back:

- **Idle** – vznik nového vlákna
- **Ready** –vlákno čeká na přidělení jádra CPU
- **Running** – Vlákno je zpracováváno jádrem CPU
- **Blocked** – vlákno čeká na událost (příchod signálu, ukončení IO operace...)
- **Zombie** – vlákno je ukončováno, ale ještě nebylo vše doknčeno
- **Free** – vlákno bylo kompletně zrušeno (teoretický stav)

![](../Assets/Pasted%20image%2020240605191519.png)

END

---

START
BI-SZZ

Co je to **multitasking** a **multithreading**?

Back:

- **multitasking** = více procesů, v každém jedno vlákno
- **multithreading** = více vláken v procesu

END

---

START
BI-SZZ

V jakých **strukturách** se udžují informace o procesech a vláknech? Co tyto struktury obsahují?

Back:

- **Tabulka procesů**
	- Pro každý proces přítomna struktura **process control block**
- **Process control block (PCB)**
	- **PID** = číslo procesu
	- **PPID** = číslo rodičovského procesu
	- **SID** = číslo session
	- privilegia a vlastník procesu, jeho příslušnost ke skupinám, …
	- informace o alokovaných prostředcích (přidělená fyzická paměť, překlad z logických adres na fyzické, deskriptory otevřených souborů, synchronizační nástroje, …)
- **Thread control block**
	- **TID** = číslo vlákna
	- informace pro přepínání kontextu (hodnoty některých registrů CPU, ukazatel na zásobník, …)
	- informace pro plánování vláken (typ plánovacího algoritmu, priorita, stav, události, na které se čeká, využitý čas, …)

END

---

START
BI-SZZ

Jaké existují **implementace vláken**?

Back:

-  **user-level vlákna** - run-time správa, kooperativní plánování, spíše historické
-  **kernel-level vlákna** - správa v jádru OS, modernější
-  **hybridně** - $m$ user-level vláken je namapováno na $n$ kernel-level vláken

Poznámka: *počet procesů a vláken bývá omezen (pro celý systém i pro každého uživatele)*

END

---

START
BI-SZZ

Co je to časově závislá chyba?

Back:

**Časově závislá chyba** _(race condition)_ = situace, kde více vláken používá sdílené prostředky, takže výsledek deterministického algoritmu závisí na rychlosti vláken
- synchronizace = řešení problému časově závislých chyb

Poznámka: *Správný paralelní program by neměl předpokládat nic o rychlosti vláken, měl by zajistit vzájemné vyloučení, ale přitom nebrzdit vlákna mimo kritické sekce*

END

---

START
BI-SZZ

Co je to kritická sekce?

Back:

**Kritická sekce** = část programu, kde vlákna používají sdílené prostředky
- sdružené kritické sekce = týkají se stejného prostředku (tj. proměnné, souboru apod.)

END

---

START
BI-SZZ

Co znamená princip **vzájemného vyloučení**?

Back:

Vláknům je zakázáno sdílet prostředek ve stejném čase.

END

---

START
BI-SZZ

Jaké problémy mohou nastat při **synchronizaci vláken**?

Back:

- **uváznutí** _(deadlock)_ = více vláken čeká na jedno z čekajících vláken
- _**livelock**_ = více vláken neužitečně běží a nemohou výpočet dokončit (např. zacyklení)
- **hladovění** _(starvation)_ = ready vlákno je stále předbíháno jinými vlákny

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

END

---

START
BI-SZZ

Jaké jsou **způsoby** pro **synchronizaci kritecké sekce**? (2)

Back:

- aktivní čekání
- blokující volání

END

---

START
BI-SZZ

Co je to **aktivní čekání**?

Back:

- **aktivní čekání** _(busy waiting)_ - čekání např. ve smyčce před zamčenou kritickou sekcí
    - minimální režie, ale zbytečné zatěžování jádra čekáním
    - kontrolu zámku + zamčení je potřeba udělat atomicky (= v jedné instrukci)
    - při plánování s fixní prioritou může vést k uváznutí (vlákno s nízkou prioritou je v kritické sekci a vlákno s vyšší prioritou před ní aktivně čeká)

END

---

START
BI-SZZ

Co je to instrukce TSL?

Back:

- TSL = test-and-set-lock
- Hypotetická instrukce sloužííc ke korektní implementaci aktivního čekání na HW úrovni
- **Dva kroky**
	- Načtení obsahu slova z dané adresy v paměti do registru
	- Nastavení obsahu slova v paměti na nenulovou hodnotu (zamknutí kritické sekce)
- **Instrukce je atomická!**
- Korektní HW řešení ve více-jádrových systémech se sdílenou pamětí

![](../Assets/Pasted%20image%2020240605193947.png)

END

---

START
BI-SZZ

Co je to **blokující volán**í?

Back:

- **blokující volání** - vlákno se před zamčenou kritickou sekcí samo zablokuje a přestane mu být přidělován čas, systém si udržuje seznam čekajících vláken a po odemčení kritické sekce jedno odblokuje
    - čekání bez režie, ale začátek a ukončení jsou trochu náročnější

END

---

START
BI-SZZ

Jaké jsou **typy mechanismů** pro zajištění blokujícího volání? (4)

Back:

- **mutex** _(mutual exclusion lock)_ = zámek s informací, jestli je zamčený + která vlákna jsou jím blokovaná (POSIXově typ `pthread_mutex_t` s funkcemi `pthread_mutex_lock()` a `pthread_mutex_unlock()`, v C++ třída `std::mutex`)
- **podmíněná proměnná** = informace, která vlákna jsou jí blokována (POSIXově typ `pthread_cond_t` s funkcemi `pthread_cond_wait()` a `pthread_cond_signal()`, v C++ třída `std::condition_variable`)
- **semafor** = celočíselný čítač + informace, která vlákna jsou jím blokována (POSIXově typ `sem_t` s funkcemi `sem_init()`, `sem_wait()`, `sem_post()`, v C++ nejsou)
- **bariéra** = čítač síly bariéry (kolik vláken je potřeba k prolomení bariéry) + fronta vláken, která jsou jí blokována (POSIXově typ `barrier_t` s funkcemi `pthread_barrier_init()`, `pthread_barrier_wait()` apod., v C++ třída `std::experimental::barrier`)

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

END

---

START
BI-SZZ

Co je to **plánování vláken**?

Back:

vlákna žijí v iluzi, že běží bez přerušení, ale ve skutečnosti se musí střídat na omezeném počtu jader CPU

END

---

START
BI-SZZ

Jaké jsou **typy vláken** dle **priorit při plánování**? (3)

Back:

- **vlákna orientovaná na CPU** - potřebují CPU na dlouho, blokací je málo
- **vlákna orientovaná na vstupy a výstupy** - CPU používají krátce, blokací je hodně
- **vlákna reálného času** - prioritou je stihnout reakci na událost do deadlinu

END

---

START
BI-SZZ

Co je to přepínání kontextu?

Back:

mechanismus střídání vláken na jádrech, aby se udržel kontext (= informace nezbytné pro znovuspuštění přerušeného vlákna)

END

---

START
BI-SZZ

Jaké jsou typy **plánování**?

Back:

- plánování s odnímáním (preemptive scheduling)
- kooperativní plánování (cooperative scheduling)

END

---

START
BI-SZZ

Co je to **plánování s odnímáním**?

Back:

- OS přiděluje vláknům jádra CPU jen na určitou omezenou dobu (tzv. časové kvantum)
- rychlejší odezva (vhodné pro interaktivní systémy), ale častější přepínání kontextu
- Využívá se **round-robin** přístup
END

---

START
BI-SZZ

Co je to **round robin** přístup a jak se dělí?

Back:

 - **round-robin (RR)** = ready vlákna čekají ve frontě, každé dostané stejné časové kvantum
- **RR se statickou prioritou** = ready vlákna čekají v několika frontách
    - přednost má vždy vlákno z nejpriroitnější fronty
    - každá priorita může mít jinak dlouhé časové kvantum
    - vlákna s nízkou prioritou mohou dlouho hladovět
- **RR s dynamickou prioritou** = priorita vlákna i časové kvantum se může průběžně měnit
    - pokud vlákno využilo celé své kvantum, jeho priorita se sníží a kvantum prodlouží
    - pokud vlákno nevyužilo své kvantum, jeho priorita se zvýší a kvantum zkrátí
    - výchozí strategie v dnešních OS

END

---
START
BI-SZZ

Co je to **kooperativní plánování**?

Back:

- OS přiděluje vláknům jádra CPU na neomezenou dobu, vlákno jádro využívá, dokud nedokončí výpočet nebo samo neprovede blokující volání
- lepší využití CPU, pomalejší odezva, vhodné jen pro “prověřená” kernel vlákna
- **first-come-first-served** (FCFC) = ready vlákna čekají v jedné nebo více frontách

END

---

START
BI-SZZ

Jak se dělí prostředky?

Back:

**Dělení dle typu**:
- Fyzické (paměť, tiskárna..)
- Logické (proměnná, soubor, mutex...)

**Dělení dle odnímatelnosti:**
- Odnímatelné – lze je vláknu odebrat bez dalších problémů, např. odložení z fyzické paměti na disk
- Neodnímatelná – např. tiskárna


END

---

START
BI-SZZ

Co je to alokační graf?

Back:

- orientovaný graf, kde prostředky a vlákna jsou vrcholy
- hrany prostředek → vlákno, které jej alokuje
- hrany vlákno → prostředek, na který vlákno čeká
- smyčka znamená uváznutí

END

---

START
BI-SZZ

Co jsou to Coffmanovy podmínky?

Back:

- Podmínky určující, kdy nastane uváznutí
- První tři podmínky jsou nutné, ale ne dostačující k uváznutí

**Podmínky**
1. **vzájemné vyloučení** - žádný prostředek nemůže být sdílen více vlákny
2. **neodnímatelnost** - přidělený prostředek nemůže být násilím odebrán
3. **“drž a čekej”** - vlákno s prostředky může žádat o další prostředky
4. **kruhové čekání** - musí existovat smyčka více vláken (každé vlákno čeká na prostředek přidělený dalšímu vláknu ve smyčce)

END

---

START
BI-SZZ

Jaké jsou způsoby řešení uváznutí

Back:

- pštrosí strategie
- prevence uváznutí
- předcházení vzniku uváznutí
- detekce uváznutí a zotavení 

END

---

START
BI-SZZ

Co je to **pštrosí strategie**?

Back:

ignorování problému a čekání na zásah administrátora

END

---

START
BI-SZZ

Co je to **prevence uváznutí**?

Back:

- Založena na porušení nějaké Coffmanovy podmínky
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

END

---

START
BI-SZZ

Co je to **předcházení vzniku uváznutí**?

Back:

- pečlivá alokace, pokud předem známe požadavky vláken
- lze popsat maticemi (vektor existujících prostředků E, vektor volných prostředků F, matice požadavků Q, matice přidělených prostředků A, matice chybějících prostředků M)
- Lze využít bankéřův algoritmus

END

---

START
BI-SZZ

Co je to bankéřův algoritmus a k čemu slouží?

Back:

 - když vlákno požádá o prostředek, bude přidělen, jen když tím systém zůstane v bezpečném stavu (= existuje posloupnost alokací, která garantuje postupné uspokojení všech vláken), jinak bude vlákno zablokováno

![](../Assets/Pasted%20image%2020240605201453.png)
![](../Assets/Pasted%20image%2020240605201501.png)
END

---
START
BI-SZZ

Co je to **detekce uváznutí a zotavení**?

Back:

- využíváme pokud požadavky předem nenzáme
- nástroje OS pro detekci uváznutí: `ps`, `gstack`, debuggery, Valgrind apod.
- zotavení např. (postupným) ukončením uvázlých vláken nebo restartem uvázlých vláken (to vyžaduje nějaký mechanismus pravidelných “záloh” a rollbacků)

END

---