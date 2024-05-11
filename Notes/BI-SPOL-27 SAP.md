---
created: 2024-03-26T08:20:57
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-27 SAP

> BI-SPOL-27 (SAP)
> Kombinační a sekvenční logické obvody (Mealy, Moore), popis a možnosti implementace na úrovni hradel. Minimalizace vyjádření logické funkce (s využitím map)

### ToDo
- Přidat otázky na to, jak vypadají logická hradla
- Přidat otázky na to, jaký výstupy dávají jednotlivá logická hradla NOT, AND, OR, XOR, NAND, NOR, NXOR (hlavně XOR, NAND, NOR a NXOR)


### logické obvody

START
BI-SZZ

Co je **logický obvod**?

Back:

**logický obvod** = elektronický obvod zobrazující logické vstupy na logické výstupy

_Poznámka:_
- logické = binární = nabývající hodnot z $B = \{0, 1\}$
- implementačně jde spíš o signály než proměnné
<!--ID: 1714747087949-->
END

---

### kombinační logické obvody

START
BI-SZZ

Na čem závisí výstupy v kombinačních obvodech?

Back:

výstupy závisí jen na aktuálních vstupech (kombinační obvody nemají paměť a stavy)
<!--ID: 1714747087953-->
END

---


START
BI-SZZ

Jak vypadá logická kombinační funkce?

Back:

každý výstup je popsán jednou **logickou (kombinační) funkcí**:
$$f(x): B^n \rightarrow B$$

např. $y_1 = f_1(x_1, x_2, \dots x_p)​$
<!--ID: 1714747087955-->
END

---


START
BI-SZZ

Co je _onset $f^1$_?

Back:

onset $f^1 = f =$ množina vstupů, které se zobrazí na $1$
<!--ID: 1714747087958-->
END

---


START
BI-SZZ

Co je _offset $f^0$_?

Back:

offset $f^0 =$ množina vstupů, které se zobrazí na $0$
<!--ID: 1714747087961-->
END

---

#### různé možnosti vyjádření logické funkce

START
BI-SZZ

Jakými způsoby lze vyjádřit **logickou funkci**? (4)

Back:

- **Tabulkou**
- **Booleovskou $n$-krychlí**
- **Karnaughovou mapou**
- **Booleovským výrazem** ve vhodné formě (DNF nebo KNF)
<!--ID: 1714747087964-->
END

---


START
BI-SZZ

Popiš jak vypadá vyjádření logické funkce pomocí **tabulky**.

Back:

![](../Assets/Pasted%20image%2020240326083831.png)
<!--ID: 1714747087967-->
END

---


START
BI-SZZ

Popiš jak vypadá vyjádření logické funkce pomocí **Booleovské $n$-krychle**.

Back:

![](../Assets/Pasted%20image%2020240326083914.png)
<!--ID: 1714747087970-->
END

---


START
BI-SZZ

Popiš jak vypadá vyjádření logické funkce pomocí **Karnaughovy mapy**.

Back:

![](../Assets/Pasted%20image%2020240326083953.png)

_Pro 4 vstupy_
![](../Assets/Pasted%20image%2020240510085759.png)

Pak vždy zakroužkuju největší skupinu sousedících jedniček, která je mocnina dvou.
<!--ID: 1714747087972-->
END

---

START
BI-SZZ

Jak se zapisují **booleovské výrazy** v SAPech?

Back:

- literály: $x$, negace $\overline{x}$
- logické operátory: $+$ (OR) a $\cdot$ (AND)
- např. $(\overline{x}+z) \cdot (\overline{y}+z)$
- obecně nejsou kanonickým vyjádřením logické funkce
<!--ID: 1714747087975-->
END

---

START
BI-SZZ

Popiš jak vypadá vyjádření logické funkce pomocí **Booleovského výrazu**.

Back:

Úplné DNF nebo KNF je kanonickým vyjádřením logické funkce.

- disjunktivní normální forma (DNF, součet součinů): $f = \overline{abc}d + a\overline{bc}d + abc\overline{d}​$
- konjunktivní normální forma (KNF, součin součtů)
<!--ID: 1714747087978-->
END

---

#### implementace z logických hradel


START
BI-SZZ

Jaká jsou základní logická hradla? (7)

Back:

- NOT
- AND
- OR
- XOR
- NAND
- NOR
- NXOR
<!--ID: 1714747087981-->
END

---


START
BI-SZZ

Jaká logická hradla jsou schopná suplovat všechny ostatní funkce?

Back:

- jen **NANDy** nebo
- jen **NORy**

pomocí nich jsem schopný vyjádřit úplně všechno
<!--ID: 1714747087984-->
END

---


START
BI-SZZ

Může být jedno hradlo použito pro realizaci stejné části výrazů z několika funkcí zároveň?

Back:

