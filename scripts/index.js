const profileInfo = document.querySelector(".profile__info");
const profilePopup = document.querySelector(".profile__popup");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const buttonEditProfile = profileInfo.querySelector(".button_type_edit");
const buttonClosePopup = profilePopup.querySelector(".button_type_close");
const buttonAddCard = document.querySelector(".button_type_add");
const formPopup = profilePopup.querySelector(".form");
const formInputName = profilePopup.querySelector(".form__input_type_name");
const formInputAboutme = profilePopup.querySelector(
  ".form__input_type_about-me"
);
const elementsCards = document.querySelector(".elements__cards");
const cardTemplate = document.querySelector(".elements__card-template");
const initialCardsData = [
  { name: "Lago di Braies", src: "./images/image-lago-di-braies.png" },
  { name: "Lago louise", src: "./images/image_lago-louise.png" },
  { name: "Latemar", src: "./images/image-latemar.png" },
  { name: "Montañas Calvas", src: "./images/image_montanas-calvas.png" },
  {
    name: "Parque Nacional Vanois",
    src: "./images/image_vanois-national-park.png",
  },
  { name: "Valle de Yosemite", src: "./images/image_yosemite-valley.png" },
];

function handleOpenPopup() {
  profilePopup.classList.add("profile__popup_opened");
}

function closePopup() {
  profilePopup.classList.remove("profile__popup_opened");
}

function handleEditProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileAboutMe.textContent = formInputAboutme.value;
  closePopup();
}

function createCard(name, src) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImg = card.querySelector(".card__img");
  const cardName = card.querySelector(".card__name");
  const buttonDeleteCard = card.querySelector(".button_type_delete");
  const buttonLikeCard = card.querySelector(".button_type_like");

  cardImg.src = src;
  cardName.textContent = name;

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

  elementsCards.prepend(card);
  buttonDeleteCard.addEventListener("click", deleteCard);
  buttonLikeCard.addEventListener("click", likeCard);
}

buttonEditProfile.addEventListener("click", handleOpenPopup);
buttonClosePopup.addEventListener("click", function () {
  closePopup();
});

buttonAddCard.addEventListener("click", function () {
  createCard();
});

formPopup.addEventListener("submit", handleEditProfileInfo);

createCard(initialCardsData[0].name, initialCardsData[0].src);
createCard(initialCardsData[1].name, initialCardsData[1].src);
createCard(initialCardsData[2].name, initialCardsData[2].src);
createCard(initialCardsData[3].name, initialCardsData[3].src);
createCard(initialCardsData[4].name, initialCardsData[4].src);
createCard(initialCardsData[5].name, initialCardsData[5].src);
