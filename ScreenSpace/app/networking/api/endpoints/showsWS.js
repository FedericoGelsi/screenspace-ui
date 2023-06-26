import axios from '../Api';

export const newShowAPI = async (cinemaId, hallId, showInfo) => {
  body = {
    ...showInfo,
  };
  const results = await axios.post(
    `/cinemas/${cinemaId}/halls/${hallId}/shows`,
    body,
  );
  return results.data;
};

export const editShowAPI = async (showInfo) => {
  body = {
    ...showInfo,
  };
  const results = await axios.put(
    `/cinemas/${showInfo.cinemaId}/halls/${showInfo.hallId}/shows/${showInfo.showId}`,
    body,
  );
  return results.data;
};

export const deleteShowAPI = async (cinemaId, hallId, showId) => {
  const results = await axios.delete(
    `/cinemas/${cinemaId}/halls/${hallId}/shows/${showId}`,
  );
  return results.data;
};
