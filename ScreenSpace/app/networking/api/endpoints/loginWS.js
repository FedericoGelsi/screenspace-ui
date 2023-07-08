import axios from '../Api';

export const loginAPI = async (email, password) => {
  body = {
    email: email,
    password: password,
  };
  const results = await axios.post('/login', body);
  return results.data;
};
