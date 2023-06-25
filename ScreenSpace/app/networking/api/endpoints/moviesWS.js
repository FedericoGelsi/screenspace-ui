import axios from '../Api';

export const getMovies = async (
  cinema = undefined,
  latitude = undefined,
  longitude = undefined,
  title = undefined,
  genre = undefined,
  rating = undefined,
) => {
  const params = {
    cinema: cinema,
    latitude: latitude,
    longitude: longitude,
    title: title,
    genre: genre,
    rating: rating,
  };
  const results = await axios.get('/movies', params);
  return results.data;
};

export const getMovieById = async movieId => {
  const results = await axios.get(`/movies/${movieId}`);
  return results.data;
};

export const getMovieGenres = async () => {
  const results = await axios.get(`/movies/genres`);
  return results.data;
};

export const postMovieReview = async (movieId, reviewInfo) => {
  // {
  //     "userId": 0,
  //     "rating": 0,
  //     "comment": "string"
  //   }
  body = {
    ...reviewInfo,
  };
  const results = await axios.get(`/movies/${movieId}/review`, body);
  return results.data;
};

// TODO: editMovieReview (userId, reviewInfo)

// TODO: deleteMovieReview (reviewId)
