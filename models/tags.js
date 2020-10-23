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
        }
    }
);

var tags = mongoose.model("tags", Schema);

module.exports = tags;