const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema(
    {
        email: { type: String, required: false, unique: true }
    },
   
);

module.exports = mongoose.model("Newsletter", NewsletterSchema);