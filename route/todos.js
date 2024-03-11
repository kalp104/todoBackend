const express = require('express');
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
// const {putTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo")

// define api routes

router.post("/createTodo", createTodo);  // post for add new data to the database
router.get("/getTodo", getTodo ); //  get for retrive the data from the db   // get for retrive the data from the db
// router.put("/putTodo/:tit" ,putTodo); // put for updation
router.delete("/deleteTodo/:tit" ,deleteTodo); // put for updation

module.exports = router;