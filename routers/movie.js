const express = require("express");
const router = express.Router();
const { movieHandler } = require("../controllers/movies.js");
router.get("/", movieHandler);

module.exports = router;