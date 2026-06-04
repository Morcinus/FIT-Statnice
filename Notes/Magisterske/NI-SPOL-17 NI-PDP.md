---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-17 NI-PDP

> NI-SPOL-17 (NI-PDP)
> Programování nad sdílenou pamětí, programový model OpenMP, datový a funkční paralelismus, synchronizace vláken, vícevláknové algoritmy (násobení polynomů, násobení matic a vektorů, řazení).


## Programování nad sdílenou pamětí

<!--
Original Flashcard ID: 1746599653063
-->

START
NI-SZZ


Jaké jsou hlavní zdroje neefektivity OpenMP kódů? (6)

Back:

- **nevyvážená zátěž vláken** (např. hodně vláken dlouho čeká na bariérách)
- **zbytečně častá synchronizace** (např. moc bariér a kritických sekcí)
- **nevyužití paralelismu** (např. rozdělení for cyklu na méně iterací než mám vláken)
- **režie vláken** (např. zbytečné vytváření a rušení vláken nebo `schedule(dynamic)`)
- **významná sekvenční část**
- **nevyužívání cachí** (např. častý zápis do nacachovaných proměnných, **falešné sdílení**)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313102900.png)

<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1779300070505-->
END

---

<!--
Original Flashcard ID: 1746599653071
-->

START
NI-SZZ


Co je **falešné sdílení**?

Back:

Vlákna zapisují na různé, ale blízké adresy, takže se trefují do stejného bloku cache

Tzn. když vlákno upraví svoji lokální proměnnou v daném bloku, invaliduje tím cache ostatním vláknům, kvůli čemuž si to musí načíst znovu.

Nastane např. při:
`#pragma omp parallel for shared(A) schedule(static,1)`

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250313103150.png)

<!-- ExampleEnd -->

Tags: otazka09
<!--ID: 1779300070508-->
END

---

<!--
Original Flashcard ID: 1746599653078
-->

START
NI-SZZ


U jakého **typu paralelismu** typicky **vzniká falešné sdílení**?

Back:

Typicky vzniká u **datového paralelismu**

(protože typicky přistupujeme k blízkým datům)

Tags: otazka09
<!--ID: 1779300070511-->
END

---

<!--
Original Flashcard ID: 1746599653086
-->

START
NI-SZZ


Jak se dá snížit dopad falešného sdílení u for cyklů?

Back:

Použít `schedule(static, X)`.

Za $X$ dosadíme `cache_line_size/sizeof(int)`, pokud máme pole s `int` hodnotama

Tím se práce rozhodí mezi vlákna a nepřistupují tolik k těm blízkým datům.

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020250313103303.png)

<!-- ExplanationEnd -->

Tags: otazka09
<!--ID: 1779300070514-->
END

---

<!--
Original Flashcard ID: 1749197198571
-->

START
NI-SZZ


Jak se dá kompletně zamezit falešnému sdílení? (3)

Back:

1. Splnění **podmínky zarovnání**
2. Pro velká pole nastavit `chunk_size` tak, aby každý proces měl celý blok cache
3. Pro malá pole přidat **jalovou výplň**, aby se každý prvek nafouknul do velikosti bloku cache

Tags: otazka09
<!--ID: 1779300070521-->
END

---

<!--
Original Flashcard ID: 1749197198577
-->

START
NI-SZZ


Jak přesně funguje **podmínka zarovnání**? Jak bychom ji aplikovali pro malá a velká pole?

Back:

Falešné sdílení pro pole $A$ **nenastane**, pokud:

1. `chunk_size X = cache_line_size/sizeof(int)`
2. `alignas(cache_line_size) int A[n]` - pole začne na adrese dělitelné `cache_line_size`

**Pro velká pole**: normálně zarovnáme
**Pro malá pole**: "nafoukneme" to tak (uděláme z toho 2D array), abychom vyplnili ten blok

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250606100254.png)

Pro velká pole:
![](../../Assets/Pasted%20image%2020250606100305.png)

<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1779300070525-->
END

---

## Programový model OpenMP

<!--
Original Flashcard ID: 1746518365423
-->

START
NI-SZZ


Co je **OpenMP**?

Back:

OpenMP je high-level API pro programování vícevláknových aplikací nad sdílenou pamětí.

Tags: otazka05
<!--ID: 1779300070528-->
END

---

<!--
Original Flashcard ID: 1746518365425
-->

START
NI-SZZ


Na jakém principu funguje OpenMP?

Back:

**Fork join model**

- V paralelní oblasti se vytvoří **tým paralelně běžících vláken**, které provádějí kód paralelní oblasti současně
- Potom se to joinne zpátky
- Pořád běží jedno **hlavní vlákno** sekvenčně

![](../../Assets/Pasted%20image%2020250227095821.png)

Tags: otazka05
<!--ID: 1779300070531-->
END

---

<!--
Original Flashcard ID: 1749133110206
-->

START
NI-SZZ


Jaké typy paralelismu podporuje OpenMP? (2)

Back:

**data paralelismus** i **task paralelismus**

Tags: otazka05
<!--ID: 1779300070533-->
END

---

<!--
Original Flashcard ID: 1746518365436
-->

START
NI-SZZ


Co je model sdílené paměti s **volnější konzistencí**? Jak lze vynutit synchronizaci?

Back:

- Vlákna si lokálně udržují (kešují) **kopie sdílených proměnných**
- Když do nich lokálně zapisují, nemusí nutně hned zapsat do sdílené paměti.
- Tzn. vlákna mohou dočasně vidět jinou hodnotu sdílené proměnné
- Můžu **vynutit synchronizaci** příkazem `flush()`

Tags: otazka05
<!--ID: 1779300070536-->
END

---

<!--
Original Flashcard ID: 1746518365439
-->

START
NI-SZZ


Jakou syntax mají obecně direktivy v OpenMP?

Back:

```
#pragma omp direktiva klauzule1 klauzule2
```

Tags: otazka05
<!--ID: 1779300070539-->
END

---

<!--
Original Flashcard ID: 1746518365442
-->

START
NI-SZZ


Jak v OpenMP funguje `paralell`? (syntax + jak funguje interně)

Back:

![](../../Assets/Pasted%20image%2020250227100625.png)

