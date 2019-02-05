const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
    console.log(req.headers);
    let ipAddress = req.get("x-forwarded-for").split(',')[0]; // splits because there is more information than just the IP.
    let preferredLanguages = req.get("accept-language");
    let software = req.get("user-agent");

    res.json({
        ipAddress,
        languages: preferredLanguages,
        software
    })
})

module.exports = app;