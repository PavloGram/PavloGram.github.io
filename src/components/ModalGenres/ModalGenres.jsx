import React from 'react'
import { genres } from '../../data/genres';

function ModalGenres({ currentFilmGenre_ids = [] }) {
  return (
    <React.Fragment>
      {genres
        .filter(e => {
          if (currentFilmGenre_ids.includes(e.id)) {
            return e;
          } else {
            return null;
          }
        })
        .map((el, i) => {
          return (
            <span key={el.id}>
              {currentFilmGenre_ids.length === i + 1
                ? `${el.genre}.`
                : `${el.genre}, `}
            </span>
          );
        })}
    </React.Fragment>
  );
}
export default ModalGenres;
