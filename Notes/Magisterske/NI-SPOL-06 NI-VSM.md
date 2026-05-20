---
created: 2025-10-16T10:05:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SPOL-06 NI-VSM

> NI-SPOL-06 (NI-VSM)
> Testování statistických hypotéz. T-testy, testy nezávislosti, testy dobré shody.

<!--
TODO:
- zde asi přihodit aspoň jak spočítat střední hodnotu, var X a další základní blbosti
- Jak spočíst X_n (čárka nad tím)
- Jak spočíst s_n
- Jak spočíst z_alpha/2
- Jak spočíst t_alpha/2
-->

## Testování statistických hypotéz

<!--
Original Flashcard ID: 1746599650006
-->

START
NI-SZZ

Definice: **Nulová a alternativní hypotéza**

Back:

![](../../Assets/Pasted%20image%2020250320105209.png)

Alternativní hypotézu typicky dávám to co mi vadí. Např. když testuju střední hodnotu spotřeby paliva, tak mi nevadí, když to bude míň, ale vadí mi, když to bude víc.

Pozn.
![](../../Assets/Pasted%20image%2020250320105219.png)

zamítneme = jsme si jistí s určitou pravděpodobností
nezamítneme = nemáme tolik dat abychom mohli zamítnout

<!--ID: 1778521859929-->
END

---

<!--
Original Flashcard ID: 1746599650013
-->

START
NI-SZZ

Jaké jsou **chyby** při testování hypotéz?

Back:

![](../../Assets/Pasted%20image%2020250320105240.png)

Vysvětlení:

- Testujeme člověka na covid a můžou se stát dvě chyby:
	- Má covid a my ho do karantény nedáme - to je ta horší varianta (chyba prvního druhu)
	- Nemá covid a dáme ho do karantény - furt chyba, ale není tak hrozná (chyba druhého druhu)

Tzn. dobrý postup je:

- Předpokládáme, že je nemocný a pouze pokud bude mít dost protilátek, tak ho prohlásíme za zdravého

<!--ID: 1778521859932-->
END

---

<!--
Original Flashcard ID: 1746599650020
-->

START
NI-SZZ

**Co říkáme**, když testujeme hypotézu?

Back:

