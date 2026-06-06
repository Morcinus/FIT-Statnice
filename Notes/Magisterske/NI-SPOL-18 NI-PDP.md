---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-18 NI-PDP

> NI-SPOL-18 (NI-PDP)
> Programování nad distribuovanou pamětí, programový model MPI (vícevláknové procesy, komunikátory, 2-bodové blokující a neblokující komunikační operace, kolektivní operace), paralelní násobení hustých matic, paralelní mocninná metoda.

<!--
TODO:
- tady by bylo fajn ještě přihodit jednu kartičku na vysvětlení co jsou MPI_Message objekty, aby šlo pochopit co je MPI_Improbe
-->

## Programování nad distribuovanou pamětí

<!--
Original Flashcard ID: 1746518365264
-->

START
NI-SZZ


Definice: **MPI**

Back:

- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
  - jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

![](../../Assets/Pasted%20image%2020250330101300.png)

Tags: otazka17
<!--ID: 1779300071033-->
END

---

<!--
Original Flashcard ID: 1746518365267
-->

START
NI-SZZ


Jak se liší OpenMP a MPI?

Back:

V MPI jsou **knihovní funkce** a ne direktivy.

- **OpenMP** = API pro programování **vícevláknových** aplikací na **jednom uzlu**
	- direktivy a funkce, přepínač překladače, přímé spuštění, komunikace pomocí sdílené paměti, proměnné mohou být sdílené
- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
	- jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330101553.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1779300071036-->
END

---

<!--
Original Flashcard ID: 1746518365277
-->

START
NI-SZZ


Na kolika jádrech lze maximálně pustit OpenMP vs MPI program? Kolik mají programy maximálně paměti?

Back:

![](../../Assets/Pasted%20image%2020250330102935.png)

Tags: otazka17
<!--ID: 1779300071039-->
END

---

<!--
Original Flashcard ID: 1746518365280
-->

START
NI-SZZ


Jak se liší využívání **sdílené/lokální paměti** v **MPI** a **OpenMP**?

Back:

OpenMP = mohou mít **sdílenou paměť**
MPI = komuinikují pomocí **zpráv**, všechny **proměnné jsou privátní**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103108.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1779300071042-->
END

---

## Programový model MPI (vícevláknové procesy, komunikátory, 2-bodové blokující a neblokující komunikační operace, kolektivní operace)

<!--
Original Flashcard ID: 1746518365282
-->

START
NI-SZZ


Jaké jsou možnosti tvorby programů MPI+OpenMP? Je vhodné MPI+OpenMP kombinovat? (3)

Back:

- **Model pouze MPI** - na každém **jádru/CPU/uzlu** běží 1 nebo několik MPI procesů které se **nedělí** na vlákna.
- **Model MPI+OpenMP** - na každém **uzlu/CPU** běží 1 nebo několik MPI procesů, které se pomocí OpenMP dělí na vlákna, která běží na **jádrech**.
- **Hybrid** - 1 OpenMP vlákno na jádro dává u hodně aplikací lepší výkon než MPI model s 1 procesem na jádro.

dnešní clustery mají vícejádrová CPU → OpenMP a MPI je výhodné kombinovat

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103143.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1779300071044-->
END

---

<!--
Original Flashcard ID: 1746518365285
-->

START
NI-SZZ


Jaká je typická architektura MPI programů? Jaký přístup je typicky lepší? (2)

Back:

- **1 MPI proces na výpočetní uzel** - proces se rozdělí na vlákna aby odpovídala počtu jader výpočetního uzlu
- **1 MPI proces na CPU** - proces se rozdělí na vlákna aby odpovídala počtu jader v CPU.

Druhý přístup má často lepší výkon, protože je lepší přístup k datům, protože vlákna sdílejí hlavní paměť.

![](../../Assets/Pasted%20image%2020250330103159.png)

Tags: otazka17
<!--ID: 1779300071051-->
END

---

<!--
Original Flashcard ID: 1746518365287
-->

START
NI-SZZ


Jakými způsoby se dá nastavit míra spolupráce **MPI a OpenMP**? (4)

Back:

Pro spuštění spolupráce je třeba zavolat `MPI_Init_thread` a vybrat míru spolupráce:

