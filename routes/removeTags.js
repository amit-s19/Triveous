const express = require('express');
const router = express.Router();
const Tags = require('../models/tags');

router.delete('/', (req,res) => {
    const title = req.body.title
    Tags.findOne({title}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `'${title}' tag doesn't exist!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            Tags.remove({title}).then(result => {
                let Res = {
                    response: true,
                    message: `'${title}' tag removed from db!`,
                    output: result
                }
                return res.status(200).send(Res)
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;