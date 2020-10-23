const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

router.get('/', (req,res) => {
    Bookmarks.find({}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `No bookmarks exist!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            let Res = {
                response: true,
                message: `Bookmarks found in db!`,
                output: result
            }
            return res.status(200).send(Res)
        }
    }).catch(err => console.log(err))
});

module.exports = router;