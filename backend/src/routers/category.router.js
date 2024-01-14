const express = require('express');
const asyncHandler = require('express-async-handler');
const CategoryModel = require('../models/category.model');
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


module.exports = router;
