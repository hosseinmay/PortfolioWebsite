// var funfacts = new Array();
// funfacts[0] = "The woolly mammoth was around when the pyramids were being built.";
// funfacts[1] = "'Facetiously' contains all 5 vowels and 'y' in alphabetical order.";
// funfacts[2] = "A group of ferrets is called a business.";
// funfacts[3] = "The continent with the highest average education level is Antarctica.";
// funfacts[4] = "In the middle ages, all children were called girls.";

// var random = Math.floor(Math.random() * 5);
$(document).ready(function(){
	// $("#secret-text").text(funfacts[random]);
	// $("#fun-fact").show();

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 35) {
	   		$(window).unbind('scroll');
	    	// $("#secret-text").delay(2000).fadeIn(1000);
	    	$("#and-javascript").delay(9001).fadeIn(1000);
		}
	});
});

