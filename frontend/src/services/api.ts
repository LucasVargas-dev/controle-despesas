import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3001',
  baseURL: process.env.VITE_API_URL,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);
    return Promise.reject(error.response.data);
  },
);

export default api;
