---
title: OverTheWire - Bandit
published: true
author: Kinga Skrętkowicz
tag: OverTheWire
category: Solutions
---

Zadania dostępne na stronie <a href="https://overthewire.org">OverTheWire</a> pozwalają zdobyć i szlifować umiejętności przydatne w obszarze cyberbezpieczeństwa. Są one w formie wielopoziomowych gier: każdy poziom ukrywa hasło do kolejnego poziomu.

Poniżej opisaliśmy naszą ścieżkę przez grę <a href="https://overthewire.org/wargames/bandit/">Bandit</a> przeznaczonej dla początkujących entuzjastów cyberbezpieczeństwa. Dzięki niej można nauczyć się podstawowych komend i narzędzi wymaganych do rozwiązania bardziej wyszukanych wyzwań.

<h3>Level 0</h3>

Pierwszym i niezbędnym krokiem do rozpoczęcia rozwiązywania zadań było zalogowanie się do gry poprzez SSH. Można to osiągnąć za pomocą narzędzia `PuTTY`. Drugą opcją jest wykorzystanie komendy `ssh` dostępnej w terminalach Unix/Linux:

```
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

Po pomyślnym połączeniu się z grą zostaniemy poproszeni o podanie hasła: **bandit0**.

<h3>Level 0 → Level 1</h3>

Hasło do poziomu 1 jest przechowywane w pliku **readme** umieszczonym w katalogu domowym. Należy wyświetlić jego zawartość:

```
cat readme
```

Hasło: **boJ9jbbUNNfktd78OOpsqOltutMc3MY1**

<h3>Level 1 → Level 2</h3>

Kolejne hasło jest przechowywane w pliku o nazwie **-** umieszczonym w katalogu domowym. Tutaj także skorzystaliśmy z narzędzia `cat`, ale w nieco zmienionej formie:

```
cat ./-
```

Alternatywa:

```
cat < -
```

Hasło: **CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9**

<h3>Level 2 → Level 3</h3>

Tutaj ponownie musieliśmy się zmierzyć z wyświetleniem zawartości pliku o "nietypowej" nazwie - tym razem zawierającej spacje: **spaces in this filename**. Ponownie skorzystaliśmy z narzędzia `cat`:

```
cat "spaces in this filename" 
```

Alternatywa:

```
cat spaces\ in\ this\ filename
```

Hasło: **UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK**

<h3>Level 3 → Level 4</h3>

Hasło zostało umieszczone w ukrytym pliku w katalogu **inhere**. Najpierw przeszliśmy do podanego katalogu, a następnie wyświetliliśmy jego zawartość wraz z plikami ukrytymi. Znając nazwę ukrytego pliku (**.hidden**), mogliśmy wyświetlić jego zawartość.

```
cd inhere
ls -la
cat .hidden
```

Hasło: **pIwrPrtPN36QITSp3EQaw936yaFoFgAB**

<h3>Level 4 → Level 5</h3>

Tym razem hasło zostało ukryte w jedynym pliku czytelnym dla człowieka zlokalizowanym w katalogu **inhere**. Zamiast ręcznie sprawdzać zawartość każdego pliku, można skorzystać z polecenia **file**, by określić typ pliku. Można zauważyć, że plik **-file07** zawiera tekst ASCII.

```
cd inhere
file -- *
cat ./-file07
```

Hasło: **koReBOKuIDDepwhWk7jZC0RTdopnAYKh**

<h3>Level 5 → Level 6</h3>

Kolejne hasło jest przechowywane w pliku w katalogu **inhere** lub w którymś z jego podkatalogów. Ponadto spełnia poniższe kryteria:
* czytelny dla człowieka,
* rozmiar 1033B
* niewykonywalny.
Wykorzystaliśmy narzędzie **find** i podaliśmy odpowiednie argumenty. Jedynym plikiem spełniającym kryteria okazał się **.file2** z katalogu **maybehere07**.

```
cd inhere
find ./ -size 1033c -not -executable
./maybehere07/.file2
```

Hasło: **DXjZPULLxYr17uwoI01bNLQbtFemEgo7**

<h3>Level 6 → Level 7</h3>

Aby dostać się na kolejny poziom, należy odnaleźć plik ukryty gdziekolwiek na serwerze spełniający poniższe kryteria:
* posiadany przez użytkownika *bandit7*,
* posiadany przez grupę *bandit6*,
* rozmiar 33B.
Ponownie użyliśmy narzędzia **find**. W wyniku otrzymaliśmy długą listę plików, ale tylko do jednego mieliśmy przyznane uprawnienia. To w nim znaleźliśmy hasło.

```
find ./ -size 33c -group bandit6 -user bandit7
cat /var/lib/dpkg/info/bandit7.password
```

Hasło: **HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs**

_Część dalsza rozwiązania pojawi się wkrótce..._