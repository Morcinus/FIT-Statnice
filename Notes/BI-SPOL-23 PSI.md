---
created: 2024-05-20T09:25:48
parent: "[[FIT]]"
---
TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-23 PSI

> BI-SPOL-23 (PSI)
> ISO/OSI a TCP/IP model. Protokoly linkové vrstvy. Přepínání a směrování. Principy fungování propojovacích síťových prvků.

TODO:
- Přidat otázku na to, co je to ARP tabulka a kde se nachází

### ISO/OSI model

START
BI-SZZ

Čeho je zkratka **ISO/OSI**?

Back:

International Organization for Standardization / Open Systems Interconnection
<!--ID: 1716195283801-->
END

---


START
BI-SZZ

Co je **ISO/OSI**?

Back:

referenční model popisující protokoly a komunikaci v počítačových sítích, definujíce sedm nezávislých vrstev

_(Obrázek vrstev):_
![](../Assets/Pasted%20image%2020240520093203.png)
<!--ID: 1716195283806-->
END

---


START
BI-SZZ

Co je v rámci PSI **médium**?

Back:

prostředí, ve kterém se přenášejí data (kabel, vzduch, atd.)
<!--ID: 1716195283809-->
END

---


START
BI-SZZ

Jaké jsou vrstvy v ISO/OSI modelu?

Back:

vrstvy hostitele:
1. **aplikační**
2. **prezentační**
3. **relační** 
4. **transportní**

vrstvy média:
1. **síťová** 
2. **linková** aka **spojová**
3. **fyzická**

_Obrázek:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283812-->
END

---

START
BI-SZZ

K čemu slouží **aplikační** vrstva v OSI modelu?

Back:

spolupráce aplikací

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283815-->
END

---


START
BI-SZZ

Jaké jsou protokoly v **aplikační vrstvě** OSI modelu? (5)

Back:

**HTTP, FTP, SMTP, DNS, DHCP**

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283818-->
END

---


START
BI-SZZ

K čemu slouží **prezentační** vrstva v OSI modelu?

Back:

prezentace dat, komprese, šifrování

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283820-->
END

---


START
BI-SZZ

Jaké jsou protokoly/technologie v **prezentační vrstvě** OSI modelu? (2)

Back:

**XML, TLS**

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283823-->
END

---


START
BI-SZZ

K čemu slouží **relační** vrstva v OSI modelu?

Back:

udržení spojení mezi hostiteli, transakce, logické rozhraní pro aplikace

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283826-->
END

---


START
BI-SZZ

smazat

Back:

smazat

_Obrázek pro referenci:_


END

---


START
BI-SZZ

K čemu slouží **transportní** vrstva v OSI modelu?

Back:

end-to-end spojení

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283831-->
END

---


START
BI-SZZ

Jaké jsou protokoly v **transportní vrstvě** OSI modelu? (2)

Back:

**TCP, UDP**

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283834-->
END

---


START
BI-SZZ

K čemu slouží **síťová** vrstva v OSI modelu?

Back:

logické adresování a směrování paketů napříč sítěmi

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283837-->
END

---


START
BI-SZZ

Jaké jsou protokoly/technologie v **síťové** vrstvě OSI modelu? (3)

Back:

IP, ARP, Internet

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)

**END

---


START
BI-SZZ

K čemu slouží **linková** (spojová) vrstva v OSI modelu?

Back:

propojení v lokální síti, posílání rámců

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283840-->
END

---


START
BI-SZZ

Jaké jsou protokoly/technologie v **linkové** (spojové) vrstvě OSI modelu? (2)

Back:

Ethernet, LAN

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283843-->
END

---


START
BI-SZZ

K čemu slouží **fyzická** vrstva v OSI modelu?

Back:

fyzikální přenos bitů signálu médiem

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283845-->
END

---


START
BI-SZZ

Jaké jsou protokoly/technologie ve **fyzické** vrstvě OSI modelu? (4)

Back:

protokol **RFID**,

jinak se používá **optika**, **metalika**, **antény**

_Obrázek pro referenci:_
![](../Assets/Pasted%20image%2020240520093445.png)
<!--ID: 1716195283848-->
END

---


START
BI-SZZ

Jaká data se používají v **transportní vrstvě**?

Back:

Segmenty
<!--ID: 1716215764548-->
END

---


START
BI-SZZ

Jaká data se používají v **síťové vrstvě**?

Back:

Pakety
<!--ID: 1716215764552-->
END

---


START
BI-SZZ

Jaká data se používají v **linkové vrstvě**?

Back:

Rámce
<!--ID: 1716215764555-->
END

---


START
BI-SZZ

Jaká data se používají ve **fyzické vrstvě**?

