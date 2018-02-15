function create(sentences) {

  let contentDiv = document.getElementById('content');

  let newDiv = null;
  let newParagraph = null;

  for (const sentance of sentences) {

    newDiv = document.createElement('div');
    newParagraph = document.createElement('p');
    newParagraph.textContent = sentance;
    newParagraph.style.display = 'none';
    newDiv.appendChild(newParagraph);
    contentDiv.appendChild(newDiv);
    newDiv.addEventListener('click', action)

  }

  function action(event) {
    this.children[0].style.display = 'block';
  }

}