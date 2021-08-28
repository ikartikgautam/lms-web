const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
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