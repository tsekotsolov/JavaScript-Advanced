function attachEvents() {
  $('.button').click(clicked);

  function clicked() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');

  }
}