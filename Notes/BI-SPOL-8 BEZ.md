---
created: 2024-05-22T20:23:22
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-8 BEZ

> BI-SPOL-8 (BEZ)
> Infrastruktura veřejného klíče, distribuce klíčů, digitální podpis. Certifikáty, certifikační autority. Kryptograficky bezpečné generátory náhodných čísel.

### infrastruktura a distribuce veřejných klíčů

START
BI-SZZ

Jaké jsou **způsoby distribuce veřejných klíčů**? (4)

Back:

- obyčejné zveřejnění
- veřejně dostupný adresář veřejných klíčů
- autorita pro veřejné klíče
- certifikace veřejných klíčů
<!--ID: 1716450545709-->
END

---

#### obyčejné zveřejnění veřejných klíčů

START
BI-SZZ

Jaký je problém s **obyčejným zveřejněním veřejných klíčů**?

Back:

hrozí **man-in-the-middle attack**, tedy že útočník zachytí odesílatelův veřejný klíč, pošle příjemci svůj vlastní veřejný klíč (tedy vydává se za odesílatele), a pak si může číst zašifrované odpovědi, manipulovat je a přeposílat, aniž by si příjemce či odesílatel čehokoliv všimili
<!--ID: 1716450545713-->
END

---

#### veřejně dostupný adresář veřejných klíčů

START
BI-SZZ

Jak funguje **veřejně dostupný adresář veřejných klíčů**?

Back:

Účastníci se registrují u **důvěryhodného správce**, své veřejné klíče mu předají a správce je zveřejní v adresáři jako dvojice **jméno** + **veřejný klíč**
<!--ID: 1716450545717-->
END

---


START
BI-SZZ

Jaký je problém s **veřejně dostupným adresářem veřejných klíčů**?

Back:

pokud útočník získá soukromý klíč správce, může zprávy odposlouchávat

- navíc je otázka jak zaručit důvěryhodnost správce
<!--ID: 1716450545721-->
END

---

#### autorita pro veřejné klíče

START
BI-SZZ

Co je obecně **distribuce veřejných klíčů pomocí autority pro veřejné klíče**?

Back:

Oba účastníci při komunikaci komunikují s **autoritou pro veřejné klíče**
<!--ID: 1716450545725-->
END

---


START
BI-SZZ

Jaká je nevýhoda **distribuce veřejných klíčů pomocí autority pro veřejné klíče**?

Back:

Musí se komunikovat s autoritou
<!--ID: 1716450545728-->
END

---


START
BI-SZZ

Jak přesně funguje **distribuce veřejných klíčů pomocí autority pro veřejné klíče**?

Back:

![](../Assets/Pasted%20image%2020240522203130.png)

Postup, pokud $A$ chce komunikovat s $B$:
1. $A$ si vyžádá od autority veřejný klíč $B$ $(A \to \mathrm{Req} || T_1 \to Aut)$
2. autorita vrátí veřejný klíč $B$ zašifrovaný soukromým klíčem autority $(Aut \to E_{SK_{Aut}}(VK_B || \mathrm{Req} || T_1) \to A)$ a $A$ si zprávu dešifruje (a ověří původ) pomocí známého veřejného klíče autority
3. $A$ zašifruje zprávu a náhodné číslo $N_1$ veřejným klíčem $B$, odešle je $B$ $(A \to E_{VK_B}(\mathrm{ID}_A || N_1) \to B)$ a $B$ si je dešifruje svým soukromým klíčem
4. $B$ si vyžádá od autority veřejný klíč $A$ $(B \to \mathrm{Req} || T_2 \to Aut)$
5. autorita vrátí veřejný klíč $A$ zašifrovaný soukromým klíčem autority $(Aut \to E_{SK_{Aut}}(VK_A || \mathrm{Req} || T_2) \to A)$ a $B$ si zprávu dešifruje (a ověří původ) pomocí známého veřejného klíče autority
6. $B$ zašifruje náhodné číslo $N_1$ od $A$ a navíc ještě vlastní náhodné číslo $N_2$ veřejným klíčem $A$, odešle je $A$ $(B \to E_{VK_A}(N_1 || N_2) \to A)$ a $A$ si je dešifruje svým soukromým klíčem
7. $A$ zašifruje náhodné číslo $N_2$ od $B$ veřejným klíčem $B$, odešle jej $B$ $(A \to E_{VK_B}(N_2) \to B)$ a $B$ si jej dešifruje svým soukromým klíčem

