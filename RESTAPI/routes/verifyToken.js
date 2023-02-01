const jwt= require("jsonwebtoken");

//token existe in headers or not(authenticated or not)
const verifyToken =(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];// because bearer in token in header
        jwt.verify(token, process.env.JWT_PASS,(err,user)=>{
            if (err) res.status(403).json ("token is not valide");
            req.user = user;
            next();
        });
    } else {
       return res.status(401).json("you are not authenticated");
      
    }
};
//verify token belong to client or admin or null (if id=id or isadmin) 
const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            res.status(403).json("you are not alowed to do that!");
        }
    });
};
//  just admin can crud Products and orders...
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("you are not alowed to do that!");
        }
    });
};
/*just Rstock can crud Products and orders...
const verifyTokenAndRstock = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isRstock) {
            next();
        } else {
            res.status(403).json("you are not alowed to do that!");
        }
    });
};*/
module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
