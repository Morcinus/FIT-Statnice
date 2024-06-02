---
created: 2024-06-01T19:55:51
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-13 LIN

> BI-SPOL-13 (LIN)
> Matice: součin matic, regulární matice, inverzní matice a její výpočet, vlastní čísla matice a jejich výpočet, diagonalizace matice.


START
BI-SZZ

Definice: **matice**

(tohle imo nemusíme umět přesně)

Back:

![](../Assets/Pasted%20image%2020240601195713.png)

![](../Assets/Pasted%20image%2020240601195744.png)

sloupec:
$$\Bbb{A}_{:j} = \begin{pmatrix} a_{1j} \\ a_{2j} \\ \vdots \\ a_{mj} \end{pmatrix}$$

řádek:
$$\Bbb{A}_{i:} = (a_{i1}~~a_{i2}~~\dots~~a_{in})​$$
<!--ID: 1717269874328-->
END

---


START
BI-SZZ

Definice: **množina všech matic** typu $m \times n$

(tohle imo stačí tušit)

Back:

![](../Assets/Pasted%20image%2020240601195734.png)
<!--ID: 1717269874331-->
END

---


START
BI-SZZ

Kdy se dvě matice rovnají?

Back:

Dvě matice se rovnají, pokud jsou **stejného typu** a **mají shodné všechny odpovídající prvky**.
<!--ID: 1717269874333-->
END

---


START
BI-SZZ

Definice: **Transpozice**

Back:

Buďte $m, n ∈ \Bbb{N}$ a $\Bbb{A} ∈ \Bbb{R}^{m,n}$ matice s prvky $a_{ij}$. **Transpozicí matice** $\Bbb{A}$ nazýváme matici z $\Bbb{R}^{n,m}$, jejíž prvek v $j$tém řádku a $i$tém sloupci je roven $a_{ij}$. Tuto matici značíme $\Bbb{A}^T$.

**Jinými slovy**: vezmeme řádky matice $\Bbb{A}$ a zapíšeme je do sloupců (při zachovaném pořadí).
<!--ID: 1717269874336-->
END

---


START
BI-SZZ

Definice: **Součin matic** (násobení matic)

Back:

![](../Assets/Pasted%20image%2020240601200212.png)

Jinými slovy: prostě starý dobrý šermování
<!--ID: 1717269874339-->
END

---


START
BI-SZZ

Co platí pro matice:

$$\Bbb{A}(\Bbb{B} + \Bbb{D}) = \ ???$$

Back:

$$\Bbb{A}(\Bbb{B} + \Bbb{D}) = \Bbb{AB} + \Bbb{AD}$$
<!--ID: 1717269874342-->
END

---


START
BI-SZZ

Co platí pro matice:

$$(\Bbb{A} + \Bbb{B})\Bbb{D} = \ ???$$

Back:

$$(\Bbb{A} + \Bbb{B})\Bbb{D} = \Bbb{AD} + \Bbb{BD}$$
<!--ID: 1717269874345-->
END

---


START
BI-SZZ

Co platí pro matice:

$$\alpha(\Bbb{AB}) = \ ??? = \ ???$$

Back:

$$\alpha(\Bbb{AB}) = (\alpha\Bbb{A})\Bbb{B} = \Bbb{A}(\alpha\Bbb{B})$$
<!--ID: 1717269874347-->
END

---


START
BI-SZZ

Co platí pro matice:

$$(\Bbb{AB})^T = \ ???$$

Back:

$$(\Bbb{AB})^T = \Bbb{B}^T\Bbb{A}^T$$
<!--ID: 1717269874350-->
END

---

#### Jednotková matice


START
BI-SZZ

Co je **kroneckerovo delta**

Back:

$$\delta_{ij} = \begin{cases} 1, &\text{pro } i=j \\ 0, &\text{jinak} \end{cases}$$
<!--ID: 1717269874353-->
END

---


START
BI-SZZ

