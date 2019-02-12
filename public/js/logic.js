$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        console.log(res);
        console.log(res[0].productname);
        $(res).each(function (i) {
            console.log(res[i].productname);
            let productName = res[i].productname;
            console.log(res[i].department);
            let departmentName = res[i].department;
            console.log(res[i].price);
            console.log(res[i].stockquantity);
            console.log(res[i]._id);
            let cardDiv = $('<div>', {
                class: 'card text-center',
                html: cardHeader
            });
            let cardHead = $('<div>', {
                class: 'card-header',
                text: productName,
                appendTo: cardDiv
            });
            let cardBody = $('<div>', {
                class: 'card-body',
                appendTo: cardHead
            });
            let cardTitle = $('<h5>', {
                class: 'card-title',
                text: departmentName,
                appendTo: cardBody
            });
            let cardText = $('<p>', {
                class: "card-text",
                text: description,
                appendTo: cardBody
            });
            let buttonLink = $('<a>', {
                href: '#',
                class: 'btn btn-primary',
                text: "Add To Cart",
                appendTo: cardBody
            });
            $('.card-div').append(cardDiv);
        });
    });
})