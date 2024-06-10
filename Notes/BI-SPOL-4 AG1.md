---
created: 2024-06-03T18:57:44
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-4 AG1

> BI-SPOL-4 (AG1)
> Základní pojmy teorie grafů. Grafové algoritmy: procházení grafu do šířky a do hloubky, určení souvislých komponent, topologické uspořádání, vzdálenosti v grafech, konstrukce minimální kostry a nejkratších cest v ohodnoceném grafu.

### Základní pojmy

START
BI-SZZ

Definice: **neorientovaný graf**

Back:

**(neorientovaný) graf** $G = (V, E)$, kde:
- $V = V(G)$ = neprázdná konečná množina **vrcholů**
- $E = E(G)$ = množina **hran** (= neuspořádaných dvojic vrcholů $e = \{u, v\}$)
- množina všech možných hran se značí $\binom V 2$
<!--ID: 1717437781625-->
END

---


START
BI-SZZ

Definice: **orientovaný graf**

Back:

**orientovaný graf** $G = (V, E)$, kde:
- $E$ = množina **orientovaných hran** (= uspořádaných dvojic vrcholů $e = (u, v)$)
- orientované hrany zobrazujeme jako šipky z **předchůdce** $u$ do **následníka** $v$
<!--ID: 1717437781632-->
END

---


START
BI-SZZ

Co je v orientovaném grafu **zdroj**?

Back:

vrchol orientovaného grafu, do kterého nevede žádná hrana
<!--ID: 1717506098653-->
END

---


START
BI-SZZ

Co je v orientovaném grafu **stok**?

Back:

vrchol orientovaného grafu, ze kterého nevede žádná hrana
<!--ID: 1717506098656-->
END

---


START
BI-SZZ

Co je v orientovaném grafu **smyčka**?

Back:

orientovaná hrana $(u, u)$
<!--ID: 1717506098659-->
END

---


START
BI-SZZ

Definice: **sled** v grafu

Back:

**sled** v grafu = sekvence střídavě vrcholů a k nim přiléhajících hran
- $v_0, e_1, v_1, e_2, \dots, e_k, v_k$, kde $e_i = \{v_{i-1}, v_i\}, (\forall i =1,\dots,k) : e_i \in E(G)$
<!--ID: 1717437781635-->
END

---


START
BI-SZZ

Definice: **cesta** v grafu

Back:

**cesta** v grafu = sled, ve kterém se neopakují vrcholy
- délka cesty = počet hran v cestě
<!--ID: 1717437781638-->
END

---


START
BI-SZZ

Definice: **stupeň vrcholu** + jak se značí

Back:

**stupeň vrcholu** $\deg_G(v)$ = počet hran v $G$ obsahujících $v$
- princip sudosti: $\sum_{v \in V} \deg_G(v) = 2 |E|$
<!--ID: 1717437781641-->
END

---


START
BI-SZZ

Definice: **otevřené a uzavřené okolí vrcholu**

Back:

- **(otevřené) okolí vrcholu** $N_G(v)$ = množina všech sousedů $v$ v $G$
- **uzavřené okolí vrcholu** $N_G[v] = N_G(v) \cup \{ v \}$
<!--ID: 1717437781644-->
END

---

#### typy grafů

START
BI-SZZ

Definice: **úplný graf**

Back:

**úplný graf** $K_n$ = graf s $n$ vrcholy, ve kterém jsou všechny možné hrany
- $K_n = (V, \binom V 2)$
<!--ID: 1717437781647-->
END

---


START
BI-SZZ

Definice: **úplný biparitní graf**

Back:

**úplný bipartitní graf** $K_{n_1,n_2}$ = graf s vrcholy rozdělenými do dvou **partit**, mezi nimiž jsou všechny možné hrany, ale uvnitř partity nejsou hrany žádné
- $K_{n_1,n_2} = (A \cup B, \{ \{a,b\} | a \in A, b \in B \})$, kde $A \cap B = \emptyset, |A| = n_1, |B| = n_2$
- lze zobecnit na úplný $k$-partitní graf
<!--ID: 1717437781650-->
END

---


START
BI-SZZ

Definice: graf **cesta**

Back:

**cesta** $P_m = (\{0,\dots,m\}, \{\{i,i+1\} | i \in \{ 0,\dots,m-1 \} \})$
<!--ID: 1717437781652-->
END

---


START
BI-SZZ

