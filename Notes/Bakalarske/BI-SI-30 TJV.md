---
created: 2024-03-24T15:37:30
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-30 BI-WI-20 TJV

> BI-WSI-SI-30/BI-WSI-WI-20 (TJV)
> Syntaxe protokolu HTTP. Použití metod POST, PUT, GET, DELETE protokolu HTTP u webových služeb REST a SOAP. Souvislost webových služeb, protokolu HTTP a architektury klient–server.


### architektura klient-server

START
BI-SZZ

Co je architektura **klient-server**?

Back:

struktura distribuovaného systému, kde jsou úkoly rozděleny mezi žadatele služby (tj. **klienty**) a poskytovatele služby (tj. **servery**)

_Doplňující informace:_
- zdroje jsou typicky uloženy jen na straně serveru, který je poskytuje klientům, ne naopak
- příkladem je web, e-mail nebo síťové tiskárny
<!--ID: 1711294392764-->
END

---

### Service Oriented Architecture (SOA)

START
BI-SZZ

Co je Service Oriented Architecture (SOA)?

Back:

principy, podle nichž se velká aplikace skládá z menších nezávislých komponent, které si vzájemně poskytují služby

důraz se klade na znovupoužitelnost, oddělení rozhraní od implementace a platformní nezávislost
<!--ID: 1711294392779-->
END

---

### webová služba

START
BI-SZZ

Co je webová služba?

Back:

- služba poskytovaná přes síť, typicky internet
- realizuje architekturu klient-server i principy SOA
- využívá webové technologie jako je protokol HTTP, jazyky a formáty typu HTML, XML a JSON a webové prohlížeče k prezentaci dat uživateli
<!--ID: 1711294392782-->
END

---


START
BI-SZZ

Čeho je zkratka HTTP?

Back:

HyperText Transfer Protocol
<!--ID: 1711294392785-->
END

---


START
BI-SZZ

Co je HTTP?

Back:

jeden z protokolů, pomocí nichž mohou klienti a servery komunikovat
<!--ID: 1711294392788-->
END

---


START
BI-SZZ

Jaké jsou 2 základní typy zpráv v HTTP?

Back:

- **HTTP požadavek** = zpráva od klienta k serveru popisující žádanou službu nebo zdroj
- **HTTP odpověď** = zpráva od serveru ke klientovi jako reakce na požadavek
<!--ID: 1711294392790-->
END

---


START
BI-SZZ

Co se může vyskytovat v těle zpráv HTTP?

Back:

v těle zpráv může být cokoliv, ale nejčastěji jde o formáty HTML, XML nebo JSON
<!--ID: 1711294392793-->
END

---


START
BI-SZZ

Co znamená, že je HTTP **bezestavový**?

Back:

**bezestavový** = požadavky jsou nezávislé a server si nepamatuje ty předchozí

(**sessions** k ukládání stavu na serveru nejsou součástí HTTP)
<!--ID: 1711294392796-->
END

---


START
BI-SZZ

Co v kontextu HTTP znamená **zdroj**?

Back:

**zdroj** = data, o která má klient zájem (např. dokument, webová stránka, soubor)
<!--ID: 1711294392802-->
END

---


START
BI-SZZ

Co v kontextu HTTP znamená **URI**?

Back:

**URI** (Uniform Resource Identifier) = jednoznačný identifikátor zdroje

Např. `urn:isbn:0451450523` je identifikátor pro knížku - neříká kde to je, ale jednoznačně ji identifikuje
<!--ID: 1711294392806-->
END

---


START
BI-SZZ

Co v kontextu HTTP znamená **URL**?

Back:

**URL** (Uniform Resource Locator) = podmnožina URI, která navíc specifikuje protokol, doménu (nebo IP adresu) a “cestu” ke zdroji (podobně jako cesty ve filesystémech)

Např. https://www.example.com/page.html - říká kde lze danou věc najít
<!--ID: 1711294392809-->
END

