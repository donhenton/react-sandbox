var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [ // List of items to show in the dropdown
      {key:1, data: 'Apple Pie'},
     {key:2, data: 'Peach Cobbler'},
     {key:3, data: 'Coconut Cream Pie'}
  ]
};

var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));
