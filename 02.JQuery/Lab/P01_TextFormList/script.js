function extractText() {
 $('#result').append(
   $('li')
    .toArray()
    .map(li=>li.textContent)
    .join(', '));
}



