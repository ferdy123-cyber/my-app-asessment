const { Router } = require("express");
const { register, login, getUser } = require("../controllers/user");

const router = Router();

router.get("/get", getUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;