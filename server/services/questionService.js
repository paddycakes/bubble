

const answers = new Map();
answers.set(1, [{ id: 1, qId: 1, answer: 'At the corner of Marble Arch', timestamp: Date.now(), user: 'paddy' },
                 { id: 2, qId: 1, answer: 'Up the road at Petticoat Lane', timestamp: Date.now(), user: 'piotr' },
                 { id: 3, qId: 1, answer: 'On Electric Avenue', timestamp: Date.now(), user: 'lloyd' },
                 { id: 4, qId: 1, answer: 'Down the Lane .. White Hart Lane', timestamp: Date.now(), user: 'dan' },
                 { id: 5, qId: 1, answer: 'Just beside Old Trafford', timestamp: Date.now(), user: 'chris' }]);

// TODO: Why doesn't export default work? I thought Node 6 supported ES6..
module.exports = {
    getAnswers: (questionId) => {
        // TODO: Better way?
        const id = Number.parseInt(questionId);
        return answers.get(id);
    },
};