- `MPI_THREAD_SINGLE` → žádné dělení na vlákna
- `MPI_THREAD_FUNNELED` → jen hlavní vlákno volá MPI (jednoportový model)
- `MPI_THREAD_SERIALIZED` → volání MPI je kritická sekce (jednoportový model)
- `MPI_THREAD_MULTIPLE` → všechna vlákna volají MPI bez omezení (všeportový model)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250330103220.png)
![](../../Assets/Pasted%20image%2020250330103232.png)

<!-- ExampleEnd -->

Tags: otazka17
<!--ID: 1779300071055-->
END

---

<!--
Original Flashcard ID: 1746518365290
-->

START
NI-SZZ


Co dělá funkce `MPI_Init_thread`?

Back:

"Očuchá" systém a zjistí, co je k dispozici.

Tags: otazka17
<!--ID: 1779300071058-->
END

---

<!--
Original Flashcard ID: 1746518365295
-->

START
NI-SZZ


Jaké jsou verze MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103318.png)
<!--ID: 1779300071061-->
END

---

<!--
Original Flashcard ID: 1746518365301
-->

START
NI-SZZ


Co jsou skupiny procesů v MPI?

Back:

- Každý MPI proces spadá do aspoň jedné skupiny procesů
- Procesy v rámci skupiny jsou číslovány (`rank`) od 0
- Existuje skupina co obsauje všechny procesy
- Můžeme vytvářet nové skupiny

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103334.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071064-->
END

---

<!--
Original Flashcard ID: 1746518365305
-->

START
NI-SZZ


Co jsou komunikátory v MPI? Co je intra a inter komunikátor? Jaký je default intra-komunikátor?

Back:

- Každá MPI funkce má jako parametr **komunikátor**
- Komunikátor je množina procesů, v rámci níž probíhá komunikace
- **Intra-komunikátor** je komunikátor asociovaný s konkrétní **skupinou procesů**
- `MPI_COMM_WORLD` je předdefinovaný intra komunikátor pro všechny procesy
- **Inter-komunikátor** asociovaný s dvěma skupinami, určuje komunikaci procesů mezi těmito skupinami

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103347.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071067-->
END

---

<!--
Original Flashcard ID: 1746518365308
-->

START
NI-SZZ


Jak funguje `MPI_Comm_rank`?

Back:

![](../../Assets/Pasted%20image%2020250330103404.png)

```c++
int proc_num;
MPI_Comm_Rank(MPI_COMM_WORLD, &proc_num);
```

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250330103424.png)

<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1779300071070-->
END

---

<!--
Original Flashcard ID: 1746518365311
-->

START
NI-SZZ


Jak funguje `MPI_Comm_size`?

Back:

![](../../Assets/Pasted%20image%2020250330103417.png)

```c++
int num_procs;
MPI_Comm_Size(MPI_COMM_WORLD, &num_procs);
```

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250330103424.png)

<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1779300071072-->
END

---

<!--
Original Flashcard ID: 1746518365314
-->

START
NI-SZZ


Jak se liší **2-bodové** vs **kolektivní komunikační** operace?

Back:

![](../../Assets/Pasted%20image%2020250330103445.png)

Tags: otazka18
<!--ID: 1779300071075-->
END

---

<!--
Original Flashcard ID: 1746518365317
-->

START
NI-SZZ


Jak se liší **blokující** vs **neblokující** komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330103501.png)

Tags: otazka18
<!--ID: 1779300071078-->
END

---

<!--
Original Flashcard ID: 1746518365319
-->

START
NI-SZZ


Jak funguje základní **2-bodová komunikace** mezi procesy?

Back:

- Zdrojový proces volá `MPI_Send` kde určí cílový proces
- Cílový proces volá `MPI_Recv` kde určí zdrojový proces

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103533.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071081-->
END

---

<!--
Original Flashcard ID: 1746518365322
-->

START
NI-SZZ


Jaká je syntax funkce `MPI_Send`? (6 parametrů)

Back:

`MPI_Send(*buf, count, datatype, dest, tag, comm)`

