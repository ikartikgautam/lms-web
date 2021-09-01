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
    details:[{
        title:{
            type:String
        },
        start_time:{
            type:Date
        },
        end_time:  {
            type:Date
        }
    }]
});

module.exports = classes = mongoose.model('classes',ClassesSchema);