---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-12 NI-KOP

> NI-SPOL-12 (NI-KOP)
> Experimentální vyhodnocení algoritmů, zejména randomizovaných.

## Experimentální vyhodnocení algoritmů, zejména randomizovaných

<!--
Original Flashcard ID: 1728921215168
-->

START
NI-SZZ

Co je **kombinatorická matematika**?

Back:

Matika, co se zajímá o **konečné** a **diskrétní** problémy, které mají:

- konečný počet **proměnných**
- konečný počet **hodnot** každé proměnné

-> tzn. dá se to bruteforcenout (ale není to vždy nejefektivnější)

![](../../Assets/Pasted%20image%2020240923183912.png)

![](../../Assets/Pasted%20image%2020240923183924.png)
<!--ID: 1780152136964-->
END

---

<!--
Original Flashcard ID: 1728921215170
-->

START
NI-SZZ

Co je **kombinatorický problém**? (svými slovy)

Back:

Problém co můžu vyřešit **zkoušením různých možností**.
<!--ID: 1780152136975-->
END

---

<!--
Original Flashcard ID: 1728921215173
-->

START
NI-SZZ

Co je **heuristika**? (svými slovy)

Back:

**Způsob** průchodu těch kombinací.

Člověk si vymyslí "takhle by to mohlo fungovat" a tak to budu dělat.

**Negarantuje to optimum**.
<!--ID: 1780152136986-->
END

---

<!--
Original Flashcard ID: 1728921215176
-->

START
NI-SZZ

Co je **problém** a **instance**?

Back:

- **Problém** - obecný problém
- **Instance** - konkrétní případ toho problému

Např.
![](../../Assets/Pasted%20image%2020240923184031.png)
<!--ID: 1780152136997-->
END

---

<!--
Original Flashcard ID: 1728921215179
-->

START
NI-SZZ

Čím jsou charakterizovaný **problémy** (aka z čeho se skládá)? (5)

Back:

- **vstupní proměnné**
- **výstupní proměnné**
- **konfigurační proměnné** - parametry co ovlivňují strategii hledání řešení (např. maximální počet iterací v algoritmu - po 100 se to vypne)
- **omezení** - definuje co musí být splněno, aby řešení bylo považováno za správné (např. že nesmí přetéct batoh)
- (optional) **optimalizační kritérium** - definuje, které řešení je nejlepší. Typicky chceme něco minimalizovat nebo maximalizovat (např. maximalizace ceny věcí v batohu)

Např. u desky:
![](../../Assets/Pasted%20image%2020240923184136.png)
<!--ID: 1780152137009-->
END

---

<!--
Original Flashcard ID: 1728921215182
-->

START
NI-SZZ

Čím jsou charakterizovaný **instance problémů**? (1)

Back:

- **ohodnocení vstupních proměnných**

![](../../Assets/Pasted%20image%2020240923184125.png)

<!-- ExampleStart -->

Například u **problému batohu**:

- **proměnná**: "seznam věcí v batohu"
- **ohodnocení proměnných**: seznam věcí s konkretními cenami a váhami

Je to jako kdybych definoval funkci v programování:

- **proměnná** - to co je v parametru funkce
- **ohodnocení vstupní proměnné** - argument - to co konkrétně dávám do té funkce

<!-- ExampleEnd -->
<!--ID: 1780152137020-->
END

---

<!--
Original Flashcard ID: 1728921215185
-->

START
NI-SZZ

Definice: **Konfigurační proměnné** (jaké mají 3 vlastnosti)

Back:

![](../../Assets/Pasted%20image%2020240923184452.png)

<!-- ExampleStart -->

