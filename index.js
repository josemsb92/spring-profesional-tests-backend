require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const { sequelize } = require("./models");
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));
app.listen(port, () => {
  console.log(`Working on port ${port}`);
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
