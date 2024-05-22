---
created: 2024-05-22T20:23:22
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-7 BEZ

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

END

---

#### obyčejné zveřejnění veřejných klíčů

START
BI-SZZ

Jaký je problém s **obyčejným zveřejněním veřejných klíčů**?

Back:

hrozí **man-in-the-middle attack**, tedy že útočník zachytí odesílatelův veřejný klíč, pošle příjemci svůj vlastní veřejný klíč (tedy vydává se za odesílatele), a pak si může číst zašifrované odpovědi, manipulovat je a přeposílat, aniž by si příjemce či odesílatel čehokoliv všimili

END

---

#### veřejně dostupný adresář veřejných klíčů

START
BI-SZZ

Jak funguje **veřejně dostupný adresář veřejných klíčů**?

Back:

Účastníci se registrují u **důvěryhodného správce**, své veřejné klíče mu předají a správce je zveřejní v adresáři jako dvojice **jméno** + **veřejný klíč**

END

---


START
BI-SZZ

Jaký je problém s **veřejně dostupným adresářem veřejných klíčů**?

Back:

pokud útočník získá soukromý klíč správce, může zprávy odposlouchávat

- navíc je otázka jak zaručit důvěryhodnost správce

END

---

#### autorita pro veřejné klíče

START
BI-SZZ

Co je obecně **distribuce veřejných klíčů pomocí autority pro veřejné klíče**?

Back:

Oba účastníci při komunikaci komunikují s **autoritou pro veřejné klíče**

END

---


START
BI-SZZ

Jaká je nevýhoda **distribuce veřejných klíčů pomocí autority pro veřejné klíče**?

Back:

Musí se komunikovat s autoritou

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
6. $A$ zašifruje náhodné číslo $N_1$ od $A$ a navíc ještě vlastní náhodné číslo $N_2$ veřejným klíčem $A$, odešle je $A$ $(B \to E_{VK_A}(N_1 || N_2) \to A)$ a $A$ si je dešifruje svým soukromým klíčem
7. $A$ zašifruje náhodné číslo $N_2$ od $B$ veřejným klíčem $B$, odešle jej $B$ $(A \to E_{VK_B}(N_2) \to B)$ a $B$ si jej dešifruje svým soukromým klíčem



Tags: optional

END

---

#### certifikace veřejných klíčů

START
BI-SZZ

Co je **certifikace veřejných klíčů**?

Back:

Způsob distribuce veřejných klíčů bez kontaktu s třetím subjektem

END

---


START
BI-SZZ

Co je **certifikační autorita**?

Back:

důvěryhodná třetí strana, která vydává (a aktualizuje) certifikáty

END

---


START
BI-SZZ

Co je **certifikát**?

Back:

struktura podepsaná **soukromým klíčem autority**

END

---


START
BI-SZZ

Jaké jsou části **certifikátu**?

Back:

- **veřejný klíč držitele** $VK_A$
- **identifikátor držitele** $ID_A$
- **dobu platnosti certifikátu** $T_1$

END

---



START
BI-SZZ

Jak funguje **distribuce veřejných klíčů pomocí certifikace**?

Back:

1. Certifikační autorita vydá a podepíše certifikát $C_A$ (pomocí $SK_{Aut}$) na základě $VK_A$
2. $A$ pak zveřejní certifikovaný klíč $C_A$
3. $B$ pak certifikát ověří pomocí $D_{VK_{Aut}}(C_A)$

_Ilustrace vydání 2 ceritfikátů (pozn. 2. má nejspíš být $C_B$)_
![](../Assets/Pasted%20image%2020240522203817.png)

END

---


START
BI-SZZ

Co je **certifikační strom** a **jak funguje**?

Back:

stromová struktura certifikačních autorit, postupně si vydávají certifikáty (ta vyšší vydává těm nižším)

![](../Assets/Pasted%20image%2020240522210825.png)

END

---


START
BI-SZZ

Co je **kořenová autorita**?

Back:

Autorita co vydává certifikáty a je úplně nahoře v certifikačním stromu.

END

---


START
BI-SZZ

Co je **křížová certifikace** a kdo ji typicky provádí?

Back:

To, že si certifikační autority **navzájem podepíšou certifikáty**. Pak spolu mohou komunikovat i účastníci z různých stromů.

Dělají to typicky **kořenové autority**

![](../Assets/Pasted%20image%2020240522210954.png)

END

---


START
BI-SZZ

Aby byl certifikát vydaný autoritou platný, co musí platit v stromové struktuře?

Back:

Musí být platné všechny certifikáty ve stromu nad ním.

END

---


START
BI-SZZ

Jak to funguje, když chce $C$ komunikovat s $A$?

![](../Assets/Pasted%20image%2020240522210954.png)

Back:

![](../Assets/Pasted%20image%2020240522211610.png)

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

END

---

### generátory náhodných čísel


START
BI-SZZ



Back:



END

---
