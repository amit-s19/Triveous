const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');
const Tags = require('../models/tags');

router.post('/', (req,res) => {
    const bookmark = req.body.bookmark
    const tag  = req.body.tag
    Tags.findOne({title: tag}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `Please add the tag before adding to boookmark!`,
                output: []
            }
            return res.status(400).send(Res);
        } else {
            const tagID = result._id
            Bookmarks.findOne({link: bookmark}).then(result => {
                if(!result) {
                    let Res = {
                        response: false,
                        message: `Please add the bookmark before assigning tag to it!`,
                        output: []
                    }
                    return res.status(400).send(Res);
                } else {
                    const foundTags = result.tags
                    if(foundTags.includes(tagID)) {
                        let Res = {
                            response: false,
                            message: `Tag already exists!`,
                            output: []
                        }
                        return res.status(400).send(Res);
                    } else {
                        Bookmarks.updateOne({link: bookmark}, {
                            $addToSet: {tags: tagID},
                            $set: {time_updated: new Date().getTime()}
                        }).then((result) => {
                            let Res = {
                                response: true,
                                message: `Tag added to bookmark successfully!`,
                                output: result
                            }
                            return res.status(200).send(Res);
                        }).catch(err => console.log(err))
                    }
                }
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;