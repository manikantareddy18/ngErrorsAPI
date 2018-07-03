module.exports = (app) => {
    const applicant = require('../controllers/applicant.controller.js');
  // Retrieve all Notes
  app.get('/applicant', applicant.findAll);
  app.post('/applicant', applicant.create);
}