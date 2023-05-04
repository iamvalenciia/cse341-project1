const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const port = process.env.PORT || 3000;
const app = express();

app
  .use(bodyParser.json()) //use the body-parser middleware, which helps us decode the body from an HTTP request:
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  }) //to allow requests from any other websites (which is called "cross-origin requests").
  .use("/", require("./routes")); //tells the program what to do when it gets different kinds of information.

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

console.log(`Server running at http://localhost:${port}/`);
