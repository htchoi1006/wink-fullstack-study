const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const MONGODB_URL = "mongodb+srv://test:1234@cluster0.fuwqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
const Board = require('./Board');
const port = 8000;



mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database successfully')
    }

})

app.set('port', process.env.PORT || port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const router = require('./router')(app, Board);


app.listen(port, () => {
    console.log(`${port} port start`)
})
