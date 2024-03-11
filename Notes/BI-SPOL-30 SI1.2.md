---
created: 2024-03-11T17:16:07
parent: "[[FIT]]"
---

TARGET DECK: BI-SZZ
FILE TAGS: BI-SPOL-30 SI1.2

> BI-SPOL-30 (SI1.2)
> Nástroje pro podporu tvorby softwarových produktů: Sledování chyb a správa úkolů (používané nástroje, typický životní cyklus úkolu/chyby), správa a sdílení zdrojových kódů (principy řešení spolupráce, hlavní přínosy, používané nástroje)


START
BI-SZZ

Jaké softwary se typicky používají pro trackování chyb a úkolů při vývoji softwaru? (7 - asi nemusíme umět všechny)

Back:

- Jira
- YouTrack
- GitLab Issue Management
- Trac Tickets
- Mantis
- Bugzilla
- Redmine
<!--ID: 1710176137485-->
END

---


START
BI-SZZ

Jakých je 5 fází životního cyklu chyb nebo úkolu? 

Back:

- **nový** (_new_)
- **přiřazený** (_assigned_)
- **vyřešený** (_resolved_) -> znovuotevřený nebo uzavřený
- **znovuotevřený** (_reopened_) - pokud reportér chyby nesouhlasí s řešením -> přiřazený nebo vyřešený
- **uzavřený** (_closed_)
<!--ID: 1710176137493-->
END

---


START
BI-SZZ

Jaké vlastnosti typicky mají úkoly?

Back:

- přiřazení k **milníku** (milestone)
- **priorita**
- **severita** = dopad na uživatele
- **způsob vyřešení**
- **typy** (defect, bug, enhancement, task, …)
<!--ID: 1710176137496-->
END

---


START
BI-SZZ

Co je **SCM**?

Back:

**Source control management** = proces řízení a verzování změn ve zdrojovém kódu
<!--ID: 1710176137499-->
END

---


START
BI-SZZ

Jaké jsou **2 hlavní přínosy** SCM?

Back:

- **verzování** - ukládání celé historie souborů
	- (verze = revize)
- **zálohování** - pojistka proti poškození nebo ztrátě souborů
<!--ID: 1710176137502-->
END

---


START
BI-SZZ

Jaké jsou 2 typy nástrojů pro verzování? Jak se od sebe liší?

Back:

- **centralizované nástroje** - jeden centrální repozitář + lokální kopie aktuální verze
	- SVN
	- CVS
- **distribuované nástroje** - všechny verze v lokálním repozitáři
	- Git
	- Mercurial
<!--ID: 1710176137505-->
END

---


START
BI-SZZ

Jaké jsou 2 principy řešení spolupráce v kódu?

Back:

- **zamknutí-úpravy-odemknutí**
- **kopie-úpravy-sloučení**
<!--ID: 1710176137508-->
END

---


START
BI-SZZ

Co je princip **zamknutí-úpravy-odemknutí**?

Back:

Člověk zamkne, upraví a pak odemkne soubor.

Je to vhodné pro špatně mergovatelné soubory (grafické, binární). 

Úpravy jsou nutně sériové, i když jsou nekonfliktní.
<!--ID: 1710176137512-->
END

---


START
BI-SZZ

U jakých systému se využívá princip **zamknutí-úpravy-odemknutí**?

Back:

Jen u **centralizovaných systémů**
<!--ID: 1710176137515-->
END

---


START
BI-SZZ

Jaký je problém s principem **zamknutí-úpravy-odemknutí**?

Back:

Je tam organizační problém, když někdo zamkne soubor a zapomene ho odemknout -> ostatní tam nemůžou přistupovat.
<!--ID: 1710176137518-->
END

---


START
BI-SZZ

Co je princip **kopie-úpravy-sloučení**?

Back:

Člověk si udělá vlastní kopii souboru, pak ji upraví a pak ji mergne do originálního dokumentu (a vyřeší případné problémy).

Toto je v praxi běžnější přístup.
<!--ID: 1710176137520-->
END

---


START
BI-SZZ

U jakých systému se využívá princip **kopie-úpravy-sloučení**?


Back:

U **centralizovaných** i **distribuovaných systémů**
<!--ID: 1710176137523-->
END

---


START
BI-SZZ

Jaká je nevýhoda principu **kopie-úpravy-sloučení**?

Back:

Člověk musí řešit manuálně konflikty.

(Ty u zamknutí-úpravy-odemknutí nenastávají, protože je vše sériově.)
<!--ID: 1710176137527-->
END

---
