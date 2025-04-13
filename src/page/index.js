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

// ------- clases

const api = new Api("https://around-api.es.tripleten-services.com/v1/");

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileAboutSelector: ".profile__about-me",
  profileAvatarSelector: ".profile__img",
});

const userData = api.getUserInfo().then((data) => userInfo.getUserInfo(data));

const profilePopup = new PopupWithForm(".profile__popup", () => {
  const newProfileInfo = profilePopup._getInputValues();
  userInfo.setUserInfo(newProfileInfo);
  api.updateUserInfo(newProfileInfo);
});

const addCardPopup = new PopupWithForm(".elements__popup", () => {
  const infoNewCard = addCardPopup._getInputValues();
  cardSection.addItem(createNewCard(infoNewCard));
});

const editAvatarPopup = new PopupWithForm(".profile__img-popup", () => {
  console.log("cambiar imagen");
});

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
buttonEditProfile.addEventListener("click", () => {
  profilePopup.openPopup();
});
buttonAddCard.addEventListener("click", () => {
  addCardPopup.openPopup();
});

buttonEditAvatar.addEventListener("click", () => {
  editAvatarPopup.openPopup();
});

const createNewCard = (data) => {
  return new Card(data, ".elements__card-template").addCard();
};

// ------

const cards = api.getCardsData().then(function (data) {
  const cardSection = new Section(
    {
      items: data,
      renderer: (item) => {
        cardSection.addItem(createNewCard(item));
      },
    },
    ".elements__cards"
  );
  cardSection.renderItems();
});

//-----
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
