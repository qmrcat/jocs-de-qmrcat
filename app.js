'use strict';

(() => {
  // Icones d'interfície. No hi ha llibreries ni recursos externs.
  const ICONES = {
    vila: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9m-4-11.25 8-4.5"/>',
    fletxes: '<path d="M4 18V6h12m-4-4 4 4-4 4M10 18h10m-4-4 4 4-4 4"/>',
    numeros: '<path d="M5 6h6M8 3v6M5 16h6m4-10h4m-4 10h4m-4 4h4"/>',
    embus: '<path d="m5 7 2-4h10l2 4m-14 0h14l2 5v6H3v-6l2-5Zm0 11v3m14-3v3M3 12h18m-14 3h.01M17 15h.01"/>',
    cartes: '<rect x="7" y="3" width="13" height="17" rx="2"/><path d="M4 6H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h11M13.5 8l3.5 4-3.5 4-3.5-4 3.5-4Z"/>',
    sudoku: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18m6-18v18M3 9h18M3 15h18"/>',
    joc: '<path d="M6 7h12a3 3 0 0 1 3 2.5l1 7a2.5 2.5 0 0 1-4.2 2.2L15 16H9l-2.8 2.7A2.5 2.5 0 0 1 2 16.5l1-7A3 3 0 0 1 6 7Z"/><path d="M6 10v4m-2-2h4m8-1h.01m3 3h.01"/>',
    blocs: '<rect x="8" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
    castell: '<path d="M4 21V4h3v3h3V4h4v3h3V4h3v17H4Z"/><path d="M10 21v-5a2 2 0 0 1 4 0v5"/>',
    daus: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
    trencaclosques: '<path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4H4V8Z"/>',
    lletres: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 16 4-9 4 9m-6.5-3h5"/>',
    escacs: '<circle cx="12" cy="7" r="3"/><path d="M7 21h10M8.5 21c.5-3 1.5-5 1.5-8h4c0 3 1 5 1.5 8M9 13h6"/>',
    espasa: '<path d="M20 4v3L9 18l-3-3L17 4h3Z"/><path d="m5 13 6 6m-4-2-3 3"/>',
    corona: '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 10H5L3 8Z"/><path d="M5 21h14"/>',
    bandera: '<path d="M5 21V4m0 1h12l-2.5 4 2.5 4H5"/>',
    mapa: '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Zm6-2v14m6-12v14"/>',
    coet: '<path d="M12 3c3 2.5 4 6 4 9v4H8v-4c0-3 1-6.5 4-9Z"/><circle cx="12" cy="10" r="1.5"/><path d="m8 13-3 3v3l3-2m8-4 3 3v3l-3-2m-6 3 2 2 2-2"/>',
    fantasma: '<path d="M5 21V11a7 7 0 0 1 14 0v10l-2.5-2-2.3 2-2.2-2-2.2 2-2.3-2L5 21Z"/><path d="M9.5 11h.01m4.99 0h.01"/>',
    pilota: '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18m0-18a14 14 0 0 0 0 18M3 12h18"/>',
    diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    rellotge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bombeta: '<path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/><path d="M10 19h4m-3 2h2"/>',
    musica: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    arbre: '<path d="M12 3 6 11h3l-4 5h14l-4-5h3L12 3Zm0 13v5"/>',
    estrella: '<path d="m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.1-5.6-2.9L6.4 20l1.1-6.1L3 9.5l6.2-.9L12 3Z"/>',
    cor: '<path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20Z"/>',
    trofeu: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Zm0 2H4v1a3 3 0 0 0 4 2.8M16 6h4v1a3 3 0 0 1-4 2.8M12 13v4m-4 4h8m-6-4h4"/>',
  };
  const COLORS = new Set(['menta', 'blau', 'lila', 'taronja', 'rosa', 'groc', 'vermell', 'verd', 'turquesa', 'indi', 'magenta', 'llima', 'plata']);
  const grid = document.querySelector('#games-grid');
  const count = document.querySelector('#catalog-count');
  const note = document.querySelector('#catalog-note');

  const crea = (tag, classe, text) => {
    const element = document.createElement(tag);
    if (classe) element.className = classe;
    if (text != null) element.textContent = text;
    return element;
  };

  const enllacSegur = (value) => {
    if (typeof value !== 'string') return null;
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  };

  // Camps opcionals del catàleg (destacat, nou): 'si', 'sí' o true.
  const esSi = (value) => value === true || (typeof value === 'string' && /^s[ií]$/i.test(value.trim()));

  const creaEnllac =(url, label, classe, context) => {
    const a = crea('a', classe, label);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', `${label}: ${context} (s’obre en una pestanya nova)`);
    return a;
  };

  const fitxa = (joc, index) => {
    const article = crea('article', `game-card color-${COLORS.has(joc.color) ? joc.color : 'menta'}`);
    const titleId = `game-title-${index}`;
    article.setAttribute('aria-labelledby', titleId);

    const top = crea('div', 'card-top');
    const labels = crea('span', 'card-labels');
    if (esSi(joc.destacat)) {
      article.classList.add('is-featured');
      labels.append(crea('span', 'featured-label', '★ Joc destacat'));
    }
    labels.append(crea('span', 'category', joc.categoria || 'Joc'));
    const number = crea('span', 'card-number', String(index + 1).padStart(2, '0'));
    number.setAttribute('aria-hidden', 'true');
    top.append(labels, number);
    if (esSi(joc.nou)) {
      article.classList.add('is-new');
      const ribbon = crea('span', 'ribbon');
      ribbon.append(crea('span', '', 'Nou joc'));
      article.append(ribbon);
    }

    const identity = crea('div', 'card-identity');
    const icon = crea('span', 'game-icon');
    icon.setAttribute('aria-hidden', 'true');
    // Fragments SVG fixos de l'aplicació, mai procedents del catàleg.
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONES[joc.icona] || ICONES.joc}</svg>`;
    const title = crea('h2', '', joc.nom || 'Joc sense nom');
    title.id = titleId;
    identity.append(icon, title);

    article.append(top);
    if (typeof joc.imatge === 'string' && /^assets\/[\p{L}\p{N}_./ -]+$/u.test(joc.imatge) && !joc.imatge.includes('..')) {
      const image = crea('img', 'game-image');
      image.alt = `Captura del joc ${joc.nom}`;
      image.src = joc.imatge;
      image.loading = 'lazy';
      image.width = 640;
      image.height = 360;
      image.addEventListener('error', () => image.remove(), { once: true });
      article.append(image);
    }
    article.append(identity, crea('p', 'game-description', joc.descripcio || ''), crea('p', 'game-detail', joc.etiqueta || joc.categoria || 'Joc'));

    const actions = crea('div', 'card-actions');
    const playUrl = enllacSegur(joc.url);
    if (joc.estat === 'disponible' && playUrl) {
      actions.append(creaEnllac(playUrl, 'Juga', 'play-link', joc.nom));
    } else {
      article.classList.add('is-pending');
      actions.append(crea('span', 'pending-label', 'Enllaç pendent'));
    }
    const repoUrl = enllacSegur(joc.repositori);
    if (repoUrl) actions.append(creaEnllac(repoUrl, 'Codi', 'source-link', joc.nom));
    article.append(actions);
    if (joc.estat !== 'disponible' || !playUrl) article.append(crea('p', 'pending-note', joc.missatge || 'L’enllaç per jugar encara no està disponible.'));
    return article;
  };

  const jocs = Array.isArray(window.CATALEG_JOCS) ? window.CATALEG_JOCS.filter(joc => joc && typeof joc === 'object' && !Array.isArray(joc)) : [];
  if (!jocs.length) {
    count.textContent = '0 jocs';
    note.hidden = false;
    note.textContent = 'El catàleg encara no té jocs disponibles. Torna-hi més endavant.';
    return;
  }

  const fragment = document.createDocumentFragment();
  // Els destacats passen al davant; la resta conserva l'ordre del catàleg.
  const ordenats = [...jocs].sort((a, b) => esSi(b.destacat) - esSi(a.destacat));
  ordenats.forEach((joc, index) => fragment.append(fitxa(joc, index)));
  grid.append(fragment);
  const disponibles = jocs.filter(joc => joc.estat === 'disponible' && enllacSegur(joc.url)).length;
  count.textContent = `${String(jocs.length).padStart(2, '0')} jocs · ${disponibles} per jugar`;
})();
