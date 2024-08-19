const router = require('express').Router();
const Cart = require('../models/cart');

const {verifyToken ,verifyTokenAndAuthorization,verifyTokenAdmin,} = require('./VerifyToken');

// CREATE 

router.post('./',verifyToken,async(req,res)=>{// Anybody at all can create cart , only login authorization needed 

    const newCart = new Cart(req.body);
    try{
    
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch(err){  
        res.status(500).json(err);
    }
});


// UPDATE 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  // Users logged in can do any update in the cart 

    try {
        const updatedCart = await Products.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json( err );
    }
});

// DELETE ITEM
router.delete('./:id', verifyTokenAndAuthorization, async(req,res)=>{
    // After verification the system will then confirm deletion
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET USER CART 
router.get('./find/:userId', verifyTokenAndAuthorization,async(req,res)=>{// The id is the user id because a cart belong to a partucular user
    // After verification the system will then grant access for admins to get details of users
    try{
        const  retrieveCart = await Cart.findOne({userId: req.params.userId});

       
        res.status(200).json(retrieveCart);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET ALL CART(THIS SECTION IS FOR ONLY ADMIN)
router.get('./',verifyTokenAdmin, async(req,res)=>{
try{
    const allCarts= await Cart.find()
    res.status(200).json(allCarts);
}catch(err){
    res.status(500).json(err);
}
   

});



module.exports = router