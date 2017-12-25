import axios from 'axios';

var http = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}); 

export default http;