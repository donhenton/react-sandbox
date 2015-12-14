var React = require('react');
var jQuery = require('jquery');
var Badge = require('./Badge');

var Thumbnail = React.createClass({
    render: function()
    {
        return  <div className="thumbnail">
        
        
      <img src={this.props.imageUrl} alt={this.props.description} />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p>
            <Badge title={this.props.title} count={this.props.count} />
        </p>
      </div>



        </div> 
 

    }

   
});


module.exports = Thumbnail;