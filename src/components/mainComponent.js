var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');

module.exports = React.createClass({
    
  mixins: [
    Reflux.listenTo(RestaurantStore, 'onChange')
   ],  
   
  getInitialState: function(){
   
    
    return {restaurants: []};
  },
   

   componentDidMount: function( )
    {
       console.log("did mount ");
       //call the action which will is routed to the store in 
       //RestaurantStore
       
       Actions.getRestaurants();

    },

    
  onChange: function(event, data) {
      console.log("onchange called "+JSON.stringify(data))
     this.setState({restaurants: data})
  },

  render: function() {
 

    return <div className="test">
       get a job 
    </div>
  }
});