
// Import del modulo Express
const express = require('express');

// Creazione applicazione Express
const app = express();

// Import middleware Cors
const cors = require('cors');
const { sample_category } = require('/Users/cecco/GEN - Progetti/Web/MUSIC_HERO/backend/src/data.js');
const { sample_product } = require('/Users/cecco/GEN - Progetti/Web/MUSIC_HERO/backend/src/products.js');

// Utilizzo di cors per consentire richieste da http://localhost:4200
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"
}));

app.get("/api/categories", (req, res) => {
    res.send(sample_category);
});

app.get("/api/categories/parent", (req, res) => {
    const categories = sample_category.filter(category => category.parent === null);
    res.send(categories);
});

console.log(sample_product);
app.get("/api/products", (req, res) => {
    res.send(sample_product);
})

// Avvia il server  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});
