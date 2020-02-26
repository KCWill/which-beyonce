class Deck {
  constructor(cardArray) {
    this.cards = cardArray;
    this.matchedCards = cardArray.matchedInfo;
    this.selectedCards = [];
    this.matchedArray = [];
  }
  shuffle(cardArray) {
    var i = cardArray.length;
    var j; //random number
    var temp; //random index position

    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = cardArray[j];
      cardArray[j] = cardArray[i];
      cardArray[i] = temp;
    }
    return cardArray
  };

  addSelected(cardLoc) {
    this.selectedCards.push(this.cards[cardLoc]);
  };


  checkSelectedCards() {
    if (this.selectedCards[0].matchedInfo === this.selectedCards[1].matchedInfo) {
      this.selectedCards[0].match();
      this.selectedCards[1].match();
      this.moveToMatched();
    };
  };

  moveToMatched() {
    this.matchedArray.push(this.selectedCards[0]);
    this.matchedArray.push(this.selectedCards[1]);
  };
}
