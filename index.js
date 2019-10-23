const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const bodyParserMiddleware = bodyParser.json();
const corsMiddleware = cors();

const userRouter = require('./user/router')

const db = require("./db");
const User = require("./user/model")
const Ad = require("./ad/model")
db.sync().catch(console.error);

app
  .use(corsMiddleware)
  .use(bodyParserMiddleware)
  .use(userRouter)
  .listen(port, () => {
    console.log("listening on " + port);
  });
