$(function () {
    $('.bc-home').text('Home'); //logic for breadcrumb
    //GET All Products on page load
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (res) {
        let closeText = '<span aria-hidden="true">&times;</span>';
        let userQuantity = `<div class="form-row align-items-center">
        <div class="col-auto my-1">
          <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>`
        //loop through get request to database
        $(res).each(function (i) {
            //declaring variables from ajax response to add dynamic 
            //names/ values, etc to elements
            let productName = res[i].productname;         
            let departmentName = res[i].department;     
            let price = res[i].price;         
            let stockQuantity = res[i].stockquantity;     
            let productId = res[i].id;         
            let imgUrl = res[i].imgurl;        
            let itemDescription = res[i].description;
            let itemSize = res[i].size;

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
            let selectBox = $('<div>', {
                class: 'd-flex justify-content-center',
                html: userQuantity,
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
                
                appendTo: cardDiv
            });
            $('.card-div-all').append(cardDiv);
        });

    });

});