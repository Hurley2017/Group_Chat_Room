const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'media')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'chat.html'));
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'create_chat.html'));
});

app.get('/join', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'join_chat.html'));
});

module.exports = { app };


