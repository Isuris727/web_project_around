export default class Card {
  constructor(cardData, templateSelector) {
    this._src = cardData.src;
    this._name = cardData.name;
    this._cardTemplate = document.querySelector(templateSelector);
    this.card = this._cardTemplate
      .cloneNode(true)
      .content.querySelector(".card");
    this._cardImg = this.card.querySelector(".card__img");
    this._buttonLikeCard = this.card.querySelector(".button_type_like");
    this._cardPopup = this.card.querySelector(".card__popup");
  }
  _createCard(cardData) {
    const elementsCards = document.querySelector(".elements__cards");
    const cardImg = this.card.querySelector(".card__img");
    const cardName = this.card.querySelector(".card__name");

    cardImg.src = this._src;
    cardImg.alt = this._name;
    cardName.textContent = this._name;

    elementsCards.prepend(this.card);
  }

  _deleteCard() {
    this.card.remove();
  }

  _likeCard() {
    if (this._buttonLikeCard.classList.contains("button_type_like_inactive")) {
      this._buttonLikeCard.classList.remove("button_type_like_inactive");
      this._buttonLikeCard.classList.add("button_type_like_active");
      this._buttonLikeCard.src = "./images/Vector_like_active.png";
    } else {
      this._buttonLikeCard.classList.add("button_type_like_inactive");
      this._buttonLikeCard.classList.remove("button_type_like_active");
      this._buttonLikeCard.src = "./images/Vector_like_inactive.png";
    }
  }

  _openCardImg() {
    const popupImg = this._cardPopup.querySelector(".popup__img");
    const popupCardName = this._cardPopup.querySelector(".popup__card-name");

    popupImg.src = this._src;
    popupImg.alt = this._name;
    popupCardName.textContent = this._name;
  }
  _closeCardImg() {
    cardPopup.classList.remove("popup_opened");
  }

  _handleOpenCardImg() {
    this._cardImg.addEventListener("click", () => {
      this._cardPopup.classList.add("popup_opened");
      this._openCardImg(this._cardPopup);
    });
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
    this._handleOpenCardImg();
  }
}