1. Vytvoří **tým vláken**, která jde do dalšího kódu současně.
2. Na konci bloku je skrytá **bariéra**.
3. Jakmile všechna vlákna dosáhnou bariéry, pokračuje se v původním vláknu. Ostatní vlákna se nesmažou, ale stanou se neaktivníma a **zařadí se do thread poolu**.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227100716.png)
![](../../Assets/Pasted%20image%2020250227100758.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070542-->
END

---

<!--
Original Flashcard ID: 1746518365445
-->

START
NI-SZZ


Jak funguje klauzule `shared(seznam)`?

Back:

- Proměnná existuje před danou oblastí kódu.
- Proměnná je stále sdílena mezi všemi vlákny
- Když ji vlákno přepíše, změnu vidí všechna ostatní vlákna

Programátor tedy musí zajistit ošetření konfliktů

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227101235.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070545-->
END

---

<!--
Original Flashcard ID: 1746518365447
-->

START
NI-SZZ


Jak funguje klauzule `private(seznam)`?

Back:

- Proměnná před blokem se **nakopíruje neinicalizovaná instance pro každé vlákno**.
- Když skončí vlákno, instance zmizí

Tedy funguje to jako když předávám funkci parametry hodnotou.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227101244.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070548-->
END

---

<!--
Original Flashcard ID: 1746518365450
-->

START
NI-SZZ


Jak funguje klauzule `firstprivate(seznam)`?

Back:

Jako `private(seznam)`, ale každému vláknu to inicializuje proměnnou s hodnotou původní proměnné.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227101251.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070551-->
END

---

<!--
Original Flashcard ID: 1746518365458
-->

START
NI-SZZ


Co je klauzule `reduction(operator:result)` v OpenMP?

Back:

Každá proměnná `result` se nakopíruje do každého vlákna jako **private**, inicializuje na $0$, na konci paralelní oblasti se na každou proměnnou aplikuje operátor a výsledek se uloží do původní proměnné.

Můžu takhle např. v cyklu sečíst všechny hodnoty result ze všech podvláken.

<!-- ExampleStart -->

Tady se po konci for cyklu sečtou všechny hodnoty result z všech podvláken.
![](../../Assets/Pasted%20image%2020250227101619.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227101534.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070553-->
END

---

<!--
Original Flashcard ID: 1746518365464
-->

START
NI-SZZ


Jak funguje direktiva `threadprivate(proměnná)`?

Back:

Je to jako `private(proměnná)`, ale přežívá jednotlivé oblasti kódu - tzn. každé vlákno pak má tuto proměnnou i přes další paralelní oblasti.

Pomocí `copyin(proměnná)` se daná proměnná nastaví na hodnotu z hlavního vlákna. Je potřeba to udělat po zavolání `threadprivate`.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250227102036.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227102024.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1779300070556-->
END

---

## Datový a funkční paralelismus

<!--
Original Flashcard ID: 1746518365491
-->

START
NI-SZZ


Jak funguje for cyklus v OpenMP?

Back:

`#pragma omp for klauzule1, klauzule2,...`
(příp. `#pragma omp parallel for klauzule1, klauzule2,...`)

- Je to forma **datového (iteračního) paralelismu**
- Na konci cyklu je implicitní bariéra

Tags: otazka06
<!--ID: 1779300070559-->
END

---

<!--
Original Flashcard ID: 1746518365494
-->

START
NI-SZZ


Jaké jsou **klauzule for cyklu** v OpenMP? (5)

Back:

- `schedule()` - upřesňuje způsob přiřazení iterací cyklu vláknům
- `collapse(i)` - u víceúrovňového cyklu kolik vrstev cyklů má zkolabovat do jednovrstvého iterátoru
- `private(seznam) | firstprivate(seznam) | lastprivate(seznam) | shared(seznam) | reduction(operator:seznam)`
	- `lastprivate()` - hodnota bude rovna hodnotě proměnné v poslední iteraci cyklu
- `ordered` - iterace musí být vykonávány v sekvenčním pořadí
- `nowait` - pokud to tam nedám, tak všechna vlákna, co počítali for loop, budou čekat až do konce iteračního výpočtu. Nowait umožní vyskočit z těla toho cyklu a nečekat na ostatní

Tags: otazka06
<!--ID: 1779300070561-->
END

---

<!--
Original Flashcard ID: 1746518365497
-->

START
NI-SZZ


Jaké jsou typy plánování `schedule(type, chunk_size)` v OpenMP? (5)

Back:

- **static** - každé vlákno staticky dostane `chunk_size` iterací. Pokud není definován, tak $n/p$ iterací.
- **dynamic** - dynamicky se přidělují `chunk_size` bloky cyklu. Pokud není definován, tak bloky velikosti $1$.
- **guided** - dynamicky bloky $x$ iterací, kde $x = \max(\lceil\textrm{\#nepřidělených iterací}/p\rceil,\text{chunk-size})$
- **runtime** - rozhodne se až při runtimu podle hodnoty systémové proměnné `OMP_SCHEDULE`
- **auto** - rozhodne kompilátor nebo běhové prostředí

“staticky” = všechno se rozdělí předem
“dynamicky” = jakmile vlákno dokončí přidělenou várku, dostane další

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227103712.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250227104119.png)
![](../../Assets/Pasted%20image%2020250227104125.png)
![](../../Assets/Pasted%20image%2020250227104130.png)
![](../../Assets/Pasted%20image%2020250227104136.png)
![](../../Assets/Pasted%20image%2020250227104140.png)
![](../../Assets/Pasted%20image%2020250227104146.png)
![](../../Assets/Pasted%20image%2020250227104157.png)

<!-- ExampleEnd -->

Tags: otazka06
<!--ID: 1779300070565-->
END

---

<!--
Original Flashcard ID: 1746518365499
-->

START
NI-SZZ


Jak se prakticky liší použití **static, dynamic a guided schedule**? Kdy jsou jaké výhodné?

Back:

- **static** - nízká režie, vhodné pokud každá iterace je podobně časově náročná
- **dynamic** - vyšší režie, dobré když jsou iterace různě časově náročné
- **guided** - vhodné pokud doba provádění iterací postupně roste

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227104511.png)

<!-- DetailInfoEnd -->

Tags: otazka06
<!--ID: 1779300070567-->
END

---

<!--
Original Flashcard ID: 1746518365509
-->

START
NI-SZZ


Jak v OpenMP funguje **task paralelismus** (funkční paralelismus)?

- Jaká je direktiva
- Co je úloha (3)
- Jak funguje přidělování úloh

Back:

`#pragma omp task`

- **úloha** (task) = ukazatel na kód + vstupní data + datová struktura, kam konzument (vlákno) vloží svoje ID
- Přidělování úloh funguje na principu **producent-konzument**
  - vlastnické vlákno (které narazí na direktivu) vygeneruje jako producent synovskou úlohu, vloží ji do task poolu, odtud si ji vyzvedne volné vlákno jako konzument a začne pracovat
  - vhodné i pro rekurzivní “rozděl a panuj” (ale nastartovat rekurzi musí jen jedno vlákno!)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227110308.png)

<!-- DetailInfoEnd -->

Tags: otazka07
<!--ID: 1779300070570-->
END

---

<!--
Original Flashcard ID: 1749140734242
-->

START
NI-SZZ


Co dělá `#pragma omp taskwait`?

Back:

rodičovská úloha čeká na doběhnutí všech synů při task paralelismu

Tags: otazka07
<!--ID: 1779300070572-->
END

---

## Synchronizace vláken

<!--
Original Flashcard ID: 1746518365518
-->

START
NI-SZZ


Jaké jsou hlavní synchronizační direktivy v OpenMP? (7)

Back:

- `barrier`
- `master`
- `single`
- `critical`
- `atomic`
- `taskwait`
- `flush()`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227110920.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070575-->
END

---

<!--
Original Flashcard ID: 1746518365520
-->

START
NI-SZZ


Co je `#pragma omp barrier`?

Back:

Vlákna zde usnou a čekají na všechna ostatní

- implicitně na konci každé paralelní oblasti a single bloku

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227110751.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070578-->
END

---

<!--
Original Flashcard ID: 1746518365523
-->

START
NI-SZZ


Co je `#pragma omp single`?

Back:

Tento blok kódu provádí jen jedno (libovolné) vlákno, ostatní čekají na konci bloku

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227110803.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070581-->
END

---

<!--
Original Flashcard ID: 1746518365526
-->

START
NI-SZZ


Co je `#pragma omp master`?

Back:

Tento blok kódu provádí jen hlavní vlákno, ostatní skipnou a **okamžitě pokračují**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227110833.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070583-->
END

---

<!--
Original Flashcard ID: 1746518365528
-->

START
NI-SZZ


Jak funguje direktiva `#pragma omp atomic`?

Back:

Atomická operace, která zajišťuje, že se provede **read-modify-write**, aniž by do toho kdokoliv jiný zasáhnul.

Např. inkrementace čítače.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227111019.png)
![](../../Assets/Pasted%20image%2020250227111026.png)
![](../../Assets/Pasted%20image%2020250227111032.png)
![](../../Assets/Pasted%20image%2020250227111039.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070586-->
END

---

<!--
Original Flashcard ID: 1746518365531
-->

START
NI-SZZ


Jaké jsou typy atomických operací? Aneb na co lze aplikovat `atomic` (4)

Back:

Vždy to je `#pragma omp atomic [write|read|update|capture]`

- **Atomické čtení**
- **Atomické psaní**
- **Atomický update** - read, modify, write
- **Atomický capture** - read, modify, write s tím že navíc načtu starou hodnotu do lokální proměnné, kterou můžu po bloku využít

<!-- ExampleStart -->

```c++
// Capture
int my_variable;
#pragma omp atomic capture
{
    my_variable = global_index;
    global_index += 1;
}

// Update - nemůžu uložit do lokální proměnné
#pragma omp atomic update
global_index += 1;
```

<!-- ExampleEnd -->

Tags: otazka08
<!--ID: 1779300070589-->
END

---

<!--
Original Flashcard ID: 1746518365534
-->

START
NI-SZZ


Jak funguje direktiva `#pragma omp cancel`?

- k čemu je
- popiš podrobnější syntax

Back:

Předčasné opuštění paralelní oblasti - aka zastavení výpočtu ve všech vláknech.

`#pragma omp cancel [parallel | for | taskgroup] if [(vyraz)]`

- `[parallel | for | taskgroup]` říká co přesně má být ukončeno
- `if` - ukončení se provede pokud platí výraz

"Jdete na houby a pokud narazíte na hřiba, jde se domů, protože nám stačí jeden hřib." - Tvrdík :D

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250227111821.png)
![](../../Assets/Pasted%20image%2020250605200523.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1779300070592-->
END

---

<!--
Original Flashcard ID: 1749146764895
-->

START
NI-SZZ


Jak funguje direktiva `flush()`?

Back:

Propsání aktuálních hodnot daných sdílených proměnných do sdílené paměti

Tags: otazka08
<!--ID: 1779300070595-->
END

---

## Vícevláknové algoritmy (násobení polynomů, násobení matic a vektorů, řazení)

<!--
Original Flashcard ID: 1749200460528
-->

START
NI-SZZ


Co je úloha **násobení polynomů**? Jak funguje sekvenční algoritmus?

Back:

- Pole $A,B,C$ - obsahují koeficienty polynomů

Shrnutí algoritmu:

1. Máme polynomy `A[m+1], B[n+1] a C[n+m+1]`
2. Inicializujeme $C$ na samé $0$
3. Iterujeme $A$ s $i$, iterujeme $B$ s $j$
4. Uvnitř nastavíme `C[i+j] += A[i] * B[j]`

![](../../Assets/Pasted%20image%2020250313104427.png)

Tags: otazka11
<!--ID: 1779300070598-->
END

---

<!--
Original Flashcard ID: 1749200460532
-->

START
NI-SZZ


Jakou má sekvenční složitost úloha **násobení polynomů**?

Back:

$$O(nm)$$

Tags: otazka11
<!--ID: 1779300070601-->
END

---

<!--
Original Flashcard ID: 1746599653127
-->

START
NI-SZZ


Jaké jsou možnosti paralelizace u násobení polynomů?

Back:

- Paralelizace $A$ - vnějšího cyklu
- Paralelizace $B$ - vnitřního cyklu
- Paralelizace $C$ - dekompozice vstupního polynomu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313104526.png)

