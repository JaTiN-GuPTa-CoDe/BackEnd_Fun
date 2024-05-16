const express = require('express');
require('dotenv').config()

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('jatin');
});

app.get('/facebook', (req, res) => {
    res.send('<h1>Hello Jatin</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Hello Jatin</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
