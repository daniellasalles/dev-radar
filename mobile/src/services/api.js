import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ipDaMaquina:3333',
});

export default api;
