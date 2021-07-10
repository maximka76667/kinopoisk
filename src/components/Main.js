import Film from "./Film";

function Main(props) {
  return (
    <main className="content">
      <form className="form" onSubmit={props.onSearch}>
        <input className="form__input" id="title" value={props.title} onChange={props.onChange} required />
        <button className="form__submit-button" type="submit">Поиск</button>
      </form>
      { props.isSearching && <div className="films__loading">Поиск...</div> }
      <div className="films">
        {
          props.films.map((film) => {
            return (
              <Film key={film.imdbID} film={film} onCardClick={props.onCardClick} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Main;