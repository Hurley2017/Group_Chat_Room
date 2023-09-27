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

app.post('/reverse', (req, res) => {
    let message = req.body.message;
    res.send(message.split('').reverse().join(''));
});

app.post('/insertUSER', async (req, res) => {
    let userName = 'Laud';
    let passWord = await Password.toHashString('123456');
    const package = {'email':'a@a.com', 'username': userName, 'password': passWord};
    const user = new User(package);
    await user.save();
    res.send('User saved');
});

app.post('/insertCHATROOM', async (req, res) => {
    let adminID = 'barar bal';
    const package = {'adminID': adminID, ArrayUSER: [adminID]};
    const chat = new Chat(package);
    await chat.save();
    res.send('Chat saved');
});

module.exports = { app };


