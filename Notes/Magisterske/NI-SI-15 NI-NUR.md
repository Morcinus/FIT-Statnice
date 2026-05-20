---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-15 NI-NUR

> NI-SI-15 (NI-NUR)
> Metody vyhodnocování a testování uživatelských rozhraní.

## Metody vyhodnocování a testování uživatelských rozhraní

<!--
Original Flashcard ID: 1762184131371
-->

START
NI-SZZ


Jakými způsoby se dá dělat evaluation designu? (jeslti je design vpořádku a co zlepšit)

Back:

- **Cognitive walktrough** - projde se to UI
- **Collaborative critiquing** - kritizuje se brainstormingem
- **Heuristic evaluation** - herustiky

<!--ID: 1778682875145-->
END

---
<!--
Original Flashcard ID: 1765204625594
-->

START
NI-SZZ

Jaké druhy testování bez uživatelů znáte?

Back:

- **Heuristická evaluace** - řekneme přesně co má expert udělat za kroky, zkoumáme jestli UI splňuje principy
	- **Výhoda**: dopodrobna rozpitváme danou funkcionalitu
	- **Nevýhoda**: navádíme uživatele, takže neodhalíme obecnější chyby v použitelnosti systému
- **Kognitivní průchod** - stanovíme cíl úkolu a scénář, expert podle toho prochází aplikaci a při krocích odpovídá na stejné 4 otázky
	- **Výhoda**: zjistíme, jak se expert dostává k cíli
	- **Nevýhoda**: neodhalíme podrobnější chyby, spíše obecnou cestu při řešení problému

(zdroj: 09 Jaké jsou metody **kvalitativního** usability testování?)

<!--ID: 1778682875148-->
END

---
<!--
Original Flashcard ID: 1765204625597
-->

START
NI-SZZ

Kdo provádí testování bez uživatelů?

Back:

Provádí to **experti** - designeři, UX specialisté, kteří znají heuristiky a principy UI designu. 

Nepoužívají se na testování skuteční uživatelé.

(zdroj: AI + Honzův mozek)

<!--ID: 1778682875150-->
END

---
<!--
Original Flashcard ID: 1765204625599
-->

START
NI-SZZ

Co je to "cognitive walkthrough"?

Back:

1. **Máme cíl v aplikaci** (např. kup letenku z Prahy do Brna)
2. Expert/tým expertů se chová jako uživatel a zkouší toho docílit krok po kroku (dle scénáře)
3. Při každém kroku se odpoví na tyto otázky (ano/ne a proč):
	1. Will users try to achieve the right result?
	2. Will users notice that the correct action is available?
	3. Will users associate the correct action with the result they’re trying to achieve?
	4. After the action is performed, will users see that progress is made toward the goal?

Pozn. ty jednotlivé otázky jsme si neříkali.

Provádí se na prototypu nebo reálné aplikaci.

