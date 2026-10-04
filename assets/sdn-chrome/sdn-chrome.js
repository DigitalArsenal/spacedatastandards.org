// The shared top bar, stack section and light/dark switch of the Space Data
// Network family of sites. The canonical copy lives in spacedatanetwork.org
// docs/assets/sdn-chrome/; the other stack sites carry verbatim copies. Load
// it in <head> without defer, so a saved theme applies before the first paint.
//
//   <header class="sdn-header">           the bar: brand, links, actions
//     [data-sdn-theme-toggle]             light/dark switch, remembered
//     [data-sdn-menu-toggle]              menu button below 900 px; the menu
//                                         repeats the bar's links
//   <section class="sdn-stack" data-sdn-stack="<site key>">
//                                         the stack cards, this site marked
//   [data-sdn-hero]                       a hero whose .reel-frame is placed at
//                                         the vertical center of the screen
//
// Pages a single-page app renders later are picked up as they appear.
(function () {
  var root = document.documentElement;
  var THEME_KEY = 'sdn-theme';
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  // The stack, in the order every site lists it.
  var SITES = [
    ['sdn', 'Space Data Network', 'https://spacedatanetwork.org/', 'spacedatanetwork.org', 'MIT',
      'The network itself: nodes that publish, find and deliver digitally signed space data, with a dashboard, a desktop app and an SDK.',
      '<circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="5" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M7 11l10-5M7 13l10 5M19 7.2v9.6"/>'],
    ['standards', 'Space Data Standards', 'https://spacedatastandards.org/', 'spacedatastandards.org', 'Apache-2.0',
      'Open schemas for every kind of space data (orbits, conjunctions, tracking, sensors, radio, weather) with code for every major language.',
      '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'],
    ['flatbuffers', 'FlatBuffers', 'https://digitalarsenal.github.io/flatbuffers/', 'FlatBuffers docs', 'Apache-2.0',
      'Fast binary encoding with field-level encryption, and the schema compiler built to run in browsers and on servers.',
      '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>'],
    ['flatsql', 'FlatSQL', 'https://digitalarsenal.github.io/flatsql/', 'FlatSQL docs', 'PolyForm Noncommercial 1.0.0',
      'SQL queries run directly over FlatBuffer records on disk, with no conversion step and no separate database.',
      '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>'],
    ['module-sdk', 'Module SDK', 'https://digitalarsenal.github.io/space-data-module-sdk/', 'Module SDK docs', 'Apache-2.0',
      'Build, test, digitally sign and package the WebAssembly modules that SDN nodes and browsers run.',
      '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 9l1.5 6 1.5-4 1.5 4L13 9M15 15l1.5-6 1.5 6M15.5 13h2"/>'],
    ['hd-wallet', 'HD Wallet', 'https://wallet.spacedatanetwork.org/', 'wallet.spacedatanetwork.org', 'Apache-2.0',
      'One set of keys, kept in your browser, for signing in, digitally signing data and paying on many networks.',
      '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>'],
    ['tudat', 'Tudat WASM', 'https://digitalarsenal.github.io/tudat-wasm/', 'Tudat in your browser', 'BSD-3-Clause',
      'The TU Delft Astrodynamics Toolbox compiled to WebAssembly: orbits, maneuvers and planetary motion, computed in your browser.',
      '<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9.5" ry="4.5" transform="rotate(-30 12 12)"/><circle cx="20.2" cy="7.2" r="1.4" fill="currentColor" stroke="none"/>'],
    ['asset-models', 'SDN Models', 'https://digitalarsenal.github.io/asset-models/', 'Browse the models', 'Licensed per model',
      '3D models of satellites, rockets and stations, checked and ready to show in any 3D viewer.',
      '<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M4 7.4l8 4.6 8-4.6M12 12v9.2"/>']
  ];

  var ICONS = {
    open: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'
  };

  function icon(markup, className, stroke) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', stroke || '1.8');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    if (className) svg.setAttribute('class', className);
    svg.innerHTML = markup;
    return svg;
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function wireThemeToggle(button) {
    button.classList.add('sdn-icon-button', 'sdn-theme-toggle');
    button.type = 'button';
    button.title = 'Light or dark theme';
    button.setAttribute('aria-label', 'Switch between light and dark theme');
    button.replaceChildren(icon(ICONS.sun, 'sdn-sun'), icon(ICONS.moon, 'sdn-moon'));
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      window.dispatchEvent(new Event('sdn-theme'));
    });
  }

  // The menu repeats the bar's links. A tap on a copy clicks the original, so
  // whatever the site attached to its links runs from the menu as well.
  function wireMenu(header, button) {
    var links = header.querySelector('.sdn-header-links');
    if (!links) { button.hidden = true; return; }
    var menu = element('nav', 'sdn-menu');
    menu.id = 'sdn-menu';
    menu.setAttribute('aria-label', links.getAttribute('aria-label') || 'Site');
    header.insertAdjacentElement('afterend', menu);
    var originals = [];
    function fill() {
      originals = Array.prototype.slice.call(links.querySelectorAll('a'));
      menu.replaceChildren.apply(menu, originals.map(function (a) {
        var copy = a.cloneNode(true);
        copy.removeAttribute('id');
        return copy;
      }));
    }
    function setOpen(open) {
      if (open) fill();
      menu.classList.toggle('is-open', open);
      header.classList.toggle('is-menu-open', open);
      button.setAttribute('aria-expanded', String(open));
    }
    button.classList.add('sdn-icon-button', 'sdn-menu-button');
    button.type = 'button';
    button.setAttribute('aria-label', 'Menu');
    button.setAttribute('aria-controls', menu.id);
    button.setAttribute('aria-expanded', 'false');
    button.replaceChildren(icon(ICONS.open, 'sdn-open'), icon(ICONS.close, 'sdn-close'));
    button.addEventListener('click', function () { setOpen(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (event) {
      var copy = event.target.closest('a');
      if (!copy) return;
      var original = originals[Array.prototype.indexOf.call(menu.children, copy)];
      setOpen(false);
      if (original) { event.preventDefault(); original.click(); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); button.focus(); }
    });
    var wide = window.matchMedia('(min-width: 901px)');
    var close = function (event) { if (event.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', close); else wide.addListener(close);
  }

  function renderStack(section) {
    var here = section.getAttribute('data-sdn-stack');
    section.classList.add('sdn-stack');
    if (!section.id) section.id = 'stack';
    section.setAttribute('aria-labelledby', 'sdn-stack-title');
    var title = element('h2', 'sdn-stack-title', 'Built On Open Standards And Software');
    title.id = 'sdn-stack-title';
    var grid = element('div', 'sdn-stack-grid');
    SITES.forEach(function (site) {
      var current = site[0] === here;
      var card = element(current ? 'div' : 'a', 'sdn-stack-card');
      if (current) card.setAttribute('aria-current', 'page');
      else card.href = site[2];
      var head = element('div', 'sdn-stack-card-head');
      head.append(icon(site[6], null, '1.7'), element('h3', null, site[1]));
      var foot = element('div', 'sdn-stack-foot');
      foot.append(element('span', 'sdn-stack-more', current ? 'You are here' : site[3] + ' →'),
        element('span', 'sdn-stack-license', site[4]));
      card.append(head, element('p', null, site[5]), foot);
      grid.append(card);
    });
    var inner = element('div', 'sdn-stack-inner');
    inner.append(element('p', 'sdn-stack-eyebrow', 'SDN Stack'), title, grid);
    section.replaceChildren(inner);
  }

  // The hero's reel sits at the vertical center of the screen, or as close as
  // the title above it allows: the hero lays its content out top-down, so its
  // top padding places the reel. The reel gives up to a quarter of its width
  // before it slides below the center.
  // Layout position from the top of the page (or of a fixed overlay) at rest:
  // offsets ignore scrolling and entrance transforms.
  function restTop(el) {
    var y = 0;
    for (var e = el; e; e = e.offsetParent) y += e.offsetTop + (e === el ? 0 : e.clientTop);
    return y;
  }

  function centerHero(hero) {
    var reel = hero.querySelector('.reel-frame');
    if (!reel || hero.getClientRects().length === 0) return;
    hero.style.paddingTop = '';
    reel.style.width = '';
    var view = window.innerHeight;
    var top = restTop(hero);
    var above = restTop(reel) - top - (parseFloat(getComputedStyle(hero).paddingTop) || 0);
    var bar = document.querySelector('.sdn-header');
    var floor = Math.max(0, (bar ? bar.offsetHeight : 0) + 16 - top);
    var width = reel.offsetWidth;
    var height = reel.offsetHeight;
    var want = view / 2 - height / 2 - top - above;
    if (want < floor && height > 0) {
      var fit = Math.max(width * 0.75, 2 * (view / 2 - top - floor - above) * width / height);
      if (fit < width) {
        reel.style.width = fit + 'px';
        want = view / 2 - reel.offsetHeight / 2 - top - above;
      }
    }
    hero.style.paddingTop = Math.max(floor, want) + 'px';
  }

  var heroes = [];
  var heroFrame = 0;
  var heroWatch = 'ResizeObserver' in window ? new ResizeObserver(function () { queueHeroes(); }) : null;
  function queueHeroes() {
    if (heroFrame) return;
    heroFrame = requestAnimationFrame(function () {
      heroFrame = 0;
      heroes = heroes.filter(function (hero) { return hero.isConnected; });
      heroes.forEach(centerHero);
    });
  }
  window.addEventListener('resize', queueHeroes);

  function scan() {
    var nodes = document.querySelectorAll('[data-sdn-theme-toggle]:not([data-sdn-ready]), .sdn-header:not([data-sdn-ready]), [data-sdn-stack]:not([data-sdn-ready]), [data-sdn-hero]:not([data-sdn-ready])');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      node.setAttribute('data-sdn-ready', '');
      if (node.hasAttribute('data-sdn-theme-toggle')) wireThemeToggle(node);
      else if (node.hasAttribute('data-sdn-stack')) renderStack(node);
      else if (node.hasAttribute('data-sdn-hero')) {
        heroes.push(node);
        centerHero(node);
        // Text that changes later (a translation, a count) resizes a child,
        // not a hero with a fixed height, so the children are watched too.
        if (heroWatch) [node].concat(Array.prototype.slice.call(node.querySelectorAll('*'), 0, 40)).forEach(function (el) { heroWatch.observe(el); });
      }
      else {
        var button = node.querySelector('[data-sdn-menu-toggle]');
        if (button) wireMenu(node, button);
      }
    }
  }

  function start() {
    scan();
    if ('MutationObserver' in window) new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
