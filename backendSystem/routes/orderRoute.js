const router = require('express').Router();
const Order = require('../models/orders');

const {verifyToken ,verifyTokenAndAuthorization,verifyTokenAdmin,} = require('./VerifyToken');

// CREATE 

router.post('./',verifyTokenAdmin,async(req,res)=>{// Anybody at all can create cart , only login authorization needed 

    const newOrder = new Order(req.body);
    try{
    
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch(err){  
        res.status(500).json(err);
    }
});


// UPDATE (ONLY ADMIN)
router.put('/:id', verifyTokenAdmin, async (req, res) => {
  // Users logged in can do any update in the cart 

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json( err );
    }
});

// DELETE ITEM
router.delete('./:id', verifyTokenAdmin, async(req,res)=>{
    // After verification the system will then confirm deletion
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET USER ORDERS( ANY USER LOGGED IN CAN GET ORDERS)
router.get('./find/:userId', verifyTokenAndAuthorization,async(req,res)=>{// The id is the user id because a cart belong to a partucular user
    // After verification the system will then grant access for admins to get their orders
        try{
        const  retrieveOrder = await Order.find({userId: req.params.userId});

       
        res.status(200).json(retrieveOrder);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET ALL ORDERS(THIS SECTION IS FOR ONLY ADMIN)
router.get('./',verifyTokenAdmin, async(req,res)=>{
try{
    const allOrders= await Order.find()
    res.status(200).json(allOrders);
}catch(err){
    res.status(500).json(err);
}
   

});


// GET MONTHLY INCOME

router.get('./totalIncome',verifyTokenAdmin, async(req,res)=>{
    const date = new Date();
    // Compares income for the last two months
    const lastMonth = new Date(date.setMonth(date.getMonth()- 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try{ // We will aggregate the data 
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte : previousMonth}}},
            {
                $project:{
                month:{$month:"createdAt"},
                sales:'$amount',
                },
            },
            {
                $group:{
                    _id:"$month",
                    total: {$sum : "$sales"},
                },
            },
        ]);
        res.status(200).json(income);

    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router