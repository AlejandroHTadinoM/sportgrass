figure.click(function () {
	showModal($(this).find('img'));
	modal.click(function () {
		closeModal($(this));
	});
});

modal.click(closeModal($(this)));

function showModal(img) {
	var imgSrc = img.data('image');
	console.log(imgSrc);
	modal.fadeIn('slow', function () {
		modalImg.attr('src', imgSrc);
	});
};

function closeModal (e) {
	e.fadeOut();
};