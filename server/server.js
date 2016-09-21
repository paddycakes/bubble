var express = require('express');
// var compression = require('compression');
// var path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
