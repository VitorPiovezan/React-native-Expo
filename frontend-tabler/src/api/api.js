import axios from 'axios';

const api = axios.create({
    baseURL: 'http://177.87.232.97:8000/api/'
})

export default api;