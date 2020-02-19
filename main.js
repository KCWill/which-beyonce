function startGame() {
  var card1 = new Card(1, 1);
  var card2 = new Card(2, 1);
  var card3 = new Card(3, 2);
  var card4 = new Card(4, 2);
  var card5 = new Card(5, 3);
  var card6 = new Card(6, 3);
  var card7 = new Card(7, 4);
  var card8 = new Card(8, 4);
  var card9 = new Card(9, 5);
  var card10 = new Card(10, 5);

  var cardArray = [
    card1, card2, card3, card4, card5, card6, card7, card8, card9, card10
  ];

  var deck1 = new Deck(cardArray);

  for (var i=0; i<cardArray.length; i++){
    document.querySelector('.game-section').innerHTML += `<div class='guessing-cards'><p>${cardArray[i].cardId}</p></div>`;
  }
}

var gameSection = document.querySelector('game-section');
