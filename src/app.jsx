var React = require('react');
var ReactDOM = require('react-dom');
var main = require('./components/mainComponent');

var $ = require("jquery");

 
 

            var loadedStates = ['complete', 'loaded', 'interactive'];
            if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
                run();
            } else {
                window.addEventListener('DOMContentLoaded', run, false);
            }

            function run() {
                var element = React.createElement(main);
                ReactDOM.render(element, document.querySelector('.container'));
            }

 
