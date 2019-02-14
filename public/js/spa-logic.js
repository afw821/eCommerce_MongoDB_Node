//When fishing button is clicked the jumbotron is hidden and the products show up (all of them just for now)
$('.fishing').on('click', function (e) {
    e.preventDefault();
    $('.jumbotron').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.card-div').fadeIn(750, function () {
        return;
    });
});

//When home button is clicked products hide and jumbotron shows

$('.home-button').on('click', function (e) {
    e.preventDefault();
    $('.card-div').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.jumbotron').fadeIn(750, function () {
        return;
    });
   
});