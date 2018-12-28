var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePhoto: {
		type: String,
		default: '../../src/assets/avatar.png'
	},
  acc_created_at: {
		type: Date, 
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);