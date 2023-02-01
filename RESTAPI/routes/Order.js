const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Order = require("../models/Order");
const router = require("express").Router();




// CREATE or add new order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (err) {
        res.status(500).json(err);
    }
});
//Update orders
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true });
        res.status(200).json(updateOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Delete 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get orders
router.get("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find(req.params.id)
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)

    }
});
//admin Get aLL orders
router.get("/",verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;

    try {
        const orders = query

            ? await  Order.find().sort({_id:-1}).limit(5)
            : await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)
    }
});
//GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $lt: date },
                   
                    products: { $elemMatch: { _id: productId } },
                    
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        console.log(income)
        console.log(productId)
        console.log(date)
        console.log(new Date())

        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;