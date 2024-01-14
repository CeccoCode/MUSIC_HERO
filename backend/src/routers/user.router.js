const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const UserModel = require('../models/user.model');
const { HTTP_BAD_REQUEST } = require('../constants/https_status');


router.get("/seed", asyncHandler(
    async (req, res) => {
        const userCount = await UserModel.countDocuments();
        if (userCount > 0) {
            res.send("Seed is already done");
            return;
        }

        await UserModel.create(sample_users);
        res.send("Seed is done");
    }
));



router.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email, password });
        if (user) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
        }
    }
));


router.post("/register", asyncHandler(
    async (req, res) => {
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.status(HTTP_BAD_REQUEST).send('User is already exist, please login!');
            return;
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
            isAdmin: false
        };

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))


const generateTokenResponse = (user) => {
    const token = jwt.sign({
        id: user.id, // Assicurati che 'id' sia la proprietà corretta per l'identificatore univoco dell'utente
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, { // Rimuovi l'esclamativo (!), non necessario in JavaScript
        expiresIn: "30d"
    });

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
};

module.exports = router;