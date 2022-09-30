require('dotenv').config();
require('./models');

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routers');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI_MONGO);

app.use('/v1', routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})