Ano.
<!--ID: 1714747087986-->
END

---

#### minimalizace vyjádření logické funkce


START
BI-SZZ

Minimalizujeme logickou funkci nebo její vyjádření?

Back:

neminimalizujeme logickou funkci, minimalizujeme její vyjádření (např. abychom obvod sestavili z co nejméně hradel), ale funkce zůstává stejná
<!--ID: 1714747087989-->
END

---


START
BI-SZZ

Jak se realizuje logická funkce pomocí NANDů?

Back:

pro realizaci z NANDů $( \overline{x \cdot y} )$ se hodí vycházet z **minimální DNF** (MNDF), nakreslit nad ní dvě negace a tu spodní:

$$ ac+b = \overline{\overline{ac+b}} = \overline{\overline{ac} \cdot \overline{b}} $$
<!--ID: 1714747087992-->
END

---


START
BI-SZZ

Jak se realizuje logická funkce pomocí NORů?

Back:

pro realizaci z NORů $( \overline{x+y} )$ se hodí vycházet z **minimální KNF** (MNKF)
<!--ID: 1714747087995-->
END

---


START
BI-SZZ

Jak se dá získat minimální DNF pomocí Karnaughovy mapy? (popiš step by step postup)

Back:

1. popsat závislost výstupů na vstupech pravdivostní tabulkou
2. vytvořit Karnaughovu mapu
3. najít v mapě “krychle” (co největší skupiny jedniček, aby sousedily a jejich počet byl mocnina dvou)
4. z krychlí vyberu jen ty podstatné (neredundantní)
5. každou krychli zapíšu odpovídajícím Booleovským součinem
6. z těchto součinů nakonec udělám součet
<!--ID: 1714747087998-->
END

---

### sekvenční logické obvody

START
BI-SZZ

Na čem závisí výstupy u sekvenčních logických obvodů?

Back:

výstupy závisí na posloupnosti vstupů (nestačí znát aktuální vstupy, musíme si pamatovat i ty předchozí a udržovat si stav)

vlastně stačí vzít kombinační obvod (= logické funkce) a některé jeho výstupy připojit “zpátky” na jeho vstupy
<!--ID: 1714747088001-->
END

---


START
BI-SZZ

Jak se u sekvenčních logických obvodů řeší problémy s časem?

Back:

problémy s časem vyřešíme tak, že tyto signály z výstupů (tzv. **vnitřní hodnoty** neboli **stavy**) propustíme na vstup jen v intervalech řízených **hodinovým signálem** (CLK), pak jde o **synchronní** sekvenční obvod (bez hodin by byl asynchronní)
<!--ID: 1714747088004-->
END

---

#### popis stavovým automatem

START
BI-SZZ

Jak vypadá popis sekvenčního logického obvodu stavovým automatem?

Back:

- matematickým modelem sekvenčního obvodu je konečný **stavový automat**, který lze popsat **grafem přechodů** nebo **tabulkami přechodových funkcí**
- $X$ = množina přípustných kombinací vstupních hodnot
- $Y$ = množina možných kombinací výstupních hodnot
- $Q$ = množina kombinací vnitřních hodnot (tj. stavů)
- $Q_0$ = počáteční stav
- $\delta: X \times Q \to Y$ = stavově přechodová funkce (určuje následující stav)
- $\lambda$ = výstupní funkce (určuje výstupní hodnoty, závisí na typu automatu)
<!--ID: 1714747088007-->
END

---

#### automat typu Mealy

START
BI-SZZ

Jak je popsán automat typu **Mealy** a na čem závisí jeho výstup?

Back:

- výstup záleží na vstupech a stavu _(input-based)_, takže je popsán na hranách grafu přechodů (číslo před lomítkem je vstup, číslo za lomítkem je výstup)
- $\lambda: X \times Q \to Y$

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240326094017.png)
<!--ID: 1714747088010-->
END

---


START
BI-SZZ

Jak je popsán automat typu **Moore** a na čem závisí jeho výstup?

Back:

- výstup záleží jen na stavu (state-based), takže je popsán v uzlech grafu přechodů
- $\lambda: Q \to Y​$

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240326094008.png)
<!--ID: 1714747088013-->
END

---

#### implementace z hradel a klopných obvodů


START
BI-SZZ

Jak lze implementovat stavový automat pomocí hradel a klopných obvodů? 

Back:

- **klopné obvody**
    - hranové _(flip-flop, FF)_
        - klopný obvod D _(D flip-flop)_
    - hladinové/úrovňové _(latch)_
        - klopný obvod R-S z NORů _(RS NOR latch)_ nebo s inverzními vstupy z NANDů
- je potřeba vypočítat maximální frekvenci hodin podle zpoždění hradel (jedno hradlo řádově v ns)
<!--ID: 1714747088016-->
END

---
