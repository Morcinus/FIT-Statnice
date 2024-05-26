---
created: 2024-05-26T11:32:36
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-17 PSI

> BI-WSI-SI-17 (PSI)
> Adresace IPv4, rozdělení adresního prostoru. Rozdíly mezi IPv4 a IPv6.

### TODO
- Přidat sem nějaký algoritmus/postupy na příklady adresace, co se dělaly na cvikách

### Obecné informace


START
BI-SZZ

Co je **unicastová komunikace**?

Back:

Komunikace mezi jedním přijímačem a jedním vysílačem

_Příklad:_ Posílání e-mailu z jednoho počítače na jiný počítač.
<!--ID: 1716722665481-->
END

---


START
BI-SZZ

Co je **multicastová komunikace**?

Back:

Komunikace mezi jedním odesílatelem a skupinou specifikovaných příjemců

_Příklad:_ Vysílání video konference, kde se mohou účastnit jen určení uživatelé.
<!--ID: 1716722665487-->
END

---


START
BI-SZZ

Co je **broadcastová komunikace**?

Back:

Komunikace mezi jedním odesílatelem a všemi příjemci v síti

_Příklad:_ Vysílání zprávy všem zařízením v místní síti (např. ARP request).
<!--ID: 1716722665490-->
END

---


START
BI-SZZ

Co je **anycastová komunikace**?

Back:

Komunikae mezi jedním odesílatelem a nejbližším (nejoptimálnějším) příjemcem ze skupiny příjemců

_Příklad:_ Dotaz DNS serveru, který je odpovězen nejbližším dostupným serverem.
<!--ID: 1716722665493-->
END

---

START
BI-SZZ

Čeho je zkratka ICMP?

Back:

Internet Control Message Protocol
<!--ID: 1716722665497-->
END

---


START
BI-SZZ

Co je ARP tabulka?

Back:

Tabulka na daném zařízení, kde si zařízení uchovává mapování IP adres na MAC adresy.
<!--ID: 1716722665500-->
END

---


START
BI-SZZ

Jak funguje ARP překlad IP adresy na MAC adresu?

Back:

Stanice A chce zjistit MAC adresu stanice B podle IP adresy.

1. $A$ pošle přes ARP protokol do sítě všem **žádost** (broadcastem)
2. $B$ žádost zachytí a odešle svoji **odpověď s MAC adresou** (unicastem)
3. $A$ si zapíše odpověď do **ARP tabulky** a pak může komunikovat pomocí MAC adresy
<!--ID: 1716722665503-->
END

---

### Adresace IPv4


START
BI-SZZ

Čemu přesně se přiděluje IP adresa?

Back:

síťovému rozhraní
<!--ID: 1716722665506-->
END

---


START
BI-SZZ

Co je fragmentace paketů?

Back:

Pokud obsah paketu překračuje maximání velikost, rozdělí do **fragmentů** a je doručován po částech.
<!--ID: 1716722665509-->
END

---


START
BI-SZZ

Co obsahuje **hlavička IP paketu**? (6)

Back:

- **header length** - délka hlavičky v počtu 32bitových slov
- **total length** - celková délka packetu v bytech
- **typ služby** - pro Quality of Service
- **TTL** - time to live
- **zdrojová adresa**
- **cílová adresa**
<!--ID: 1716722665511-->
END

---

### Rozdělení adresního prostoru


START
BI-SZZ

Na jaké **dvě hlavní kategorie** se dělí IP adresy, **jak se liší**?

Back:

- **Privátní** - zařízení v lokální síti, nemusí být na světě unikátní, využívá se NAT pro překlad na veřejnou adresu
- **Veřejné** - je možné směrovat přes internet, musí být unikátní
<!--ID: 1716722665514-->
END

---

#### adresní rozsahy

START
BI-SZZ

Jaké jsou adresní rozsahy pro **privátní adresy**? (3)

Back:

- `10.0.0.0/8`
- `172.16.0.0/12`
- `192.168.0.0/16`
<!--ID: 1716722665517-->
END