Back:

Bity
<!--ID: 1716215764559-->
END

---


### TCP/IP model


START
BI-SZZ

Co je TCP/IP model?

Back:

dnes se chápe spíš jako sada protokolů pro komunikaci v Internetu
<!--ID: 1716195283851-->
END

---


START
BI-SZZ

Co je **TCP** protokol? V jaké vrstvě se nachází?

Back:

**TCP** (Transmission Control Protocol) = spolehlivý protokol **transportní vrstvy**, řeší řízení toku, detekci a opravu chyb apod.
<!--ID: 1716195283854-->
END

---


START
BI-SZZ

Co je **IP** protokol? V jaké vrstvě se nachází?

Back:

**IP** (Internet Protocol) = protokol síťové vrstvy, řeší hlavně adresování a směrování
<!--ID: 1716195283857-->
END

---


START
BI-SZZ

Jaké jsou vrstvy v rámci TCP/IP modelu?

Back:

1. **aplikační vrstva** (TCP segmenty)
2. **transportní vrstva** (IP pakety)
3. **síťová vrstva** (Ethernet)
4. **síťové rozhraní** (bity)

_Obrázek:_
![](../Assets/Pasted%20image%2020240520095421.png)
<!--ID: 1716195283859-->
END

---

### protokoly linkové vrstvy


START
BI-SZZ

Na jaké dvě podvrstvy se dělí **linková vrstva**?

Back:

- LLC
- MAC
<!--ID: 1716195283862-->
END

---


START
BI-SZZ

Co je LLC?

Back:

podvrstva linkové vrstvy, která řeší řízení toku, přepínání, potvrzování, kódování, detekci a opravu chyb (tj. hardwarově nezávislé problémy)
<!--ID: 1716195283865-->
END

---


START
BI-SZZ

Co je MAC?

Back:

podvrstva linkové vrstvy, která řeší kolize, multiplexování, MAC adresy (hardwarově specifické problémy)
<!--ID: 1716195283868-->
END

---


START
BI-SZZ

Co je **rámec** v rámci linkové vrstvy?

(no pun intended)

Back:

přenášená jednotka informace (max. jednotky kB)
<!--ID: 1716195283870-->
END

---


START
BI-SZZ

Co je MAC adresa?

Back:

48bitový identifikátor výrobce a konkrétního zařízení
<!--ID: 1716195283873-->
END

---


START
BI-SZZ

Jak se zapisuje MAC adresa?

Back:

zapisuje se hexadecimálně (např. `0E:22:A5:5C:77:17`)
<!--ID: 1716195283876-->
END

---


START
BI-SZZ

Jak se zapisuje broadcast u MAC adresy?

Back:

`FF:FF:FF:FF:FF:FF`
<!--ID: 1716195283881-->
END

---


START
BI-SZZ

Je MAC adresa hierarchická jakou to má nevýhodu?

Back:

Ne! -> nelze efektivně směrovat
<!--ID: 1716195283885-->
END

---

#### Ethernet


START
BI-SZZ

Co je Ethernet?

Back:

linkový protokol pro drátovou a kabelovou komunikaci
<!--ID: 1716195283888-->
END

---


START
BI-SZZ

Jakou rychlost může mít Ethernet?

Back:

rychlost až 100 Gbit/s
<!--ID: 1716195283891-->
END

---


START
BI-SZZ

Jakým způsobem se v Ethernetu řeší zahlcení sítě?

Back:

Přepínač může vysílat příkaz `PAUSE`, který zpomalí tok

_Vysvětlení_
Pokud určitý přepínač výkonově “nestíhá” , může požádat své sousedy o zpomalení vysílání prostřednictvím zaslání příkazu PAUSE.

Příkaz PAUSE je možné zaslat konkrétnímu uzlu, všem (broadcastem) či multicastové skupině specifických přepínačů.
<!--ID: 1716195283894-->
END

---


START
BI-SZZ

Co je **autonegociace**?

Back:

vysílač a přijímač si dohodnou parametry přenosu

(např. o maximálním průtoku, kódování, modularizaci)
<!--ID: 1716195283896-->
END

---


START
BI-SZZ

Pomocí čeho se detekují **chyby** v **rámcích** v linkové vrstvě? Jak se tato kontrola **nazývá**?

Back:

Společně s každým rámcem se posílá **32b kontrolní součet rámce**

Tomu se říká **FCS** (frame check sequence)
<!--ID: 1716195283899-->
END

---


START
BI-SZZ

Má Ethernet mechanismus pro potvrzování doručení zprávy?

Back:

Ne!
<!--ID: 1716195283903-->
END

---


START
BI-SZZ

Jak se označuje daný druh Ethernetu? Co jednotlivé části znamenají?