![](../../Assets/Pasted%20image%2020250320105259.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250320105306.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859935-->
END

---

<!--
Original Flashcard ID: 1746599650027
-->

START
NI-SZZ

Definice: **Kritický obor**

Back:

![](../../Assets/Pasted%20image%2020250320105335.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250320105341.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859937-->
END

---

<!--
Original Flashcard ID: 1746599650039
-->

START
NI-SZZ

Definice: $p$-hodnota

Back:

![](../../Assets/Pasted%20image%2020250322113850.png)

Je to minimální hladina významnosti, na které lze zamítnout $H_0$ **při daném pozorování**.

![](../../Assets/Pasted%20image%2020250322075825.png)

<!--ID: 1778521859940-->
END

---

<!--
Original Flashcard ID: 1746599650047
-->

START
NI-SZZ

Jaký **význam** má $p$-hodnota?

Back:

P-hodnota mi říká, jaká je pravděpodobnost, že bychom daný výsledek dostali čistě náhodou, pokud platí nulová hypotéza.

![](../../Assets/Pasted%20image%2020250322075840.png)

<!--ID: 1778521859943-->
END

---

<!--
Original Flashcard ID: 1746599650053
-->

START
NI-SZZ

Lemma: **rozdělení p-hodnoty**

Back:

![](../../Assets/Pasted%20image%2020250322075855.png)

Jinými slovy "když je všechno hezký", tak $p$-hodnota má uniformní rozdělení

Když je všechno hezký = pravděpodobnost 1. druhu je vždy $\alpha$, pak vím, že distribuční funkce p hodnoty je v bodě $u$ rovna $u$, tedy je to distribuční funkce Uniformního rozdělení

<!--ID: 1778521859945-->
END

---

<!--
Original Flashcard ID: 1746599650061
-->

START
NI-SZZ

Jaké jsou 2 typy hypotéz (podle parametrů) a co znamenají?

Back:

Máme nasbíraná data a můžeme udělat testy:

- **Parametrické** - řekneme si, že to má asi nějaké rozdělení a zkoumáme jaké by to mělo parametry (průměr, rozptyl)
- **Neparametrické** - zkoumáme vlastnosti rozdělení obecně (tvar, medián, nezávislost,...)

![](../../Assets/Pasted%20image%2020250322075915.png)

<!--ID: 1778521859948-->
END

---

<!--
Original Flashcard ID: 1746599650068
-->

START
NI-SZZ

Jaké jsou **2 typy hypotéz** podle **množství rozdělení**?

Back:

![](../../Assets/Pasted%20image%2020250322075944.png)

<!--ID: 1778521859950-->
END

---

<!--
Original Flashcard ID: 1747739265159
-->

START
NI-SZZ

Přehled: Jaké všechny **statistické testy** jsme ve VSM probírali? (6)

Back:

**Testy bez použití testové statistiky** (to jsme dělali na PST)

- $\mu$ při známém rozptylu
- $\mu$ při neznámém rozptylu
- $\sigma^2$

**Základní testy s využitím statistiky:**

- **Jednovýběrový t-test** - testujeme jestli $\mu$ nebo $\sigma^2$ odpovídá odhadům
	- $\mu$ při známém rozptylu
	- $\mu$ při neznámém rozptylu
	- $\sigma^2$

**Testy s více rozděleními** (testujeme rovnost středních hodnot $\mu_1 = \mu_2$):

- **Párový t-test** - u obou rozděleních máme stejné množství dat
	- při neznámém rozptylu (ten odhadnem z $Z$)
- **Dvouvýběrový t-test** - můžeme mít různé množství dat
	- $\mu$ při stejných rozptylech $\sigma_1^2 = \sigma_2^2$
	- $\mu$ při různých rozptylech $\sigma_1^2 \neq \sigma_2^2$

**Multinomické rozdělení**:

- $\chi^2$ **test Multinomického rozdělení** - testujeme, že data odpovídají nějakému rozdělení (resp. že pravděpodobnosti spadnutí do binu odpovídají očekávaným pravděpodobnostem)
	- $p'=p$ při známých parametrech
	- $p'=p$ při neznámých parametrech
- **Kontingenční tabulka** - testujeme nezávislost dvou rozdělení

<!--ID: 1778521860042-->
END

---

<!--
Original Flashcard ID: 1746599650075
-->

START
NI-SZZ

Jak funguje **parametrický test hypotézy proti oboustranné alternativě**?

Back:

1. Určíme $H_0: \theta = \theta_0$ proti $H_A: \theta \neq \theta_0$
2. Sestavíme oboustranný interval $(L,U)$ pro dané $\alpha$
3. Rozhodneme:
   1. Zamítneme hypotézu $H_0$, jestliže $\theta_0 \not \in (L,U)$
   2. Nezamítneme $H_0$, jestliže $\theta_0 \in (L,U)$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250322080101.png)
![](../../Assets/Pasted%20image%2020250322080109.png)
![](../../Assets/Pasted%20image%2020250322080141.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859953-->
END

---

<!--
Original Flashcard ID: 1746599650082
-->

START
NI-SZZ

Jak funguje **parametrický test hypotézy proti jednostranné alternativě**?

Back:

1. Určíme $H_0: \theta \leq \theta_0$ proti $H_A: \theta \gt \theta_0$
2. Sestavíme oboustranný interval $(L,+\infty)$ pro dané $\alpha$
3. Rozhodneme:
   1. Zamítneme hypotézu $H_0$, jestliže $\theta_0 \not \in (L,+\infty)$
   2. Nezamítneme $H_0$, jestliže $\theta_0 \in (L,+\infty)$

Analogicky pro $\geq$ (jen to bude všechno otočené)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250322080127.png)
![](../../Assets/Pasted%20image%2020250322080133.png)
![](../../Assets/Pasted%20image%2020250322080141.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859956-->
END

---

<!--
Original Flashcard ID: 1746599650089
-->

START
NI-SZZ

Jak provedu:
![](../../Assets/Pasted%20image%2020250322080207.png)

při **známém** a **neznámém** rozptylu

Back:

![](../../Assets/Pasted%20image%2020250322080213.png)

<!--ID: 1778521859958-->
END

---

<!--
Original Flashcard ID: 1746599650097
-->

START
NI-SZZ

Proč není nutné hlídat, jestli má výběr **normální rozdělení** při testování pro střední hodnotu?

Back:

Protože podle centrální limitní věty to rozdělení se stejně bude v limitě chovat jako normální.

<!--ID: 1778521859961-->
END

---

<!--
Original Flashcard ID: 1746599650104
-->

START
NI-SZZ

Jak provedu:
![](../../Assets/Pasted%20image%2020250322080223.png)

Back:

![](../../Assets/Pasted%20image%2020250322080228.png)

<!--ID: 1778521859964-->
END

---

<!--
Original Flashcard ID: 1746599650111
-->

START
NI-SZZ

Jak provedu:
![](../../Assets/Pasted%20image%2020250322080237.png)

při **známém** a **neznámém** rozptylu

Back:

![](../../Assets/Pasted%20image%2020250322080244.png)

<!--ID: 1778521859966-->
END

---

<!--
Original Flashcard ID: 1746599650118
-->

START
NI-SZZ

Jak provedu:
![](../../Assets/Pasted%20image%2020250322080254.png)

Back:

![](../../Assets/Pasted%20image%2020250322080300.png)

<!--ID: 1778521859969-->
END

---

<!--
Original Flashcard ID: 1746518364826
-->

START
NI-SZZ

Jak funguje **Testování hypotéz pomocí testových statistik**?

Back:

![](../../Assets/Pasted%20image%2020250322113810.png)

Základní idea je, že naměřené výsledky dáme do funkce $T$, u které při platnosti nulové hypotézy známe její rozdělení. Tuto statistiku ($T$) nazýváme testovou statistikou.

Zadefinuju si kritickou sekci/oblast $S_\alpha$. Pokud se ta statistika trefí tam, tak to zamítneme.

Statistikou může být například průměr.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250322100849.png)
![](../../Assets/Pasted%20image%2020250322080446.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521859971-->
END

---

<!--
Original Flashcard ID: 1746518364832
-->

START
NI-SZZ

Kde se na grafu nachází p hodnota?

(na tohle se prý můžou ptát u zkoušky)

Back:

Těsně na hranici zamítnutí a nezamítnutí

<!--ID: 1778521859974-->
END

---

<!--
Original Flashcard ID: 1746518364834
-->

START
NI-SZZ

Jaký je rozdíl mezi **normálním testováním** a **testování pomocí statistiky**?

Back:

Je to v zásadě to samé, testování pomocí statistiky nám umožňuje to jednodušeji porovnávat, je to takové přehlednější

<!--ID: 1778521859977-->
END

---

## T-testy, testy nezávislosti, testy dobré shody

<!--
Original Flashcard ID: 1746599651205
-->

START
NI-SZZ

Popiš jak provést **testování dobré shody**

Back:

Máme data $X_1, \dots, X_n$ a myslíme si, že to má nějaké rozdělení $F_0$ - to chceme ověřit.

1. Rozdělníme data do binů tak, aby v každém bylo teoreticky aspoň 5 hodnot
2. Napočítáme počty pozorování, co padnou do těch binů $N_i$
3. Spočteme pravděpodobnost $p_i$, že to padne do $i$ tého binu
4. Pak spočteme $\chi^{2}(\textbf{X})$ (které při velkým $n$ odpovídá $\chi^2(k-1-p)$)
5. Pokud $\chi^{2}(\textbf{X}) \geq \chi^{2}_{\alpha,k-1-p}$ tak zamítáme $H_0$

Je vhodné, aby ty _teoretické_ četnosti v každém binu měly alespoň 5. Když by to bylo méně než 5, tak není zaručeno, že mi vyjde chí kvadrát

![](../../Assets/Pasted%20image%2020250329132648.png)

<!--ID: 1778521859980-->
END

---

<!--
Original Flashcard ID: 1746599651216
-->

START
NI-SZZ

Jak funguje **test v kontingenční tabulce**?

Back:

1. Máme 2 rozdělení $Y$ a $Z$ a chcem otestovat jestli jsou nezávislé, tedy $H_0$: jsou nezávislé, $H_A$ jsou závislé
2. **Uděláme tabulku naměřených hodnot** a jejich součtů ve sloupcích a řádcích
3. **Uděláme tabulku pravděpodobností**, kde spočteme pravděpodobnosti, že se trefíme do daného chlívečku, sloupce a řádku (hodnoty předchozí tabulky jen vydělíme celkovým počtem hodnot $n$)
4. Sestavíme $\chi^2$ podle vzorečku níže (podobně jako u dobré shody, jen to dělám u 2D rozdělení)

![](../../Assets/Pasted%20image%2020250329134349.png)

<!--ID: 1778521859982-->
END

---

<!--
Original Flashcard ID: 1746599651223
-->

START
NI-SZZ

Co můžu udělat, když mám biny s málo prvky?

Back:

Můžu je spojit.

<!--ID: 1778521859985-->
END

---

<!--
Original Flashcard ID: 1746599651235
-->

START
NI-SZZ

Jaké jsou 2 způsoby testování?

Back:

Varianta 1:

1. Uděláme "předprůzkum" - zkusíme test shody rozptylů
   1. Pokud nezamítneme, zkusíme T-Test
   2. Pokud zamítneme, zkusíme Welchův test

Varianta 2 - uděláme testovou baterii:

1. Uděláme Leven. test
   1. Pokud nezamítneme, uděláme T-Test
   2. Pokud zamítneme, použijeme Welchův test

Lepší je prý dělat tu první variantu

<!--ID: 1778521859987-->
END

---

<!--
Original Flashcard ID: 1746518364840
-->

START
NI-SZZ

Jak funguje: **jednovýběrový t-test pro $\mu$ při známém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113921.png)

Pozn. $\mu_0$ je ta střední hodnota, co bychom teoreticky očekávali.. Idk, to značení mi přijde trošku matoucí - Morčín

![](../../Assets/Pasted%20image%2020250322080717.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250322080818.png)

<!-- ExerciseEnd -->

<!--ID: 1778521859990-->
END

---

<!--
Original Flashcard ID: 1746518364842
-->

START
NI-SZZ

Jak funguje: **jednovýběrový t-test pro $\mu$ při neznámém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113932.png)

