---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-11 NI-NSS

> NI-SI-11 (NI-NSS)
> Teoretické základy evolvabiltních softwarových systémů: principy a zákony, stabilita systému, normalizované systémy, kombinatorický efekt, problematika modularity. Historie přístupu k evolvabilitě softwarových systémů.


## Teoretické základy evolvabiltních softwarových systémů

<!--
Original Flashcard ID: 1746599654337
-->

START
NI-SZZ


Co dělají obecně Normalized Systems Theory?

Back:

Studují, jak se velké **modulární struktury** chovají při **změnách**
<!--ID: 1779905421424-->
END

---

## Principy a zákony

<!--
Original Flashcard ID: 1746599654344
-->

START
NI-SZZ


Na jakých **principech** je postavená NS Theory? (2)

Back:

- **Stability** from systems theory
- **Entropy** from statistical thermodynamics
<!--ID: 1779905421441-->
END

---

<!--
Original Flashcard ID: 1746599654364
-->

START
NI-SZZ


Jaké jsou 4 hlavní principy, co zamezí Combinatorial Effects? Co se stane, když jakýkoliv princip poruším?

Back:

1. **Separation of concerns**
2. **Data version transparency**
3. **Action version transparency**
4. **Separation of state**

Když cokoliv z toho poruším, tak to vede k combinatorial effectu
<!--ID: 1779905421444-->
END

---

<!--
Original Flashcard ID: 1746518365546
-->

START
NI-SZZ


Jak funguje **Separation of Concerns** v kontextu NP?

Back:

V modulu/třídě by u sebe měly jen být funkce, které jsou related.

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250415141720.png)
![](../../Assets/Pasted%20image%2020250415141727.png)

<!-- ImageEnd -->
<!--ID: 1779905421447-->
END

---

<!--
Original Flashcard ID: 1746518365550
-->

START
NI-SZZ


Jak docílit **separation of concerns** prakticky? (3)

Back:

- **Identifikvat místa, která se budou často měnit**
- **Používat správně Encapsulation**
- **Mít v modulech/třídách jen věci, které jsou related**
<!--ID: 1779905421449-->
END

---

<!--
Original Flashcard ID: 1746518365553
-->

START
NI-SZZ


Co je **Action Version Transparency**? Jak to **aplikovat v praxi**? (2)

Back:

Různé funkce závisí na různých funkcích. Když změním jak funguje jedna funkce a interface není správně transparentní, musím změnit hromadu dalších funkcí

Jak to aplikovat v praxi:

- Buď máme **version transparent interface** = interface co se nemění
- Nebo máme **action versions** (tzn. neměníme existující funkce, ale přidáváme jejich nové verze - např. `CustomerV2`)

Pozn. není to jen v kódu. např. APIs to taky můžou dodržovat

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250415142052.png)
![](../../Assets/Pasted%20image%2020250415142217.png)

<!-- ImageEnd -->
<!--ID: 1779905421452-->
END

---

<!--
Original Flashcard ID: 1746518365555
-->

START
NI-SZZ


Co je **Data Version Transparency**? Jak to **aplikovat v praxi**? (2)

Back:

Máme různá data v aplikaci, která se předávají ve funkcích. Ty funkce jsou pak závislé na těch datech (na třídách například).

Když se například změní konstruktor a struktura dat, tak musím změnit všechny třídy, které s daty pracují

Jak to aplikovat v praxi:

