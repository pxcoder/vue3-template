import axios from 'axios';

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export { axios };
