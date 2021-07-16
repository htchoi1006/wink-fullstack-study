const mongoose = require('mongoose');
const { Schema } = mongoose;

const boardSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    body: {
        type: String,
        required: true
    }
}, { collection: "boards" });

module.exports = mongoose.model('Board', boardSchema);

