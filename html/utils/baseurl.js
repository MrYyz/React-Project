import axios from 'axios';

var http = axios.create({
    baseURL: 'http://localhost:1706/git_react/React-Project/php/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}); 

export default http;