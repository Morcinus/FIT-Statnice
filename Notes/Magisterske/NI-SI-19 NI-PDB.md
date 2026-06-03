---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-19 NI-PDB

> NI-SI-19 (NI-PDB)
> OLTP vs. OLAP databáze. Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky.

## OLTP vs. OLAP databáze

<!--
Original Flashcard ID: 1728921214695
-->

START
NI-SZZ

Co je to **OLTP**?

Back:

OLTP =  *Online Transaction Processing*

**Charakteristika**
- Většina aplikací.
- Systémy pro **operativní zpracování transakcí**
- Rychlé, krátké transakce, např. vkládání, aktualizace a mazání dat.
- Hodně uživatelů **čte** a **mění** data.
- Např.: KOS, e-shop
<!--ID: 1779128799848-->
END

---

<!--
Original Flashcard ID: 1728921214697
-->

START
NI-SZZ

Co je to **OLAP**?

Back:

OLAP = *Online Analytical Processing*

**Charakteristika**
- Systémy optimalizované pro **analytické zpracovávání**, zaměřené na efektivní **čtení a analýzu** velkého množství dat
- Málo klientů
- **Dlouhé dotazy**, optimalizace pro **čtení a agregace**.
- Data nebývají "hezky" uspořádána (podle 3NF).. Typicky tam bývá hodně redundance, díky čemuž je čtení vysoce efektivní (ale zápis je pain in the ass)
- Např. business intelligence, reportování, analytické systémy
<!--ID: 1779128799851-->
END

---

<!--
Original Flashcard ID: 1735205748921
-->

START
NI-SZZ

Na jaký typ systémů (OLTP nebo OLAP) se využívají benchmarky TPC-C nebo TPC-E?

Back:

Na **OLTP**
<!--ID: 1779128799853-->
END

---

## Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky

<!--
Original Flashcard ID: 1735205748903
-->

<!-- quality: expanded -->

START
NI-SZZ

Jaké jsou typy bechmarků a co znamenají?

Back:

- **microbenchmark** – zaměřuje se na konkrétní aspekt databázového systému (např. práce s cache, jenom insert příkazy, jenom update příkazy)
- **komplexní benchmarky** – testují celý systém v reálném scénáři (např. TPC-C, TPC-E, TPC-H); musí být **dobře definované**, srozumitelné a mít **příběh/use case**
<!--ID: 1779128799859-->
END

---

<!--
Original Flashcard ID: 1735205748906
-->

START
NI-SZZ

Co je **TPC**?

Back:

**Transaction Processing Council** (něco jako W3C ale pro databáze)

- skupina lidí a firem, které se vyjadřují k tomu, jak by se měly sestavovat a provádět benchmarky (a další věci kolem databází)

<!-- ExampleStart -->

Členové jsou např. Microsoft, Lenovo, Cisco, Nvidia, AMD atd.

<!-- ExampleEnd -->
<!--ID: 1779128799861-->
END

---

<!--
Original Flashcard ID: 1735205748908
-->

START
NI-SZZ

Jak funguje TPC-C benchmark?

Back:

- Máme nějaký obchod s databází
- Nad ním máme jasně zadefinované operace a transakce
- Je definovaná zátěž té databáze a jednotlivá data

**Následně**:

- Spustí se simulace, která to bude škálovat a zatěžovat
	- Tím postupně získávám informace o tom, jak moc lze databázi škálovat atd.
- Jakmile naškáluju až do limitu mého hardwaru, nechám to chvíli bežet a zaznamenám výsledky benchmarku

<!-- ImageStart -->

**Takto vypadá da databáze**
![](../../Assets/Pasted%20image%2020241208133108.png)

![](../../Assets/Pasted%20image%2020241208133101.png)

<!-- ImageEnd -->
<!--ID: 1779128799864-->
END

---

<!--
Original Flashcard ID: 1735205748911
-->

START
NI-SZZ

