import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleActionConfirmation, item) {
    super(popupSelector);
    this._handleActionConfirmation = handleActionConfirmation;
    this._item = item;
  }
}
