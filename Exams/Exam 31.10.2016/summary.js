function summarize(selector) {

  let container = $(selector);

  $('#generate').click(() => {

    let summary = $('<div id="summary">')
    let h2 = $("<h2>Summary</h2>");
    let p = $('<p>')
    let result = ''

    $("strong").each((iterator, element) => {
      result += element.textContent;
    });

    p.text(result);
    h2.appendTo(summary);
    p.appendTo(summary);
    summary.appendTo(selector);
  })
}