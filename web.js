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
web.get('*', function (req, res) {
  res.render('index', {
    env     : env,
    title   : 'Sergio Xalambrí | Front End Developer',
    nav     : {
      active: 1,
      items : [
        {
          id     : 1,
          href   : './',
          content: 'About',
          title  : 'Do you want to know about me?'
        },
        {
          id     : 2,
          href   : '//medium.com/@sergiodxa',
          content: 'Articles',
          title  : 'Read what I have to say'
        },
        {
          id     : 3,
          href   : '//github.com/sergiodxa',
          content: 'Repositories',
          title  : 'See my repositories in Github'
        }
      ]
    },
    networks: [
      {
        title   : 'See my resume in LinkedIn',
        href    : '//ar.linkedin.com/in/sergiodxa',
        iconName: 'linkedin',
        name    : 'Resume'
      },
      {
        title   : 'Check all my code Github',
        href    : '//github.com/sergiodxa?tab=repositories',
        iconName: 'github',
        name    : 'Github'
      },
      {
        title   : 'Follow me in Twitter',
        href    : '//twitter.com/sergiodxa',
        iconName: 'twitter',
        name    : 'Twitter'
      },
      {
        title   : 'Add me to your circles',
        href    : '//plus.google.com/+sergiodanielxalambri',
        iconName: 'googleplus',
        name    : 'Google Plus'
      },
      {
        title   : 'Read my articles in Medium',
        href    : '//medium.com/@sergiodxa',
        iconName: 'medium',
        name    : 'Medium'
      },
      {
        title   : 'Contact me in Skype',
        href    : 'skype:sergiodxa?add',
        iconName: 'skype',
        name    : 'Skype'
      },
      {
        title   : 'Send me an email',
        href    : 'mailto:sergio@xalambri.com.ar',
        iconName: 'mail',
        name    : 'Contact me!'
      }
    ]
  });
});

// Port listen
var port = Number(process.env.PORT || 3000);
web.listen(port, function() {
  console.log('Listening on ' + port);
});
