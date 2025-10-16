---
created: 2024-03-24T14:30:26
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SI-29 BI-WI-19 TJV

> BI-WSI-SI-29 / BI-WSI-WI-19 (TJV)
> Objektově relační mapování: koncept, výhody i nevýhody. Rozdíly mezi objektovým a relačním modelem dat. Rozdíl v realizaci vazeb (1:1, 1:N, M:N) v objektovém a relačním modelu


### TODO
- Tady by to chtělo dát víc kartiček na konkrétní syntax/implementaci v javě.. Prý to na fitwiki někdo měl u otázek

### objektově relační mapování (ORM)

START
BI-SZZ

Co je **objektově relační mapování (ORM)**?

Back:

převádění dat mezi relační databází (tj. strukturovanými tabulkami) a haldou v OOP jazyce (tj. poměrně složitými objekty např. v Javě)

je potřeba řešit dekompoziční tabulky, různé zápisy datumů, cizí klíče atd.
<!--ID: 1711288875394-->
END

---


START
BI-SZZ

Jak se prakticky dělá **objektově relační mapování**?

Back:

můžeme ho sami naprogramovat nebo využít knihovny, které tyto převody automatizují

dobře jdou automatizovat převody běžných datových typů a vztahy vč. M:N vztah

lze automatizovat i generování DB schémat podle definic objektů
<!--ID: 1711288875400-->
END

---


START
BI-SZZ

Jaké jsou výhody **objektově relačního mapování**?

Back:

šetří čas a opakující se kód, přenositelnost, přesun práce z DB do OOP světa
<!--ID: 1711288875403-->
END

---


START
BI-SZZ

Jaké jsou nevýhody **objektově relačního mapování**?

Back:

overhead navíc, svázání s konkrétním nástrojem, neumožňuje úplně všechny funkce DB, nemusí vždy vytvářet optimální SQL dotazy, pro malé projekty může být příliš komplexní
<!--ID: 1711288875406-->
END

---

### JPA (Java Persistence API, Jakarta Persistence)


START
BI-SZZ

Co je JPA?

Back:

**Java Persistence API** - standard, kterým se řídí ORM v Java světě
<!--ID: 1711288875408-->
END

---


START
BI-SZZ

Jaká knihovna se používá jako JPA?

Back:

Např. **Hibernate** (pro Spring)

Pak jsou třeba TopLink (Oracle), EclipseLink, OpenJPA aj.
<!--ID: 1711288875411-->
END

---


START
BI-SZZ

Přes co komunikují JPA knihovny s databázovými stroji?

Back:

- **JDBC**
- **JDBC drivery**
<!--ID: 1711288875414-->
END

---


START
BI-SZZ

Co je **JDBC**?

Back:

**JDBC** (Java DataBase Connectivity) = javovské API pro přístup k relačním databáziím
<!--ID: 1711288875417-->
END

---


START
BI-SZZ

Co je **JDBC driver**?

Back:

**JDBC Driver** = software poskytovaný výrobcem konkrétní databáze (např. Oracle JDBC Driver)
<!--ID: 1711288875420-->
END

---


START
BI-SZZ

Co je **entita** (`@Entity`) v JPA?

Back:

Třída odpovídající databázové tabulce.

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875423-->
END

---


START
BI-SZZ

Co je `@Table` v JPA?
 
Back:

`@Table` - název tabulky odpovídající této třídě

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875427-->
END

---


START
BI-SZZ

Co je `@Id` v JPA?

Back:

atribut odpovídající sloupci, který je primárním klíčem (příp. ještě `@GeneratedValue` a `@SequenceGenerator`)

Např. `@GeneratedValue(strategy = GenerationType.IDENTITY)` znamená, že primární klíč má být vygenerovaný automaticky

Dále se používá:
- `@MapsId` - pokud je primárním klíčem cizí klíč
- `@Embeddable` a `@EmbeddedId` - složené klíče

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875430-->
END

---


START
BI-SZZ

Co je `@Column` v JPA?

Back:

nastavení atributů odpovídajících sloupcům, které nejsou cizími klíči

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875433-->
END

---


START
BI-SZZ

Co je `@ManyToOne` a `@OneToOne` v JPA?

Back:

atributy odpovídající cizím klíčům (tj. pokud je v Javě datovým typem jiný objekt, příp detaily v mappedBy, `@JoinColumn` atd.)

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875436-->
END

---


START
BI-SZZ

