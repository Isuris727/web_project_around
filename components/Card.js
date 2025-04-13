export default class Card {
  constructor(cardData, templateSelector) {
    this._src = cardData.link;
    this._name = cardData.name;
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
  }

  _deleteCard() {
    // this.card.remove();
    // es necesario cambiar la funcion a solo eliminar cuando el usuario confirme
  }

  _likeCard() {
    if (this._buttonLikeCard.classList.contains("button_type_like_inactive")) {
      this._buttonLikeCard.classList.remove("button_type_like_inactive");
      this._buttonLikeCard.classList.add("button_type_like_active");
      this._buttonLikeCard.src = "./../images/Vector_like_active.png";
    } else {
      this._buttonLikeCard.classList.add("button_type_like_inactive");
      this._buttonLikeCard.classList.remove("button_type_like_active");
      this._buttonLikeCard.src = "./../images/Vector_like_inactive.png";
    }
  }

  _setDeleteButtonCard() {
    const buttonDeleteCard = this.card.querySelector(".button_type_delete");

    buttonDeleteCard.addEventListener("click", () => {
      const cardToDelete = buttonDeleteCard.closest(".card");
      this._deleteCard(cardToDelete);
    });
  }
  _setLikeCardButton() {
    this._buttonLikeCard.addEventListener("click", () => this._likeCard());
  }

  addCard() {
    this._createCard();
    this._setDeleteButtonCard();
    this._setLikeCardButton();
    return this.card;
  }
}