Back:

Např. `10 Base T - FD`

- `10` = rychlost 10 Mbit/s
- `T` = kroucená dvoulinka
- `F` = optické vláknu
- `FD` = full-duplex (komunikace současně v obou směrech)
- `HD` = half-duplex (komunikace střídavě buď v jednom nebo druhém směru)
<!--ID: 1716195283906-->
END

---

#### Wi-Fi


START
BI-SZZ

Co je Wi-Fi?

Back:

bezdrátový linkový protokol využívající rádiové vlny
<!--ID: 1716195283909-->
END

---


START
BI-SZZ

Jaké jsou 3 typy rámců ve Wi-Fi?

Back:

datové, kontrolní, řídící
<!--ID: 1716195283913-->
END

---


START
BI-SZZ

Pomocí čeho se v rámci Wi-Fi dá vyvarovat kolizím?

Back:

Pomocí CSMA/CA příposlechu. Vlastně se čeká, dokud není médium (ten přenosový prostor) volný, pak se teprve vysílá signál.

_Obrázek_
![](../Assets/Pasted%20image%2020240520101622.png)
<!--ID: 1716195283915-->
END

---


### přepínání (switching)


START
BI-SZZ

Co je přepínání (switching)?

Back:

přeposílání rámců jen na správná cílová zařízení pro lepší bezpečnost a snížení zbytečné zátěžě linek (tj. logistika na linkové vrstvě)
<!--ID: 1716195283918-->
END

---


START
BI-SZZ

Co je **přepínač** (switch)?

Back:

zařízení s vícero porty (= fyzickými výstupy), které se stará o přepínání
<!--ID: 1716195283921-->
END

---


START
BI-SZZ

Co udělá přepínač, když nemůže najít na výstupu připojené zařízení, které má dostat danou zprávu?

Back:

pokud nenajde odpovídající záznam, použije broadcast (= odeslání na všechna připojená zařízení)
<!--ID: 1716195283924-->
END

---


START
BI-SZZ

Co je **CAM tabulka**?

Back:

tabulka **v přepínači** mapující **MAC adresy** na správné **výstupní porty**
<!--ID: 1716195283926-->
END

---

#### režimy přepínání

START
BI-SZZ

Jaké jsou **3 režimy** přepínání v přepínači a **co znamenají**?

Back:

- _**Store-and-forward** (SF)_ = odesílání až po přijetí celého rámce
- _**Fragment free** (FF)_ = odesílání po dočtení hlavičky rámce
- _**Cut-through** (CT)_ = odesílání hned po přečtení cílové MAC adresy
<!--ID: 1716195283929-->
END

---

### směrování (routing)


START
BI-SZZ

Co je **směrování** (routing)?

Back:

hledání cesty k cílovému zařízení (tj. logistika na síťové vrstvě)
<!--ID: 1716195283932-->
END

---


START
BI-SZZ

Co je **směrovač** (router)

Back:

zařízení s vícero síťovými rozhraními, které se stará o směrování

odděluje síťové segmenty, ale sám patří do adresních rozsahů všech připojených sítí
<!--ID: 1716195283935-->
END

---


START
BI-SZZ

Co je **směrovací tabulka**?

Back:

tabulka ve směrovači, která mapuje IP adresy na správná síťová rozhraní
<!--ID: 1716195283938-->
END

---


START
BI-SZZ

Co obsahuje **záznam ve směrovací tabulce**? (4)

Back:

- **rozsah cílových IP adres** (adresa sítě + maska popisující prefix)
- **IP adresa brány** (= nejbližšího směrovače na cestě k cíli, _gateway_)
- **metrika** (např. vzdálenost k bráně)
- **výstupní síťové rozhraní**

_Pro představu:_
![](../Assets/Pasted%20image%2020240520102714.png)
<!--ID: 1716195283941-->
END

---


START
BI-SZZ

Co je **TTL** u směrovačů?

Back:

**TTL** (Time To Live) = čítač skoků mezi směrovači, při každém průchodu směrovačem klesne o 1 a jakmile dosáhne 0, paket se zahodí

Jinými slovy TTL určuje počet “skoků” mezi směrovači, než bude paket zahozen
<!--ID: 1716195283944-->
END

---


START
BI-SZZ

Jaká vrstva se stará o doručení zpráv mezi směrovači?

Back:

**linková vrstva**
<!--ID: 1716195283947-->
END

---


START
BI-SZZ

Jaké jsou **typy směrování**? (5)

Back:

- **redundantní** směrování
- **symetrické/asymetrické** směrování
- **záplavové** směrování
- **reaktivní** směrování
- **proaktivní** směrování
<!--ID: 1716195283950-->
END

