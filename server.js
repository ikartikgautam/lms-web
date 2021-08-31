const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path')

const usersRoute = require('./routes/api/users')
const classRoute = require('./routes/api/classes')


connectDB();

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/users', usersRoute);
app.use('/api/createclass',classRoute)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(___dirname,'src','build','index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})