- **Proper encapsulation**
- **Stamp coupling should be preferred** (tzn. neměl bych metodám předávat atomické data typy, ale celé objekty)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415142516.png)
![](../../Assets/Pasted%20image%2020250415142524.png)
![](../../Assets/Pasted%20image%2020250415142539.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421455-->
END

---

<!--
Original Flashcard ID: 1746518365558
-->

START
NI-SZZ


Co je **Separation of States**? Jak to **aplikovat v praxi**? (4)

Back:
Máme různé funkce. Když změním nějakou funkci (i když má dobrý interface), je furt možný, že v nějaké situaci budu muset měnit ostatní - například když přidám novou exception, kterou funkce může vyhazovat.

Např. mám funkci `getExchangeRate`, která je používaná na 100 místech v kódu. Pokud bych změnil implementaci tak, že funkce bude nově vyhazovat nějakou novou exception, i když budu používat hezký interfaces, tak budu muset udělat 100 změn v kódu. (viz obrázek 1).

Jak to aplikovat v praxi:

- **Musíme "vytáhnout" ten state management do jiné třídy**, která se o něj bude starat. Např. exception handling vytáhnu do jiné třídy. Když pak přidám novou exception, tak to nebudu muset měnit na 100 místech, ale jen v jedné třídě.
- Udělat **workflow systems stateful** -  Izolovat akce a state management
- **Odstranit callback nesting** - např. JS callback hell
- **Be careful with using automation dependencies** - jako např. Maven POM

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250415142906.png)
![](../../Assets/Pasted%20image%2020250415142914.png)
![](../../Assets/Pasted%20image%2020250415142921.png)
![](../../Assets/Pasted%20image%2020250415142928.png)

<!-- ImageEnd -->
<!--ID: 1779905421458-->
END

---

## Stabilita systému

<!--
Original Flashcard ID: 1746599654268
-->

START
NI-SZZ


Kdy je systém považovaný za **stabilní**? Jaký to má **vzoreček**?

Back:

Pokud máme **konstantní vstup**, tak bude mít systém i **konstantní výstup**. Neboli malá změna na vstupu nevede k velkým změnám na výstupu.

**Vzoreček:**

$$\Delta y[k]=x[k]+ay[k]$$

- $x[k]$ velikost změny, kterou chceme udělat v systému $k$ (například změna v kódu)
- $y[k]$ velikost současného systému (komplexita, počet modulů,...)
- $\Delta y[k]$ je velikost změny v systému
- $a$ koeficient zpětné vazby (jak moc je silný ten kombinatorický efekt) = jak moc změna v současném systému povede k dalším změnám. 
	- $0 =$ ideální stav při změně nemusíme měnit nic dalšího
	- $0.01 =$ malý ripple efekt, musíme trošku pozměnit systém
	- $0.2 =$ s každou změnou musíme udělat hromadu změn v systému

Jinými slovy, vzoreček říká, jak moc velkou budeme muset udělat změnu v systému $\Delta y[k]$, pokud chceme implementovat požadavek $x[k]$, máme současnou velikost systému $y[k]$ a máme ripple efekt $a$.

<!-- ExplanationStart -->
Tzn. nebudou se tam např. akumulovat změny a nebude výstup neúměrně vyšší než vstup.

Např. když fouká konstantní vítr, tak by most měl konstantně držet, ne že se bude víc destabilizovat. Nebo když udělám malou změnu v softwaru, tak by to nemělo vést k hromadě změn.
<!-- ExplanationEnd -->



<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415140116.png)
![](../../Assets/Pasted%20image%2020250415140211.png)

<!-- DetailInfoEnd -->

Příklad u softwaru:
![](../../Assets/Pasted%20image%2020250415140935.png)
<!--ID: 1779905421461-->
END

---

## Normalizované systémy

<!--
Original Flashcard ID: 1746599654371
-->

START
NI-SZZ


Co je **Normalized system**?

Back:

Modulární systém s žádným combinatorial effectem
<!--ID: 1779905421463-->
END

---

## Kombinatorický efekt

<!--
Original Flashcard ID: 1746599654356
-->

START
NI-SZZ


Co je **combinatorial effect** (=coupling/ripple effects)? Jak se mu dá zamezit?

Back:

Když **impact změny** závisí na **velikosti systému**.

Jak se mu dá zamezit: je potřeba mít fine-grained modulární systém

Např. v malém systému udělám malou změnu a nemusím měnit nic dalšího.

Když ve velkém systému udělám malou změnu, musím změnit ještě hromadu dalších věcí.
<!--ID: 1779905421466-->
END

