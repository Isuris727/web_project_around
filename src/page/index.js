// ----- importaciones
import Section from "../../components/Section.js";
import Card from "../../components/Card.js";
import Popup from "../../components/Popup.js";
import FormValidator from "../../components/FormValidator.js";
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

const profilePopup = new Popup(".profile__popup");
const addCardPopup = new Popup(".elements__popup");

buttonEditProfile.addEventListener("click", () => {
  profilePopup.openPopup();
});

buttonAddCard.addEventListener("click", () => {
  addCardPopup.openPopup();
});

profilePopup.setEventListener();
addCardPopup.setEventListener();

const newCard = (data) => {
  return new Card(data, ".elements__card-template").addCard();
};

//-----

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
