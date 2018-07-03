const applicant = require('../models/applicant.model.js');

// Retrieve and return all applicants from the database.
exports.findAll = (req, res) => {
    console.log("Inside controler");
    applicant.find()
    .then(applicants => {
        res.send(applicants);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving applicants."
        });
    });
};


// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ApplicantId) {
        return res.status(400).send({
            message: "Aplicants content can not be empty"
        });
    }

    // Create a Aplicants
    const Aplicants = new applicant({
        ApplicantId: req.body.ApplicantId,
    ApplicantName: req.body.ApplicantName,
    Description:req.body.Description
       
    });

    // Save Note in the database
    Aplicants.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

