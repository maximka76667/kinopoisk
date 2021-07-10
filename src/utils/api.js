class Api {
  constructor({ baseUrl, authorization }) {
    this._baseUrl = baseUrl;
    this._token = authorization;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  searchFilmsByName(title) {
    return fetch(`${this._baseUrl}?apikey=${this._token}&s=${title}`)
    .then(this._checkResponse)
  }

  getFilmByID(id) {
    return fetch(`${this._baseUrl}?apikey=${this._token}&i=${id}`)
    .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'http://www.omdbapi.com/',
  authorization: '333826fc'
});

export default api;