Definice: **Jednotková matice**

Back:

**Jednotkovou maticí** ntého řádu rozumíme čtvercovou matici $\Bbb{E} ∈ T^{n,n}$ splňující:
$$\Bbb{E}_{ij} = \delta_{ij}, \kern{6pt} i, j \in \tilde{n}$$
<!--ID: 1717269874355-->
END

---


START
BI-SZZ

Definice: **Diagonální matice**

Back:

**Diagonální maticí** $n$tého řádu nazveme libovolnou čtvercovou matici $\Bbb{A} ∈ T^{n,n}$ splňující $i \neq j \Rightarrow \Bbb{A}_{ij} = 0$.
<!--ID: 1717269874358-->
END

---


START
BI-SZZ

Jaká matice je neutrální prvek vůči násobení?

Back:

**jednotková matice** $\Bbb{E}$
<!--ID: 1717269874361-->
END

---

### Regulární matice


START
BI-SZZ

Definice: **Regulární matice**

Back:

Buď $\Bbb{A} ∈ T^{n,n}$. Existuje-li matice $\Bbb{B} ∈ T^{n,n}$ taková, že platí
$$\Bbb{AB} = \Bbb{BA} = \Bbb{E}$$
nazýváme matici $\Bbb{A}$ **regulární** a $\Bbb{B}$ **inverzní maticí** k matici $\Bbb{A}$. Značíme $\Bbb{B} = \Bbb{A}^{−1}$.
<!--ID: 1717269874364-->
END

---


START
BI-SZZ

Jak nazýváme matici, co není **regulární**?

Back:

Pokud A není regulární, nazýváme matici A **singulární**.
<!--ID: 1717269874366-->
END

---


START
BI-SZZ

Co platí pro následující rovnici a **za jaké podmínky**?
$$(\Bbb{AB})^{-1} = \ ?$$

Back:

Nechť $\Bbb{A, B} ∈ T^{n,n}$ jsou **regulární**, potom $\Bbb{AB}$ je také **regulární** a platí
$$(\Bbb{AB})^{-1} = \Bbb{B^{-1}A^{-1}}$$
<!--ID: 1717269874369-->
END

---


START
BI-SZZ

Co platí pro následující rovnici a **za jaké podmínky**?
$$(\Bbb{A^T})^{-1}$$

Back:

Nechť $\Bbb{A} ∈ T^{n,n}$ je regulární, potom $\Bbb{A}^T$ je také regulární a platí
$$(\Bbb{A^T})^{-1} = (\Bbb{A^{-1}})^T$$
<!--ID: 1717269874372-->
END

---

START
BI-SZZ

Věta: **Vlastnosti ekvivalentní regularitě matice** (1+5)

(aneb co všechno platí, pokud je $\Bbb{A}$ regulární?)

Back:

Buď $\Bbb{A} ∈ T^{n,n}$. Následující tvrzení jsou ekvivalentní:
- $\Bbb{A}$ je regulární.
- Soubor řádků matice $\Bbb{A}$ je LN.
- $h(\Bbb{A}) = n$
- $\Bbb{A} \sim \Bbb{E}$
- $\Bbb{A}$ má nenulový determinant
- $0 \not\in σ(\Bbb{A})$ - tzn. 0 nenáleží vlastním číslům $\Bbb{A}$ (viz jiné kartičky)

_Pozn_. $\Bbb{A} \sim \Bbb{E}$ znamená, že se dá $\Bbb{A}$ převést na $\Bbb{E}$ pomocí GEMu.
<!--ID: 1717269874375-->
END

---


START
BI-SZZ

Věta: **Ekvivalence GEM** a **násobení**

Back:

Nechť $\Bbb{A, B} ∈ T^{m,n}$. $\Bbb{A} \sim \Bbb{B}$ právě tehdy, když existuje $\Bbb{P} \in T^{m,m}$ regulární taková, že $\Bbb{B} = \Bbb{PA}$.
<!--ID: 1717269874377-->
END

