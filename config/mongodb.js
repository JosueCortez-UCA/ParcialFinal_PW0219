const Mongoose = require("mongoose");

let database = "sismosDB";
let port = "27017";
let host = "localhost";
let usu = "admin";
let pass = "root2";
//let uri = `mongodb://${host}:${port}/${database}`
let uri = `mongodb+srv://${usu}:${pass}@cluster0-4gs8g.mongodb.net/${database}?retryWrites=true&w=majority`;

const connect = ()=>{
    Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`Conection to ${database} successfully`);
    })
    .catch(()=>{
        console.log(`An error happened trying to connect ${database} database`);
    });;

    Mongoose.Promise = global.Promise;
}

module.exports = {
    connect,
};