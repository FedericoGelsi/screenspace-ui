import {movies} from '../ui/mock/mockValues';

// MOVIES CRUD

export const getMovies = () => movies;

export const getMovieById = movieId =>
  getMovies().find(movie => movie.id === movieId);

export const getMovieByName = movieName =>
  getMovies().filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase()),
  );
