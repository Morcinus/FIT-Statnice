---
created: 2024-03-03T16:29:24
parent: "[[DBS]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-4 BI-WI-7 DBS

> BI-WSI-SI-4 / BI-WSI-WI-7 (DBS)
> Pokročilé principy dotazování v SQL: agregace, vnější spojení, vnořené dotazy, všeobecná kvantifikace.

### TODO: přidat příklady z prezentací
- Zatím tu jsou jen definice těch příkazů, ale tahle otázka bude zákeřná hlavně v těch složitějších příkladech..

### Základy SQL (optional)
START
BI-SZZ

Co dělá a jaká je syntax příkazu `SELECT`?

Back:

Vybere sloupce z tabulky z DB.

```sql
SELECT column1, column2 
FROM table_name;
```

Tags: optional
<!--ID: 1709482501788-->
END

---


START
BI-SZZ

Co dělá a jaká je syntax příkazu `WHERE`?

Back:

Filtruje výsledky příkazu `SELECT` - umožňuje vybrat žádky co splňují danou podmínku.

```sql
SELECT column1, column2
FROM table_name 
WHERE condition;
```

Tags: optional
<!--ID: 1709482501797-->
END

---


START
BI-SZZ

Co dělá a jaká je syntax příkazu `ORDER BY`?

Back:

Seřadí výsledky podle daného sloupce.

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC | DESC], column2 [ASC | DESC];
```

Tags: optional
<!--ID: 1709482501800-->
END

---

### Agregace

START
BI-SZZ

Co je **agregace** v SQL dotazování?

Back:

Výpočet jedné hodnoty z tabulky (tzn. z vícero řádků)
<!--ID: 1709482501802-->
END

---


START
BI-SZZ

Jaké jsou základní **agregační funkce** v SQL? (5)

Back:

- `COUNT` - spočte kolik je řádků
- `SUM` - sečte hodnoty
- `MAX` - maximum
- `MIN` - minimum
- `AVG` - průměr

Jsou pak i další...
<!--ID: 1709482501806-->
END

---

START
BI-SZZ

Jaký je syntax pro agregační funkce? (např. pro `COUNT`)

Back:

`AGREGACNI_FUNKCE([ALL|DISTINCT] [sloupec|vyraz])`

`ALL` je defaultní chování - nemusím ho psát

_Např._
```sql
SELECT COUNT(DISTINCT jméno_f)
FROM Rezervace;
```
<!--ID: 1709482501808-->
END

---

START
BI-SZZ

Co v SQL znamená `*`?

Back:

Výběr všech řádků (nebo sloupců).

_Např._
```sql
SELECT COUNT(*)
FROM Filmy;
```
<!--ID: 1709482501811-->
END

---


START
BI-SZZ

Co je `DISTINCT` v SQL?

Back:

`DISTINCT` je pro ignorování opakujících se hodnot

(opakem je implicitní `ALL`)
<!--ID: 1709482501814-->
END

---

START
BI-SZZ

K čemu slouží příkaz `COALESCE`?

Back:

`COALESCE` je pro nahrazení `NULL` hodnot jinými hodnotami

Např.
```sql
SELECT employee_id, name, COALESCE(department, 'Unassigned') AS department
FROM employees;
```
<!--ID: 1709482501820-->
END

---


START
BI-SZZ

K čemu slouží `GROUP BY` v SQL?

Back:

Seskupí řádky podle daného sloupečku

```sql
SELECT film, COUNT(herec) AS pocet_hercu
FROM tabulka GROUP BY film
```

_Příklad od pana ChatGPT:_
![](../Assets/Pasted%20image%2020240509125824.png)
<!--ID: 1709482501825-->
END

---


START
BI-SZZ

K čemu slouží `HAVING` v SQL?

Back:

Je to filtrace nad agregacemi.

(Je to jako `WHERE`, ale nad agregacemi)

```sql
SELECT film, COUNT(herec) AS pocet_hercu
FROM tabulka GROUP BY film HAVING COUNT(herec) > 1
```
<!--ID: 1709482501830-->
END

---


START
BI-SZZ

Jaké je pořadí vyhodnocování u:

- `HAVING`
- `GROUP BY`
- `ORDER BY`
- `FROM`
- agregační funkce v `SELECT`
- `WHERE`

Back:

Pořadí vyhodnocování:
1. `FROM`
2. `WHERE`
3. `GROUP BY`
4. Agregační funkce v `SELECT`
5. `HAVING`
6. `ORDER BY`
<!--ID: 1709482501833-->
END

---

### Vnější spojení


START
BI-SZZ

Co je **vnější spojení** (`OUTER JOIN`)?

Back:

Normální spojení, ale jedna strana (`LEFT OUTER JOIN` nebo `RIGHT OUTER JOIN`) nebo obě strany (`FULL OUTER JOIN`) doplní i prvky, které nelze s ničím spojit 

Chybějící hodnoty na druhé straně se doplní hodnotami `NULL`
<!--ID: 1709482501837-->
END

---


START
BI-SZZ

Čemu množinově odpovídá **vnější spojení** (`OUTER JOIN`)?

Back:

Odpovídá množinovému sjednocení $\cup$.
<!--ID: 1709482501840-->
END

---


START
BI-SZZ

Čemu množinově odpovídá **normální spojení** (`INNER JOIN` neboli `JOIN`)?

Back:

Odpovídá množinovému průniku $\cap$.
<!--ID: 1709482501843-->
END

---
### Vnořené dotazy

START
BI-SZZ

Co je **vnořený dotaz** v SQL?

Back:

Nový dotaz použitý uvnitř WHERE, SELECT nebo FROM
<!--ID: 1709482501846-->
END

---


START
BI-SZZ

Co je **vztažený dotaz** v SQL?

Back:

Odkazuje na nadřazený dotaz, je časově náročnější

_Např._
```SQL
SELECT nazev FROM kina k
WHERE 3 < (SELECT COUNT(id) FROM predstaveni p WHERE p.id_kina = k.id)
```
<!--ID: 1709482501849-->
END

---


START
BI-SZZ

Co je **nevztažený dotaz** v SQL?

Back:

Neodkazuje na nadřazený dotaz

_Např._
```sql
SELECT jmeno FROM zamestnanci WHERE plat = (SELECT MAX(plat) FROM zamestnanci)
```
<!--ID: 1709482501852-->
END

---

### Kvantifikace


START
BI-SZZ

Co jsou **existenční kvantifikátory** v SQL?

Back:

Kvantifikátory `EXISTS` a `NOT EXISTS`, pomocí kterých pak můžem filtrovat.

(Je jedno, jaké hodnoty mu předáváme, testuje jen (ne)prázdnost vstupní množiny)

_Např:_
![](../Assets/Pasted%20image%2020240303170821.png)
<!--ID: 1709482501855-->
END

---


START
BI-SZZ

Jak funguje **všeobecný kvantifikátor** v SQL?

Back:

Není v SQL implementován, lze použít $(\forall x)(P(x)) \equiv \neg (\exists x)(\neg P(x))​$

Takto:
```sql
SELECT nazev FROM kina k WHERE NOT EXISTS (SELECT 1 FROM predstaveni p WHERE k.id <> p.id_kina)
```
<!--ID: 1709482501861-->
END

---