Pozn. $\mu_0$ je ta střední hodnota, co bychom teoreticky očekávali.. Idk, to značení mi přijde trošku matoucí - Morčín

![](../../Assets/Pasted%20image%2020250322080731.png)

<!--ID: 1778521859993-->
END

---

<!--
Original Flashcard ID: 1747730582227
-->

START
NI-SZZ

Jak funguje: **jednovýběrový t-test pro $\sigma^2$**?

Back:

![](../../Assets/Pasted%20image%2020250322080751.png)

<!--ID: 1778521859995-->
END

---

<!--
Original Flashcard ID: 1746518364846
-->

START
NI-SZZ

Popiš jak udělat **párový $t$-test**

Back:

Máme páry hodnot $(X_i, Y_i)$ (např. tlak pacienta před operaci a po ní). Toto dvojrozměrné rozdělení má střední hodnoty $(\mu_1, \mu_2)^T$. My testujeme, jestli jsou stejné.

Testujeme hypotézu: $H_0: \mu_1 = \mu_2$ oproti $H_A : \mu_1 \neq \mu_2$

1. Vytvoříme rozdělení $Z$, kde $Z_i = X_i - Y_i$
2. Spočteme odhad rozptylu $s^2_Z$ a výběrový průměr $\bar{Z}_n$
3. Provedeme test:

