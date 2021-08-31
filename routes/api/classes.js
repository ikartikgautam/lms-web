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

router.get('/getClass', auth, (req, res, next) => {
    Classes.find({ _id: req.query.cla_id })
        .then((cla) => {
            return res.json(cla)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send('server error')
        })

})

router.get('/code', auth, (req, res, next) => {
    Classes.find({ code: req.query.code })
        .then((cla) => {
            return res.json(cla)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send('server error')
        })

})


router.post('/schedule', auth, (req, res, next) => {

    const { title, start_time, end_time, date } = req.body;
    const classfield = {
        title,
        start_time,
        end_time,
        date
    };

    Classes.findOne({ code: req.query.code })
        .then((cla) => {

            cla.details.unshift(classfield);
            return cla.save()

                .then((cla) => {
                    return res.json(cla)
                })
        })

        .catch(err => {
            console.log(err.message);
            res.status(500).send("server error")
        })

})


router.post('/add', auth, (req, res, next) => {
    console.log(req.query.code)
    const { selected_students } = req.body;

    Classes.findOne({ code: req.query.code })
        .then((cla) => {
            User.findOne({ email: selected_students })
                .then((user) => {
                    if (user) {
                        console.log(user.id)
                        cla.students_enrolled.unshift(user.id)
                        console.log(cla.id)
                        user.courses_enrolled.unshift(cla.id);
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