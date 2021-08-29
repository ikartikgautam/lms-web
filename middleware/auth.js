const User = require('../models/User')

module.exports = (req,res,next)=>{

    User.findOne({ email: req.query.email })
    .then((user) => {
        if (user) {
            req.user = user;
            console.log(req.user.id)
            next();
        }

        else{
            console.log("Not Authenticated")
            return res.status(400).json({ errors: [{ msg: 'Not Authenticated' }] });
        }

    })
    
    .catch((err)=>{
        console.log(err.message);
    })

}

