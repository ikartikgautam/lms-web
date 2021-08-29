const mongoose = require('mongoose');

const ClassesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    students_enrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    time:[{
        type:String,
    }]
});

module.exports = classes = mongoose.model('classes',ClassesSchema);