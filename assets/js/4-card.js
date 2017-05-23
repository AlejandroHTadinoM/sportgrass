function cardHeight () {
	var heights = $(".height").map(function() {		        
			return $(this).height();		   
		})
	.get(),
	maxHeight = Math.max.apply(null, heights);
	$(".height").height(maxHeight);
};
$(window).resize(cardHeight());