(zdroj: 09 Jak funguje **kognitivní průchod**?; Na čem se provádí Kognitivní průchod? + https://www.nngroup.com/articles/cognitive-walkthroughs/)

<!--ID: 1778682875153-->
END

---
<!--
Original Flashcard ID: 1762184131065
-->

START
NI-SZZ


Jak funguje **kognitivní průchod**?

Back:

1. Máme cíl (např. kup letenku z Prahy do Brna)
2. Expert se chová jako uživatel a zkouší toho docílit

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029154052.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875156-->
END

---
<!--
Original Flashcard ID: 1762184131068
-->

START
NI-SZZ


Na čem se provádí Kognitivní průchod?

Back:

Na mockupu (prototypu) nebo reálné aplikaci

<!--ID: 1778682875159-->
END

---
<!--
Original Flashcard ID: 1765204625602
-->

START
NI-SZZ

Co je to **heuristická evaluace**?

Back:

Metoda testování použitelnosti bez uživatelů, při které několik odborníků (typicky 3-5) prochází rozhraní aplikace dle scénáře a hodnotí ho podle vybraných heuristik (nebo podotázek ke každé heuristice). Z toho se pak vyhodnotí, které heuristiky jsou splněny a do jaké míry. Dále se vyhodnotí, jak závažné jsou nalezené problémy. 

Nielsen Norman Group zadefinovali 10 heuristik (principů, co by mělo UI splňovat).

**Heuristiky**:
- Viditelnost stavu systému (progress bary, loading, ...)
- Shoda systému a reálného světa (např. srozumitelné popisky, ne moc techické atd.)
- Uživatelská kontrola a svoboda
- Konzistence a standardy
- Předcházení errorů
- Recognition Rather than recall
- Flexibilita a efektivní používání
- Estetický a minimalistický design
- Help users recognize, diagnose and recover from errors
- Help and Documentation

(zdroj: 04 Co je **heuristická analýza**?)

<!--ID: 1778682875162-->
END

---
<!--
Original Flashcard ID: 1762184131071
-->

START
NI-SZZ


Na čem se provádí Heuristická evaluace?

Back:

- Na prototypu
- Dobré dělat v průběhu design procesu neformálně (jen si řeknu "splňuju tuhle heuristiku"?)

<!--ID: 1778682875165-->
END

---
<!--
Original Flashcard ID: 1762184131074
-->

START
NI-SZZ


Jaký je rozdíl mezi heuristickou evaluací a kognitivním průchodem?

Back:

**Evaluace**:

- Přesně řekneme "udělej tuhle operaci" a pak u operací zkoumáme, jak jsou na nich splněny heuristiky
- **Navádíme uživatele, co má udělat**
- **Výhoda**: dopodrobna rozpitváme tu funkcionalitu
- **Nevýhoda**: navádíme uživatele, takže neodhalíme obecnější chyby v použitelnosti systému

**Kognitivní průchod**:

- Řekneme nějaký cíl, co má uživatel udělat
- Zkoumáme, jakým způsobem se dostane k cíli
- **Výhoda:** odhalíme větší chyby v použitelnosti systému

<!--ID: 1778682875168-->
END

---
<!--
Original Flashcard ID: 1762184131078
-->

START
NI-SZZ


Jaké jsou nevýhody testování bez uživatelů?

Back:

- Nepozoruju reálné uživatele, **testeři často mají už nějakou znalost** systému, není tak přesné

<!--ID: 1778682875171-->
END

---
<!--
Original Flashcard ID: 1765204625605
-->

START
NI-SZZ

Jaké jsou jednotlivé kroky heuristické evaluace?

Back:

**Příprava:**

1. **Sepíšeme scénář** step by step co se má udělat za úkol v aplikaci (to se bere ze scénářů z use casů)
2. **Vybereme heuristiky, které chceme testovat** (typicky třeba 6)
3. **K heuristikám vypíšeme konkrétní podotázky** (např. "je z ikon poznat, co dělají", "má uživatel možnost se vrátit zpět" atd.). Na otázky typicky odpovídáme "ano, ne, částečně" a dávají se k nim podrobnější komentáře

**Provedení testu**

1. **Člověk projde scénář a odpoví na otázky**, případně interview s tím kdo to procházel (likes, dislikes, recommendations)
2. **Sestaví se tabulka problémů, určí se priority**, může se taky sestavit tabulka s přehledem, jak moc jsou splněny jednotlivé heuristiky
3. **Reporting problémů, diskuze výsledků**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251210115311.png)
Příklad otázek v průběhu vyhodnocování na Alze:
![](../../Assets/Pasted%20image%2020251210115335.png)
![](../../Assets/Pasted%20image%2020251210115350.png)

<!-- DetailInfoEnd -->


(zdroj: 09 Jak funguje **heuristická evaluace**?)

<!--ID: 1778682875174-->
END

---
<!--
Original Flashcard ID: 1765204625607
-->

START
NI-SZZ

Jaký je ideální počet expertů k provedení heuristické evaluace?

Back:

Podle Nielsen Group je ideální počet expertů pro heuristickou evaluaci 3-5. Více expertů obvykle neodhalí výrazně více problémů, ale zvyšuje náklady na testování.

Jde o to, že čím více testerů mám, tím více se překrývají jejich poznatky a tím více plýtvám zdroji.

(zdroj: AI + Honzův mozek)

<!--ID: 1778682875177-->
END

---
<!--
Original Flashcard ID: 1760708147893
-->

START
NI-SZZ


Jaké jsou body **Heuristické analýzy**?

Back:

