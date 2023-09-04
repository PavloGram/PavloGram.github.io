export function detectIdInArrey(watchedArrey, currentFilm) {
  if (watchedArrey.includes(currentFilm.id)) {
    return true;
  } else {
    return false;
  }
}
