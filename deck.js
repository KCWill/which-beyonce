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

    while(--i > 0){ //i decrements by one until the 0 index
      j = Math.floor(Math.random() * (i+1)); //generates random number
      temp = cardArray[j]; //plugs random number into index position in array
      cardArray[j] = cardArray[i]; //reassigns random index value with current index position in loop
      cardArray[i] = temp; //reassigns index position's value in loop to random index value
    }
    return cardArray
  };

  addSelected(cardLoc) {
    this.selectedCards.push(this.cards[cardLoc]);
    console.log('addSelectedMethod', this.selectedCards);
  };

  // removeSelected() {
  //   this.selectedCards = [];
  //   var cardIndex = this.selectedCards.indexOf(selectedId);
  //   this.cards[selectedId-1].toggleSelected();
  //   this.selectedCards.splice(cardIndex,1);
  //   console.log('remove bug', this.selectedCards);
  // };

  checkSelectedCards() {
    if (this.selectedCards[0].matchedInfo === this.selectedCards[1].matchedInfo) {
      this.selectedCards[0].match();
      this.selectedCards[1].match();
      this.moveToMatched();
      console.log('selectedCardsArray',this.selectedCards);
    };
      console.log('selectedCardsArrayAfter',this.selectedCards);
  };

  moveToMatched() {
    this.matchedArray.push(this.selectedCards[0]);
    this.matchedArray.push(this.selectedCards[1]);
    console.log('matchedArray', this.matchedArray);
  };
}
