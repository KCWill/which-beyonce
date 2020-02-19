class Card {
  constructor(cardId, matchedInfo) {
    this.cardId = cardId;
    this.matchedInfo = matchedInfo;
    this.matched= false;
  }
  match() {
    this.matched = true;
  }
}