<!-- DetailInfoEnd -->

Tags: otazka11
<!--ID: 1779300070604-->
END

---

<!--
Original Flashcard ID: 1746599653134
-->

START
NI-SZZ


Jak se dá paralelizovat **vnější cyklus** $A$ násobení polynomů?

![](../../Assets/Pasted%20image%2020260524141255.png)

Back:

1. Před vnější cyklus dáme `#pragma omp parallel for schedule(static)`
2. Před inkrementaci prvku $C$ dáme `#pragma omp atomic update`

![](../../Assets/Pasted%20image%2020250313104607.png)
![](../../Assets/Pasted%20image%2020250313104629.png)

Tags: otazka11
<!--ID: 1779300070606-->
END

---

<!--
Original Flashcard ID: 1746599653142
-->

START
NI-SZZ

Jak se dá paralelizovat **vnitřní cyklus** $B$ násobení polynomů?

![](../../Assets/Pasted%20image%2020260524141259.png)

Back:

- vnější cyklus přes $A$ je sekvenční
- Před vnitřní cyklus $B$ dáme `#pragma omp parallel for schedule(static)`
- Nebo lépe:
	-  Před vnější cyklus se umístí `#pragma omp parallel` – to zajišťuje sdílený threadpool vláken
	- Před vnitřní cyklus $B$ dáme `#pragma omp for schedule(static)` – ten vlákna využívá
