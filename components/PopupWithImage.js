import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
  }

  openPopup(item) {
    super.openPopup();
    const itemSelected = item.parentNode;
    const itemName = itemSelected.querySelector(".card__name");
    const popupImg = this._popup.querySelector(".popup__img");
    const popupCardName = this._popup.querySelector(".popup__card-name");
    popupImg.src = item.src;
    popupImg.alt = item.name;
    popupCardName.textContent = itemName.textContent;
  }
}
