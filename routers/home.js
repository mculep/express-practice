const express = require("express");
const router = express.Router();

const { homeHandler } = require("../controllers/homeHandler");

router.get("/", homeHandler);

module.exports = router;