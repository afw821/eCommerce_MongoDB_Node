$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        console.log(res);
        console.log(res[0].productname);
        let closeText = '<span aria-hidden="true">&times;</span>';
        $(res).each(function (i) {
            console.log(res[i].productname);
            let productName = res[i].productname;
            console.log(res[i].department);
            let departmentName = res[i].department;
            console.log(res[i].price);
            let price = res[i].price;
            console.log(res[i].stockquantity);
            let stockQuantity = res[i].stockquantity;
            console.log(res[i]._id);
            let productId = res[i].id;
            console.log(res[i].imgurl);
            let imgUrl = res[i].imgurl;
            console.log(res[i].description);
            let itemDescription = res[i].description;
            let itemSize = res[i].size;
            console.log(itemSize);
            let cardDiv = $('<div>', {
                class: 'card text-center card-margin',
                'data-productid': productId

            });
            let cardHead = $('<div>', {
                class: 'card-header',
                value: productName,
                text: productName,
                appendTo: cardDiv
            });
            let cardBody = $('<div>', {
                class: 'card-body',
                appendTo: cardDiv
            });
            let cardImage = $('<img>', {
                class: 'item-image',
                src: imgUrl,
                appendTo: cardBody
            });
            let closeButton = $('<button>', {
                type: 'button',
                class: 'close',
                id: productId,
                'arial-label': 'Close',
                click: function (e) {
                    e.preventDefault();

                    $(this).parent().parent().fadeOut(250, function () {
                        return;
                    });
                },
                appendTo: cardBody,
                html: closeText
            })
            let cardTitle = $('<h5>', {
                class: 'card-title',
                text: departmentName,
                appendTo: cardBody
            });
            let cardText = $('<p>', {
                class: "card-text",
                text: itemDescription,
                appendTo: cardBody
            });
            let buttonLink = $('<a>', {
                href: '#',
                class: 'btn btn-primary',
                text: "Add To Cart",
                appendTo: cardBody
            });

            let cardFooter = $('<div>', {
                class: "card-footer text-muted",
                text: "2 Days ago",
                appendTo: cardDiv
            });
            $('.card-div').append(cardDiv);
        });

    });
})