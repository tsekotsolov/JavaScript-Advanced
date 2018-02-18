function search() {
    let userInput = $('#searchText').val();
    let liContent = $('ul#towns li').toArray();
    let matches = 0;

    for (const item of liContent) {
        if (item.textContent.includes(userInput)) {
            $(item).css('font-weight','bold');
            matches++;
        }
        else{
            $(item).css('font-weight','');
        }
    }
    $('#result').text(`${matches} mathes found`)
}