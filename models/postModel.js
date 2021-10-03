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
        data: Buffer,
        contentType: String
    }
})

const validateUser = user =>{
    const schema = joi.object({
        userId: joi.string().min(5).max(512).required(),
        name: joi.string().min(2).max(255).required(),
        title: joi.string().required().min(2).max(255),
        body: joi.string().min(2).required()
    })

    return schema.validate(user);
}

module.exports.validate = validateUser;
module.exports.BlogModel = model('Post',blogSchema);