- **Viditelnost stavu systému** (progress bary, loading, ...)
- **Shoda systému a reálného světa** (např. srozumitelné popisky, ne moc techické atd.)
- **Uživatelská kontrola a svoboda**
- **Konzistence a standardy**
- **Předcházení errorů**
- **Recognition Rather than recall**
- **Flexibilita a efektivní používání**
- **Estetický a minimalistický design**
- **Help users recognize, diagnose and recover from errors**
- **Help and Documentation**

<!--ID: 1778682875180-->
END

---
<!--
Original Flashcard ID: 1760708147897
-->

START
NI-SZZ


Co je v heuristické analýze: **Viditelnost stavu systému**?

Back:

progress bary, loading, ...

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161113.png)
![](../../Assets/Pasted%20image%2020251006135035.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875183-->
END

---
<!--
Original Flashcard ID: 1760708147901
-->

START
NI-SZZ


Co je v heuristické analýze: **Shoda systému a reálného světa**?

Back:

Aplikace by měla odpovídat reálnému světu.

Např. když dávám ikonu nebo obrázek k nějakému komponentu, tak by měl odpovídat tomu významu, co to má mít.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251006135124.png)
![](../../Assets/Pasted%20image%2020251029161128.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875186-->
END

---
<!--
Original Flashcard ID: 1760708147905
-->

START
NI-SZZ


Co je v heuristické analýze: **Uživatelská kontrola a svoboda**?

Back:

Např. že uživatel může prozkoumávat software, aniž by si něco totálně podělal - např. **tlačítko undo**, zotavit se z určitého stavu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161216.png)
![](../../Assets/Pasted%20image%2020251006135352.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875189-->
END

---
<!--
Original Flashcard ID: 1760708147908
-->

START
NI-SZZ


Co je v heuristické analýze: **Konzistence a standardy**?

Back:

Např. standardy ohledně accessibility

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161235.png)
![](../../Assets/Pasted%20image%2020251006135257.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875191-->
END

---
<!--
Original Flashcard ID: 1760708147912
-->

START
NI-SZZ


Co je v heuristické analýze: **Předcházení errorů**?

Back:

Např. neumožňím uživateli zadávat nevalidní věci do formuláře, aby nenastala nějaká kritická chyba

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161254.png)
![](../../Assets/Pasted%20image%2020251006135435.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875194-->
END

---
<!--
Original Flashcard ID: 1760708147915
-->

START
NI-SZZ


Co je v heuristické analýze: **Recognition Rather than recall**?

Back:

Uživatel by na první pohled měl vidět, co to dělá a neměl by přemýšlet nebo si vzpomínat na to co to dělá.

Člověk by si neměl zapamatovávat, jak používat to UI, ale měl by ho moct používat podle toho, a co je zvyklý (i z ostatních UI)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161315.png)
![](../../Assets/Pasted%20image%2020251006135610.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875197-->
END

---
<!--
Original Flashcard ID: 1760708147919
-->

START
NI-SZZ


Co je v heuristické analýze: **Flexibilita a efektivní používání**?

Back:

Jestli je možný to provozovat na daném zařízení uživatele a že mu to nevyžere všechnu baterku, internetový data, atd.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161332.png)
![](../../Assets/Pasted%20image%2020251006135700.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875200-->
END

---
<!--
Original Flashcard ID: 1760708147922
-->

START
NI-SZZ


Co je v heuristické analýze: **Estetický a minimalistický design**?

Back:

UI by mělo být jednoduchý

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161347.png)
![](../../Assets/Pasted%20image%2020251006135933.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875203-->
END

---
<!--
Original Flashcard ID: 1760708147925
-->

START
NI-SZZ


Co je v heuristické analýze: **Help users recognize, diagnose and recover from errors**?

Back:

Uživatel by měl chápat, proč něco nefunguje - říct mu, proč to nefunguje - ne jen "neznámý error"

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161417.png)
![](../../Assets/Pasted%20image%2020251006140008.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875206-->
END

---
<!--
Original Flashcard ID: 1760708147929
-->

START
NI-SZZ


Co je v heuristické analýze: **Help and Documentation**?

Back:

Systém by měl být použitelný bez nápovědy. I tak by u složitějších/nejasnějších funkcí měla být nápověda.

Např. tooltipy, kontextová nápověda apod.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029161434.png)
![](../../Assets/Pasted%20image%2020251006140115.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875209-->
END

---
<!--
Original Flashcard ID: 1760708147932
-->

START
NI-SZZ


Jakou tabulku je fajn sestavit jako výstup heuristické analýzy?

Back:

Ve sloupcích:

- **Heuristika** (který bod)
- **Jak moc je splněna** (částečně, úplně,..)
- **Závažnost** (low, medium, high)
- **Key Finding / Comment** (popsat co je špatně nebo že to je dobře)

![](../../Assets/Pasted%20image%2020251006141034.png)
![](../../Assets/Pasted%20image%2020251006141108.png)

<!--ID: 1778682875212-->
END

---
<!--
Original Flashcard ID: 1765204625613
-->

START
NI-SZZ

Co je to "Usability testing"?

Back:

Usability testing je proces testování uživatelského rozhraní (s uživateli nebo bez nich) za účelem zjištění, jak snadno a efektivně se systém používá.

(zdroj: AI + Honzův mozek)

<!--ID: 1778682875215-->
END

---
<!--
Original Flashcard ID: 1762184131048
-->

START
NI-SZZ


Jak se liší **kvalitativní** a **kvantitativní** usability studie?

Back:

**Kvalitativní**

- Objeví existenci problémů
	- Co lidi mají rádi, co se dá zlepšit
- Výsledkem nejsou čísla
- Málo uživatelů (stačí 7, víc už to bývá zbytečný)

**Kvantitativní**

- Výsledkem jsou statistiky
	- Jak často lidi používají danou funkci
	- Jak dlouho trvá provedení určité akce
- Výsledkem jsou čísla, sbírá se hodně dat
- Používají se statistické metody

<!--ID: 1778682875217-->
END

---
<!--
Original Flashcard ID: 1765204625616
-->

START
NI-SZZ

Co je to "Qualitative Usability Testing"?

Back:

**Kvalitativní**
- **Objeví existenci problémů**
- Objeví **co mají lidi rádi a co se dá zlepšit**
- **Výsledkem nejsou čísla**, ale poznatky a názory
- **Používá se málo uživatelů** (stačí 7, víc už to bývá zbytečný dle Nielsen Norman Group)

(zdroj: 09 Jak se liší **kvalitativní** a **kvantitativní** usability studie?)

<!--ID: 1778682875220-->
END

---
<!--
Original Flashcard ID: 1765204625619
-->

START
NI-SZZ

Co je to "Quantitative Usability Testing"?

Back:

**Kvantitativní**

- **Výsledkem jsou statistiky, čísla, hodně dat**
	- Jak často lidi používají danou funkci
	- Jak dlouho trvá provedení určité akce
	- Dotazníky
- **Používají se statistické metody na vyhodnocení**

(zdroj: 09 Jak se liší **kvalitativní** a **kvantitativní** usability studie?)

<!--ID: 1778682875223-->
END

---
<!--
Original Flashcard ID: 1762184131059
-->

START
NI-SZZ


Jaké jsou metody **kvalitativního** usability testování?

Back:

**Bez uživatelů**:

- Heuristická evaluace
- Kognitivní průchod

**S uživateli**:

- User survey
- Ethnographic observations
- Usability engineering

<!--ID: 1778682875226-->
END

---
<!--
Original Flashcard ID: 1765204625622
-->

START
NI-SZZ

Jaké typy testování s uživateli znáte?

Back:

- **User survey** - dotazníky (např. doporučili byste tento produkt)
- **Ethnographic observations** - pozorování uživatelů v jejich prostředí, jak pracují na daných úkolech. Neptáme se jich, ale pozorujeme co jak dělají.
- **Usability engineering** - strukturované testování v aplikaci nebo na mockupu (to co jsme dělali)

(zdroj: 09 Jaké jsou metody **kvalitativního** usability testování?)

<!--ID: 1778682875229-->
END

---
<!--
Original Flashcard ID: 1765204625625
-->

START
NI-SZZ

Co je to "Ethnographic observation"?

Back:

Ethnographic observation je metoda testování, při které pozorujeme uživatele v jejich přirozeném prostředí, jak používají systém v reálných podmínkách. Pozorovatel sleduje chování uživatelů bez zásahu do jejich práce.

(zdroj: AI)

<!--ID: 1778682875232-->
END

---
<!--
Original Flashcard ID: 1765204625628
-->

START
NI-SZZ

Co je to "Usability engineering"?

Back:

Usability engineering je strukturovaný proces testování uživatelského rozhraní v kontrolovaném prostředí (např. usability lab), kde uživatelé plní konkrétní úkoly a jejich chování je sledováno a zaznamenáváno.

Tohle jsme prováděli v rámci cvičení.

Používá se hi-fi prototyp nebo hotová appka.

(zdroj: AI + Honzův mozek)

<!--ID: 1778682875235-->
END

---
<!--
Original Flashcard ID: 1765204625631
-->

START
NI-SZZ

Kde a v jakých podmínkách se odehrává "usability engineering"?

Back:

- Na **místě kde pracuje ten člověk** (pokud to dělám pro danou firmu) - tam je nevýhoda, že tam může být chaos. Výhoda je, že člověk používá svoje přirozené prostředí (např. někdy je třeba dané zařízení apod.)
- **V usability labu** - nejvíc klid, ale občas to může být problém (např. někdy člověk potřebuje speciální prostředí, nástroje)
- **Vzdáleně** - výhoda, že dotyčný nemusí nikam cestovat, je to levnější

Pavlíček má myslím oblíbený vzdálený.

(zdroj: 10 Kde lze dělat uživatelské testování?)

<!--ID: 1778682875237-->
END

---
<!--
Original Flashcard ID: 1765204625634
-->

START
NI-SZZ

Jakými způsoby můžeme vybrat účastníky uživatelského průzkumu? (5)

Back:

- **Randomly** – náhodný výběr účastníků z celé populace bez specifických kritérií.
- **Several groups** – rozdělení účastníků do více skupin (např. začátečníci vs. pokročilí) a výběr v rámci nich.
- **Based on sociological research** – výběr podle demografických a behaviorálních charakteristik zjištěných výzkumem (věk, vzdělání, motivace…).
- **Based on app usage statistics** – výběr uživatelů podle toho, jak často a jakým způsobem aplikaci používají.
- **Hire typical group representants as personas** – oslovení lidí, kteří odpovídají definovaným personám vytvořeným ze sociologického výzkumu.

(zdroj: AI)

<!--ID: 1778682875240-->
END

---
<!--
Original Flashcard ID: 1765204625636
-->

START
NI-SZZ

Co je to **demografická analýza**?

Back:

Proces zkoumání charakteristik cílové skupiny. Rozdělení populace na potenciální uživatele (viz obrázek), typicky podle:
- gender - male/female
- věk
- income
- hobbies
- professions

Pak když děláme testování, marketing, nové fičury, se můžeme řídit podle toho.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251208165312.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020251208165443.png)
<!-- ImageEnd -->


