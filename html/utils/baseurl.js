import axios from 'axios';

var http = axios.create({
    baseURL: 'http://localhost:1994/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}); 

export default http;