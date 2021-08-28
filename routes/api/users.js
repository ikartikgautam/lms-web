const express = require('express');
const router = express.Router();
const {check ,validationResult} = require('express-validator')

const User = require('../../models/User')

router.get('/',(req,res,next)=>{
    res.send("Get Users")
})

router.post('/',
// [
    // check('firstname','First Name is Required').not().isEmpty(),
    // check('teacher','teacher is required').not().isEmpty(),
// ]
(req,res,next)=>{
    // const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors:errors.array()});
    // }

    const {firstname,lastname,class_in,teacher, dob} = req.body;

    User.findOne({lastname})
    .then((user)=>{
         if(user){
            return res.status(400).json({errors:[{msg:'User already exists'}]}); 
         }
        })
    .catch((err)=>{
        console.log(err.message);
    })
    .then(()=>{
        const user = new User({
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