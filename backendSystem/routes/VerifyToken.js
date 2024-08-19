/* This is a form of a middleware that will verify token for potential changes 
like password and username update to make sure only verified users make
those changes */

const jwt = require('jsonwebtoken');




// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        const refinedToken = token.split("")[1];
        jwt.verify(refinedToken, process.env.SECRET_KEY, (err, user) => { // user here is just a parameter
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

// Middleware to verify token and authorization for admin pages only
const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) { // if the user is an admin then manipulation can be done at allocated admin pages
            next();
        } else {
            res.status(403).json("You are not  an admin. Restricted Access!");
        }
    });
}; 

module.exports = { verifyToken, verifyTokenAndAuthorization , verifyTokenAdmin};
