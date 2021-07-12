import Film from "./Film";

function Main(props) {
  return (
    <main className="content">
      <h1 className="content__heading">Enter the name of the movie and press the <span>search</span> button</h1>
      <form className="form" onSubmit={props.onSearch}>
        <input className="form__input" id="title" value={props.title} placeholder="Name of the movie" onChange={props.onChange} required />
        <button className="form__submit-button" type="submit">{ props.isSearching ? 'Searching...' : 'Click' }</button>
      </form>
      { props.isSearching && <div className="films__loading">Searching...</div> }
      <div className="films">
        {
          props.films.map((film) => {
            return (
              <Film key={film.imdbID} film={film} onCardClick={props.onCardClick} isLoading={props.isLoading} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Main;