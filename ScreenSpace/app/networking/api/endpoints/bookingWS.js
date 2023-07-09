import axios from '../Api';

export const getBookingAPI = async userId => {
  const results = await axios.get(`/api/booking?userId=${userId}`);
  return results.data;
};
