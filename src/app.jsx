var React = require('react');
var jQuery = require('jquery');
var ReactDom = require('react-dom');
var messagePump = require('./services/MessagePump');
var routes = require('./routes/routes');
var mountPoint = document.querySelector('.container');

ReactDom.render(routes, mountPoint);
