import React from 'react'
import api from '../utils/api'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';

function App() {

  const [title, setTitle] = React.useState('');
  const [films, setFilms] = React.useState([]);
  const [activeID, setActiveID] = React.useState('');
  const [filmDetails, setFilmDetails] = React.useState({});

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const [isSearching, setIsSearching] = React.useState(false);
  const [error, setError] = React.useState('');

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    setFilms([]);
    setError('');

    setIsSearching(true);
    api.searchFilmsByName(title)
    .then(res => {
      if(res.Search) return setFilms(res.Search);
      return setError(res.Error);
    })
    .catch((err) => console.log(err))
    .finally(() => setIsSearching(false))
  }

  function handleCardClick(film) {
    if(film.imdbID !== activeID) {
      setActiveID(film.imdbID);
      return api.getFilmByID(film.imdbID)
      .then((res) => {
        setFilmDetails(res);
        setIsPopupOpen(true);
      })
      .catch((err) => console.log(err))
    }
    return setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main films={films} onSearch={handleSearch} onCardClick={handleCardClick} onChange={handleChange} isSearching={isSearching} error={error} />
      <Popup isPopupOpen={isPopupOpen} closePopup={handlePopupClose} filmDetails={filmDetails} />
      <Footer />
    </div>
  );
}

export default App;
