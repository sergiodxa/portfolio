// Load express and execute
var express = require('express');
var web     = express();

// Express configuration
web.use(express.static(__dirname + '/front'));
web.set('views', __dirname + '/views');
web.set('view engine', 'jade');

// Enviroment
var env = process.env.NODE_ENV || 'dev';

// Route
web.get('/', function (req, res) {
  res.render('index', {
    env     : env,
    title   : 'Sergio Xalambrí | JavaScript Developer',
    nav     : {
      active: 1,
      items : [
        {
          id     : 1,
          href   : './',
          content: 'Sobre mí',
          title  : 'Quieres saber algo más sobre mí?'
        },
        {
          id     : 2,
          href   : '//medium.com/@sergiodxa',
          content: 'Artículos',
          title  : 'Lee lo que tengo para decir'
        },
        {
          id     : 3,
          href   : '//github.com/sergiodxa',
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

web.get('*', function (req, res) {
  res.redirect('/');
})

// Port listen
var port = Number(process.env.PORT || 3000);
web.listen(port, function() {
  console.log('Listening on ' + port);
});
