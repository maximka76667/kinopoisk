function Film(props) {

  const film = props.film;

  return (
    <article className="film" onClick={() => props.onCardClick(film)}>
      <div className="film__poster-wrapper">
        <img className="film__poster" src={film.Poster} alt={film.Title} />
      </div>
      <div className="film__heading">
        <h3 className="film__title">{film.Title} ({film.Year})</h3>
      </div>
    </article>
  )
}

export default Film;