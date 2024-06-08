---
created: 2024-06-08T17:34:08
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-17 OSY

> BI-SPOL-17 (OSY)
> 
> Virtualizace paměti pomocí stránkování, principy překladu logických adres na fyzické, algoritmy pro nahrazování stránek.


START
BI-SZZ

Na jaké **části** se dělí paměť?

Back:

- fyzická paměť
- virtuální adresový prostor (VAS)

END

---

START
BI-SZZ

Co je to **fyzická paměť**?

Back:

skutečné hardwarová RAMka, používá fyzické adresy

END

---

START
BI-SZZ

Co je to **virtuální adresový prostor (VAS)**?

Back:

- představa procesu o úložišti, které má k dispozici
	- naivní -> VAS může být i větší než celá fyzická paměť
- používá **virtuální (aka logické) adresy**, které se musí nějak překládat na **fyzické**
- typicky obsahuje **program** (TEXT), **globální proměnné** (DATA), haldu, knihovny, zásobník

END

---

START
BI-SZZ

Jaké jsou možnosti implementace VAC? (segmentace jednoho segmentu VAC)

Back:

- **stránka** = úsek ve VAS o pevně dané velikosti (např. 4 KB)
- **rámec** = úsek ve fyzické paměti o stejné velikosti jako stránka
- používané stránky se nahávají do rámců (v RAM), nepoužívané se odkládají na disk

*Poznámka: moderní CPU podporují různě velké stránky a rámce*

END

---

START
BI-SZZ

Co je to **virtuální adresa**? 

Back:

index do tabulky stránek + offset

END

---

START
BI-SZZ

Co je to **fyzická adresa**?

Back:

číslo rámce + offset (stejný jako ve virtuální adrese)

END

---


START
BI-SZZ

Co je to **Memory Management Unit (MMU)**?

Back:

část CPU, která zajišťuje tento překlad

END

---

START
BI-SZZ

Co je to **Translation Lookaside Buffer (TLB)**?

Back:

- cache posledních překladů přímo v CPU
- záznam v TLB obsahuje valid bit, číslo stránky, číslo rámce, ASID (identifikátor adresního prostoru), kontrolní bity, …

END

---

START
BI-SZZ

Jakým **způsobem** se **překládají virtuální adresy na fyzické**?

Back:

1. MMU zkusí najít číslo stránky v TLB, pokud ho najde a je validní, máme číslo rámce (k němu už jen přidáme offset a máme fyzickou adresu)
2. pokud záznam není v TLB, MMU se podívá do (nejvyšší) tabulky stránek v jádru OS (viz níže), pokud ho najde a je validní, máme číslo rámce (a aktualizuje se TLB)
3. pokud stránka není v tabulkách nebo nalezený záznam není validní (= **výpadek stránky**), MMU vyvolá přerušení, OS najde volný rámec (pokud je paměť plná, tak se vhodný rámec uvolní odložením na disk, viz níže) a požadovanou stránku do rámce nahraje (příp. ještě musí zneplatnit záznamy ukazující na odložený rámec)

END

---

START
BI-SZZ

Jaké jsou typy tabulky stránek? (3)

Back:

- jednoúrovňová tabulka stránek
- n-úrovňová tabulka stránek
- invertovaná tabulka stránek

END

---
START
BI-SZZ

Co je to **jednoúrovňová tabulka stránek (page table)**?

Back:

- jedna tabulka pro každý proces
- **virtuální adresa** = číslo stránky (slouží jako index do tabulky) + offset
- pro každou stránku je uloženo:
	- **číslo rámce** (kde je stránka uložena)
	- **kontrolní bity** (present, reference, modify, přístupová práva, cache disabled/enabled, read/write, user/supervisor)
- **nevýhoda**: plýtvání pamětí, protože tabulka zbytečně obsahuje i nepoužité stránky

![](../Assets/Pasted%20image%2020240608174701.png)

END

---

START
BI-SZZ

Co je to **n-úrovňová tabulka stránek (multilevel page table)?**

Back:

- jedna tabulka pro každý proces
- **virtuální adresa** = $n$ indexů do $n$ tabulek + offset
- ve všech tabulkách kromě poslední je jen
	- present bit
	- číslo rámce, kde začíná tabulka následující úrovně
- V tabulce poslední úrovně je uloženo číslo rámce, kde je uložená stránka
- tabulka první úrovně je ve fyzické paměti vždy, ostatní tam být nemusí
- **výhoda proti jednoúrovňové**: v paměti jsou jen informace o používaných stránkách
- **nevýhoda**: pomalejší překlad

![](../Assets/Pasted%20image%2020240608174853.png)

