import Http from '../utils/Http';

export default {
    create: (question) => {
        return Http.post('/questions', question);
    },
    get: (questionId) => {
        return Http.get('/questions/' + questionId);
    },
    getAll: () => {
        return Http.get('/questions');
    },
    remove: (questionId) => {
        // TODO: Implement..
    },
    getAnswers: (questionId) => {
        return Http.get('/questions/' + questionId + '/answers');
    },
};
