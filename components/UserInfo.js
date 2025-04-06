export default class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileAboutSelector);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
    };
  }

  setUserInfo(values) {
    this._profileName.textContent = values.name;
    this._profileAbout.textContent = values.src;
  }
}
