var React = require('react');
var messagePump = require('./messagepump/messagepump');

module.exports = React.createClass({
  handleClick: function() {

    messagePump.raiseEvent(this.props.item,"LIST_SELECTION");
    this.props.whenItemClicked(this.props.item);

    
    
  },
  render: function() {
    return <li className={this.props.className}>
      <a onClick={this.handleClick}>{this.props.item}</a>
    </li>
  }
});