---

#### Hledání inverzní matice


START
BI-SZZ

Algoritmus: **Jak najít inverzní matici?**

(+ vysvětli, proč to tak funguje)

Back:

![](../Assets/Pasted%20image%2020240602110606.png)

_Náš popis:_
1. Hledáme matici $\Bbb{A^{−1}}$ s vlastností $\Bbb{A}^{−1}\Bbb{A} = \Bbb{AA^{−1}} = \Bbb{E}$.
2. Doplněním zadané matice o jednotkovou matici stejného rozměru sestavme dvoublokovou rozšířenou matici $(\Bbb{A}~|~\Bbb{E}) ∈ T^{n,2n}$
3. Na celou $(\Bbb{A}~|~\Bbb{E})$ používáme řádkové úpravy GEM, pro libovolnou posloupnost řádkových úprav realizovaných regulární maticí $\Bbb{P}$ pak platí

$$ (\Bbb{A}~|~\Bbb{E}) \sim (\Bbb{PA}~|~\Bbb{PE}) = (\Bbb{PA}~|~\Bbb{P}) $$

Díky větě o ekvivalencích platí, že levý blok $\Bbb{A}$ je možné převést na jednotkovou matici právě tehdy, když je $\Bbb{A}$ regulární. Vznikne-li při úpravách $\Bbb{A}$ na horní stupňovitý tvar nulový řádek, pak $\Bbb{A}$ je **singulární a inverze neexistuje**.

4. Je-li $\Bbb{A}$ regulární, pak pro úpravy $\Bbb{P}$ vedoucí k převedení levého bloku matice $(\Bbb{A} | \Bbb{E})$ na jednotkovou matici platí $\Bbb{P} = \Bbb{A}^{−1}$, tedy

$$ (\Bbb{A}~|~\Bbb{E}) \sim (\Bbb{E}~|~\Bbb{A}^{-1}) $$

a pravý blok výsledné matice obsahuje hledanou $\Bbb{A}^{−1}$.
<!--ID: 1717269874380-->
END

---

### Vlastní čísla

#### Determinant

START
BI-SZZ

Definice: **Determinant matice**

Back:

![](../Assets/Pasted%20image%2020240601201843.png)
![](../Assets/Pasted%20image%2020240601201903.png)

V sumě sčítáme přes všechny permutace z $S_n$, jinak řečeno každé permutaci z množiny $S_n$ odpovídá jeden sčítanec této sumy.

Počet sčítanců je proto roven $n!$. Sčítanci sumy jsou pak součiny znaménka dané permutace $π$ a všech prvků matice v $k$tém řádku a $π(k)$tém sloupci matice $\Bbb{A}$, kde $k$ probíhá $\tilde{n}$.

Např.
![](../Assets/Pasted%20image%2020240602115101.png)
<!--ID: 1717269874382-->
END

---


START
BI-SZZ

Jak se vypočítá determinant pro matici 2x2?

![](../Assets/Pasted%20image%2020240601202015.png)

Back:

![](../Assets/Pasted%20image%2020240601202019.png)
<!--ID: 1717269874386-->
END

---


START
BI-SZZ

Jak se vypočítá determinant pro matici 3x3?

![](../Assets/Pasted%20image%2020240601202043.png)

Back:

![](../Assets/Pasted%20image%2020240601202038.png)

![](../Assets/Pasted%20image%2020240602115053.png)
<!--ID: 1717269874389-->
END

---


START
BI-SZZ

Definice: **Algebraický doplněk**

Back:

![](../Assets/Pasted%20image%2020240602115159.png)

_Vlastními slovy_:
- Vezmu matici $\Bbb{A}$ ze které vyříznu (odstraním) $k$tý řádek a $l$tý sloupec
![](../Assets/Pasted%20image%2020240602115711.png)
<!--ID: 1717269874391-->
END

---


