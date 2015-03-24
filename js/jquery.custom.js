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


	// Wrap text in h3 with a span element to underline
	$('h3, h4').wrapInner('<span class="underline" />');


	// Wrap images in #section-works to remove spacing at the bottom
	// the wrapper div needs to have line-height: 0
	$('#section-works img').wrap('<div class="img-wrap" />');
	
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
