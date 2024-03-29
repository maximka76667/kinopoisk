import Film from "./Film";
import anime from 'animejs/lib/anime.es.js';
import React, { useEffect } from "react";
import Heart from './Heart'

function Main(props) {

  function renderHearts() {
    let arr = [];
    for(let i = 0; i < 10; i++) {
      arr.push(<Heart key={i} />);
    }
    return arr
  }



  useEffect(() => {
    anime({
      targets: '.block:nth-child(-n+5)',
      translateX: () => {
        return anime.random(-900, -600);
      },
      translateY: () => {
        return anime.random(-600, 300);
      },
      fill: () => {
        return '#ff' + anime.random(0, 256).toString(16) + anime.random(0, 256).toString(16);
      },
      rotate: () => {
        return anime.random(-30, 30) + 'deg'
      },
      opacity: [0, .8],
      delay: anime.stagger(100),
    });

    anime({
      targets: '.block:nth-last-child(-n+5)',
      translateX: () => {
        return anime.random(300, 800);
      },
      translateY: () => {
        return anime.random(-600, 300);
      },
      fill: () => {
        return '#ff' + anime.random(0, 256).toString(16) + anime.random(0, 256).toString(16);
      },
      rotate: () => {
        return anime.random(-30, 30) + 'deg'
      },
      opacity: [0, .8],
      delay: anime.stagger(100),
    });
  }, [])

  return (
    <main className="content">
      <div className="searcher">
        {renderHearts()}
      </div>
        <h1 className="content__heading">Enter the name of the movie and press the <span>search</span> button</h1>
        <form className="form" onSubmit={props.onSearch}>
          <input className="form__input" id="title" value={props.title} placeholder="Name of the movie" onChange={props.onChange} required />
          <button className="form__submit-button" type="submit">{ 
          props.isSearching ? 
          'Searching...' : 
          'Search' 
          }</button>
        </form>
      { props.isSearching && <p className="searcher__loading">Searching...</p> }
      <p className="films__error">{props.error}</p>
      { props.films.length ? <div className="films">
        {
          props.films.map((film) => {
            return (
              <Film key={film.imdbID} film={film} onCardClick={props.onCardClick} />
            )
          })
        }
      </div> : ''}
    </main>
  )
}

export default Main;