---


START
BI-SZZ

Jaká je IPv4 adresa pro **link-local**?

Back:

`169.256.0.0/16`
<!--ID: 1716722665520-->
END

---


START
BI-SZZ

Jaká je IPv4 adresa pro **loop back**?

Back:

`127.0.0.0/24`
<!--ID: 1716722665523-->
END

---


START
BI-SZZ

Jaká je IPv4 adresa pro **multicast**?

Back:

`224.0.0.0/4`
<!--ID: 1716722665526-->
END

---

#### třídy adres


START
BI-SZZ

Co je **dělení adres podle třídy** (classful design)?

Back:

Historické dělení IPv4 adres
<!--ID: 1716722665529-->
END

---


START
BI-SZZ

Proč jsou třídy adres velice neefektivní?

Back:

pokud je o pár adres více než dovoluje třída, je nutné zvolit vyšší třídu
<!--ID: 1716722665532-->
END

---


START
BI-SZZ

Jaké jsou jednotlivé **třídy IPv4 adres** a **k čemu slouží**?

Back:

- A, B, C – **unicastové adresy**
- D – **multicastové adresy**
- E – **rezervované adresy**

_Obrázek pro představu:_
![](../Assets/Pasted%20image%2020240526121718.png)
<!--ID: 1716722665535-->
END

---

#### Common Classless Inter-Domain Routing


START
BI-SZZ

Čeho je zkratka CIDR?

Back:

**Classless Inter-Domain Routing**
<!--ID: 1716722665539-->
END

---


START
BI-SZZ

Co je CIDR?

Back:

Dělení adres nikoliv pomocí tříd, ale pomocí notace `IP/PREFIX`, kde `PREFIX` je maska sítě s libovolnou délkou.
<!--ID: 1716722665542-->
END

---

### Rozdíly mezi IPv4 a IPv6


START
BI-SZZ

Co je **Neighbor discovery**?

Back:

Pokročilý způsob automatické konfigurace IPv6 adres. 

_Nabízí řadu funkcí jako třeba:_
- automatická konfigurace koncových stanic
- zjišťování linkových adres v lokální síti
- rychlá aktualizace neplatných položek
- hledání směrovačů
- přesměrování
- ověření dostupnosti sousedů
- detekce duplicitních adres
<!--ID: 1716722665545-->
END

---


START
BI-SZZ

Co za hlavní dvě funkce obsahuje Neighbor Discovery?

Back:

- automatická konfigurace koncových stanic (obdoba DHCP pro IPv4)
- zjišťování linkových adres v lokální síti (náhrada ARP pro IPv4)
<!--ID: 1716722665548-->
END

---


START
BI-SZZ

Jaké jsou 3 druhy adres, které existují v IPv6 podle druhu komunikačních operací?

Back:

- **unicastové**
- **multicastové**
- **anycastové**
<!--ID: 1716722665551-->
END

---


START
BI-SZZ

Jsou v IPv6 broadcastové adresy?

Back:

**Ne!** Broadcastové adresy neexistují – řeší se speciálními multicastovými
<!--ID: 1716722665554-->
END

---


START
BI-SZZ

Může IPv4 paket obsahovat více hlaviček?

Back:

**Ne.** Může mít jen jednu.
<!--ID: 1716722665558-->
END

---


START
BI-SZZ

Může IPv6 paket obsahovat více hlaviček?

Back:

**Ano!** První hlavička je základní a pak může mít i rozšiřující (např. pro určení typu dat, fragmentace atd.).

_Ilustrační obrázek:_
![](../Assets/Pasted%20image%2020240526131827.png)
<!--ID: 1716722665560-->
END

---


START
BI-SZZ

Jak se pomocí EUI-64 přesně nastavuje IPv6 adresa?  

Back:

Vezmu MAC adresu, doprostřed nacpu `FF:FE` a 7. bit zleva se invertuje

_Obrázek_
![](../Assets/Pasted%20image%2020240526132234.png)

Tags: optional
<!--ID: 1716722665563-->
END

---
