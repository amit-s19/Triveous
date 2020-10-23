const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require("dotenv").config();

//Middlewares.
app.use(bodyParser.json());
app.use(cors());

//Importing routes.
const addBookmark = require('./routes/addBookmark');
const getBookmarks = require('./routes/getBookmarks');
const removeBookmark = require('./routes/removeBookmark');
const addTagToBookmark = require('./routes/addTagToBookmark');
const removeTagFromBookmark = require('./routes/removeTagFromBookmark');
const addTags = require('./routes/addTags');
const getTags = require('./routes/getTags');
const removeTags = require('./routes/removeTags');

//Setting routes.
app.use('/addBookmark', addBookmark);
app.use('/getBookmarks', getBookmarks);
app.use('/removebookmark', removeBookmark);
app.use('/addTagToBookmark', addTagToBookmark);
app.use('/removeTagFromBookmark', removeTagFromBookmark);
app.use('/addTags', addTags);
app.use('/getTags', getTags);
app.use('/removeTags', removeTags);

//Routes
app.get('/', (req,res) => {
    res.send("Home");
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => 
    console.log('Connected to DB!')
);

app.listen(3000);