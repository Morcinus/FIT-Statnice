---
created: 2024-06-08T18:47:46
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-11 OSY

> BI-WSI-SI-11
> 
> Principy, implementace a vlastnosti klasických souborových systémů/moderních souborových systémů založených na B-B/+-stromech (rozložení dat na disku, implementace souborů/adresářů, implementace v jádru OS).
### TODO
- doplnit detailnější informace o přímých adresách a nepřímých adresách dané úrovně u i-node např. jak jsou velké a kolik jich je

START
BI-SZZ

Co poskytuje **File System**?

Back:

FS poskytují abstrakci nad úložištěm dat
<!--ID: 1717961032421-->
END

---

START
BI-SZZ

Jak vidí **File System** uživatel?

Back:

- Uživatel data uložená v různých systémech souborů vidí jako:
	- jeden strom adresářů – Unix
	- několik stromů adresářů – Windows
- Adresáře pro něj představují homogenní strukturu
<!--ID: 1717961032424-->
END

---

START
BI-SZZ

K čemu slouží **soubor** a čím je **reprezentován**?

Back:

- **soubor** slouží k uložení informace/dat ve FS a k jejímu pozdějšímu použití
- **Reprezentován**:
	- jménem,
	- atributy,
	- obsahem.
<!--ID: 1717961032427-->
END

---

START
BI-SZZ

Jaké jsou atributy souborů? (4)

Back:

- **Typ:** obyčejný soubor, adresář, link,…
- **Vlastníci souboru:** uživatel, skupina, ostatní,..
- **Přístupová práva:** pro čtení, modifikaci a spuštění, setuid-bit, ACL práva,..
- **Různé časy:** čas přístupu, modifikace,..
<!--ID: 1717961032430-->
END

---

START
BI-SZZ

Jaké jsou 2 části **rozložení disku**?

Back:

Logický/fyzický disk je typicky rozdělen na několik částí, které obsahují informace/data s různým významem pro OS

**Části**
- **Disk label —** Nachází se na začátku disku a obsahuje informace o rozdělení disku na jednotlivé oblasti (_Partition table_), může také obsahovat zavaděč OS
- **Jednotlivé diskové oblasti (partitions/slices) —** Každá disková oblast obsahuje jeden FS
<!--ID: 1717961032433-->
END

---

START
BI-SZZ

Jaké je **rozložení dat** ve File Systému? (5)

Back:

- **boot block —** kód sloužící k zavedení OS
- **super block —** informace popisující konfiguraci FS
    - typ FS, velikost datových bloků
    - informace o celkové velikosti a aktuální obsazenosti FS (např. počet i-nodů, datových bloků, ...)
    - informace o diskových adresách důležitých struktur FS
- datové struktury pro **správu volného prostoru** (datových bloků, i-nodů, ...)
- datové struktury pro uložení **atributů souborů** (tabulka i-nodů, ...)
- **datové bloky**, do kterých se ukládá obsah souborů a adresářů
<!--ID: 1717961032436-->
END

---

START
BI-SZZ

Co je to **sektor**?

Back:

nejmenší adresovatelná jednotka datového úložiště (4 KB/512 B)
<!--ID: 1717961032439-->
END

---

START
BI-SZZ

Co je to a co obsahuje **datový blok**?

Back:

- velikost sektoru je obvykle moc malá, proto FS alokují po blocích (ve Windows _clusters)_
- obsahahuje obsah souborů/adresářů
<!--ID: 1717961032442-->
END

---

START
BI-SZZ

Jaké jsou **přístupy alokace** datových bloků? (2)

Back:

- alokace souvislých oblastí datových bloků
- alokace po jednotlivých datových blocích
<!--ID: 1717961032444-->
END

---

START
BI-SZZ

Co je alokace pomocí **souvislých oblastí datových bloků**? Jaké má **výhody** a **nevýhody**?

Back:

Všechny datové bloky tvořící soubor jsou umístěny vedle sebe.

- **výhody**
    - pro každý soubor si FS musí pamatovat malý počet informací
    - výborný výkon při sekvenčním přístupu a u velkých souborů
- **nevýhody**
    - je nutné pravidelně defragmentovat
- např. NTFS
<!--ID: 1717961032448-->
END

---

START
BI-SZZ

Co je **alokace souboru po jednotlivých datových blocích**? Jaké má **výhody** a **nevýhody**?

Back:

FS si musí pamatovat adresy všech bloků, kde je uložený obsah souboru

- **výhody**
    - dobrý výkon při náhodném přístupu a u malých souborů
- **nevýhody**
    - pro každý soubor si FS musí pamatovat velký počet informací
    - horší výkon při sekvenčním přístupu
<!--ID: 1717961032450-->
END

---

START
BI-SZZ

Jaké **struktury** se používají pro **uložení adres** datových bloků? (3)

Back:

- FAT (File Allocation Table)
- I-node (Index node)
- sdílené soubory
<!--ID: 1717961032453-->
END

