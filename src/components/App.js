import React from 'react'
import api from '../utils/api'

function App(props) {

  const [title, setTitle] = React.useState('');
  const [films, setFilms] = React.useState([]);
  const [activeID, setActiveID] = React.useState('');
  const [filmInfo, setFilmInfo] = React.useState({});
  const [filmDetails, setFilmDetails] = React.useState({});

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const currentYear = new Date().getFullYear();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    api.searchFilmsByName(title)
    .then(res => {
      setFilms(res.Search);
      console.log(res.Search);
    })
    .catch((err) => console.log(err))
  }

  function handleCardClick(film) {
    if(film.imdbID !== activeID) {
      setActiveID(film.imdbID);
      setFilmInfo(film);
      api.getFilmByID(film.imdbID)
      .then((res) => {
        setFilmDetails(res);
        setIsPopupOpen(true);
      })
    } else {
      setIsPopupOpen(true);
    }
  }

  function handleCardClose() {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>KinoPoisk</h1>
      </header>
      <main>
        <form onSubmit={handleSearch}>
          <input id="title" value={title} onChange={handleChange} required />
          <button type="submit">Поиск</button>
        </form>
        <div className="films">
          {
            films.map((film) => {
              return (
                <div key={film.imdbID} onClick={() => handleCardClick(film)}>
                  <img src={film.Poster} alt={film.Title} />
                  <p>{film.Title} {film.Year}</p>
                </div>
              )
            })
          }
        </div>
        <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
          <div className="popup__overlay" onClick={handleCardClose}></div>
          <div className="popup__container">
            <img src={filmInfo.Poster} alt={filmInfo.Title} />
            <h2>{filmInfo.Title}</h2>
            <p>{filmInfo.Year}</p>
            <p>{filmDetails.Plot}</p>
            <p>{filmDetails.Runtime}</p>
            <button onClick={handleCardClose}>Закрыть</button>
          </div>
        </div>
      </main>
      <footer>
        <p>©{currentYear} Maxim Grivennyy with <a href="http://www.omdbapi.com/">OMDb API</a></p>
      </footer>
    </div>
  );
}

export default App;
