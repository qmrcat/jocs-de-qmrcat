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
  };
  const COLORS = new Set(['menta', 'blau', 'lila', 'taronja', 'rosa', 'groc']);
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

  const creaEnllac = (url, label, classe, context) => {
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
    const category = crea('span', 'category', joc.categoria || 'Joc');
    const number = crea('span', 'card-number', String(index + 1).padStart(2, '0'));
    number.setAttribute('aria-hidden', 'true');
    top.append(category, number);

    const identity = crea('div', 'card-identity');
    const icon = crea('span', 'game-icon');
    icon.setAttribute('aria-hidden', 'true');
    // Fragments SVG fixos de l'aplicació, mai procedents del catàleg.
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONES[joc.icona] || ICONES.joc}</svg>`;
    const title = crea('h2', '', joc.nom || 'Joc sense nom');
    title.id = titleId;
    identity.append(icon, title);

    article.append(top);
    if (typeof joc.imatge === 'string' && /^assets\/[a-zA-Z0-9_./-]+$/.test(joc.imatge) && !joc.imatge.includes('..')) {
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
  jocs.forEach((joc, index) => fragment.append(fitxa(joc, index)));
  grid.append(fragment);
  const disponibles = jocs.filter(joc => joc.estat === 'disponible' && enllacSegur(joc.url)).length;
  count.textContent = `${String(jocs.length).padStart(2, '0')} jocs · ${disponibles} per jugar`;
})();
