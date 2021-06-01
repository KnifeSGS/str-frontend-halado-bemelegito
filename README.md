# str-frontend-halado-bemelegito
"Bemelegítő" feladat

## Első lépések
- Forkolja le magának ezt a repository-t.
- A saját neve alatt létrejött azonos nevű repository-t klónozza le a gépére és abban dolgozzon.
- A repository-n belül hozza létre az új Angular alkalmazást.
- A munkához a Visual Studio Code, NodeJS és Git-scm programokra lesz szüksége.
- Ha végzett a munkával, akkor push-olja fel a repository tartalmát.

## Szükséges programok
- [Visual Studio Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/)
- [Git-scm](https://git-scm.com/)

## Fő Feladat
Készítsünk egy egyszerű alkalmazást (Angular), amely az Angular GitHub tárolójának közreműködőit hívja le egy
lapozható listában.

## Működése
1. Felhasználóként szeretném látni a közreműködőket egy rácsos kártya elrendezésben, a commitok száma szerint rendezve.
2. Szeretném látni a közreműködők következő oldalát egyszerű lefelé görgetéssel, a további közreműködők akkor jelenjenek meg, 
ha görgetés közben az oldal aljára érek és még vannak továbbiak.
3. Minden egyes kártyán szeretném látni az profilképet, a felhasználónevet, a commitok számát, egy térkép ikont és 
egy gombot "VIEW REPOSITORIES" felirattal.
5. A kártyán a "VIEW REPOSITORIES" gombra kattintva szeretném egy görgethető listában látni a kiválasztott közreműködő tárolóit a frissítés dátuma szerint rendezve (a legfrissebb van felül).
Minden egyes sorban szeretném látni a repo nevét, azt, hogy forkolt-e vagy sem, és azt, hogy 
hány csillaggal rendelkezik, illetve az utolsó frissítés időpontját.

## Előnézeti kép
![előnézet](str-kep.JPG)

## Minőség
1. Az alkalmazás jól skálázható, moduláris és karbantartható legyen az architekturális tervezés segítségével.
2. Használja a model -> service -> component felépítést.
2. Gondoljon a hibakezelésre a http kérések esetén: hiba esetén jelenjen meg felugró üzenet. Ezt az alábbi kiegészítők egyikével oldja meg:
 - [Ng Toaster](https://www.npmjs.com/package/ngx-toaster)
 - [Ng Toastr](https://www.npmjs.com/package/ngx-toastr)
4. Ellenőrizze a mobil megjelenést is, az alkalmazás reszponzív legyen.
5. A felületnek pontosan követnie kell az előnézetben látható mintát.

## API-hivatkozások
A következő linkekre küldött kérésekkel tudja lekérni a közreműködők adatait.
- [Közreműködők listája](https://developer.github.com/v3/repos/#list-contributors)
    (példa: https://api.github.com/repos/angular/angular/contributors?per_page=100)
- [Az Angular GitHub adattár 25 legjelentősebb közreműködőjének lekérdezése](https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25)
- [Felhasználói tárolók listája](https://developer.github.com/v3/repos/#list-user-repositories)
- [Példa egy felhasználó tárolóinak a lekérésére](https://api.github.com/users/cherryApp/repos)