**Konfiguraní proměnná** - např. maximální počet iterací v algoritmu - potom se algoritmus zastaví

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Žádoucí vlastnosti konfiguračních proměnných:
![](../../Assets/Pasted%20image%2020240923185826.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137032-->
END

---

<!--
Original Flashcard ID: 1728921215188
-->

START
NI-SZZ

Definice: **Konfigurace**

Back:

![](../../Assets/Pasted%20image%2020240923184508.png)

<!-- ExplanationStart -->

**Konfigurace** je například množina věcí, kterou vložíme do batohu.

Každá konfigurace je **možné řešení** (to se uvidí, když se to ověří **omezením**)

Když spouštím ten algoritmus, tak to prochází jednotlivýma konfiguracema (kombinacema).

<!-- ExplanationEnd -->
<!--ID: 1780152137044-->
END

---

<!--
Original Flashcard ID: 1728921215191
-->

START
NI-SZZ

Co je **omezení/omezující kritérium**?

Back:

Omezující kritérium říká (omezuje), **který výstup je řešením**.
<!--ID: 1780152137055-->
END

---

<!--
Original Flashcard ID: 1728921215193
-->

START
NI-SZZ

Musí mít problém vždy **omezující kritéria**?

Back:

**Ano.**

Jinak bych nevěděl, co je správným řešením.
<!--ID: 1780152137066-->
END

---

<!--
Original Flashcard ID: 1728921215200
-->

START
NI-SZZ

Co je **problém batohu**?

Back:

![](../../Assets/Pasted%20image%2020241001163035.png)

<!-- InformallySaidStart -->

Jsem zloděj, vejdu do baráku a mám batoh, co mám omezenou kapacitu. Každá věc v baráku má cenu a váhu. Snažím se vybrat věci za největší cenu.

<!-- InformallySaidEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923185901.png)
![](../../Assets/Pasted%20image%2020240923184550.png)
![](../../Assets/Pasted%20image%2020240923184558.png)
![](../../Assets/Pasted%20image%2020240923185102.png)
![](../../Assets/Pasted%20image%2020240923185111.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137077-->
END

---

<!--
Original Flashcard ID: 1728921215204
-->

START
NI-SZZ

Jakou **složitost** má **konstrukční problém batohu**?

Back:

$n \cdot \log n$

Bylo by to $n$, ale protože to musím sesortit při té konstrukci, je to $n \cdot \log n$
<!--ID: 1780152137088-->
END

---

<!--
Original Flashcard ID: 1728921215207
-->

START
NI-SZZ

Co je **problém obdélníkového pokrytí**? (rectangle tiling problem)

Back:

**Vstupní proměnné**:

- Máme $n \times n$ matici, kde je na každé pozici kladné číslo.
- Máme $p$ - počet obdélníků

**Omezení**:

- zakreslit do matice obdélníky, které se nepřekrývají

**Optimalizační kritérium**

- Váha obdélníku je součet čísel v obdélníku
- **Optimální řešení** je takové, kde **největší váha z obdélníků** je co **nejmenší**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241001165737.png)
![](../../Assets/Pasted%20image%2020241001170140.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137099-->
END

---

<!--
Original Flashcard ID: 1728921215210
-->

START
NI-SZZ

Definice: **Řešení**

Back:

![](../../Assets/Pasted%20image%2020240923185653.png)
<!--ID: 1780152137111-->
END

---

<!--
Original Flashcard ID: 1728921215215
-->

START
NI-SZZ

Definice: **Optimální řešení**

Back:

![](../../Assets/Pasted%20image%2020240923185721.png)
<!--ID: 1780152137123-->
END

---

<!--
Original Flashcard ID: 1728921215218
-->

START
NI-SZZ

Definice: **Suboptimální řešení**

Back:

![](../../Assets/Pasted%20image%2020240923185747.png)
<!--ID: 1780152137134-->
END

---

<!--
Original Flashcard ID: 1728921215227
-->

START
NI-SZZ

Co je **rozhodovací problém**, **konstruktivní problém**, **enumerační problém**, **početní problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190452.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923190537.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137146-->
END

---

<!--
Original Flashcard ID: 1728921215232
-->

START
NI-SZZ

Co je **optmalizační konstruktivní problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190610.png)
<!--ID: 1780152137157-->
END

---

<!--
Original Flashcard ID: 1728921215235
-->