- Je zde problém s falešným sdílením

$i$ máme v paralelním cyklu vždy stejný, takže jen přičítáme na pozici $j$ za tím $i$ v $C$. Tím pádem si vlákna nic navzájem nepřepisují a není potřeba atomic. (viz obrázek)

![](../../Assets/Pasted%20image%2020250313104644.png)
![](../../Assets/Pasted%20image%2020250313104655.png)
![](../../Assets/Pasted%20image%2020250313104706.png)

Tags: otazka11
<!--ID: 1779300070609-->
END

---

<!--
Original Flashcard ID: 1749200460535
-->

START
NI-SZZ


Jaké jsou u paralelizace **vnitřního cyklu** u **násobení polynomů**:

- výhody (1)
- nevýhody (1)

Back:

Výhody:

- Zapisované oblasti v $C$ jsou disjunktní

Nevýhody:

- Vyžaduje větší režii

Tags: otazka11
<!--ID: 1779300070612-->
END

---

<!--
Original Flashcard ID: 1749200460538
-->

START
NI-SZZ


Co lze navíc provést u paralelizace **vnitřního cyklu** u **násobení polynomů**

Back:

Když přesuneme parallel nad vnější cyklus, pool vláken se vytvoří jen jednou, ale falešné sdílení bude neodstranitelné

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250606103753.png)

Tags: otazka11

<!-- DetailInfoEnd -->
<!--ID: 1779300070615-->
END

---

<!--
Original Flashcard ID: 1746599653149
-->

START
NI-SZZ


Jak se dá **paralelizovat polynom** $C$ při násobení polynomů?

Back:

1. Před vnějším cyklem máme `parallel for`
2. Vnější cyklus iteruje přes indexy $C$ (tedy $m+n+1$)
3. Vnitřní jde podle vzorečku $C[K] = \sum_{l=\max(0,k-n)}^{\min(k,m)} A[l] B[k-l]$

![](../../Assets/Pasted%20image%2020250313104739.png)
![](../../Assets/Pasted%20image%2020250313104751.png)
![](../../Assets/Pasted%20image%2020250313104801.png)
![](../../Assets/Pasted%20image%2020250313104810.png)
![](../../Assets/Pasted%20image%2020250313104820.png)

Tags: otazka11
<!--ID: 1779300070617-->
END

---

<!--
Original Flashcard ID: 1749200460541
-->

START
NI-SZZ


Jaký schedule lze zvolit u **paralelizace polynomu** $C$ při násobení polynomů? (2)

Jaký je nejlepší?
Co navíc pomůže?

Back:

Počet operací `C[k] += ...` závisí na $k$ (pro prostřední $k$ jich bude více a pro krajnější méně). Proto:

- se `schedule(static)` budou “prostřední” vlákna výrazně víc zatížena
- se `schedule(dynamic)` bude docházet k falešnému sdílení a není nutné

nejlepší je `static` s `chunk_size = cache_line_size / sizeof(int)`

trochu pomůže spočítat `c_k` lokálně a zapsat ho jednorázově, ne inkrementálně

Tags: otazka11
<!--ID: 1779300070620-->
END

---

<!--
Original Flashcard ID: 1746599653155
-->

START
NI-SZZ


Co je úloha **sekvenční násobení matic**? Jak funguje sekvenční algoritmus?

Back:

úloha $MMM$: vynásobit stejně velké čtvercové $(n \times n)$ matice $A \times B = C​$

sekvenčně středoškolsky: $O(n^3)$ (tři for cykly, $n^2$ skalárních součinů délky $n$)

![](../../Assets/Pasted%20image%2020250313104839.png)

Tags: otazka12
<!--ID: 1779300070623-->
END

---

<!--
Original Flashcard ID: 1749200460545
-->

START
NI-SZZ


Jak se dá paralelizovat **násobení matic**? (3)

Back:

- paralelizace **vnějšího cyklu**
- paralelizace **prostředního cyklu**
- paralelizace **vnitřního cyklu**

Tags: otazka12
<!--ID: 1779300070626-->
END

---

<!--
Original Flashcard ID: 1746599653163
-->

START
NI-SZZ


Jak se dá paralelizovat **vnější cyklus** u násobení matic?

![](../../Assets/Pasted%20image%2020260524141202.png)

Back:

1. Před vnější cyklus dáme `#pragma omp parallel for schedule(static)`

Díky tomu každé vlákno zpracovává jiný řádek $C$

![](../../Assets/Pasted%20image%2020250313104859.png)

Tags: otazka12
<!--ID: 1779300070628-->
END

---

<!--
Original Flashcard ID: 1749200460548
-->

START
NI-SZZ


Jaké jsou u paralelizace **vnějšího cyklu** u násobení matic:

- výhody (3)

Back:

- **bezkolizní zápisy**
- **minimální synchronizace** (jedna bariéra na konci)
- **linární zrychlení**

Tags: otazka12
<!--ID: 1779300070631-->
END

---

<!--
Original Flashcard ID: 1746599653171
-->

START
NI-SZZ


Jak se dá paralelizovat **prostřední cyklus** u násobení matic?

![](../../Assets/Pasted%20image%2020260524141205.png)

Back:

1. Před prostřední cyklus dáme `#pragma omp parallel for schedule(static)`

Díky tomu každé vlákno zpracovává **jiný sloupec** $C$.

Pro malé $n/p$ (šířku sloupců) může docházet ke falešnému sdílení.

![](../../Assets/Pasted%20image%2020250313104910.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313104948.png)
![](../../Assets/Pasted%20image%2020250313104959.png)
![](../../Assets/Pasted%20image%2020250313105009.png)

<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1779300070634-->
END

---

<!--
Original Flashcard ID: 1749200460551
-->

START
NI-SZZ


Jaké jsou u paralelizace **prostředního cyklu** u násobení matic:

- výhody (1)
- nevýhody (1)

Back:

- **Výhoda** bezkolizní zápisy
- **Nevýhoda** $n$ bariér
<!--ID: 1779300070637-->
END

---

<!--
Original Flashcard ID: 1749200460554
-->

START
NI-SZZ


K čemu dojde u paralelizace **prostředního cyklu** u násobení matic:

- při použití `schedule(static)`
- při použití `schedule(static,1)`

