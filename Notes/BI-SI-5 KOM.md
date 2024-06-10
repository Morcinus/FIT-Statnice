---
created: 2024-05-17T11:13:08
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-5 KOM

> BI-WSI-SI-5 (KOM)
> Konceptuální modelování, jeho význam, základní pojmy a způsoby modelování reálného světa.



START
BI-SZZ

Co je konceptuální modelování a k čemu slouží?

Back:

Konceptuální modelování slouží k popisu reality a pochopení domény, kterou modelujeme.

_Z přednášky:_
![](../Assets/Pasted%20image%2020230927181946.png)
<!--ID: 1716107685064-->
END

---


START
BI-SZZ

Co je Ullmanův trojúhelník?

Back:

Symbolizuje vztah mezi symbolem, myšlenkou a realitou.

**symbol** = model, graf, obrázek
**myšlenka** = jak si tu věc představujeme
**realita** = jak ta věc skutečně vypadá

_Ilustrační obrázek:_
_(vlevo symbol, nahoře myšlenka, vpravo realita)_
![](../Assets/Pasted%20image%2020230927182053.png)
<!--ID: 1716107685067-->
END

---


START
BI-SZZ

Co je **ontologie**?

Back:

Filozofická disciplína, která se zabývá existencí, druhy a strukturou objektů, vlastností, událostí, procesů a vztahů ve všech oblastech reality.

(V informatice hlavně definice kategorií, vlastností a vztahů mezi koncepty)
<!--ID: 1716107685071-->
END

---


START
BI-SZZ

Co je problém intersubjektivity?

Back:

Na realitu se dá dívat z mnoha různých pohledů.
<!--ID: 1716107685074-->
END

---


START
BI-SZZ

Jaké jsou 3 typy ontologií?

Back:

- **Vyšší ontologie (upper ontology)** = Základní ontologie (foundational ontology)
- **Doménové ontologie (domain ontology)**
- **Klíčové ontologie (core ontology)** = Referenční ontologie (reference ontology)
<!--ID: 1716107685078-->
END

---


START
BI-SZZ

Co je **vyšší ontologie** (= základní ontologie)?

Back:

univerzální, obecné abstraktní ontologie definující doménově a aplikačně nezávislé pojmy a vztahy

_Např._ Unified Foundational Ontology (UFO)
_Např._
![](../Assets/Pasted%20image%2020240517114205.png)
<!--ID: 1716107685081-->
END

---


START
BI-SZZ

Co je **doménová ontologie**?

Back:

Ontologie popisující určitou konkrétní doménu (např. těžbu ropy).

_Např._
![](../Assets/Pasted%20image%2020240517114218.png)
<!--ID: 1716107685085-->
END

---


START
BI-SZZ

Co je **klíčová ontologie** (= referenční ontologie)?

Back:

Doménové ontologie, které mají klíčový (obecný) význam pro určité odvětví jsou obvykle nazývány **klíčové ontologie (core ontology)** nebo **referenční ontologie (reference ontology)**.

Např. Legal Core Ontology
<!--ID: 1716107685090-->
END

---


START
BI-SZZ

Co je **formální ontologie**?

Back:

Disciplína, která se zabývá **formální** ontologickou strukturou, která se vztahuje na všechny domény v realitě.

Tzn. **není to jen filozofická část**, ale je to disciplína založená na matematice, filosofii, lingvistice a kongnitivních vědách.

_Např. obsahuje:_ teorie částí, teorie celků, typy, instance, identita, závislost, jednota
<!--ID: 1716107685094-->
END

---


START
BI-SZZ

Podle čeho se určí **kvalita jazyka pro konceptuální modelování**?

Back:

Nesmí tam:
- **chybět symboly**
- **být přebytečné symboly**
- **mít 2 symboly pro stejný koncept**
- **mít 1 symbol pro dva koncepty**

_Obrázek_
![](../Assets/Pasted%20image%2020240517114450.png)
<!--ID: 1716107685098-->
END

---


START
BI-SZZ

Jaké jsou historické konceptuální modelovací jazyky? (6)

Back:

- Semantic Networks
- Entity-Relationship Diagramy
- Fact-Based Modelling
- KL-ONE
- UML
- Semantic Web
<!--ID: 1716107685102-->
END

---

START
BI-SZZ

Co jsou **Semantic Networks**?

Back:

