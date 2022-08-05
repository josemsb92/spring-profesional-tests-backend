const { Jockes } = require("../models");

async function getAllJockes(req, res) {
  try {
    let allJockes = await Jockes.findAll();
    if (allJockes) {
      res.status(200).json(allJockes);
    }
    if (!allJockes) {
      res.status(404).json({
        message: "No jockes found",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = getAllJockes;
