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
const initialCardsData = [{ name: "", src: "" }];

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
  const buttonlikeCard = card.querySelectorAll(".button_type_like");

  cardImg.src = src;
  cardName.textContent = name;

  console.log("aqui esta la carta");

  elementsCards.prepend(card);
}

function likeCard() {}

function deleteCard() {}

buttonEditProfile.addEventListener("click", handleOpenPopup);
buttonClosePopup.addEventListener("click", function () {
  closePopup();
});

// buttonAddCard.addEventListener("Click", function () {
//   createCard();
// });

formPopup.addEventListener("submit", handleEditProfileInfo);

createCard();
