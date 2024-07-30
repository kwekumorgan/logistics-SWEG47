// Database models for customers and its schema

const mongoose = require('mongoose');


const ordersSchema = new mongoose.Schema({
    userId :{type:String, required:true},
    products:[
        {
        productId : {
            type:String
        },
        quantity: {
            type:Number,
            default:1
        }
    }
    ],
    amount:{type:Number, required:true},
    address:{type:Object,required:true},
    status:{type:String , default:'Order pending,confirmation will be sent to your email shortly'}
   
    
},
    {timestamps:true}
);

module.exports= mongoose.model('orders',ordersSchema);