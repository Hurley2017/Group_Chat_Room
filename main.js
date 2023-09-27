const express = require('express');
const bodyparser = require('body-parser');
const { mongoDB } = require('./config/database');
const { Collection } = require('mongoose');
const app = express();
const { User } = require('./model/user-model');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hi, there!');
});

app.post('/reverse', (req, res) => {
    let message = req.body.message;
    res.send(message.split('').reverse().join(''));
});

app.post('/insert', async (req, res) => {
    let userName = 'Lauda';
    let passWord = '123456';
    const package = {'username': userName, 'password': passWord};
    const user = new User(package);
    await user.save();
    res.send('User saved');
});


module.exports = { app };


