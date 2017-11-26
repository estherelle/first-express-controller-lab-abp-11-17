var express = require('express')
var app = express()

// Require controller modules
var siteController = require('../controllers/SiteController')

app.get('/', '../'{
  resp.render('site/Index', 'siteController' {
    "welcomePhrase": "Hello, World from Express and EJS!"
  })
})


module.exports = app