Jaké jsou metriky TPC-C bechmarku, které se sledují? (2)

Back:

- **tpmC** - new-order transaction ratepři
	- Měří hrubý výkon (propustnost) systému.
	- Maximálním zatížení databáze, kolik jsem schopný zpracovat nových objednávek
- **Price/tpmC**
	- celkové náklady na vlastnictví systému v poměru k jeho výkonu


<!--ID: 1779128799866-->
END

---

<!--
Original Flashcard ID: 1735205748913
-->

START
NI-SZZ

Jaké jsou typy transakcí v TCP-C benchmarku? (5)

Back:

- New order
- payment
- delivery
- order-status
- stock-level
<!--ID: 1779128799869-->
END

---

<!--
Original Flashcard ID: 1735205748916
-->

START
NI-SZZ

Jak funguje simulace v TPC-C?

Back:

Mám různé transakce (new-order) atd. Mám simulaci zákazníka (terminál), ten s určitou náhodností posílá requesty:

1. Nějaká šance, že pošle konkrétní dotaz (new order, payment atd.)
2. Nějakou dobu "přemýšlí" nad objednávkou
3. Potom pošle request

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241208133525.png)

<!-- ImageEnd -->
<!--ID: 1779128799872-->
END

---

<!--
Original Flashcard ID: 1735205748918
-->

START
NI-SZZ

Jaká je kritika TPC-C benchmarku?

Back:

TPC-C je **zastaralý a příliš jednoduchý** – malá DB, málo typů transakcí, neodpovídá moderním OLTP systémům; proto se používá spíše **TPC-E**.
<!--ID: 1779128799875-->
END

---

<!--
Original Flashcard ID: 1735205748923
-->

START
NI-SZZ

Na jaké téma je zaměřený **TPC-E**?

Back:

Jako příklad je obchodování společnosti, která se zabývá obchodováním s akciema a managování uživatelských účtů.
<!--ID: 1779128799877-->
END

---

<!--
Original Flashcard ID: 1735205748926
-->

START
NI-SZZ

Jaké metriky se sledují u benchmarku TPC-E?

Back:

- **TPsE** - transactions per second u **jakékoliv** transakce
- **Price/TPsE**


<!--ID: 1779128799880-->
END

---

<!--
Original Flashcard ID: 1735205748929
-->

START
NI-SZZ

Jak se liší TPC-E od TPC-C?

Back:

**TPC-E** je **složitější a modernější** OLTP benchmark – větší rozmanitost transakcí, simulace brokerage firmy (obchodování s akciemi, správa účtů); **TPC-C** je starší a jednodušší (obchodní sklad).

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241220111540.png)
![](../../Assets/Pasted%20image%2020241220111612.png)

<!-- DetailInfoEnd -->
<!--ID: 1779128799883-->
END

---

<!--
Original Flashcard ID: 1735205748934
-->

START
NI-SZZ

Jaký je příklad OLAP benchmarku?

Back:

**TPC-H** – komplexní **OLAP** benchmark nad datovým skladem fixní velikosti.
<!--ID: 1779128799888-->
END

---

<!--
Original Flashcard ID: 1735205748936
-->

START
NI-SZZ

Jaký je velký rozdíl TPC-H benchmarku oproti těm ostatním?

Back:

U **TPC-H** (OLAP) je databáze **fixní velikosti** (Size v GB/TB) – na rozdíl od OLTP benchmarků (TPC-C/E), které se **škálují** a hledají meze výkonu.
<!--ID: 1779128799890-->
END

---

<!--
Original Flashcard ID: 1735205748939
-->

START
NI-SZZ

Jaké metriky se měří u TPC-H bechmarku?

Back:

- **QphH@Size** - Composite Query-per-Hour performance metric
	- Jedná se o kombinaci průměru dvou odlišných testů – hrubý výkon pro jednoho uživatele, propustnost pro X uživatelů
