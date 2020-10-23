const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

router.delete('/', (req,res) => {
    const link = req.body.link
    Bookmarks.findOne({link}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `'${link}' bookmark doesn't exist!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            Bookmarks.remove({link}).then(result => {
                let Res = {
                    response: true,
                    message: `'${link}' bookmark removed from db!`,
                    output: result
                }
                return res.status(200).send(Res)
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;