var express = require("express");
var router  = express.Router();
var passport = require("passport");
//var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("main");
});

router.get("*", function(req, res){
    res.render("main");
});

module.exports = router;