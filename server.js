// Load express and execute
var express     = require('express');
var server      = express();
var experiments = require('./experiments');

// Express configuration
server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views');
server.set('view engine', 'jade');

// Enviroment
var env = process.env.NODE_ENV || 'dev';

// Route
server.get('/', function (req, res) {
  res.render('index', {
    env     : env,
    title   : 'Sergio Xalambrí | JavaScript Developer',
    nav     : {
      active: 1,
      items : [
        {
          id     : 1,
          href   : '#about',
          content: 'Sobre mí',
          title  : 'Quieres saber algo más sobre mí?'
        },
        {
          id     : 2,
          href   : '#skills',
          content: 'Conocimientos',
          title  : 'Cosas que sé'
        },
        {
          id     : 3,
          href   : '#articles',
          content: 'Artículos',
          title  : 'Lee lo que tengo para decir'
        },
        {
          id     : 4,
          href   : '#repositories',
          content: 'Repositorios',
          title  : 'Mira mis repositorios en Github'
        }
      ]
    },
    networks: [
      {
        title   : 'Ver mi curriculum en LinkedIn',
        href    : '//ar.linkedin.com/in/sergiodxa',
        iconName: 'linkedin',
        name    : 'Curriculum'
      },
      {
        title   : 'Revisa todo mi código en Github',
        href    : '//github.com/sergiodxa?tab=repositories',
        iconName: 'github',
        name    : 'Github'
      },
      {
        title   : 'Sigueme en Twitter',
        href    : '//twitter.com/sergiodxa',
        iconName: 'twitter',
        name    : 'Twitter'
      },
      {
        title   : 'Agregame a tus círculos',
        href    : '//plus.google.com/+sergiodanielxalambri',
        iconName: 'googleplus',
        name    : 'Google Plus'
      },
      {
        title   : 'Lee mis artículos en Medium',
        href    : '//medium.com/@sergiodxa',
        iconName: 'medium',
        name    : 'Medium'
      },
      {
        title   : 'Contactame en Skype',
        href    : 'skype:sergiodxa?add',
        iconName: 'skype',
        name    : 'Skype'
      },
      {
        title   : 'Envíame un email',
        href    : 'mailto:sergio@xalambri.com.ar',
        iconName: 'mail',
        name    : 'Contactame!'
      }
    ]
  });
});

server.get('*', function (req, res) {
  res.redirect('/');
});

// Port listen
var port = Number(process.env.PORT || 3000);
server.listen(port, function() {
  console.log('Listening on ' + port);
});
