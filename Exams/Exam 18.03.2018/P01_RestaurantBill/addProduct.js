function addProduct() {
    let product = $('#add-product input').val();
    let price = Number($('#add-product input').toArray()[1].value);

    let tableBody = $('#product-list');

    let tableRow = $('<tr>')
    let productNameTd = $('<td>').text(product);
    let productPriceTd = $('<td>').text(price);


    if (product != '' & price != '') {
        tableRow.append(productNameTd).append(productPriceTd);
        tableBody.append(tableRow);

        let allTdWithPrices = $('#product-list tr td:last-child');
        let sum = 0;

        for (const price of allTdWithPrices.toArray()) {
            sum += Number(price.textContent);
        }
        let total = $('tfoot tr td:last-child').text(sum);
    }

    $('#add-product input').val('');
}