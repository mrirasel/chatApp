//external import
const express = require("express");
const router = express.Router();

//internal import 
const {getInbox} = require('../controller/inboxController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");


//Users page
router.get("/",decorateHtmlResponse("Inbox"), getInbox);
module.exports = router;