const express = require('express');
const router = express.Router();

const User = require('../../models/User')

router.get('/',(req,res,next)=>{
    res.send("Get Users")
})

router.post('/',(req,res,next)=>{   

    const {email,firstname,lastname,class_in,teacher, dob} = req.body;

    User.findOne({email})
    .then((user)=>{
         if(user){
            return res.status(400).json({errors:[{msg:'User already exists'}]}); 
         }
        })
    .then(()=>{
        const user = new User({
            email:email,
            firstname:firstname,
            lastname:lastname,
            class_in:class_in,
            teacher:teacher,
            dob:dob
        })
             return user.save()
    })
        .catch((err)=>{
            console.log(err.message);
            return res.status(500).send("server error")
        })
})
    



module.exports = router;