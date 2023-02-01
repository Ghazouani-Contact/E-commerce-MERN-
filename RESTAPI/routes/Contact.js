const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Contact = require("../models/Contact");
const router = require("express").Router();


 

// CREATE or add new Contact
router.post("/", verifyToken, async (req, res) => {
    const newContact = new Contact(req.body);
    try {
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);

    } catch (err) {
        res.status(500).json(err);
    }
});
//Update orders

//Delete 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json("Contact has been deleted...")
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get Contact
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const contacts = await Contact.find(req.params.id)
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get aLL Contact
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;