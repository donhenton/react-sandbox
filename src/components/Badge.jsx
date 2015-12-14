var React = require('react');
var jQuery = require('jquery');
var Badge = React.createClass({
  render: function() {
     

    return <button className="btn btn-large btn-primary" type="button">
       {this.props.title} <span className="badge">{this.props.count}</span>
    </button> 
  }
});

module.exports = Badge;