const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        username: { type: String, required: false, unique: true },
        email: { type: String, required: false, unique: true },
        msg: { type: String, required: false },
        phone: { type: Number, required: false },
    },
   
);

module.exports = mongoose.model("Contact", ContactSchema);