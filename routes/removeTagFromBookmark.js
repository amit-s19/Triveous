const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');
const Tags = require('../models/tags');

router.delete('/', (req,res) => {
    const bookmark = req.body.bookmark
    const tag  = req.body.tag
    Tags.findOne({title: tag}).then(result => {
        if(!result) {
            let Res = {
                response: false,
                message: `Please add the tag before removing from boookmark!`,
                output: []
            }
            return res.status(400).send(Res);
        } else {
            const tagID = result._id
            Bookmarks.findOne({link: bookmark}).then(result => {
                if(!result) {
                    let Res = {
                        response: false,
                        message: `Please add the bookmark before removing tag from it!`,
                        output: []
                    }
                    return res.status(400).send(Res);
                } else {
                    const foundTags = result.tags
                    if(foundTags.includes(tagID)) {
                        Bookmarks.updateOne({link: bookmark}, {
                            $pull: {tags: tagID},
                            $set: {time_updated: new Date().getTime()}
                        }).then(result => {
                            let Res = {
                                response: true,
                                message: `Tag removed from the bookmark successfully!`,
                                output: result
                            }
                            return res.status(200).send(Res);
                        })
                    } else {
                        let Res = {
                            response: false,
                            message: `Bookmark doesn't contain the requested tag!`,
                            output: []
                        }
                        res.status(400).send(Res);
                    }
                }
            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
});

module.exports = router;