- `buf` - ukazatel na data (proměnnou/pole)
- `count` - počet posílaných dat (1 pro proměnnou nebo počet prvků pole)
- `datatype` - datový typ `MPI_Datatype` (např. `MPI_INT`)
- `dest` - `rank` (číslo) cílového procesu v rámci komunikátoru
- `tag` - značka zprávy
- `comm` - komunikátor (např. `MPI_COMM_WORLD`)

pokud je count > 1, musí být všechny prvky za sebou a stejného typu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103551.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071084-->
END

---

<!--
Original Flashcard ID: 1746518365325
-->

START
NI-SZZ

Jaká je syntaxe funkce `MPI_Recv`? (7)

Back:

`MPI_Recv(*buf, count, datatype, source, tag, comm, *status)`

- `buf` - ukazatel na data kam se budou ukládat (proměnnou/pole)
- `count` - počet přijímaných dat (1 pro proměnnou nebo počet prvků pole)
- `datatype` - datový typ `MPI_Datatype` (např. `MPI_INT`)
- `source` - `rank` (číslo) zdrojového procesu v rámci komunikátoru (např. `MPI_ANY_SOURCE`)
- `tag` - značka zprávy (např. `MPI_ANY_TAG`)
- `comm` - komunikátor (např. `MPI_COMM_WORLD`)
- `status` - ukazatel na **stavový objekt**

pokud je count > 1, musí být všechny prvky za sebou a stejného typu

- `datatype` je typu `MPI_Datatype` (např. MPI_INT, lze vytvořit vlastní)
- `source` může být `MPI_ANY_SOURCE`, `tag` může být `MPI_ANY_TAG`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103609.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071087-->
END

---

<!--
Original Flashcard ID: 1746518365327
-->

START
NI-SZZ


Co je přesně `MPI_Datatype`?

Back:

Specifikace datového typu přenášených hodnot.

MPI definuje pro základní datové typy: `MPI_CHAR`, `MPI_INT`, `MPI_UNSIGNED_LONG` apod.

Dají se vytvořit nové pro struktury pomocí `MPI_Type_create` (pro primitivní) nebo `MPI_Type_create_struct` (pro struct) atd.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103639.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071089-->
END

---

<!--
Original Flashcard ID: 1746518365330
-->

START
NI-SZZ


Jak se dá přenášet větší množství dat u 2 bodové komunikace?

Back:

Na místo:

- `*buf` dám ukazatel na pole
- `count` dám na počet prvků

Pozor, všechny prvky musí být stejného `MPI_Datatype`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103702.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071092-->
END

---

<!--
Original Flashcard ID: 1746518365333
-->

START
NI-SZZ


Jak volají MPI funkce `MPI_Send` a `MPI_Recv` **zdrojový** a **cílový proces** u 2-bodové komunikace?

Back:

- **Zdrojový proces** zavolá `MPI_Send` s `dest` nastaveným na číslo cílového procesu
- **Cílový proces** zavolá `MPI_Recv` se `source` nastevným na číslo zrojového procesu nebo s `MPI_ANY_SOURCE` pro přijetí zprávy od libovolného procesu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330103722.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071095-->
END

---

<!--
Original Flashcard ID: 1746518365336
-->

START
NI-SZZ


Jak fungují **značky přenášených dat**? (tag)

Back:

Odesílatel nastaví `tag` typicky na nějaký `int`.

Příjemce může přijmout zprávu konkrétního tagu (např. tag `0`) nebo libovolný tag `MPI_ANY_TAG`.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330103937.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071097-->
END

---

<!--
Original Flashcard ID: 1746518365339
-->

START
NI-SZZ


Jak funguje **Stavový objekt** v 2-bodové komunikaci? 
Co z něj můžem získat za **informace**? (3)
Jak můžeme **status ignorovat**?

Back:

Alokujeme **stavový objekt** `MPI_Status status` a do `MPI_Recv` se passne `&status`.

Lze z něj získat:

- `status.MPI_SOURCE` - rank zdrojového procesu
- `status.MPI_TAG` - tag přijaté zprávy
- Pomocí funkce `MPI_Get_count(*status, datatype, *count)` počet přijatých prvků

Pokud mě status nezajímá, lze do `*status` předat `MPI_STATUS_IGNORE`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330104003.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071100-->
END

