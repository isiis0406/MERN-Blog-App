const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{type: String, required: true, min: 4},
    abstract:{type: String, required: true},
    author:{type: String},
    content:{type: String, required: true},
    cover:{type: String, required: false}
    
},{timestamps: true})
module.exports = mongoose.model('Post', postSchema);
 
