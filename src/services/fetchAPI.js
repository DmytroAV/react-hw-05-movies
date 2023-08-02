import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY_API = process.env.REACT_APP_SECRET_KEY_TMDB


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjIzNTVjNGY5Yjc4M2VlZDFiMTIyMzQzMDRmNmNjMSIsInN1YiI6IjVlNDZiNjVkMmRhODQ2MDAxMzA0NjkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQwHZNlPuOfnBRUOpSyl3OIowwrEStcoZnUcAf9qZvE'
  }
};


// https://api.themoviedb.org/3/trending/all/{time_window}?api_key

export async function fetchTrending(pageNumber) {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${KEY_API}&page=${pageNumber}&language=en-US`, options
  )
  return data;
}

// https://api.themoviedb.org/3/search/movie&api_key
// search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false
export async function fetchSearchMovies(query, pageNumber) {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${KEY_API}&page=${pageNumber}`, options
  )
  return data;
};

// https://api.themoviedb.org/3/movie/626735&api_key
// movie/${movieId}?api_key=${API_KEY}&language=en-US

export async function fetchMovieDetails(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${KEY_API}&language=en-US`, options
  )
  return data;
};

// https://api.themoviedb.org/3/movie/890971/credits&api_key
// movie/${movieId}/credits?api_key=${API_KEY}&language=en-US

export async function fetchCastMovie(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`, options
  )
  return data;
};

// https://api.themoviedb.org/3/movie/890971/reviews&api_key
// movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US

export async function fetchReviewsMovie(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US`, options
  )
  return data;
};

// fetchTrending().then(console.log(response.data))
