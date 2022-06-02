var express = require("express"),
app = express(),
port = process.env.PORT || 3000,
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
Entry = require("./api/models/leaderboardModel");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
    "mongodb+srv://NicoZar:Laloca22@cluster1.0jba6cr.mongodb.net/?retryWrites=true&w=majority"
);
var routes = require("./api/routes/leaderboardRoutes");
routes(app);
app.listen(port);
console.log("API server started on " + port);

/*190.55.100.255/32*/ 
