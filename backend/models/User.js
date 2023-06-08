const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  // Include any other user fields you want to store
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
