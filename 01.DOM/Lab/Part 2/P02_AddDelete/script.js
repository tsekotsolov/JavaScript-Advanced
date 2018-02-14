function addItem() {

    let userInputData = document.getElementById('newText');

if (userInputData.value!='') {
    let parentUl = document.getElementById('items');
    let newListItem = document.createElement('li');
    newListItem.innerHTML = `${userInputData.value} <a href = "#">[Delete]</a>`;
    parentUl.appendChild(newListItem);
    newListItem.children[0].addEventListener('click', deleteItem)
    userInputData.value='';
}

    function deleteItem() {
        
      this.parentNode.parentNode.removeChild(this.parentNode)
    }
}