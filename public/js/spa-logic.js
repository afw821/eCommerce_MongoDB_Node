//When fishing button is clicked the jumbotron is hidden and the products show up (all of them just for now)
$('.all-products').on('click', function (e) {
    e.preventDefault();
    $('.jumbotron').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.card-div-all').fadeIn(750, function () {
        return;
    });
});

//When home button is clicked products hide and jumbotron shows

$('.home-button').on('click', function (e) {
    e.preventDefault();
    $('.card-div-all').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.card-div-fishing').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.card-div-hunting').fadeOut(250, function () {
        $(this).addClass('hide');
    });
    $('.jumbotron').fadeIn(750, function () {
        return;
    });
   
});