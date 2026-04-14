// Importa Mongoose (librería para conectar Node con MongoDB)
const mongoose = require ("mongoose")

const connectDB = async () => {
    const mongoURI = process.env.MY_MONGO_URI
    await mongoose.connect(mongoURI)
    console.log("Conectado a Mongo");
}

module.exports = connectDB