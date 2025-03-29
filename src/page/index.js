// ----- importaciones
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { setClosePopupButton, setOverlayClosePopup } from "./utils.js";

// ----- Valores iniciales

const initialCardsData = [
  { name: "Lago di Braies", src: "./images/image-lago-di-braies.jpg" },
  { name: "Lago louise", src: "./images/image_lago-louise.jpg" },
  { name: "Latemar", src: "./images/image-latemar.jpg" },
  { name: "Montañas Calvas", src: "./images/image_montanas-calvas.jpg" },
  {
    name: "Parque Nacional Vanois",
    src: "./images/image_vanois-national-park.jpg",
  },
  { name: "Valle de Yosemite", src: "./images/image_yosemite-valley.jpg" },
];

const profileForm = document.forms.profileForm.elements;
const addPlaceForm = document.forms.addPlaceForm.elements;

const initialCard1 = new Card(initialCardsData[0], ".elements__card-template");
const initialCard2 = new Card(initialCardsData[1], ".elements__card-template");
const initialCard3 = new Card(initialCardsData[2], ".elements__card-template");
const initialCard4 = new Card(initialCardsData[3], ".elements__card-template");
const initialCard5 = new Card(initialCardsData[4], ".elements__card-template");
const initialCard6 = new Card(initialCardsData[5], ".elements__card-template");

initialCard1.addCard();
initialCard2.addCard();
initialCard3.addCard();
initialCard4.addCard();
initialCard5.addCard();
initialCard6.addCard();

setClosePopupButton();
setOverlayClosePopup();

//------- validaciones

const validateProfileForm = new FormValidator(profileForm, ".profile__form");
const validateAddPlaceForm = new FormValidator(addPlaceForm, ".elements__form");

validateProfileForm.enableValidation();
validateAddPlaceForm.enableValidation();
