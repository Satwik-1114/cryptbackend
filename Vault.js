const mongoose = require('mongoose');

const VaultSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    encryptedPassword: { type: String, required: true }
});

module.exports = mongoose.model('Vault', VaultSchema);
