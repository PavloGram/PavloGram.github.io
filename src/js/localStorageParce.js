export  function localStorageParse(watchedArrey, storageKey){
    try {
       return watchedArrey = JSON.parse(localStorage.getItem(storageKey));
       
      } catch (error) {
        console.log(error);
      }
}