let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define the schema for books in the database/collection
let BookSchema = new Schema (
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        publisher: {type: String, required: true},
        publishDate : {type : Date, default : Date.now} 
    }
)

module.exports = mongoose.model('BookSchema200501', BookSchema);