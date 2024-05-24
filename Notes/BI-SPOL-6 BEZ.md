---
created: 2024-05-22T09:51:30
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-6 BEZ

> BI-SPOL-6 (BEZ)
> Asymetrické kryptosystémy (šifra RSA, Diffie-Hellman, RSA digitální podpis), hešovací funkce (SHA-2, HMAC).

### asymetrické kryptosystémy

START
BI-SZZ

Co jsou asymetrické kryptosystémy?

Back:

algoritmy využívající dva “jednosměrné” klíče: **veřejný** a **soukromý**, který se nedá z veřejného odvodit (narozdíl od symterické kryptografie, kde je klíč jen jeden)
<!--ID: 1716376588199-->
END

---


START
BI-SZZ

Pro co se využívají asymetrické kryptosystémy? (2)

Back:

- pro **šifrování**
- pro **autentizaci**
<!--ID: 1716376588202-->
END

---


START
BI-SZZ

Jak lze využít asymetrické kryptosystémy **pro šifrování**?

Back:

odesílatel zašifruje zprávu příjemcovým veřejným klíčem, příjemce ji dešifruje svým soukromým klíčem
<!--ID: 1716376588204-->
END

---


START
BI-SZZ

Jak lze využít asymetrické kryptosystémy **pro autentizaci**?

Back:

autor vytvoří zprávu pomocí svého soukromého klíče, čtenář si může ověřit autentičnost (= původ) pomocí autorova veřejného klíče
<!--ID: 1716376588207-->
END

---


START
BI-SZZ

Co označuje $E$ v bezpečnosti?

Back:

Šifrovací funkci
<!--ID: 1716376588210-->
END

---


START
BI-SZZ

Co označuje $D$ v bezpečnosti?

Back:

Dešifrovací funkci
<!--ID: 1716376588213-->
END

---

#### RSA


START
BI-SZZ

Jaký typ šifry je **RSA**? (symetrická/asymetrická)

Back:

**asymetrická**
<!--ID: 1716376588215-->
END

---


START
BI-SZZ

Na jakém pricipu je založena šifra **RSA**?

Back:

šifra založená na **náročnosti faktorizace** (= rozložení velkého čísla na součin prvočísel)
<!--ID: 1716376588218-->
END

---


START
BI-SZZ

Definice: **RSA**

Back:

![](../Assets/Pasted%20image%2020240522095821.png)
<!--ID: 1716376588221-->
END

---


START
BI-SZZ

Jak se pomocí RSA zašifruje zpráva?

Back:

zpráva (= otevřený text) m se zašifruje na šifrový text $c = |m^e|_n$
<!--ID: 1716376588224-->
END

---


START
BI-SZZ

Jak se pomocí RSA dešifruje šifrový text?

Back:

šifrový text $c$ se dešifruje na otevřený text $m = |c^d|_n$
<!--ID: 1716376588227-->
END

---

START
BI-SZZ

Jak lze urychlit dešifrování u RSA?

Back:

Lze to až 8x urychlit pomocí **RSA-CRT**, která využívá **Čínskou větu o zbytcích**
<!--ID: 1716376588230-->
END

---

#### RSA digitální podpis


START
BI-SZZ

Co je **digitální podpis**?

Back:

hash ze zprávy zašifrovaná soukromým asymetrickým klíčem

připojení digitálního podpisu za zprávu znamená, že si jakýkoliv čtenář může oveřit autentičnost celé zprávy
<!--ID: 1716376588233-->
END

---


START
BI-SZZ

Jak funguje proces **digitálního podepsání** a **ověření podpisu** pomocí RSA?

Back:

1. **odesílatel** spočte podepsaný OT: $S = D_{SK_A}(m)=|m^{d_1}|_{n_1}$
2. **odesílatel** zašifruje podepsaný OT: $c = E_{VK_2}=|S^{e_2}|_{n_2}$
3. odešle se se ŠT
4. **příjemce** dešifruje ŠT a získá podepsaný OT: $S = D_{SK_2}=|c^{d_2}|_{n_2}$
5. **příjemce** převede _podepsaný OT_ na _OT_: $m = E_{VK_1}=|S^{e_1}|_{n_1}$

![](../Assets/Pasted%20image%2020240522100545.png)

