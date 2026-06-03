---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-08 NI-FME

> NI-SI-08 (NI-FME)
> Automatizace dokazování správnosti programů: principy, možnosti, omezení.

## Automatizace dokazování správnosti programů

START
NI-SZZ

Jaké je základní schéma **automatizace dokazování správnosti programů**?

Back:

Zdrojový kód se transformuje na logickou formuli, typicky **ověřovací podmínku**

Tuto formuli následně vyhodnotí **SMT solver**.
<!--ID: 1780493530559-->
END

---

START
NI-SZZ

Jaké jsou dvě **plně automatizované techniky** ověřování správnosti programů?

Back:

- **Symbolické provádění programů**
- **Ověření omezené správnosti programů** (Bounded Model Checking, BMC)
<!--ID: 1780493530562-->
END

---

## Principy

START
NI-SZZ

Co je hlavním cílem **symbolického provádění programů**?

Back:

Hlavním cílem je systematické **hledání chyb** (dříve se to používalo i na správnost, dnes spíše na hledání chyb).
<!--ID: 1780493530564-->
END

---

START
NI-SZZ

Jaký je rozdíl mezi **klasickým testováním** a **symbolickým prováděním**?

Back:

- **Klasické testování:** spouští program s konkrétními vstupy, např. `x = 5`.
- **Symbolické provádění:** analyzuje program se symbolickými hodnotami, např. vstupem je symbol `X`.
<!--ID: 1780493530567-->
END

---

START
NI-SZZ

Jak se při symbolickém provádění reprezentuje **stav programu**?

Back:

Místo konkrétních hodnot v paměti si verifikátor udržuje výrazy (např. po příkazu $x = x + 1$ je v paměti hodnota $X + 1$).
<!--ID: 1780493530570-->
END

---

START
NI-SZZ

Co je **path condition** (PC) při symbolickém provádění?

Back:

Když program narazí na větvení (např. `if (x > 0)`), verifikátor se **rozdělí do dvou větví**. 

Pro každou větev si buduje tzv. path condition – logickou formuli, která akumuluje podmínky nutné k tomu, aby se program do této větve dostal (např. $PC = X > 0$ pro true větev, $PC = \neg(X > 0)$ pro false větev).
<!--ID: 1780493530573-->
END

---

START
NI-SZZ

Jak se při **symbolickém provádění** ověřuje **aserce na konci každé cesty**?

Back:

Na konci každé symbolické cesty se aserce ověří tak, že se solver zeptá, zda za předpokladu platnosti $PC$ (path condition) může aserce selhat.
<!--ID: 1780493530575-->
END

---

START
NI-SZZ

Jak **symbolické provádění** využívá **SSA formu**?

Back:

**Každá verze proměnné má unikátní jméno** (`x_0`, `x_1`, ...).

Přiřazení se překládají na rovnosti a připojují se ke stávající path condition, takže analýza může postupovat přímo odpředu dozadu.
<!--ID: 1780493530578-->
END

---


START
NI-SZZ

Jak **symbolické provádění** dojde k závěru, zda je kód správný?

Back:

1. Pro každou cestu použije SSA a sestrojí ověřovací podmínku
2. Ověřovací podmínka se předá **SMT**, který ji dokáže
<!--ID: 1780493530581-->
END

---


START
NI-SZZ

Jaké jsou problémy **symbolického provádění** a **SSA**? (2)

Back:

- **nerozhodnutelné** teorie - některé věci prostě nejde dobře rozhodnout (např. nelineární operace na celých číslech)
- **použití externích funkcí** - když používáme externí funkce (což se v programování dělá furt), tak jejich správnost neověříme
<!--ID: 1780493530583-->
END

---

## Možnosti

START
NI-SZZ

Co je **Bounded Model Checking** (BMC)?

Back:

BMC je **metoda automatické verifikace**, která ověřuje správnost programu jen do zvolené **konečné hloubky** `k`.

Problém totiž je, že verifikace programů s cykly vyžaduje, aby člověk vymyslel induktivní invariant a to je extrémně těžký dělat automaticky.
<!--ID: 1780493530586-->
END

---


START
NI-SZZ

Jaký je **princip fungování BMC**?

