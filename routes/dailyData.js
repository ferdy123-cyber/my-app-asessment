const { Router } = require("express");
const { add } = require("../controllers/dailyData");

const { Authorization } = require("../middleware/authorization");

const router = Router();

router.post("/add", Authorization, add);

module.exports = router;
