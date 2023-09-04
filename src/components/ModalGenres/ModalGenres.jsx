import { genres } from '../../data/genres';

function ModalGenres({ currentFilmGenre_ids = [] }) {
  return (
    <>
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
    </>
  );
}
export default ModalGenres;
