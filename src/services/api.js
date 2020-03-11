import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_baseUrl
});

export default api;