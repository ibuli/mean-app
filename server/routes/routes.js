const express = require('express');

var router = express.Router();
var authController = require('../controllers/authentication');

router.get("/",function(req,res){
  res.json({"message" : "Hello World"});
});

router.post("/login", authController.login);

router.post("/Signup", authController.signup);

module.exports = router;