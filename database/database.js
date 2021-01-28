var mongoose = require('mongoose');

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("mtg"))
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("cards").find({}).toArray(callback);
}

// Database
mongoClient.connect('connected', function () {
 console.log('===== Conexão estabelecida com sucesso =====');
});
mongoose.connection.on('error', function (err) {
 console.log('===== Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('===== Conexão finalizada =====');
}); 

module.exports = { findAll }