const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controllers.js");

app.use("/", router);
app.listen(port);