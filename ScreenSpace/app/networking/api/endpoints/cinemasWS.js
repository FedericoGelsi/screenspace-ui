import axios from '../Api';

export const getCinemas = async ownerId => {
  const params = {
    ownerId: ownerId,
  };
  const results = await axios.get('/api/cinemas', params);
  return results.data;
};

export const getCinemasFilter = async (distance, genre, rating) => {
  const params = {
    distance: distance,
    genre: genre,
    rating: rating,
  };
  let url = '/api/cinemas/filter';
  const queryParams = [];

  for (const key in params) {
    if (params[key] !== '') {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
      );
    }
  }
  if (queryParams.length > 0) {
    url += `?${queryParams.join('&')}`;
  }
  const results = await axios.get(url);
  return results.data;
};

export const getCinemasByMovieId = async movieId => {
  const results = await axios.get(`/api/cinemas?movieId=${movieId}`);
  return results.data;
};

export const getCinemaById = async cinemaId => {
  const results = await axios.get(`/api/cinemas/${cinemaId}`);
  return results.data;
};

export const newCinemaAPI = async (ownerId, cinemaInfo) => {
  body = {
    userId: ownerId,
    ...cinemaInfo,
  };
  const results = await axios.post('/api/cinemas', body);
  return results.data;
};

export const editCinemaAPI = async (cinemaId, cinemaInfo) => {
  body = {
    id: cinemaId,
    ...cinemaInfo,
  };
  const results = await axios.put('/api/cinemas', body);
  return results.data;
};

export const newCinemaHallAPI = async (cinemaId, hallInfo) => {
  body = {
    name: hallInfo.hallName,
    width: hallInfo.numberOfSeats,
    height: hallInfo.numberOfLines,
    available: hallInfo.active === 0 ? false : true,
  };
  const results = await axios.post(`/api/cinemas/${cinemaId}/halls`, body);
  return results.data;
};

export const editCinemaHallAPI = async (cinemaId, hallInfo) => {
  body = {
    name: hallInfo.hallName,
    width: hallInfo.numberOfSeats,
    height: hallInfo.numberOfLines,
    available: hallInfo.active === 0 ? false : true,
  };
  const results = await axios.put(
    `/api/cinemas/${cinemaId}/halls/${hallInfo.hallId}`,
    body,
  );
  return results.data;
};

export const removeCinemaHallAPI = async (cinemaId, hallId) => {
  const results = await axios.delete(
    `/api/cinemas/${cinemaId}/halls/${hallId}`,
  );
  return results.data;
};