---


START
BI-SZZ

Co je **redundantní** směrování?

Back:

komunikace vede přes více cest (např. pro rozložení zátěže)

_Z přednášky_
![](../Assets/Pasted%20image%2020240520103012.png)
<!--ID: 1716195283952-->
END

---


START
BI-SZZ

Co je **symetrické**/**asymetrické** směrování?

Back:

**symetrické** - zpětná cesta je stejná
**asymetrické** - zpětná cesta není stejná

_Z přednášky_
![](../Assets/Pasted%20image%2020240520103138.png)
<!--ID: 1716195283955-->
END

---


START
BI-SZZ

Jaké jsou **typy směrování** podle způsobu **hledání cesty**? (3)

Back:

- **záplavové**
- **proaktivní**
- **reaktivní**
<!--ID: 1716195283958-->
END

---


START
BI-SZZ

Co je **záplavové** směrování?

Back:

hledání cesty pomocí BFS (neefektivní)
<!--ID: 1716195283961-->
END

---


START
BI-SZZ

Co je **reaktivní směrování**?

Back:

ad-hoc hledání cesty bez směrovacích tabulek
<!--ID: 1716195283964-->
END

---


START
BI-SZZ

Co je **proaktivní směrování**?

Back:

výběr cesty podle směrovacích tabulek
<!--ID: 1716195283967-->
END

---


START
BI-SZZ

Jaké jsou dva typy **proaktivního směrování** a co znamenají?

Back:

**statické** směrování = tabulky jsou vyplněné manuálně
**dynamické** směrování = tabulky jsou vyplněné **směrovacím protokolem**
<!--ID: 1716195283970-->
END

---

#### směrovací protokoly


START
BI-SZZ

Jaké jsou **3 směrovací protokoly**?

Back:

- **distance-vector protokoly**
- **link-state protokoly**
- **path-vector protokoly**
<!--ID: 1716195283972-->
END

---


START
BI-SZZ

Jak funguje **distance-vector protokol**?

Back:

hledá se cesta podle vzdálenosti pomocí **Bellman-Fordova Algoritmu**
<!--ID: 1716195283975-->
END

---


START
BI-SZZ

Jak funguje **link-state protokol**?

Back:

pomocí hledání kostry pomocí Dijkstry a DFS, všechny směrovače znají kompletní topologii sítě
<!--ID: 1716195283978-->
END

---


START
BI-SZZ

Jak funguje **path-vector protokol**?

Back:

směrovače si vyměňují kompletní cesty ke konkrétním cílům

To dělají směrovače mezi autonomními systémy (= rozsahy patřícími jednomu poskytovateli).
<!--ID: 1716195283980-->
END

---

### principy fungování propojovacích síťových prvků


START
BI-SZZ

Co dělá **opakovač** (repeater)?

Back:

jen zesiluje signál

_Obrázek_
![](../Assets/Pasted%20image%2020220313113729.png)
<!--ID: 1716195283983-->
END

---


START
BI-SZZ

Na jaké vrstvě je **opakovač** (repeater)?

Back:

Na **fyzické** vrstvě
<!--ID: 1716195283986-->
END

---


START
BI-SZZ

Co dělá **rozbočovač** (hub)?

Back:

kopíruje příchozí data na více kabelových výstupů
<!--ID: 1716195283989-->
END

---


START
BI-SZZ

Na jaké vrstvě je **rozbočovač** (hub)?

Back:

na fyzické vrstvě
<!--ID: 1716195283992-->
END

---


START
BI-SZZ

Co dělá **přepínač** (switch)?

Back:

přeposílá správnými porty podle MAC adresy

_Obrázek_
![](../Assets/Pasted%20image%2020220313113626.png)
<!--ID: 1716195283994-->
END

---


START
BI-SZZ

Na jaké vrstvě je **přepínač** (switch)?

Back:

linková vrstva
<!--ID: 1716195283997-->
END

---


START
BI-SZZ

Co dělá **most** (bridge)?

Back:

jako přepínač, ale jen dvě sítě a bez vyrovnávací paměti
<!--ID: 1716195284000-->
END

---


START
BI-SZZ

Na jaké vrstvě je **most** (bridge)

Back:

linková vrstva
<!--ID: 1716195284003-->
END

---


START
BI-SZZ

Co dělá **směrovač** (router)?

Back:

přeposílá správnými rozhraními podle IP adresy

_Obrázek:_
![](../Assets/Pasted%20image%2020220313113646.png)
<!--ID: 1716195284006-->
END

---


START
BI-SZZ

Na jaké vrstvě je **směrovač** (router)?

Back:

síťová vrstva
<!--ID: 1716195284009-->
END

---