![](../../Assets/Pasted%20image%2020250520105256.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250322080839.png)

<!-- DetailInfoEnd -->

Pozn. párový t-test dává smysl používat u subjektů, které se nemění. Např. tlak **stejného** pacienta před operací a po operaci.

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250322080846.png)

<!-- ExerciseEnd -->

<!--ID: 1778521859998-->
END

---

<!--
Original Flashcard ID: 1746518364848
-->

START
NI-SZZ

Jak funguje: **dvouvýběrový t-test**? (obecně)

Back:

Chceme testovat jestli 2 výběry mají stejné střední hodnoty. Tady na rozdíl od párového t-testu máme nezávislý výběr (tzn. náhodně vybíráme) - pozor, může být ale stejný.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250322080904.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521860000-->
END

---

<!--
Original Flashcard ID: 1746518364851
-->

START
NI-SZZ

Popiš jak udělat **dvouvýběrový t-test při stejných rozptylech**

Back:
Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)

![](../../Assets/Pasted%20image%2020250322114002.png)

Pozn. Když zkoumám rovnost, tak vždy $H_0$ je rovnost a $H_A$ je nerovnost.

![](../../Assets/Pasted%20image%2020250322080926.png)

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250322081003.png)

<!-- ExerciseEnd -->

<!--ID: 1778521860003-->
END

