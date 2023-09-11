export function localStorageParse(storageKey: string) {
  try {
    return JSON.parse(localStorage.getItem(storageKey)!);
  } catch (error) {
    console.log(error);
  }
}