---

#### syntaxe HTTP požadavku

START
BI-SZZ

Popiš, jak vypadá syntaxe **HTTP požadavku**.

Back:

```
{metoda} {URI zdroje} HTTP/{verze} CRLF
{hlavička} CRLF
{hlavička} CRLF ... 
CRLF
{tělo}
```

Např.
```
GET /example HTTP/1.1
Host: www.example.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Authorization: Bearer your_access_token_here
Accept-Encoding: gzip, deflate, br
Content-Type: application/json

```
<!--ID: 1711294392811-->
END

---


START
BI-SZZ

Jaké jsou základní metody v HTTP? (5)

Back:

- `GET` - získání aktuálního stavu zdroje (bez vedlejších efektů)
- `POST` - odeslání dat ke zpracování
- `PUT` - odeslání nového stavu zdroje (aktualizace nebo úplně nový zdroj)
- `DELETE` - odstranění obsahu nebo funkcionality zdroje
- `PATCH` - částečná modifikace zdroje
<!--ID: 1711294392814-->
END

---


START
BI-SZZ

Jakých je 5 hlavních hlaviček v HTTP?

Back:

- `Host`
- `Accept`
- `Content-Type`
- `Accept-Encoding`
- `Authorization`

... a spousta dalších
<!--ID: 1711294392817-->
END

---


START
BI-SZZ

Co znamená `Host` v hlavičce HTTP?

Back:

`Host` (od HTTP/1.1 povinná!) - DNS doména zdroje vč. portu

Např. `Host: www.example.com`
<!--ID: 1711294392820-->
END

---


START
BI-SZZ

Co znamená `Accept` v hlavičce HTTP?

Back:

`Accept` - MIME typy souborů, které klient přijme v odpovědi

