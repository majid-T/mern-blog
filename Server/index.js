const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

//DB Connection
mongoose
    .connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Connected to DB'))
    .catch((error)=>console.log(error));

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running on port ${port}`));