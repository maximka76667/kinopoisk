function Film(props) {

  const film = props.film;

  return (
    <div className="film" onClick={() => props.onCardClick(film)}>
      <img className="film__poster" src={film.Poster} alt={film.Title} />
      <p className="film__title">{film.Title} ({film.Year})</p>
    </div>
  )
}

export default Film;