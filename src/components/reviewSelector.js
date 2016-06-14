var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var _ = require('lodash');
 

module.exports = React.createClass({
    
  mixins: [
    Reflux.listenTo(RestaurantStore, 'onChange')
   ],  
   
  getInitialState: function(){
   
    
    return {currentReviewIdx: -1,visible: false};
  },
   

   componentDidMount: function( )
    {
       console.log("did mount display ");
       //call the action which will is routed to the store in 
       //RestaurantStore
     

    },

    
  onChange: function(event, data) {
      
      
  },
  
  
  
  computeCssClass: function()
  {
     return this.state.visible ? "visible" : "invisible";
      
  },
 
 
  generateSelector: function()
  {
     return <span>stuff</span>
  },
 
  render: function() {
 

    return <div className="reviewSelector grouping">
             
            {this.generateSelector()}
   
    </div>
  }
});