START
NI-SZZ

Co je **optimalizační evaluační problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190631.png)

<!-- ExampleStart -->

Např. snažíme se najít **délku** nejkratší cesty v grafu.

$C(Y)$ - délka cesty
$R(I,Y)$ - omezení na to, co považuju za cestu od toho jednoho uzlu k druhému

<!-- ExampleEnd -->
<!--ID: 1780152137169-->
END

---

<!--
Original Flashcard ID: 1728921215238
-->

START
NI-SZZ

Co je **optimalizační rozhodovací problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190644.png)
<!--ID: 1780152137181-->
END

---

<!--
Original Flashcard ID: 1728921215241
-->

START
NI-SZZ

Co je **optimalizační početní problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190703.png)
<!--ID: 1780152137192-->
END

---

<!--
Original Flashcard ID: 1728921215244
-->

START
NI-SZZ

Co je **optimalizační enumerační problém**?

Back:

![](../../Assets/Pasted%20image%2020240923190721.png)
<!--ID: 1780152137203-->
END

---

<!--
Original Flashcard ID: 1728921215247
-->

START
NI-SZZ

Jak souvisí **rozhodovací problémy a jazyky**?

Back:

Rozhodovací problém = jazyk

![](../../Assets/Pasted%20image%2020240923190757.png)
<!--ID: 1780152137219-->
END

---

<!--
Original Flashcard ID: 1728921215250
-->

START
NI-SZZ

Co je **problém SAT**? (obecně)

Back:

U Booleovy formule řeším, jestli je splnitelná

Pozn. Formule typicky bývá v konjunktivním normálním tvaru
<!--ID: 1780152137232-->
END

---

<!--
Original Flashcard ID: 1728921215253
-->

START
NI-SZZ

Co je problém Booleovy formule ($k$-SAT)?

Back:

SAT, kde je formule v konjunktivní normální formě a každá klauzule má **právě $k$ literálů**

Např. 2-SAT, 3-SAT atd.

<!-- ExampleStart -->

**2-SAT** bude řešit například tohle: $(x_1 \lor \neg x_2) \land (\neg x_1 \lor x_2)$

<!-- ExampleEnd -->
<!--ID: 1780152137244-->
END

---

<!--
Original Flashcard ID: 1728921215256
-->

START
NI-SZZ

Co je na výstupu, pokud řeším **rozhodovací problém**?

Back:

**Odpověď ano/ne**
<!--ID: 1780152137255-->
END

---

<!--
Original Flashcard ID: 1728921215258
-->

START
NI-SZZ

Co je na výstupu, pokud řeším **konstruktivní problém**?

Back:

**Vykonstruované řešení** (konkrétní **konfigurace**)
<!--ID: 1780152137266-->
END

---

<!--
Original Flashcard ID: 1728921215262
-->

START
NI-SZZ

Vysvětli, co dělají jednotlivé verze SATu:

- **Rozhodovací verze**
- **Konstruktivní verze**
- **Enumerační verze**
- **Početní verze**

Back:

