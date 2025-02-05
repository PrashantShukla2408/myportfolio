const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const rootDir = require("./util/path");

const sequelize = require("./util/database");

const messageRoutes = require("./routes/messages");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(messageRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(process.env.PORT, () => {
      console.log("Server is running successfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