START
BI-SZZ

Věta: **O rozvoji determinantu podle ktého sloupce**

Back:

![](../Assets/Pasted%20image%2020240601202214.png)


Co to prakticky říká pro rozvoj **podle 2. sloupce**:
- Pro každý prvek toho sloupce:
- Vezmu $((-1)^{souřadnice \ prvku}) \cdot prvek \cdot \text{determinant matice bez toho řádku a sloupce}$

![](../Assets/Pasted%20image%2020240602120348.png)

K čemu to je vůbec dobrý:
- Pokud **vhodně zvolím sloupec** (např. kde je hodně nulových prvků), pak se můžu hodně těch determinantů zbavit tím, že se mi prostě budou násobit nulou -> o dost si tím zjednoduším výpočet
- Jakoby rekurzivně si jsem schopný rozkládat počítání těch determinantů
<!--ID: 1717269874394-->
END

---


START
BI-SZZ

Věta: vztah regulární matice a determinantu

Back:

Matice $\Bbb{A} ∈ T^{n,n}$ je **regulární,** právě když má **nenulový determinant.**
<!--ID: 1717269874397-->
END

---


START
BI-SZZ

$$\det(\Bbb{AB}) = \ ???$$

Back:

$$\det(\Bbb{AB}) = \det\Bbb{A}\cdot\det\Bbb{B}$$
<!--ID: 1717269874400-->
END

---


START
BI-SZZ

$$\det(\Bbb{A}^T) = \ ???$$

Back:

$$\det(\Bbb{A}^T) = \det\Bbb{A}$$
<!--ID: 1717269874403-->
END

---


START
BI-SZZ

Co platí pro determinant matice $\Bbb{A} ∈ T^{n,n}$ v **horním stupňovitém** (trojúhelníkovém) tvaru?

Back:

Pro determinant matice $\Bbb{A} ∈ T^{n,n}$ v horním stupňovitém tvaru platí:
$$ \det\Bbb{A} = \prod^n_{i=1}{\Bbb{A}_{ii}} $$
<!--ID: 1717269874406-->
END

---


START
BI-SZZ

Co platí pro determinant matice $\Bbb{A} ∈ T^{n,n}$, která má nulový řádek nebo sloupec?

Back:

Je-li některý ze sloupců nebo řádků matice $\Bbb{A}$ nulový, pak $\det\Bbb{A} = 0$.

(Protože můžu udělat rovoj podle toho řádku nebo sloupce a dostanu samé nuly)
<!--ID: 1717331676584-->
END

---


START
BI-SZZ

Věta: kdy platí $\det\Bbb{B} = -\det\Bbb{A}$?

Back:

Buď $\Bbb{B}$ matice, která vznikne z matice $\Bbb{A}$ prohozením $i$tého a $j$tého sloupce (nebo řádku), $i \neq j$, potom $\det\Bbb{B} = -\det\Bbb{A}$
<!--ID: 1717269874408-->
END

---


START
BI-SZZ

Věta: kdy platí $\det\Bbb{B} = \alpha\det\Bbb{A}$?

Back:

Buď $\Bbb{B}$ matice, která vznikne z matice $\Bbb{A}$ vynásobením $i$tého řádku číslem $\alpha \in T$, potom $\det\Bbb{B} = \alpha\det\Bbb{A}$

Tags: optional
<!--ID: 1717269874411-->
END

---


START
BI-SZZ

Věta: kdy platí $\det\Bbb{B} + \det\Bbb{D} = \det\Bbb{A}​$

Back:

Buďte $\Bbb{B}$ a $\Bbb{D}$ matice, které mají shodné prvky s maticí $\Bbb{A}$ až na $i$tý řádek, pro který platí $\Bbb{A}_{i:} = \Bbb{B}_{i:} + \Bbb{D}_{i:}$, potom $\det\Bbb{B} + \det\Bbb{D} = \det\Bbb{A}$

