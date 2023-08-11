const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const url =  `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1`

 function fetchFilms() {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }


 

  export default fetchFilms