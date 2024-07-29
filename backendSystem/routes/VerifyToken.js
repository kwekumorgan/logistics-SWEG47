/* This is a form of a middleware that will verify token for potential changes 
like password and username update to make sure only verified users make
those changes */

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => { // user here is just a parameter
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};

// Middleware to verify token and authorization
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
