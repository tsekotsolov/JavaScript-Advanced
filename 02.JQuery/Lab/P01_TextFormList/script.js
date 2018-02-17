function extractText() {
  
 $('#result').append($('li').toArray().map(a=>a.textContent).join(', '));
}



