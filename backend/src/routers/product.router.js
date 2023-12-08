const express = require('express');
const { sample_product } = require('../products');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(sample_product);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = sample_product.find(product => product._id === id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Prodotto non trovato' });
    }
});

module.exports = router;