---

<!--
Original Flashcard ID: 1746518365342
-->

START
NI-SZZ


Na co se dá využít dobře **stavový objekt**?

Back:

Příjemce zná maximální délku zprávy, ale může přijít kratší - on pak může délku zjistit po přijetí.

Potom může zmenšit dané pole, aby odpovídalo skutečným prvkům

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330104023.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071103-->
END

---

<!--
Original Flashcard ID: 1746518365345
-->

START
NI-SZZ


Jak se dá implementovat Master-Slave program v MPI?

Back:

- Pokud `proc_num == 0` (jsme master)
	- Uděláme cyklus, kde každému workerovi pošleme zprávu s naším `TAG_WORK`
	- Pak pokud máme working slaves, tak čekáme na příjem zprávy `MPI_Recv` s `TAG_DONE`. Pokud zbývá práce, tak to pošleme tomu workerovi. Pokud už není práce, tak mu pošleme zprávu s `TAG_TERMINATE`
- Pokud `proc_num != 0` (jsme slave)
	- Ve smyčce vždy čekáme na `MPI_Recv` zprávu
		- Pokud je zpráva `TAG_WORK`, tak začnem pracovat s těmi daty a po dokončení pošleme `TAG_DONE`
		- Pokud je zpráva `TAG_TERMINATE`, tak vyskočíme z cyklu a ukončíme se

Pozn. ty tags jsou námi vytvořené konstanty (třeba intový)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330104118.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071106-->
END

---

<!--
Original Flashcard ID: 1746518365348
-->

START
NI-SZZ


Co jsou **komunikační módy** a jaké jsou komunikační módy blokujících operací? (4)

Back:

Komunikační mód určuje, kdy nastane návrat z blokující funkce.

- **standard mode** (`MPI_Send`) → MPI rozhodne jestli se použije režim `MPI_Bsend` nebo `MPI_Ssend`
- **buffered mode** (`MPI_Bsend`) → po zkopírování do systémového bufferu pro pozdější odesílání
	- jako jediný je lokální operací (= návrat nezávisí na připravenosti příjemce)
- **synchronous mode** (`MPI_Ssend`) → po iniciaci přijetí dat příjemcem
- **ready mode** (`MPI_Rsend`) → jako `Send`, ale vrátí chybu, pokud příjemce nezavolal `MPI_Recv`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330104144.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1779300071108-->
END

---

<!--
Original Flashcard ID: 1746518365351
-->

START
NI-SZZ


Kdo vybírá komunikační mód u `MPI_Send`?

Back:

Volba je na MPI knihovně

![](../../Assets/Pasted%20image%2020250330104832.png)
<!--ID: 1779300071111-->
END

---

<!--
Original Flashcard ID: 1749237784654
-->

START
NI-SZZ


Co jsou **neblokující komunikační operace**? Jaká je jejich **výhoda** oproti **blokujícím**?

Back:

- **neblokující** = MPI funkce se vrátí hned po iniciaci operace, dokončení je nutné testovat
- **výhoda oproti blokujícím**: snižují riziko deadlocku, páry volání se mohou překrývat

Tags: otazka19
<!--ID: 1779300071131-->
END

---

<!--
Original Flashcard ID: 1746518365369
-->

START
NI-SZZ


Jaké jsou **neblokující komunikační operace** v MPI? (5)

Back:

- `MPI_Isend`
- `MPI_Ibsend`
- `MPI_Issend`
- `MPI_Irsend`
- `MPI_Irecv`

![](../../Assets/Pasted%20image%2020250330105101.png)

Tags: otazka19
<!--ID: 1779300071134-->
END

---

<!--
Original Flashcard ID: 1749304503322
-->

START
NI-SZZ


Co je potřeba brát v potaz u **bufferu** při neblokujících MPI operacích?

Back:

**Buffer odesílaných dat** nelze po zavolání neblokující funkce **měnit**, dokud není **explicitně otestováno dokončení** dané operace.

**Buffer přijímaných dat** nelze po zavolání neblokující funkce **použít**, dokud není **explicitně otestováno dokončení** dané operace.

Tags: otazka19
<!--ID: 1779300071137-->
END

