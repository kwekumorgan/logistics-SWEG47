const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyTokenAndAuthorization,verifyTokenAdmin } = require('./VerifyToken');
const Customer = require('../models/customer')

require('dotenv').config();



// UPDATE CREDENTIALS
router.put('/reset-password/:token', async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        // Find the customer by the reset token and check if it's not expired
        const customer = await Customer.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        if (!customer) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Encrypt the new password
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();

        // Update the customer's password and clear the reset token fields
        customer.password = encryptedPassword;
        customer.resetToken = undefined;
        customer.resetTokenExpiry = undefined;
        await customer.save();

        res.status(200).json({ message: 'Password has been reset successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error resetting password', error: err });
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

    const query = req.query.new //if you want to use a query 
    // After verification the system will then grant access for admins to get details of users
    try{
        // Data to be retrieved gets sorted first. Using a query generates the latest data but only 5
        // If you want all customer data then you dont have to use a query
        const  retrieveAll = query? await Customer.find().sort({_id:-1}).limit(5) : await Customer.find();

        res.status(200).json(retrieveAll);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET USER STATISTICS 

router.get('./stats',verifyTokenAdmin ,async(req,res)=>{
   const date = new Date(); // This is an object of the date class to used to get the date for last year as part of the user statistics
   const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
// This will show the total number of user per month
   try{

    const data = await Customer.aggregate([
        {$match:{createdAt:{$age:lastYear}}},
        {
            $project:{
                month:{$month: "$createdAt"},
            }
        },
        {
            $group:{
                _id: "$month",
                total :{$sum:1}
            }
        }
    ])
        res.status(200).json(data);
   }
   catch(err){
    res.status(500).json(err);
   }

})

module.exports = router;