Posílání $N_1$ je tam kvůli tomu, aby např. $A$ mělo jistotu, že ta zpráva pochází od $B$. Analogicky to je s $N_2$.

Tags: optional
<!--ID: 1716450545731-->
END

---

#### certifikace veřejných klíčů

START
BI-SZZ

Co je **certifikace veřejných klíčů**?

Back:

Způsob distribuce veřejných klíčů bez kontaktu s třetím subjektem
<!--ID: 1716450545734-->
END

---


START
BI-SZZ

Co je **certifikační autorita**?

Back:

důvěryhodná třetí strana, která vydává (a aktualizuje) certifikáty
<!--ID: 1716450545736-->
END

---


START
BI-SZZ

Co je **certifikát**?

Back:

struktura podepsaná **soukromým klíčem autority**
<!--ID: 1716450545739-->
END

---


START
BI-SZZ

Jaké jsou části **certifikátu**?

Back:

Základní věci z přednášek:
- **veřejný klíč držitele** $VK_A$
- **identifikátor držitele** $ID_A$
- **dobu platnosti certifikátu** $T$
    - Not Before – Začátek platnosti
    - Not After – Konec platnosti

Další věci, co jsme se neučili, ale budou to nejspíš chtít:
- **Serial Number** – unikátní identifikace certifikátu v systému CA
- **Subject** – Komu byl certifikát vystaven – stroj, člověk, organizace (např. `C=US, ST=Texas, L=Houston, O=SSL Corp, CN=SSL.com EV SSL Intermediate CA RSA R3`)
- **Issuer** – Entita, která ověřila informace a podepsala certifikát
- **Signature Algorithm** – algoritmus, kterým byl certifikát podepsán
- **Signature** – podpis
<!--ID: 1716450545742-->
END

---



START
BI-SZZ

Jak funguje **distribuce veřejných klíčů pomocí certifikace**?

Back:

1. Certifikační autorita vydá a podepíše certifikát $C_A$ (pomocí $SK_{Aut}$) na základě $VK_A$
2. $A$ pak zveřejní certifikát $C_A$
3. $B$ pak certifikát ověří pomocí $D_{VK_{Aut}}(C_A)$

_Ilustrace vydání 2 ceritfikátů (pozn. 2. má nejspíš být $C_B$)_
![](../Assets/Pasted%20image%2020240522203817.png)
<!--ID: 1716450545745-->
END

---


START
BI-SZZ

Co je **certifikační strom** a **jak funguje**?

Back:

stromová struktura certifikačních autorit, postupně si vydávají certifikáty (ta vyšší vydává těm nižším)

Pozn. Ten strom se vytváří, aby nebyla přehlcena ta kořenová autorita. Tím se jakoby rozloží zátěž a různí uživatelé můžou využívat různé autority.

![](../Assets/Pasted%20image%2020240522210825.png)
<!--ID: 1716450545748-->
END

---


START
BI-SZZ

Co je **kořenová autorita**?

Back:

Autorita co vydává certifikáty a je úplně nahoře v certifikačním stromu.
<!--ID: 1716450545751-->
END

---


START
BI-SZZ

Co je **křížová certifikace** a kdo ji typicky provádí?

Back:

To, že si certifikační autority **navzájem podepíšou certifikáty**. Pak spolu mohou komunikovat i účastníci z různých stromů.

Dělají to typicky **kořenové autority**

Křížovou certifikací deklaruje CA1, protože důvěřuje všem certifikátům vystaveným CA2.

![](../Assets/Pasted%20image%2020240522210954.png)
<!--ID: 1716450545754-->
END

---


START
BI-SZZ

Aby byl certifikát vydaný autoritou platný, co musí platit v stromové struktuře?

Back:

Musí být platné všechny certifikáty ve stromu nad ním.
<!--ID: 1716450545757-->
END

---


START
BI-SZZ

Co musí $A$ udělat, aby mu mohlo $C$ poslat zprávu?

![](../Assets/Pasted%20image%2020240522210954.png)

Back:

![](../Assets/Pasted%20image%2020240522211610.png)
<!--ID: 1716450545760-->
END

---

### digitální podpis


START
BI-SZZ

Jak se u dokumentu podepsaným digitálním podpisem ověří, že je **podpis platný**?

Back:

Digitální podpis = zašifrovaná heš dokumentu pomocí soukromého klíče autora

Ověření:
1. **Dešifruju digitální podpis** pomocí veřejného klíče autora
2. **Srovnám s heší dokumentu** - pokud se rovnají, je podpis platný a ten člověk je autorem
<!--ID: 1716450545763-->
END

