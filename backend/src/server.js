// Import del modulo Express
const express = require('express');

// Creazione applicazione Express
const app = express();

// Import middleware Cors
const cors = require('cors');

// Import delle rotte
const productRoute = require('./routers/product.router');
const categoryRoute = require('./routers/category.router');

// Utilizzo di cors per consentire richieste da http://localhost:4200
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"
}));

// Utilizzo delle rotte importate
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

// Avvia il server  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
