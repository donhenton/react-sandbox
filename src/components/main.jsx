var React = require('react');
 


module.exports  = React.createClass({

        render: function()
        {
        return  <div> 
                this is a header
                <div>{this.props.children} </div>
                </div>
        }
        
});