const { Schema, model } = require('mongoose');
const joi = require('joi');

const blogSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2024
    },
    body: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 5000
    },
    image: {
        type: Object,
        required: true
    }
})

const validateUser = user =>{
    const schema = joi.object({
        userId: joi.string().min(5).max(512).required(),
        name: joi.string().min(2)
    })

    return schema.validate(user);
}

module.exports.BlogModel = model('Post',blogSchema);