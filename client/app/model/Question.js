import Http from '../utils/Http';

// TODO: How to do this in ES6 style..
module.exports = {
    create: (question) => {
        return Http.post('/questions', question);
    },
    get: (questionId) => {

    },
    getAll: () => {

    },
    remove: (questionId) => {

    },
    getAnswers: (questionId) => {
        return Http.get('/questions/' + questionId + '/answers');
    },
};
