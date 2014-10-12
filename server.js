// Load express and execute
var express    = require('express');
var bodyParser = require('body-parser');
var validator  = require('validator');
var Mailgun    = require('mailgun-js');
var app        = express();

// Express configuration
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json('application/json'));

// Enviroment
var env = process.env.NODE_ENV || 'dev';

// Route
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html')
});

app.post('/contacto', function (req, res) {
  var mgConfig = {
    apiKey: 'key-8v0qft5c0-044bx1xn30wmzorrt8ieo7',
    domain: 'mailgun.xalambri.com.ar'
  }
  var mailgun  = Mailgun(mgConfig);
  var body     = req.body;

  if (!validator.isEmail(body.email)) {
    res
      .status(400)
      .send('The email is not valid.')
      .end();
  } else {
    mailgun.messages().send({
      from: body.nombre + ' <' + body.email + '>',
      to: 'sergio@xalambri.com.ar',
      subject: 'Contacto: ' + body.asunto,
      text: body.mensaje
    }, function (error, body) {
      if (error) {
        res
          .status(500)
          .send('Problem sending the email.')
          .end();
      } else {
        res
          .status(200)
          .send('Email sended.')
          .end();
      }
    });
  }
});

app.get('*', function (req, res) {
  res.redirect('/');
});

// Port listen
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log('Listening on ' + port);
});