(zdroj: Přednáška user interface testing)

<!--ID: 1778682875243-->
END

---
<!--
Original Flashcard ID: 1765204625639
-->

START
NI-SZZ

Co je to "**screener**"?

Back:

Krátký dotazní, který rozhodne, jestli máme uživatele kterého chceme (např. na testování).

Screener je dotazník nebo sada otázek používaná k filtrování a výběru vhodných účastníků pro uživatelský průzkum. Pomáhá identifikovat lidi, kteří odpovídají požadovaným kritériím (demografickým, behaviorálním, zkušenostem atd.).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251208165159.png)
<!-- DetailInfoEnd -->


(zdroj: AI)

<!--ID: 1778682875249-->
END

---
<!--
Original Flashcard ID: 1765204625650
-->

START
NI-SZZ

Jaké hlavní části by měl mít uživatelský dotazník (user survey)?

Back:

1. **Říct uživateli cíl dotazníku** - proč ho děláme
2. **Obecné informace** - získat demografické informace, background, úroveň zkušenosti uživatele
3. **Zjistit jak se daný úkol provádí teď**
4. **Zjistit jak se může provádět úkol v budoucnu** - co je třeba změnit, co může být nového
5. **Jakékoliv další komentáře**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251211103616.png)

Možné otázky:
- Demografické otázky - věk, gender, vzdělání, profese, otázky jestli je potenciálním uživatelem
- Jak dělá úkoly momentálně
- Jaký software používá
- Co se může zlepšit na tom jak to dělá teď
- Co by dělal, kdyby měl k dispozici náš software
- Jak by se učil pracovat s tímto softwarem aby udělal tyto tasks
- Kde budeš vykonávat tyto úkoly?
- Budeš komunikovat s ostatními při dělání tohoto úkolu?
- Jak často děláš tyto úkoly
- Vidíš nějaké časové limitace, při plnění tohoto úkolu?
- Co se stane, když se to podělá?

