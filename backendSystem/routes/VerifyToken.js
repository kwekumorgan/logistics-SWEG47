/* This is a form of a middleware that will verify token for potential changes 
like password and username update to make sure only verified users make
those changes */

const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        // Verify function
        jwt.verify(token, 'Logistics47',(err,user)=>{
            if(err) return res.status(403).json('Token is invalid');
            req.user= user;
            next();
        });

    } else{
        return res.status(401).json('You are not authenticated');
    }
};

const verifyTokenAndAuthorization =(req,res,next)=>{

    verifyToken(req,res,()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json('Sorry you are not allowed to do this changes ')
        }
    }
      

    );
  
module.exports = {verifyToken};
