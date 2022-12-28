import axios from 'axios';

const KEY = `6f3a72a470b06bab99f8d69f54b4e2d3`;

export const trendingList = () => {
  const response = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  return response;
};
export const searchNameMovies = query => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=1&query=${query}`
  );
  return response;
};
export const infoFilm = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response;
};
export const infoActors = id => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response;
};
export const reviewsFilm = id => {
  const response = axios.get(`
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
  return response;
};
