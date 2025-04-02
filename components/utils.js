// ----Profile section
const profileInfo = document.querySelector(".profile__info");
const profilePopup = document.querySelector(".profile__popup");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const formInputName = profilePopup.querySelector(".form__input_type_name");
const formInputAboutme = profilePopup.querySelector(".form__input_type_about");
const buttonEditProfile = profileInfo.querySelector(".button_type_edit");
const profilePopupForm = document.querySelector(".profile__form");
// ----- Elements section
const elementsPopupForm = document.querySelector(".elements__form");
const buttonAddCard = document.querySelector(".button_type_add");
const elementsPopup = document.querySelector(".elements__popup");

//-----Card

import Card from "./Card.js";

function handleAddCard(evt) {
  const formInputPlaceName = elementsPopup.querySelector(
    ".form__input_type_name"
  );
  const formInputLink = elementsPopup.querySelector(".form__input_type_about");
  const newPlace = { name: formInputPlaceName.value, src: formInputLink.value };
  const newCard = new Card(newPlace, ".elements__card-template");
  newCard.addCard();
  evt.preventDefault();
  closePopup();
}

//------ popups

// function handleOpenPopupProfile() {
//   profilePopup.classList.add("popup_opened");
// }

function handleOpenPopupAddCard() {
  elementsPopup.classList.add("popup_opened");
  elementsPopupForm.reset();
}

// function closePopup(popupElement) {
//   const popupList = Array.from(document.querySelectorAll(".popup"));
//   popupList.forEach((popupElement) => {
//     popupElement.classList.remove("popup_opened");
//   });
// }

// function checkOverlaySpace(evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup();
//   }
// }

function handleEditProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutMe.textContent = formInputAboutme.value;
  closePopup();
}

function setOverlayClosePopup() {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((openPopup) => {
    openPopup.addEventListener("click", (evt) => {
      checkOverlaySpace(evt);
    });
  });
}

function setClosePopupButton() {
  const closePopupButtonList = Array.from(
    document.querySelectorAll(".button_type_close")
  );

  closePopupButtonList.forEach((closePopupButton) => {
    closePopupButton.addEventListener("click", (evt) => {
      closePopup(closePopupButton);
    });
  });
}

// ----- Botones y eventos

// buttonEditProfile.addEventListener("click", handleOpenPopupProfile);
profilePopupForm.addEventListener("submit", handleEditProfileInfo);

buttonAddCard.addEventListener("click", handleOpenPopupAddCard);
elementsPopupForm.addEventListener("submit", handleAddCard);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
});

export { setClosePopupButton, setOverlayClosePopup };
