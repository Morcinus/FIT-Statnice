---
created: 2024-03-03T10:22:28
parent: "[[DBS]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-10 DBS

> BI-SPOL-10 (DBS)
> Transakce a jejich vlastnosti - ACID.
### Základy transakcí


START
BI-SZZ

Jaké jsou 2 požadavky na DBMS?

Back:

1. **chránit data** - odolnost vůči haváriím atd.
2. poskytuntí korektního, rychlého a asynchronního přístupu **pro větší množství uživatelů najednou**
<!--ID: 1709464438534-->
END

---


START
BI-SZZ

Jaké jsou **2 moduly** v rámci transakcí?

Back:

- **Modul řízení souběžného zpracování** (concurrency control)
- **Modul zotavení z chyb** (recovery)

Tyto moduly řeší ty 2 požadavky na DBMS.
<!--ID: 1709464438545-->
END

---


START
BI-SZZ

Co dělá **modul řízení souběžného zpracovávání** (concurrency control)? 

Back:

![](../Assets/Pasted%20image%2020240303103410.png)

Tags: optional
<!--ID: 1709464438548-->
END

---


START
BI-SZZ

Co dělá **modul zotavení z chyb** (recovery)?

Back:

![](../Assets/Pasted%20image%2020240303103525.png)

Tags: optional
<!--ID: 1709464438551-->
END

---


START
BI-SZZ

Co je **transakce**?

Back:

Transakce je sekvence akcí, které spolu "logicky souvisí" a mění stav databáze.

![](../Assets/Pasted%20image%2020240303103716.png)
<!--ID: 1709464438555-->
END

---


START
BI-SZZ

Kdy **začíná transakce**? (2)

Back:

- **Když skončí předchozí transakce**
- **Když vznikne session**
<!--ID: 1709464438558-->
END

---


START
BI-SZZ

Kdy **končí transakce**? (2)

Back:

- **Explicitně** příkazem `COMMIT` (potvrzení) nebo `ROLLBACK` (zrušení)
- **Implicitně** když klient ukončí session (sám udělá commit nebo rollback)
<!--ID: 1709464438561-->
END

---

### Stavový diagram transakce


START
BI-SZZ

Jakých je **5 stavů** v transakci?

Back:

- **aktivní** (Active)
- **částečně potvrzený** (Partially Commited)
- **potvrzený** (Commited)
- **chybný** (Failed)
- **zrušený** (ABorted)

