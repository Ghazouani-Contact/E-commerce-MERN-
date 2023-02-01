const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Categorie = require("../models/Categorie");
const router = require("express").Router();




// CREATE or add new Categories
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCategorie = new Categorie(req.body);
    try {
        const savedCategorie = await newCategorie.save();
        res.status(200).json(savedCategorie);

    } catch (err) {
        res.status(500).json(err);
    }
});
//Update Categories
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updateCategorie = await Categorie.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true });
        res.status(200).json(updateCategorie);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Delete 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.id)
        res.status(200).json("Categorie has been deleted...")
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get Categories not like user here any body can see products
router.get("/find/:id", async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id)
        res.status(200).json(categorie);
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get aLL products
router.get("/", async (req, res) => {

    try {
        const categories = await Categorie.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;