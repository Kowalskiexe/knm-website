# Strona Koła Naukowego Matematyków UAM

Statyczne pliki strony KNM-u. Backend, odpowiedzialny np. za pobieranie postów z Facebook'a, znajduje się [tutaj](https://github.com/Kowalskiexe/knm-backend2).

## Pobieranie kodu źródłowego strony
Do pobrania kod źródłowego strony będą potrzebne zainstalowane:
* [git](https://git-scm.com/downloads)
* [node](https://nodejs.org/en/download/)

Po zainstalowaniu potrzebnych programów można pobrać kod źródłowy poprzesz wywołanie następujących komend w konsoli:
```console
git clone https://github.com/Kowalskiexe/knm-website.git
cd knm-website
npm install
```
Wszystkie potrzebne pliki powinny znaleźć się w folderze `knm-website`, główna część kodu źródłowego jest w folderze `knm-website/src`.

## Edytowanie
Aby maksymalnie uprościć edycję strony, projekt wykorzystuje program [Simple HTML Macros](https://github.com/Kowalskiexe/shtmlm). Jego działanie polega na zastępowaniu niestandardowych znaczników (np. `<myheader>`) zawartością pliku .html o tej samej nazwie (np. myheader.html). W ten sposób można uniknąć przeklejania tego samego kodu wiele razy (np. w podstronach).

Po dokonaniu zmian na plikach z folderu `src`, należy uruchomić komendę:
```console
npm run build
```
Ta komenda uruchomi sHTMLm i zastąpi niestandardowe znaczniki odpowiednią zawartością. Po pomyślnym wykonaniu pliki wynikowe będą znajdować się w folderze `public`.

## Publikowanie zmian
Aby wprowadzić zmiany na oficjalny serwer należy uruchomić komendę:
```console
npm run deploy
```
Albo własnoręcznie skopiować pliki z folder `public`  na serwer `knm@hosting-projects.wmi.amu.edu.pl` do folderu `public/static`przy pomocy programu jak [FileZilla](https://filezilla-project.org/).

`npm run deploy` wykorzystuje program `scp`, który może nie być dostępny na komputerach z systemem Windows, ale instnieją jego substytuty jak [putty scp](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

Maciej Kowalski (mackow7@st.amu.edu.pl)