![](../../Assets/Pasted%20image%2020251208170323.png)
<!-- DetailInfoEnd -->

(zdroj: Přednáška User interface Testing)

<!--ID: 1778682875254-->
END

---
<!--
Original Flashcard ID: 1765204625652
-->

START
NI-SZZ

Jak maximálně dlouho by mělo vyplňování uživatelského dotazníku trvat?

Back:

Ne více než 20-30 minut

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251208170730.png)
<!-- DetailInfoEnd -->

(zdroj: Prezentace User Interface Testing)

<!--ID: 1778682875257-->
END

---
<!--
Original Flashcard ID: 1762184131081
-->

START
NI-SZZ


V jakém pořadí pokládat otázky při usability study?

Back:

Je třeba se zeptat:

1. **Co se mi líbí?** - to si lidi pamatují méně, proto je třeba se na to zeptat první
2. **Co se mi nelíbí?** - tohle si lidi pamatují dobře, takže na to se zeptat později
3. **Doporučení** - co by se mělo zlepšit

<!--ID: 1778682875260-->
END

---
<!--
Original Flashcard ID: 1762184131084
-->

START
NI-SZZ


Jaké prostředí bych měl vytvořit při usability study?

Back:

Přátelské prostředí, aby se ten uživatel "cítil jako doma", neměl by se cítit, že mu koukám přes rameno.

