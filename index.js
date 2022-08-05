require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const port = process.env.PORT || 3000;
app.use("/", require("./route"));
app.listen(port, () => {
  console.log(`Working on port ${port}`);
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
