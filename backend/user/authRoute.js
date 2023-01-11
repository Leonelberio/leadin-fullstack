const router = require("express").Router();
const userAccount = require("./usersController");

router.post("/login",userAccount.login);

module.exports = router;
