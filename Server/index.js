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

//middleware for json
app.use(express.json());

//for CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
  });

//Routes add
const postsRoutes = require('./routes/Posts');
app.get('/',(req,res,next)=>{
    res.send('<h1>OK</h1>');
})

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

console.log('server is now up!')