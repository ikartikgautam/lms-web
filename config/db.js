const mongoose  = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://mriduljainmj:apple@123@cluster0.f8zla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            { useUnifiedTopology: true , useNewUrlParser: true ,useCreateIndex:true,useFindAndModify:false});

        console.log("Database connected")
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}


module.exports = connectDB;