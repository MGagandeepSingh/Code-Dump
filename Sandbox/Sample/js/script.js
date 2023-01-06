$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('darkHeader');
    } else {
        $('header').removeClass('darkHeader');
    }
});