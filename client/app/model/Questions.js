import Http from '../utils/Http';

module.exports = {
    create: (question) => {
        return Http.post('/questions', question);
    },
};
