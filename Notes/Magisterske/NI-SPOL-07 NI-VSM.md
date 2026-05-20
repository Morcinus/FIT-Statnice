---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-07 NI-VSM

> NI-SPOL-07 (NI-VSM)
> Základy teorie informace a kódování, entropie.

<!--
TODO:
- Přidat sem definici pravděpodobnostního prostoru.. opakovaně se to vyskytuje v definicích
- Jak spočíst H_D(x)
- Co je chí v definici kódu a kódového slova
- Co je optimální kód? (dát k první zmínce o optimalitě)
- Dát entropii před kódy + dát definici entropie před další kartičky
- Přidat kartičku co nám říká entropie (hned po entropii)
- Jaký je význam vzájemné informace? (a I)
- Jaký je význam D (relativní entropie)
- Možná ještě jak spočítat hustotu f(x), resp. marginální hustotu f(x) a f(y) sdruženého rozdělení X a Y
-->

## Základy teorie informace a kódování

<!--
Original Flashcard ID: 1746518364901
-->

START
NI-SZZ


Definice: kód a kódové slovo

Back:

![](../../Assets/Pasted%20image%2020250307130454.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250307130500.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307130507.png)

<!-- ExampleEnd -->

<!--ID: 1778521859806-->
END

---

<!--
Original Flashcard ID: 1746518364903
-->

START
NI-SZZ


Definice: střední délka kódu

Back:

![](../../Assets/Pasted%20image%2020250307130525.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307130536.png)

<!-- ExampleEnd -->

<!--ID: 1778521859812-->
END

---

<!--
Original Flashcard ID: 1746518364906
-->

START
NI-SZZ


Definice: **nesingulární kód**

Back:

![](../../Assets/Pasted%20image%2020250307130549.png)

Prosté zobrazení - každý prvek se zobrazí na něco jiného:
![](../../Assets/Pasted%20image%2020250521094622.png)

<!--ID: 1778521859815-->
END

---

<!--
Original Flashcard ID: 1746518364909
-->

START
NI-SZZ


Definice: **Rozšíření kódu**

Back:

![](../../Assets/Pasted%20image%2020250307130602.png)

Tzn. Zobrazení z množiny zpráv do množiny zakódovaných zpráv.

<!--ID: 1778521859818-->
END

---

<!--
Original Flashcard ID: 1746518364911
-->

START
NI-SZZ


Definice: **jednoznačně dekódovatelný kód**

Back:

![](../../Assets/Pasted%20image%2020250307130625.png)

<!--ID: 1778521859820-->
END

---

<!--
Original Flashcard ID: 1746518364914
-->

START
NI-SZZ


Definice: **instantní kód**

Back:

![](../../Assets/Pasted%20image%2020250307130636.png)

<!--ID: 1778521859823-->
END

---

<!--
Original Flashcard ID: 1746518364917
-->

START
NI-SZZ


Jak jsou hierarchicky uspořádány kódy:

- **Jednoznačně dekódovatelné**
- **Instantní**
- **Nesingulární**
- **Všechny**

Back:

![](../../Assets/Pasted%20image%2020250307130717.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307130725.png)

<!-- ExampleEnd -->

<!--ID: 1778521859825-->
END

---

<!--
Original Flashcard ID: 1746518364920
-->

START
NI-SZZ


Věta: **Kraftova nerovnost**

Back:

![](../../Assets/Pasted%20image%2020250307130740.png)

<!--ID: 1778521859828-->
END

---

<!--
Original Flashcard ID: 1746518364923
-->

START
NI-SZZ


Věta: **McMillan**

(pozn. tato věta je velice důležitá)

Back:

![](../../Assets/Pasted%20image%2020250307130753.png)

Je to jakoby to samé jako Kraftova nerovnost ale pro jednoznačně dekódovatelné kódy

<!--ID: 1778521859831-->
END

---

<!--
Original Flashcard ID: 1746518364926
-->

START
NI-SZZ


Věta: **Dolní mez střední délky instantního kódu**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130827.png)

<!--ID: 1778521859833-->
END

---

<!--
Original Flashcard ID: 1746518364928
-->

START
NI-SZZ


Věta: **Střední délka optimálního kódu** (omezení té střední délky)

Back:

![](../../Assets/Pasted%20image%2020250307155922.png)

<!--ID: 1778521859836-->
END

---

<!--
Original Flashcard ID: 1746518364931
-->

START
NI-SZZ


Algoritmus: **Huffmanovo kódování**

Back:

![](../../Assets/Pasted%20image%2020250307155942.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307155959.png)
![](../../Assets/Pasted%20image%2020250307160010.png)

<!-- ExampleEnd -->

<!--ID: 1778521859838-->
END

---

<!--
Original Flashcard ID: 1746518364934
-->

START
NI-SZZ


Věta: **Optimalita Huffmanova kódu**

Back:

![](../../Assets/Pasted%20image%2020250307160038.png)

<!--ID: 1778521859841-->
END

---

## Entropie

<!--
Original Flashcard ID: 1746518365066
-->

START
NI-SZZ


Jak lze Entropii zapsat pomocí střední hodnoty?

