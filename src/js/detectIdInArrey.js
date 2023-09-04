export function detectIdInArrey(watchedArrey, currentFilm) {
  let arrey = []; 
  arrey = watchedArrey 
  if (arrey.includes(currentFilm.id)) {
    return true;
  } else {
    return false;
  }
}
