const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
   
}, {timestamps: true});

const Blog = mongoose.model('Collection', blogSchema);
module.exports = Blog;