// Import package(s)
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

var userRoutes = require('./routes/user-routes.js');
var ProductRoutes = require('./routes/product-routes.js');

//Connect to MongoDB
var dbURL = process.env.DB_URL;

var dbConfig = {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
};

mongoose
.connect(dbURL, dbConfig)
.then(
    function() {
        console.log("Database is connected");
    }
)
.catch(
    function(dbError) {
        console.log('Database connection error', dbError)
    }
);

//configure middlewares for express 
var bodyParserConfig = {extended: false};
server.use( bodyParser.urlencoded(bodyParserConfig));
server.use( bodyParser.json() );




// Create routess
server.get(
    '/',
    function(req, res) {
            res.send('<h1>Welcome to my first server!<h1/>');
    }
    
);



server.use(
    '/users', userRoutes
);


server.use(
    '/products', ProductRoutes
);









// Listen to port number
server.listen(
    process.env.PORT,
    function() {
            console.log('server running at "http://localhost:3001/" ');
    }

);