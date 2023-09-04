export function detectIdInArrey(arrey, currentFilm) {
  
  if (arrey.includes(currentFilm.id)) {
    return true;
  } else {
    return false;
  }
}
