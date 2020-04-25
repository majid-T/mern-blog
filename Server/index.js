const express = require('express');
const app = express();
const result = require('dotenv').config();
const mongoose = require('mongoose');

console.log(result);
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

//middleware for json
app.use(express.json);

//Routes add
const postsRoutes = require('./routes/Posts');
app.use('/api/posts',postsRoutes);

// for 404 handeling
app.use(
    (req,res,next)=>{
        const error = new Error('URL not found!');
        error.status = 404;
        next(error);
    }
);

//General Error handeling
app.use(
    (error,req,res,next)=>{
        res.status(error.status || 500);
        res.send(
            {
                message: `Error : ${error.message}`,
                error: error
            }
        );
    }
);