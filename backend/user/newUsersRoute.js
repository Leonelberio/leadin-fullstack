const router = require("express").Router({ mergeParams: true });
const userAccounts = require("./usersController");
//const {getUsers} = require("../controller/users");


//const router = express.Router({ mergeParams: true });

router.post("/signup",userAccounts.register);

//Admin Create user

router.post("/verify",userAccounts.verify);

/*router
  .route('/getUsers')
  .get(
    advancedResults(User),
    getUsers)*/

module.exports = router;
