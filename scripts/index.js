// ----Profile section
const profileInfo = document.querySelector(".profile__info");
const profilePopup = document.querySelector(".profile__popup");

const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const formInputName = profilePopup.querySelector(".form__input_type_name");
const formInputAboutme = profilePopup.querySelector(".form__input_type_about");
const buttonEditProfile = profileInfo.querySelector(".button_type_edit");
const buttonCloseProfilePopup =
  profilePopup.querySelector(".button_type_close");
const profilePopupForm = document.querySelector(".profile__form");
// ----- Elements section
const elementsCards = document.querySelector(".elements__cards");
const elementsPopup = document.querySelector(".elements__popup");
const cardTemplate = document.querySelector(".elements__card-template");
const formInputPlaceName = elementsPopup.querySelector(
  ".form__input_type_name"
);
const buttonCloseAddCardPopup =
  elementsPopup.querySelector(".button_type_close");
const formInputLink = elementsPopup.querySelector(".form__input_type_about");
const buttonAddCard = document.querySelector(".button_type_add");
const elementsPopupForm = document.querySelector(".elements__form");

// ----- General
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

function handleOpenPopupProfile() {
  profilePopup.classList.add("popup_opened");
}

function closePopupProfile() {
  profilePopup.classList.remove("popup_opened");
}

function handleOpenPopupAddCard() {
  elementsPopup.classList.add("popup_opened");
  elementsPopupForm.reset();
}

function closePopupAddCard() {
  elementsPopup.classList.remove("popup_opened");
}

function closePopupImage() {
  cardPopup.classList.remove("popup_opened");
}

function handleEditProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutMe.textContent = formInputAboutme.value;
  closePopupProfile();
}

function handleAddCard(evt) {
  card(formInputPlaceName.value, formInputLink.value);
  evt.preventDefault();
  closePopupAddCard();
}

function card(name, src) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImg = card.querySelector(".card__img");
  const cardName = card.querySelector(".card__name");
  const buttonDeleteCard = card.querySelector(".button_type_delete");
  const buttonLikeCard = card.querySelector(".button_type_like");
  const cardPopup = card.querySelector(".card__popup");
  const popupImg = cardPopup.querySelector(".popup__img");
  const popupCardName = cardPopup.querySelector(".popup__card-name");
  const buttonClosePopupImage = cardPopup.querySelector(".button_type_close");

  cardImg.src = src;
  cardImg.alt = name;
  cardName.textContent = name;

  popupImg.src = src;
  popupImg.alt = name;
  popupCardName.textContent = name;

  function deleteCard() {
    const cardToDelete = buttonDeleteCard.closest(".card");
    cardToDelete.remove();
  }

  function likeCard() {
    if (buttonLikeCard.classList.contains("button_type_like_inactive")) {
      buttonLikeCard.classList.remove("button_type_like_inactive");
      buttonLikeCard.classList.add("button_type_like_active");
      buttonLikeCard.src = "./images/Vector_like_active.png";
    } else {
      buttonLikeCard.classList.add("button_type_like_inactive");
      buttonLikeCard.classList.remove("button_type_like_active");
      buttonLikeCard.src = "./images/Vector_like_inactive.png";
    }
  }

  function handleOpenCardImg() {
    cardPopup.classList.add("popup_opened");
  }

  function closeCardImg() {
    cardPopup.classList.remove("popup_opened");
  }

  elementsCards.prepend(card);
  buttonDeleteCard.addEventListener("click", () => deleteCard());
  buttonLikeCard.addEventListener("click", () => likeCard());
  buttonClosePopupImage.addEventListener("click", () => closeCardImg());
  cardImg.addEventListener("click", handleOpenCardImg);
}

// ----- Botones

buttonEditProfile.addEventListener("click", handleOpenPopupProfile);
profilePopupForm.addEventListener("submit", handleEditProfileInfo);

buttonAddCard.addEventListener("click", handleOpenPopupAddCard);
elementsPopupForm.addEventListener("submit", handleAddCard);

buttonCloseProfilePopup.addEventListener("click", () => closePopupProfile());
buttonCloseAddCardPopup.addEventListener("click", () => closePopupAddCard());

// ----- Valores iniciales

card(initialCardsData[0].name, initialCardsData[0].src);
card(initialCardsData[1].name, initialCardsData[1].src);
card(initialCardsData[2].name, initialCardsData[2].src);
card(initialCardsData[3].name, initialCardsData[3].src);
card(initialCardsData[4].name, initialCardsData[4].src);
card(initialCardsData[5].name, initialCardsData[5].src);