Definice: **kružnice**

Back:

**kružnice $C_n = (\{1,\dots,n\}, \{\{i,i+1\} | i \in \{1,\dots,n-1\} \} \cup \{\{1,n\}\})$**
<!--ID: 1717437781655-->
END

---


START
BI-SZZ

Definice: **doplněk grafu** 

Back:

**doplněk** $\overline G = (V, \binom V 2 \setminus E)$ grafu $G = (V, E)$
<!--ID: 1717437781658-->
END

---


START
BI-SZZ

Definice: **$r$-regulární graf**

Back:

**$r$-regulární** graf = stupeň každého vrcholu je $r$
<!--ID: 1717437781661-->
END

---

#### podgraf

START
BI-SZZ

Definice: **podgraf**

Back:

graf $H$ je **podgraf $G$ $\iff V(H) \subseteq V(G) \land E(H) \subseteq E(G)$**
<!--ID: 1717437781663-->
END

---


START
BI-SZZ

Definice: **indukovaný podgraf**

Back:

graf $H$ je **indukovaný podgraf $G$** (značí se $H \le G)$**$\iff V(H) \subseteq V(G) \land E(H) = E(G) \cap \binom{V(H)}{2}$**

Tzn. podgraf, kde jsou všechny hrany původního grafu
<!--ID: 1717437781666-->
END

---

#### souvislost

START
BI-SZZ

Co je **souvislý neorientovaný graf**

Back:

 **souvislý** neorientovaný graf = mezi každou dvojicí vrcholů existuje cesta ($\times$ nesouvislý)
<!--ID: 1717437781669-->
END

---


START
BI-SZZ

Co je **slabě souvislý** orientovaný graf

Back:

**slabě souvislý** orientovaný graf = jeho symetrizace (= odstranění orientace) je souvislá
<!--ID: 1717437781671-->
END

---


START
BI-SZZ

Co je **silně souvislý** orientovaný graf

Back:

**silně souvislý** orientovaný graf = mezi každou dvojicí vrcholů existují cesty v obou směrech
<!--ID: 1717437781674-->
END

---


START
BI-SZZ

Co je **souvislá komponenta**

Back:

**souvislá komponenta** = v inkluzi maximální souvislý podgraf
- graf je souvislý $\iff$ obsahuje jedinou souvislou komponentu
<!--ID: 1717437781677-->
END

---

#### stromy a kostry


START
BI-SZZ

Definice: **strom**

Back:

**strom** = souvislý graf bez kružnic (= acyklický)
- $\iff$mezi každou dvojicí vrcholů existuje právě jedna cesta
- $\iff$ je souvislý a vynecháním libovolné hrany přestane být souvislý
- $\iff$ je souvislý a $|E| = |V| -1$
<!--ID: 1717437781680-->
END

---


START
BI-SZZ

Definice: **les**

Back:

graf bez kružnic
<!--ID: 1717437781682-->
END

---


START
BI-SZZ

Definice: **list**

Back:

vrchol stupně $1$
<!--ID: 1717437781685-->
END

---


START
BI-SZZ

Věta: o trhání listů

Back:

strom zůstane stromem, když z něj odeberu nebo do něj přidám list
<!--ID: 1717437781688-->
END

---


START
BI-SZZ

Definice: **kostra** souvislého grafu

Back:

**kostra** souvislého grafu $G$ = podgraf $G$, který obsahuje všechny vrcholy a je stromem
<!--ID: 1717437781690-->
END

---


START
BI-SZZ

Definice: **topologické uspořádání**

Back:

**topologické uspořádání** orientovaného grafu = seřazení vrcholů do řady, aby všechny hrany vedly doprava
- takové seřazení vrcholů $V = \{ v_1, \dots, v_n \}$, že pro každou orientovanou hranu $(v_i, v_j) \in E$ platí $i < j$
<!--ID: 1717437781693-->
END

---


START
BI-SZZ

Kdy neexistuje topologické uspořádání grafu?

Back:

Pokud graf obsahuje kružnici
<!--ID: 1717437781696-->
END

---


START
BI-SZZ

Co je orientovaný acyklický graf (DAG)

Back:

orientovaný **acyklický** graf _(directed acyclic graph, DAG)_ = neobsahuje orientovanou kružnici jako podgraf
- nutně obsahuje aspoň jeden zdroj a jeden stok
<!--ID: 1717437781698-->
END

