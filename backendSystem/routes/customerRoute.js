// Contains all  http request the customers can make 

const router = require('express').Router();
const {verifyToken, verifyTokenAndAuthorization} = require('./VerifyToken');

// UPDATE
router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, 'Logistics47').toString()
    }

    try{
        const updatedCustomer = await user.findByIdAndUpdate(req.params.id,{
            $set : req.body,
        },
            {new:true});

        res.status(200).json(updatedCustomer);
    } catch(err){
        res.status(500).json(err);
    }
 
    
});




module.exports= router;