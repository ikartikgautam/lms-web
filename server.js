const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path')


const usersRoute = require('./routes/api/users')


connectDB();

app.use(express.json({extended:false}));

app.use('/api/users',usersRoute);

const PORT  = 5000;

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})