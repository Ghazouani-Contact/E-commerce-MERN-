const express=require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const RouterUser =require('./routes/user');
const RouterAuth = require('./routes/auth');
const RouterProduct = require('./routes/Product');
const RouterOrder = require('./routes/Order');
const RouterCart = require('./routes/cart');
const RouterCategories = require('./routes/Categorie');
//const stripeRoute = require("./routes/stripe");
const paymentRoute = require("./routes/FlouciRouter")
const RouterContact = require("./routes/Contact");
const RouterNewsletter = require("./routes/Newsletter");

const cors = require("cors");
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB Connection successfull!'))
.catch((err)=>{
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/users", RouterUser);
app.use("/api/auth", RouterAuth);
app.use("/api/Products", RouterProduct);
app.use("/api/orders", RouterOrder);
app.use("/api/Carts", RouterCart);
app.use("/api/Categories", RouterCategories);
//app.use("/api/checkout", stripeRoute);
app.use("/api/contacts", RouterContact);
app.use("/api/newsletters", RouterNewsletter);
app.use("/api",paymentRoute);


app.listen(5000,()=>{
    console.log('Bakend server is running!');
})