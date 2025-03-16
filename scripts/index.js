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

//------- Funciones

function handleOpenPopupProfile() {
  profilePopup.classList.add("popup_opened");
}

function handleOpenPopupAddCard() {
  elementsPopup.classList.add("popup_opened");
  elementsPopupForm.reset();
}

function closePopup(popupElement) {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((popupElement) => {
    popupElement.classList.remove("popup_opened");
  });
}

function checkOverlaySpace(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

function handleEditProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutMe.textContent = formInputAboutme.value;
  closePopup();
}

function handleAddCard(evt) {
  createCard(formInputPlaceName.value, formInputLink.value);
  evt.preventDefault();
  closePopup();
}

function createCard(name, src) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImg = card.querySelector(".card__img");
  const cardName = card.querySelector(".card__name");

  cardImg.src = src;
  cardName.textContent = name;

  elementsCards.prepend(card);
}

function deleteCard(cardToDelete) {
  cardToDelete.remove();
}

function setDeleteButtonCard() {
  const buttonDeleteCardList = Array.from(
    document.querySelectorAll(".button_type_delete")
  );

  buttonDeleteCardList.forEach((deleteCardButton) => {
    deleteCardButton.addEventListener("click", (evt) => {
      const cardToDelete = evt.currentTarget.closest(".card");
      deleteCard(cardToDelete);
    });
  });
}

// function card(name, src) {
//   const card = cardTemplate.cloneNode(true).content.querySelector(".card");
//   const cardImg = card.querySelector(".card__img");
//   const cardName = card.querySelector(".card__name");
//   const buttonDeleteCard = card.querySelector(".button_type_delete");
//   const buttonLikeCard = card.querySelector(".button_type_like");
//   const cardPopup = card.querySelector(".card__popup");
//   const popupImg = cardPopup.querySelector(".popup__img");
//   const popupCardName = cardPopup.querySelector(".popup__card-name");
//   const buttonClosePopupImage = cardPopup.querySelector(".button_type_close");

//   cardImg.src = src;
//   cardName.textContent = name;

//   popupImg.src = src;
//   popupCardName.textContent = name;

//   function deleteCard() {
//     const cardToDelete = buttonDeleteCard.closest(".card");
//     cardToDelete.remove();
//   }

//   function likeCard() {
//     if (buttonLikeCard.classList.contains("button_type_like_inactive")) {
//       buttonLikeCard.classList.remove("button_type_like_inactive");
//       buttonLikeCard.classList.add("button_type_like_active");
//       buttonLikeCard.src = "./images/Vector_like_active.png";
//     } else {
//       buttonLikeCard.classList.add("button_type_like_inactive");
//       buttonLikeCard.classList.remove("button_type_like_active");
//       buttonLikeCard.src = "./images/Vector_like_inactive.png";
//     }
//   }

//   function handleOpenCardImg() {
//     cardPopup.classList.add("popup_opened");
//   }

//   function closeCardImg() {
//     cardPopup.classList.remove("popup_opened");
//   }

//   elementsCards.prepend(card);
//   buttonDeleteCard.addEventListener("click", () => deleteCard());
//   buttonLikeCard.addEventListener("click", () => likeCard());
//   // buttonClosePopupImage.addEventListener("click", () => closeCardImg()); <<<---
//   cardImg.addEventListener("click", handleOpenCardImg);
//   // cardPopup.addEventListener("click", () => checkOverlaySpace);
// }

// ----- Botones y eventos

buttonEditProfile.addEventListener("click", handleOpenPopupProfile);
profilePopupForm.addEventListener("submit", handleEditProfileInfo);

buttonAddCard.addEventListener("click", handleOpenPopupAddCard);
elementsPopupForm.addEventListener("submit", handleAddCard);

buttonCloseProfilePopup.addEventListener("click", () => closePopup());
buttonCloseAddCardPopup.addEventListener("click", () => closePopup());

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
});

profilePopup.addEventListener("click", (evt) => {
  checkOverlaySpace(evt);
});

elementsPopup.addEventListener("click", (evt) => {
  checkOverlaySpace(evt);
});

// ----- Valores iniciales

createCard(initialCardsData[0].name, initialCardsData[0].src);
createCard(initialCardsData[1].name, initialCardsData[1].src);
createCard(initialCardsData[2].name, initialCardsData[2].src);
createCard(initialCardsData[3].name, initialCardsData[3].src);
createCard(initialCardsData[4].name, initialCardsData[4].src);
createCard(initialCardsData[5].name, initialCardsData[5].src);

setDeleteButtonCard();