Tags: optional
<!--ID: 1717269874415-->
END

---

#### Vlastní čísla


START
BI-SZZ

Definice: **vlastní číslo matice**

Back:

Komplexní číslo $λ$ nazýváme **vlastním číslem matice** $\Bbb{A} ∈ \Bbb{C}^{n,n}$, právě když existuje nenulový vektor $x ∈ \Bbb{C}^n$ splňující
$$\Bbb{A}\cdot x = \lambda x$$

Takovýto vektor $x$ pak nazýváme **vlastním vektorem matice** $\Bbb{A}$ příslušejícím vlastnímu číslu $λ$.
<!--ID: 1717269874422-->
END

---


START
BI-SZZ

Co je **spektrum matice**?

Back:

**Spektrem matice** $\Bbb{A}$ (ozn. $σ(\Bbb{A})$) je množina všech vlastních čísel matice $\Bbb{A}$.
<!--ID: 1717269874426-->
END

---


START
BI-SZZ

Co je **charakteristický polynom matice**?

Back:

**Charakteristický polynom matice** $\Bbb{A}$ (ozn. $p_\Bbb{A}$) definujeme předpisem
$$p_\Bbb{A}(\lambda) \coloneqq \det(\Bbb{A - \lambda\Bbb{E}})$$


Vlastní čísla jsou **kořeny** tohoto polynomu.
<!--ID: 1717269874429-->
END

---


START
BI-SZZ

Definice: **algebraická násobnost vlastního čísla**

Back:

Nechť $λ ∈ \Bbb{C}$ je vlastní číslo matice $\Bbb{A} ∈ \Bbb{C}^{n,n}$. 

Potom **algebraickou násobností vlastního čísla** $λ$, ozn. $\nu_a(λ)$, nazýváme jeho **násobnost** jakožto **kořene** charakteristického polynomu $p_\Bbb{A}$.

_Vysvětlení:_
- Kořeny jsou to co mi vyjde když položím polynom rovný nule (aka to co se dělá na základce)
- Násobnost kořenů je to, kolikrát se tam ten kořen nachází. Aka na kolikátou je třeba ta závorka.

_Např._
![](../Assets/Pasted%20image%2020240602125122.png)
<!--ID: 1717269874431-->
END

---


START
BI-SZZ

Definice: **geometrická násobnost vlastního čísla**

Back:

Nechť $λ ∈ \Bbb{C}$ je vlastní číslo matice $\Bbb{A} ∈ \Bbb{C}^{n,n}$. 

**geometrickou násobností vlastního čísla** $λ$, ozn. $\nu_g(λ)$, nazýváme **dimenzi podprostoru** všech řešení homogenní soustavy $(\Bbb{A} − λ\Bbb{E}) \cdot x = θ$.
<!--ID: 1717269874434-->
END

---


START
BI-SZZ

Věta: co platí, když $0 \not\in σ(\Bbb{A})$

Back:

Matice $\Bbb{A} ∈ \Bbb{C}^{n,n}$ je **regulární**, právě když $0 \not\in σ(\Bbb{A})$

plyne z toho, že když je 0 vlastním číslem, zredukuje se $p_\Bbb{A}$ na $\det\Bbb{A}$, a tak musí být $\det\Bbb{A} = 0$, aby mohla být 0 kořenem polynomu
<!--ID: 1717269874437-->
END

---


START
BI-SZZ

Výpočet: Jak se vypočte **algebraická násobnost vlastního čísla**?

Back:

Mějme matici $\Bbb{A} \in \Bbb{C}^{n,n}$:
1. Spočtěme charakteristický polynom matice $\Bbb{A}$, $p_\Bbb{A}(λ) = \det(\Bbb{A} − λ\Bbb{E})$, pomocí známých metod pro výpočet determinantu.
2. Nalezněme všechny kořeny polynomu $p_\Bbb{A}$. Tyto kořeny jsou vlastní čísla matice $\Bbb{A}$.
3. Algebraická násobnost vlastního čísla $λ$, tj. $\nu_a(λ)$, je násobnost $λ$ jako kořene charakteristického polynomu $p_\Bbb{A}$.

