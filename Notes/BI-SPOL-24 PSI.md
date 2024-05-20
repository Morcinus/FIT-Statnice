---
created: 2024-05-20T10:55:22
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-24 PSI

> BI-SPOL-24 (PSI)
> Protokolová rodina TCP/IP (IPv4, IPv6, TCP, UDP, aplikační protokoly). Řízení datového toku. Princip a využití NAT. Systém DNS.


START
BI-SZZ

Co je **protokol** v sítích?

Back:

standard (soubor pravidel) pro komunikaci mezi dvěma uzly
<!--ID: 1716200128627-->
END

---


START
BI-SZZ

Čeho je zkratka **IP**?

Back:

Internet Protocol
<!--ID: 1716200128641-->
END

---

START
BI-SZZ

Co definuje IP protokol?

Back:

definuje **hierarchické IP adresy** pro každé **síťové rozhraní**
<!--ID: 1716200128647-->
END

---


START
BI-SZZ

Jaký protokol se používá pro přidělování IP adres?

Back:

DHCP
<!--ID: 1716200128650-->
END

---


START
BI-SZZ

Co je **autonomní systém** v kontextu sítí?

Back:

skupina IP rozsahů jednoho poskytovatele (ISP)
<!--ID: 1716200128653-->
END

---

#### IPv4

START
BI-SZZ

Kolik bitů mají a jak se zapisují IPv4 adresy?

Back:

Mají **32b** a zapisují se **desítkově** po bytech
<!--ID: 1716200128656-->
END

---


START
BI-SZZ

Vysvětli, co je část před lomítkem a část za lomítkem:

`147.32.232.212/24`

Back:

před lomítkem = konkrétní IP adresa nějakého zařízení
za lomítkem = **rozsah adres** - všechny adresy v jedné síti mají tolik prvních společných bitů. Např. zde mají všechny adresy prvních 24 bitů stejných
<!--ID: 1716200128658-->
END

---


START
BI-SZZ

Co reprezentuje nejnižší adresa v rozsahu sítě? 

Back:

Reprezentuje to **adresu sítě**
<!--ID: 1716200128661-->
END

---


START
BI-SZZ

Co reprezentuje nejvyšší adresa v rozsahu sítě?

Back:

Používá se pro **broadcast** (=odeslání zprávy všem řipojeným uzlům)
<!--ID: 1716200128664-->
END

---


START
BI-SZZ

Má hlavička paketu v IPv4 pevně danou (fixní) velikost, nebo ne?

Back:

Hlavička paketu nemá fixní velikost.
<!--ID: 1716200128667-->
END

---


START
BI-SZZ

U čeho (**IPv4, IPv6**) se používá **TTL** a u čeho **hop limit**?

Back:

**IPv4 používá TTL** - počet “skoků” mezi směrovači, než bude paket zahozen
**IPv6 používá hop limit** - obdoba TTL
<!--ID: 1716200128670-->
END

---

#### IPv4


START
BI-SZZ

Kolik bitů mají a jak se zapisují IPv6 adresy?

Back:

Mají **128b** a zapisují se **hexadecimálně**

Např. `2001:0:130F::9C0:876A:130B`
<!--ID: 1716200128673-->
END

---


START
BI-SZZ

Co značí `::` v IPv6?

Back:

Nejdelší posloupnost nul (minimálně dvě skupiny nul)
<!--ID: 1716200128676-->
END

---


START
BI-SZZ

Co v sobě obsahuje adresa IPv6? 

Back:

Identifikátor **EUI-64** odvozený z MAC adresy daného zařízení
<!--ID: 1716200128678-->
END

---


START
BI-SZZ

Jaké jsou druhy adres v IPv6? (6)

Back:

- **lokální linkové** - adresy konkrétních síťových rozhraní na zařízeních
- **unikátní lokální** (obdoba neveřejných adres u IPv4)
- **individuální globální** (obdoba veřejných adres u IPv4)
- **multicastové** - používají se i pro broadcasty
- **přechodové** - pro doručení dat do IPv4 sítí
- **loopback adresy**
<!--ID: 1716200128681-->
END

---


START
BI-SZZ

Když připojím zařízení do lokální sítě, tak kdo nastaví IPv4 adresu tomuto zařízení?

Back:

Přiděluje to **DHCP server**, což je v lokálních sítích typicky **router** (směrovač).
<!--ID: 1716200128684-->
END

---


START
BI-SZZ

