const express = require('express');
const { sample_category } = require('../data');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(sample_category);
});

router.get("/parent", (req, res) => {
    const categories = sample_category.filter(category => category.parent === null);
    res.send(categories);
});


module.exports = router;
