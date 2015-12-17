var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('history/lib/createBrowserHistory');
var Main = require('./../components/Main');
var Topic = require('./../components/Topic')
var ImageDetail = require('./../components/ImageDetail')

module.exports = (

        <Router history={browserHistory()}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
        
        
        
)
 