---


START
BI-SZZ

Co je algoritmus TopSort?

Back:

algoritmus TopSort pro nalezení topologického uspořádání
<!--ID: 1717437781701-->
END

---


START
BI-SZZ

Co je **hranově ohodnocený graf**?

Back:

každé hraně je přiřazena číselná **váha** $w(e) (w: E \to \Bbb{R})$
<!--ID: 1717437781703-->
END

---


START
BI-SZZ

Co je **váha podgrafu**?

Back:

Součet vah jeho hran
<!--ID: 1717437781706-->
END

---


START
BI-SZZ

Co je **minimální kostra**?

Back:

ze všech koster má nejmenší váhu
<!--ID: 1717437781709-->
END

---

### reprezentace grafu v paměti


START
BI-SZZ

Jakými způsoby lze reprezentovat graf v paměti? (2)

Back:

- maticí sousedů
- seznam sousedů/následníků
<!--ID: 1717437781711-->
END

---

### grafové algoritmy
#### BFS

START
BI-SZZ

Co je **BFS** - procházení grafu do šířky? (obecně)

Co je **vstupem**, co je **výstupem**?

Back:

- vstupem je graf $G$ a startovní vrchol $s \in V$
- výstupem je pole vzdáleností $D$ (= délek nejkratších cest od $s$ pro každý vrchol, příp. informace, že cesta neexistuje) a pole předchůdců $P$
<!--ID: 1717437781714-->
END

---


START
BI-SZZ

Popiš pseudokód **BFS**

Back:

![](../Assets/Pasted%20image%2020240603193202.png)
- výstupem je pole vzdáleností $D$ (= délek nejkratších cest od $s$ pro každý vrchol, příp. informace, že cesta neexistuje) a pole předchůdců $P$


algoritmus se vždy zastaví, po skončení jsou uzavřené právě vrcholy, kam vede cesta z s (ostatní jsou nenalezené)

Tags: algoritmus
<!--ID: 1717437781717-->
END

---


START
BI-SZZ

Jaká je časová složitost BFS?

Back:

při reprezentaci grafu seznamem sousedů je časová složitost $\mathcal O (|V| + |E|)$
<!--ID: 1717437781719-->
END

---

#### DFS


START
BI-SZZ

Co je **DFS** - procházení grafu do hloubky? (obecně)

Co je **vstupem**, co je **výstupem**?

Back:

- vstupem je graf $G$ a startovní vrchol $v \in V$
- výstupem je množina vrcholů dosažitelných z $v$
<!--ID: 1717437781722-->
END

---


START
BI-SZZ

Popiš pseudokód **DFS**

Back:

![](../Assets/Pasted%20image%2020240603193437.png)

- výstupem je množina vrcholů dosažitelných z $v$ (`stav`)

Tags: algoritmus
<!--ID: 1717437781724-->
END

---


START
BI-SZZ

Jaká je časová složitost **DFS**?

Back:

při reprezentaci grafu seznamem sousedů je časová složitost $\mathcal O (|V| + |E|)$
<!--ID: 1717437781727-->
END

---

#### určení souvislých komponent

START
BI-SZZ

Jak lze určit souvislé komponenty v grafu?

Back:

lze pomocí **BFS** i **DFS** spouštěných opakovaně z dosud nenavštívených vrcholů
<!--ID: 1717437781730-->
END

---

#### konstrukce nějaké kostry

START
BI-SZZ

Jak lze sestavit libovolnou kostru v grafu?

Back:

stejně efektivní pomocí **BFS** (stačí vzít hrany do předchůdců) i **DFS**
<!--ID: 1717437781732-->
END

---

#### konstrukce minimální kostry

START
BI-SZZ

Co je vstupem a výstupem algoritmů pro konstrukci minimální kostry?

Back:

- vstupem je **souvislý hranově ohodnocený graf**
- výstupem je jeho **minimální kostra**
<!--ID: 1717437781735-->
END

---

##### Jarníkův algoritmus

START
BI-SZZ

Popiš pseudokódem **Jarníkův algoritmus**

Back:

![](../Assets/Pasted%20image%2020240603193738.png)
- vstupem je **souvislý hranově ohodnocený graf**
- výstupem je jeho **minimální kostra**

začne s jedním vrcholem, opakovaně přidává nejlehčí hrany, které strom rozšíří

