if ($('.gallery')) {

	figure.click(function () {

		showModal($(this).find('img'));

		modal.click(function () {
			closeModal($(this));
		});

	});

	function showModal(img) {
		var imgSrc = img.data('image');

		$('body').css({
			'overflow' : 'hidden'
		});

		modal.fadeIn('slow', function () {
			modalImg.attr('src', imgSrc);
		});
	};

	function closeModal (e) {
		e.fadeOut();

		$('body').css({
			'overflow' : 'scroll'
		});
		
	};
}
