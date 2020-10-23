const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

router.post('/', (req,res) => {
    const link = req.body.link;
    const title = req.body.title;
    const publisher = req.body.publisher;
    Bookmarks.findOne({link}).then(result => {
        if(result) {
            let Res = {
                response: false,
                message: `'${link}' bookmark already exists!`,
                output: []
            }
            return res.status(400).send(Res)
        } else {
            const bookmark = new Bookmarks({
                link: link,
                title: title,
                publisher: publisher
            });
            bookmark.save().then(data => {
                let Res = {
                    response: true,
                    message: `'${link}' bookmark successfully added!`,
                    output: data
                }
                res.status(200).send(Res);
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;