import Film from "./Film";
import anime from 'animejs/lib/anime.es.js';
import React from "react";

function Main(props) {

  React.useEffect(() => {

    let mouseX = '50%';
    let mouseY = '50%';

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    })

    const container = document.querySelector('.searcher');
    for(let i = 0; i < 100; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      container.appendChild(block);
    }

    anime({
      targets: '.searcher .block:nth-child(-n+50)',
      translateX: () => {
        return anime.random(-700, -400);
      },
      translateY: () => {
        return anime.random(-400, 400);
      },
      backgroundColor: () => {
        return '#' + anime.random(303030, 999999)
      },
      delay: anime.stagger(100),
    });

    anime({
      targets: '.searcher .block:nth-last-child(-n+50)',
      translateX: () => {
        return anime.random(400, 700);
      },
      translateY: () => {
        return anime.random(-400, 400);
      },
      backgroundColor: () => {
        return '#' + anime.random(303030, 999999)
      },
      delay: anime.stagger(100),
    });
  }, [])

  return (
    <main className="content">
      <div className="searcher"></div>
        <h1 className="content__heading">Enter the name of the movie and press the <span>search</span> button</h1>
        <form className="form" onSubmit={props.onSearch}>
          <input className="form__input" id="title" value={props.title} placeholder="Name of the movie" onChange={props.onChange} required />
          <button className="form__submit-button" type="submit">{ props.isSearching ? 'Searching...' : 'Click' }</button>
        </form>
      { props.isSearching && <p className="searcher__loading">Searching...</p> }
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