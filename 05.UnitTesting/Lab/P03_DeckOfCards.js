function printDeckOfCards(cards) {

  function createCard(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let validSuits = {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663'
    }

    if (!validFaces.includes(face)) {

      throw new Error("Invalid card face: " + face);
    }

    if (!validSuits.hasOwnProperty(suit)) {

      throw new Error("Invalid card suit: " + suit);
    }

    let card = {
      face,
      suit,
      toString: function () {
        return face + validSuits[suit];
      }
    }

    return card;

  }

  let deck = [];
  for (let cardStr of cards) {
    let face = cardStr.substring(0, cardStr.length - 1);
    let suit = cardStr.substr(cardStr.length - 1, 1);
    try {
      deck.push(createCard(face, suit));
    } catch (err) {
      console.log("Invalid card: " + cardStr);
      return;
    }
  }
  console.log(deck.join(' '));

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);