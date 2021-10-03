const { validate, BlogModel } = require('../models/postModel');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

module.exports.createPost = (req,res)=>{
    let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req,(err,fields,files)=>{

            if(err) return res.status(400).send('Something went wrong');
            const blogData = _.pick(fields,["title","body"]);
            blogData.name = req.user.name;
            blogData.userId = req.user.user_id;
            const { value, error } = validate(blogData);
            if(error) return res.status(400).send(error.details[0].message);
            let post = new BlogModel(value);

            if(files.image){
                fs.readFile(files.image.path,(err,data)=>{
                    if(err) return res.status(400).send('problem in file data')
                    post.image.data = data;
                    post.image.contentType = files.image.type;
                    post.save((err,result)=>{
                        if(err) res.status(500).send('Internal server error!')
                        else return res.status(201).send({
                            message: 'successfully added your post',
                            data: _.pick(result,["name","title","body"])
                        })
                    })
                })
            }else{
                return res.status(400).send('No image provided');
            }
        })
}


module.exports.getPhoto = async (req, res) => {
    const postId = req.params.id;
    const post = await BlogModel.findById(postId)
        .select({ image: 1, _id: 0 })
    res.set('Content-Type', post.image.contentType);
    return res.status(200).send(post.image.data);
}
