const mongoose = require('./index.js');

const Schema = mongoose.Schema;

//change to other name later
const walletPr= new Schema({
    title: String,
    date: Date,
    venue: String,
});

module.exports = mongoose.model('walletPr', walletPr);