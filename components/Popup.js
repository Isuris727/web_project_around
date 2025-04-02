export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _handleEscClose() {
    if (evt.key === "Escape") {
      this.closePopup();
      // verificar si hay que agregar el _popup para que funcione
    }
  }
  _checkOverlaySpace(evt) {
    if (evt.target === evt.currentTarget) {
      this._popup.closePopup();
      // verificar que funcione
    }
  }
  openPopup() {
    this._popup.classList.add("popup_opened");
  }
  closePopup() {
    this._popup.classList.remove("popup_opened");
  }
  setEventListener() {
    this._popup
      .querySelector(".button_type_close")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this.closePopup();
      });
  }
}
