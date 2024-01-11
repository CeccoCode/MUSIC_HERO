// Import del modulo Express
const express = require('express');

// Creazione applicazione Express
const app = express();

// Import middleware Cors
const cors = require('cors');

// Import JsonWebToken
const jwt = require('jsonwebtoken');

// Import delle rotte
const productRoute = require('./routers/product.router');
const categoryRoute = require('./routers/category.router');
const { sample_users } = require('./user');


app.use(express.json());
// Utilizzo di cors per consentire richieste da http://localhost:4200
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"
}));

// Utilizzo delle rotte importate
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);


app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("User name or password is not valid");
    }
});

const generateTokenResponse = (user => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
});

// Avvia il server  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
