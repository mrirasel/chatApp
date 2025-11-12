//external import
const express = require("express");
const router = express.Router();

//internal import 
const {getInbox} = require('../controller/inboxController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const { checkLogin } = require("../middleware/common/checkLogin");


//Users page
router.get("/",decorateHtmlResponse("Inbox"),checkLogin, getInbox);
module.exports = router;