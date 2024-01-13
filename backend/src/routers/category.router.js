const express = require('express');
const { sample_category } = require('../data');
const asyncHandler = require('express-async-handler');
const CategoryModel = require('../models/category.model');
const ProductModel = require('../models/product.model');
const router = express.Router();


router.get("/seed", asyncHandler(
    async (req, res) => {
        const categoryCount = await CategoryModel.countDocuments();
        if (categoryCount > 0) {
            res.send("Seed is already Done!");
            return;
        }
        await CategoryModel.create(sample_category);
        res.send("Seed is Done!");
    }
))


router.get("/", asyncHandler(
    async (req, res) => {
        const category = await CategoryModel.find();
        res.send(category);
    }
));


router.get("/parent", asyncHandler(
    async (req, res) => {
        const parentCategories = await CategoryModel.find({ parent: null });
        res.send(parentCategories);
    }
));


router.get("/:categoryId", asyncHandler(
    async (req, res) => {
        const { categoryId } = req.params;
        const products = await ProductModel.find({ category: categoryId });
        res.send(products);
    }
));

module.exports = router;