![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438564-->
END

---


START
BI-SZZ

Co je **aktivní** (Active) stav transakce?

Back:

- Když **probíhají DML příkazy**
- V tomto stavu se začíná

![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438567-->
END

---

START
BI-SZZ

Co je **částečně potvrzený** (Partially Commited) stav transakce?

Back:

- Po provedení poslední operace transakce

![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438572-->
END

---

START
BI-SZZ

Co je **potvrzený** (Commited) stav transakce?

Back:

- Po úspěšném zakončení transakce (tzn. po provedení `COMMIT`)

![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438577-->
END

---

START
BI-SZZ

Co je **chybný** (Failed) stav transakce?

Back:

- Když v normálním průběhu transakce nelze pokračovat

![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438583-->
END

---

START
BI-SZZ

Co je **zrušený** (ABorted) stav transakce?

Back:

- Po skončení operace `ROLLBACK` (tj. uvedení databáze do stavu před započetím transakce) 
![](../Assets/Pasted%20image%2020240303104429.png)
<!--ID: 1709464438587-->
END

---

### ACID


START
BI-SZZ

Jaké jsou 4 vlastnosti **ACID** transakce?

Back:

- **Atomicity** (atomicita)
- **Consistency** (konzistence)
- **Independence** (nezávislost)
- **Durability** (trvanlivost)
<!--ID: 1709464438591-->
END

---


START
BI-SZZ

Co je **atomicita** v ACID?

Back:

Transakce buď proběhne celá, nebo vůbec
<!--ID: 1709464438594-->
END

---

START
BI-SZZ

Co je **konzistence** v ACID?

Back:

Před i po transakci je DB v _konzistentním stavu_, a to i v případě neúspěšné transakce.

(mezistavy v průběhu transakce konzistentní být nemusí)
<!--ID: 1709464438597-->
END

---

START
BI-SZZ

Co je **nezávislost** v ACID?

Back:

Dílčí efekty transakce nejsou viditelné jiným transakcím
<!--ID: 1709464438599-->
END

---

START
BI-SZZ

Co je **durability** v ACID?

Back:

Efekty úspěšné transakce jsou persistovány (trvale uloženy)
<!--ID: 1709464438603-->
END

---

### Rozvrhy

START
BI-SZZ

Co je **rozvrh** transakcí?

Back:

Každá transakce se skládá z dílčích operací. Rozvrh určuje **pořadí** těchto operací.
<!--ID: 1709464438606-->
END

---


START
BI-SZZ

Co je **rozvrhovač** a co je jeho **cílem**?

Back:

Rozvrhovač je program, co se snaží **maximalizovat paralelismus** zpracování transakcí.
<!--ID: 1709464438612-->
END

---


START
BI-SZZ

Co je **sériový rozvrh**?

Back:

Rozvrh, kde se jednotlivé transakce provádějí po sobě.

Tento rozvrh je zaručeně bez chyb.

![](../Assets/Pasted%20image%2020240303111030.png)
<!--ID: 1709464438616-->
END

---


START
BI-SZZ

Co je **paralelní rozvrh** a k čemu v něm může docházet?

Back:

Transakce se _prokládají_ mezi sebe. To může vést k **anomáliím**.

![](../Assets/Pasted%20image%2020240303111108.png)
<!--ID: 1709464438619-->
END

---

#### Chyby v rozvrhu

START
BI-SZZ

Jaké 4 chyby mohou nastat v **paralelním rozvrhu**?

Back:

- **ztráta aktualizace**
- **dočasná aktualizace**
- **neopakovatelné čtení**
- **fantóm**
<!--ID: 1709464438622-->
END

---


START
BI-SZZ

Co je **ztráta aktualizace**?

Back:

T1 přepíše hodnotu když ji má T2 načtenou.

_Příklad:_
![](../Assets/Pasted%20image%2020240303112025.png)
<!--ID: 1709464438625-->
END

---


START
BI-SZZ

Co je **dočasná aktualizace**?

Back:

T2 vycházela ze změn, které T1 rollbackne

_Příklad:_
![](../Assets/Pasted%20image%2020240303112131.png)
<!--ID: 1709464438628-->
END

---


START
BI-SZZ

Co je **neopakovatelné čtení**?

Back:

T1 opakuje stejný SELECT, T2 mezitím něco změní

_Podrobně:_
![](../Assets/Pasted%20image%2020240303112210.png)
<!--ID: 1709464438635-->
END

---


START
BI-SZZ

Co je **fantóm**?

Back:

T1 opakuje stejný SELECT, T2 mezitím přidá/smaže řádky

_Podrobně:_
![](../Assets/Pasted%20image%2020240303112253.png)
<!--ID: 1709464438638-->
END

---

#### Izolace rozvrhu

START
BI-SZZ

Jaké jsou **úrovně izolace** rozvrhu? (4)

Back:

- **read uncommited**
- **read commited**
- **repeatible read**
- **serializable**
<!--ID: 1709464438641-->
END

---


START
BI-SZZ

Co je **read uncommited** izolace rozvrhu?

Back:

**Povoluje všechny anomálie.**

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240303112629.png)
<!--ID: 1709464438644-->
END

---


START
BI-SZZ

Co je **read commited** izolace rozvrhu?

Back:

**Zakazuje jen dočasnou aktualizaci.**

Pozn.: Tato izolace je v praxi nejčastější.

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240303112629.png)
<!--ID: 1709464438648-->
END

---


START
BI-SZZ

Co je **repeatible read** izolace rozvrhu?

Back:

**Zakazuje dočasnou aktualizaci a neopakovatelné čtení.**

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240303112629.png)
<!--ID: 1709464438651-->
END

---

START
BI-SZZ

Co je **serializable** izolace rozvrhu?

Back:

**Zakazuje všechny zmíněné anomálie.**

_Doplňující obrázek:_
![](../Assets/Pasted%20image%2020240303112629.png)
<!--ID: 1709464438654-->
END

---


#### Precedenční graf a uspořádatelný rozvrh


START
BI-SZZ

Co je **precedenční graf**?

Back:

- **vrcholy**: transakce
- **orientované hrany**: pořadí dvou transakcí, které se ovlivňují
<!--ID: 1709464438658-->
END

---


START
BI-SZZ

Co je **uspořádatelný rozvrh**?

Back:

Rozvrh, jehož _precedenční graf_ **neobsahuje kružnici**.

_Doplňující obrázek (`S4` obsahuje kružnici, `S4'` ne)_
![](../Assets/Pasted%20image%2020240303113520.png)
<!--ID: 1709464438661-->
END

---

#### Legální rozvrh a transakce

START
BI-SZZ

Co je **legální rozvrh**?

Back:

Rozvrh, pro nějž platí, že:
- **Objekt se zamkne**, když k němu chce transakce přistupovat
- Transakce **nebude zamykat** již zamklé objekty, ale _počká_ na uvolnění zámku
<!--ID: 1709464438665-->
END

---


START
BI-SZZ

Co je **dobře formulovaná** transakce?

Back:

- zamyká co potřebuje
- nezamyká znovu to co zamkla
- neodemyká co nezamkla
- na konci vše odemkne
<!--ID: 1709464438667-->
END

---


START
BI-SZZ

Co je **dvoufázová** transakce (= dvoufázový uzamykací protokol)?

Back:

1. fáze: uzamyká se, nic se neodemyká
2. fáze: od prvního odemknutí se nic nezamyká
<!--ID: 1709464438670-->
END

---


START
BI-SZZ

Tvrzení: Co platí pro **legální rozvrh**, v němž jsou transakce **dobře formulované** a **dvoufázové**?

Back:

<div class="definice">
<h5>
Tvrzení
</h5>
<p>
Pokud jsou všechny transakce dobře formulované a dvoufázové, pak je jejich legální rozvrh <b>uspořádatelný</b>.
</p>
</div>
<!--ID: 1709464438673-->
END

---

#### Uzamykací protokol

START
BI-SZZ

Co je **uzamykací protokol**?

Back:

Uzamykací protokol je množina pravidel, které udávají, kdy transakce bude uzamykat a odmykat objekty databáze.
<!--ID: 1709464438684-->
END

---


START
BI-SZZ

Proč se v praxi používá **uzamykací protokol** více, než **hledání uspořádatelnosti rozvrhů**? Jakou to má ale nevýhodu?

Back:

- Důvod: Je to **rychlejší**, než hledat uspořádatelné rozvrhy
- Nevýhoda: může docházet k **deadlockům** (to se řeší `ROLLBACKEM` transakce, která to zamkla -> postupně se to odemyká)
<!--ID: 1709464438687-->
END

---

### Ztavování z chyb

START
BI-SZZ

Co je **transakční žurnál**?

Back:

Je to _log soubor_, který obsahuje **změnové vektory** (informace o jednotlivých změnách v DB)

Pozn.: žurnál se používá **pouze** pro obnovu databáze po chybě.
<!--ID: 1709464438693-->
END

---


START
BI-SZZ

Jaké informace obsahují **změnové vektory**?

Back:

`<transID, blockID, old data, new data>`

Tags: optional
<!--ID: 1709464438697-->
END

---


START
BI-SZZ

Co zajišťuje **transakční žurnál**?

Back:

**Atomicitu** a **Trvanlivost** transakcí
<!--ID: 1709464438702-->
END

---


START
BI-SZZ

Jaké **2 operace** se používají při obnově databáze pomocí **transakčního žurnálu**?

Back:

`UNDO` a `REDO`
<!--ID: 1709464438705-->
END

---


START
BI-SZZ

Co je **database buffer cache**?

Back:

Je to cache bloků databáze.
<!--ID: 1709464438708-->
END

---


START
BI-SZZ

Jak probíhá obnova databáze pomocí **žurnálu**?

Back:

1. Podle žurnálu a hlavniček DB souborů se najde **synchronizační bod**
2. **Roll Forward** - přehrajou se změny ze žurnálu
3. **Roll Back** - odvolají se transakce, které nebyly dokončeny
<!--ID: 1709464438711-->
END

---


START
BI-SZZ

Co je **globální chyba**?

Back:

Chyby co mají vliv na **více transakcí**.

_Příklady:_
- Pád serveru (výpadek proudu)
- Systémová chyba (uváznutí, odumžení komunikace klienta se serverem)
- Chyby médií (poškození disku)
<!--ID: 1709464438714-->
END

---


START
BI-SZZ

Co je **lokální chyba**?

Back:

Chyby v rámci **jedné transakce**.

_Příklady:_
- Dělení nulou, prušení IO při zápisu do DB atd.
<!--ID: 1709464438717-->
END

---