Back:

**K čemu dojde:**

- se `schedule(static)` má lineární zrychlení, pro dost velké $n/p$ (šířku sloupcu) nebude moc docházet k falešnému sdílení (protože když se první vlákno dostane k jeho poslednímu sloupci, tak to další už bude u sloupce dostatečně daleko vpravo)
- se `schedule(static, 1)` dojde k falešnému sdílení, protože si budou furt přepisovat cache

Tags: otazka12
<!--ID: 1779300070639-->
END

---

<!--
Original Flashcard ID: 1749200460557
-->

START
NI-SZZ


Jak se dá trochu zrychlit **paralelizace prostředního cyklu** u násobení matic?

Back:

přesunutím `parallel` nad vnější cyklus - tzn. 1 **fork-join**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250606105228.png)

<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1779300070642-->
END

---

<!--
Original Flashcard ID: 1746599653181
-->

START
NI-SZZ


Jak se dá paralelizovat **vnitřní cyklus** při násobení matic?

![](../../Assets/Pasted%20image%2020260524141216.png)

Back:

1. Před vnitřní cyklus dáme `#pragma omp parallel for schedule(static) reduction(+:s)`

Díky tomu každé vlákno počítá jinou část skalárního součtu. Je tam největší režie synchronizace. $n^2 \cdot (T_{barr}+T_{PR}(n,p))$.

![](../../Assets/Pasted%20image%2020250313105019.png)

Tags: otazka12
<!--ID: 1779300070645-->
END

---

<!--
Original Flashcard ID: 1749210669970
-->

START
NI-SZZ

Jak se dá zrychlit (trochu) **paralelizace prostředního cyklu** u **násobení matic**?

![](../../Assets/Pasted%20image%2020260524141229.png)

Back:

1. přesuneme `parallel` nad **vnější cyklus**
2. před `C[i][j] = s` dáme `#pragma omp master`


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313105106.png)
<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1779300221139-->
END

---

<!--
Original Flashcard ID: 1749200460561
-->

START
NI-SZZ


Jaké jsou u paralelizace **vnitřního cyklu** u násobení matic:

- nevýhody (1)

Back:

- **Nevýhoda** největší synchronizační režie ($n^2$ bariér a redukcí), s počtem vláken dokonce zpomaluje

Tags: otazka12
<!--ID: 1779300070648-->
END

---

<!--
Original Flashcard ID: 1746599653191
-->

START
NI-SZZ


Jaké je **srovnání výkonnosti variant paralelního násobení** matic? (5)

Následující možnosti:
- **MMM-vnitřní**
- **MMM-vnitřní s parallel venku**
- **MMM-prostřední**
- **MMM-prostřední s parallel venku**
- **MMM-vnější**


Back:

1. **MMM-vnější** je nejlepší
2. **MMM-prostřední s fork join** - o trošku pomalejší
3. **MMM-prostřední** - o trošku pomalejší
4. **MMM-vnitřní s fork join** - výrazně pomalejší
5. **MMM-vnitřní** - výrazně pomalejší

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313105137.png)

<!-- DetailInfoEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313105149.png)
![](../../Assets/Pasted%20image%2020250313105201.png)

<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1779300070651-->
END

---

<!--
Original Flashcard ID: 1746599653202
-->

START
NI-SZZ


Jaké jsou formáty pro uložení řídkých matic? (2)

Back:

- **souřadnicový** (COO)
- **komprimované řídké řádky** (CSR)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313110032.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1779300070654-->
END

---

<!--
Original Flashcard ID: 1746599653211
-->

START
NI-SZZ


Jak funguje **souřadnicový formát** pro uložení řídkých matic COO?

Back:

Matice $A$ je reprezentována 3 poli:

- `A.RowInd[0..N-1]` - obsahuje indexy **řádků** nenulových prvků $A$
- `A.ColInd[0..N-1]` - obsahuje indexy **sloupců** nenulových prvků $A$
- `A.Elems[0..N-1]` - obsahuje **hodnoty** nenulových prvků $A$

$N$ je počet nenulových prvků

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250313110051.png)

<!-- ImageEnd -->

Tags: otazka13
<!--ID: 1779300070657-->
END

---

<!--
Original Flashcard ID: 1746599653234
-->

START
NI-SZZ


Jak funguje **komprimované řádké řádky** pro uložení řídkých matic CSR?

Back:

Matice $A$ je reprezentována 3 poli:

- `A.RowStart[0..n]` - indexy začátků řádků v `A.ColInd`
- `A.ColInd[0..N-1]` - obsahuje indexy **sloupců** nenulových prvků $A$
- `A.Elems[0..N-1]` - obsahuje **hodnoty** nenulových prvků $A$

(tzn. vše stejně jako u COO jen `A.RowStart` je jiný)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250606110906.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1779300070660-->
END

---

<!--
Original Flashcard ID: 1749201699764
-->

START
NI-SZZ


Co je úloha $SpMVM$?

Back:

Vypočítat $y=Ax$, tedy **násobení matice vektorem**

($A$ je matice $n \times n$, $N$ je počet jejích nenulových prvků, $n \le N \ll n^2$)

Tags: otazka13
<!--ID: 1779300070663-->
END

---

<!--
Original Flashcard ID: 1746599653219
-->

START
NI-SZZ


Jak funguje sekvenční **SpMVM** v COO?

Back:

1. Máme `A` v $COO$ formátu, a vektory `y[n]` a `x[n]`
2. Inicializujeme `y[n]` na nuly
3. Iterujeme do $k < N$ jakoby přes elems $A$, tedy `y[A.RowInd[k]] += A.Elems[k]*x[A.ColInd[k]]`

![](../../Assets/Pasted%20image%2020250313110122.png)
![](../../Assets/Pasted%20image%2020250313110134.png)

Tags: otazka13
<!--ID: 1779300070666-->
END

---

<!--
Original Flashcard ID: 1749201699781
-->

START
NI-SZZ


Jaká je složitost sekvenčního **SpMVM** v COO?

Back:

$O(N)$

Tags: otazka13
<!--ID: 1779300070668-->
END

---

<!--
Original Flashcard ID: 1746599653226
-->

START
NI-SZZ


Jak funguje paralelní **SpMVM** v COO?

Jaký schedule musí být? K čemu bude docházet? Je to efektivní?

![](../../Assets/Pasted%20image%2020260524151431.png)

Back:

1. Před inicializaci narveme `#pragma omp parallel for`
2. Před hlavní for cyklus narveme `#pragma omp parallel for`
3. Výpočet dáme do `temp` proměnné a dáme `atomic update` na přiřazení do `y[A.RowInd[k]] += temp`

