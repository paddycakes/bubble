const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;


// API Routing - break out into separate files with app.use('/api/questions', questions);
app.route('/api/questions')
    .get((req, res) => {
        res.send('GET request from QuestionListPage');
    })
    .post((req, res) => {
        res.send('POST request from QuestionPage');
    });

// TODO: How to include this in the above route(..) mechanism?
app.get('/api/questions/:questionId', (req, res) => {
    res.send('GET request with questionId ' + req.params.questionId);
});

app.get('/api/questions/:questionId/answers', (req, res) => {
    const answers = [{ id: 1, qId: 1, user: 'paddy', answer: 'At the corner of Marble Arch' },
                     { id: 2, qId: 1, user: 'piotr', answer: 'Up the road at Petticoat Lane' },
                     { id: 3, qId: 1, user: 'lloyd', answer: 'On Blueberry Parade' },
                     { id: 4, qId: 1, user: 'dan', answer: 'Down the Lane .. White Hart Lane' },
                     { id: 5, qId: 1, user: 'chris', answer: 'Just beside Old Trafford' }];
    res.send(answers);
});

app.post('/api/questions/:questionId/answers', (req, res) => {
    res.send('POST request for answers with questionId ' + req.params.questionId);
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
