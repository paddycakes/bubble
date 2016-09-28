const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }));

// API Routing - break out into separate files with app.use('/api/questions', questions);
app.route('/api/questions')
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

// TODO: How to include this in the above route(..) mechanism?
app.get('/api/questions/:questionId', (req, res) => {
    res.send('GET request with questionId ' + req.params.questionId);
});

app.get('/api/questions/:questionId/answers', (req, res) => {
    console.log('In get answers with questionId>> ' + req.params.questionId);
    const answers = [{ id: 1, qId: 1, answer: 'At the corner of Marble Arch', timestamp: Date.now(), user: 'paddy' },
                     { id: 2, qId: 1, answer: 'Up the road at Petticoat Lane', timestamp: Date.now(), user: 'piotr' },
                     { id: 3, qId: 1, answer: 'On Electric Avenue', timestamp: Date.now(), user: 'lloyd' },
                     { id: 4, qId: 1, answer: 'Down the Lane .. White Hart Lane', timestamp: Date.now(), user: 'dan' },
                     { id: 5, qId: 1, answer: 'Just beside Old Trafford', timestamp: Date.now(), user: 'chris' }];
    res.send(answers);
});

app.post('/api/questions/:questionId/answers', (req, res) => {
    res.send('POST request to /answers with questionId ' + req.params.questionId);
});


// Websockets
io.on('connection', (socket) => {
    console.log('new connection made');

    socket.emit('message-from-server', {
        greeting: 'Hello from Server',
    });

    socket.on('message-from-client', (msg) => {
        console.log(msg);
    });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
