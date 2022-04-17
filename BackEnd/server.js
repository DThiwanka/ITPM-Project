const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("🚀     MongoDB Connection Successfully!")
})

const visaRouter = require('./routes/visas.js');
app.use("/visa",visaRouter)


const detailsRouter = require('./routes/details.js');
app.use("/details",detailsRouter)

app.listen(PORT, ()=>{
    console.log(`☄️      Server is Up and Running on port : ${PORT}`)
})