---

START
BI-SZZ

Jakým způsobem funguje **FAT (File Allocation Table)**?

Back:

- tabulka obsahuje tolik řádek, kolik je datových bloků ve FS
- p1ro každý soubor si musíme pamatovat pouze adresu prvního bloku, adresy dalších bloků jsou uloženy ve FAT formou zřetězení
- informace o volných datových blocích se dají vyčíst přímo z FAT
- pro velké disky vzniká problém s velikostí FAT (čím větší disk, tím více bloků)
	- Šlo by teoreticky řešit zvětšením datových bloků, ale to se moc nestává z důvodu větší neefektivity ukládání malých souborů nebo větší fragmentace.

![](../Assets/Pasted%20image%2020240609183246.png)
<!--ID: 1717961032456-->
END

---

START
BI-SZZ

Co může obsahovat řádek FAT tabulky? (3 – vždy jedno z toho)

Back:

- **Free**: datový blok je volný,
- **Adresa**: adresa následujícího bloku, kde pokračuje obsah souboru,
- **EOF**: konec zřetězení
<!--ID: 1717961032458-->
END

---

START
BI-SZZ

Co je to **I-node (Index node)**?

Back:

-  datová struktura s fixní velikostí
- obsahuje atributy souboru/adresáře a adresy datových bloků, kde je uložen jeho obsah
<!--ID: 1717961032462-->
END

---

START
BI-SZZ

Jak funguje **I-node (Index node)**?

Back:

- každý soubor má jednu i-node
- při zápisu do souboru se postupně využívají přímé adresy, nepřímé adresy první, druhé a nakonec třetí úrovně v závislosti na velikosti souboru
- horší využití prostoru FS, protože část datových bloků se používá na metadata (bloky s adresami)
- samotná velikost i-nodu není závislá na velikosti FS nebo velikosti souboru

![](../Assets/Pasted%20image%2020240609183416.png)
<!--ID: 1717961032464-->
END

---

START
BI-SZZ

Jaké **typy adres** se využívají v **I-node**? (4)

Back:

- z důvodu adresace různě velkých souborů jsou zde uloženy čtyři typy adres:
    - **12 přímých adres**: ukazují přímo na datové bloky, kde je obsah souboru
    - **1 nepřímá adresa první úrovně**: ukazuje na blok, ve kterém jsou přímé adresy
    - **1 nepřímá adresa druhé úrovně**
    - **1 nepřímá adresa třetí úrovně**
<!--ID: 1717961032467-->
END

---

START
BI-SZZ

Jak **fungují** **sdílené soubory** a jaké jsou jejich **typy**?

Back:

- **Soft link:** odkaz na existující soubor/adresář je implementován pomocí cesty k souboru
- **Hard link:** implementován pouze u minimalistických adresářů přímo pomocí odkazu na "speciální datovou strukturu" (i-node/MFT položku)
<!--ID: 1717961032470-->
END

---

START
BI-SZZ

Jakým způsobem je uložen **obsah adresářů**?

Back:

- obsah adresářů je podobně jako obsah souborů uložen v jednom nebo několika datových blocích
<!--ID: 1717961032472-->
END

---

START
BI-SZZ

Jaké existují přístupy z hlediska implementace **obsahu adresářů**?

Back:

- adresář obsahuje **většinu informací** o souborech a podadresářích (jméno, atributy a adresy bloků s obsahem souboru)
	- Např. FAT32
- adresář obsahuje **minimum informací** (jméno a odkaz do "speciální" datové struktury (např. i-node v UFS nebo položka Master File Table v NTFS), ve které jsou uloženy ostatní informace)
<!--ID: 1717961032475-->
END

---

START
BI-SZZ

Jak jsou implementovány **systémy souborů** (file systémy) v OS? (5)

Back:

- Virtual File System (VFS)
- Filesystem in Userspace (FUSE)
- Block cache/Page cache
- Přednačítání datových bloků FS (Block Read Ahead)
- Žurnálovaný FS (Journaling FS)
<!--ID: 1717961032478-->
END

---

START
BI-SZZ

Co je to **Virtual File System (VFS)**?

Back:

- framework, v rámci kterého jsou v OS unixového typu implementovány konkrétní systémy souborů
- vrstva jádra OS, která představuje rozhraní mezi procesy a jednotlivými implementacemi konkrétních FS
<!--ID: 1717961032481-->
END

---

START
BI-SZZ

Co je to **Filesystem in Userspace (FUSE)**?

Back:

- rozhraní v OS unixového typu, které umožňuje neprivilegovaným uživatelům vytvářet své vlastní FS bez nutnosti modifikovat jádro OS
- nový FS je pomocí FUSE implementován jako proces, ve kterém musíme definovat standardní operace nad novým FS
- vhodný pro implementaci pseudo FS (FS, který existuje pouze v hlavní paměti) a data uložit prostřednictvím existujících FS
<!--ID: 1717961032484-->
END

