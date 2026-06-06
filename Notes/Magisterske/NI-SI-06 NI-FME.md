---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-06 NI-FME

> NI-SI-06 (NI-FME)
> Specifikace správnosti programů, psaní specifikací v predikátové logice, axiomatické modelování datových struktur.

## Specifikace správnosti programů

START
NI-SZZ

Jak se ve formálních metodách chápe **program** a vůči čemu se ověřuje jeho správnost?

Back:

Program se chápe jako systém, který přechází mezi stavy.

Správnost programu se ověřuje **vůči jeho formální specifikaci**.
<!--ID: 1780493530503-->
END

---

START
NI-SZZ

Co je **precondition** programu nebo operace?

Back:

**Precondition** je formule vyjadřující podmínku, která musí platit **před začátkem** vykonávání programu/operace.

Za její splnění typicky odpovídá volající.
<!--ID: 1780493530506-->
END

---

START
NI-SZZ

Co je **postcondition** programu nebo operace?

Back:

**Postcondition** je formule vyjadřující vlastnost, kterou musí splňovat výsledný stav **po dokončení** programu/operace, pokud na začátku platila precondition.
<!--ID: 1780493530508-->
END

---

START
NI-SZZ

Jaký je rozdíl mezi **částečnou** a **úplnou** správností programu?

Back:

- **Částečná správnost:** pokud program začne ve stavu splňujícím precondition a **pokud skončí**, výsledný stav splňuje postcondition.
- **Úplná správnost:** program je částečně správný a navíc je zaručeno, že **terminuje** pro všechny vstupy splňující precondition.
<!--ID: 1780770049419-->
END

---

START
NI-SZZ

Proč částečná správnost sama o sobě nestačí pro důkaz, že program je „opravdu správný“?

Back:

Protože neřeší terminaci.

Program může být částečně správný i tehdy, když se pro některé vstupy zacyklí. Částečná správnost tvrdí jen: **pokud program skončí, výsledek bude správný**.
<!--ID: 1780493530512-->
END

---

START
NI-SZZ

K čemu ve verifikovaném kódu slouží příkaz **`assume P`**?

Back:

`assume P` říká verifikátoru, že v daném bodě může předpokládat platnost formule `P`

Používá se pro modelování:

- preconditions,
- omezení prostředí,
- předpokladů pro další část důkazu.
<!--ID: 1780493530514-->
END

---

START
NI-SZZ

Co se stane při verifikaci, když podmínka v **`assume P`** neplatí?

Back:

Běh se **ignoruje**.

Nevede to k chybě verifikace, protože `assume` omezuje množinu stavů/cest, které verifikátor dále uvažuje.
<!--ID: 1780493530517-->
END

---

START
NI-SZZ

K čemu ve verifikovaném kódu slouží příkaz **`assert P`**?

Back:

`assert P` vyjadřuje závazek, který musí být dokázán.

Verifikátor musí pro každý uvažovaný průběh dokázat, že formule `P` v daném místě platí.
<!--ID: 1780493530520-->
END

---

START
NI-SZZ

Jaký je hlavní rozdíl mezi **`assume P`** a **`assert P`**?

Back:

- `assume P`: verifikátor **předpokládá**, že `P` platí, a cesty bez `P` ignoruje.
- `assert P`: verifikátor musí **dokázat**, že `P` platí na všech relevantních cestách.
<!--ID: 1780493530522-->
END

---

START
NI-SZZ

Co znamená, když při verifikaci selže **`assert P`**?

Back:

Existuje alespoň jedna uvažovaná cesta/stav, ve které formule `P` neplatí.

Tím pádem verifikátor našel potenciální porušení specifikace.
<!--ID: 1780493530525-->
END

---

## Psaní specifikací v predikátové logice

START
NI-SZZ

Proč se pro specifikace správnosti programů používá **predikátová logika**?

Back:

Protože umožňuje přesně vyjádřit vlastnosti stavů programu pomocí:

- logických spojek ($\land, \lor, \Rightarrow, \neg$),
- kvantifikátorů ($\forall, \exists$)