---

<!--
Original Flashcard ID: 1746518365372
-->

START
NI-SZZ


Jak funguje použití `MPI_Request`, `MPI_Test` a `MPI_Wait` u neblokujícího odesílání zpráv?

Back:

Neblokující funkci předáme navíc parametr `request` typu `MPI_Request`

Můžeme otestovat, zda je request vykonaný:

```c++
MPI_Status status; int flag;
MPI_Test(&request, &flag, &status);
```

Až otestujeme a bude `flag == 1` (tedy `true`), pak můžeme teprve buffer použít.

Nebo můžeme počkat na dokončení operace

```c++
MPI_Status status;
MPI_Wait(&request, &status)
```

Wait čeká a až skončí čekání, můžeme rovnou buffer použít

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105132.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1779300071140-->
END

---

<!--
Original Flashcard ID: 1749237784668
-->

START
NI-SZZ


Jak funguje `MPI_Testany` a `MPI_Waitany`?

Back:

`MPI_Testany` a `MPI_Waitany` pokud stačí libovolná operace z množiny (`MPI_Request[]`)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105326.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1779300071143-->
END

---

<!--
Original Flashcard ID: 1749237784671
-->

START
NI-SZZ


Jak funguje `MPI_Testall` a `MPI_Waitall`?

Back:

`MPI_Testall` a `MPI_Waitall` pokud potřebujeme všechny operace z množiny

`MPI_Waitall(3, requests, statuses)`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105326.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1779300071145-->
END

---

<!--
Original Flashcard ID: 1746518365375
-->

START
NI-SZZ


Jak lze získat stavový objekt u neblokujícího příjmu?

Back:

![](../../Assets/Pasted%20image%2020250330105228.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250330105242.png)

<!-- ExampleEnd -->
<!--ID: 1779300071148-->
END

---

<!--
Original Flashcard ID: 1746518365378
-->

START
NI-SZZ


Proč jsou důležité neblokující komunikační operace?

Back:

Při složitějších komunikacích může u blokujících operací dojít k zablokování (protože čekají v deadlocku). Neblokující operace se tomu můžou vyhnout, umožňují překrývání komkunikací.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105305.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1779300071151-->
END

---

<!--
Original Flashcard ID: 1746518365386
-->

START
NI-SZZ


Jak funguje funkce `MPI_Sendrecv`?

Back:

Můžeme  **najednou odeslat i přijmout zprávu** (zdrojový a cílový proces mohou být různé)

Nejprve jsou argumenty sendu (bez statusu) a pak receivu

![](../../Assets/Pasted%20image%2020260525160554.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105413.png)

