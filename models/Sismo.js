const Mongoose= require ("mongoose");

const sismoSchema = Mongoose.Schema({
    titulo: String,
    magnitud: Number,
    epicentro: String,
    latitud: Number,
    longitud: Number,
    replicas: Number,
});

module.exports = Mongoose.model("Sismo", sismoSchema);
