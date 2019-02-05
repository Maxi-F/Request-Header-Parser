// init project
const express = require('express');
const app = express();

app.use(require('./routes.js'));

process.env.PORT = process.env.PORT || 3000;

// listen for requests
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});