![](../../Assets/Pasted%20image%2020250330105547.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1779300071159-->
END

---

<!--
Original Flashcard ID: 1746518365391
-->

START
NI-SZZ


Co je v MPI **úloha cyklický posuv**?

Back:

úloha: každý proces pošle zprávu pravému sousedovi (a poslední prvnímu)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105625.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1779300071165-->
END

---

<!--
Original Flashcard ID: 1749324086051
-->

START
NI-SZZ


Jak by se **neměl** řešit **cyklický posuv v MPI**?

Back:

špatně: zavolat ve všech vláknech MPI_Send a pak MPI_Recv → může vést k deadlocku

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105625.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1779300071168-->
END

---

<!--
Original Flashcard ID: 1746518365394
-->

START
NI-SZZ


Jakými **způsoby lze řešit cyklický posuv**? (4)

Back:

- nejprve posílají sudé procesy lichým, potom naopak
- pomocí `MPI_Bsend`
- pomocí `MPI_Isend`
- pomocí `MPI_Sendrecv`

Tags: otazka22
<!--ID: 1779300071171-->
END

---

<!--
Original Flashcard ID: 1749237784674
-->

START
NI-SZZ


Co je sondování příchodu zprávy?

Back:

Testování příchodu zprávy, aniž by byla přijata.

Tags: otazka20
<!--ID: 1779300071174-->
END

---

<!--
Original Flashcard ID: 1746518365398
-->

START
NI-SZZ


Jaké parametry má funkce `MPI_Probe`? (4) Jak to funguje?

Back:

Blokující funkce, která čeká dokud nepřijde zpráva, která by odpovídala daným parametrům. Jen detekuje, že zpráva přišla, ale nepřečte ji (zpráva tam zůstane).

`MPI_Probe(source, tag, comm, *status)`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105837.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1779300071177-->
END

---

<!--
Original Flashcard ID: 1746518365400
-->

START
NI-SZZ


Jaké parametry má funkce `MPI_Iprobe`? (5) Jak funguje?

Back:

Vrátí se hned, nastaví `flag=true`, pokud zpráva existuje.

`MPI_Iprobe(source, tag, comm, *flag, *status)`

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105837.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1779300071180-->
END

---

<!--
Original Flashcard ID: 1746518365403
-->

START
NI-SZZ


Jaké parametry má funkce `MPI_Improbe`? (6) Jak funguje?

Back:

`MPI_Message message`
`MPI_Improbe(source, tag, comm, *flag, *message, *status)`

Pokud existuje přijatelná zpráva, v `message` se vrátí handle na tuto zprávu, kterou pak může přijmout `MPI_Mrecv()`.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330105956.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1779300071182-->
END

---

<!--
Original Flashcard ID: 1746518365406
-->

START
NI-SZZ


Na co se dají **využít funkce** pro testování příchodu zprávy? (2)

Back:

1. **Přijímání "volitelných zpráv"** - např. předčasné ukončení výpočtu při nalezení řešení jiným procesem
2. **Zjištění velikosti zprávy** před alokací bufferu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250330110024.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1779300071185-->
END

---

<!--
Original Flashcard ID: 1746599652334
-->

START
NI-SZZ


Jaké 4 skupiny jsou **kolektivních komunikačních operací**?

Back:

- **OAB** - one-to-all broadcast (`MPI_Bcast`)
- **MC** - multicast (`MPI_Bcast`)
- **OAS** - one to all scatter (`MPI_Scatter`)
- **AOG** - all-to-one gather (`MPI_Gather`)

Scatter rozesílá všem individuálně. Broadcast vysílá všem

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419121501.png)

<!-- DetailInfoEnd -->

Tags: otazka33
<!--ID: 1779300071188-->
END

---

<!--
Original Flashcard ID: 1746599652342
-->

START
NI-SZZ


Jaké jsou typy komunikace **všichni všem**?

Back:

- **AAB** - all to all broadcast
	- **AAG** - all to all gather (`MPI_AllGather`)
- **AAS** - all to all scatter (`MPI_Alltoall`)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419121523.png)

<!-- DetailInfoEnd -->

Tags: otazka33
<!--ID: 1779300071191-->
END

---

<!--
Original Flashcard ID: 1746599652653
-->

START
NI-SZZ


Jsou v MPI **blokující** nebo **neblokující** verze **kolektivních komunikačních operací**?

Back:

Jsou tam **blokující** i **neblokující**.

Neblokující mají před názvem `I`, např. `MPI_Ibcast`

V PDP jsme brali pak jen ty **blokující**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130348.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071194-->
END

---

<!--
Original Flashcard ID: 1746599652660
-->

START
NI-SZZ


Jak funguje `MPI_Bcast` (OAB)? Jaké má parametry? (5)

Back:

Jeden proces rozešle stejnou zprávu všem v daném komunikátoru.

`MPI_Bcast(*data, count, datatype, root, comm)`

kde `root` je id odesílajícího procesu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130428.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071197-->
END

---

<!--
Original Flashcard ID: 1746599652668
-->

START
NI-SZZ


Jak funguje `MPI_Gather` (AOG)? Jaké má parametry? (8)

Back:

Proces dostane zprávu od všech ostatních procesů (včetně sebe sama!)

`MPI_Gather(*sendbuf, sendcount, sendtype, *recvbuf, recvcount, recvtype, root, comm)`

Každý proces nahraje data do `sendbuf` (a `recv` parametry ignorují).

Ten přijímající proces si vyzvedne data v `recvbuf`.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130446.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071200-->
END

---

<!--
Original Flashcard ID: 1746599652676
-->

START
NI-SZZ


Jak funguje `MPI_Gatherv` (AOG)

Back:

