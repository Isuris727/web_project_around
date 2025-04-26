export default class Card {
  constructor(cardData, templateSelector) {
    this._src = cardData.link;
    this._name = cardData.name;
    this._id = cardData._id;
    this.isLiked = cardData.isLiked;
    this._cardTemplate = document.querySelector(templateSelector);
    this.card = this._cardTemplate
      .cloneNode(true)
      .content.querySelector(".card");
    this._buttonLikeCard = this.card.querySelector(".button_type_like");
  }
  _createCard() {
    const cardImg = this.card.querySelector(".card__img");
    const cardName = this.card.querySelector(".card__name");

    cardImg.src = this._src;
    cardImg.alt = this._name;
    cardName.textContent = this._name;
    this.card.id = this._id;
    console.log(this._id);
  }

  _deleteCard() {
    this.card.remove();
  }

  _likeCard() {
    this.isLiked = !this.isLiked;
    this._buttonLikeCard.classList.toggle("button_type_like_inactive");
    this._buttonLikeCard.classList.toggle("button_type_like_active");
  }

  _likeCardState() {
    this.isLiked
      ? this._buttonLikeCard.classList.add("button_type_like_active")
      : this._buttonLikeCard.classList.add("button_type_like_inactive");
  }

  _setLikeCardButton() {
    this._buttonLikeCard.addEventListener("click", () => this._likeCard());
  }

  addCard() {
    this._createCard();
    this._likeCardState();
    this._setLikeCardButton();
    return this.card;
  }
}