Schedule libovolný, bude každopádně docházet k **falešnému sdílení**.
-> **Je to neefektivní** (pro malá p pomalejší než sekvenční, pro větší p jen mírné zrychlení)

![](../../Assets/Pasted%20image%2020250313110151.png)

Tags: otazka13
<!--ID: 1779300070671-->
END

---

<!--
Original Flashcard ID: 1746599653242
-->

START
NI-SZZ


Jak funguje **sekvenční násobení** matic v CSR? Je rychlejší nebo pomalejší než COO?

Back:

- dva for cykly, vnější přes řádky, vnitřní přes prvky řádku a v něm `sum += A.Elems[k] * x[A.ColInd[k]]`
- 2× rychlejší než COO

![](../../Assets/Pasted%20image%2020250313110221.png)

Tags: otazka13
<!--ID: 1779300070674-->
END

---

<!--
Original Flashcard ID: 1746599653249
-->

START
NI-SZZ


Jak funguje paralelní **SpMVM** v CSR? Na čem hodně závisí?

![](../../Assets/Pasted%20image%2020260524151445.png)

Back:

- Před vnější cyklus dáme `#pragma omp parallel for schedule(static|dynamic)`
- volba `schedule` hodně ovlivňuje zrychlení

![](../../Assets/Pasted%20image%2020250313110310.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313110318.png)
![](../../Assets/Pasted%20image%2020250313110420.png)
![](../../Assets/Pasted%20image%2020250313110538.png)
![](../../Assets/Pasted%20image%2020250313110629.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1779300070677-->
END

---

<!--
Original Flashcard ID: 1749201699784
-->

START
NI-SZZ


Jaké jsou možnosti volby `schedule` u paralelního **SpMVM** v CSR? Jaké jsou jejich vlastnosti? (4)

Back:

- se `schedule(static)` může být zátěž vláken nevyvážená a hrozí falešné sdílení
- se `schedule(static, 1)` je nevyváženost podobná a falešné sdílení ještě horší
- se `schedule(static, 16)` je nevyváženost horší, ale falešné sdílení lepší
- se `schedule(dynamic, X)` záleží vyváženost na matici a má to vyšší režii
  - falešné sdílení lze zmírnit nastavením `X` na násobek počtu prvků v cache bloku

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313110310.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1779300070680-->
END

---

<!--
Original Flashcard ID: 1746599653256
-->

START
NI-SZZ


Jak funguje **vyvažování při násobení** matic v CSR? Jaké má zrychlení?

Back:

1. `band[p+1]; band[p] = n`
2. `#pragma omp parallel`
3. `int my_id = omp_get_thread_num();`
4. `int my_number = my_id*N/p`
5. `int my_index = binary_search(A.RowStart, my_number)`
6. `band[my_id] = my_index;`
7. `#pragma omp barrier`
8. `for(od band[my_id] do band[my_id+1]){ ...}`

rozdělení matice na pásy s podobnými počty nenulových prvků (např. tak, že si každé vlákno vypočte svůj ideální dělící bod a “zaokrouhlí” na celé řádky)

pro menší $p$ je zrychlení téměř lineární, pak začne narážet na saturaci sběrnice

![](../../Assets/Pasted%20image%2020250313110713.png)
![](../../Assets/Pasted%20image%2020250313110657.png)

Tags: otazka13
<!--ID: 1779300070683-->
END

---

<!--
Original Flashcard ID: 1746599653605
-->

START
NI-SZZ


Jak vypadá sekvenční verze QuickSortu?

Back:

**seq_quicksort**:

- `if(lo<hi)`
- `long r = seq_partition_L(A,lo,hi)` - najde dělící bod
- `seq_quicksort(A, lo, r-1)`
- `seq_quicksort(A, r+1, hi)`

**seq_partition_L**

- `pivot = A[hi]` - poslední prvek je pivot
- `j = lo; iterace od lo do hi`
  - `if(A[j] < pivot) swap (A, i++, j)`
- `swap(A,i,hi)`
- `return i`

**swap**

- prohodí prvky

![](../../Assets/Pasted%20image%2020250321134512.png)

Tags: otazka14
<!--ID: 1779300070686-->
END

---

<!--
Original Flashcard ID: 1746599653621
-->

START
NI-SZZ


Jak se dá naivně **paralelizovat quicksort**? Jaké to má problémy?

![](../../Assets/Pasted%20image%2020250321134512.png)

Back:

Pomocí funkčního paralelismu - `task` nad obě větve rekurzvního volání

Problémy: mnoho vláken, velká režie, rozdělení vstupního pole je stále sekvenční

![](../../Assets/Pasted%20image%2020250321134624.png)

Tags: otazka14
<!--ID: 1779300070689-->
END

---

<!--
Original Flashcard ID: 1749202568493
-->

START
NI-SZZ


Jak lze zrychlit quicksort?

Back:

- **tail call optimization** (viz dále)
- **zavedení prahu pro vytváření tasků** (viz dále)
- **paralelizace algoritmu rozdělování** (viz dále)
- **přiblížení pivota blízko mediánu** (např. výběrem mediánu z náhodného vzorku)
- **rozdělení počtu vláken** na levou a pravou podúlohu podle velikosti podúloh

Tags: otazka14
<!--ID: 1779300070692-->
END

---

<!--
Original Flashcard ID: 1746599653660
-->

START
NI-SZZ


Jak funguje **Tail call optimization** (TCO) u quicksortu? Jaké složitosti tím docílíme?

Back:

QuickSort lze zrychlit nahrazením druhého rekurzivního volání iterací ve `while`

- Ušetříme počet rekurzivních volání a tedy počet vytvářených tasků
- Pokud je pivot skoromedián, snížíme počet rekurzivních volání z $O(n)$ na $O(\log n)$

![](../../Assets/Pasted%20image%2020250321134952.png)

Tags: otazka14
<!--ID: 1779300070695-->
END

---

<!--
Original Flashcard ID: 1746599653667
-->

START
NI-SZZ


Jak funguje **Prahování task paralelismu** (ST) u quicksortu?

Back:

např. pokud je neseřazených čísel míň než $n/kp$, dopočítáme zbytek sekvenčně v aktuální úloze místo vytváření nových

![](../../Assets/Pasted%20image%2020250321135010.png)
![](../../Assets/Pasted%20image%2020250321135017.png)

Tags: otazka14
<!--ID: 1779300070698-->
END

---

<!--
Original Flashcard ID: 1746599653679
-->

START
NI-SZZ


Jak funguje **Paralelizované rozdělování u quicksortu**? Jaké jsou předpoklady?

Back:

Předpoklady:

- Hodí se na to **Hoareova** varianta quicksortu (neutralizace z obou stran) než Lomutova
- vyžaduje vnořený OpenMP paralelismus (`omp_set_max_active_levels na víc než 1`)

Jak funguje:

- indexy levého a pravého prvku (`i`, `j`) budou sdílené proměnné, každé vlákno si od nich opakovaně odvozuje lokální `my_i` a `my_j` a nárokuje si tak dvojici prvků pro sebe
  - pro přečtení a in/dekrementaci `i` a `j` je nutný `atomic capture`
- to ale vede na obří režii s `atomic` a falešné sdílení, takže je lepší si místo prvků nárokovat celé disjunktní bloky (tzn. in/dekrementovat indexy o $K$ místo o $1$)
- na konci smyčky je potřeba `barrier`, pak neutralizace zbývajících (max. $p$) bloků a nakonec sekvenční úklid posledního špinavého bloku
- pivota neodkládáme stranou jako u neblokové varianty, jen si zapamatujeme hodnotu

![](../../Assets/Pasted%20image%2020250321135035.png)

Tags: otazka14
<!--ID: 1779300070701-->
END

---

<!--
Original Flashcard ID: 1746599653768
-->

START
NI-SZZ


Jak vypadá učebnicová verze Merge Sortu? (SUV)

(Pozn. tady podle mě nemá cenu se to učit přesně, ale jen cca tušit, co tam je za funkce)

Back:

Máme pole $A$ délky $n$

**mergesort**

- Inicializuje pole $B[n]$ na hodnoty $A$čka
- sputí `mergesort_rec(B,0,n,A);`

**mergesort_rec**

- konec rekurze `if((hi-lo) <2) return;`
- spočtení prostředku `long middle = (hi+lo)/2`
- zavolání na levou část `mergesort_rec(A, lo, middle, B)`
- zavolání na levou část `mergesort_rec(A, middle, hi, B)`
- merge `merge(B, lo, middle, hi, A)`

**merge** (2-cestné slučování)

- `i = lo; j = middle`
- iterujeme $k$ mezi `lo..hi`
  - Vždy přiřazujeme jako první menší prvek
  - 1.  Přiřazení prvku z první části (pokud jsme vyplýtvali pravé pole nebo je prvek menší):
  - `if((i<middle) && ((j >= hi) || (B[i] <= B[j]))) A[k] = B[i++];`
  - `else A[k] = B[j++];`

![](../../Assets/Pasted%20image%2020250321135717.png)

Tags: otazka15
<!--ID: 1779300070704-->
END

---

<!--
Original Flashcard ID: 1746599653777
-->

START
NI-SZZ


Jak vypadá **přímočará (naivní) paralelizace merge sortu**? (PUV)

Back:

Uvnitř **mergesort**

- Před cykly `#pragma omp parallel`
- Před for `#pragma omp for`
- Před `mergesort_rec` dáme `#pragma omp single`

Uvnitř **mergesort_rec**:

- Před `mergesort_rec` dáme `#pragma omp task`
- Před `seq_merge` dáme `#pragma omp taskwait`

![](../../Assets/Pasted%20image%2020250321135735.png)

Tags: otazka15
<!--ID: 1779300070706-->
END

---

<!--
Original Flashcard ID: 1749235012461
-->

START
NI-SZZ


Proč u MergeSortu nefunguje **naivní funkční paralelizace**?

Back:

- `taskwait` čeká na podvlákna a těžká práce je až za tím
- **vytváří se obří množství tasků**, které v listech slučují **dvouprvková pole**
- **obrovské falešné sdílení**

Kvůli tomu je to **násobně pomalejší** (třeba 14 krát) než vůbec **sekvenční verze**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250321135825.png)

