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

</br>
<h3>Level 0 → Level 1</h3>
Kolejne hasło jest przechowywane w pliku **readme** umieszczonym w katalogu domowym. Należy wyświetlić jego zawartość:

```
cat readme
```

Hasło: **boJ9jbbUNNfktd78OOpsqOltutMc3MY1**

_Część dalsza rozwiązania pojawi się wkrótce..._