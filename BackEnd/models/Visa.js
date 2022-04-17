const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visaSchema = new Schema({
    name : { type : String, required : true },
    cardNumber : { type : Number, required : true },
    cvvNumber : { type : Number, required : true },
    expDate : { type : Number, required : true },
})

const Visa = mongoose.model("visa",visaSchema);

module.exports = Visa;