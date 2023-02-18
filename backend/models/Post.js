const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{type: String, required: true, min: 4},
    abstract:{type: String, required: true},
    author:{type: String},
    content:{type: String, required: true},
    publicationDate: {type: Date, default: Date.now() },
    created_at : {type: Date, default: Date.now() },
    
})
module.exports = mongoose.model('Post', postSchema);
 