(A pro logiku máme solvery, které nám zjistí, jestli je formule splnitelná nebo ne.)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260603120129.png)
<!-- DetailInfoEnd -->
<!--ID: 1780493530528-->
END

---

START
NI-SZZ

Jak se obecně zapíše, že pole `a` délky `n` je **setříděné vzestupně**?

Back:

Pomocí univerzální kvantifikace přes indexy:

$∀i,j. (0 ≤ i < j < n) => a[i] ≤ a[j]$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020260603120325.png)
<!-- DetailInfoEnd -->
<!--ID: 1780493530530-->
END

---

START
NI-SZZ

Jak lze specifikovat výsledek funkce, která hledá index prvku `x` v poli `a` délky `n`?

Back:

Typicky rozlišíme dvě možnosti:

- pokud výsledek `r` je platný index, pak `a[r] = x`,
- pokud `r = -1`, pak `x` v poli není.

Formálně např.:

![](../../Assets/Pasted%20image%2020260603120441.png)
<!--ID: 1780493530533-->
END

---

START
NI-SZZ

Jak lze specifikovat pomocí predikátové logiky predikát `O(a,y)`, který rozhodne jestli `y` je maximum neprázdného pole `a`?

Back:

Specifikujeme **input**, **output** a pak ten **predikát**

![](../../Assets/Pasted%20image%2020260603120523.png)
<!--ID: 1780493530536-->
END

---

## Axiomatické modelování datových struktur

START
NI-SZZ

Proč čistá predikátová logika sama o sobě nestačí pro modelování datových struktur?

Back:

Protože sama nezná význam struktur jako pole, seznamy nebo páry.

Je potřeba přidat **logickou teorii**: specifické funkce, predikáty a axiomy, které přesně popisují jejich chování.
<!--ID: 1780493530538-->
END

---

START
NI-SZZ

Co je **axiomatické modelování datové struktury**?

Back:

Popis datové struktury pomocí (tomu se říká **signatura**):

- **typy** - s čím pracujeme 
- **funkčních symbolů** (operace nad strukturou),
- **axiomů určujících**, jak se operace chovají.
<!--ID: 1780493530541-->
END

---

START
NI-SZZ

Jak vypadá **teorie párů**?

Back:

![](../../Assets/Pasted%20image%2020260603120755.png)
<!--ID: 1780493530544-->
END

---

START
NI-SZZ

Jak vypadá **teorie seznamů**?

Back:

![](../../Assets/Pasted%20image%2020260603121000.png)
<!--ID: 1780493530547-->
END

---


START
NI-SZZ

Co značí jednotlivé argumenty $write$ u pole?

![](../../../Assets/Pasted%20image%2020250531144520.png)

Back:

1. $a$ - pole do kterého zapisujeme
2. $i$ - index na který zapisujeme
3. $v$ - hodnotu kterou zapisujeme
4. $[j]$ - přistupujeme k $j$-tému prvku vytvořeného pole

Pozn. ta (4) tam nemusí být - to je jen spojené vytvoření pole a potom přístup k prvku
<!--ID: 1780493530550-->
END

---


START
NI-SZZ

Jaké jsou **axiomy pro pole** vlastními slovy? (3)

![](../../../Assets/Pasted%20image%2020250531144407.png)

Back:

1. Pokud se mi rovnají indexy, pak jsou i jejich hodnoty stejné (tím writem říkáme že máme libovolné pole, co má na pozici $i$ hodnotu $v$)
2. Pokud se indexy nerovnají, potom když zapíšeme prvek na $i$-tou pozici, tak to nezmění prvek na $j$-té pozici
3. Pokud se rovnají všechny prvky pole, tak se pak pole rovnají
<!--ID: 1780493530553-->
END

---


START
NI-SZZ

Jak vypadá **teorie polí**?

Back:

![](../../Assets/Pasted%20image%2020260603165349.png)
![](../../../Assets/Pasted%20image%2020250531144407.png)
<!--ID: 1780493530556-->
END

---
