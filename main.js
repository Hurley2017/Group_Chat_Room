const express = require('express');
const bodyparser = require('body-parser');
const { mongoDB } = require('./config/database');
const { Collection } = require('mongoose');
const app = express();
const { User } = require('./model/user-model');
const { Chat } = require('./model/chat-model');
const { Password } = require('./util/password');
const ObjectId = require('mongoose').Types.ObjectId


function isValidObjectId(id){
    
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hi, there!');
});

app.post('/register', async (req, res) => {
    let userName = req.body.username;
    let passWord = req.body.password;
    let email = req.body.email;
    passWord = await Password.toHashString(passWord);
    const package = {'email':email, 'username': userName, 'password': passWord};
    const user = new User(package);
    await user.save();
    token = generateJWT(package)
    res.send('Registration Successful');
});

app.post('/insertCHATROOM', async (req, res) => {
    let adminID = req.body;
    const package = {'adminID': adminID, ArrayUSER: [adminID]};
    const chat = new Chat(package);
    await chat.save();
    res.send('Chat saved');
});

module.exports = { app };


