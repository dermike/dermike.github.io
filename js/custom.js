(function init() {
  var loadFonts = function loadFonts() {
      var h = document.getElementsByTagName('head')[0],
        css = document.createElement('link'),
        pt = document.createElement('link'),
        os = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'css/bundle.css';
      pt.rel = 'stylesheet';
      pt.href = 'http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic';
      os.rel = 'stylesheet';
      os.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700';
      h.appendChild(css);
      h.appendChild(pt);
      h.appendChild(os);
    },
    raf,
    rubrik = document.getElementById('front-header'),
    text = rubrik.innerHTML,
    newtext = '',
    spans,
    i,
    current;

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

  window.onload = function onload() {
    var topbarHeight = document.getElementById('section-topbar').offsetHeight - 1;
    document.body.style.paddingTop = topbarHeight + 'px';
  };

  window.addEventListener('resize', function resize() {
    var nameBox = document.getElementById('box-name'),
      nameBoxHeight = nameBox.offsetHeight,
      profileImageHeight = document.getElementById('section-profileImage').offsetHeight,
      nameBoxMargin = (profileImageHeight - nameBoxHeight) / 2;

    if (profileImageHeight === 240) {
      nameBoxMargin += 10;
    }
    nameBox.style.marginTop = nameBoxMargin + 'px';
  });

  for (i = 0; i < text.length; i += 1) {
    current = text.charAt(i);
    if (current !== ' ') {
      newtext += '<span>' + current + '</span>';
    } else {
      newtext += ' ';
    }
  }
  rubrik.innerHTML = newtext;
  spans = rubrik.querySelectorAll('span');
  setInterval(function randomLetter() {
    var random = Math.floor(Math.random() * spans.length),
      selected = spans[random];
    selected.classList.add('coloran');
    setTimeout(function randomLetterEnd() {
      selected.classList.remove('coloran');
    }, 500);
  }, 2500);
})();
