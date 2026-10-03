'use strict';

/**
 * CATÀLEG DELS JOCS
 * Per afegir un joc, copia un objecte i modifica'n les dades.
 * L'ordre dels objectes és l'ordre de les fitxes.
 * Disponible: estat: 'disponible', amb un enllaç de joc HTTPS vàlid.
 * Pendent: estat: 'pendent', amb url: null i un missatge explicatiu.
 * Icones: vila, fletxes, numeros, embus, cartes, sudoku, joc.
 * Colors: menta, blau, lila, taronja, rosa, groc.
 * Imatge opcional: imatge: 'assets/el-meu-joc.webp'.
 * No cal editar index.html, styles.css ni app.js per afegir fitxes.
 */
window.CATALEG_JOCS = [
  {
    id: 'vila-mediterrania',
    nom: 'Vila Mediterrània',
    categoria: 'Construcció',
    etiqueta: 'Creativitat · 3D',
    descripcio: 'Construeix una vila al teu ritme: cases, carrers, places i jardins entre el mar i la costa. Dona forma al teu poble mediterrani, sense objectius ni puntuacions.',
    url: 'https://qmrcat.github.io/vila-mediterrania/',
    repositori: 'https://github.com/qmrcat/vila-mediterrania',
    icona: 'vila',
    color: 'menta',
    estat: 'disponible',
  },
  {
    id: 'treu-l-embus',
    nom: 'Treu l’embús',
    categoria: 'Lògica',
    etiqueta: 'Trànsit · Estratègia',
    descripcio: 'Treu tots els vehicles de l’aparcament abans que s’acabi el temps. Escull bé l’ordre de sortida i vigila el trànsit i els semàfors per evitar els xocs.',
    url: 'https://qmrcat.github.io/Treu-l-embus/',
    repositori: 'https://github.com/qmrcat/Treu-l-embus',
    icona: 'embus',
    color: 'taronja',
    estat: 'disponible',
  },
  {
    id: 'blocs-del-temple',
    nom: 'Blocs del Temple',
    categoria: 'Lògica',
    etiqueta: 'Blocs · Estratègia',
    descripcio: 'Endinsa\'t en un temple antic i resol 60 sales plenes de blocs de pedra gravada. Porta cada bloc de color fins a la rajola del seu color, però vigila: quan empenys un bloc, llisca fins que xoca amb una paret o amb un altre bloc. Fes servir uns blocs de fre per als altres i pensa bé l\'ordre dels moviments, perquè un pas en fals pot deixar un bloc encallat en un racó.',
    url: 'https://qmrcat.github.io/blocs-del-temple/',
    repositori: 'https://github.com/qmrcat/blocs-del-temple',
    icona: 'blocs',
    color: 'lila',
    estat: 'disponible',
  },
  {
    id: 'fletxes-lliures',
    nom: 'Fletxes Lliures',
    categoria: 'Lògica',
    etiqueta: 'Fletxes · Nivells',
    descripcio: 'Allibera totes les fletxes del tauler en l’ordre correcte. Troba els camins lliures, evita les col·lisions i supera cada nivell abans que s’acabi el temps.',
    url: 'https://qmrcat.github.io/fletxes-lliures/',
    repositori: 'https://github.com/qmrcat/fletxes-lliures',
    icona: 'fletxes',
    color: 'blau',
    estat: 'disponible',
  },
  {
    id: 'parelles-de-deu',
    nom: 'Parelles de Deu',
    categoria: 'Números',
    etiqueta: 'Parelles · Sumes',
    descripcio: 'Uneix números iguals o que sumin 10 per buidar el tauler. Cada fase afegeix una suma extra, i les multiplicacions t’ajuden a trobar noves combinacions.',
    url: 'https://qmrcat.github.io/Parella-de-deus/',
    repositori: 'https://github.com/qmrcat/Parella-de-deus',
    icona: 'numeros',
    color: 'lila',
    estat: 'disponible',
  },

  {
    id: 'zona-botifarra',
    nom: 'Zona Botifarra',
    categoria: 'Cartes',
    etiqueta: 'Botifarra · Contra bots',
    descripcio: 'Juga a la botifarra amb tres jugadors controlats per l’ordinador. Tria el triomf, guanya bases amb el teu company i aconsegueix arribar als 101 punts.',
    url: 'https://qmrcat.github.io/Zona-Botifarra/',
    repositori: 'https://github.com/qmrcat/Zona-Botifarra',
    icona: 'cartes',
    color: 'rosa',
    estat: 'disponible',
  },
  {
    id: 'sudoku-sudo',
    nom: 'Sudoku-sudo',
    categoria: 'Números',
    etiqueta: 'Sudoku · Deducció',
    descripcio: 'El clàssic repte de lògica: completa la quadrícula amb els números de l’1 al 9 sense repetir-ne cap a les files, les columnes ni els blocs de 3 × 3.',
    url: 'https://vibracat.github.io/sudo/',
    repositori: 'https://github.com/VibraCat/sudo',
    icona: 'sudoku',
    color: 'groc',
    estat: 'disponible',
  },
];
