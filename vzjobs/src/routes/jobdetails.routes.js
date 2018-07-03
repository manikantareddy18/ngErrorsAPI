module.exports = (app) => {
    const jobdetails = require('../controllers/jobdetails.controller.js');
  // Retrieve allJob details
  app.get('/jobdetails', jobdetails.findAll);
  app.post('/jobdetails', jobdetails.create);
}