const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    teacher:{
        type:Boolean,
        required:true
    },
    dob:{
        type:Date
    }
});

module.exports = User = mongoose.model('user',UserSchema);