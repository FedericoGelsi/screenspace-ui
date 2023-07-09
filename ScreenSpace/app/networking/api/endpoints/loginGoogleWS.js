import axios from '../Api';

export const loginGoogleAPI = async (googleTokenId) => {
  const results = await axios.post('/api/user/oauth', googleTokenId);
  return results.data;
};

export const loginUpdateGoogleUserAPI = async (id, email, username, avatar) => {
  body = {
    email: email,
    username: username,
    avatar: avatar,
    password: null,
    role: "string"
  };
  const results = await axios.put(`/api/user/${id}`, body);
  return results.data;
};

export const deleteGoogleUserAPI = async (id) => {
    const results = await axios.delete(`/api/user/${id}`);
    console.log(results);
    return results.data;
};