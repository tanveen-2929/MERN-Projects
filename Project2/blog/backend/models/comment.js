const mongoose = require('mongoose');   

const commentSchema = new mongoose.Schema({ 
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true},
    article: {type: String, required: true},
    date: {type: Date,default:Date.now()}
});
module.exports = mongoose.model('Comment', commentSchema,'Comment');  
 