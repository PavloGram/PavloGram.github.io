const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';
const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';

// const searchParamsToQuery = new URLSearchParams({
//   api_key: '1962278b5026dd7c7bb0a91cd47f798b',
//   query: value,
//   page: page,
// });
// const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;

// https://api.themoviedb.org/3/search/movie?api_key=1962278b5026dd7c7bb0a91cd47f798b&query=ur&page=undefined

function fetchFilms(value, page) {
  const pag = page ? page : 1;

  if (value) {
    const searchParamsToQuery = new URLSearchParams({
      api_key: '1962278b5026dd7c7bb0a91cd47f798b',
      query: value,
      page: pag,
    });
    const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  } else {
    const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${pag}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}

export default fetchFilms;
