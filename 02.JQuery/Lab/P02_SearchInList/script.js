function search() {
    let userInput = $('#searchText').val();
    let listOfLis = $('ul#towns li').toArray();
    let matches = 0;

    for (const li of listOfLis) {
        if (li.textContent.includes(userInput)) {
            $(li).css('font-weight','bold');
            matches++;
        }
        else{
            $(li).css('font-weight','');
        }
    }
    $('#result').text(`${matches} mathes found`)
}