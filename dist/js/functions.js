// cache DOM elements
var
// Grass section --------------------
	grassSection = $('.section-grass'),
	grass = grassSection.find('img'),
	grassSecH = grassSection.height(),
	grassH = grass.height(),

	// Slider section --------------------
	sliderContainer = $('.slider-container'),
	slides = sliderContainer.find('.slides'),
	slide = slides.find('.slide'),
	slideImg = slide.find('img');

	navBar = $('.header-bar'),
	navPos = navBar.offset().top,
	$('.wrapper').height(navBar.height()),

	menu = $('.menu'),
	closeMenu = menu.find('#close'),
	openMenu = navBar.find('#open-icon'),

	// Parallax section --------------------
	product = $('.product'),
	service = $('.service'),
	service1 = product.find('#service1'),
	service2 = product.find('#service2'),
	service3 = product.find('#service3'),
	service4 = product.find('#service4'),
	service5 = product.find('#service5'),
	service6 = product.find('#service6'),
	service7 = product.find('#service7'),
	service8 = product.find('#service8');

// settings for slider
var
	cSlide = 0,
	timer;
	animSpeed = 800;

// parallax elements
var
	wScroll,
	steep = 4;

function resizeImg () {
	slide.width(sliderContainer.width());
	slide.height(sliderContainer.height());
	slideImg.width(sliderContainer.width());
	slideImg.height(sliderContainer.height());
	slides.width(sliderContainer.width() * slide.length);
};
$(window).resize(function () {
	resizeImg();
});
resizeImg();
function startSlider () {
	timer = setInterval(function () {
		slides.animate({
			'margin-left' : '-=' + sliderContainer.width()
		}, animSpeed, function () {
			cSlide++;
			if (cSlide === slide.length) {
				cSlide = 1;
				slides.css({
					'margin-left' : 0
				});
			};
		}
	)}, 3000);
};
function stopSlider () {
	clearInterval(timer);
};
sliderContainer.mouseenter(stopSlider).mouseleave(startSlider);
startSlider();
grass.css({
	'transform' : 'translate(0, ' + ((grassSecH / 2) - (grassH)) + 'px)'
});
function cardHeight () {
	var heights = $(".height").map(function() {		        
			return $(this).height();		   
		})
	.get(),
	maxHeight = Math.max.apply(null, heights);
	$(".height").height(maxHeight);
};
$(window).resize(cardHeight());
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
navBar.wrap('<div class="wrapper"></div>');

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
openMenu.click(function () {
	menu.css({
		'transform' : 'translateX(0%)'
	});
});
closeMenu.click(function () {
	menu.css({
		'transform' : 'translateX(-100%)'
	});
});