var React = require('react');


module.exports = React.createClass({
   
  getInitialState: function(){
    return { open: false }
  },
   

   componentDidMount: function( )
    {
       console.log("did mount ");
        

    },

   

  render: function() {
 

    return <div className="test">
       get a job!!!!
    </div>
  }
});