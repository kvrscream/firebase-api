const express = require("express");
const consign = require("consign");

const app = express();
app.use(express.json());

let envPathName = "dev.env"
require("dotenv").config({
  path: envPathName
});

if (!process.env.NODE_ENV) process.env.NODE_ENV = "development"
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

consign()
    .include("./routes")
    .into(app);


module.exports = app;