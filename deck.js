class Deck {
  constructor(cardArray) {
    this.cards = cardArray;
    this.matchedCards = cardArray.matchedInfo;
    this.selectedCards = [];
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

  addSelected(selectedId) {
    selectedId--;
    if (this.selectedCards.length < 2) {
      this.selectedCards.push(this.cards[selectedId]);
      this.cards[selectedId].toggleSelected();
    }
    if (this.selectedCards.length === 2) {
      this.checkSelectedCards()
      };
    console.log("selectedCards", this.selectedCards);
    // for (var i = 0; i < this.cards.length; i++){
    //   if (this.cards[i].cardid == selectedId){
    //     card = this.cards[i];
    //   }

  };

  removeSelected(selectedId) {
    selectedId--;
    if (this.selectedCards[0].cardId === selectedId + 1){
    this.cards[selectedId].toggleSelected();
    this.selectedCards.shift();
  } else if (this.selectedCards[1].cardId === selectedId + 1){
    this.cards[selectedId].toggleSelected();
    this.selectedCards.pop();
  }
    console.log('selectedCards', this.selectedCards);
  };

  checkSelectedCards() {
    //take each selected card and run isMatched()
    if (this.selectedCards[0].matchedInfo === this.selectedCards[1].matchedInfo) {
      this.selectedCards[0].match();
      this.selectedCards[1].match();
      this.moveToMatched();
      this.selectedCards =[];
    }
    console.log('matchedArray', this.matchedArray);
    console.log(this.cards);
    return
  };

  moveToMatched() {
    this.matchedArray.push(this.selectedCards[0]);
    this.matchedArray.push(this.selectedCards[1]);

    //take matched pairs out of array
    //place matched pair into found matches area
  };
}
