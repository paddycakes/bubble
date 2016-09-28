const baseUrl = 'http://localhost:3000';
const apiUrl = baseUrl + '/api';
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
};

module.exports = {
    get: (path, options) => {
        // return this.request('GET', path, options);
    },
    post: (path, data, options) => {
        return fetch(apiUrl + path, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify({
                data,
            }),
        });
    },
    put: (path, data, options) => {
        // return this.request('PUT', path, options, data);
    },
    del: (path, data, options) => {
        // return this.request('DELETE', path, options, data);
    },
};
