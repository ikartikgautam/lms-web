const express = require('express');
const router = express.Router();

const User = require('../../models/User')


router.get('/', (req, res, next) => {
    // res.send("Get Users")
    User.findOne({ email: req.query.email })
        .then((user) => {
            if (user) {
                req.user = user;
                console.log(req.user.id)
                return res.status(200).json({ meta: user, message: "User found" });
            }
            return res.status(404).json({ meta: null, message: "User not found" });
        })
})


router.get('/students',(req,res,next)=>{
    User.find({type:'student'})
    .then((students)=>{
        return res.json(students)
    })
    .catch(err=>{
        console.log(err.message)
        res.status(500).send('server error')
    })

})

router.get('/student',(req,res,next)=>{


    User.findOne({type:'student',class_in:req.query.class_no})
    .then((students)=>{
        return res.json(students)
    })
    .catch(err=>{
        console.log(err.message)
        res.status(500).send('server error')
    })

})

router.get('/teachers',(req,res,next)=>{
    User.find({type:'teacher'})
    .then((teacher)=>{
        return res.json(teacher)
    })
    .catch(err=>{
        console.log(err.message)
        res.status(500).send('server error')
    })

})


router.post('/', (req, res, next) => {

    const { email, firstname, lastname, class_in, type, dob } = req.body;

    User.findOne({ email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new User({
                email: email,
                firstname: firstname,
                lastname: lastname,
                class_in: class_in,
                type: type,
                dob: dob
            })
            return user.save()

                .then((user) => {
                    req.user = user;
                    console.log("user created")
                    console.log(req.user.id)
                    return res.json(user)
                })

        })
        .catch((err) => {
            console.log(err.message);
            return res.status(500).send("server error")
        })
})



module.exports = router;