function move(command) {

    let aTownsList = $('#available-towns');
    let sTownsList = $('#selected-towns');
    let outputDiv = $('#output');

    if (command === 'right') {
        sTownsList.append(aTownsList.find(':selected'))
    } else if (command === 'left') {
        aTownsList.append(sTownsList.find(':selected'))
    } else {
        
        outputDiv.empty();

        let allTowns = sTownsList
        .find('option')
        .toArray()
        .map(el => el.textContent)
        .join('; ');

        outputDiv.append(allTowns);
    }
}