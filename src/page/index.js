// ----- importaciones
import Section from "../../components/Section.js";
import Card from "../../components/Card.js";
// import Popup from "../../components/Popup.js";
import PopupWithForm from "../../components/PopupWithForm.js";
import PopupWithImage from "../../components/PopupWithImage.js";
import FormValidator from "../../components/FormValidator.js";
import UserInfo from "../../components/UserInfo.js";
import { buttonEditProfile, buttonAddCard } from "../../components/utils.js";

// ----- Valores iniciales

const initialCardsData = [
  { name: "Lago di Braies", src: "./../images/image-lago-di-braies.jpg" },
  { name: "Lago louise", src: "./../images/image_lago-louise.jpg" },
  { name: "Latemar", src: "./../images/image-latemar.jpg" },
  { name: "Montañas Calvas", src: "./../images/image_montanas-calvas.jpg" },
  {
    name: "Parque Nacional Vanois",
    src: "./../images/image_vanois-national-park.jpg",
  },
  { name: "Valle de Yosemite", src: "./../images/image_yosemite-valley.jpg" },
];

const profilePopup = new PopupWithForm(".profile__popup", () => {
  evt.preventDefault();
  // _handleFormSubmit();
  closePopup();
});
const addCardPopup = new PopupWithForm(".elements__popup");

// const imagePopup = new PopupWithImage(".card__popup");

buttonEditProfile.addEventListener("click", () => {
  profilePopup.openPopup();
});

buttonAddCard.addEventListener("click", () => {
  addCardPopup.openPopup();
});

profilePopup._getInputValues();
addCardPopup._getInputValues();

profilePopup.setEventListeners();
addCardPopup.setEventListeners();

const newCard = (data) => {
  return new Card(data, ".elements__card-template").addCard();
};

//-----

const userInfo = new UserInfo({
  profileNameSelector: ".profile__name",
  profileAboutSelector: ".profile__about-me",
});

const cardSection = new Section(
  {
    items: initialCardsData,
    renderer: (item) => {
      cardSection.addItem(newCard(item));
    },
  },
  ".elements__cards"
);

cardSection.renderItems(initialCardsData);

//----
const profileForm = document.forms.profileForm.elements;
const addPlaceForm = document.forms.addPlaceForm.elements;

//------- validaciones

const validateProfileForm = new FormValidator(profileForm, ".profile__form");
const validateAddPlaceForm = new FormValidator(addPlaceForm, ".elements__form");

validateProfileForm.enableValidation();
validateAddPlaceForm.enableValidation();

// -------- pruebas

const elementSelected = document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__img")) {
    const imagePopup = new PopupWithImage(".card__popup");
    imagePopup.openPopup(evt.target);
    imagePopup.setEventListeners();
  }
});

elementSelected;

// document.addEventListener("click", (evt) => {
//   console.log(`evt.target en document add event listener -->`, evt.target);
// });

// console.log(`imagePopup (ln91) --> `, imagePopup);
// console.log(`imagePopup.open (ln92) --> `, imagePopup.open(elementSelected));
// console.log(`UserInfo.getUserInfo(ln93) --> `, userInfo.getUserInfo());
