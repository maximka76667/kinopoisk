function Popup({isPopupOpen, closePopup, filmInfo, filmDetails}) {
  return (
    <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={closePopup}></div>
      <div className="popup__container">
        <img src={filmInfo.Poster} alt={filmInfo.Title} />
        <h2>{filmInfo.Title}</h2>
        <p>{filmInfo.Year}</p>
        <p>{filmDetails.Plot}</p>
        <p>{filmDetails.Runtime}</p>
        <button onClick={closePopup}>Закрыть</button>
      </div>
    </div>
  )
}

export default Popup;