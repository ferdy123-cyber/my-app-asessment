const { Router } = require("express");
const {
  getDataById,
  addData,
  getDataDaily,
  updateData,
  deleteData,
} = require("../controllers/data");

const { Authorization } = require("../middleware/authorization");

const router = Router();

router.get("/getData", Authorization, getDataById);
router.get("/getDataDaily", Authorization, getDataDaily);
router.post("/addData", Authorization, addData);
router.patch("/updateData", Authorization, updateData);
router.delete("/:id", Authorization, deleteData);

module.exports = router;
