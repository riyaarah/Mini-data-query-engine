const express = require("express");
const { queryProcessor, explainQuery, validateQuery } = require("./queryController");

const router = express.Router();

router.post("/query", queryProcessor);
router.post("/explain", explainQuery);
router.post("/validate", validateQuery);

module.exports = router;




