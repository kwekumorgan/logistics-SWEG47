// Database models for customers and its schema

const mongoose = require('mongoose');
const {boolean}= require('webidl-conversions')

const productsSchema = new mongoose.Schema({
    title :{type:String, required:true ,unique:true},
    desc: { type:String, required:true , unique:true},
    img:{type:String, required :true},
    cat:{type:Array},
    size:{type:String},
    color:{type:String},
    prize:{type:Number, required :true},
    
},
    {timestamps:true}
);

module.exports= mongoose.model('products',productsSchema);