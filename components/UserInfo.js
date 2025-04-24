export default class UserInfo {
  constructor({
    profileNameSelector,
    profileAboutSelector,
    profileAvatarSelector,
  }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileAboutSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }
  getUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileAbout.textContent = userData.about;
    this._profileAvatar.src = userData.avatar;
  }

  setUserInfo(values) {
    this._profileName.textContent = values.name;
    this._profileAbout.textContent = values.about;
  }

  setProfileAvatar(value) {
    this._profileAvatar.src = value.avatar;
  }
}
