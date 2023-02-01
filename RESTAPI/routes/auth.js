const router = require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");
const jwt =require("jsonwebtoken");

//Register
router.post("/register", async(req,res)=>{
const newUser = new User({           
    username: req.body.username,
    email: req.body.email,
   // adress: req.body.adress,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    isRstock: req.body.isRstock,
    isRcomm: req.body.isRcomm,
   
    password: CryptoJS.AES.encrypt(req.body.password, process.env.CryptoPass).toString(),
});  
try{
    //savedinDB
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
} catch (err){
    res.status(500).json(err);
}
  
});
//send req with token res is admin or not date ex token
router.post('/me', (req, res) => {
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.JWT_PASS);
        } catch (e) {
            return res.status(401).send('unauthorized'); 
        }
    }

   

    return res.status(200).send(decoded)
})

//Login

router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne(
            { username: req.body.username }
            );
        !user && res.status(401).json('Wrong credentials');

        const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.CryptoPass);

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
         res.status(401).json('Wrong credentials');

        const { password, ...others} = user._doc; //for not send password in BD we send just other information
        //UseJWT 
        const accesToken=jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin,
            isRstock: user.isRstock,
            isRcomm : user.isRcomm,
          
        }, process.env.JWT_PASS,
        {expiresIn:"3d"}
        ); //

        res.status(200).json({...others, accesToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router