---



START
BI-SZZ

Jaké jsou **4 klíčové vlastnosti** digitálního podpisu a **co znamenají**?

Back:

Podpis musí být:
- **nezfalšovatelný** - podpis se nedá napodobit jiným subjektem než podepisujícím
- **ověřitelný** - příjemce dokumentu musí být schopen ověřit, že podpis je platný
- **nepopiratelný** - podepisující nesmí mít pozdeji možnost popřít, že dokument podepsal
- musí splňovat **integritu** - podepsaná zpráva se nedá zmenit, aniž by se zneplatnil podpis
<!--ID: 1716450545766-->
END

---

### generátory náhodných čísel


START
BI-SZZ

Na co se používají výstupy z **generátorů náhodných čísel**?

Back:

Náhodná čísla se hodí jako klíče, inicializační vektory, sůl apod.
<!--ID: 1716450545768-->
END

---


START
BI-SZZ

Co je **náhodná posloupnost**? 

Back:

**Posloupnost čísel**, kde jsou všechny výstupy **rovnoměrně rozdělené** a výstupy jsou na sobě **nezávislé** (nekorelují)

Pozn. náhodnost zkoumáme vždy u posloupnosti čísel (u jednoho čísla to nemá smysl)
<!--ID: 1716450545771-->
END

---


START
BI-SZZ

Co je **entropie**?

Back:

entropie = míra náhodnosti = obtížnost uhodnutí následující hodnoty
<!--ID: 1716450545774-->
END

---


START
BI-SZZ

Co znamená, že je **entropie maximální**?

Back:

že každá posloupnost má stejnou pravděpodobnost vygenerování
<!--ID: 1716450545777-->
END

---


START
BI-SZZ

Může nějaký algoritmus zvýšit entropii toho, co je na vstupu?

Back:

Ne. Žádný algoritmus entropii nezvýší (na výstupu je maximálně taková jako na vstupu)
<!--ID: 1716450545780-->
END

---

#### generátory skutečně náhodných čísel


START
BI-SZZ

Co jsou **generátory skutečně náhodných čísel**?

Back:

používají nepředvídatelné “přírodní” zdroje entropie jako např. radioaktivní rozpad, atmosférický šum, teplotní šum nebo chování uživatele (např. pohyb myši)
<!--ID: 1716450545783-->
END

---


START
BI-SZZ

Co je a jak funguje **John von Neumannův dekorelátor**?

Back:

Algoritmus, co dělá post-processing po vygenerování náhodné posloupnosti čísel.

Jak funguje (mění dvojice bitů na vstupu na výstup):
- 01→0
- 10→1
- 00 a 11 zahodit
<!--ID: 1716450545786-->
END

---


START
BI-SZZ

Proč se používá **John von Neumannův dekorelátor**?

Back:

generovat skutečně náhodná čísla je náročné, často je nepoměr nul a jedniček (třeba se fakt dlouho generují samé nuly atd.)
<!--ID: 1716450545789-->
END

---


START
BI-SZZ

Pro co se používají **čísla** z **generátorů skutečně náhodných čísel**?

Back:

používají se jako **seedy** pro **pseudonáhodné generátory**
<!--ID: 1716450545791-->
END

---


START
BI-SZZ

Co jsou **statické testy generátorů**?

Back:

Testy, které ověří vlastnosti náhodných generátorů.

Ověřují, zda generovaná posloupnost splňuje některé vlastnosti náhodné posloupnosti.
<!--ID: 1716450545794-->
END

---


START
BI-SZZ

Jaké jsou **testy náhodných generátorů**?

Back:

- **frekvenční test**
- **runs test**
- **test hodností matic**
- **spektrální test**
- **univerzální statistický test**
<!--ID: 1716450545797-->
END

---


START
BI-SZZ

Co je **frekvenční test** náhodných generátorů?

Back:

testování frekvence nul a jedniček

_Podrobně:_
![](../Assets/Pasted%20image%2020240523092240.png)
<!--ID: 1716450545799-->
END

---


START
BI-SZZ

Co je **runs test** náhodných generátorů?

Back:

testování frekvence posloupností samých nul nebo samých jedniček

![](../Assets/Pasted%20image%2020240523092458.png)
<!--ID: 1716450545802-->
END

---


START
BI-SZZ

Co je **test hodností matic** náhodných generátorů?

Back:

hledání linárních závislostí v podposloupnostech

