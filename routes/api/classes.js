const express = require('express');
const router = express.Router();

const User = require('../../models/User')
const Classes = require('../../models/Classes')
const auth = require('../../middleware/auth');




router.get('/', auth, (req, res, next) => {
    Classes.find({ user: req.user.id })
        .then((cla) => {
            return res.json(cla)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send('server error')
        })

})

router.get('/getClass/:cla_id', auth, (req, res, next) => {
    Classes.find({ _id: req.params.cla_id })
        .then((cla) => {
            return res.json(cla)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send('server error')
        })

})

router.get('/:code', auth, (req, res, next) => {
    Classes.find({ code: req.params.code })
        .then((cla) => {
            return res.json(cla)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send('server error')
        })

})

router.post('/add/:code', auth, (req, res, next) => {
    console.log(req.params.code)
    const { selected_students } = req.body;

    Classes.findOne({ code: req.params.code })
        .then((cla) => {
            User.findOne({ email: selected_students })
                .then((user) => {
                    if (user) {
                        console.log(user.id)
                        cla.students_enrolled.unshift(user.id)
                        console.log(cla.id)
                        user.courses_enrolled = cla.id;
                        user.save()
                        return cla.save()
                    }
                })



                .then((cla) => {
                    return res.json(cla)
                })

        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send("server error")
        })

})



router.post('/', auth, (req, res, next) => {

    const { name, code, desc } = req.body;

    Classes.findOne({ code: code })
        .then((cla) => {
            if (cla) {
                return res.status(400).json({ errors: [{ msg: 'Same class Code' }] });
            }
            if (req.user.type = 'teacher') {
                cla = new Classes({
                    user: req.user.id,
                    name: name,
                    code: code,
                    description: desc
                })

                return cla.save()


                    .then((cla) => {
                        console.log("Class created")
                        return res.json(cla)
                    })
            }

        })

        .catch((err) => {
            console.log(err.message);
            return res.status(500).send("server error")

        })

})



module.exports = router;