_Vysvětlení:_
Ten podpis spočívá v tom, že když provádím $E$ u příjemce, tak k tomu $E$ potřebuju _veřejný klíč autora_, aby pak OT dával smysl. Takže tím, že příjemce při $E$ použije $VK_1$ a vyšel rozumný OT, tak se tím potvrdilo, že autorem je ten, kdo ke klíči $VK_1$ má soukromý klíč.

Abych mohl podepsanou zprávu převést na OT, musím tedy znát $VK$ autora.
<!--ID: 1716376588236-->
END

---

#### RSA autentizace


START
BI-SZZ

Jak funguje autentizace pomocí **RSA**?

Back:

Zašifruju pomocí $SK$, všichni si to mohou dešifrovat pomocí $VK$.

Tím, že v tom $E$ použiju $VK$ autora a vyjde mi rozumný text, tak tím potvrdím, že je autorem.

_Obrázek:_
![](../Assets/Pasted%20image%2020220404143314.png)

Tags: optional
<!--ID: 1716376588239-->
END

---

### Diffie-Hellman


START
BI-SZZ

Co je **Diffie-Hellman**? (obecně)

Back:

Protokol pro **vytvoření společného symetrického klíče**
<!--ID: 1716376588242-->
END

---


START
BI-SZZ

Definice: **Diffie-Hellmanův kryptografický algoritmus veřejného klíče**

Aka popiš přesně, jak Diffie-Hellman funguje

Back:

**veřejné prvky**: prvočíslo $m$, generátor $a$ grupy $\mathbb{Z}_m^*$, kde $a < m$
- místo modulení celých čísel lze použít také eliptické křivky

**tajné prvky**: soukromý klíč Alice $k_A<m-1$, soukromý klíč Boba $k_B<m-1$

**postup**:
1. Alice odešle Bobovi veřejný klíč $y_A=|a^{k_A}|_m$
2. Bob odešle Alici veřejný klíč $y_B=|a^{k_B}|_m$
3. Alice si dopočítá společný symetrický klíč $K=|y_B^{k_A}|_m$
4. Bob si dopočítá společný symetrický klíč $K=|y_A^{k_B}|_m$
5. oba mají stejný klíč, protože $K = |a^{k_A^{k_B}}|=|a^{k_B^{k_A}}|_m$

_To samé z přednášky:_
![](../Assets/Pasted%20image%2020240522101818.png)
<!--ID: 1716376588246-->
END

---

### hashovací funkce $h$


START
BI-SZZ

Co dělá **hashovací funkce**? (obecně)

Back:

přiřazuje zprávě $M$ její (poměrně krátkou) hash pevné délky $n$ bitů

Zpráva $M$ je řetězec bitů
Hash je taky řetězec bitů 
<!--ID: 1716376588249-->
END

---


START
BI-SZZ

Jaké dvě vlastnosti musí mít hashovací funkce, aby byla hashovací funkcí?

Back:

Je **jednosměrná 1. typu** a **bezkolizní**
<!--ID: 1716376588252-->
END

---


START
BI-SZZ

Co je **jednosměrná** hashovací funkce **1. typu**?

Back:

funkce, kde **výpočet inverze k této funkci je náročný**

_Ilustrační obrázek:_
![](../Assets/Pasted%20image%2020240522102519.png)
<!--ID: 1716376588254-->
END

---


START
BI-SZZ

Co je **jednosměrná** hashovací funkce **2. typu**?

Back:

funkce, kde pro **výpočet inverze je potřeba znalost “padacích vrátek” (klíče)**

_Ilustrační obrázek:_
![](../Assets/Pasted%20image%2020240522102530.png)
<!--ID: 1716376588257-->
END

---


START
BI-SZZ

Co je **bezkolizní** hashovací funkce **1. řádu**?

Back:

Kolize existují, ale nalezení **libovolné kolidující dvojice** je výpočetně nezvládnutelné.
<!--ID: 1716376588260-->
END

---


START
BI-SZZ

Co je **bezkolizní** hashovací funkce **2. řádu**?

Back:

Nalezení **k dané zprávě druhou kolidující** je výpočetně nezvládnutelné.

_Pozn._ tohle by měla splňovat každá hashovací funkce, pokud ne, je dost špatná.
<!--ID: 1716376588263-->
END

---


START
BI-SZZ

Co je **orákulum** a **náhodné orákulum**?

Back:

**orákulum** = stroj, co stejným vstupům přiřadí stejný výstup

