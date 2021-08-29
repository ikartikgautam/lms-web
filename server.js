const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path')

const usersRoute = require('./routes/api/users')


connectDB();

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/users', usersRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})