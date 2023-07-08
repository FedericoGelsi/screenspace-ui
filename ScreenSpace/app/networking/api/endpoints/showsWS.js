import axios from '../Api';

export const newShowAPI = async (cinemaId, hallId, showInfo) => {
  body = {
    ...showInfo,
  };
  const results = await axios.post(
    `api/cinemas/${cinemaId}/halls/${hallId}/shows`,
    body,
  );
  return results.data;
};

export const editShowAPI = async showInfo => {
  body = {
    ...showInfo,
  };
  const results = await axios.put(
    `api/cinemas/${showInfo.cinemaId}/halls/${showInfo.hallId}/shows/${showInfo.showId}`,
    body,
  );
  return results.data;
};

export const deleteShowAPI = async (cinemaId, hallId, showId) => {
  const results = await axios.delete(
    `api/cinemas/${cinemaId}/halls/${hallId}/shows/${showId}`,
  );
  return results.data;
};