**náhodné orákulum** = stroj, co stejným vstupům přiřadí náhodný výběr výstupu z množiny výstupů
<!--ID: 1716376588266-->
END

---


START
BI-SZZ

Je hešovací funkce **orákulum** nebo **náhodné orákulum**?

Back:

**Náhodné orákulum**.
<!--ID: 1716376588268-->
END

---


START
BI-SZZ

Co je **Damgard-Merkleovo zesílení** a **jak funguje**?

Back:

Doplnění zpráv tak, aby byla délka násobkem **512 bitů**.

1. Rozdělím zprávu na bloky o **512b**
2. Do posledního (neúplného) bloku dám na konec $1$ a samé nuly a nechám si **posledních 64b volných**
3. Do posledních **64b** dám informaci, kolik bitů má původní zpráva (=jak je dlouhá).
<!--ID: 1716376588271-->
END

---


START
BI-SZZ

Co je a jak funguje **Damgård-Merkleova konstrukce**? (obecně)

Back:

**Způsob vytvoření hashovací funkce.**

**Postup:**
1. Zpráva se rozdělí do bloků $M_1, M_2, \dots$
2. první krok $H_0$ = inicializační vektor $\mathrm{IV}$ (konstanta)
3. každý další krok $H_i = f(H_{i-1}, M_i)​$, $H_i$ je **kontext**, $f$ je **kompresní funkce**
4. Po použití všech bloků se použije Damgard Merkleovo zesílení (přidá se $1$, nuly a 64b informace o délce zprávy)

_Obrázek:_
![](../Assets/Pasted%20image%2020220315103021.png)
<!--ID: 1716376588274-->
END

---


START
BI-SZZ

Co znamená $\oplus$ v kontextu bitů?

Back:

**XOR**
<!--ID: 1716376588277-->
END

---


START
BI-SZZ

Jaká se používá kompresní funkce v **Damgård-Merkleova konstrukci** a jaký má předpis?

$H_i = f(H_{i-1}, M_i) = \ ?$

Back:

**Davies-Meyerova kompresní funkce**

$H_i = f(H_{i-1}, M_i) = E_{M_i} (H_{i-1}) \oplus H_{i-1}$
<!--ID: 1716376588280-->
END

---

### SHA-2


START
BI-SZZ

Co je SHA-2?

Back:

**Hashovací algoritmus**, který využívá **Damgard-Merkleovu konstrukci**. 

Je to novější verze algoritmu SHA-1.

_Pozn._ těch SHA alogitmů je hodně: SHA-1, SHA-256, SHA-384, SHA-512,...
<!--ID: 1716376588283-->
END

---


START
BI-SZZ

Co jsou rundy v SHA a kolik jich je u každé SHA funkce?

Back:

Každý blok $M_i$ se zpracovává po **80 rundách**, tzn. provede se s ním 80 operací v rámci funkce $f$.
<!--ID: 1716376588286-->
END

---


START
BI-SZZ

Jak dlouhou zprávu, jak dlouhé bloky a jak dlouhý hash má **SHA-256**?

Back:

délka zprávy: $2^{64}-1$
délka bloku: $512b$
délka hashe: $256b$
<!--ID: 1716376588288-->
END

---


START
BI-SZZ

Jak dlouhou zprávu, jak dlouhé bloky a jak dlouhý hash má **SHA-512**?

Back:

délka zprávy: $2^{64}-1$
délka bloku: $1024b$
délka hashe: $512b$
<!--ID: 1716376588291-->
END

---

### H-MAC


START
BI-SZZ

Co je **HMAC**?

Back:

Hashovací algoritmus, který vytvoří hash na základě zprávy $M$ a tajného klíče $K$.

Podobný MAC kódu, ale místo blokové šifry používá hashovací funkci

_Obrázek a vysvětlení:_
![](../Assets/Pasted%20image%2020240522111654.png)
![](../Assets/Pasted%20image%2020240522111706.png)
<!--ID: 1716376588294-->
END

---


START
BI-SZZ

Jaké dvě vlastnosti má **HMAC**?

Back:

je **nepadělatelný integritní** kód - detekuje neúmyslnou chybu a úmyslnou změnu zprávy

je **autentizační** kód - prokazuje, že zpráva skutečně pochází od odesílatele (díky tomu, že se při hashování použil ten klíč) 
<!--ID: 1716376588299-->
END

---