Back:

![](../../Assets/Pasted%20image%2020250318105903.png)

<!--ID: 1778521859844-->
END

---

<!--
Original Flashcard ID: 1746518365068
-->

START
NI-SZZ

Jaké rozdělení má maximální entropii?

Back:

Rovnoměrné rozdělení

<!--ID: 1778521859846-->
END

---

<!--
Original Flashcard ID: 1746599650130
-->

START
NI-SZZ

Definice: **Etropie**

Back:

![](../../Assets/Pasted%20image%2020250307125455.png)

Pozn. $\text{log} \ p(x)$ je dvojkový logaritmus.

<!-- ExplanationStart -->
Entropie nám říká "kolik informace průměrně dostanu z jednoho symbolu" a tedy "jak moc lze teoreticky data zkomprimovat". Resp. vpodstatě entropie znamená "jak moc jsou data nepředvídatelná".

Pokud by byla všechna písmena stejně pravděpodobná, tak to komprimace moc nepomůže. Pokud se ale některá písmena opakují často, můžem pro ně zvolit kratší kód, což je efektivnější.

To je pak princip Huffmanova kódování.
<!-- ExplanationEnd -->


<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250307125501.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307125655.png)

<!-- ExampleEnd -->

<!--ID: 1778521859849-->
END

---

<!--
Original Flashcard ID: 1746599650137
-->

START
NI-SZZ


Co jsou jednotky entropie bit, dit a nat?

Back:

![](../../Assets/Pasted%20image%2020250307125549.png)

b je báze toho logaritmu

<!--ID: 1778521859851-->
END

---

<!--
Original Flashcard ID: 1746599650144
-->

START
NI-SZZ


Definice: **míra neurčitosti**

Back:

**Míra neurčitosti**:
$$I(x) = -\log p(x)$$

Entropie je tedy očekávanou mírou neurčitosti:
$$H(X)=EI(X)$$

<!-- ExplanationStart -->
Míra neurčitosti nám říká "kolik informace nese daná událost".

Např. 
- "zítra vyjde slunce" nastává s pravděpodobností skoro $1$, takže když to řekneme, tak to nenese téměř žádnou novou informaci (tedy $I$ bude nízká)
- ale třeba informace "zítra spadne meteorit na Brno", tak nese hodně informace (tedy $I$ bude vysoká)
<!-- ExplanationEnd -->


<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250307125612.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859854-->
END

---

<!--
Original Flashcard ID: 1746599650151
-->

START
NI-SZZ


Lemma: **může být entropie záporná**?

Back:

![](../../Assets/Pasted%20image%2020250307125633.png)

<!--ID: 1778521859860-->
END

---

<!--
Original Flashcard ID: 1746599650158
-->

START
NI-SZZ


Definice: **sdružená entropie**

Back:

![](../../Assets/Pasted%20image%2020250307125720.png)

<!-- ExplanationStart -->

Je to vyloženě to samý jako u normální entropie, jen prostě se pohybuju na vícerozměrném prostoru (mám více náhodných veličin).

<!-- ExplanationEnd -->

<!--ID: 1778521859865-->
END

---

<!--
Original Flashcard ID: 1746599650165
-->

START
NI-SZZ


Definice: **Podmíněná entropie**

Back:

![](../../Assets/Pasted%20image%2020250307125742.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250307125749.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859867-->
END

---

<!--
Original Flashcard ID: 1746599650172
-->

START
NI-SZZ


Věta: **řetězové pravidlo pro entropii**

![](../../Assets/Pasted%20image%2020250521082604.png)

Back:

![](../../Assets/Pasted%20image%2020250307125802.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250307125812.png)

<!-- ExampleEnd -->

<!--ID: 1778521859870-->
END

---

<!--
Original Flashcard ID: 1746599650179
-->

START
NI-SZZ


Definice: **relativní entropie**

Back:

![](../../Assets/Pasted%20image%2020250307125823.png)

Pozor, tato vzdálenost není symetrická!
Tzn. $D(p||q) \neq D(q||p)$

<!-- ExplanationStart -->

Mám 2 rozdělení na jedné možině p a q. Díky tomuto můžu zkoumat rozdíly mezi těmi rozděleními

<!-- ExplanationEnd -->

<!--ID: 1778521859873-->
END

---

<!--
Original Flashcard ID: 1746599650186
-->

START
NI-SZZ


Definice: **vzájemná informace**

Back:

![](../../Assets/Pasted%20image%2020250307125838.png)

Říká mi to, kolik se toho dozvím o veličině $Y$, když znám hodnotu $X$ a obráceně.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250307125845.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859876-->
END

---

<!--
Original Flashcard ID: 1746599650193
-->

START
NI-SZZ


Věta:
![](../../Assets/Pasted%20image%2020250307125942.png)

Back:

![](../../Assets/Pasted%20image%2020250307125918.png)

<!--ID: 1778521859879-->
END

---

<!--
Original Flashcard ID: 1746599650200
-->

START
NI-SZZ


Věta:
![](../../Assets/Pasted%20image%2020250307130008.png)

Back:

![](../../Assets/Pasted%20image%2020250307125954.png)

<!--ID: 1778521859881-->
END

---

<!--
Original Flashcard ID: 1746599650206
-->

START
NI-SZZ


Věta:
![](../../Assets/Pasted%20image%2020250307130040.png)

Back:

![](../../Assets/Pasted%20image%2020250307130034.png)

<!--ID: 1778521859884-->
END

---

<!--
Original Flashcard ID: 1746599650213
-->

START
NI-SZZ


Věta:
![](../../Assets/Pasted%20image%2020250307130054.png)

Back:

![](../../Assets/Pasted%20image%2020250307130048.png)

<!--ID: 1778521859887-->
END

---

<!--
Original Flashcard ID: 1746599650220
-->

START
NI-SZZ


Věta: Jensenova nerovnost

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130116.png)

