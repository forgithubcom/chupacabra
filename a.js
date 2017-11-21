var express = require('express'),
  session = require('express-session'),
  cookieParser = require('cookie-parser');

// for express 4.0+
var MemoryStore = require('session-memory-store')(session);

// for express 4.0-
// var MemoryStore = require('session-memory-store')(express);

//var app = module.exports = express();

var app = express();


app.use(cookieParser());

app.use(session({
  name: 'JSESSION',
  resave: false,
  saveUninitialized: true,
  secret: 'my secret',
  store: new MemoryStore(expires = 60 * 60 * 12)
}));

console.log("hello");
