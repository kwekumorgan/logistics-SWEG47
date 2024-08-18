const router = require('express').Router();
const products = require('../models/products');
const Products = require('../models/products');
const {verifyToken ,verifyTokenAndAuthorization,verifyTokenAdmin,} = require('./VerifyToken');

// CREATE OR ADD PRODUCTS

router.post('./', verifyTokenAdmin,async(req,res)=>{

    const newProduct = new Products(req.body);
    try{
        // Please add an item based on the schema it has in the product model
        const savedProducts = await newProduct.save();
        res.status(200).json(savedProducts);

    } catch(err){
        res.status(500).json(err);
    }
});


// UPDATE PRODUCTS
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  

    try {
        const updatedProducts = await Products.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedProducts);
    } catch (err) {
        res.status(500).json( err );
    }
});

// DELETE ITEM
router.delete('./:id', verifyTokenAndAuthorization, async(req,res)=>{
    // After verification the system will then confirm deletion
    try{
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET A PARTICULAR PRODUCT(ADMIN ONLY)
router.get('./find/:id', async(req,res)=>{
    // After verification the system will then grant access for admins to get details of users
    try{
        const  retrieveProducts = await Products.findById(req.params.id);

        // Destructure the response to exclude the password when retrieved
        const {password, ...others} = retrieveProducts._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET ALL PRODUCTS (BY QUERY OR CATEGORY)
router.get('./', async(req,res)=>{

    const qNew= req.query.new //if you want to use a query 
    const qCategory= req.query.category // if you want to use a category
    
    try{

        let product;

        if(qNew){
            product = await Products.find().sort({createdAt: -1}).limit(5);
        } else if(qCategory){
            product = await Products.find({cat:{
                $in: [qCategory],
            }
            })
        }else {
            product = await Products.find();
        };

        
        // Data to be retrieved gets sorted first. Using a query generates the latest data but only 5
        // If you want all customer data then you dont have to use a query
        const  retrieveAll = query? await Products.find().sort({_id:-1}).limit(5) : await Customer.find();

        res.status(200).json(retrieveAll);
    }
    catch(err){
        res.status(500).json(err)
    }
});




module.exports = router