---
created: 2024-05-22T11:24:43
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-7 BEZ

> BI-SPOL-7 (BEZ)
> Symetrické šifry blokové a proudové (AES, 3DES, RC4) základní parametry, operační módy blokových šifer (ECB, CBC, CFB, OFB, CTR, MAC), jejich základní popis a slabiny.

## symetrické šifry

START
BI-SZZ

Co jsou **symetrické šifry**?

Back:

Šifry, u kterých se k šifrování i dešifrování používá **stejný** (nebo snadno odvozený) **klíč** k (narozdíl od asymetrické kryptografie) a **stejný** (nebo analogický) **algoritmus**
<!--ID: 1716376588066-->
END

---


START
BI-SZZ

Co značí $E_k$?

Back:

**šifrování** $E_k$= převod otevřeného textu $p$ na šifrový text $c$
<!--ID: 1716376588073-->
END

---


START
BI-SZZ

Co značí $D_k$?

Back:

 **dešifrování** $D_k$= převod šifrového textu $c$ na otevřený text $p$
<!--ID: 1716376588076-->
END

---

### blokové šifry


START
BI-SZZ

Co jsou blokové šifry?

Back:

**symetrické šifry**, v nichž se bloky pevně dané délky šifrují transformací $E_k$ (resp. dešifrují transformací $D_k$)

- $c_i = E_k (m_i), m_i = D_k (c_i)$, kde
	- $m_i$ je $i$-tý blok zprávy (otevřeného textu)
	- $c_i$ je $i$-tý blok šifrového textu
<!--ID: 1716376588079-->
END

---


START
BI-SZZ

Co je **Feistelův kryptosystém**?

Back:

1. klíč je posloupnost funkcí $k=\{f_1, f_2, \dots, f_h\}$
2. blok zprávy $m$ se rozpůlí na $(m_0 \ m_1)$
3. v rundách se opakuje výpočet $m_{i+1} = m_{i-1} \oplus f_i(m_i)$
4. po $h$ rundách se obě poloviny spojí a výsledkem je $T_k(m) = (m_h \ m_{h+1})$

_Pozn._ složitost algoritmu je daná několikanásobným použitím jednoduchých transformací
<!--ID: 1716376588081-->
END

---


START
BI-SZZ

Jak probíhá **dešifrování** v **Feistelově kryptosystému**?

Back:

dešifrování probíhá stejně, jen se funkce použijí v opačném pořadí
<!--ID: 1716376588084-->
END

---

#### 3DES

START
BI-SZZ

Co je **3DES** (Triple DES)? (obecně)

Back:

**bloková šifra** využívající **algoritmus Feistelova typu**
<!--ID: 1716376588087-->
END

---

START
BI-SZZ

Popiš jak funguje algoritmus **DES**

(doporučuju si to asi nakreslit)

Back:

Postup:
1. **počáteční permutace**
2. 16 rund s **rundovní funkcí**
3. **prohození levé a pravé poloviny bloku**
4. **permutace inverzní k té počáteční**

_Obrázek:_
![](../../Assets/Pasted%20image%2020240522120456.png)
<!--ID: 1716376588090-->
END

---


START
BI-SZZ

Vysvětli, jak funguje **rundovní funkce v DESu** (dobré nakreslit)

Back:

Zkrácené vysvětlení:
- 48b rundovní klíč ($k_i$) - (rozdělený, zrotovaný, zkompresovaný klíč)
- expanze bloku na $48b$
- nelineární pevná substitutce ze 6 b na 4 b v S-boxu -> redukce bloku opět na $32b$
- permutace v bloku P

_Rundovní funkce v modrém rámečku:_
![](../../Assets/Pasted%20image%2020240522120456.png)

Podrobné vysvětlení rundovní funkce (modrý rámeček):
- blok $R$ se expanduje $32b \rightarrow 48b$
- $56b$ klíč se rozdělí na půlky, zrotuje a zkompresuje na $48b$
- zkompresovaný klíč se vyXORuje s blokem
- V S-Boxu se provede nelineární substituce (6 bitů se různými operacemi vždy zdrcne na 4 bity). Tím se blok opět zredujuje na $32$ bitů
- Pak, aby toho nebylo málo, se ještě blok co vyjde z S-boxu zpermutuje
<!--ID: 1716380008715-->
END

