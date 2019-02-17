
$('.login').on('click', function(e) {
    e.preventDefault();
    $('.register-jumbotron').fadeOut(250, function() {
        $(this).addClass('hide');
    });

    $('.login-jumbotron').fadeIn(250, function () {
        $(this).removeClass('hide');
    });
});