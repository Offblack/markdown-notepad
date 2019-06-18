import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://my-json-server.typicode.com/Offblack//markdown-notepad'
});

export default instance;