![](../Assets/Pasted%20image%2020240601203154.png)
![](../Assets/Pasted%20image%2020240601203206.png)
<!--ID: 1717269874439-->
END

---


START
BI-SZZ

Výpočet: Jak se vypočte **geometrická násobnost vlastního čísla**?

Back:

Mějme matici $\Bbb{A} \in \Bbb{C}^{n,n}$a a její vlastní číslo $λ ∈ \Bbb{C}$:
1. Vlastní vektory příslušné vlastnímu číslu $λ$ jsou všechna nenulová řešení homogenní rovnice $(\Bbb{A} − λ\Bbb{E}) \cdot x = θ$.
2. Geometrická násobnost vlastního čísla $λ$, tj. $\nu_g(λ)$, je dimenze podprostoru všech řešení homogenní rovnice $(\Bbb{A} − λ\Bbb{E}) \cdot x = θ$.

![](../Assets/Pasted%20image%2020240601203151.png)
![](../Assets/Pasted%20image%2020240601203206.png)
<!--ID: 1717269874442-->
END

---

### Diagonalizace

START
BI-SZZ

Definice: **lineární zobrazení**

Back:

Buďte $P$ a $Q$ dva vektorové prostory nad stejným tělesem $T$, nechť $A: P \mapsto Q$. Zobrazení $A$ nazveme **lineární** právě když současně platí:   
- (aditivita): $∀x, y ∈ P : A(x + y) = Ax + Ay$
- (homogenita): $∀α ∈ T, ∀x ∈ P : A(αx) = αAx$
Množinu všech lineárních zobrazení z $P$ do $Q$ značíme $\mathcal{L}(P, Q)$.
<!--ID: 1717269874444-->
END

---


START
BI-SZZ

Co je **lineární operátor**?

Back:

Lineární zobrazení prostoru $V$ do $V$ nazýváme **lineární operátor** (transformace) na $V$. Množinu všech lineárních operátorů na $V$ značíme krátce $\mathcal{L}(V)$.
<!--ID: 1717269874447-->
END

---


START
BI-SZZ

Co je **lineární funkcionál**?

Back:

Lineární zobrazení prostoru $V$ do tělesa $T$ nazýváme **lineární funkcionál** na V.
<!--ID: 1717269874449-->
END

---


START
BI-SZZ

Definice: **matice zobrazení**

Back:

Nechť $A ∈ \mathcal{L}(P_m, Q_n)$, buď $\mathcal{X} = (x_1, \dots , x_m)$ a $\mathcal{Y} = (y_1, \dots , y_n)$ báze $P_m$, respektive $Q_n$. Matici $^\mathcal{X}A^\mathcal{Y} ∈ T^{n,m}$ definovanou po sloupcích předpisem
$$\forall j \in \hat{m}:\kern{6pt} (^\mathcal{X}A^\mathcal{Y})_{:j} \coloneqq (Ax_j)_\mathcal{Y}$$
nazveme **maticí zobrazení** $A$ **v bázích** $\mathcal{X}, \mathcal{Y}$. Matici lineárního operátoru $^\mathcal{X}A^\mathcal{X}$ zkráceně označíme $^\mathcal{X}A \coloneqq\kern{2pt}^\mathcal{X}A^\mathcal{X}$.

Pozn.
Ve svých sloupcích obsahuje obrazy $A{x_j}$ vektorů z báze $\mathcal{X}$ zapsané svými souřadnicemi v bázi $\mathcal{Y}$.
<!--ID: 1717269874452-->
END

---


START
BI-SZZ

Definice: **matice přechodu**

Back:

