const express = require('express');
const { sample_product } = require('../products');
const asyncHandler = require('express-async-handler');
const ProductModel = require('../models/product.model');
const router = express.Router();


router.get("/seed", asyncHandler(
    async (req, res) => {
        const productCount = await ProductModel.countDocuments();
        if (productCount > 0) {
            res.send("Seed is already done");
            return;
        }

        await ProductModel.create(sample_product);
        res.send("Seed is done");
    }
));


router.get("/", asyncHandler(
    async (req, res) => {
        const products = await ProductModel.find();
        res.send(products);
    }
));


router.get("/:id", asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: 'Prodotto non trovato' });
        }
    }
));


module.exports = router; 