![](../../Assets/Pasted%20image%2020240923191404.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923191522.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137278-->
END

---

<!--
Original Flashcard ID: 1728921215265
-->

START
NI-SZZ

Vysvětli, co dělají jednotlivé optimalizační verze SATu:

- **optimalizační rozhodovací verze**
- **optimalizační konstruktivní verze**
- **optimalizační enumerační verze**

Back:

![](../../Assets/Pasted%20image%2020240923191453.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020240923191522.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137289-->
END

---

<!--
Original Flashcard ID: 1728921215270
-->

START
NI-SZZ

Co je **max-weighted sat a max sat?**

Back:

- **Max weighted SAT** - snaží se maximalizovat počet splněných klauzulí, nezajímá ho splnění celé formule
- **Max SAT** - maximalizuje počet jedniček v řešení při splnění celé formule

![](../../Assets/Pasted%20image%2020240923191647.png)
![](../../Assets/Pasted%20image%2020240923191704.png)
<!--ID: 1780152137300-->
END

---

<!--
Original Flashcard ID: 1728921215276
-->

START
NI-SZZ

Co je **off-line** a **on-line** optimalizace?

Back:

![](../../Assets/Pasted%20image%2020240923192112.png)
<!--ID: 1780152137312-->
END

---

<!--
Original Flashcard ID: 1728921215279
-->

START
NI-SZZ

Co je **multikriteriální optimalizace** a **multimodální optimalizace**?

Back:

- **multikriteriální optimalizace** - mám více kritérií a chci vybírat různé možnosti
  - Např. spotřeba paliva v autobuse vs spokojení zákazníci
- **multimodální optimalizace** - hledám různá suboptimální řešení
  - Např. různé trasy pro plánování MHD řidičů, aby nebyli v práci znuděný (i když by bylo efektivnější, kdyby každý řidič jezdil furt tu samou trasu)

![](../../Assets/Pasted%20image%2020240923192147.png)
<!--ID: 1780152137323-->
END

---

<!--
Original Flashcard ID: 1728204724953
-->

START
NI-SZZ


Jaké provádíme typy **hodnocení algoritmů**? Co každý typ znamená? (2 typy)

Back:

- **Teorie**
  - Abychom algoritmus srovnali s dosud známými algoritmy, s optimem
  - Abychom porozuměli algoritmu
- **Aplikace**
  - Abychom určili vhodnost algoritmu pro zamýšlenou funkci

<!-- ExampleStart -->

- **Teorie** - horní asymptotická mez výpočetní složitosti
- **Aplikace** - průměrná výpočetní složitost na instancích

<!-- ExampleEnd -->
<!--ID: 1780152137335-->
END

---

<!--
Original Flashcard ID: 1728205164742
-->

START
NI-SZZ


Jaké **2 typické analytické odpovědi** se snažíme získat při hodnocení algoritmů?

Back:

- **Nejhorší případ, asymptotické meze**
- **Průměrný případ**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241006132512.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137346-->
END

---

<!--
Original Flashcard ID: 1728241521223
-->

START
NI-SZZ


Proč se často hodnotí algoritmy experimentálně?

Back:

Protože jsou algoritmy **často moc složité** na to, aby se jednoduše určovala horní mez a další vlastnosti.
<!--ID: 1780152137358-->
END

---

<!--
Original Flashcard ID: 1728222348180
-->

START
NI-SZZ


Co nás typicky zajímá za **otázky** při dělání experimentů? (3)
Co z toho vyvodíme?

Back:

- **Složitost**
  - Z hlediska teorie
  - Z hlediska nasazení
- **Kvalita** řešení
- **Porozumění** - např. proč na určitých instancích algoritmus pracuje špatně

Otázky jsou typicky **závislost něčeho na něčem**

- Např. výpočetní čas na velikosti instance
<!--ID: 1780152137369-->
END

---

<!--
Original Flashcard ID: 1728241521238
-->

START
NI-SZZ


Jaké jsou **kroky experimentu**? (4)

Back:

Mám otázku co chci zjistit, provedu

1. **Plán experimentu**
2. **Provedení experimentu**
3. **Sběr dat** _(např. na instanci 324 to mělo nějakou kvalitu)_
4. **Interpretace výsledku** _(tzn. zobecním ta data)_

Tím získám odpověď.
<!--ID: 1780152137380-->
END

---

<!--
Original Flashcard ID: 1728241521244
-->

START
NI-SZZ


Jaké metriky nás zajímají u **experimentu**?

Back:

- **Metriky vstupu**
- **Metriky výstupu**

<!-- ExplanationStart -->

**Metriky** jsou závislosti nějakých veličin na jiných. Např. časová závislost běhu programu na velikosti vstupu.

<!-- ExplanationEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241006183047.png)

<!-- ImageEnd -->
<!--ID: 1780152137390-->
END

---

<!--
Original Flashcard ID: 1728241521250
-->

START
NI-SZZ


Když hledáme metriku, hledáme typicky nějakou která **závisí** nebo **nezávisí** na detailech implementace?

Back:

Hledáme tu, která **nezávisí** na detailech implementace.

<!-- ExampleStart -->

Například **počet vyhodnocených konfigurací**.

![](../../Assets/Pasted%20image%2020241006185004.png)

<!-- ExampleEnd -->
<!--ID: 1780152137401-->
END

---

<!--
Original Flashcard ID: 1728241521256
-->

START
NI-SZZ


Jaké jsou 2 typy vstupních metrik?

Back:

- Ty o kterých **víme** _(Např. u problému batohu víme počet věcí v batohu)_
- Ty o kterých **nevíme** _(Např. poměr věcí v batohu vůči jejich cenám)_

Ty co **nevíme** můžeme **objevovat**.
<!--ID: 1780152137412-->
END

---

<!--
Original Flashcard ID: 1728241521262
-->

START
NI-SZZ


Co je metrika **Fázový přechod**?

Back:

**Pravděpodobnost splnitelnosti formule v závislosti na poměru počtu klauzulí k počtu proměnných.**
<!--ID: 1780152137422-->
END

---

<!--
Original Flashcard ID: 1728241521269
-->

START
NI-SZZ


Co se rychle rozpozná u **fázového přechodu**?

Back:

- **Snadno řešitelné instance** vyřešeny rychle
- **Neřešitelné instance** rozpoznány rychle

<!-- ExplanationStart -->

Proč se tomu říká fázový přechod?
Když ohřívám led, tak je furt led (první fáze), dokud nedosáhne nad 0 stupňů. Pak se z něj stane voda (druhá fáze).

<!-- ExplanationEnd -->

<!-- ImageStart -->

- Instance s malým poměrem počtu klauzulí k proměnným, jsou lehké na řešení.
- Tam kde je těch klauzulí spousta, tak se naopak dobře identifikuje, že to není řešitelný.

![](../../Assets/Pasted%20image%2020241006185826.png)

<!-- ImageEnd -->
<!--ID: 1780152137433-->
END

---

<!--
Original Flashcard ID: 1728241521278
-->

START
NI-SZZ


Jakými způsoby lze získávat instance problému?

Back:

- **Generováním instancí** - _sám si je nageneruju_
- **Sběrem instancí**
<!--ID: 1780152137444-->
END

---

<!--
Original Flashcard ID: 1728241521285
-->

START
NI-SZZ


Co musíme dodržet při **generování instancí** problému?

Back:

**Každá instance** se zadanou metrikou musí být **stejně pravděpodobná**.
<!--ID: 1780152137455-->
END

---

<!--
Original Flashcard ID: 1728241521293
-->

START
NI-SZZ


Co je **variance** v metrikách?

Back:

To jak moc se mi mohou lišit jednotlivé instance od sebe.

<!-- ExampleStart -->

Např. když chci mít graf s 5 uzlama, tak těch možností, jak ten graf bude vypadat je poměrně dost.

<!-- ExampleEnd -->
<!--ID: 1780152137465-->
END

---

<!--
Original Flashcard ID: 1728241521301
-->

START
NI-SZZ


Co znamená **potlačení variance**?

Back:

Tím, že nad **výstupními metrikami** z instancí provedu **statistické zpracování**, **potlačí** mi to ty variance, tedy nebude tolik vadit to, že se mi ty instance od sebe liší.

<!-- ExampleStart -->

Např. Když mám **velké množství** čísel, tak můžu statisticky získat **průměr** a nevadí mi tolik, jak moc se třeba čísla od sebe liší (tzn. jestli se zrovna vygenerovaly "hloupě" nebo "dobře").

<!-- ExampleEnd -->
<!--ID: 1780152137476-->
END

---

<!--
Original Flashcard ID: 1728241521306
-->

START
NI-SZZ


Jaké jsou kroky **obecného vyhodnocení algoritmu**? (3+2)

Back:

**Získání instancí**

1. Mám **charakterizaci instancí**
2. Měním si nějakou zadanou **vstupní metriku**
3. Pro každou **hodnotu vstupní metriky** mi generátor dá nějakou **instanci**

**Měření výstupní metriky**

1. **Pustím algoritmus** _nad instancemi_
2. **Měřím výstupní metriku**
3. Z výstupní metriky **udělám statistiku**, _abych potlačil varianci v instancích_
4. Udělám **interpretaci** statistiky
<!--ID: 1780152137486-->
END

---

<!--
Original Flashcard ID: 1728241521313
-->

START
NI-SZZ


Jaké **statistiky** se pro **jednu hodnotu zadané metriky** často používají? (2)

Back:

- **průměr**
- **medián**
<!--ID: 1780152137497-->
END

---

<!--
Original Flashcard ID: 1728241521319
-->

START
NI-SZZ


**Co bych měl** z hlediska **statistiky** udělat na **datech výstupní metriky**?

Back:

1. Měl bych zjistit **statistické rozložení** dat _(uniformní, Gaussovo atd.)_.
2. Z toho pak **spočíst** **rozptyl** a **směrodatnou odchylku**.

Díky tomu výsledky měření **zkomprimuju** do pár informací (rozložení, rozptyl, odchylka).
<!--ID: 1780152137508-->
END

---

<!--
Original Flashcard ID: 1728241521324
-->

START
NI-SZZ


K čemu mi je získaná **statistika** při **hodnocení algoritmu**?

Back:

Když mám dva algoritmy $A$ a $B$, tak je pak mohu srovnávat.
<!--ID: 1780152137518-->
END

---

<!--
Original Flashcard ID: 1728241521331
-->

START
NI-SZZ


Jakými způsoby můžu srovnávat statistiky algoritmů?

Back:

Na základě **parametrů rozložení** (rozptyl, odchylka)

<!-- ExampleStart -->

- Když má $A$ lepší všechny parametry, je $A$ lepší
- Jinak nevíme
<!-- ExampleEnd -->

Na základě **dominance**

<!-- ExampleStart -->

- Když $A$ je pro každou instanci lepší nebo stejně dobrý než $B$, je $A$ lepší algoritmus
<!-- ExampleEnd -->

Je možné, že **nevíme**. Pak je třeba hlubší analýza.
<!--ID: 1780152137529-->
END

---

<!--
Original Flashcard ID: 1728241521339
-->

START
NI-SZZ


Jak se liší v **hodnocení randomizovaných algoritmů** od normálních algoritmů?

Back:

Měřené výstupní metriky jsou **náhodná čísla** a to **i na jedné instanci**.

<!-- ExplanationStart -->

To vypadá následovně:

1. **Mám jednu instanci**
2. **Pustím algoritmus**, ten má v sobě nějaký zdroj náhodnosti
3. **Dostanu metriku**, která i na jedné instanci je **náhodná**

Dále postupuju stejně jako u normálního algoritmu.

<!-- ExplanationEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241006194252.png)

