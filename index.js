// Setting up the express server
const express = require('express');
const { ObjectId, ReturnDocument } = require('mongodb');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')


//Middleware setup
app.use(express.static("doc"));
app.use(bodyParser.json());


app.listen(4000, function () {
    console.log('Server started at port 4000')
})

// Importing required module
const { MongoClient } = require("mongodb");
//mongodb URI used to connect to a Atlas cluster
const databaseURL = "mongodb+srv://so956:4d3Icf30RSuc1MwB@cluster0.edg67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoClient = new MongoClient(databaseURL)
//accessing the project1 database 
const database = mongoClient.db("project1");


// Establish a connection to the MongoDB server
function connect() {
    mongoClient.connect()
    let database = mongoClient.db('project1')
    return database
}

//Create a mongodb instance
let mongoDatabase = connect();

