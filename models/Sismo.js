const Mongoose= require ("mongoose"),
    Schema = Mongoose.Schema;

const sismoSchema = new Schema({
    titulo: String,
    magnitud: Number,
    epicentro: String,
    latitud: Number,
    longitud: Number,
    replicas: Number,
}, {
    timestamps: true
});

module.exports = Mongoose.model("Sismo", sismoSchema);
