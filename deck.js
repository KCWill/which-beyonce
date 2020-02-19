class Deck {
	constructor(cardArray) {
	this.cards = cardArray;
	this.matchedCards = cardArray.matchedInfo;
	// this.selectedCards = selectedCards;
  this.matchedArray = [];
	}
	shuffle() {
	//Creates a new array each time its ran
  // var display = document.querySelector('.place-holder-card');
  // var button = document.querySelector('.play-buttons');
  // button.addEventListener('click', random);
  // function random(){
  // var randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
  // return display.innerHTML = randomItem
};
	checkSelectedCards(select1, select2) {
	//take each selected card and run isMatched()
  if (select1.matchedInfo === select2.matchedInfo) {
    select1.match();
    select2.match();
    this.movetoMatched(select1, select2);
    }
	}
	moveToMatched(select1, select2) {
    this.matchedArray.push(select1);
    this.matchedArray.push(select2);
	//take matched pairs out of array
	//place matched pair into found matches area
	}
}
