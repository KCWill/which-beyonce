var gameSection = document.querySelector('.game-section');
var container = document.getElementById('container');
var allCards = document.querySelectorAll(`[data-cardid~=""]`);
var matchCountNum = document.querySelector('.match-counter-number');

//initialize counter
matchCountNum.innerHTML = 0;

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

function startGame() {
  for (var i=0; i<cardArray.length; i++){
    document.querySelector('.game-section').innerHTML += `
    <div class='card-container'>
      <div class='the-card'>
        <div class='guessing-cards front' data-cardid='${cardArray[i].cardId}' data-matchedInfo='${cardArray[i].matchedInfo}' data-matched='${cardArray[i].matched}'>
          KW
        </div>
        <div class='guessing-cards back' data-cardid='${cardArray[i].cardId}' data-matchedInfo='${cardArray[i].matchedInfo}' data-matched='${cardArray[i].matched}'>
          ${cardArray[i].cardId}
        </div>
      </div>
    </div>`;
  }
  return cardArray;
}

function updateCounter(){
  matchCountNum.innerHTML = (deck1.matchedArray.length/2);
}

container.onclick = function flipCard(event) {
  var closest = event.target.closest('.the-card');
  var currentSelected = event.target.dataset.cardid;
  if (deck1.selectedCards.length < 2) {
    closest.classList.toggle('flip');
    grabCards();
    hideMatched();
  } else if (deck1.cards[currentSelected - 1].isSelected === true){
      deck1.removeSelected(currentSelected);
      closest.classList.toggle('flip');
  }
}

function grabCards(){
  var currentSelected = event.target.dataset.cardid;
  console.log("currentSelected", currentSelected);
  if (deck1.cards[currentSelected - 1].isSelected === false){
    deck1.addSelected(currentSelected);
  } else if (deck1.cards[currentSelected - 1].isSelected === true){
    deck1.removeSelected(currentSelected);
  }
}

function hideMatched(){
  var idArray =[];
  for (var i = 0; i < deck1.matchedArray.length; i++){
    // console.log('match', deck1.matchedArray);
    idArray.push(deck1.matchedArray[i].cardId);
    // console.log('ids', idArray);
    var c = document.querySelector('.game-section').childNodes;
    childSelector = (2*idArray[i])-1;
    // console.log('CS',childSelector);
    console.log('nodes',c)
    c[childSelector].classList.add('hide');
    }
    updateCounter();
}



//   container.onclick = function pushSelected(event) {
//     var selected = event.target.closest('.data-cardid');
//     var selectedId = selected.id
//     selectedCards.push(selectedId);
// }
