const express = require('express');
const app = express();
var cors = require('cors');
 
app.use(cors())
require("dotenv").config();
const PORT = process.env.PORT || 5000;


// middleware to parse json request body

app.use(express.json());

// import routes for todo api
const todoRoutes = require("./route/todos");
 // mount the todo api routes

 // simply routes file mese routes ko call kiya or unko add kar diya

app.use("/api", todoRoutes);


// server instantiate kiye 
// server active kiya
app.listen(PORT, ()=>{
    console.log(`aap sabhi ka swagat hey ! port is ${PORT}`);

})

// connection with db

const dbConnect = require("./config/database");
dbConnect();

// default route 
app.get("/", (req,res) => {
   res.send(`<h1>hello ji</h1>`);
})