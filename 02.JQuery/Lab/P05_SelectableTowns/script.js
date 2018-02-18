function attachEvents() {
  $('#items').find('li').click(select);
  $('#showTownsButton').click(printTowns);
8
  function select() {

    if ($(this).attr('data-selected')) {
      $(this).css('background-color', '')
      $(this).removeAttr('data-selected');

    } else {
      $(this).css('background-color', '#ddd');
      $(this).attr('data-selected', true);
    }

  }

  function printTowns() {
    
    let selectedTowns = $('li[data-selected]').toArray().map(li=>li.textContent).join(', ');
    
    $('#selectedTowns').text(`Selected towns: ${selectedTowns}`)

  }

}