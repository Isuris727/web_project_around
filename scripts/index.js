let profileInfo = document.querySelector(".profile__info");
let profilePopup = document.querySelector(".profile__popup");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about-me");
let buttonEditProfile = profileInfo.querySelector(".button_type_edit");
let buttonClosePopup = profilePopup.querySelector(".button_type_close");
let formPopup = profilePopup.querySelector(".form");
let buttonSubmitForm = formPopup.querySelector(".button_type_submit");

function handleOpenPopup() {
  profilePopup.classList.add("profile__popup_opened");
}

function closePopup() {
  profilePopup.classList.remove("profile__popup_opened");
}

buttonEditProfile.addEventListener("click", handleOpenPopup);
buttonClosePopup.addEventListener("click", closePopup);
