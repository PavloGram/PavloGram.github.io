import IFilm from "../types/IFilm";

export function detectIdInArrey(arreyIdFilms: [], currentFilm: IFilm) {
  let arrey = arreyIdFilms || []
  if (arrey.includes(currentFilm.id as never)) {
    return true;
  } else {
    return false;
  }
}