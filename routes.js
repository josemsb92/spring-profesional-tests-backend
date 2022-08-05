let router = require("express").Router();
router.get("/all", require("./controllers/getJockes.js"));
module.exports = router;
