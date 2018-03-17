function move(direction) {

  let selectedElement = $('#towns').find(':selected');

  if (direction === -1) {
    selectedElement.first().prev().before(selectedElement)
  } else {
    selectedElement.last().next().after(selectedElement);

  }
}