<!-- ImageEnd -->
<!--ID: 1780152137540-->
END

---

<!--
Original Flashcard ID: 1728241521346
-->

START
NI-SZZ


Co jsou **primární metriky**?

Back:

Přímo měřené hodnoty.

<!-- ExampleStart -->

Čas běhu algoritmu.

<!-- ExampleEnd -->
<!--ID: 1780152137550-->
END

---

<!--
Original Flashcard ID: 1728241521352
-->

START
NI-SZZ


Co jsou **sekundární metriky** (=kvantitativní srovnání)?

Back:

To co získám statistickou metodou z primárních.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241006194753.png)

<!-- ExampleEnd -->
<!--ID: 1780152137561-->
END

---

<!--
Original Flashcard ID: 1728241521360
-->

START
NI-SZZ


Co je **vizualizace** výstupních metrik?

Back:

Různé grafy, histogramy atd.
<!--ID: 1780152137571-->
END

---

<!--
Original Flashcard ID: 1728241521369
-->

START
NI-SZZ


Mám **randomizovaný algoritmus**, co pustím s **různými parametry** _(p=0.1,p=0.4)_ nad jednou instancí. Z toho dostanu následující grafy výstupních metrik.

**Co budu dělat dál?**

![](../../Assets/Pasted%20image%2020241006195042.png)