![](../Assets/Pasted%20image%2020240523092452.png)
<!--ID: 1716450545805-->
END

---


START
BI-SZZ

Co je **spektrální test** náhodných generátorů?

Back:

hledání periodicity pomocí Fourierových transformací

![](../Assets/Pasted%20image%2020240523092426.png)
<!--ID: 1716450545808-->
END

---


START
BI-SZZ

Co je **univerzální statistický test** náhodných generátorů?

Back:

pokud lze posloupnost dobře zkomprimovat, má malou entropii

![](../Assets/Pasted%20image%2020240523092419.png)
<!--ID: 1716450545810-->
END

---

#### generátory pseudonáhodných čísel


START
BI-SZZ

Co jsou **generátory pseudonáhodných čísel**?

Back:

generují čísla, která nejsou skutečně náhodná, ale **působí náhodně**, **dokud neznáme parametry generátoru**
<!--ID: 1716450545813-->
END

---

#####  kryptograficky bezpečné generátory


START
BI-SZZ

Co musí **generátor pseudonáhodných čísel splňovat**, aby byl **kryptograficky bezpečný**? 

Back:

- **next-bit test**
- **state compromise**
<!--ID: 1716450545816-->
END

---


START
BI-SZZ

Co je **next-bit test**?

Back:

Pseudonáhodný generátor náhodných čísel musí splňovat:

**next-bit test** = neexistuje algoritmus s polynomiální složitostí, který by dokázal předpovědět následující bit s pravděpodobností nad 50 %
<!--ID: 1716450545819-->
END

---


START
BI-SZZ

Co je **state compromise**?

Back:

Pseudonáhodný generátor náhodných čísel musí splňovat:

při zjištění vnitřního stavu generátoru (**state compromise**) nesmí jít zpětně rekonstruovat dosavadní vygenerovaná posloupnost (a pokud má navíc generátor na vstupu zdroj entropie, nemělo by jít se znalostí stavu ani předpovědět následující stavy)
<!--ID: 1716450545821-->
END

---


START
BI-SZZ

Jaké jsou příklady jak lze realizovat bezpečný pseudonáhodný generátor náhodných čísel? 

Back:

- **CTR mód blokových šifer**
- **proudové šifry**
- **hashovací funkce aplikovaná na čítač**
<!--ID: 1716450545824-->
END

---

##### lineární kongruenční generátor


START
BI-SZZ

Co je a jak funguje **lineární kongruenční generátor**?

Back:

Je to generátor pseudonáhodných čísel.

Jak funguje:
$$X_{n+1} = |a \cdot X_n + c|_m$$
- $X_0$ je seed
- $a,m,c$ se prostě nějak zvolí

Musí platit (aby se tolik neopakovala čísla):
- $\mathrm{gcd}(c,m) = 1$
- $a-1$ je dělitelné prvočiniteli $m$
- Pokud $4|m$, pak také $4|a − 1$

_Pozn. Tento generátor je jeden z nejznámějších způsobů generování pseudonáhodných čísel._
<!--ID: 1716450545827-->
END

---


START
BI-SZZ

Jaké jsou problémy s **lineárním kongruenčním generátorem**? (2)

Back:

- Nejvýše po $m$ iteracích se začne opakovat
- Není kryptograficky bezpečný!
<!--ID: 1716450545829-->
END

---

##### Blum-Blum-Shub

START
BI-SZZ

Co je a jak funguje Blum-Blum-Shub?

Back:

Je to generátor pseudonáhodných čísel.

Jak funguje:
Pokud je $X_{n+1}$ sudé, na výstupu bude $0$, jinak $1$
$$X_{n+1} =|X_n^2|_m$$

Kde:
- $X_0 > 1$ je seed
- $m = pq$ ($p,q$ jsou prvočísla)
- $p,q \equiv 3 \mod 4$
<!--ID: 1716450545832-->
END

---

START
BI-SZZ

Je **Blum-Blum-Shub** kryptograficky bezpečný?

Back:

**Ano**!
<!--ID: 1716450545835-->
END

---


START
BI-SZZ

Jaká je výhoda **Blum-Blum-Shubu**?

Back:

Je **kryptograficky bezpečný** a **lze spočítat $i$-tý prvek** pomocí vzorečku.
<!--ID: 1716450545838-->
END

---


START
BI-SZZ

Jaká je nevýhoda Blum Blum Shubu?

Back:

Je **pomalý**.
<!--ID: 1716450545841-->
END

---

