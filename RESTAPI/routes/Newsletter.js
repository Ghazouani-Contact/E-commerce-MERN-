const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Newsletter = require("../models/Newsletter");
const router = require("express").Router();




// CREATE or add new Contact
router.post("/", verifyToken, async (req, res) => {
    const newNewsletter = new Newsletter(req.body);
    try {
        const savedNewsletter = await newNewsletter.save();
        res.status(200).json(savedNewsletter);

    } catch (err) {
        res.status(500).json(err);
    }
});
//Update orders

//Delete 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Newsletter.findByIdAndDelete(req.params.id)
        res.status(200).json("Newsletter has been deleted...")
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get Contact
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const newsletters = await Newsletter.find(req.params.id)
        res.status(200).json(newsletters);
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get aLL Contact
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const newsletters = await Newsletter.find();
        res.status(200).json(newsletters);
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;