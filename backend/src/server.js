require('dotenv').config();

// Import del modulo Express
const express = require('express');
// Creazione applicazione Express
const app = express();
// Import middleware Cors
const cors = require('cors');
app.use(express.static('public'));

const dbConnect = require('./config/database.config');
dbConnect();

// Import delle rotte
const productRouter = require('./routers/product.router');
const categoryRouter = require('./routers/category.router');
const userRouter = require('./routers/user.router');

app.use(express.json());
// Utilizzo di cors per consentire richieste da http://localhost:4200
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"
}));

// Utilizzo delle rotte importate
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);

// Avvia il server  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
