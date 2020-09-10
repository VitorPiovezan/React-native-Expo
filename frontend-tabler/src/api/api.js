import axios from 'axios';

const api = axios.create({
    baseURL: 'http://170.83.208.18:8000/api/'
})

export default api;