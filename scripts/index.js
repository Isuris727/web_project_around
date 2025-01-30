let profileInfo = document.querySelector(".profile__info");
let profilePopup = document.querySelector(".profile__popup");
let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__about-me");
let buttonEditProfile = profileInfo.querySelector(".button_type_edit");
let buttonClosePopup = profilePopup.querySelector(".button_type_close");
let formPopup = profilePopup.querySelector(".form");
let formInputName = profilePopup.querySelector(".form__input_type_name");
let formInputAboutme = profilePopup.querySelector(".form__input_type_about-me");
let buttonSubmitForm = formPopup.querySelector(".button_type_submit");

function handleOpenPopup() {
  profilePopup.classList.add("profile__popup_opened");
  console.log("popup abierto");
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

buttonEditProfile.addEventListener("click", handleOpenPopup);
buttonClosePopup.addEventListener("click", function () {
  closePopup();
  console.log("popup cerrado con closepopup");
});

buttonSubmitForm.addEventListener("submit", handleEditProfileInfo);
