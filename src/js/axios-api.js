import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:7001'
});

export default instance;