<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1779300070709-->
END

---

<!--
Original Flashcard ID: 1746599653817
-->

START
NI-SZZ


Jaké jsou 3 možnosti zlepšení paralelního MergeSortu?

Back:

- **zavedením prahu** (stejně jako u quicksortu)
- **vytvářením nové úlohy jen pro levou polovinu** ("rozděl a půlku si nech")
- **paralelizací algoritmu dvoucestného slučování** (viz dále)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250321135945.png)

<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1779300070712-->
END

---

<!--
Original Flashcard ID: 1746599653827
-->

START
NI-SZZ


Jak funguje MergeSort s metodou "**Prahování a Rozděl-a-PůlkuSiNech**"?

Back:

Prahování - Místo původní koncové podmínky dáme:

- `if((hi-lo) < threshold)`
	- `seq_mergesort_Rec(B, lo, hi,A)`
	- `return`

Rozděl a půlku si nech:

- `#pragma omp task` dáme pouze před levý `par_merge_sort_rec`

![](../../Assets/Pasted%20image%2020250321140019.png)
Tags: otazka15
<!--ID: 1779300070715-->
END

---

<!--
Original Flashcard ID: 1746599653850
-->

START
NI-SZZ


Jak funguje paralelizace algoritmu **2-cestného** slučování u MergeSortu?

Back:

todo přepsat tak, aby mi to dávalo smysl

1. slučovaná seřazená pole $C, D$ délky $n/2$ si představme jako řádkové a sloupcové indexy matice, v níž jsou jedničky tam, kde sloupcový index $>$ řádkový, jinde nuly
2. všechny jedničky jsou v pravém horním rohu, od nul je dělí lomená čára (na obrázku tlustá modrá)
3. každé vlákno si najde svůj průsečík této lomené čáry s $p-1$ vedlejšími diagonálami matice (binárním dělením v čase $O(\log n)$) rozmístěnými ve vzdálenosti $n/2p$ od sebe
4. průsečíky promítneme (horizontálně/vertikálně) na strany matice a podle toho rozkouskujeme $C$ i $D$ na $p$ částí (označených např. $C_1$ až $C_p$ resp. $D_1$ až $D_p$)
5. $i$-té vlákno sekvenčně mergne $C_i$ a $D_i$, čímž vznikne $X_i$
6. zřetězme $X_1 \dots X_p$ → máme seřazené pole

![](../../Assets/Pasted%20image%2020250606202744.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250321140150.png)
![](../../Assets/Pasted%20image%2020250321140158.png)
![](../../Assets/Pasted%20image%2020250321140204.png)

<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1779300070717-->
END

---

<!--
Original Flashcard ID: 1746599653860
-->

START
NI-SZZ


Jak funguje **merge sort** s $p$-cestným paralelním slučováním? (obecná myšlenka)

Back:

**Myšlenka:**

