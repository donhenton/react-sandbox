var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('history/lib/createBrowserHistory');
var Main = require('./../components/Main')

module.exports = (
                
        <Router history={browserHistory()}>
            <Route path="/"  component={Main} />
               
        </Router>
        
        
        
        )
 