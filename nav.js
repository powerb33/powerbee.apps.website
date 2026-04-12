// Shared navigation component
// Each page includes this script and calls: renderNav('page-id')
// where page-id matches one of the keys below.

function renderNav(activePage) {
  const pages = [
    { id: 'ugs',        href: 'ultimate-game-scorer.html',  label: 'Ultimate Game Scorer',  icon: 'images/ugs_logo.png' },
    { id: 'ranxt',      href: 'ranxt.html',                 label: 'ranxt',                 icon: 'images/ranxt_icon_name.png' },
    { id: 'skull-king', href: 'skull-king-scorer.html',     label: 'Skull King Scorer',     icon: 'images/skull_king_icon.png' },
    { id: 'roll-risk',  href: 'roll-risk-dice.html',        label: 'Roll Risk Dice',        icon: 'images/roll_risk_icon.png' },
    { id: 'privacy',    href: 'privacy-policy.html',        label: 'Privacy',               icon: null },
    { id: 'terms',      href: 'terms.html',                 label: 'Terms',                 icon: null }
  ];

  const links = pages.map(function(p) {
    var activeClass = (p.id === activePage) ? ' class="active"' : '';
    var iconHtml = p.icon ? '<img src="' + p.icon + '" alt="' + p.label + '" class="nav-icon"> ' : '';
    return '<li><a href="' + p.href + '"' + activeClass + '>' + iconHtml + p.label + '</a></li>';
  }).join('\n      ');

  document.getElementById('site-nav').innerHTML = '<nav>\n' +
    '  <div class="container">\n' +
    '    <a href="index.html" class="logo-link">\n' +
    '      <img src="images/bee_only.png" alt="Powerbee">\n' +
    '      <span>Powerbee Apps</span>\n' +
    '    </a>\n' +
    '    <button class="nav-toggle" aria-label="Menu">\u2630</button>\n' +
    '    <ul class="nav-links">\n' +
    '      ' + links + '\n' +
    '    </ul>\n' +
    '  </div>\n' +
    '</nav>';

  // Wire up mobile toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
}
