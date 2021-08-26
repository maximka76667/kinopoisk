function Popup({isPopupOpen, closePopup, filmDetails}) {
  return (
    <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={closePopup}></div>
      <div className="popup__container">
        <img className="popup__poster" src={filmDetails.Poster} alt={filmDetails.Title} />
        <div className="popup__info">
          <h2 className="popup__title">{filmDetails.Title}</h2>
          <p className="popup__plot">{filmDetails.Plot}</p>
          <p className="popup__year"><span>Release Date:</span> {filmDetails.Year}</p>
          <p className="popup__runtime"><span>Runtime:</span> {filmDetails.Runtime}</p>
        </div>
        <button className="popup__close-button" onClick={closePopup}></button>
      </div>
    </div>
  )
}

export default Popup;