---

<!--
Original Flashcard ID: 1746518364854
-->

START
NI-SZZ

Popiš jak udělat **dvouvýběrový t-test při různých rozptylech**

Back:

Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)

![](../../Assets/Pasted%20image%2020250322114023.png)

![](../../Assets/Pasted%20image%2020250322080940.png)

<!--ID: 1778521860006-->
END

---

<!--
Original Flashcard ID: 1746518364856
-->

START
NI-SZZ

**Kdy** bych měl použít **párový vs dvouvýběrový test**?

Back:

Pokud mám dva výběry, které mají **stejnou délku** a ta data jsou párová, tedy jsou nad stejnými subjekty, je lepší použít **párový test**. Dvouvýběrový je obecně méně přesný.

Pokud by ta data ovšem nebyla párová, je třeba použít vždy ten dvouvýběrový. Jinak to je chyba.

<!--ID: 1778521860008-->
END

---

<!--
Original Flashcard ID: 1746599649731
-->

START
NI-SZZ

Definice: **Multinomické rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250329084510.png)

Mutlinomické rozdělení je jako binomické (např. házíme několikrát mincí), ale s více možnými výstupy (např. házíme několikrát kostkou).

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084519.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250520115857.png)

<!-- ExampleEnd -->

<!--ID: 1778521860011-->
END

---

<!--
Original Flashcard ID: 1746599649738
-->

START
NI-SZZ

Jak se spočte $EN_i$ u multinomického rozdělení?

Back:

![](../../Assets/Pasted%20image%2020250329103530.png)

<!--ID: 1778521860014-->
END

---

<!--
Original Flashcard ID: 1746599649745
-->

START
NI-SZZ

Jak se spočte $\text{var} N_i$ multinomického rozdělení?

Back:

![](../../Assets/Pasted%20image%2020250329103559.png)

<!--ID: 1778521860018-->
END

---

<!--
Original Flashcard ID: 1746599649752
-->

START
NI-SZZ

Jak se spočte $\text{cov }(N_i, N_j)$ multinomického rozdělení?

Back:

$$\text{cov}(N_i,N_j)=-np_ip_j$$
pro každé $i \neq j$

<!--ID: 1778521860021-->
END

---

<!--
Original Flashcard ID: 1746599649760
-->

START
NI-SZZ

Věta: **Pearsonova statistika**

Back:

![](../../Assets/Pasted%20image%2020250329084536.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084545.png)

<!-- DetailInfoEnd -->

<!--ID: 1778521860024-->
END

---

<!--
Original Flashcard ID: 1746599649767
-->

START
NI-SZZ

Jak se provede **test $\chi^2$ multinomického rozdělení** při známých parametrech?

Back:

1. Naměříme nějaké hodnoty, např. kolikrát padla na pětistranné kostce $1, 2, 3, 4, 5$
2. Chceme srovnat, že ty pravděpodobnosti odpovídají našem odhadům (např. naměřili jsme $p' = (19\%, 20\%, 21\%, 21\%, 19\%)$ a čekali bychom všude bude $20\%$)
3. Tzn. testujeme, že se mi shodují naměřené pravděpodobnosti s těmi, co bychom očekávali

![](../../Assets/Pasted%20image%2020250520121548.png)
![](../../Assets/Pasted%20image%2020250520121618.png)

$np_i$ je počet naměřených hodnot v daném binu

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084640.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250329084649.png)

