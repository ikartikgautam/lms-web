const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    class:{
        type:String,
        required:true,
        unique:true
    },
    teacher:{
        type:Boolean,
        required:true
    },
    dob:{
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);