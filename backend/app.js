const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();

//mongoose.connect("MONGODB SRV CONNECTION STRING URL IS PLACED HERE W/ PASSWORD");
//!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!
mongoose.connect("")
  .then(() => {
    console.log("Connected to DataBase!")
  })
  .catch(()=>{
    console.log("Connection FAILED.")
  });
//mongoose.connect("MONGODB SRV CONNECTION STRING URL IS PLACED HERE W/ PASSWORD");
//!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
