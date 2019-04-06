/*! gumshoe v3.0.0 | (c) 2015 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.gumshoe=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,a,o,r,c,s={},i="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),l=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",offset:0,activeClass:"active",callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(n,e[a],a,e);else for(var o=0,r=e.length;r>o;o++)t.call(n,e[o],o,e)},d=function(){var e={},t=!1,n=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=d(!0,e[a],n[a]):e[a]=n[a])};a>n;n++){var r=arguments[n];o(r)}return e},v=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},g=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},m=function(e){var n=0;if(e.offsetParent)do n+=e.offsetTop,e=e.offsetParent;while(e);return n=n-r-t.offset,n>=0?n:0},p=function(){l.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};s.setDistances=function(){a=g(),r=o?v(o)+m(o):0,f(l,function(e){e.distance=m(e.target)}),p()};var h=function(){var e=document.querySelectorAll(t.selector);f(e,function(e){e.hash&&l.push({nav:e,target:document.querySelector(e.hash),parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})})},y=function(e){c&&(c.nav.classList.remove(t.activeClass),c.parent&&c.parent.classList.remove(t.activeClass)),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),c={nav:e.nav,parent:e.parent}};s.getCurrentNav=function(){var t=e.pageYOffset;if(e.innerHeight+t>=a)return y(l[0]);for(var n=0,o=l.length;o>n;n++){var r=l[n];if(r.distance<t)return y(r)}};var b=function(){f(l,function(e){e.nav.classList.contains(t.activeClass)&&(c={nav:e.nav,parent:e.parent})})};s.destroy=function(){t&&(e.removeEventListener("resize",H,!1),e.removeEventListener("scroll",H,!1),l=[],t=null,n=null,a=null,o=null,r=null,c=null)};var H=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&s.getCurrentNav(),"resize"===e.type&&(s.setDistances(),s.getCurrentNav())},66))};return s.init=function(n){i&&(s.destroy(),t=d(u,n||{}),o=document.querySelector(t.selectorHeader),h(),0!==l.length&&(b(),s.setDistances(),s.getCurrentNav(),e.addEventListener("resize",H,!1),e.addEventListener("scroll",H,!1)))},s});

/*! smooth-scroll v8.0.0 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,r,o,a,c={},i="querySelector"in document&&"addEventListener"in e&&"onhashchange"in e,u={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,scrollOnLoad:!0,callback:function(){}},s=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=s(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var a=arguments[n];o(a)}return e},l=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};c.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",c=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+a};var d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},g=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},p=function(e){return null===e?0:l(e)+e.offsetTop};c.animateScroll=function(t,n,a){var c=g(n?n.getAttribute("data-options"):null),i=s(i||u,a||{},c),l="[object Number]"===Object.prototype.toString.call(t)?!0:!1,f=l?null:e.document.querySelector(t);if(l||f){var v=e.pageYOffset;r||(r=e.document.querySelector(i.selectorHeader)),o||(o=p(r));var b,O,y,S=l?t:h(f,o,parseInt(i.offset,10)),I=S-v,E=m(),H=0,L=function(r,o,a){var c=e.pageYOffset;(r==o||c==o||e.innerHeight+c>=E)&&(clearInterval(a),f&&f.focus(),i.callback(t,n))},A=function(){H+=16,O=H/parseInt(i.speed,10),O=O>1?1:O,y=v+I*d(i.easing,O),e.scrollTo(0,Math.floor(y)),L(y,S,b)},C=function(){b=setInterval(A,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var v=function(){var n=e.location.hash;if(a&&(a.id=a.getAttribute("data-scroll-id"),a=null),n){n=c.escapeCharacters(n);var r=document.querySelector(t.select+'[href*="'+n+'"]');c.animateScroll(n,r,t)}},b=function(n){var r=f(n.target,t.selector);if(r&&r.hash){var o=c.escapeCharacters(r.hash);if(o===(e.location.hash||"#top"))return void c.animateScroll(o,r,t);a=document.querySelector(o),a&&(a.setAttribute("data-scroll-id",a.id),a.id="")}},O=function(e){n||(n=setTimeout(function(){n=null,o=p(r)},66))};return c.destroy=function(){t&&(document.removeEventListener("click",b,!1),e.removeEventListener("hashchange",v,!1),e.removeEventListener("resize",O,!1),t=null,n=null,r=null,o=null,a=null)},c.init=function(n){i&&(c.destroy(),t=s(u,n||{}),r=e.document.querySelector(t.selectorHeader),o=p(r),document.addEventListener("click",b,!1),e.addEventListener("hashchange",v,!1),r&&e.addEventListener("resize",O,!1),t.scrollOnLoad&&(setTimeout(function(){window.scrollTo(0,0)},1),v()))},c});

(function init() {
  var menuItems = document.querySelectorAll('nav a'),
    pItems = document.querySelectorAll('.project-list li'),
    i = 0,
    menuItemKey = function menuItemKey(e) {
      var el;
      if (e.keyCode === 13 || e.keyCode === 32) {
        el = document.getElementById(e.target.href.split('#')[1] + 'h2');
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
    'offset': 55
  });

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
})();