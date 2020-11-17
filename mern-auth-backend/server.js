const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
// Bodyparser middleware
app.use(bodyParser.urlencoded({
    extended:false
})
);

app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

mongoose.connect(db,{useNewUrlParser: true})
.then(()=>console.log("mongo db connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server up and running on ${port}`))