Připomenutí: $f$ je ryze konvexní, pokud spojnice libovolných dvou bodů leží nad grafem

<!--ID: 1778521859889-->
END

---

<!--
Original Flashcard ID: 1746518364889
-->

START
NI-SZZ


Věta: **Informační nerovnost**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130216.png)

<!--ID: 1778521859892-->
END

---

<!--
Original Flashcard ID: 1746518364892
-->

START
NI-SZZ


Věta: **Nezápornost vzájemné informace**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130230.png)

<!--ID: 1778521859895-->
END

---

<!--
Original Flashcard ID: 1746518364895
-->

START
NI-SZZ


Věta: **maximalizace entropie**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130246.png)

<!--ID: 1778521859897-->
END

---

<!--
Original Flashcard ID: 1746518364898
-->

START
NI-SZZ


Věta: **je $H(X|Y)$ nižší nebo vyšší než $H(x)$**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250307130304.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250307130316.png)

<!-- ExerciseEnd -->

<!--ID: 1778521859900-->
END

---

<!--
Original Flashcard ID: 1746518364862
-->

START
NI-SZZ


Definice: **Diferenciální entropie**

Back:

![](../../Assets/Pasted%20image%2020250320103243.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250320103249.png)

<!-- DetailInfoEnd -->

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250320103258.png)

<!-- ExerciseEnd -->

<!--ID: 1778521859903-->
END

---

<!--
Original Flashcard ID: 1746518364865
-->

START
NI-SZZ


Co je:
![](../../Assets/Pasted%20image%2020250320103325.png)

Back:

![](../../Assets/Pasted%20image%2020250320103330.png)
![](../../Assets/Pasted%20image%2020250320103338.png)

Neboli, pokud to dobře chápu, tak $H(X^\Delta)$ mi říká, že máme entropii **diskrétní** náhodné veličiny rozsekané do intervalů šířky $\Delta$ a tato entropie se spočte tím vzorcem nahoře (resp. tak to je definovaný).

Tzn. máme diskrétní entropii, tu rozsekáme na kousíčky a ty plochy zintegrujeme

<!--ID: 1778521859905-->
END

---

<!--
Original Flashcard ID: 1746518364868
-->

START
NI-SZZ


Věta: **vztah diferenciální a diskrétní entropie**

Back:

![](../../Assets/Pasted%20image%2020250320103404.png)

<!--ID: 1778521859908-->
END

---

<!--
Original Flashcard ID: 1746518364871
-->

START
NI-SZZ


Definice: **Sdružená diferenciální entropie**

Back:

![](../../Assets/Pasted%20image%2020250320103419.png)

<!--ID: 1778521859911-->
END

---

<!--
Original Flashcard ID: 1746518364873
-->

START
NI-SZZ


Definice: **Podmíněná diferenciální entropie**

Back:

![](../../Assets/Pasted%20image%2020250320103433.png)

<!--ID: 1778521859913-->
END

---

<!--
Original Flashcard ID: 1746518364876
-->

START
NI-SZZ


Definice: **Relativní entropie** (Kullback-Leiblerova vzdálenost) pro **spojité náhodné veličiny**

Back:

![](../../Assets/Pasted%20image%2020250320103509.png)

<!--ID: 1778521859916-->
END

---

<!--
Original Flashcard ID: 1746518364879
-->

START
NI-SZZ


Definice: **Vzájemná informace** $I(X;Y)$ **spojitých náhodných veličin**

Back:

![](../../Assets/Pasted%20image%2020250320103520.png)

<!--ID: 1778521859919-->
END

---

<!--
Original Flashcard ID: 1746518364881
-->

START
NI-SZZ


Věta: **Maximalizace diferenciální entropie**

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250320103605.png)

<!--ID: 1778521859921-->
END

---

<!--
Original Flashcard ID: 1746518364884
-->

START
NI-SZZ


Věta: $h(X) \leq \dots$ pro spojitou náhodnou veličinu s $\mu$ a oborem hodnot $[0,+\infty)$

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250320103652.png)

<!--ID: 1778521859924-->
END

---

<!--
Original Flashcard ID: 1746518364886
-->

START
NI-SZZ


Věta: $h(X) \leq 0$

+Kdy nastává rovnost?

Back:

![](../../Assets/Pasted%20image%2020250320103718.png)

<!--ID: 1778521859926-->
END

---