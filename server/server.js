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
    res.send('GET request for answers with questionId ' + req.params.questionId);
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