---


START
BI-SZZ

Jak probíhá dešifrování **DESu**?

Back:

Stejně jako šifrování, jen se funkce použijí v opačném pořadí.
<!--ID: 1716376588093-->
END

---


START
BI-SZZ

Jak velké bloky jsou v **DESu**? (kolik bitů)

Back:

**64 bitů**

Ty se rozdělí na dvě půlky o 32 bitech
<!--ID: 1716376588096-->
END

---


START
BI-SZZ

Kolik bitů má klíč v DESu?

Back:

**56 bitů**
<!--ID: 1716393773692-->
END

---


START
BI-SZZ

Jak funguje šifrování pomocí **3DES**?

Back:

Nejčastěji se dělá **3DES-EDE**:
Zašifruju pomocí klíče $K_1$, dešifruju pomocí klíče $K_2$, znovu zašifruju pomocí klíče $K_3$.

Klíče můžou být stejný nebo jiný.

![](../../Assets/Pasted%20image%2020240522122942.png)
<!--ID: 1716376588099-->
END

---


START
BI-SZZ

Jak funguje dešifrování pomocí **3DESu**?

Back:

Obráceně než šifrování -> DED

Dešifruju pomocí $K_3$, zašifruju pomocí $K_2$, znovu dešifruju pomocí $K_1$

![](../../Assets/Pasted%20image%2020240522123053.png)
<!--ID: 1716376588101-->
END

---


START
BI-SZZ

Kolik různých klíčů můžu použít u **3DES**u?

Back:

Můžu použít **3 různé klíče** nebo **2 různé klíče**.

Kdybych použil jeden klíč, tak to je to samý jako DES.

![](../../Assets/Pasted%20image%2020240522122800.png)

![](../../Assets/Pasted%20image%2020240522122807.png)
<!--ID: 1716376588104-->
END

---

#### AES

START
BI-SZZ

Co je **AES** za typ šifry?

Back:

Bloková šifra
<!--ID: 1716376588107-->
END

---


START
BI-SZZ

Je AES Feistelovského typu?

Back:

Ne!
<!--ID: 1716376588110-->
END

---


START
BI-SZZ

Jaké jsou **verze AES**? Jak dlouhý mají **klíč** a kolik mají **rund**?

Back:

- **AES-128** - 128b klíč, 10 rund
- **AES-192** - 192b klíč, 12 rund
- **AES-256** - 256b klíč, 14 rund
<!--ID: 1716376588113-->
END

---


START
BI-SZZ

Jak je velký rundovní klíč v AESu?

Back:

32b
<!--ID: 1716376588115-->
END

---


START
BI-SZZ

S čím pracuje AES?

Back:

S prvky **Galoisova** (= konečného) **tělesa** $GF(2^8)$ a každý byte je chápán jako polynom
<!--ID: 1716376588118-->
END

---


START
BI-SZZ

Jak funguje šifrování pomocí **AES**? (popiš postup)

Back:

1. Úvodní zašumění **AddRoundKey** (naXORování 4 rundovních klíčů)
2. V každé rundě se provedou operace s maticí $4 \times 4$ (každý prvek má 1 byte):
	1. **SubBytes** (nelineární substituce každého prvku matice podle pevně dané substituční tabulky)
	2. **ShiftRows** (řádky matice se cyklicky posunou - nultý zůstává, první se zrotuje o 1, druhý o 2, třetí o 3)
	3. **MixColumns** (každý sloupec se pronásobí konstantní maticí)
	4. **AddRoundKey** (na každý sloupec matice se naxorují odpovídající 4 rundovní klíče)

![](../../Assets/Pasted%20image%2020220308102302.png)

_(MixColumns se pro představu pronásobuje takhle - b sloupec je výstup, a sloupec je vstupní sloupec):_
![](../../Assets/Pasted%20image%2020240522124640.png)
<!--ID: 1716376588121-->
END

---

#### operační módy blokových šifer


START
BI-SZZ

Co jsou **operační módy blokových šifer**?

Back:

blokové šifry popisují zašifrování jednoho bloku zprávy, ale vzájemná závislost jednotlivých bloků záleží na použitém operačním módu
<!--ID: 1716376588124-->
END

---


