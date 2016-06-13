var React = require('react');
var ReactDOM = require('react-dom');
var main = require('./mainComponent');

 

var element = React.createElement(main);
ReactDOM.render(element, document.querySelector('.container'));