Back:

1. Sestavím si z hodnot **distribuční funkci**.
2. Z toho pak vykoukám závěr.

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241006195347.png)

Na pravém grafu např. vidím, že jedna volba parametru je rychlejší pro hodnoty menší než $35$ a druhá volba pro hodnoty větší.

![](../../Assets/Pasted%20image%2020241006195737.png)

<!-- ExampleEnd -->
<!--ID: 1780152137582-->
END

---

<!--
Original Flashcard ID: 1728241521376
-->

START
NI-SZZ


Co je **korekce na úspěšnost**?

Back:

Normálně distribuční funkce nebere v potaz neúspěšné pokusy.

**Jak to vyřeším:**
Spočtu pravděpodobnost, že algoritmus **úspěšně skončil** nejvýše v tom kroku.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241006195706.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137592-->
END

---

<!--
Original Flashcard ID: 1728241521383
-->

START
NI-SZZ


Jak se liší v **hodnocení randomizovaných algoritmů na více instancích** od randomizovaných algoritmů **na jedné instanci**?

Back:

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241006195900.png)

<!-- ImageEnd -->
<!--ID: 1780152137603-->
END

---

<!--
Original Flashcard ID: 1728241521389
-->

START
NI-SZZ


Proč se u **randomizovaného algoritmu** na **více instancí** dělá **statistika dvakrát**?

