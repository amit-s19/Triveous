var mongoose = require("mongoose");
require("dotenv").config();
// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));


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