Tags: algoritmus core
<!--ID: 1717437781737-->
END

---


START
BI-SZZ

Je Jarníkův algoritmus **hladový**? Co to znamená?

Back:

jde o hladový algoritmus (= vždy vybírá lokální optimum), což zde kupodivu vede na globálně optimální řešení (na to většinou hladové algoritmy nebývají ideální)
<!--ID: 1717437781740-->
END

---


START
BI-SZZ

Jakou **časovou** a **paměťovou** složitost má **Jarníkův algoritmus** při reprezentaci grafu **seznamem sousedů**?

Back:

časová složitost $\mathcal O (|V| \cdot |E|)$ 
paměťová $\mathcal O (|V| + |E|)$
<!--ID: 1717437781743-->
END

---


START
BI-SZZ

Jakou **časovou** složitost má **Jarníkův algoritmus** při reprezentaci grafu **binární haldou**?

Back:

$\mathcal O (|E| \log |V|)$
<!--ID: 1717437781746-->
END

---

##### Kruskalův algoritmus

START
BI-SZZ

Popiš pseudokódem **Kruskalův algoritmus**

Back:

![](../Assets/Pasted%20image%2020240603194111.png)

začne se všemi vrcholy bez hran, přidává hrany od nejlehčích, pokud jsou potřeba

Tags: algoritmus
<!--ID: 1717437781748-->
END

---


START
BI-SZZ

Co je struktura **Union-Find**?

Back:

struktura **Union-Find** reprezentuje komponenty souvislosti a poskytuje operace:
- `Init(V)` = založí strukturu reprezentující počáteční les
- `Find(u)` = vrátí identifikátor komponenty souvislosti, v níž leží vrchol `u`
- `Union(u,v)` = spojí komponenty `u` a `v` do jedné
<!--ID: 1717437781751-->
END

---


START
BI-SZZ

Popiš pseudokódem **Kruskalův algoritmus** s využitím **Union-Find**

Back:

![](../Assets/Pasted%20image%2020240603194341.png)

Tags: algoritmus core
<!--ID: 1717437781754-->
END

---


START
BI-SZZ

Jaká je časová složitost **Kruskalova algoritmu** s využitím Union-Find pomocí **pole**?

Back:

$$\mathcal O (|E| \log |V| + |V|^2)$$

protože časová složitost:
- `Init` $\mathcal O (|V|)$ 
- `Union`  je $\mathcal O (|V|)$
- `Find` $\mathcal O (1)$
<!--ID: 1717437781757-->
END

---


START
BI-SZZ

Jaká je časová složitost **Kruskalova algoritmu** s využitím Union-Find pomocí **keříků**?

Back:

$$\mathcal O (|E| \log |V|)$$

protože časová složitost:
- `Init` $\mathcal O(|V|)$ 
- `Find` $\mathcal O(\log |V|)$
- `Union` $\mathcal O(\log |V|)$

Pomocí keříků = každá množina je reprezentována jako strom orientovaný do kořene a uložená jako pole rodičů)
<!--ID: 1717437781760-->
END

---

#### nalezení topologického uspořádání


START
BI-SZZ

Co je **topsort**?

Back:

algoritmus _TopSort_ najde pro orientovaný graf **topologické uspořádání**, pokud byl acyklický, jinak detekuje existenci orientovaného cyklu
<!--ID: 1717437781762-->
END

---


START
BI-SZZ

Napiš pseudokód algoritmu **TopSort**

Back:

![](../Assets/Pasted%20image%2020240603194801.png)

Tags: algoritmus core
<!--ID: 1717437781765-->
END

---


START
BI-SZZ

Jaká je složitost algoritmu **topsort**?

Back:

$$\mathcal O (|V| + |E|)$$
<!--ID: 1717437781768-->
END

---

#### konstrukce nejkratších cest v ohodnoceném grafu


START
BI-SZZ

Co je **délka hrany** a **délka cesty**?

Back:

váha hrany = délka hrany

délka cesty je pak součet délek jejích hran
<!--ID: 1717437781770-->
END

---


START
BI-SZZ

Definice: **vzdálenost** vrcholů

Back:

**vzdálenost** vrcholů $d(u,v)$ = minimum z délek všech cest z $u$ do $v$, příp. $+\infty$, pokud žádná cesta neexistuje
- pokud jsou délky hran kladné, pak platí pro vzdálenosti trojúhelníková nerovnost $d(u,v) \le d(u,w) + d(w,v)$ pro libovolné $u,v,w \in V$
<!--ID: 1717437781773-->
END