<!-- ExampleEnd -->

<!--ID: 1778521860026-->
END

---

<!--
Original Flashcard ID: 1747736448027
-->

START
NI-SZZ

Jaké kritérium musí být dodrženo pro provedení **testu $\chi^2$ multinomického rozdělení** při známých parametrech? (2 možnosti)

Back:

1. $np_i \geq 5$ pro každý "bin"
2. Nebo pokud $k \geq 3$ **Yarnoldovo kritérium**: $np_i \geq q$, kde $q$ je podíl tříd, pro které platí $np_i \lt 5$

<!--ID: 1778521860029-->
END

---

<!--
Original Flashcard ID: 1746518364800
-->

START
NI-SZZ

Jak se provede **test $\chi^2$ multinomického rozdělení při neznámých parametrech**?

Back:

**Stejné jako při známých parametrech**, akorát neznáme parametry daného rozdělení, takže parametry odhadneme a do testu (u kritického oboru) pak dosadíme počet odhadovaných parametrů $m$

![](../../Assets/Pasted%20image%2020250520122726.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084725.png)
![](../../Assets/Pasted%20image%2020250329084711.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020250329084734.png)
![](../../Assets/Pasted%20image%2020250329084741.png)

<!-- ExampleEnd -->

<!--ID: 1778521860031-->
END

---

<!--
Original Flashcard ID: 1746518364802
-->

START
NI-SZZ

Kolik prvků musí být "v každém chlívečku" u Chí kvadrát rozdělení?

Back:

V každém chlívečku by mělo být 5 prvků, aby se to blížilo nekonečnu.

![](../../Assets/Pasted%20image%2020250329113530.png)

<!--ID: 1778521860034-->
END

---

<!--
Original Flashcard ID: 1746518364805
-->

START
NI-SZZ

Definice: **kontingenční tabulka** a **matice pravděpodobností**

Back:

1. Máme náhodný vektor $X=(Y,Z)^T$ - tzn. sledujeme 2 dimenze (např. pohlaví a oblíbený nápoj)
2. **Kontingenční tabulka** je tabulka s těma 2 dimenzema a naměřenýma hodnotama
3. **Matice pravděpodobností** je pak tabulka, kterou spočteme z té kontingenční. Říká nám, jaká je pravděpodobnost, že se trefíme do daného chlívečku

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020250329084822.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084806.png)

![](../../Assets/Pasted%20image%2020250329084831.png)

<!-- DetailInfoEnd -->

<!-- ExplanationStart -->

Background:
Řekněme, že máme test, uděláme si "chlívečky", ale po tom, co naměříme data, tak nám hodně chlívečků vyjde s méně prvky než 5.

V tu chvíli musím udělat to, co je statisticky trošku shady, a to je že ty chlívečky připravím podle toho, jaká jsou ty data.

Prý to je podobné jako když si natrénuju AI na nějaké množině dat a pak když to testuju, tak to testuju opět na té množině. Není to vyloženě chyba, ale bude mi to pak dávat trochu jiný výsledky.

Matice kontingenční tabulky:
Funguje to jako v předchozím případě, akorát pro dva rozměry - udělám si "chlívečky" ve 2d a sleduju kam se mi jaký vektor trefí. Pak to jen posčítám a udělám z toho statistiku

Vysvětlení vzorečku:

- Vždy bereme co jsme naměřili a odečteme od toho, co máme v nulové hypotéze

<!-- ExplanationEnd -->

<!--ID: 1778521860037-->
END

---

<!--
Original Flashcard ID: 1746518364808
-->

START
NI-SZZ

Jak se provádí **test nezávislosti v kontingenčních tabulkách**?

Back:

Testujeme že se rovnají naměřené pravděpodobnosti očekávaným pravděpodobnostem

![](../../Assets/Pasted%20image%2020250520124014.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250329084855.png)

<!-- DetailInfoEnd -->

<!-- ExerciseStart -->

![](../../Assets/Pasted%20image%2020250329084907.png)

<!-- ExerciseEnd -->

<!--ID: 1778521860039-->
END

---
