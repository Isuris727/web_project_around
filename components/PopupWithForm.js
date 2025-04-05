import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._formInputName = this._popupForm.querySelector(
      ".form__input_type_name"
    );
    this._formInputAbout = this._popupForm.querySelector(
      ".form__input_type_about"
    );

    // ------- Prueba
    // console.log(this._popupForm.elements);
    // console.log(`Input name ->`, this._formInputName);
    // console.log(`Input about ->`, this._formInputAbout);
    // -----------------
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.closePopup();
    });
  }
}
