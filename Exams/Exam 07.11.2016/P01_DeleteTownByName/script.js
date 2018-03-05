function attachEvents() {

  let options = $('option');
  let button = $('#btnDelete');
  let input = $('#townName');
  let result = $('#result')

  button.click(function () {
    let removed = false;

    options.each((iterator, option) => {

      if (option.textContent === input.val()) {
        option.remove();
        removed = true;
      }

    });

    !removed ? result.text(`${input.val()} not found.`) : result.text(`${input.val()} deleted.`);

    input.val('');
  })
}