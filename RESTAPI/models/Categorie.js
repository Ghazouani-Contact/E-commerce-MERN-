const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        cat: { type: String, required: true },
       
    },
);

module.exports = mongoose.model("Categorie", CategorieSchema);