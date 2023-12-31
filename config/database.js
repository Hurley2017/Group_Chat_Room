require('dotenv').config();
const mongoose = require('mongoose');

const mongoDB = async () => {
  return (
    await mongoose.connect(process.env.MONGO_URI, 
        { 
          useNewUrlParser: true, 
          useUnifiedTopology: true,
          dbName: process.env.DB_NAME,
        }
      )
  )
}

// let DB;
// if (process.env.ENVIRON === "DEV"){
//   DB = devDB
// }else{
//   DB = prodDB
// }

module.exports = { mongoDB };