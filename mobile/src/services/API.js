import axios from 'axios';

const API = axios.create({
    baseURL: 'http://192.168.1.102:3333',
});

export default API;