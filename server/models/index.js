const mongoose = require('mongoose');

const uri = "mongodb://1234:1234@ac-nil1dag-shard-00-00.1fgcexe.mongodb.net:27017,ac-nil1dag-shard-00-01.1fgcexe.mongodb.net:27017,ac-nil1dag-shard-00-02.1fgcexe.mongodb.net:27017/?ssl=true&replicaSet=atlas-p4fbzs-shard-0&authSource=admin&retryWrites=true&w=majority";


// mongoose
function start() {
    mongoose
        .connect(uri)
        .then(() => console.log('Connected to Mongoose'))
        .catch((err) => console.log('Error connecting to Mongoose: ', err));
}

start();
module.exports = mongoose;