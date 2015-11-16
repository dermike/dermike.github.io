gumshoe.init({
  offset: 60
});

smoothScroll.init({
  offset: 50
});
  
var loadFonts = function() {
  var h = document.getElementsByTagName('head')[0],
      css = document.createElement('link'),
      pt = document.createElement('link'),
      os = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'css/bundle.css'
  pt.rel = 'stylesheet';
  pt.href = 'http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic';
  os.rel = 'stylesheet';
  os.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700';
  h.appendChild(css);
  h.appendChild(pt);
  h.appendChild(os);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) {
  raf(loadFonts);
} else {
  window.addEventListener('load', loadFonts);
}

window.onload = function() {
  var topbarHeight = document.getElementById('section-topbar').offsetHeight - 1;
  document.body.style.paddingTop = topbarHeight + "px";
};

window.addEventListener('resize', function() {
  var nameBox = document.getElementById('box-name'),
      nameBoxHeight = nameBox.offsetHeight,
      profileImageHeight = document.getElementById('section-profileImage').offsetHeight,
      nameBoxMargin = (profileImageHeight - nameBoxHeight) / 2;
  
  if (profileImageHeight === 240) {
    nameBoxMargin += 10;
  }
  nameBox.style.marginTop = nameBoxMargin + "px";
});