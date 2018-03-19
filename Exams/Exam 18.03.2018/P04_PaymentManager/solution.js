class PaymentManager {
    constructor(title) {
        this.title = title;
        this.table = this.createTable();
    }

    render(id) {
        $(`#${id}`).append(this.table);
    }

    createTable() {

        let table = $(`<table>
        <caption>${this.title} Payment Manager</caption>
        <thead>
            <tr>
                <th class="name">Name</th>
                <th class="category">Category</th>
                <th class="price">Price</th>
                <th>Actions</th>
            </tr>
       </thead>
        <tbody class="payments">
        </tbody>
    </table>	
    `)
        let tableFooter = $('<tfoot >')
            .addClass('input-data')
            .append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('name', 'name')
                        .attr('type', 'text')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('name', 'category')
                        .attr('type', 'text')))
                .append($('<td>')
                    .append($('<input>')
                        .attr('name', 'price')
                        .attr('type', 'number')))
                .append($('<td>')
                    .append($('<button>')
                        .on('click', this.generateRow)
                        .text('Add'))));
        table.append(tableFooter);
        return table;
    }

    generateRow() {
        let name = $(this).parent().parent().find('input[name=\'name\']');
        let category = $(this).parent().parent().find('input[name=\'category\']');
        let price = $(this).parent().parent().find('input[name=\'price\']');

        if (name.val() === '' || category.val() === '' || price.val() === '' || isNaN(price.val())) return;

        let tr = $('<tr>')
            .append($('<td>').text(name.val()).attr('type', 'text'))
            .append($('<td>').text(category.val()).attr('type', 'text'))
            .append($('<td>').text(Number(price.val())).attr('type', 'number'))
            .append($('<td>')
                .append($('<button>')
                    .on('click', function () {
                        $(this).parent().parent().remove();
                    })
                    .text('Delete')));

        let currentTable = $(this)
            .parent()
            .parent()
            .parent()
            .parent().parent().find('tbody');

        currentTable.append(tr);
        name.val('');
        category.val('');
        price.val('');

        return currentTable;
    }
}