(aneb jak se pracuje se smyčkama)

Back:

Smyčky a rekurze se rozbalí (_unroll_) přesně $k$-krát.

Podmínka cyklu po $k$-té iteraci se nahradí asercí (_unwinding assertion_), která hlídá, zda program nepotřeboval běžet déle.
<!--ID: 1780493530589-->
END

---


START
NI-SZZ

Proč je **BMC plně automatické**, zatímco **úplná verifikace smyček často není**?

Back:

BMC **nemusí hledat induktivní invariant**.

Smyčku jen konečněkrát rozbalí a ověří vzniklou konečnou formuli. Úplná verifikace ale potřebuje invariant, který obecně automaticky vygenerovat nejde.
<!--ID: 1780493530591-->
END

---

START
NI-SZZ

Jak BMC využívá **SSA formu**?

Back:

Po rozbalení smyček vznikne **dlouhá lineární sekvence příkazů**. Celá tato šílenost se přeloží do **SSA** (takže tam bude hromada těch přiřazení)
<!--ID: 1780493530594-->
END

---

START
NI-SZZ

Co je **rozhodovací procedura**?

Back:

Rozhodovací procedura je **algoritmus**, který pro **formule** v dané **logické teorii** v konečném čase rozhodne, zda jsou splnitelné (**SAT**) nebo nesplnitelné (**UNSAT**).

SMT solver implementuje rozhodovací procedury
<!--ID: 1780493530597-->
END

---

START
NI-SZZ

Jakou roli mají rozhodovací procedury v **SMT solverech**?

Back:

SMT solvery kombinují rozhodování o **booleovské struktuře formule** s **rozhodovacími procedurami pro konkrétní teorie**.

Např. pro aritmetiku, rovnost s neinterpretovanými funkcemi nebo teorie polí.
<!--ID: 1780493530600-->
END

---

START
NI-SZZ

Jaké **příklady rozhodovacích procedur** se v NI-FME zmiňují? (2)

Back:

- **Simplexový algoritmus**
- **Congruence closure**
<!--ID: 1780493530602-->
END

---

START
NI-SZZ

Jaké jsou možné **výsledky řešiče pro výrokovou logiku**?

Back:

- **splňující ohodnocení**, pokud je formule splnitelná
- nebo **informace, že není splnitelná**
<!--ID: 1780493530605-->
END

---

## Omezení

START
NI-SZZ

Jaké jsou hlavní **teoretická omezení** automatizace **dokazování správnosti programů**? (2)

Back:

- **Halting problem** - nemůžeme automaticky rozhodnout, že se program zastaví
- **Gödelova věta o neúplnosti** - jakákoliv dostatečně silná logická formule obsahuje pravdivá tvrzení, která v rámci ní nelze dokázat

Takže jsme v háji, protože až AI sebere všechny práce, tak jediný, na co se lidi budou používat, bude dokazování správnosti programů pomocí NI-FME ( ͡° ͜ʖ ͡°)
<!--ID: 1780493530608-->
END

---

START
NI-SZZ

Jaká jsou hlavní **praktická omezení** automatizace **dokazování správnosti programů**? (3)

Back:

- **Výpočetní složitost** - SAT solver je NP-úplný. Když k tomu přidáme ty bullshity z dalších teorií (teorie polí, aritmetika), tak to je extrémně výpočetně a paměťově náročný
- **Kvantifikátory** - Když používáme kvantifikátory ($\forall, \exists$), tak solver musí používat spešl heuristiky, které ale často nejsou kompletní, takže ten solver třeba nedokáže najít správnou instanci a selže
- **Omezení BMC** - je sice plně automatické, ale poskytuje záruky jen do hloubky $k$
<!--ID: 1780493530610-->
END

---

START
NI-SZZ

Jaké je omezení **z hlediska invariantů** při automatizaci **dokazování správnosti programů**?

Back:

Pro dokazování správnosti potřebujeme **invarianty** smyček. Ty ovšem automatizace nedokáže (až na triviální případy) generovat.

**Člověk** musí porozumět logice programu a **invarianty SMT solveru dodat**.

Bez správného invariantu nelze cyklus ověřit.
<!--ID: 1780493530613-->
END

---