START
BI-SZZ

Jak funguje operační mód blokových šifer **ECB**?

Back:

stejná šifrovací transofrmace se použije nezávisle na všechny bloky

_Pozn._ běžně se nepoužívá, protože stejné bloky se zašifrují vždy stejně, což usnadňuje prolomení a útoky

![](../../Assets/Pasted%20image%2020240522125007.png)
<!--ID: 1716376588127-->
END

---


START
BI-SZZ

Co se stane u operačního módu blokových šifer **ECB**, pokud je poškozen jeden blok?

Back:

chyba v jednom bloku nemá vliv na zbytek zprávy

![](../../Assets/Pasted%20image%2020240522125007.png)
<!--ID: 1716376588130-->
END

---

START
BI-SZZ

Jak funguje operační mód blokových šifer **CTR**?

Back:

Každý blok zprávy je xorován heslem, které vzniká zašifrováním hodnoty čítače (ten je nejprve nastaven na inicializační vektor a pak se k němu v každé iteraci přičítá jednička)

![](../../Assets/Pasted%20image%2020240522125156.png)
<!--ID: 1716376588133-->
END

---


START
BI-SZZ

Co se stane u operačního módu blokových šifer **CTR**, pokud je poškozen jeden blok?

Back:

**Při poškození bloku je poškozen celý zbytek zprávy**

funguje jako synchronní proudová šifra (takže při špatné synchronizaci nebo ztrátě bloku je poškozen celý zbytek zprávy)

![](../../Assets/Pasted%20image%2020240522125156.png)
<!--ID: 1716376588135-->
END

---


START
BI-SZZ

Jak funguje operační mód blokových šifer **OFB**?

Back:

každý blok zprávy je xorován heslem, které vzniká zašifrováním předchozího hesla (první heslo vzniká zašifrováním incializačního vektoru)

![](../../Assets/Pasted%20image%2020240522125328.png)
<!--ID: 1716376588138-->
END

---


START
BI-SZZ

Co se stane u operačního módu blokových šifer **OFB**, pokud je poškozen jeden blok?

Back:

**Při poškození bloku je poškozen celý zbytek zprávy**

funguje jako synchronní proudová šifra (takže při špatné synchronizaci nebo ztrátě bloku je poškozen celý zbytek zprávy)

![](../../Assets/Pasted%20image%2020240522125328.png)
<!--ID: 1716376588141-->
END

---


START
BI-SZZ

Jak funguje operační mód blokových šifer **CFB**?

Back:

každý blok zprávy je xorován blokově zašifrovaným předchozím blokem šifrového textu (první je xorován blokově zašifrovaným inicializačním vektorem)

![](../../Assets/Pasted%20image%2020240522125348.png)
<!--ID: 1716376588144-->
END

---


START
BI-SZZ

Co se stane u operačního módu blokových šifer **CFB**, pokud je poškozen jeden blok?

Back:

při chybě je poškozen **jen jeden následující blok**

funguje jako asynchronní proudová šifra

![](../../Assets/Pasted%20image%2020240522125348.png)
<!--ID: 1716376588147-->
END

---



START
BI-SZZ

Jak funguje operační mód blokových šifer **CBC**?

Back:

každý blok zprávy je nejprve xorován předchozím blokem šifrového textu (první je xorován inicializačním vektorem) a pak zašifrován blokovou šifrou

![](../../Assets/Pasted%20image%2020240522125649.png)
<!--ID: 1716376588150-->
END

---


START
BI-SZZ

Co se stane u operačního módu blokových šifer **CBC**, pokud je poškozen jeden blok?

Back:

při chybě je poškozen **jen jeden následující blok**

![](../../Assets/Pasted%20image%2020240522125649.png)
<!--ID: 1716376588153-->
END

---

START
BI-SZZ

Jak funguje operační mód blokových šifer **MAC**?

Back:

vlastně CBC s nulovým incializačním vektorem, přičemž jen poslední blok šifrového textu se použije jako **autentizační kód MAC** (Message Authentication Code)

MAC se posílá se zprávou a autentizuje původ zprávy a zajišťuje, že zpráva nebyla změněna.

![](../../Assets/Pasted%20image%2020240522125807.png)
<!--ID: 1716376588155-->
END

---

START
BI-SZZ

