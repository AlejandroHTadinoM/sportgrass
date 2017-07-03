// cache DOM elements
var
// Slider section --------------------
	sliderContainer = $('.slider-container'),
	slides = sliderContainer.find('.slides'),
	slide = slides.find('.slide'),
	slideImg = slide.find('img');

// Parallax effect --------------------
	product = $('.product'),
	service1 = product.find('#service1'),
	service2 = product.find('#service2'),
	service3 = product.find('#service3'),
	service4 = product.find('#service4'),
	service5 = product.find('#service5'),
	service6 = product.find('#service6'),
	service7 = product.find('#service7'),
	service8 = product.find('#service8'),

// Modal --------------------
	gallery = $('.gallery'),
	figure = gallery.find('figure'),
	modal = $('.modal'),
	modalImg = $('.modal-img'),

// Menu --------------------
	menuBtn = $('.btn'),
	menuContainer = $('.header-menu'),
	menu = menuContainer.find('.container');

// settings for slider
var
	cSlide = 0,
	timer;
	animSpeed = 800;

// parallax elements
var
	wScroll,
	steep = 4;