![](../../Assets/Pasted%20image%2020241006195935.png)

Back:

Protože mám **dva zdroje variance**

- Randomizace v algoritmu
- Variance z jednotlivých instancí

Musím tedy provést **dvakrát potlačení variance**, tady provést "statistiku ze statistiky".
<!--ID: 1780152137614-->
END

---

<!--
Original Flashcard ID: 1728241521396
-->

START
NI-SZZ


Jak ověřím, jestli u **randomizovaného algoritmu** na **více instancích** mám **spolehlivá data**?

Back:

Buď zjistím, jestli mají výsledky stejné rozdělení (viz BI-PST).

Nebo pro **každou instanci** spustím algoritmus **několikrát** _(např. 4x)_ a pak spočtu diferenci _(tzn. jak moc se od sebe výsledky liší)_
<!--ID: 1780152137624-->
END

---

<!--
Original Flashcard ID: 1728241521404
-->

START
NI-SZZ


Co je **robustnost heuristiky**?

Back:

**Robustnost** = závislost práce heuristiky na **popisu instance**

<!-- ExampleStart -->

Když SAT solveru na vstupu přeházím pořadí proměnných ve formuli (a Booleva funkce zůstane stejná), SAT solver dá **jiné řešení** v **jiném čase**.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

- Často je důvodem nerobustnosti reprezentace množin **vektorem**.
- Když mám v algoritmu vybírat prvek pro zpracování, měl bych to vybírat **náhodně**

<!-- DetailInfoEnd -->
<!--ID: 1780152137635-->
END

---

<!--
Original Flashcard ID: 1728241521409
-->

START
NI-SZZ


Co například negativně ovlivňuje **robustnost heuristiky**? (2)

Back:

- Reprezentace množin **vektorem**.
- Když mám v algoritmu vybírat prvek pro zpracování, měl bych to vybírat **náhodně**. _Jinak to může v určitých případech být nerobustní_.
<!--ID: 1780152137645-->
END

---

<!--
Original Flashcard ID: 1728241521415
-->

START
NI-SZZ


Jak se měří **robustnost heuristiky**?

Back:

1. Mám **jednu instanci**
2. Vymyslím si **náhodnou perturbaci** = např. náhodné proházení vstupních prvků
3. Dostanu statistiku, **měřím, jak moc velkou varianci způsobily perturbace**

