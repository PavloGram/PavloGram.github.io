const API_KEY = "1962278b5026dd7c7bb0a91cd47f798b";
// const BASE_URL_QUERY = "https://api.themoviedb.org/3/search/movie/";

// const searchParamsToQuery = new URLSearchParams({
//     api_key: API_KEY,
  
//   });
//   const ell = 335977
//   const url = `https://api.themoviedb.org/3/movie/${ell}?api_key=${API_KEY}`


async function fetchFilmsById(arr){
    // `https://api.themoviedb.org/3/movie/${film_Id}?api_key=${this.#API_KEY}`
//    const arrey = []
    
   return await  Promise.all( arr.map( async el => {
        const url = `https://api.themoviedb.org/3/movie/${el}?api_key=${API_KEY}`
      return  await fetch(url).then((response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }
             return response.json();
          });
      
   
           
    }))
 
}
export default fetchFilmsById