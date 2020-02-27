class Card {
  constructor(cardId, matchedInfo) {
    this.cardId = cardId;
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.isSelected = false;
  }
  match() {
    this.matched = true;
  }
}