---


START
BI-SZZ

Definice: **nejkratší $uv$-cesta**

Back:

**nejkratší $uv$-cesta** = libovolná cesta z $u$ do $v$, jejíž délka se rovná vzdálenosti $d(u,v)$
<!--ID: 1717437781775-->
END

---

##### Dijkstrův algoritmus

START
BI-SZZ

Co je obecně vstupem a výstupem **Dijkstrova algoritmu**? Co **předpokládá** na vstupu?

Back:

- **vstupem** je orientovaný graf $G$ s kladnými délkami hran a počáteční vrchol $v_0$
- **výstupem** jsou vzdálenosti z $v_0$ do všech vrcholů $G$

předpokládá **jen kladné** (nebo nezáporné) délky
- na grafech se zápornými délkami bez záporných cyklů může otevírat vrcholy opakovaně a mít až exponenciální časovou složitost
<!--ID: 1717437781779-->
END

---


START
BI-SZZ

Napiš pseudokód **Dijkstrova algoritmu**

Back:

![](../Assets/Pasted%20image%2020240603195440.png)
- **vstupem** je orientovaný graf $G$ s kladnými délkami hran a počáteční vrchol $v_0$
- **výstupem** jsou vzdálenosti z $v_0$ do všech vrcholů $G$

Základní idea:
- Je to jako BFSko, jediný co, že u vrcholů držím čísla
- Nevybírám jen další vrchol, ale vrchol, co je nejblíž -> prioritní fronta

![](../Assets/Pasted%20image%2020240604125018.png)

Tags: algoritmus core
<!--ID: 1717437781782-->
END

---


START
BI-SZZ

Jaká je složitost Dijkstrova algoritmu při lineárním hledání minimálního $h(v)$?

Back:

$$\mathcal O (|V|^2)$$
<!--ID: 1717437781785-->
END

---


START
BI-SZZ

Napiš pseudokód **Dijkstrova algoritmu** s využítím **binární haldy**

Back:

![](../Assets/Pasted%20image%2020240603195630.png)

Tags: algoritmus core
<!--ID: 1717437781788-->
END

---


START
BI-SZZ

Jaká je složitost **Dijkstrova algoritmu** při využití binární haldy?

Back:

$$\mathcal O (|E| \log |V|)$$
<!--ID: 1717437781791-->
END

---

#### Bellman-Ford


START
BI-SZZ

Co je **Bellman-Fordův** algoritmus?

Back:

Algoritmus pro hledání nejkratší cesty, využívá neprioritní frontu, vrcholy mohou být otevírány opakovaně
<!--ID: 1717437781793-->
END

---


START
BI-SZZ

Povoluje Bellman-Ford záporné délky?

Back:

ano, ale ne záporné cykly
<!--ID: 1717437781796-->
END

---


START
BI-SZZ

Napiš pseudokód **Bellman-Fordova** algoritmu

Back:

Pozn. tím červeným se liší od Dijkstry
![](../Assets/Pasted%20image%2020240603200054.png)

Bellman Ford je jakoby taková hloupější verze Dijsktrova algoritmu.
- Nepoužíváme prioritní frontu, ale jen frontu
- Je sice "hloupější", ale je lepší v tom, že zvládá i záporné hrany!

Tags: algoritmus core
<!--ID: 1717437781799-->
END

---


START
BI-SZZ

Napiš pseudokód **Zjednodušeného Bellman-Fordova** algoritmu

Back:

![](../Assets/Pasted%20image%2020240603200122.png)

Rozdíl je v tom, že se prostě nepoužívá fronta, ale $n$-krát se udělá relaxace.

Tags: algoritmus core
<!--ID: 1717437781802-->
END

---


START
BI-SZZ

Jaká je časová složitost **Bellman-Fordova algoritmu**?

Back:

$$\mathcal O (|V| \cdot |E|)$$
<!--ID: 1717437781805-->
END

---


START
BI-SZZ

Jaká je výhoda **Bellman-Fordova algoritmu** oproti **Dijkstově algoritmu**?

Back:

Je sice "hloupější" v tom, že používá jednoduchou frontu, ale **umí pracovat i se zápornýma hranama**!
 
<!--ID: 1717506098662-->
END

---