1. Rozsekáme vstupní pole na $n/p$ stejně velkých částí $S_1 \dots S_p$
2. Každé vlákno sekvenčně seřadí svoji část $S_i$ ($O(\frac n p \log \frac n p)$)
3. Potom začne $p$-cestné slučování

**p-cestné slučování**
Funguje podobně jako 2-cestné, ale obecněji:

1. Každé vlákno si najde **pole rozdělovačů** pomocí `Splitters_by_Rank(S, my_id*n/p)`
2. Na základě rozdělovačů si do pomocného pole (v `my_tuple[my_id]`) nahraje úseky z $S_0 \dots S_1$ (na obrázku jsou úseky označeny $\tau_i$)
3. Do pole $B$ pak na danou pozici nahraje sekvenčně mergnuté pomocné pole (merge je jako normální, ale nemergujou se 2 pole, ale p polí)

![](../../Assets/Pasted%20image%2020250606203342.png)

<!-- DetailInfoStart -->

1. Každé vlákno si stejně jako u 2-cestného najde **rozdělovač** (tam to byly ty průsečíky s lomennou čárou), který mi v každém poli $S_1 \dots S_p$ označí část $\tau_i$, kterou bude $i$-té vlákno zpracovávat. Zde bude rozdělovač **vektor** bodů v poli(to jsou jakoby průměty toho rozdělovače do těch částí pole). To najde funkce `Splitters_by_Rank(S,my_id*n/p)`.
	- Tyto části $\tau_i$ jsou pro každé vlákno **stejně velké**.
	- Pro všechny prvky $\tau_i$ platí, že jsou menší než $\tau_{i-1}$ (díky tomu až slijeme pole tak bude opět seřazené)
2. Každé vlákno pak sekvenčně sloučí všechny svoje části v $\tau_i$
3. Tyto části pak dáme za sebe a získáme seřazené pole

Podrobnější vysvětlení:

1. vstupní pole se rozřezá na pravidelné $p$-tiny
2. každé vlákno sekvenčně seřadí svoji $p$-tinu ($O(\frac n p \log \frac n p)$)
3. každé vlákno vypočítá svůj vektor rozdělovačů (jeden rozdělovač v každé seřazené $p$-tině) pomocí $\log n$ provedení $p$ instancí binárního vyhledávání ($O(p \log \frac n p \log n)$), funkce `Splitters_by_Rank(S,my_id*n/p)`
4. každé vlákno si z každé $p$-tiny vyřízne jeden úsek mezi svým a sousedním rozdělovačem
5. každé vlákno $p$-cestně sloučí svých $p$ úseků do vyhrazené části výstupu ($O(\frac n p \log p)$)

- pro malá $p$ a velká $n$ složitostně dominuje krok 2 → celková složitost je $O(\frac n p \log \frac n p)$
- na konci kroků 2 a 3 na sebe musí vlákna počkat (`barrier`)

![](../../Assets/Pasted%20image%2020250321140228.png)
![](../../Assets/Pasted%20image%2020250321140233.png)
![](../../Assets/Pasted%20image%2020250321140238.png)

<!-- DetailInfoEnd -->

Tags: otazka16
<!--ID: 1779300070720-->
END

---

<!--
Original Flashcard ID: 1749235012473
-->

START
NI-SZZ


Jaká je složitost u paralelního p-cestného MergeSortu?

Back:

- Každé vlákno seřadí svoje pole $(O(\frac n p \log \frac n p))$
- Každé vlákno provede SplittersByRank $O(p \log \frac n p \log n)$
- Každé vlákno p-cestně sloučí výsledná pole $O(\frac n p \log p)$

$$T(n,p) = O\left( \frac n p \log \frac n p + p \log \frac n p \log n + \frac n p \log p \right)$$

Pro malá $p$ a velká $n$ dominuje úvodní seřazení a celková složitost je $O(\frac n p \log \frac n p)$

Tags: otazka16
<!--ID: 1779300070723-->
END

---

START
NI-SZZ

Co je to QuickSort?

Back:

- Rekurzivní algoritmus typu Rozděl a panuj

![](../../Assets/Pasted%20image%2020260601093645.png)
<!--ID: 1780493530624-->
END

---

START
NI-SZZ

Co je to Merge Sort?

Back:

- Rekurzivní algoritmus typu Rozděl a panuj

![](../../Assets/Pasted%20image%2020260601093704.png)
<!--ID: 1780493530627-->
END

---

START
NI-SZZ

Jak vypadá varianta QuickSort algoritmu: **Lomuto**?

**Fungování**

Cílem funkce `seq_partition_L` je vzít zadanou část pole, vybrat jeden referenční prvek (zvaný **pivot**) a přeskládat pole tak, aby:

1. Všechny prvky **menší** než pivot byly přesunuty nalevo od něj.
2. Všechny prvky **větší nebo rovny** pivotu zůstaly napravo od něj.
3. Samotný pivot skončil na své definitivní, správné pozici v setříděném poli.

**Shrnutí**

- **Výhoda:** Je velmi snadné na pochopení a implementaci (kód je velmi kompaktní)
- **Nevýhoda:** Obecně provádí více prohazování (swapů) než alternativní Hoareovo schéma. Je také náchylnější k degradaci výkonu (na složitost $O(n^2)$), pokud pole obsahuje velké množství identických prvků nebo pokud je pole již předem setříděné.

Back:

![](../../Assets/Pasted%20image%2020260601094140.png)
<!--ID: 1780493530630-->
END

---

START
NI-SZZ

Jak vypadá varianta QuickSort algoritmu: **Hoare**?

**Fungování**

Algoritmus hledá zleva prvky, které jsou "příliš velké" (patří napravo od pivota), a zprava prvky, které jsou "příliš malé" (patří nalevo). Když najde jeden takový na levé straně a druhý na pravé, jednoduše je mezi sebou prohodí. Tím se pole rychleji uspořádá.

**Srovnání**

- **Výhoda Hoareho (Efektivita):** Hoareovo schéma dělá v průměru **až třikrát méně prohazování (swapů)** než Lomuto. Proto se v knihovnách používá právě Hoare (nebo jeho varianty). Mnohem lépe také zvládá pole, kde je spousta stejných hodnot.
- **Nevýhoda Hoareho (Složitost):** Hoareovo schéma je náchylnější na tzv. _off-by-one errors_ (chyby o jedničku) – např. závěrečná korekce `j++`. Lomuto se mnohem snáze implementuje a pamatuje.

Back:

![](../../Assets/Pasted%20image%2020260601094239.png)
<!--ID: 1780493530633-->
END

---


