import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.95.251.132:8000/api/',
});

export default api;
