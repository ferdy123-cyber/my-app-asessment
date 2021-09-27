const { Router } = require("express");
const { getDataById, addData, getDataDaily } = require("../controllers/data");

const { Authorization } = require("../middleware/authorization");

const router = Router();

router.get("/getData", Authorization, getDataById);
router.get("/getDataDaily", Authorization, getDataDaily);
router.post("/addData", Authorization, addData);

module.exports = router;
