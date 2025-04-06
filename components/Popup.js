export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    });
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
  }
  closePopup() {
    this._popup.classList.remove("popup_opened");
  }
  setEventListeners() {
    this._popup
      .querySelector(".button_type_close")
      .addEventListener("click", (evt) => {
        this.closePopup();
      });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.closePopup();
      }
    });
    this._handleEscClose();
  }
}