Když připojím zařízení do lokální sítě, tak kdo nastaví IPv6 adresu tomu zařízení?

Back:

V IPv6 si **zařízení samo nastaví** svoji adresu podle MAC adresy (na rozdíl od IPv4)?
<!--ID: 1716200128687-->
END

---

### Další protokoly

START
BI-SZZ

Co je ARP protokol?

Back:

protokol, pomocí kterého se mapují IP adresy na MAC adresy 
<!--ID: 1716200128690-->
END

---


START
BI-SZZ

Co je ICMP protokol?

Back:

Protokol pro ověření funkčnosti, např. `ping`
<!--ID: 1716200128693-->
END

---

### TCP


START
BI-SZZ

Čeho je zkratka **TCP**?

Back:

Transmission Control Protocol

Tags: optional
<!--ID: 1716200128695-->
END

---


START
BI-SZZ

V jaké vrstvě je TCP protokol?

Back:

transportní vrstva
<!--ID: 1716200128698-->
END

---


START
BI-SZZ

Jaké klíčové vlastnosti má TCP protokol? (3)

Back:

- **spolehlivý** = garantuje doručení, obsahuje řízení toku, detekci duplicit, opravu chyb, atd.
- **spojově orientovaný** = udržuje spojení mezi směrovači, lze v něm přenést neomezené množství dat
- **duplexní** = existuje jedno spojení pro každý směr komunikace
<!--ID: 1716200128701-->
END

---


START
BI-SZZ

Co je **třícestná výměna** (three-way handshake)?

Back:

1. pošle se **zpráva** (SYN)
2. pošle se **odpověď** (SYN+ACK)
3. pošle se **potvrzení odpovědi** (ACK)
<!--ID: 1716200128704-->
END

---

### UDP


START
BI-SZZ

Čeho je zkratka **UDP**?

Back:

User Datagram Protocol

Tags: optional
<!--ID: 1716200128707-->
END

---


START
BI-SZZ

V jaké vrstvě je UDP protokol?

Back:

transportní vrstva
<!--ID: 1716200128710-->
END

---


START
BI-SZZ

Jaké klíčové vlastnosti má UDP protokol? (2)

Back:

- **nespolehlivý** (= negarantuje doručení, ale v ideálních podmínkách je rychlejší než TCP)
- **paketově orientovaný** (= nevytváří spojení)
<!--ID: 1716200128712-->
END

---


START
BI-SZZ

Pro co je vhodný TCP vs UDP protokol?

Back:

**TCP** = pro běžný přenos dat
**UDP** = pro real-time přenosy hlasu, streamování atd., obecně pro data, kde tolik nevadí občasné ztráty
<!--ID: 1716200128715-->
END

---

#### aplikační protokoly

START
BI-SZZ

Jaké jsou protokoly aplikační vrstvy pro **vzdálenou správu**? (3)

Back:

- **TelNet** - bez šifrování
- **SSH**
- **RDP**

_Pozn._ všechny využívají TCP
<!--ID: 1716200128718-->
END

---


START
BI-SZZ

Jaký je protokol aplikační vrstvy pro **přenos souborů**? (1)

Back:

**FTP**

(File Transfer Protocol, jedno TCP spojení pro data, druhé pro příkazy)
<!--ID: 1716200128721-->
END

---


START
BI-SZZ

Jaký je protokol aplikační vrstvy pro **přenos dokumentů**? (např. pro přenos JSON, XML, HTML dokumentů)

Back:

**HTTP**
<!--ID: 1716200128724-->
END

---


START
BI-SZZ

Jaký je protokol aplikační vrstvy pro **přidělování IP adres** klientům?

Back:

DHCP

Typicky to přiděluje DHCP server
<!--ID: 1716200128726-->
END

---


START
BI-SZZ

Jaký je protokol aplikační vrstvy pro **překlad doménových jmen na IP adresy**?

Back:

**DNS**
<!--ID: 1716200128729-->
END

---


START
BI-SZZ

Jaký je protokol aplikační vrstvy pro posílání mailů?

Back:

**SMTP**
<!--ID: 1716200128732-->
END

---


START
BI-SZZ

Jaký jsou protokoly aplikační vrstvy pro čtení mailů? (2)

Back:

**POP3** a **IMAP**
<!--ID: 1716200128736-->
END

---

### řízení datového toku


START
BI-SZZ

Jaké jsou 3 způsoby řízení datového toku v sítích? (=metody pro doručování dat)

Back:

- **Stop & Wait**
- **Stop & Go**
- **klouzavé okénko**
<!--ID: 1716200128739-->
END

