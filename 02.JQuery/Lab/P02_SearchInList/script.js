function search() {
    let userInput = $('#searchText').val();
    let liContent = $('ul#towns li').toArray();
    let matches = 0;
    
    for (const item of liContent) {

        if (item.textContent.indexOf(userInput) !== -1) {
            item.style.fontWeight = "bold";
            matches++;
        }
        else{
            item.style.fontWeight = "";
        }
    }

    $('#result').text(`${matches} mathes found`)
}