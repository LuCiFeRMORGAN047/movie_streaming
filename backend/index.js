const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongodb = require('mongodb').MongoClient;
const app = express()
app.use(express.json())
app.use(cookieParser())

require('dotenv').config()

mongodb.connect('mongodb+srv://morgan:lamine2023@movie.aqjvbp9.mongodb.net/?retryWrites=true&w=majority')
  .then((client)=>{
    console.log('connected')
      
  }).catch(e=>{
    console.log(e)
  })
const corsOptions = {
   origin: true, //included origin as true
   credentials: true, //included credentials as true
};
app.use(cors(corsOptions))
app.listen(5000 , ()=>{
    console.log("server is running");
})