const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyTokenAndAuthorization,verifyTokenAdmin } = require('./VerifyToken');
const Customer = require('../models/customer')

require('dotenv').config();



// UPDATE CREDENTIALS
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json({ message: 'Error updating customer credentials', error: err });
    }
});

// DELETE CREDENTIALS

router.delete('./:id', verifyTokenAndAuthorization, async(req,res)=>{
    // After verification the system will then confirm deletion
    try{
        await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json("Customer details deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET A PARTICULAR USER (ADMIN ONLY)
router.get('./find/:id', verifyTokenAdmin, async(req,res)=>{
    // After verification the system will then grant access for admins to get details of users
    try{
        const  retrieveCustomer = await Customer.findById(req.params.id);

        // Destructure the response to exclude the password when retrieved
        const {password, ...others} = retrieveCustomer._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET ALL USERS (ADMIN ONLY)
router.get('./', verifyTokenAdmin, async(req,res)=>{
    // After verification the system will then grant access for admins to get details of users
    try{
        const  retrieveCustomer = await Customer.find();

        // Destructure the response to exclude the password when retrieved
        const {password, ...others} = retrieveCustomer._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;
