var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');

var User = require('../models/users');
var JWT_SECRET = 'mysecret';

module.exports.signup = function(req, res) {
    User.find({ $or: [{ username: req.body.username }, { email: req.body.email } ]}, function(err, result) {
        if(result != '' && result) {
            return res.status(200).json({"message": "User already exists please login"});
        } else {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    var user = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    });
                    user.save((err, result) => {
                        if(err) {
                            return res.status(500).json({"message": "Please try again later..."});
                        } else {
                            res.status(200).json({"message": "User registered: " + req.body.username});
                        }
                    })
                })
            })
        }
    })
};

module.exports.login = function(req, res) {    
    User.findOne({ email: req.body.email }, function(err, user) {
        if(user != null) {
            bcrypt.compare(req.body.password, user.password, function(err, match) {
                if(match) {
                    // var resObject = {
                    //     username: user.username,
                    //     profilePhoto: user.profilePhoto,
                    //     email: user.email
                    // }
                    var token = jwt.encode(user._id, JWT_SECRET);
                    res.status(200).json({"message": "Login successful", token: token});
                } else {
                    res.status(200).json({"message": "Email address or password is incorrect"});
                }
            })
        } else {
            res.status(200).json({"message": "Email address or password is incorrect"});
        }
    })
};