Nechť $\mathcal{X} = (x_1, \dots , x_m)$ a $\mathcal{Y} = (y_1, \dots , y_n)$ jsou báze $V_n$. Matici identického operátoru $^\mathcal{X}E^\mathcal{Y} ∈ T^{n,n}$ nazýváme **maticí přechodu** od báze $\mathcal{X}$ k bázi $\mathcal{Y}$.

Pozn.
- ve svých sloupcích obsahuje souřadnice vektorů z $\mathcal{X}$ vzhledem k bázi $\mathcal{Y}$.
<!--ID: 1717269874455-->
END

---


START
BI-SZZ

Definice: **Podobné matice**

Back:

Matice $\Bbb{A}, \Bbb{B} ∈ \Bbb{C}^{n,n}$ nazveme podobné, právě když existuje regulární matice $\Bbb{P} ∈ \Bbb{C}^{n,n}$ taková, že platí $\Bbb{A} = \Bbb{P}^{−1} \cdot \Bbb{B} \cdot \Bbb{P}$

- to nám říká, že jde o matice stejného operátoru, jen mohou být v jiných bázích
- podobnost matic je relace ekvivalence
<!--ID: 1717269874458-->
END

---

#### Diagonalizace operátoru


START
BI-SZZ

Definice: **diagonalizovatelný operátor**

Back:

Operátor $A ∈ \mathcal{L}(V_n)$ nazveme diagonalizovatelný, jestliže existuje báze $\mathcal{X}$ prostoru $V_n$ taková, že matice $^\mathcal{X}A$ je diagonální.
<!--ID: 1717269874460-->
END

---


START
BI-SZZ

Věta: **kdy je operátor diagonalizovatelný**

Back:

Operátor $A ∈ \mathcal{L}(V_n)$ je diagonalizovatelný, právě když každé z vlastních čísel $λ$ operátoru $A$ má stejnou algebraickou a geometrickou násobnost.

_Formálně:_
![](../Assets/Pasted%20image%2020240602141821.png)
<!--ID: 1717269874463-->
END

---


START
BI-SZZ

Jak vyřeším příklad typu: "**ověřte, zda je operátor diagonalizovatelný, a nalezněte bázi, ve které je jeho matice diagonální**"

Back:

![](../Assets/Pasted%20image%2020240602143343.png)

_Lidsky:_
- Sestavíme-li bázi tvořenou vlastními vektory operátoru $A$, pak matice operátoru $A$ vzhledem k této bázi je diagonální a na diagonále má vlastní čísla operátoru $A$.
- Navíc pořadí vlastních čísel na diagonále odpovídá pořadí příslušných vektorů v této bázi.
- Vlastní číslo se na diagonále matice $^\mathcal{X}A$ opakuje tolikrát, kolik je jeho algebraická násobnost.


_Formálně:_

Mějme operátor $A ∈ \mathcal{L}(V_n)$ s vlastními čísly $λ_1, .\dots , λ_k$ (kde $k ∈ \tilde{n}$) s násobnostmi $l_j = \nu_a(λ_j) = \nu_g(λ_j)$ pro každé $j ∈ \tilde{k}$. Ke každému vlastnímu číslu $λ_j (j ∈ \tilde{k})$ přísluší LN soubor vlastních vektorů, ten označme $(x_{j,1}, x_{j,2}, \dots , x_{j,l_j})$. Potom vzhledem k bázi

$$ \mathcal{X} = (x_{1,1}, \dots , x_{1,l_1} , x_{2,1}, \dots , x_{2,l_2} , \dots , x_{k,1}, \dots , x_{k,l_k} ) $$

má operátor $A$ matici zobrazení v diagonálním tvaru
![](../Assets/Pasted%20image%2020240601204328.png)
<!--ID: 1717269874466-->
END

---


START
BI-SZZ

Definice: **diagonalizovatelná matice**

Back:

Matici $\Bbb{A} \in \Bbb{C}^{n,n}$ nazveme **diagonalizovatelnou**, jestliže je podobná diagonální matici.
<!--ID: 1717269874468-->
END

