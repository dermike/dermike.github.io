$(document).ready(function(){

	// Smooth scrolling to internal anchors
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	             	// Offset the scroll position by -60 pixels to account for the fixed top bar
	                 scrollTop: target.offset().top - 60
	            }, 600);
	            return false;
	        }
	    }
	});


	// ScrollSpy automatically updates nav targets based on scroll position
	// http://twitter.github.com/bootstrap/javascript.html#scrollspy
	$('#nav').scrollspy();
  
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
	
});




$(window).load(function () {
	// Retrieve the height of the #section-topbar
	// To avoid a white line when using background-size: cover; in the profile image, reduce the calculation by 1px
	var topbarHeight = $('#section-topbar').height() - 1;

	$('body').css('padding-top', topbarHeight);

});




$(window).resize(function () {
	// Vertically center the name box on windows resize
	// There are some other ways to do this, but I'm going to keep a cross-browser jQuery solution
	var $nameBox = $('#box-name');
	var nameBoxHeight = $nameBox.height();
	var profileImageHeight = $('#section-profileImage').height();

	var nameBoxMargin = ( profileImageHeight - nameBoxHeight ) / 2;

	if (profileImageHeight === 240) {
		nameBoxMargin += 10;
	}

	$nameBox.css('margin-top', nameBoxMargin);

});
