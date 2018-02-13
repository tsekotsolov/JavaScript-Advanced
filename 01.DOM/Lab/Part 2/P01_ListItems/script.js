function addItem() {

    let userInput = document.getElementById('newItemText').value;
    if (userInput != '') {
        let listItem = document.createElement('li');
        listItem.textContent = userInput;
        document.getElementById('items').appendChild(listItem);
        document.getElementById('newItemText').value = '';
    }

}