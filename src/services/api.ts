import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://restcountries.eu/rest/v2'
});

export default api;