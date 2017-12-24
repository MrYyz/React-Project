//http://visionmedia.github.io/superagent/
import request from 'superagent'

<<<<<<< HEAD
const LOCAL_SERVER = 'http://localhost:1994/';

=======
const LOCAL_SERVER = 'http://localhost:8080/react/';
>>>>>>> da09e3886d50c05dc0a816586d0d3efefd89eb36

const DEV_SERVER = '';
const PRO_SERVER = '';

function getUrl(path) {
    if (path.startsWith('http') || path.startsWith('https')) {
        return path;
    }
    return `${LOCAL_SERVER}${path}`;
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        var req = request
            .get(getUrl(path))
            .query(query)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    }),

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(query)
            .send(formdata)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    })
};

export default HttpClient;
