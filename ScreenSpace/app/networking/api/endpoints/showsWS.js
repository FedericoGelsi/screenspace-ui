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

export const editShowAPI = async (cinemaId, hallId, showInfo) => {
  body = {
    ...showInfo,
  };
  const results = await axios.put(
    `/cinemas/${cinemaId}/halls/${hallId}/shows`,
    body,
  );
  return results.data;
};

export const deleteShowAPI = async (cinemaId, hallId) => {
  const results = await axios.delete(
    `/cinemas/${cinemaId}/halls/${hallId}/shows`,
  );
  return results.data;
};