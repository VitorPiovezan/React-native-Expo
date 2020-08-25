import axios from 'axios';

const api = axios.create({
    baseURL: 'http://170.83.209.224:8000/api/'
})

export default api;