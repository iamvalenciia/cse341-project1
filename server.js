import express from 'express';
import bodyParser from 'body-parser';
import { initDb } from './db/connect.js';
import dotenv from 'dotenv';
import allRoutes from './routes/index.js';
import session from 'express-session';

dotenv.config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const app = express();

app
  .use(
    session({
      // eslint-disable-next-line no-undef
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
  )
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', allRoutes);

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port} | http://localhost:${port}/`);
  }
});
