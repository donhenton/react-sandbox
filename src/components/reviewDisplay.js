var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var _ = require('lodash');
var ReviewSelector = require('./reviewSelector');
module.exports = React.createClass({
    
  mixins: [
    Reflux.listenTo(RestaurantStore, 'onChange')
   ],  
   
  getInitialState: function(){
   
    
    return {currentReview: null,visible: false};
  },
   

   componentDidMount: function( )
    {
    
      

    },

    
  onChange: function(event, data) {
      
    //console.log('in review display '+JSON.stringify(data.currentReview))
     this.setState({currentReview: data.currentReview});
  },
  
  
  
  computeCssClass: function()
  {
     return this.state.visible ? "visible" : "invisible";
      
  },
 
  showReview: function()
  {
    if (this.state.currentReview)
    {
        return this.state.currentReview.reviewListing;
    }
  },

  render: function() {
 
     return <div><h4>REVIEW: </h4> <span>{this.showReview()}</span></div>
             
   
  }
});