Když zjistím, že je variance velká, mám malou robustnost v daném případě.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241006202422.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

Pozor, všechny perturbace by měly být stejně pravděpodobný!

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241006202913.png)

<!-- ExampleEnd -->
<!--ID: 1780152137656-->
END

---

<!--
Original Flashcard ID: 1728241521421
-->

START
NI-SZZ


Proč nemůžu jednoduše zprůměrovat nebo udělat medián na datech založených na **sbírání instancí**?

Back:

Protože pak nemůžu **porovnávat algoritmy**, když by statistiky jiných algoritmů byly založené na jiných zdrojích instancí.

Formálně protože "**nemůžeme eliminovat neznámé zdroje variance**"

<!-- ExplanationStart -->

Např. já si udělám statistiku na instancích, na kterých můj algoritmus běží rychle a někdo jiný si udělá statistiku na instancích, na kterých to běží pomalu. Porovnávání těch statistik pak nedává smysl.

<!-- ExplanationEnd -->
<!--ID: 1780152137667-->
END

---

<!--
Original Flashcard ID: 1728241521427
-->

START
NI-SZZ


K čemu jsou dobré **standardní sady instancí**?

Back:

Můžu statistiky pro algoritmus dělat na základě standardizovaných sad instancí.

**Díky tomu pak můžu algoritmy porovnávat.**

<!-- ExampleStart -->

To pak umožňuje porovnávání algoritmů.

Např. můžu mít sadu instancí pro sortící algoritmy, SAT solvery atd.

<!-- ExampleEnd -->

<!-- OtherInfoStart -->

Různé sady jsou vhodné pro různé statistiky. Např. některé sady jsou sesbírány "z praxe" a některé jsou víc teoretické.

Když dělám pak algoritmus co se má používat v praxi, nemá třeba smysl ho pouštět na obřích teoretických instancích, na kterých reálně nikdy běžet nebude.

Je tedy třeba vybrat **vhodnou sadu instancí**

<!-- OtherInfoEnd -->
<!--ID: 1780152137698-->
END

---

<!--
Original Flashcard ID: 1728241521442
-->

START
NI-SZZ


Jaké klíčové vlastnosti by měl mít experiment?

Back:

- **Provedení** experimentu musí být **opakovatelné** _(aby se např. ověřilo, že v měření nebyla chyba)_
- **Sběr dat** musí umožnit **alternativní interpretaci** _(např. že algoritmus je hodně efektivní pro určitou podtřídu těch instancí)_
- **Prezentace experimentu** musí budit **důvěru** ve výsledek - Tzn. musí být kvalitní **návrh, interpretace** atd.
<!--ID: 1780152137709-->
END

---

<!--
Original Flashcard ID: 1728241521453
-->

START
NI-SZZ


Co je IMRaD?

Back:

Zaběhlý způsob **strukturování** experimentu
<!--ID: 1780152137720-->
END

---

<!--
Original Flashcard ID: 1728241521460
-->

START
NI-SZZ


Jaké části má **IMRaD**? (4)

Back:

- **Introduction** - _vylíčení situace, proč je třeba se něco dozvědět_
- **Methods** - popsání návrhu experimentu, použité instance a algoritmy
- **Results** - data, grafy
- **Discussion, Conclusion** - diskuze jestli je výsledek spolehlivý, závěr, odpověď na otázku

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241006205545.png)

<!-- ImageEnd -->

<!-- OtherInfoStart -->

Jak mít přesvědčivý experiment:
![](../../Assets/Pasted%20image%2020241006205811.png)
![](../../Assets/Pasted%20image%2020241006205906.png)

<!-- OtherInfoEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241006205646.png)
![](../../Assets/Pasted%20image%2020241006205655.png)
![](../../Assets/Pasted%20image%2020241006205706.png)
![](../../Assets/Pasted%20image%2020241006205714.png)
![](../../Assets/Pasted%20image%2020241006205726.png)

<!-- DetailInfoEnd -->
<!--ID: 1780152137732-->
END

---