const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDb Connection
mongoose.connect("mongodb://localhost:27017/blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//== Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", 'ejs');

//== Routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))
app.use(require('./routes/blog'))


app.listen(4500, () => {
    console.log("Server started listening on port: 4500");
})