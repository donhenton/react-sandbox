var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
//var Actions = require('../actions');
//var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');

module.exports = React.createClass({
   
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    
  },
  renderTopics: function() {
     
     //links in the header
  },
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderTopics()}
        </ul>
      </div>
    </nav>
  } 
});
