const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    heading: {type: String, required: true},
    blog: {type: String, required: true, unique: true},
    uderId: {type: String, required: true, minLength: 6},
    role: {type: String, required: true}
});

blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', blogSchema);