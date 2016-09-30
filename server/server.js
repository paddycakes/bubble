const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const questionRouter = require('./routes/questionRoutes');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }));

app.use('/api/questions', questionRouter);


// Websockets - should I put in a separate file?
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
