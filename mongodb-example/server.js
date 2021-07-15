// Load Package
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// MongoDB
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb+srv://test:1234@cluster0.fuwqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Model
var examModel = require('./models/Board');

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 8000;

// Router
var router = require('./routes')(app, examModel);

// Run
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});