END

---

START
BI-SZZ

Co je to **invertovaná tabulka stránek (inverted page table)**?

Back:

- pouze jedna tabulka pro celý systém
- číslo stránky se přepočte na index do této tabulky hashovací funkcí
- pro každý rámec je uloženo
	- číslo stránky (která je sem nahraná),
	- číslo procesu,
	- kontrolní bity,
	- index zřetězení (kvůli kolizím hashovací funkce)
- zabírá méně místa, ale překlad je pomalý

![](../Assets/Pasted%20image%2020240608175052.png)

END

---

START
BI-SZZ

K čemu se používají algoritmy pro nahrazování stránek?

Back:

- jakmile je fyzická paměť (skoro) plná, musí OS vybírat vhodné rámce k odložení na disk	
- I**deální přístup**: nahrazování stránek, ke kterým budeme přistupovat za dlouho
	- Problém je, že bychom museli umět předpovídat budoucnost

END

---

START
BI-SZZ

Jaké by měly být algoritmy k výběru rámců při nahrazování stránek? (4)

Back:

- rychlé,
- jednoduché,
- minimalizovat výpadky
- brát v potaz prostorovou a časovou lokalitu (v nejbližší době budu pravděpodobněji potřebovat stránky, které jsou ve VAS blízko za aktuálně používanými stránkami)

END

---

START
BI-SZZ

Jaké algoritmy pro náhradu stránek se používají? (6)

Back:

- NRU algoritmus
- FIFO algoritmus
- Clock algoritmus
- Two-handed clock algoritmus
- LRU algoritmus (Least Recently Used)
- Aging algoritmus

END

---

START
BI-SZZ

Jak funguje **NRU algoritmus (Not Recently Used)**?

Back:

- využívá bity R (_reference_, nastaví se na `1` při každém čtení i zápisu a pravidelně se nuluje) a M (_modified_, nastaví se na `1` při zápisu)
- vybírá k nahrazení nejprve staré neupravené stránky (R=0, M=0), pak staré upravené (R=0, M=1), pak nové neupravené (R=1, M=0), nakonec nové upravené (R=1, M=1)
- jednoduchá implementace, relativně málo výpadků

![](../Assets/Pasted%20image%2020240608181120.png)

END

---

START
BI-SZZ

Jak funguje **FIFO algoritmus (First-In First-Out)**?

Back:

- při nahrání stránky do hlavní paměti se její záznam přidá (nebo přesune) na konec fronty, k nahrazení se vybere první stránka z fronty (ta, která je v paměti nejdéle)
- jednoduchá implementace, relativně hodně výpadků (protože se nezohledňují přístupy)

![](../Assets/Pasted%20image%2020240608181130.png)

END

---
START
BI-SZZ

Jak funguje **Clock algoritmus**?

Back:

- seznam stránek je kruhová fronta s ručičkou, při nahrání do paměti a při každém čtení i zápisu se nastaví R bit na `1`, ručička se postupně otáčí, jedničkové bity nuluje a stránky s nulovým R bitem vybírá k nahrazení
- rozumně složitá implementce, málo výpadků

![](../Assets/Pasted%20image%2020240608181140.png)

END

---

START
BI-SZZ

Jak funguje **two-handed clock algoritmus**?

Back:

- varianta clock algoritmu se dvěma ručičkami, mezi nimiž je pevný úhel, první ručička nuluje R bity, druhá ručička vybírá stránky s nulovým R bitem k nahrazení
- parametrem je rozevření ručiček a jejich rychlost (např. podle množství volné paměti)

![](../Assets/Pasted%20image%2020240608181204.png)

END

---

START
BI-SZZ

Co je to **LRU algoritmus (Least Recently Used)**?

Back:

- vybírá k nahrazení stránku, ke které se nejdéle nepřistupovalo
- blízko optimálnímu algoritmu, ale implementace je složitější (je potřeba pamatovat si čas přístupu a pak tyto časy porovnávat)

![](../Assets/Pasted%20image%2020240608181218.png)

END

---

START
BI-SZZ

Co je to **Aging algoritmus**?

Back:

- softwarová simulace LRU algoritmu (s menší režií)
- využívá R bit (nastaví se při čtení i zápisu) a $n$-bitový čítač C (při načtení do paměti jsou všechny bity jedničkové)
- systém pravidelně posouvá obsah čítače o bit doprava, do volného levého bitu zkopíruje R bit a pak R bit vynuluje
- k nahrazení se vybere stránka s nejnižší hodnotou čítače

![](../Assets/Pasted%20image%2020240608181409.png)

![](../Assets/Pasted%20image%2020240608181326.png)

END

---