<!--ID: 1778682875263-->
END

---
<!--
Original Flashcard ID: 1762184131087
-->

START
NI-SZZ


Jak dlouhá by měla maximálně být usability studie s uživatelem?

Back:

Maximálně tak 40 minut procházení scénářů. Celkem tak stojí max 1,5h.

<!--ID: 1778682875266-->
END

---
<!--
Original Flashcard ID: 1762184131090
-->

START
NI-SZZ


Kolik uživatelů by mělo být použito na testování uživatelského rozhraní?

Back:

**Optimální číslo je podle Pavlíčka 8**, víc rozhodně ne. Podle Nielsna 5.

![](../../Assets/Pasted%20image%2020251029155353.png)

<!--ID: 1778682875269-->
END

---
<!--
Original Flashcard ID: 1762184130957
-->

START
NI-SZZ


Měl bych se ptát lidí na otázky typu co se jim líbilo nebo nelíbilo po každém tasku nebo až na konci?

Back:

Až na konci. Je to hlavně z časových důvodů.

<!--ID: 1778682875272-->
END

---
<!--
Original Flashcard ID: 1762184130971
-->

START
NI-SZZ


Kde lze dělat **uživatelské testování**? (3)

Back:

- Na **místě kde pracuje ten člověk** (pokud to dělám pro danou firmu) - tam je nevýhoda, že tam může být chaos. Výhoda je, že člověk používá svoje přirozené prostředí
- **V usability labu** - nejvíc klid, ale občas to může být problém (např. někdy člověk potřebuje speciální prostředí)
- **Vzdáleně** - výhoda, že dotyčný nemusí nikam cestovat

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251029175445.png)

<!-- DetailInfoEnd -->

<!--ID: 1778682875275-->
END

---
<!--
Original Flashcard ID: 1762184130965
-->

START
NI-SZZ


Jak vypadá **kolaborativní testování**?

Back:

- Každý uživatel dostane tasky
- Každý je řeší zvlášť
- Obecně se nemluví, ale mohou si začít pomáhat, když si někdo neví s rady

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020251029172919.png)

<!-- ImageEnd -->

<!--ID: 1778682875278-->
END

---
<!--
Original Flashcard ID: 1762184130968
-->

START
NI-SZZ


Jaké jsou **výhody kolaborativního testování**?

Back:

