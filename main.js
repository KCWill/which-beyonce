var gameSection = document.querySelector('.game-section');
var container = document.getElementById('container');
var allCards = document.querySelectorAll(`[data-cardid~=""]`);
var matchCountNum = document.querySelector('.match-counter-number');
var timerDisplay = document.querySelector('#total-time')
var gamePage = document.querySelector('.game-page');
var winPage = document.querySelector('.win-page');
var start;
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
  // findElapsedTime('start');
  start = Date.now();
  for (var i=0; i<cardArray.length; i++){
  var pictureUrl = getPictureUrl(cardArray[i].matchedInfo);
    document.querySelector('.game-section').innerHTML += `
    <div class='card-container'>
      <div class='the-card'>
        <div class='guessing-cards front' data-cardid='${cardArray[i].cardId}' data-matchedInfo='${cardArray[i].matchedInfo}' data-matched='${cardArray[i].matched}'>
          KW
        </div>
        <div class='guessing-cards back' data-cardid='${cardArray[i].cardId}' data-matchedInfo='${cardArray[i].matchedInfo}' data-matched='${cardArray[i].matched}' style='background-image: url("${pictureUrl}");' >
          ${cardArray[i].cardId}
        </div>
      </div>
    </div>`;
  };
};

function getPictureUrl(num){
  switch(num){
    case 1:
      return "./kyleimages/cat.png";
      console.log('one');
      break;
    case 2:
      return "./kyleimages/download.jpeg";
      console.log('two');
      break;
    case 3:
      return "./kyleimages/kitten2.jpg";
      console.log('three');
      break;
    case 4:
      return "./kyleimages/kitten3.jpg";
      console.log('four');
      break;
    case 5:
      return "./kyleimages/kitten4.jpeg";
      console.log('five');
      break;
    default:
      console.log('aint no numbers here yo');
  }
}

function updateCounter(){
  matchCountNum.innerHTML = (deck1.matchedArray.length/2);
  if (deck1.matchedArray.length === 10){
    setTimeout(function() {endGame()},1500);
  };
};

function endGame(){
  findElapsedTime();
  gamePage.classList.add('hidePage');
  winPage.classList.remove('hidePage');
}

function findElapsedTime(){
  var elapsedTime = Date.now()-start;
  var minutes = Math.floor((elapsedTime/1000)/60);
  var seconds = (elapsedTime/1000)%60;
  if (seconds < 10){
    timerDisplay.innerHTML = `${minutes}:0${seconds.toFixed(2)}`;
  } else {
  var formatTime =
  timerDisplay.innerHTML = `${minutes}:${seconds.toFixed(2)}`;
};
}
// function findElapsedTime(startStop){
//   if (startStop === 'start'){
//     start = Date.now();
//   } else if (startStop === 'end'){
//     var elapsedTime = Date.now() - start;
//     timerDisplay.innerHTML = elapsedTime;
//   };
// };

container.onclick = function flipCard(event) {
  var closest = event.target.closest('.the-card');
  var currentSelected = event.target.dataset.cardid;
  if (deck1.selectedCards.length < 2) {
    closest.classList.toggle('flip');
    grabCards();
    hideMatched();
  // } else if (deck1.cards[currentSelected - 1].isSelected === true){
  //     deck1.removeSelected(currentSelected);
  //     closest.classList.toggle('flip');
  }
}

function grabCards(){
  var currentSelected = event.target.dataset.cardid;
  console.log("currentSelected", currentSelected);
  if (deck1.cards[currentSelected - 1].isSelected === false){
    deck1.addSelected(currentSelected);
  // } else if (deck1.cards[currentSelected - 1].isSelected === true){
  //   deck1.removeSelected(currentSelected);
  }
}

function autoFlip() {
  console.log('AutoFlip');
  if (deck1.selectedCards.length == 2) {
    var flipDelay = window.setTimeout(flipClass, 1000)
  }
}

function flipClass() {
  var selected1 = deck1.selectedCards[0].cardId;
  var selected2 = deck1.selectedCards[1].cardId;
  console.log(selected1, selected2);
  var referenceDiv = document.querySelector('.game-section').childNodes;
  console.log(referenceDiv);
  // var selectedLoc1 = deck1.cards[selected1]; //Change later
  // var selectedLoc2 = deck1.cards.indexOf(selected2);

  // console.log(selectedLoc1, selectedLoc2);
  var divSelector1 = (2 * selected1) - 1;
  var divSelector2 = (2 * selected2) - 1;
  var div1 = referenceDiv[divSelector1].children;
  div1[0].classList.toggle('flip');
  var div2 = referenceDiv[divSelector2].children;
  div2[0].classList.toggle('flip');
  console.log(referenceDiv);
  deck1.selectedCards = [];
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
    // console.log('nodes',c)
    c[childSelector].classList.add('hide');
    }
    addMatchedImage();
    updateCounter();
}

var matchedCardDisplayArray;

function addMatchedImage(){
  matchedCardDisplayArray = [];
  for (var i = 0; i < deck1.matchedArray.length; i = i+ 2){
  (matchedCardDisplayArray.push(deck1.matchedArray[i].matchedInfo));
  console.log('matched display', matchedCardDisplayArray)
  };
  completedMatches(matchedCardDisplayArray);
}

function completedMatches(arr) {
  var completed1 = document.querySelector('#completed-1');
  var completed2 = document.querySelector('#completed-2');
  var completed3 = document.querySelector('#completed-3');
  var completed4 = document.querySelector('#completed-4');
  var completed5 = document.querySelector('#completed-5');
  var completedMatchesArray = [completed1, completed2, completed3, completed4, completed5];

  for (var i = 0; i < arr.length; i++) {
    var pictureUrl = getPictureUrl(arr[i]);
    completedMatchesArray[i].style= `background-image:url("${pictureUrl}"); background-position: center bottom;background-size: cover;`;
    console.log(completedMatchesArray[i]);
  }

  // completed1.innerHTML = matchedCardDisplayArray[0] || '';
  // completed2.innerHTML = matchedCardDisplayArray[1] || '';
  // completed3.innerHTML = matchedCardDisplayArray[2] || '';
  // completed4.innerHTML = matchedCardDisplayArray[3] || '';
  // completed5.innerHTML = matchedCardDisplayArray[4] || '';
}




//go through matched array
//find matchedInfo (every other)
//insert matchedInfo into empty div


//   container.onclick = function pushSelected(event) {
//     var selected = event.target.closest('.data-cardid');
//     var selectedId = selected.id
//     selectedCards.push(selectedId);
// }
