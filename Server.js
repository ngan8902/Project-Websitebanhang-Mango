const express = require("express");
const routes = require("./router");
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public/build'));

app.use("/api", routes);


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });