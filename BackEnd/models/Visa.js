const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visaSchema = new Schema({
    name : { type : String, required : true },
    cardNumber : { type : String, required : true },
    cvvNumber : { type : String, required : true },
    expDate : { type : String, required : true },
})

const Visa = mongoose.model("visa",visaSchema);

module.exports = Visa;