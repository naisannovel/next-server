require('express-async-errors');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express()

// routers
const postRouter = require('./routers/postRouter');

// middleware
app.use(express.json());
app.use(cors());

// route
app.use('/api/post',postRouter);

// root api
app.get('/',(req,res)=>{
    res.send('hello, i am root api');
})

app.use((err, req, res, next)=>{
    return res.status(500).send(err.message)
})

module.exports = app;