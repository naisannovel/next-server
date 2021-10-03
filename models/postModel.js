const { Schema, model, Model } = require('mongoose');

const blogSchema = new Schema({

})

module.exports.BlogModel = model('Post',blogSchema);