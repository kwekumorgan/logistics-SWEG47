const router = require('express').Router();
const CryptoJS = require('crypto-js');
const { verifyTokenAndAuthorization } = require('./VerifyToken');
const Customer = require('../models/customer')
const dotenv = require('dotenv');
dotenv.config();

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

module.exports = router;
