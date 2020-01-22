import axios from 'axios';

const api = axios.create({
    baseURL: 'http://IP:3333',
});

export default api;
