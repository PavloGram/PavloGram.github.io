export function changeLocalStorage(
  localStorageIdArrey,
  currentFilm,
  stateChangeFunction,
  storageKey
) {
  if (localStorageIdArrey.includes(currentFilm.id)) {
    localStorageIdArrey.splice(localStorageIdArrey.indexOf(currentFilm.id), 1);
    localStorage.setItem(storageKey, JSON.stringify(localStorageIdArrey));
    return stateChangeFunction(false);
  } else {
    localStorageIdArrey.push(currentFilm.id);
    localStorage.setItem(storageKey, JSON.stringify(localStorageIdArrey));
    return stateChangeFunction(true);
  }
}
