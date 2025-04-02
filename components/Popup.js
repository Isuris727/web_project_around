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
  setEventListeners(buttonSelector, action) {
    // revisar si funciona ponerlo para varios botones o mejor especificar solo para cerrar y otro para submit
    this.button = document.querySelector(buttonSelector);
    this.action = action;
    this.button.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.action;
    });
  }
}