---

<!--
Original Flashcard ID: 1746599654276
-->

START
NI-SZZ


Jak principielně fungují change **ripples** v softwarovém inženýrství?

Back:

Máme:

- **Koncepty** - data, akce atd.
- **Implementace** - konkrétní třídy, metody

Koncepty jsou jakoby požadavky na ten systém. Když se mi změní nějaký ten koncept (poždavek), tak se může stát, že je třeba změnit hromadu dalších věcí

![](../../Assets/Pasted%20image%2020250415140907.png)
<!--ID: 1779905421469-->
END

---

<!--
Original Flashcard ID: 1746599654179
-->

START
NI-SZZ


Co jsou **Elements** a jaký mají **dopad** na combinatorial effects?

Back:

**Element** = seskupení tříd, které se týkají dané fičury k sobě

Když zdělám **změnu v konceptu** (nový požadavek, změna požadavku), tak by mi mělo stačit **změnit jen ten Element** 

<!-- DetailInfoStart -->
Takhle to vypadá bez Elementů:
![](../../Assets/Pasted%20image%2020250415144736.png)

Takhle to vypadá s Elementama:
![](../../Assets/Pasted%20image%2020250415144841.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421471-->
END

---

## Problematika modularity

<!--
Original Flashcard ID: 1746599654293
-->

START
NI-SZZ


Co je **coupling** a **cohesion**? Jakých vlastností chceme docílit?

Back:

- **Coupling** - kolik je dependencies mezi modulama
- **Cohesion** - jak silně spolu souvisí elementy v daném modulu

Cílem je **low coupling** a **high cohesion**!

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415114505.png)
![](../../Assets/Pasted%20image%2020250415114511.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421474-->
END

---

<!--
Original Flashcard ID: 1746599654300
-->

START
NI-SZZ


Co je **data coupling** vs **stamp coupling**?

Back:

**Data coupling:**
Myšlenka, že do modulu (funkce, classy) předám pouze ty informace, které jsou využívané v daném modulu a nic víc.

**Stamp coupling:**
Předáváme celou komplexní strukturu - např. celý Customer objekt

Např. nepředám "Customer" objekt, ale pouze "customerName".
<!--ID: 1779905421477-->
END

---

<!--
Original Flashcard ID: 1746518365561
-->

START
NI-SZZ


Co přesně zajišťuje **low coupling** a **high cohesion** v Normalized Systems?

Back:

- **Low coupling** = low inter-modular coupling
	- **Data Version Transparency**
	- **Action Version Transparency**
	- **Separation of States**
- **High cohesion** = low intra-modular coupling
	- **Separation of Concerns**
	- **Separation of States**

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250415143556.png)

<!-- DetailInfoEnd -->
<!--ID: 1779905421480-->
END

---

## Historie přístupu k evolvabilitě softwarových systémů

<!--
Original Flashcard ID: 1746599654313
-->

START
NI-SZZ


Jaké byly původní metodologie SI?

Back:

1. **Waterfall**
2. **OOP**
3. **Iterativní development**
4. **Use-case driven development**
<!--ID: 1779905421482-->
END

---

<!--
Original Flashcard ID: 1746599654328
-->

START
NI-SZZ


Jaké jsou hlavní **nedostatky momentálních metodologií**? (4)

Back:

1. **Adoption of Methodologies** - různí vývojáři znají a používají různé design patterny atd.
	- I když je dobře sestavená teorie jak dobře budovat systémy, vývojáři to nedodržují konzistentně a proto není software tak kvalitní
2. **Vagueness** - metodologie a design patterny jsou furt hodně vágní a pořád lidi nejsou shodlý na tom, co přesně to znamená (např. loose coupling)
3. **Systematic Approach** - ne všichni aplikují good design systematicky
4. **Traceability** - metodologie nevynucují ani nepopisují přesně to, že by všechno mělo být traceable
<!--ID: 1779905421485-->
END

---