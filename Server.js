const express = require("express");
const routes = require("./router");
const mysqlDb = require('./model')
const app = express();
const port = 3000;

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public/build'));

app.use("/api", routes);

mysqlDb.connection();

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});