const mongoose = require('mongoose');
const express = require('express');
const receitaRoute = require('./route/receita');
require('dotenv').config();

const app = express();

app.use(receitaRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res) => {
    res.status(404).json({ msg: 'Endpoint inexistente' });
});

// Load environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB using environment variable
mongoose.connect(MONGODB_URI).then(() => {
    // Start the server after successful connection
    app.listen(3000, () => console.log('Iniciando o servidor'))
        .on('error', (err) => console.error('Erro ao iniciar o servidor:', err));
}).catch((err) => console.log(err));