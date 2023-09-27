const { app } = require('./main.js');
require('dotenv').config();
const { mongoDB } = require('./config/database');
async function startApp(){

    try {

        const mongo = await mongoDB();
        console.log("Mongo DB connected");
    
    } catch (error) {
        console.log(error);
    }
    
    const port = process.env.PORT || 8080

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
    
}

startApp();