import {
  ModalItem,
  ModalTextTitle,
  ModalTextDiscription,
  ModalTextChangeBg,
  ModalTansformTextToUpperCase,
} from './ModalListStyled';
import ModalGenres from '../ModalGenres/ModalGenres';

function ModalList({ currentFilm }) {
  return (
    <ul>
      <ModalItem>
        <ModalTextTitle>Vote / Votes</ModalTextTitle>
        <ModalTextDiscription>
          <ModalTextChangeBg>
            {Number(currentFilm.vote_average).toFixed(1)}{' '}
          </ModalTextChangeBg>
          / {currentFilm.vote_count}
        </ModalTextDiscription>{' '}
      </ModalItem>
      <ModalItem>
        <ModalTextTitle>Popularity</ModalTextTitle>
        <ModalTextDiscription>
          {Number(currentFilm.popularity).toFixed(1)}
        </ModalTextDiscription>
      </ModalItem>
      <ModalItem>
        <ModalTextTitle>Original Title</ModalTextTitle>
        <ModalTextDiscription>
          {' '}
          <ModalTansformTextToUpperCase>
            {currentFilm.original_title}
          </ModalTansformTextToUpperCase>
        </ModalTextDiscription>
      </ModalItem>
      <ModalItem>
        <ModalTextTitle>Genre</ModalTextTitle>
        <ModalTextDiscription>
          <ModalGenres currentFilmGenre_ids={currentFilm.genre_ids} />
        </ModalTextDiscription>
      </ModalItem>
    </ul>
  );
}
export default ModalList;