Např.
`Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
<!--ID: 1711294392823-->
END

---


START
BI-SZZ

Co znamená `Content-Type` v hlavičce HTTP?

Back:

`Content-Type` - MIME typ dat v těle požadavku

Např. `Content-Type: application/json`
<!--ID: 1711294392829-->
END

---


START
BI-SZZ

Co znamená `Accept-Encoding` v hlavičce HTTP?

Back:

`Accept-Encoding` - preferované kódování odpovědi

Např. `Accept-Encoding: gzip, deflate, br`
<!--ID: 1711294392833-->
END

---


START
BI-SZZ

Co znamená `Authorization` v hlavičce HTTP?

Back:

`Authorization` - přihlašovací údaje

Např. `Authorization: Bearer your_access_token_here`
<!--ID: 1711294392836-->
END

---

#### syntaxe HTTP odpovědi

START
BI-SZZ

Popiš, jak vypadá syntaxe **HTTP odpovědi**.

Back:

```
HTTP/{verze} {status kód} {status text} CRLF
{hlavička} CRLF
{hlavička} CRLF ... 
CRLF 
{tělo}
```
<!--ID: 1711294392839-->
END

---


START
BI-SZZ

Jakých je **5 kategorií status kódů** a **co znamenají** v HTTP?

Back:

- `1xx` - požadavek přijat a zpracování pokračuje
- `2xx` - úspěch
- `3xx` - přesměrování (je potřeba další požadavek)
- `4xx` - chyba na straně klienta (resp. požadavku)
- `5xx` - chyba na straně serveru

_Neformálně:_
![](../../Assets/Pasted%20image%2020240324161637.png)
<!--ID: 1711294392842-->
END

---

### REST

START
BI-SZZ

Čeho je zkratka REST?

Back:

**REpresentational State Transfer**
<!--ID: 1711294392844-->
END

---


START
BI-SZZ

Co je REST?

Back:

zásady pro architekturu a chování aplikací na webu (nebo v podobné síti)
<!--ID: 1711294392847-->
END

---


START
BI-SZZ

Jaké jsou principy RESTu? (5)

Back:

- **architektura klient-server**
- **bezestavovost**
- **jednotné rozhraní**
- **kešovatelnost**
- **vrstvy**
<!--ID: 1711294392850-->
END

---


START
BI-SZZ

Co se chápe principem **architektura klient-server** v RESTu?

Back:

klient řeší prezentaci, server řeší data a logiku
<!--ID: 1711294392853-->
END

---

START
BI-SZZ

Co se chápe principem **bezestavovost** v RESTu?

Back:

každý požadavek musí obsahovat všechny informace pro jeho splnění, protože server si nepamatuje nic o předchozích požadavcích
<!--ID: 1711294392855-->
END

---

START
BI-SZZ

Co se chápe principem **jednotné rozhraní** v RESTu?

Back:

- API se nechápe jako volání funkcí, ale jako práce se zdroji
- k jednoznačné identifikaci zdrojů se používají URI
- jeden zdroj může mít více reprezentací (ze stejné URI můžeme dostat HTML i JSON)
- zdroje se upravují posláním reprezentace (např. objekt updatenu tak, že pošlu nový JSON s těmito daty)
- samopopisné zprávy - všechny potřebné informace jsou součástí zprávy
<!--ID: 1711294392860-->
END

---


START
BI-SZZ

Co je HATEOAS v RESTu?

Back:

**HATEOAS** (Hypermedia as the Engine of Application State) - server v odpovědích posílá i odkazy (URI), pomocí nichž se může klient “navigovat” mezi souvisejícími zdroji a pracovat s nimi
<!--ID: 1711294392864-->
END

---


START
BI-SZZ

Co se chápe principem **kešovatelnost** v RESTu?

Back:

odpovědi by měly vědět, zda jsou kešovatelné pro zlepšení výkonu
<!--ID: 1711294392867-->
END

---

START
BI-SZZ

Co se chápe principem **vrstvy** v RESTu?

Back:

architektura by měla být rozvrstvená do komponent pro jednotlivé funkcionality jako kešování, rozložení zátěže, bezpečnost atd.
<!--ID: 1711294392870-->
END

---


START
BI-SZZ

Jaké HTTP metody odpovídají CRUD operacím v RESTu?

Back:

- CREATE = `POST` nebo `PUT` = inicializace nového zdroje
- READ = `GET` = získání aktuálního stavu zdroje
- UPDATE = `PUT` nebo `PATCH` = (částečná) aktualizace stavu zdroje
- DELETE = `DELETE` = smazání zdroje (takže URI pak již není validní)
<!--ID: 1711294392872-->
END

---


START
BI-SZZ

Co znamená, že je API nebo webová služba **RESTful**?

Back:

Že splňuje zásady RESTu
<!--ID: 1711294392875-->
END

---

### SOAP

START
BI-SZZ

Čeho je zkratka SOAP?

Back:

**Simple Object Access Protocol**
<!--ID: 1711294392878-->
END

---


START
BI-SZZ

Co je SOAP?

Back:

protokol pro výměnu strukturovaných informací na webu (nebo v podobné síti)
<!--ID: 1711294392881-->
END

---


START
BI-SZZ

Jaký formát se používá v SOAPu? (např. JSON,...)

Back:

SOAP využívá **XML**

_Příklad použití pro představu:_
![](../../Assets/Pasted%20image%2020240324163351.png)
<!--ID: 1711294392883-->
END

---


START
BI-SZZ

Jaký protokol aplikační vrstvy využívá SOAP?

Back:

Využívá typicky HTTP.
<!--ID: 1711294392889-->
END

---


START
BI-SZZ

Které metody HTTP používá SOAP? 

Back:

typicky využívá jen `HTTP` metodu `POST` - celá SOAP zpráva (tzv. **obálka** obsahující SOAP hlavičku a tělo) je vložena do těla `POST` požadavku a typ operace je popsán URI v HTTP hlavičce `SOAPAction`
<!--ID: 1711294392893-->
END

---