- Člověk netestuje jen UI, ale testuje i byznys procesy.
- Testuju tím více lidí najednou (docela efektivně)
- Můžu takhle testovat celý business workflow. Např. každý uživatel bude mít určitou roli (manažer, skladník, apod.) a přijde jim zakázka a oni s tím musí pracovat a musí dosáhnout určitého cíle.

Tzn. ty lidi třeba začnou diskutovat, že se jim něco nelíbí a že by to potřebovali jinak atd. tzn. sami třeba řeknou, co by chtěli

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020251029172907.png)

<!-- ImageEnd -->

<!--ID: 1778682875281-->
END

---
<!--
Original Flashcard ID: 1765204625655
-->

START
NI-SZZ

Co to je a jaké nástroje používá "Remote testing"?

Back:

- **Screen sharing** - MS Teams, TeamViewer, Zoom,...
- **Voice connection** - typicky součástí nástrojů pro screen sharing
- **Observing user by a camera**

To všechno bývá typicky nahráváno

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251208170906.png)
<!-- DetailInfoEnd -->

(zdroj: Prezentace User Interface Testing)

<!--ID: 1778682875284-->
END

---
<!--
Original Flashcard ID: 1765204625658
-->

START
NI-SZZ

Jaké jsou výhody a nevýhody remote testingu?

Back:

**Výhody:**

- **Levnější peněžně a časově** - nikdo nemusí cestovat
- **Realistický kontext použití** - uživatel může být ve svém přirozeném prostředí bez vyrušování
- **Uživatelé na celém světě** - můžeme jednoduše mít přístup k uživatelům na druhé straně planety
- **Počet účastníků** - jednoduše otestujeme více lidí
- **Levní profesionálové** - můžeme testovat na PhD. lidech z Indie (tohle měl Pavlíček v prezentaci :D)

**Nevýhody:**

- **Náročnější na setup pro uživatele** - musí si nainstalovat software 
- **Nemáme kontrolu nad prostředím** - uživatel si může sednout do hlučného prostředí, kde bude vyrušován
- **Zpoždění videa/hlasu**, kvalita může být ovlivněna internetem

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251208171419.png)
<!-- DetailInfoEnd -->

(zdroj: Prezentace User Interface Testing)

<!--ID: 1778682875287-->
END

---
<!--
Original Flashcard ID: 1762184131055
-->

START
NI-SZZ


Jak se dají používat **eye trackingový metody**?

Back:

Vytváří se heatmapy na obrazovce, díky tomu pak člověk pozná např. kam se lidi na obrazovce nejvíce dívají a kde by cca mohl být problém (nepoužívá se to tolik často)

<!--ID: 1778682875290-->
END

---
<!--
Original Flashcard ID: 1765204625661
-->

START
NI-SZZ

Co je to "Heat map"?

Back:

Pomocí eye trackingový metody nebo pomocí sledování kurzoru myši se vytváří heatmapy na obrazovce, díky tomu pak člověk pozná např. kam se lidi na obrazovce nejvíce dívají a kde by cca mohl být problém (nepoužívá se to tolik často)

(zdroj: 09 Jak se dají používat **eye trackingový metody**?)

<!--ID: 1778682875293-->
END

---
<!--
Original Flashcard ID: 1765204625666
-->

START
NI-SZZ

Jaké uživatelské akce sledují tzv "Heat maps"?

Back:

AI GENERATED ODPOVĚĎ:

- **pohyby myši** (mouse tracking)
- **kliknutí** (click tracking)
- **scrollování** (scroll tracking)
- **pomocí eye tracking také pohyby očí a místa**, kam se uživatelé dívají na obrazovce

(zdroj: AI)

<!--ID: 1778682875296-->
END

---
<!--
Original Flashcard ID: 1765204625664
-->

START
NI-SZZ

Jaké chování uživatelů nejvíce snižuje výpovědní hodnotu tzv. „Heat maps"?

Back:

**Uživatelé často scrollují, klikají na náhodná místa, hýbají myší čistě protože nejsou schopný sedět v klidu**

Navíc Heat maps vychází téměř vždy všude (většina lidí čte zleva doprava a skenují stránky ve tvaru písmene Z nebo F), takže to moc nemá cenu dělat

(zdroj: AI + Honzův mozek)

<!--ID: 1778682875299-->
END

---
