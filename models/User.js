const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    class_in:{
        type:String,
    },
    type:{
        type:String,
        required:true
    },
    dob:{
        type:Date
    }
});

module.exports = User = mongoose.model('user',UserSchema);