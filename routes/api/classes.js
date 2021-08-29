const express = require('express');
const router = express.Router();

const User = require('../../models/User')
const Classes = require('../../models/Classes')
const auth = require('../../middleware/auth');

router.post('/',auth,(req,res,next)=>{
    
    const { name, code, desc } = req.body;

    Classes.findOne({code})
    .then((cla)=>{
        if(cla){
            return res.status(400).json({ errors: [{ msg: 'Same class Code' }] });
        }
        cla = new Classes({
            user:req.user.id,
            name:name,
            code :code,
            description:desc
        })
        
        return cla.save()

        .then((cla) => {
            console.log("Class created")
            return res.json(cla)
        })

    })
    
    .catch((err) => {
        console.log(err.message);
        return res.status(500).send("server error")
    
    })

})
    






module.exports = router;