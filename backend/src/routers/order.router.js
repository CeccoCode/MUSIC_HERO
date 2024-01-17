const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { HTTP_BAD_REQUEST } = require('../constants/https_status');
const { OrderModel } = require('../models/order.model');
const OrderStatus = require('../constants/order_status');
const auth = require('../middlewares/auth.mid');

router.use(auth);

router.post('/create',
    asyncHandler(async (req, res) => {
        const requestOrder = req.body;
        if (requestOrder.items.length <= 0) {
            res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
            return;
        }
        await OrderModel.deleteOne({
            user: req.user.id,
            status: OrderStatus.NEW
        });

        const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
        await newOrder.save();
        res.send(newOrder);
    })
);

router.get('/newOrderForCurrentUser', asyncHandler(async (req, res) => {
    const order = await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

module.exports = router; 