- **Price/QphH@Size** - Price/Performance metric

*Velikost (Size) je klíčová. Metriky se chovají jinak na 100 a 1000 GB*

$Size$ je velikost databáze.

<!-- DetailInfoStart -->

Size typicky jsou desítky GB až 1 TB cca

<!-- DetailInfoEnd -->
<!--ID: 1779128799893-->
END

---

<!--
Original Flashcard ID: 1737106145206
-->

START
NI-SZZ

Charakterizujte **micro benchmark** v databázích.

Back:

- **Testované aspekty:**
	- Rychlost jednotlivých operací (např. čas potřebný k vložení jednoho záznamu, čtení z databáze, atd.).
	- Latence a propustnost při konkrétních operacích.
- **Výhody:**
	- Poskytuje detailní informace o výkonu jednotlivých operací nebo komponent databázového systému.
	- Usnadňuje porovnání výkonu mezi různými implementacemi nebo konfiguracemi pro konkrétní operace.
- **Nevýhody:**
	- Výsledky jsou často vysoce specifické a nemusí odrážet skutečný výkon systému v reálných aplikacích.
	- Nezohledňuje komplexní interakce mezi více operacemi nebo systémy.
<!--ID: 1779128799896-->
END

---


START
NI-SZZ

Charakterizujte **complex benchmark** v databázích. 

Back:

- **Testované aspekty:**
	- Výkon při běhu celé aplikace nebo systému.
	- Zátěžová testování při vysokém počtu uživatelů nebo požadavků.
	- Dlouhodobá stabilita a odolnost systému.
	- Měření latence a propustnosti v reálných podmínkách.
- **Výhody:**
	- Poskytuje ucelený pohled na výkon databázového systému v reálných podmínkách.
	- Zohledňuje vliv více operací a interakcí mezi součástmi systému.
- **Nevýhody:** - Může být složitější na nastavení a vyžaduje složitější testovací scénáře. - Výsledky mohou být ovlivněny externími faktory, jako jsou konfigurace hardwaru, síťové podmínky a další.
<!--ID: 1779721643779-->
END

---

<!--
Original Flashcard ID: 1737106145212
-->

START
NI-SZZ

Vysvětlete princip benchmarku **TPC-C**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží na **OLTP**:

- Máme nějaký obchod s databází
- Nad ním máme jasně zadefinované operace a transakce
- Je definovaná zátěž té databáze a jednotlivá data

**Následně**:

- Spustí se simulace, která to bude škálovat a zatěžovat
	- Tím postupně získávám informace o tom, jak moc lze databázi škálovat atd.
- Jakmile naškáluju až do limitu mého hardwaru, nechám to chvíli bežet a zaznamenám výsledky benchmarku

**Metriky**:

- **tpmC** - new-order transaction rate = při maximálním zatížení databáze, kolik jsem schopný zpracovat nových objednávek
- **Price/tpmC** - kolik mě jedna nová objednávka stojí peněz


<!--ID: 1779128799901-->
END

---

<!--
Original Flashcard ID: 1737106145214
-->

START
NI-SZZ

Vysvětlete princip benchmarku **TPC-E**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží na **OLTP**:

Jako příklad je obchodování společnosti, která se zabývá obchodováním s akciema a managování uživatelských účtů.

TPC-E je složitější, je tam větší rozmanitost transakcí atd.

Metriky:

- **TPsE** - transactions per second u **jakékoliv** transakce
- **Price/TPsE


<!--ID: 1779128799904-->
END

---

<!--
Original Flashcard ID: 1737106145217
-->

START
NI-SZZ

Vysvětlete princip benchmarku **TPC-H**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží pro OLAP
Máme databázi fixní velikosti

Máme tyto metriky:

- **QphH@Size** - Composite Query-per-Hour performance metric
- **Price/QphH@Size** - Price/Performance metric; Size je velikost databáze.


<!--ID: 1779128799906-->
END

---
