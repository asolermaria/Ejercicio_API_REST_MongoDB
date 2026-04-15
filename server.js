// Importa Express
const express = require('express');
const morgan = require("morgan");

// Importa la función que conecta con MongoDB
const connectDB = require ("./config/db_mongo")
require('dotenv').config();

// Crea la aplicación de Express
const app = express();

// Llamamos a la función para conectar con la BBDD
connectDB()

//Habilitar recepción de JSON por mi backend
//Parsear el "body" entrante a JSON
//Middleware (operación intermedia)
app.use(express.json());

app.use(morgan("dev"));

// Rutas
const routesProviders = require("./routes/providers.routes")

app.use("/api/providers", routesProviders)

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});