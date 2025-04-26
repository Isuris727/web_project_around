// ----- importaciones
import Section from "../../components/Section.js";
import Card from "../../components/Card.js";
import PopupWithForm from "../../components/PopupWithForm.js";
import PopupWithImage from "../../components/PopupWithImage.js";
import FormValidator from "../../components/FormValidator.js";
import PopupWithConfirmation from "../../components/PopupWithConfirmation.js";
import UserInfo from "../../components/UserInfo.js";
import Api from "../../components/Api.js";
import {
  buttonEditProfile,
  buttonAddCard,
  buttonEditAvatar,
} from "../../components/utils.js";

//-----

const api = new Api("https://around-api.es.tripleten-services.com/v1/");

const userData = api.getUserInfo().then((data) => userInfo.getUserInfo(data));

const addedCards = api.getCardsData().then(function (data) {
  const dataOrdered = data.reverse();
  dataOrdered.forEach((item) => {
    cardSection.addItem(createNewCard(item));
  });
});
// ------- clases

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileAboutSelector: ".profile__about-me",
  profileAvatarSelector: ".profile__img",
});

const profilePopup = new PopupWithForm(".profile__popup", () => {
  const newProfileInfo = profilePopup._getInputValues();
  api.updateUserInfo(newProfileInfo);
  userInfo.setUserInfo(newProfileInfo);
});

const addCardPopup = new PopupWithForm(".elements__popup", () => {
  const infoNewCard = addCardPopup._getInputValues();
  api
    .addCardData(infoNewCard)
    .then((data) => cardSection.addItem(createNewCard(data)));
});

const editAvatarPopup = new PopupWithForm(".profile__img-popup", () => {
  const newAvatarLink = editAvatarPopup._getSingleInputValue();
  api.changeAvatar(newAvatarLink);
  userInfo.setProfileAvatar(newAvatarLink);
});

const cardSection = new Section(
  {
    items: addedCards,
    renderer: (item) => {
      cardSection.addItem(createNewCard(item));
    },
  },
  ".elements__cards"
);

const createNewCard = (data) => {
  return new Card(data, ".elements__card-template").addCard();
};

const confirmDeleteCardPopup = new PopupWithConfirmation(
  ".card__popup_type_confirm"
);

// ------- Eventos y funciones

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__img")) {
    const imagePopup = new PopupWithImage(".card__popup");
    imagePopup.openPopup(evt.target);
    imagePopup.setEventListeners();
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("button_type_delete")) {
    confirmDeleteCardPopup.openPopup();
    confirmDeleteCardPopup.handleConfirmation(function () {
      const cardToDelete = evt.target.closest(".card");
      api.deleteCard(cardToDelete.id);
      cardToDelete.remove();
      confirmDeleteCardPopup.closePopup();
    });
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("button_type_like")) {
    const cardSelected = evt.target.closest(".card");
    console.log(cardSelected);
    evt.target.classList.contains("button_type_like_active")
      ? api.likeCard(cardSelected.id)
      : api.dislikeCard(cardSelected.id);
  }
});

buttonEditProfile.addEventListener("click", () => {
  profilePopup.openPopup("Guardar");
});
buttonAddCard.addEventListener("click", () => {
  addCardPopup.openPopup("Crear");
});

buttonEditAvatar.addEventListener("click", () => {
  editAvatarPopup.openPopup("Guardar");
});

// ------

profilePopup.setEventListeners();
addCardPopup.setEventListeners();
editAvatarPopup.setEventListeners();
confirmDeleteCardPopup.setEventListeners();

//----
const profileForm = document.forms.profileForm.elements;
const addPlaceForm = document.forms.addPlaceForm.elements;
const EditAvatarForm = document.forms.editAvatarForm.elements;

//------- validaciones

const validateProfileForm = new FormValidator(profileForm, ".profile__form");
const validateAddPlaceForm = new FormValidator(addPlaceForm, ".elements__form");
const validateEditAvatarForm = new FormValidator(
  EditAvatarForm,
  ".profile__form_edit_avatar"
);

validateProfileForm.enableValidation();
validateAddPlaceForm.enableValidation();
validateEditAvatarForm.enableValidation();

// -------- pruebas
