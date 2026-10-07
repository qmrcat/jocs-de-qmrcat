# Jocs del Quim

Portal autònom en català, amb HTML, CSS i JavaScript modern (Vanilla), sense frameworks, llibreries, fonts remotes ni compilació. Les fitxes enllacen als jocs publicats a GitHub Pages; els jocs no es copien dins del portal.

## Obre la web

Obre `index.html` amb doble clic. També pots publicar **els fitxers del ZIP** a qualsevol allotjament estàtic o a l'arrel d'un repositori de GitHub Pages. Mantén els quatre fitxers al mateix nivell i conserva la carpeta `assets/` si hi afegeixes imatges. Els enllaços són relatius, de manera que el portal funciona dins d'una subcarpeta.

Per a una comprovació opcional amb servidor local, des de la carpeta on has descomprimit la web:

```bash
python -m http.server 8000
```

Obre `http://localhost:8000/`. No cal instal·lar cap paquet.

## Fitxers

| Fitxer | Funció |
| --- | --- |
| `index.html` | Estructura, metadades, logotip i alternativa sense JavaScript |
| `styles.css` | Tema fosc i disseny adaptable |
| `jocs.js` | Catàleg: noms, descripcions, enllaços i ordre |
| `app.js` | Generació automàtica de les fitxes |

## Afegir un joc

1. Obre `jocs.js`.
2. Copia un objecte del catàleg i afegeix-lo dins de la llista `window.CATALEG_JOCS`, separat de l'anterior per una coma.
3. Canvia les dades, desa el fitxer i recarrega la web. Si la tens publicada, puja el `jocs.js` actualitzat.

Exemple:

```js
{
  id: 'el-meu-joc',
  nom: 'El meu joc',
  categoria: 'Lògica',
  etiqueta: 'Trencaclosques · Nivells',
  descripcio: 'Una descripció breu del joc i del seu objectiu.',
  url: 'https://qmrcat.github.io/el-meu-joc/',
  repositori: 'https://github.com/qmrcat/el-meu-joc',
  icona: 'joc',
  color: 'menta',
  estat: 'disponible',
  // imatge: 'assets/el-meu-joc.webp', // Opcional: còpia local d'una captura.
  // destacat: 'si', // Opcional: joc destacat.
  // nou: 'si', // Opcional: cinta «Nou joc».
  // novaVersio: 'si', // Opcional: cinta «Nova versió».
  // novetats: 'Nous nivells i correccions.', // Opcional: text de novetats.
},
```

La fitxa, el número i el recompte s'actualitzen automàticament. Per canviar l'ordre, mou els objectes dins del catàleg. Per eliminar un joc, elimina el seu objecte. Per ocultar l'enllaç al codi, treu `repositori`.

- **Icones:** `vila`, `fletxes`, `numeros`, `embus`, `cartes`, `sudoku`, `blocs`, `castell`, `daus`, `trencaclosques`, `lletres`, `escacs`, `espasa`, `corona`, `bandera`, `mapa`, `coet`, `fantasma`, `pilota`, `diana`, `rellotge`, `bombeta`, `musica`, `arbre`, `estrella`, `cor`, `trofeu`, `joc`. Si la icona no existeix, es mostra `joc`.
- **Colors:** `menta`, `blau`, `lila`, `taronja`, `rosa`, `groc`, `vermell`, `verd`, `turquesa`, `indi`, `magenta`, `llima`, `plata`.
- **Joc destacat:** amb `destacat: 'si'`, la fitxa passa al davant del catàleg, ocupa tota l'amplada i mostra l'etiqueta «Joc destacat». Per treure'l, elimina el camp o posa-hi `'no'`.
- **Joc nou:** amb `nou: 'si'`, la fitxa mostra una cinta «Nou joc» a la cantonada superior dreta.
- **Nova versió:** amb `novaVersio: 'si'`, la fitxa mostra una cinta blanca «Nova versió» a la mateixa cantonada. Si el joc també té `nou: 'si'`, només es mostra «Nou joc».
- **Novetats:** amb `novetats: 'Text breu'`, apareix un requadre «Novetats» sota la descripció. És independent de la cinta: es mostra sempre que hi hagi text.
- **Imatges opcionals:** afegeix una captura pròpia a `assets/` i indica'n el camí relatiu. Si la imatge no es pot carregar, s'amaga i es conserva la fitxa.

Si vols mantenir també l'alternativa sense JavaScript al dia, afegeix el nou enllaç dins del bloc `<noscript>` d'`index.html`.

## Sudoku-sudo

La fitxa enllaça a `https://vibracat.github.io/sudo/` i el botó «Codi» apunta a `https://github.com/VibraCat/sudo`. L'enllaç del joc s'ha comprovat el 3 d'octubre de 2026 i retorna correctament la pàgina «Sudoku en Línia». Els sis jocs del catàleg estan disponibles.

## Publicar a GitHub Pages

1. Crea un repositori per al portal (per exemple, `jocs`).
2. Puja el **fitxers del ZIP** a l'arrel: `index.html`, `styles.css`, `jocs.js` i `app.js`, més les imatges locals si en tens.
3. A **Settings → Pages**, publica des de la branca on has pujat els fitxers, carpeta `/ (root)`.
4. La web tindrà l'adreça `https://qmrcat.github.io/jocs/` si el repositori es diu `jocs`.

## Comportament

Cada joc i el seu codi s'obren en una pestanya nova, amb `noopener noreferrer`. El portal no consulta l'API de GitHub, no requereix claus, no desa dades personals i no afegeix galetes ni analítica. Per jugar als jocs remots cal connexió a Internet. La pàgina del catàleg es pot obrir sense connexió.
