if ($('.product').offset()) {
	function containerPos (e) {
		pos = (e.offset().top - (e.height()) / 2);
		return pos;
	};

	$(window).scroll(function () {
		wScroll = $(this).scrollTop();

		if (wScroll >= containerPos(service1)) {
			service1.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service2)) {
			service2.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service3)) {
			service3.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service4)) {
			service4.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service5)) {
			service5.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service6)) {
			service6.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service7)) {
			service7.addClass('fadeIn');
		};

		if (wScroll >= containerPos(service8)) {
			service8.addClass('fadeIn');
		};

	});
};