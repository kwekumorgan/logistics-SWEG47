const router = require('express').Router();
const Customer = require('../models/customer'); // customer model imported for use
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// CUSTOMER REGISTRATION

router.post('/register', async (req, res) => {
    // Before the model is being used in the request body, an object of the customer model needs to be created.
    const newCustomer = new Customer({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString(),
    });

    try {
        // We will use the await and save method to save new customer details
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CUSTOMER LOGIN 

router.post('/login', async (req, res) => {
    try {
        const customer = await Customer.findOne({ username: req.body.username }); // findOne because only one user one system mechanism
        
        if (!customer) {
            return res.status(400).json("Wrong customer credentials.");
        }

        // The password is being checked with the corresponding one in the database, decrypted, and then converted to string with utf8 encoding.
        const decryptedPassword = CryptoJS.AES.decrypt(customer.password, process.env.SEC_PASS);
        const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(400).json("Wrong customer credentials.");
        }
        // Authentication after username and password checking 
        const accessToken = jwt.sign({
           id: customer._id,
           isAdmin : customer.isAdmin
        },"logistics47",{expiresIn:"3d"});

        const { password, ...others } = customer._doc;

        res.status(200).json({...others,accessToken});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