Proces `root` sbírá od každého procesu různý počet dat určený v poli `recvcounts[]`.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130503.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071203-->
END

---

<!--
Original Flashcard ID: 1746599652683
-->

START
NI-SZZ


Jak funguje `MPI_Allgather` (AAG/AAB)

Back:

Podobně jako `MPI_Gather`, jen sbírání provádějí všichni.

(Varianty: `MPI_Allgather`, `MPI_Alligather`, `MPI_Allgatherv`, `MPI_Alligatherv`)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130523.png)
<!-- DetailInfoEnd -->

Znázornění funkce `MPI_Alligather`:
![](../../Assets/Pasted%20image%2020260525163815.png)
<!--ID: 1779300071206-->
END

---

<!--
Original Flashcard ID: 1746599652695
-->

START
NI-SZZ


Jak funguje `MPI_Scatter`? (OAS) Jaké má parametry? (8)

Back:

Proces `root` odešle data všem (včetně sebe).

Parametry jsou stejné jako u `MPI_Gather`:
`MPI_Scatter(*sendbuf, sendcount, sendtype, *recvbuf, recvcount, recvtype, root, comm)`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130545.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071209-->
END

---

<!--
Original Flashcard ID: 1746599652703
-->

START
NI-SZZ


Jak funguje `MPI_Alltoall` (AAS)

Back:

Každý proces pošle každému zprávu.

`MPI_Alltoall(*sendbuf, sendcount, sendtype, *recvbuff, recvcount,recvtype, comm)`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419130606.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071212-->
END

---

## Paralelní násobení hustých matic

<!--
Original Flashcard ID: 1779299206134
-->

START
NI-SZZ

Jak funguje paralelní násobení hustých matic pomocí Cannonova algoritmu?

Back:

1. **Rozdělení matic $A$ a $B$ do $p$ stejných bloků** (říká se tomu šachovnice, ale je to spíš jako mřížka, protože nezáleží na barvách políček). Každý procesor dostane na starost v každé matici stejný blok $A_{j,k}, B_{j,k}, C_{j,k}$ a bude mít za úkol po zbytek algoritmu vypočíst $C_{j,k}$
2. **Zarovnání $A$**: $i$-tý řádek $A$ se posune o $i$ pozic doleva (cyklický posuv)
3. **Zarovnání $B$**: $i$-tý sloupec $B$ se posune o $i$ pozic nahoru (cyklický posuv)
4. Poznámka: díky zarovnáním tak bude mít každý procesor u sebe blok jako kdyby začínal násobit ty matice $A$ a $B$
5. **Cyklus $\sqrt{p}$ krát:**
	1. Každý procesor vypočte $C_{j,k} \texttt{+=} A_{j,k}\times B_{j,k}$
	2. Všechny procesory udělají posuv bloku $A$ doleva
	3. Všechny procesory udělají posuv bloku $B$ nahoru
	4. Tzn. každý procesor dostane správné bloky k dalšímu výpočtu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260525121407.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
Pozn. tenhle obrázek z přednášky mi přišel teda dost neintuitivní. Takže se na něj radši nedívejte :D - Morčín
![](../../Assets/Pasted%20image%2020260520194300.png)
<!-- ImageEnd -->
<!--ID: 1779300071215-->
END

---

<!--
Original Flashcard ID: 1779299206142
-->

START
NI-SZZ

Jaké vlastnosti má **Cannonův algoritmus**? (3)

Back:

- **systolický algoritmus** (informace se posílají až ve chvíli, kdy je to potřeba)
- **paměťově optimální** (každý dílek se v každé iteraci vyskytuje v systému právě jednou)
- **lineárně škálovatelný**
<!--ID: 1779300071218-->
END

---

<!--
Original Flashcard ID: 1779299206144
-->

START
NI-SZZ

Jaká síť je ideální pro **Cannonův algoritmus**?

Back:

ideální síť je **toroid** (abychom mohli posílat doleva a nahoru “přes okraj”)
<!--ID: 1779300071221-->
END

---

<!--
Original Flashcard ID: 1779299206147
-->

START
NI-SZZ

Pomocí jakých MPI operací se implementuje **Cannonův algoritmus**? (4)

Back:

