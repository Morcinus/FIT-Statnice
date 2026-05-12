V tomto souboru jsou veškeré informace k tomu, jak vytvářet a upravovat kartičky v tomto repozitáři.

## 🎴 Tvorba a správa kartiček

### Jak dělat nové kartičky

1. V Obsidianu si otevřít tento repozitář a nějakou poznámku.
2. V dané poznámce zmáčknout `Ctrl+Shift+S` a vložit `🎴 Flashcard` template. V něm vyplnit otázku a odpověď. Nic víc není potřeba.

Optionally lze do otázek vkládat obrázky (jednoduše vložit pomocí `Ctrl+V`) nebo vkládat rozbalovací sekce (viz níže).

### Jak vkládat do kartiček rozbalovací sekce

> ❗Pozor, v každé kartičce může být od každého typu pouze jedna sekce. Tzn. kartička může mít např. `Detail`, `Explanation` a `Example`, ale nemůže mít 2x sekci `Detail`.

1. V Obsidianu si otevřít tento repozitář a nějakou poznámku.
2. V dané poznámce zmáčknout `Ctrl+Shift+S` a vložit některý z dostupných templatů pro rozbalovací sekci (označené 📝). Dovnitř komentářů vyplnit obsah, který se má zobrazovat v dané sekci.

#### Dostupné sekce
- `📝 Detail` - pro detailnější informace o daném tématu (sem by typicky člověk vložil např. screenshot slidu)
- `📝 Explanation` - podrobnější vysvětlení dané odpovědi (např. u matematických vět lze podrobněji vlastními slovy vysvětlit co ta věta říká)
- `📝 Example` - uvedení nějakého příkladu (ve smyslu example - třeba když máme design pattern a chceme dát příklad jak by se použil v praxi)
- `📝 Exercise` - když chceme ukázat nějaký příklad (ve smyslu exercise - třeba když máme matematický postup a chceme uvést početní příklad, kde je ukázáno, jak to funguje)
- `📝 Image` - když chcem doplnit o nějaký diagram nebo doplňující obrázek, který není klíčový pro pochopení látky (často u kartiček je dobrý diagram mít rovnou mimo rozbalovací sekci, protože to je prostě důležitý pro pochopení)
- `📝 Other` - cokoliv dalšího, co chceme mít v rozbalovací sekci (meme, random hlášku)

### Jak reportovat a opravovat chyby

> ❗Pozor, pokud chceme **odstranit** kartičku, je potřeba to udělat speciálním postupem, takže pro odstranění kartičky (třeba z důvodu duplicity) mi to prosím házejte do Notionu.

**Pokud chceme pouze reportnout chybu (např. při učení):**
- Do Notionu do příslušné otázky hodit todo s popisem chyby `- [ ] Popis`
- Popis by měl obsahovat název otázky a jasný popis chyby nebo věci pro zlepšení
- Notion stránky bez chyb by bylo fajn udržet _prázdné_, aby bylo v seznamu stránek na první pohled vidět, že neobsahují žádné chyby

**Pokud chceme rovnou opravit chybu:**
- Udělat Pull request v tomto repozitáři s upravenou kartičkou a ideálně komentářem, proč je tato úprava nutná (např. že tam je chyba, nebo že zlepšujeme formátování atd.)

### Flagování kartiček

Aby člověk nebyl vyrušovaný reportováním chyb při učení, lze kartičky jednoduše při učení označovat (flagovat) přímo v Anki a později se k nim vrátit a udělat reporting/opravy třeba na konci dne. Jediná nevýhoda je, že ke kartičkám nejde moc přidávat poznámky, takže pak občas člověk zapomene, co přesně tou vlajkou myslel. Ale i tak to je super způsob, jak rychle označovat kartičky k refaktoringu.

**Významy flags v tomto projektu:**
- `Red` - je tam důležitá chyba nebo něco jiného co zamezuje učení
- `Orange` - je tam středně důležitá chyba
- `Green` - chtělo by to přeformulovat
- `Turquoise` - chce to kartičku smazat, protože není důlěžitá
- `Blue` - kartičku tam můžem nechat, ale je není tak podstatná
- `Pink` - duplicitní kartička

> ℹ️ Pozn. vlajky má každý Anki uživatel svoje, takže se to nijak nepromítá do balíčků ostatních lidí. Pro opravu kartičky je potřeba ji reportnout v Notionu nebo udělat pull request.

## 💻 Deployment
### Jak udělat Anki Release
1. Exportnout z Obsidianu do Anki
2. V Anki zvolit u decku `Export`
	- Export format: Anki Deck Package (.apkg)
		- ✔️Include media
		- ✔️Support older Anki versions
2. Na GitHubu kliknout na `Releases > Draft a new release`
	- Připojit exportnutý anki deck

Pozn. Ano, je to retardovaný, ale než bych to zautomatizoval, tak už by bylo po státnicích 🙃
