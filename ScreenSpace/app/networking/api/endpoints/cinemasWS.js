import axios from '../Api';

export const getCinemas = async ownerId => {
  const results = await axios.get(`/cinemas?ownerID=${ownerId}`);
  return results.data;
};

export const getCinemaById = async cinemaId => {
  const results = await axios.get(`/cinemas/${cinemaId}`);
  return results.data;
};

export const newCinemaAPI = async (ownerId, cinemaInfo) => {
  body = {
    "userId": ownerId,
     ...cinemaInfo
  }
  const results = await axios.post('/cinemas', body);
  return results.data;
};

export const editCinemaAPI = async (cinemaId, cinemaInfo) => {
  body = {
    "id": cinemaId,
     ...cinemaInfo
  }
  const results = await axios.put('/cinemas', body);
  return results.data;
};

export const newCinemaHallAPI = async (cinemaId, hallInfo) => {
  body = {
    "name": hallInfo.hallName,
    "width": hallInfo.numberOfLines,
    "height": hallInfo.numberOfSeats,
    "available": hallInfo.active === 0 ? false : true
  }
  const results = await axios.post(`/cinemas/${cinemaId}/halls`, body);
  return results.data;
};

export const editCinemaHallAPI = async (cinemaId, hallInfo) => {
  body = {
    "name": hallInfo.hallName,
    "width": hallInfo.numberOfLines,
    "height": hallInfo.numberOfSeats,
    "available": hallInfo.active === 0 ? false : true
  }
  const results = await axios.put(`/cinemas/${cinemaId}/halls/${hallInfo.hallId}`, body);
  return results.data;
};
