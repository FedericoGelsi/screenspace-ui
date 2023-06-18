import axios from '../Api';

export const getCinemas = async ownerId => {
  const results = await axios.get(`/cinemas?ownerID=${ownerId}`);
  return results.data;
};