---

START
BI-SZZ

Co je to **Block cache/Page cache**?

Back:

- množina nedávno používaných datových bloků z FS (obsah souborů/adresářů) uložená v hlavní paměti z důvodu zlepšení výkonu FS
- když proces čte obsah adresáře/souboru, OS hledá bloky (obsah) nejdříve v hlavní paměti – pokud zde nejsou, pak je načte z FS
<!--ID: 1717961032486-->
END

---

START
BI-SZZ

Jaké jsou typy cache u **Block cache/Page cache**?

Back:

- **write-behind cache:** modifikace je zapsána ihned do datového bloku v hlavní paměti a se zpožděním do FS (běžně používané u FS na interních datových úložištích)
- **write-through cache:** modifikace je současně zapsána do hlavní paměti i do FS (běžně používané u FS na přenosných datových úložištích typu flash-disk)
<!--ID: 1717961032489-->
END

---

START
BI-SZZ

Jak funguje **přednačítání datových bloků FS (Block Read Ahead)**?

Back:

- při požadavku čtení konkrétního datového bloku se z FS do paměti načte současně tento blok a několik následujících bloků
- tímto přístupem lze zlepšit např. sekvenční čtení nebo využítí datového úložiště typu RAID
<!--ID: 1717961032492-->
END

---

START
BI-SZZ

Jak funguje **žurnálový FS**?

Back:

- snaží se ochránit FS před nekonzistencí a ztrátou dat
- FS si alokuje na disku speciální oblast _journal_, do které si v předstihu zapíše záznam o změnách, které se budou následně provádět. Potom, co se změny úspěšně zapíší do FS, je záznam z journalu **odstraněn**
- v případě havarie se po zotavení systému přehrávají záznamy z journalu a FS se vrátí do konzistentního stavu
<!--ID: 1717961032494-->
END

---

START
BI-SZZ

Jak jsou implementovány moderní **File Systémy**? (co se většinou využívá?)

Back:

- při implementaci FS se používají
	- **B stromy**
	- **B+ stromy**
- většinou reprezentují kombinaci **SW RAIDu a FS**
- integrita dat – FS je neustále v konzistentním stavu (RAID, copy on write, checksums)
- podpora vytváření clonů a snapshotů
- podpora šifrování a komprese
- např. ZFS
<!--ID: 1717961032497-->
END

---

START
BI-SZZ

Co je to **B strom**?

Back:

- data v uzlech stromu tvoří uspořádanou posloupnost:
    - `p0, [k1, d1], p1, [k2, d2], p2, ...` (kořen/vnitřní uzel)
    - `[k1, d1], [k2, d2], ...` (list stromu)
- vložení/smazání/hledání prvku má časovou složitost O(log(N)), kde N je počet záznamů ve stromu
- uzly s klíči mohou být nahrány do paměti, zatímco data zůstávají na disku

![](../Assets/Pasted%20image%2020240609185919.png)
<!--ID: 1717961032500-->
END

---

START
BI-SZZ

Co je to **B+ strom**?

Back:

- na rozdíl od B stromů jsou v kořenu/vnitřních uzlech uloženy pouze klíče a odkazy na podstromy a v listech stromu jsou uloženy klíče s daty
- ve skutečnosti se realizuje tak, že je vždy ve všech listech uložen kromě vlastních klíčů a dat také odkaz (ukazatel) na následujícího sourozence

![](../Assets/Pasted%20image%2020240609185935.png)
<!--ID: 1717961032502-->
END

---

START
BI-SZZ

Jak funguje kombinace **kombinace SW RAIDu a FS**?

Back:

**Původní FS**
- vytvoří se z fyzických disků logický disk (Volume) s příslušnými vlastnostmi a v něm se následně vytvoří příslušný FS

**Moderní FS**
- SW RAID a FS implementovány jako celek (jedna SW vrstva)
- fyzické disky se zařadí do _poolu_, který představuje konkrétní typ RAIDu
- v rámci poolu se pak vytváří jednotlivé FS

_Detailnější info z přednášky:_
![](../Assets/Pasted%20image%2020240610152742.png)
<!--ID: 1717961032505-->
END

---

START
BI-SZZ

Jak funguje **copy on write**?

Back:

- původní data se nepřepisují, ale vytvoří se kopie, která se teprve modifikuje
- po provedení všech změn se atomicky přepíše ukazatel v Super bloku, takže je FS neustále konzistentní
<!--ID: 1717961032508-->
END

---

START
BI-SZZ

Jak funguje **zabezpečení dat** ve file systémech?

Back:

- klasické FS se spoléhají pouze na kontrolní součty, které zabezpečují obsah sektoru
- ZFS data authentication
    - kontrolní součty jsou umístěné v rodičovských metadatech
    - data a kontrolní součty jsou oddělené
<!--ID: 1717961032511-->
END

---