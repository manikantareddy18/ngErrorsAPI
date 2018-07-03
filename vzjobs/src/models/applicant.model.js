const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
    ApplicantId: Number,
    ApplicantName: String,
    Description:String
});

module.exports = mongoose.model('applicant', ApplicantSchema);