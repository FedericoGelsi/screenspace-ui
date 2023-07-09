import axios from '../Api';

export const loginGoogleAPI = async (googleTokenId) => {
  body = {
    googleTokenId: googleTokenId
  };
  const results = await axios.post('/api/user/oauth', googleTokenId);
  return results.data;
};
