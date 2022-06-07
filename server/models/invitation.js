const mongoose = require('mongoose');

const inviteSchema = mongoose.Schema({
    idx:{type: Number, default:1},
    walletAddress: {type: String, maxlength: 64, unique:true, requiered:true},
    code: {type: String, maxlength:50, requiered:true},
    count: {type: Number, requiered:true},
});

module.exports = mongoose.model('Invitation',inviteSchema);