- `MPI_Cart_create` → přeorganizuje komunikátor do 2D toroidu
- `MPI_Cart_coords` → každý proces zjistí svoje souřadnice v toroidu
- `MPI_Cart_shift` → vypočítá ranky uzlů “o $i$ doleva” a “o $i$ nahoru”
- `MPI_Sendrecv_replace` → odešle blok, rovnou přijme jiný a uloží ho na stejné místo
<!--ID: 1779300071224-->
END

---

## Paralelní mocninná metoda

<!--
Original Flashcard ID: 1779299206150
-->

START
NI-SZZ

Co je algoritmus **paralelní mocninná metoda**?

Back:

**Iterační algoritmus**, který ke čtvercové matici $A$ najde **dominantní vlastní číslo** a **odpovídající vlastní vektor**.

dominantní vlastní číslo = největší v absolutní hodnotě
<!--ID: 1779300071227-->
END

---

<!--
Original Flashcard ID: 1779299206153
-->

START
NI-SZZ

Jak funguje Mocninná metoda s **náhodným mapováním matice**?

Back:

**náhodné mapování matice**
1. každý proces si vezme libovolné prvky z $A$
2. každý vynásobí své prvky příslušným prvkem $x$ a ukládá do svého lokálního $y$
3. `Allreduce` sesbírá z lokálních $y$ výsledný vektor $y$
4. každý proces si normalizuje $y$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260525121855.png)
![](../../Assets/Pasted%20image%2020260525121900.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071229-->
END

---

<!--
Original Flashcard ID: 1779299206156
-->

START
NI-SZZ

Jak funguje **Mocninná metoda s řádkovým mapováním matice**?

Back:

1. každý proces si vezme $n/p$ řádků z $A$
2. každý vynásobi své řádky a ukládá do svojí části $y$
3. `Allgather` sesbírá části $y$ rovnou do nového $x$
4. normalizuje se $x$
5. zkontroluje se kritérium konvergence a příp. se to celé opakuje znovu…

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260525121918.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071232-->
END

---

<!--
Original Flashcard ID: 1779299206159
-->

START
NI-SZZ

Jaká je výhoda **Mocninné metody s řádkovým mapováním matice**?

Back:

není potřeba paměť navíc pro $y$, experimentálně je to násobně rychlejší
<!--ID: 1779300071235-->
END

---

<!--
Original Flashcard ID: 1779299206162
-->

START
NI-SZZ

Jak funguje **Mocninná metoda se šachovnicovým mapováním**?

Back:

- $y$ žije na diagonále $A$

1. sloupcový `Bcast` rozdá části $y$ do všech řádků
2. každý proces vynásobí svůj dílek
3. řádkový `Reduce` sesbírá dílčí výsledky zpátky na diagonálu
4. procesy na diagonále normalizují $y$ pomocí `Allreduce`
5. zkontroluje se kritérium konvergence a příp. se to celé opakuje znovu…

- tzn. je potřeba komunikovat ve třech směrech (řádkově, sloupcově, po diagonále)

![](../../Assets/Pasted%20image%2020260520194609.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260525122018.png)
![](../../Assets/Pasted%20image%2020260525122027.png)
![](../../Assets/Pasted%20image%2020260525122031.png)
![](../../Assets/Pasted%20image%2020260525122036.png)
![](../../Assets/Pasted%20image%2020260525122041.png)
![](../../Assets/Pasted%20image%2020260525122045.png)
<!-- DetailInfoEnd -->
<!--ID: 1779300071237-->
END

---


START
NI-SZZ

Jaký je rozdíl mezi **lokální** a **nelokální** operací v MPI?

Back:

- **Lokální operace (nezávislá)** = Dokončení operace závisí **výhradně na stavu serveru (uzlu)**. Funkce k tomu, aby se úspěšně ukončila, nepotřebuje komunikovat přes síť s žádným jiným procesem.
- **Nelokální operace (závislá)** = Dokončení operace závisí na tom, **co udělá jiný MPI proces (často na vzdáleném serveru)**. Funkce "zablokuje" program a neskončí do té doby, dokud přes síť neproběhne potřebná akce nebo potvrzení.
<!--ID: 1780493530636-->
END

---