---


START
BI-SZZ

Co platí pro diagonalizovatelnost matice/operátoru, když má každé vlastní číslo algebraickou násobnost 1? 

Back:

Potom je matice diagonalizovatelná!

Díky tomu si můžu ušetřit práci a nemusím nutně počítat $\nu_g(\lambda)$

![](../Assets/Pasted%20image%2020240602151915.png)

<!--ID: 1717334730161-->
END

---


START
BI-SZZ

Jak vyřeším příklad: **rozhodněte o diagonalizovatelnosti matice** $A$. Pokud je diagonalizovatelná, zkonstruujte matici P převádějící ji na diagonální tvar.

(tohle je důležitý umět)

Back:

**Ověřím diagonalizovatelnost:**
1. Spočteme charakteristický polynom
2. Porovnám algebraické a geometrické operátory. Pokud se rovnají, tak je diagonalizovatelná.

**Zkonstruuju matici P:**
1. Pro každý $\lambda$ najdu vlastní vektory, tj. řešení $(\Bbb{A} - \lambda \Bbb{E}) \Bbb{x} = \theta$
2. Sestavíme matici $\Bbb{P}$ tak, že dáme jednotlivá řešení do sloupců

_Další informace_

Mějme matici $\Bbb{A} \in \Bbb{C}^{n,n}$ s vlastními čísly $λ_1, .\dots , λ_k$ (kde $k ∈ \tilde{n}$) s násobnostmi $l_j = \nu_a(λ_j) = \nu_g(λ_j)$ pro každé $j ∈ \tilde{k}$. Ke každému vlastnímu číslu $λ_j (j ∈ \tilde{k})$ přísluší LN soubor vlastních vektorů, ten označme $(x_{j,1}, x_{j,2}, \dots , x_{j,l_j})$.

Můžeme zavést operátor $A$, který na prostoru $\Bbb{C}^n$ působí dle předpisu $Ax = \Bbb{A}x$
- maticí $A$ vzhledem ke standardní bázi $\mathcal{E}$ prostoru $\Bbb{C}^n$ je právě matice $\Bbb{A}$, , tj. $^\mathcal{E}A = \Bbb{A}$

Utvoříme bázi tvořenou vlastními vektory operátoru $A$
$$ \mathcal{X} = (x_{1,1}, \dots , x_{1,l_1} , x_{2,1}, \dots , x_{2,l_2} , \dots , x_{k,1}, \dots , x_{k,l_k} ) $$
vzhledem k této bázi má operátor diagonální matici zobrazení, viz diagonalizace operátoru, kterou označíme $\Bbb{B} \coloneqq\kern{3pt}^\mathcal{X}A$

Dále platí, že
$$ \Bbb{B} = \kern{3pt}^\mathcal{X}A = \kern{3pt}^\mathcal{E}E^\mathcal{X} \cdot \kern{3pt}^\mathcal{E}A \cdot\kern{3pt} ^\mathcal{X}E^\mathcal{E} = \kern{3pt}^\mathcal{E}E^\mathcal{X} \cdot \Bbb{A} \cdot\kern{3pt} ^\mathcal{X}E^\mathcal{E}

$$

Označíme-li konečně $P := \kern{3pt}^\mathcal{X}E^\mathcal{E}$ pak $\Bbb{B} = \Bbb{P}^{−1} \cdot \Bbb{A} \cdot \Bbb{P}$. Matice $\Bbb{A}$ je tedy podobná diagonální matici $\Bbb{B}$ a regulární matice $\Bbb{P}$ zaručující podobnost je právě matice přechodu z báze $\mathcal{X}$ do $\mathcal{E}$.
- Je to tedy matice, která má ve sloupcích popořadě vlastní vektory matice $\Bbb{A}$.

_Příklad:_
![](../Assets/Pasted%20image%2020240601204509.png)
<!--ID: 1717269874471-->
END

---
