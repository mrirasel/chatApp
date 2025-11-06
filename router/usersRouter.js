//external import
const express = require("express");
const router = express.Router();

//internal import 
const {getUsers} = require('../controller/usersController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");


//Users page
router.get("/",decorateHtmlResponse("Users"), getUsers);
module.exports = router;