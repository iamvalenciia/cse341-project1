import express from 'express';
import bodyParser from 'body-parser';
import { initDb } from './db/connect.js';
import dotenv from 'dotenv';
import allRoutes from './routes/index.js';

dotenv.config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const app = express();

app
  .use(bodyParser.json()) //use the body-parser middleware, which helps us decode the body from an HTTP request:
  .use(bodyParser.urlencoded({ extended: true })) // extract data from the <form> element and add them to the body property in the request object.
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }) //to allow requests from any other websites (which is called "cross-origin requests").
  .use('/', allRoutes); //tells the program what to do when it gets different kinds of information.

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port} | http://localhost:${port}/`);
  }
});
