const express = require('express');
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


router.get("/category/:categoryId", asyncHandler(
    async (req, res) => {
        const { categoryId } = req.params;
        const products = await ProductModel.find({ category: categoryId });
        res.send(products);
    }
));


// Rotta POST per aggiungere un nuovo prodotto
router.post("/", asyncHandler(
    async (req, res) => {
        // Crea un nuovo oggetto prodotto escludendo il campo _id
        const productData = req.body;
        delete productData._id; // Assicurati che _id non sia incluso

        const newProduct = new ProductModel(productData);
        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    }
));

// Rotta DELETE per eliminare un prodotto esistente
router.delete("/:id", asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(200).send({ message: 'Prodotto eliminato con successo' });
        } else {
            res.status(404).send({ message: 'Prodotto non trovato' });
        }
    }
));


module.exports = router; 