figure.click(function () {
	console.log($(this).attr('id'));
	showModal($(this), $(this).find('img'));
	modal.click(function () {
		closeModal($(this));
	});
});

modal.click(closeModal($(this)));

function showModal(e, img) {
	var imgSrc = img.attr('src');
	console.log(imgSrc);
	modal.fadeIn('slow', function () {
		modalImg.attr('src', imgSrc);
	});
};

function closeModal (e) {
	e.fadeOut();
};