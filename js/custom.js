(function init() {
  var loadFonts = function loadFonts() {
      var h = document.getElementsByTagName('head')[0],
        css = document.createElement('link'),
        fonts = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'css/bundle.css';
      fonts.rel = 'stylesheet';
      fonts.href = 'css/fonts.css';
      h.appendChild(css);
      h.appendChild(fonts);
    },
    getRandom = function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    raf,
    glitchRate = 3000,
    rubrik = document.getElementById('front-header'),
    menuItems = document.querySelectorAll('.menu-item a'),
    i = 0,
    menuItemKey = function menuItemKey(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        var el = document.getElementById(e.target.href.split('#')[1]);
        el.setAttribute('tabindex', '-1');
        el.focus();
        setTimeout(function remove() {
          el.removeAttribute('tabindex');
        }, 100);
      }
    };

  gumshoe.init({
    'offset': 60
  });

  smoothScroll.init({
    'offset': 50
  });

  try {
    raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
  } catch (e) {

  } finally {
    if (raf) {
      raf(loadFonts);
    } else {
      window.addEventListener('load', loadFonts);
    }
  }

  for (i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('keydown', menuItemKey, false);
  }

  function addGlitch() {
    rubrik.classList.add('glitch');
    setTimeout(function removeGlitch() {
      rubrik.classList.remove('glitch');
      glitchRate = getRandom(450, 5000);
      setTimeout(function runAgain() {
        addGlitch();
      }, glitchRate);
    }, 450);
  }
  addGlitch();
})();
