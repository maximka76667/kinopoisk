function Film(props) {

  const film = props.film;

  return (
    <article className="film">
      <div className={`film__poster-wrapper ${props.isLoading ? 'film__poster-wrapper_loading' : ''}`} onClick={() => props.onCardClick(film)}>
        <img className="film__poster" src={film.Poster} alt={film.Title} />
      </div>
      <p className="film__title">{film.Title} ({film.Year})</p>
    </article>
  )
}

export default Film;