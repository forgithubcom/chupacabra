
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var MemoryStore = require('session-memory-store')(session);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser());

app.use(session({
  name: 'JSESSION',
  resave: false,
  saveUninitialized: true,
  secret: 'my secret',
  store: new MemoryStore(expires = 2 * 60 * 0, checkperiod = 1 * 60)
}));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

users = [ "qwerty", "12345", "asdf"];


app.post('/login', function(req, res) {
    var password = req.body.password;
if(users.indexOf(password) != -1) {
req.session.password = password;
res.render('index');
} else {
res.render('auth', {warning: "Invalid password"});
}
   });


app.get('/', function (req, res) {
  res.render('auth', {warning: ""});
})

app.get('/auth', function (req, res) {
  res.render('auth', {warning: ""});
});

app.post('/video', function (req, res) {
if(req.session.password) {
var vids = req.body.vimeoID;
 res.render('video', {vids: vids});
} else {
res.render('auth', {warning: "Invalid password"});
}
});

app.post('/matterport', function (req, res) {
if(req.session.password) {
var id = req.param('matterport360ID');
  res.render('matterport', {title: id});
} else {
res.render('auth', {warning: "Invalid password"});
}
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




