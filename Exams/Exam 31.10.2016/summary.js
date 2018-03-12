function summarize(selector) {

  $(selector).click(() => {

    let strongContent = $('#content').find('strong').text();

    let summary = $(
    `<div id="summary"> 
    <h2>Summary</h2> 
    <p>${strongContent}</p>
    </div>`);

    $('#content').append(summary);
  });
}