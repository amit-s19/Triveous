const express = require('express');
const router = express.Router();
const Tags = require('../models/tags');

router.post('/', (req,res) => {
    const title = req.body.title;
    Tags.findOne({title}).then(result => {
        if(result) {
            let Res = {
                response: false,
                message: `'${title}' tag already exists!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            const tag = new Tags({
                title: req.body.title
            });
            tag.save().then(data => {
                let Res = {
                    response: true,
                    message: `'${title}' tag successfully added!`,
                    output: data
                }
                res.status(200).send(Res);
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;