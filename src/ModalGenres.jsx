// import { genres } from './data/genres';


function ModalGenres({ currentFilmGenre_ids }) {
 
  return (
    <>
      {/* {genres
        .filter(e => {
          if (currentFilmGenre_ids.includes(e.id)) {
            return e;
          }
        }).map((et, index) => (
          <p key={et.id}>{index + 1 !== currentFilmGenre_ids.length ? `${et.genre},` : `${et.genre}. `}</p>
        ))} */}
    </>
  );
}
export default ModalGenres;
