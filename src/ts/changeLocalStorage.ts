import IFilm from "../types/IFilm";

export function changeLocalStorage(
    localStorageIdArrey: [],
    currentFilm: IFilm,
    stateChangeFunction: boolean,
    storageKey: string
  ) {
    const currentFilmId = currentFilm.id as never
    let arrey = localStorageIdArrey || [];
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