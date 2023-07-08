import axios from '../Api';

export const getMoviesAPI = async (
  cinema,
  latitude,
  longitude,
  title,
  genre,
  rating,
) => {
  const params = {
    cinema: cinema,
    latitude: latitude,
    longitude: longitude,
    title: title,
    genre: genre,
    rating: rating,
  };
  const results = await axios.get('api/movies', params);
  return results.data;
};

export const getMovieByIdAPI = async movieId => {
  const results = await axios.get(`api/movies/${movieId}`);
  return results.data;
};

export const getMovieGenresAPI = async () => {
  const results = await axios.get(`api/movies/genres`);
  return results.data;
};

export const postMovieReviewAPI = async (movieId, reviewInfo) => {
  // {
  //     "userId": 0,
  //     "rating": 0,
  //     "comment": "string"
  //   }
  body = {
    ...reviewInfo,
  };
  const results = await axios.get(`api/movies/${movieId}/review`, body);
  return results.data;
};

// TODO: editMovieReview (userId, reviewInfo)

// TODO: deleteMovieReview (reviewId)