Jaký operační mód blokových šifer se používá nejčastěji? 

Back:

CBC
<!--ID: 1716376588158-->
END

---


START
BI-SZZ

Jaké jsou slabiny blokových šifer oproti proudovým šifrám?

Back:

obecně jsou **pomalejší**, 
paměťově i výkonnostně **náročnější** 
a náchylnější na **chyby**
<!--ID: 1716376588161-->
END

---


START
BI-SZZ

Jaká je slabina operačního módu blokových šifer **ECB**?

Back:

je prolomitelná kryptoanalýzou, obzvlášť pokud se bloky opakují
<!--ID: 1716376588164-->
END

---


START
BI-SZZ

Jaká je slabina operačních módů blokových šifer **CTR** a **OFB**?

Back:

šifrování musí být přesně synchronizované, nesmí se ztratit žádný blok, jinak je ztracen zbytek zprávy
<!--ID: 1716376588167-->
END

---


START
BI-SZZ

Jaká je slabina operačního módu blokových šifer CBC?

Back:

Nelze paralelizovat
<!--ID: 1716376588170-->
END

---


START
BI-SZZ

Co je **metoda solení**?

Back:

Protější straně pošlu inicializační vektor ($IV$), ale k šifrování použiju "osolený $IV$" (spočte se z $IV$, na který se nějak aplikuje klíč $K$).

Výhodou je, že ten osolený $IV$ neprochází komunikačním kanálem -> útočník neví, co se reálně při šifrování použilo jako inicializační vektor.
<!--ID: 1716393773695-->
END

---


### proudové šifry


START
BI-SZZ

Co jsou **proudové šifry**?

Back:

symetrické šifry, v nichž se z klíče $k$ generuje **keystream** (proud hesla) a znaky zprávy (typicky bity) se pak postupně s heslem **xorují** 

(příp. lze místo xorování použít jiný typ transformace závislé na heslu)
<!--ID: 1716376588172-->
END

---


START
BI-SZZ

Co jsou **synchronní proudové šifry**?

Back:

**heslo je nezávislé** na oteřeném i šifrovém textu, takže odesílatel a příjemce musí být synchronizovaní a žádná část zprávy se nesmí po cestě ztratit, jinak je poškozen celý zbytek zprávy
<!--ID: 1716376588175-->
END

---


START
BI-SZZ

Co jsou **asynchronní proudové šifry**?

Back:

**heslo je závislé** na otevřeném nebo šifrovém textu, takže v případě chyby se algoritmus sám “opraví” a poškozena jen jen malá část zprávy
<!--ID: 1716380008719-->
END

---

#### RC4 (aka Arcfour)


START
BI-SZZ

Jaký typ šifry je RC4?

Back:

synchronní proudová šifra
<!--ID: 1716376588179-->
END

---


START
BI-SZZ

Měla by se používat šifra RC4?

Back:

Ne, byla **prolomená**.
<!--ID: 1716376588182-->
END

---


START
BI-SZZ

Jak velký klíč je u **RC4**?

Back:

Typicky **40b** nebo **128b**
<!--ID: 1716376588184-->
END

---


START
BI-SZZ

Jak se šifruje pomocí **RC4**?

Back:

1. z klíče se vygeneruje tajná permutace $S$
2. z permutace $S$ pak vziká pseudonáhodný keystream
<!--ID: 1716376588187-->
END

---


START
BI-SZZ

Jak se v **RC4** generuje tajná permutace $S$? (popiš pseudokód)

Back:

![](../../Assets/Pasted%20image%2020240522130901.png)

_Vysvětlení:_
![](../../Assets/Pasted%20image%2020240522130913.png)
<!--ID: 1716376588190-->
END

---


START
BI-SZZ

Jak se v **RC4** generuje **heslo**?

Back:

![](../../Assets/Pasted%20image%2020240522130927.png)

_Vysvětlení:_
![](../../Assets/Pasted%20image%2020240522130943.png)
<!--ID: 1716376588193-->
END

---


START
BI-SZZ

Používá RC4 pro různé spojení stejný klíč?

Back:

Ne. Jelikož nevyužívá inicializační vektor, pro každé spojení generuje náhodně **nový tajný klíč**.
<!--ID: 1716376588196-->
END

---
