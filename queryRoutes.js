const express = require("express");
const { queryProcessor, explainQuery, validateQuery } = require("../controllers/queryController");

const router = express.Router();

router.post("/query", queryProcessor);
router.post("/explain", explainQuery);
router.post("/validate", validateQuery);

module.exports = router;




