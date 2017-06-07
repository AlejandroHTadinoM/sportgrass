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