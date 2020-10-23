const { Timestamp } = require("bson");
var mongoose = require("mongoose");


var Schema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            reequired: true
        },
        time_created: {
            type: Number,
            default: new Date().getTime()
        },
        time_updated: {
            type: Number,
            default: new Date().getTime()
        },
        publisher: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
        }
    }
);

var bookmarks = mongoose.model("bookmarks", Schema);

module.exports = bookmarks;