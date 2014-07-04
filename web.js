var express = require('express');
var web     = express();

web.use(express.static(__dirname + '/front'));
web.set('views', __dirname + '/views');
web.set('view engine', 'jade');

// enviroment variables
var env = process.env.NODE_ENV || 'dev';

// models
var navigation = require('./models/navigation');
var post       = require('./models/blog/post');

web.get('/', function (req, res) {
  navigation.active = 1;
  res.render('index', {
    env    : env,
    title  : 'Sergio Xalambrí',
    section: 'Home',
    nav    : navigation
  });
});

web.get('/blog', function (req, res) {
  navigation.active = 2;

  res.render('blog/list', {
    env    : env,
    title  : 'Sergio Xalambrí',
    section: 'Blog',
    nav    : navigation,
    posts  : post
  });
});

var port = Number(process.env.PORT || 3000);
web.listen(port, function() {
  console.log('Listening on ' + port);
});