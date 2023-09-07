export function changeLocalStorage(
  localStorageIdArrey,
  currentFilm,
  stateChangeFunction,
  storageKey
) {
  let arrey = localStorageIdArrey || [];
  if (arrey.includes(currentFilm.id)) {
    arrey.splice(localStorageIdArrey.indexOf(currentFilm.id), 1);
    localStorage.setItem(storageKey, JSON.stringify(arrey));
    return (stateChangeFunction = false);
  } else {
    arrey.push(currentFilm.id);

    localStorage.setItem(storageKey, JSON.stringify(arrey));
    return (stateChangeFunction = true);
  }
}
