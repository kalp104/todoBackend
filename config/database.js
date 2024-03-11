// this file use for connection between the 
// database and your application


const mongoose = require("mongoose");
require("dotenv").config(); // require to feed the url from .env file

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, { // connection string from mongo
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) // above lines return the pormises then and catch
    .then(() => {console.log("connection successfully")})
    .catch((e) => {console.log("Recieved an error")
                   console.error(e.messege);
                   process.exit(1)}); //0 means end the process without any kind of failure and
                   // 1 means end the process with some failure
}

module.exports = dbConnect;