function tableBuilder(selector) {
    let container = $(selector);

    function createTable(columnNames){

        container.empty();
        let table = $('<table>');
        let tableRow = $('<tr>');
        
        for (const column of columnNames) {
            let tableHeader = $(`<th>`);
            tableHeader.text(column);
            tableRow.append(tableHeader)
        }

        tableRow.append(`<th>Action</th>`)
        table.append(tableRow);
        container.append(table);
    }

    function fillData(dataRows){
     let table = $(`${selector} table`);

     for (const dataRow of dataRows) {
         let tableRow = $('<tr>')
         for (const data of dataRow) {
             let td = $('<td>');
             td.text(data);
             tableRow.append(td);
         }
         let delBtn  = $('<td><button>Delete</button></td>');

         delBtn.on('click',function(){
             this.parentNode.remove();
         })
         tableRow.append(delBtn);
         table.append(tableRow);
     }
    }

    return{
        createTable,
        fillData
    }

}