Co je `@JoinTable` a `@ManyToMany` v JPA?

Back:

nastavení M:N vztahu

_Example code:_
```java
import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId;

    @Column(name = "student_name")
    private String studentName;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    // Constructors
    public Student() {}

	/* ... další konstruktory ... */

	// Gettery a settery
	/* ... */
}
```

- `@Entity`: Označuje, že tato třída je entita.
- `@Table(name = "student")`: Určuje název tabulky pro tuto entitu.
- `@Id`: Specifikuje primární klíč entity.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`: Určuje, že primární klíč by měl být generován automaticky.
- `@Column(name = "student_id")`: Určuje název sloupce v databázi.
- `@ManyToOne`: Označuje vztah mnoho k jednomu s jinou entitou.
- `@JoinColumn(name = "course_id")`: Určuje sloupec cizího klíče pro vztah mnoho k jednomu.
<!--ID: 1711288875439-->
END

---


START
BI-SZZ

Co je **JPQL**?

Back:

**JPQL** (Java Persistence Query Language) = syntaxe kombinující SQL dotazy s názvy proměnných z Java kódu

Např.
```sql
SELECT p FROM Post p JOIN p.author u WHERE u.username = "user123" ORDER BY p.created
```
<!--ID: 1711288875442-->
END

---


START
BI-SZZ

Co je **Spring Data JPA**?

Back:

zjednodušuje použití JPA pomocí `Repository` tříd s předpřipravenými metodami (`findAll()`, `deleteById()`) a generováním dotazů podle názvů metod
<!--ID: 1711288875445-->
END

---

### rozdíly mezi objektovým a relačním modelem dat


START
BI-SZZ

Jaké jsou dva typy modelů dat?

Back:

- **objektový model dat**
- **relační model dat**
<!--ID: 1711288875448-->
END

---


#### objektový model

START
BI-SZZ

Co je **objektový model dat**?

Back:

soustředí se na **zapouzdření souvisejících dat** a chování v jednom **objektu**
<!--ID: 1711288875451-->
END

---


START
BI-SZZ

Snaží se objektový model odstraňovat redundanci v datech?

Back:

Moc ne (v porovnání s relačním modelem dat).
<!--ID: 1711288875454-->
END

---


START
BI-SZZ

Čím je v objektovém modelu dat dána struktura modelu?

Back:

struktura objektu je dána **entitní třídou**, objekt je pak její instancí

atribut třídy může být libovolně složitě strukturovaný
<!--ID: 1711288875457-->
END

---


START
BI-SZZ

Jak jsou v objektovém modelu dat reprezentovány vazby?

Back:

Pomocí **odkazů** (referencí) na jiné objekty:
- `1:1 vazba` - atribut, jehož datovým typem je jiný objekt
- `1:N vazba` - objekt na “straně 1” si drží **kolekci** (např. array) odkazů na jiné objekty
- `M:N vazba` - opět pomocí kolekcí, neexistuje nic jako dekompoziční tabulka
<!--ID: 1711288875460-->
END

---

#### relační model

START
BI-SZZ

Co je **relační model dat**?

Back:

organizuje související data do **záznamů**, tj. **řádků** v “relaci” neboli **tabulce**
<!--ID: 1711288875463-->
END

---


START
BI-SZZ

Čím je dána struktura dat v **relačním modelu dat**?

Back:

struktura je dána **tabulkou**, jejími sloupci a integritními omezeními

sloupec odpovídá atributu entity, ale narozdíl od objektového modelu by měl být atomický
<!--ID: 1711288875466-->
END

---

START
BI-SZZ

O co se snaží **relační model dat**?

Back:

typicky se snaží o **normalizaci** pro **snížení redundance** a zajištění **integrity**
<!--ID: 1711288875469-->
END

---

START
BI-SZZ

Jak je reprezentována vazba v **relačním modelu dat**?

Back:

vazby reprezentuje **cizími klíči** odkazujícími na řádky jiných tabulek:
- `1:1 vazba` - cizí klíč odkazující na primární klíč druhé strany
- `1:N vazba` - primární klíč “strany 1” se objevuje jako cizí klíč v tabulce “strany N”
- `M:N vazba` - je potřeba třetí **“dekompoziční” tabulka**, každý její záznam reprezentuje jeden vztah mezi původními tabulkami a je složen z jejich primárních klíčů
<!--ID: 1711288875472-->
END

---
