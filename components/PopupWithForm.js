import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._submitFormButton = this._popupForm.querySelector(
      ".button_type_submit"
    );
  }

  _getSingleInputValue() {
    this._formInputName = this._popupForm.querySelector(
      ".form__input_type_name"
    );
    return {
      avatar: this._formInputName.value,
    };
  }

  _getInputValues() {
    this._formInputName = this._popupForm.querySelector(
      ".form__input_type_name"
    );
    this._formInputAbout = this._popupForm.querySelector(
      ".form__input_type_about"
    );
    return {
      name: this._formInputName.value,
      about: this._formInputAbout.value,
      link: this._formInputAbout.value,
    };
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
