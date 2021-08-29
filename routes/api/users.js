const express = require('express');
const router = express.Router();


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

        })
})



module.exports = router;