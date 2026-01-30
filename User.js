const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    masterKeyHash: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
