const baseUrl = 'http://localhost:3000';
const apiUrl = baseUrl + '/api';
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
};

module.exports = {
    get: (path, options) => {
        return fetch(apiUrl + path);
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
        // TODO: Implement
    },
    del: (path, data, options) => {
        // TODO: Implement
    },
};
