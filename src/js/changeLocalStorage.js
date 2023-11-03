

export function changeLocalStorage(
  localStorageIdArrey,
  currentFilm,
  stateChangeFunction,
  storageKey
) {
  const currentFilmId = currentFilm.id ;
  let arrey = localStorageIdArrey ? localStorageIdArrey.slice(0) : [] ;
  // console.log(arrey)
  if (arrey.includes(currentFilmId)) {
    arrey.splice(localStorageIdArrey.indexOf(currentFilmId), 1);
    localStorage.setItem(storageKey, JSON.stringify(arrey));
    return (stateChangeFunction = false);
  } else {
    arrey.push(currentFilmId);

    localStorage.setItem(storageKey, JSON.stringify(arrey));
    return (stateChangeFunction = true);
  }
}
