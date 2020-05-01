let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define the schema for publishers in the database/collection
let PublisherSchema = new Schema (
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        phoneNumber: {type: Number, required: true},
        date : {type : Date, default : Date.now} 
    }
)

module.exports = mongoose.model('PublisherSchema200501', PublisherSchema);