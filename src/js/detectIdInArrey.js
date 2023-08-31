export function detectIdInArrey(watchedArrey, currentFilm, isWat) {
  if (watchedArrey.includes(currentFilm.id)) {
    return isWat = true;
  } else {
    return isWat = false;
  }
}
