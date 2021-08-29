const express = require('express');
const router = express.Router();

const User = require('../../models/User')
const Classes = require('../../models/Classes')
const auth = require('../../middleware/auth');




router.get('/',auth,(req,res,next)=>{
    Classes.find({user:req.user.id})
    .then((cla)=>{
        return res.json(cla)
    })
    .catch(err=>{
        console.log(err.message)
        res.status(500).send('server error')
    })

})

router.get('/add/:code',auth,(req,res,next)=>{
    console.log(req.params.code)
    const selected_students = req.body;
    console.log(selected_students.length)
    Classes.find({code:req.params.code})
    .then((cla)=>{
        // for(let i =0;i<selected_students.length;i++){
        //     cla.students_enrolled.unshift([selected_students[i]])
        // }
        // return cla.save()
      
        // .then((cla)=>{
            return res.json(cla)
        // })

    })
    .catch(err=>{
        console.log(err.message);
        res.status(500).send("server error") 
    })

})



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