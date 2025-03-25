export default class FormValidator {
  constructor(settings, formSelector) {
    this.formElement = document.querySelector(formSelector);
    this.settings = settings;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("button_inactive");
    } else {
      buttonElement.classList.remove("button_inactive");
    }
  }

  _setEventListeners(formElement) {
    const buttonElement = this.formElement.querySelector(".button_type_submit");

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this.formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(this.formElement);
  }
}

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
