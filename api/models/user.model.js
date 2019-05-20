const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    email: {type: String, required: true},
    imageUrl:{type: String},
    googleId: {type: String},
});

module.exports = mongoose.model('User', UserSchema);