const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const User = require('../../models/User')


router.get('/',(req,res,next)=>{
=======

const User = require('../../models/User')


// router.use(cors());
// router.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
// });


router.get('/', (req, res, next) => {
>>>>>>> 29e1e136d3c2b91329526fb6756969f89a105ba5
    res.send("Get Users")
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
                    return res.json(user)
                })

<<<<<<< HEAD
        .then((user)=>{
            req.user = user;
            console.log(req.user.id)
            return res.json(user)
        })
   
    })
        .catch((err)=>{
            console.log(err.message);
            return res.status(500).send("server error")
=======
>>>>>>> 29e1e136d3c2b91329526fb6756969f89a105ba5
        })
})



module.exports = router;