function findImg1 (e) {

	img1 = e.find('.service-img-1');

	return img1;

};

function findImg2 (e) {

	img2 = e.find('.service-img-2');

	return img2;
	
};

function findPos (e) {

	pos = e.css('top');

	return pos;

}

function parallax (e, s) {

	s = s || 0;

	fScroll = (wScroll - e.offset().top);

	img1 = findImg1(e);

	img2 = findImg2(e);

	img1.css({

		'top' : -(fScroll / steep)

	});

	img2.css({

		'top' : -((fScroll / steep) + s)

	});

};

$(window).scroll(function () {

	wScroll = $(this).scrollTop();

	if (service.length) {

		if (wScroll < (service1.offset().top)) {

			parallax(service1, 140);

		};

		if (wScroll < (service2.offset().top)) {

			parallax(service2, 140);

		};

		if (wScroll < (service3.offset().top)) {

			parallax(service3, 140);

		};

		if (wScroll < (service3.offset().top)) {

			parallax(service3, 140);

		};

		if (wScroll < (service4.offset().top)) {

			parallax(service4, 140);

		};

		if (wScroll < (service5.offset().top)) {

			parallax(service5, 140);

		};

		if (wScroll < (service6.offset().top)) {

			parallax(service6, 140);

		};

		if (wScroll < (service7.offset().top)) {

			parallax(service7, 140);

		};

		if (wScroll < (service8.offset().top)) {

			parallax(service8, 140);

		};

	}

	if (wScroll > navPos) {

		navBar.addClass('stk');

	} else {

		navBar.removeClass('stk');

	};

});