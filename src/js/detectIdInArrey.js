export function detectIdInArrey(watchedArrey = [], currentFilm) {
  //  let arrey = []
  //  arrey = watchedArrey
  if (watchedArrey.includes(currentFilm.id)) {
    return true;
  } else {
    return false;
  }
}
