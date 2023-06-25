import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://screenspace-api.us-east-1.elasticbeanstalk.com',
  timeout: 10000,
  common: {
    headers: {
      Accept: 'application/json', // el formato que espero que la info vuelva
      'Content-Type': 'application/json', // el formato en que le mando la info
    },
  },
});

instance.interceptors.response.use(
  function (response) {
    if (response) {
      console.log(
        `HTTP Response\n` +
          `> Status: ${response.status}\n` +
          `> Headers: ${JSON.stringify(response.headers)}\n` +
          `> Body: ${JSON.stringify(response.data)}`,
      );
    }
    return response;
  },
  function (error) {
    console.log('Response error', error);
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  function (request) {
    if (request) {
      console.log(
        `HTTP Request\n` +
          `> URL: ${request.url}\n` +
          `> Method: ${request.method}\n` +
          `> Params: ${JSON.stringify(request.params)}\n` +
          `> Headers: ${JSON.stringify(request.headers)}\n` +
          `> Body: ${JSON.stringify(request.data)}`,
      );
    }
    return request;
  },
  function (error) {
    console.log('Request error', error);
    return Promise.reject(error);
  },
);

export default instance;