Jednoduchý modelovací jazyk, kde:
- **šipky** popisují **vztahy** mezi objekty
- **vrcholy grafu** popisují **objekty**

_Příklad:_
![](../Assets/Pasted%20image%2020240517114737.png)
<!--ID: 1716107685107-->
END

---

START
BI-SZZ

Co je **Fact-Based Modelling**? Jak se liší od ER modelů?

Back:

Je to jakoby alternativa k ER modelům. Není to tolik známé/používané.

Ve Fact Based Modellingu:
- Se nevychází z entit ale z **faktů** (tvrzení)
- Jsou tam **různé množinové operace** - je to podrobnější než ER

_Příklad:_
![](../Assets/Pasted%20image%2020240517114921.png)
<!--ID: 1716107685111-->
END

---


START
BI-SZZ

Co je **KL-ONE**?

Back:

Modelovací notace, je možné zde vyjadřovat constraints přímo v tom jazyce.

_Příklad:_
![](../Assets/Pasted%20image%2020240517115553.png)
<!--ID: 1716107685114-->
END

---


START
BI-SZZ

Co je **Semantic Web**?

Back:

Tahle notace jakoby může modelovat "internet" - jako kdybych propojil všechny databáze na světě.

Model samotný je šíleně jednoduchý (jen hrany a uzly), každý uzel má ale pod sebou **URL**.

_Např._ Wikipedie je celá reprezentovaná pomocí sémantického webu -> dá se všechno dotazovat.

_Příklad:_
![](../Assets/Pasted%20image%2020240517115715.png)
<!--ID: 1716107685118-->
END

---


START
BI-SZZ

Co jsou **OWL** a **RDF**?

Back:

Technologie pro spravování velkého množství znalostí.

Používá se např. v medicíně.
<!--ID: 1716107685121-->
END

---


START
BI-SZZ

Co je **UFO**?

Back:

Základní ontologie, která je používaná k analýze, re-designu a integraci ontologických konceptuálních modelů v různých doménách.
<!--ID: 1716107685124-->
END

---


START
BI-SZZ

Jaké jsou **3 části UFO** a **co obsahují**?

Back:

- **UFO-A** - Strukturální aspekty (entity, vlastnosti, vazby)
- **UFO-B** - Behaviorální aspekty (chování, události, kauzalita)
- **UFO-C** - Sociální aspekty (agenti, akce, organizace)
<!--ID: 1716107685128-->
END

---


START
BI-SZZ

Co je **ontology-driven** conceptual modelling?

Back:

Disciplína zaměřující se na vytváření metod, výpočetních nástrojů a modelovacích jazyků založených na ontologiích pro oblast konceptuálního modelování.

_Neformálně:_ Prostě si vytvořím nějaký ontologický model například v OntoUML pro danou doménu a až na základě toho pak dělám konkrétní modely (např. UML) pro různý softwary.

Např. nejdřív si zadefinuju pojmy Pacient, Doktor,... v OntoUML a jejich vztahy a pak až začnu dělat modely pro nějaký healthcare system. 
<!--ID: 1716107685131-->
END

---


START
BI-SZZ

Co je **sémantická interoperabilita**?

Back:

Problém, že na realitu se dá dívat různými pohledy a každý si to modeluje podle sebe. 

Kvůli tomu pak máme na světě hromadu znalostí, které spolu "nedokážou dobře pracovat dohromady" a nemůžeme je dobře sdílet, a znovupoužívat, protože jsou jinak namodelovaný.

![](../Assets/Pasted%20image%2020240517121109.png)
![](../Assets/Pasted%20image%2020240517121240.png)
<!--ID: 1716107685134-->
END

---


START
BI-SZZ

Co je princip **FAIR** (čeho to je zkratka a co to znamená)?

Back:

Data (informace, znalosti) by měla být:

- **Findable** - data by se měla dát jednoduše vyhledat
- **Accessible** - měl bych k nim být schopný jednoduše přistupovat (=pomocí standardizovaných protokolů atd.)
- **Interoperable** - měla by být reprezentována ve standardizovaných formátech
- **Reusable** - měly by být znovupoužitelný (dobře popsaný, licencovaný atd.)

_Pozn. celkem je těch principů 15, které spadají pod ty 4 hlavní:_
![](../Assets/Pasted%20image%2020240517121815.png)
<!--ID: 1716107685137-->
END

---

