const API_KEY = "1962278b5026dd7c7bb0a91cd47f798b";
const BASE_URL_QUERY = "https://api.themoviedb.org/3/search/movie";
const BASE_URL_POPULAR = "https://api.themoviedb.org/3/trending/movie/week";

function fetchFilms(value?: string, page?: number) {
  const pag = page ? page : 1;

  if (value) {
    const searchParamsToQuery = new URLSearchParams({
      api_key: API_KEY,
      query: value,
      page: pag.toString(),
    });
    const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    });
  } else {
    const searchParamsToQuery = new URLSearchParams({
      api_key: API_KEY,
      page: pag.toString(),
    });
    const url = `${BASE_URL_POPULAR}?${searchParamsToQuery}`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    });
  }
}

export default fetchFilms;
