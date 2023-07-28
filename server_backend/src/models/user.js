const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required
    }
})

module.exports = mongoose.model('User');
