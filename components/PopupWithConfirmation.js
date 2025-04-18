import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector(".button_type_submit");
  }
  handleConfirmation(confirmation) {
    this._confirmButton.addEventListener("click", confirmation);
  }
}
