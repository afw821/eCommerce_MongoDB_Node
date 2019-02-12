$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        console.log(res);
    });
})