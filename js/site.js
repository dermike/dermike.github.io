/*! gumshoejs polyfills v5.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(this))return null;do{if(e.matches(t))return e;e=e.parentElement}while(null!==e);return null}),(function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t})(),(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.Gumshoe=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},s=function(t){t.sort((function(t,e){return o(t.content)<o(e.content)?-1:1}))},c=function(e,n,o){var s=e.getBoundingClientRect(),c=(function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)})(n);return o?parseInt(s.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=c},r=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!r()||!c(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(c(t[o].content,e))return t[o]},l=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),l(n,e))}},a=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),l(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},u=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),u(n,e))}};return function(o,c){var r,l,f,d,m,v={};v.setup=function(){r=document.querySelectorAll(o),l=[],Array.prototype.forEach.call(r,(function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&l.push({nav:t,content:e})})),s(l)},v.detect=function(){var t=i(l,m);t?f&&t.content===f.content||(a(f,m),(function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),u(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}})(t,m),f=t):f&&(a(f,m),f=null)};var p=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(v.detect)},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame((function(){s(),v.detect()}))};v.destroy=function(){f&&a(f),t.removeEventListener("scroll",p,!1),m.reflow&&t.removeEventListener("resize",h,!1),l=null,r=null,f=null,d=null,m=null};return m=(function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t})(e,c||{}),v.setup(),v.detect(),t.addEventListener("scroll",p,!1),m.reflow&&t.addEventListener("resize",h,!1),v}}));


/*! smooth-scroll v16.0.3 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(C){"use strict";var L={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},H=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},q=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(C.getComputedStyle(t).height,10)+e.offsetTop):0;var t},Q=function(e,t,n,o){if(t.emitEvents&&"function"==typeof C.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var I,a,M,A,w={};w.cancelScroll=function(e){cancelAnimationFrame(A),A=null,e||Q("scrollCancel",I)},w.animateScroll=function(i,s,e){w.cancelScroll();var c=H(I||L,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=C.pageYOffset;c.header&&!M&&(M=document.querySelector(c.header));var n,o,a,d,r,f,m,h,p=x(M),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,q()-C.innerHeight)),a})(t,p,parseInt("function"==typeof c.offset?c.offset(i,s):c.offset,10),c.clip),y=g-l,v=q(),S=0,E=(n=y,a=(o=c).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),b=function(e,t){var n,o,a,r=C.pageYOffset;if(e==t||r==t||(l<t&&C.innerHeight+r)>=v)return w.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),C.scrollTo(0,o)),Q("scrollStop",c,i,s),!(A=d=null)},O=function(e){var t,n,o;d||(d=e),S+=e-d,f=l+y*(n=r=1<(r=0===E?0:S/E)?1:r,"easeInQuad"===(t=c).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),C.scrollTo(0,Math.floor(f)),b(f,g)||(A=C.requestAnimationFrame(O),d=e)};0===C.pageYOffset&&C.scrollTo(0,0),m=i,h=c,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:m.id},document.title,m===document.documentElement?"#top":"#"+m.id),Q("scrollStart",c,i,s),w.cancelScroll(!0),C.requestAnimationFrame(O)}};var t=function(e){if(!("matchMedia"in C&&C.matchMedia("(prefers-reduced-motion)").matches)&&!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(I.ignore)&&a.hostname===C.location.hostname&&a.pathname===C.location.pathname&&/#/.test(a.href)){var t,n=r(a.hash);if("#"===n){if(!I.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=C.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||C.pageYOffset},document.title,t||C.location.href)}})(I),w.animateScroll(t,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(I)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||w.animateScroll(t,null,{updateURL:!1})}};w.destroy=function(){I&&(document.removeEventListener("click",t,!1),C.removeEventListener("popstate",n,!1),w.cancelScroll(),A=M=a=I=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in C&&"requestAnimationFrame"in C&&"closest"in C.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";w.destroy(),I=H(L,e||{}),M=I.header?document.querySelector(I.header):null,document.addEventListener("click",t,!1),I.updateURL&&I.popstate&&C.addEventListener("popstate",n,!1)})(),w}}));

(function init() {
  var menuItems = document.querySelectorAll('nav a'),
    pItems = document.querySelectorAll('.project-list li'),
    i = 0,
    nativeDarkMode = matchMedia('(prefers-color-scheme)').matches,
    spy = new Gumshoe('nav a', {
      offset: function () {
        return document.querySelector('nav').getBoundingClientRect().height;
      }
    }),
    scroll = new SmoothScroll('nav a', {
      speed: 750,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      header: '[data-scroll-header]',
      updateURL: false
    }),
    menuItemKey = function menuItemKey(e) {
      var el, elId;
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        elId = e.target.href.split('#')[1];
        el = document.querySelector('#' + elId + ' h2, #' + elId + ' + main section h1');
        if (el) {
          el.setAttribute('tabindex', '-1');
          el.focus();
          scroll.animateScroll(el.parentElement.tagName !== 'SECTION' ? document.querySelector('#intro') : el.parentElement);
          setTimeout(function remove() {
            el.removeAttribute('tabindex');
          }, 100); 
        }
      }
    },
    titleImage;

  for (i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('keydown', menuItemKey, false);
  }

  Array.prototype.forEach.call(pItems, function(p, i) {
    var color = parseInt(Math.random() * 2) ?  'red' : 'purple',
      top = parseInt(Math.random() * 2) ?  'top' : 'bottom',
      position = ['left', false, 'right', false],
      bump = position[Math.floor(Math.random() * position.length)],
      inside = parseInt(Math.random() * 2) ?  'inside' : 'outside';
    if (i > 0 && i < pItems.length - 1) {
      if (bump) {
        p.className = 'bump ' + top + ' ' + bump + ' ' + color + ' ' + inside;
      }
    }
  });

  document.body.classList.add('animate');
  titleImage = new Image();
  titleImage.onload = function() {
    document.body.classList.remove('animate');
    titleImage = null;
  };
  titleImage.src = 'images/profile_big.jpg';

  if (!nativeDarkMode) {
    var switchItem = document.createElement('a'),
      darkModeStyle = document.querySelector('#darkmode'),
      toggleDarkMode = function(e) {
        e.preventDefault();
        if (!switchItem.classList.contains('enabled')) {
          switchItem.classList.add('enabled');
          switchItem.setAttribute('aria-pressed', 'true');
          darkModeStyle.setAttribute('media', 'all');
          if (localStorage) {
            localStorage.setItem('prefers-darkmode', true);
          }
        } else {
          switchItem.classList.remove('enabled');
          switchItem.setAttribute('aria-pressed', 'false');
          darkModeStyle.setAttribute('media', '(prefers-color-scheme: dark)');
          if (localStorage) {
            localStorage.removeItem('prefers-darkmode');
          }
        }
      },
      toggleDarkModeKey = function(e) {
        if (e.keyCode === 32) {
          toggleDarkMode(e);
        }
      },
      intro = document.querySelector('#intro');
    switchItem.id = 'darkmode-switch';
    switchItem.href = '#';
    switchItem.setAttribute('aria-label', 'Use dark mode');
    switchItem.setAttribute('role', 'button');
    switchItem.setAttribute('aria-pressed', 'false');
    intro.insertBefore(switchItem, intro.childNodes[0]);
    switchItem.addEventListener('click', toggleDarkMode, false);
    switchItem.addEventListener('keydown', toggleDarkModeKey, false);
    if (localStorage && localStorage.getItem('prefers-darkmode')) {
      switchItem.click();
    }
  }
})();
