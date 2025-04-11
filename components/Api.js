export default class Api {
  constructor(url) {
    this.url = url;
  }

  _fetchData(endpoint, requestMethod, body) {
    return fetch(`${this.url}${endpoint}`, {
      method: requestMethod,
      headers: {
        authorization: "94c8a629-44c5-4556-b294-d569e5d5ac14",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => (response.ok ? response.json() : response.reject()));
  }

  getCardsData() {
    return this._fetchData("cards/");
  }
  getUserInfo() {
    return this._fetchData("users/me");
  }

  updateUserInfo(newProfileInfo) {
    return this._fetchData("users/me", "PATCH", newProfileInfo);
  }
}
