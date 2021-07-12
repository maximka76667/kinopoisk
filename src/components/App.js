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
  const [filmInfo, setFilmInfo] = React.useState({});
  const [filmDetails, setFilmDetails] = React.useState({});

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const [isSearching, setIsSearching] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    setIsSearching(true);
    api.searchFilmsByName(title)
    .then(res => {
      setFilms(res.Search);
      console.log(res.Search);
    })
    .catch((err) => console.log(err))
    .finally(() => setIsSearching(false))
  }

  function handleCardClick(film) {
    setIsLoading(true);
    if(film.imdbID !== activeID) {
      setActiveID(film.imdbID);
      setFilmInfo(film);
      api.getFilmByID(film.imdbID)
      .then((res) => {
        setFilmDetails(res);
        setIsPopupOpen(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
    } else {
      setIsPopupOpen(true);
    }
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setIsLoading(false);
  }

  return (
    <div className="page">
      <Header />
      <Main films={films} onSearch={handleSearch} onCardClick={handleCardClick} onChange={handleChange} isSearching={isSearching} isLoading={isLoading} />
      <Popup isPopupOpen={isPopupOpen} closePopup={handlePopupClose} filmInfo={filmInfo} filmDetails={filmDetails} />
      <Footer />
    </div>
  );
}

export default App;
