const express = require('express');
const router = express.Router();
const Tags = require('../models/tags');

router.get('/', (req,res) => {
    Tags.find({}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `No tags exist!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            let Res = {
                response: true,
                message: `Tags found in db!`,
                output: result
            }
            return res.status(200).send(Res)
        }
    }).catch(err => console.log(err))
});

module.exports = router;