---


START
BI-SZZ

Jak funguje metoda **Stop & Wait**?

Back:

Odeslání paketů až po přijetí potvrzení předchozího paketu.

_Pozn._ je to fakt neefektivní

_Obrázek_
![](../Assets/Pasted%20image%2020240520115403.png)
<!--ID: 1716200128742-->
END

---


START
BI-SZZ

Jak funguje metoda **Stop & Go**?

Back:

Odesílají se pakety, dokud vysílač nedostane od přijímače signál `STOP`. Pak vysílač čeká, dokud zase nedostane příkaz `GO`.

_Z přednášky_:
![](../Assets/Pasted%20image%2020240520115530.png)
<!--ID: 1716200128745-->
END

---


START
BI-SZZ

Jak funguje metoda **klouzavé okénko**?

Back:

Odesílá se maximálně $n$ nepotvrzených paketů "napřed". Jakmile se potvrdí paket, okénko se posune.

![](../Assets/Pasted%20image%2020240520115652.png)
<!--ID: 1716200128748-->
END

---

### princip a využití NAT


START
BI-SZZ

Čeho je zkratka NAT?

Back:

Network Address Translation
<!--ID: 1716200128751-->
END

---


START
BI-SZZ

Co je NAT?

Back:

překlad různých **privátních IP adres** na jednu **veřejnou IP adresu** (adresu vnějšího rozhraní NATujícího směrovače)

přepisuje port, adresu nebo jinou hodnotu v paketu

_Obrázek pro představu_
![](../Assets/Pasted%20image%2020240520120016.png)
<!--ID: 1716200128754-->
END

---


START
BI-SZZ

Proč je potřeba NAT?

Back:

je potřeba, protože IPv4 adres není dostatek pro všechna zařízení v Internetu
<!--ID: 1716200128756-->
END

---

### systém DNS


START
BI-SZZ

Čeho je zkratka DNS?

Back:

Domain Name System
<!--ID: 1716200128759-->
END

---


START
BI-SZZ

V jaké vrstvě je protokol DNS?

Back:

v aplikační vrstvě
<!--ID: 1716200128762-->
END

---


START
BI-SZZ

Co je hlavním cílem DNS protokolu?

Back:

Překlad **doménových jmen na IP adresy**

(ale dokáže také rozdělovat zátěž, omezovat přístupy atd.)
<!--ID: 1716200128765-->
END

---


START
BI-SZZ

Co je **doména**?

Back:

podstrom v hierarchickém stromu doménových jmen
<!--ID: 1716200128767-->
END

---


START
BI-SZZ

Co je **Top Level Domain** (TLD)?

Back:

Nejvyšší doména

_Např._
- _generic (gTLD)_ - např. `.gov`, `.org`
- _country code (ccTLD)_ - např. `.cz`
- _new generic (ngTLD)_ - např. `.vip`
- _reverse_ `in-addr.arpa` - pro překlad z IP na doménové jméno
<!--ID: 1716200128770-->
END

---


START
BI-SZZ

Co je **Fully Qualified Domain Name**?

Back:

zřetězení doménových jmen

např. `www.fit.cvut.cz`
<!--ID: 1716200128773-->
END

---


START
BI-SZZ

Jak funguje překlad doménového jména na IP adresu? 

Back:

resolver operačního systému komunikuje s **name serverem**, který přeposílá dotazy na další name servery, dokud se nenajde správný DNS záznam
<!--ID: 1716200128776-->
END

---


START
BI-SZZ

Jaké jsou **dva typy dotazování** při překladu doménového jména na IP adresu a **jak fungují**?

Back:

- **iterativní dotazování** = name server vrátí klientovi jen adresu, kde se dál doptat
- **rekurzivní dotazování** = name server se sám doptá a vrátí klientovi odpověď

_Podrobné vysvětlení iterativního:_
![](../Assets/Pasted%20image%2020240520121500.png)

_Podrobné vysvětlení rekurzivního:_
![](../Assets/Pasted%20image%2020240520121515.png)
<!--ID: 1716200128779-->
END

---


START
BI-SZZ

Jaké jsou typy **doménových zdrojových záznamů** a **co znamenají**? (5)

Back:

- `A` = IPv4 adresa
- `AAAA` = IPv6 adresa
- `CNAME` = alias pro jinou adresu
- `MX` = mail servery
- `TXT` = libovolný text
<!--ID: 1716200128782-->
END

---
