class Card {
  constructor(cardId, matchedInfo) {
    this.cardId = cardId;
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.selected = false;
  }
  match() {
    this.matched = true;
  }
  pushSelected(){
    this.selected = !this.selected;
  }
}
