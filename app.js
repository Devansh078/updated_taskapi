const express = require ('express');
const bodyParser =  require("body-parser");
const mongoose = require('mongoose');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
require('dotenv/config');


const userRoutes = require('./routes/user');
app.use('/user',userRoutes)
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser:true}, ()=>{
    console.log('Connected to DB')
});

app.listen(port,()=> {console.log("example listening starting into 4000 port");
})