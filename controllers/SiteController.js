app = require('../app')

module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/', function(req, res) {
      // any logic goes here
      res.render('../views/site/index')
  });

/**
 * About page route
 */
  app.get('/about', function(req, res) {
      // any logic goes here
      res.render('../views/site/about')
  });

  app.get('/contact', function(req, res) {
      // any logic goes here
      res.render('../views/site/contact')
  });

}
module.exports()
