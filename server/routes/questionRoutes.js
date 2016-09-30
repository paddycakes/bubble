const express = require('express');
const questionRouter = express.Router();
const questionService = require('../services/questionService');

questionRouter.route('/')
    .get((req, res) => {
        res.send('GET request from QuestionListPage');
    })
    .post((req, res) => {
        // TODO: Use moment.js for dates/times
        //     : Save this somewhere via a service
        console.log('Request body>> ' + req.body.question);
        const question = { id: 1,
                           user: 'Bubbles',
                           timestamp: Date.now(),
                           text: req.body.question };
        res.send(question);
    });

questionRouter.route('/:questionId')
    .get((req, res) => {
        res.send('GET request with questionId ' + req.params.questionId);
    });

questionRouter.route('/:questionId/answers')
    .get((req, res) => {
        const answers = questionService.getAnswers(req.params.questionId);
        res.send(answers);
    })
    .post((req, res) => {
        res.send('POST request to /answers with questionId ' + req.params.questionId);
    });

module.exports = questionRouter;
