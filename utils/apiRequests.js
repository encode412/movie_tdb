const API_KEY = process.env.NEXT_PUBLIC_API_URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const fetchBGSlides = async () => {
  const result = await fetch(
    `${BASE_URL}/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await result.json();
  return data.results;
};

export const getTopTenMovies = async () => {
  const result = await fetch(
    `${BASE_URL}/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await result.json();
  return data.results;
};

export const getMovies = async (query) => {
  const result = await fetch(
    `${BASE_URL}/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${query}`
  );
  const data = await result.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const result = await fetch(
    `${BASE_URL}/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  const data = await result.json();
  return data;
};
