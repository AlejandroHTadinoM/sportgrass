menuBtn.click(function () {
    menuContainer.toggle('slow', function () {
        $(this).css({
            'left' : 0
        })
    });
    console.log('click');
});