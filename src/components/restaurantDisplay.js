var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var _ = require('lodash');
var ReviewSelector = require('./reviewSelector');
console.log("zzzz "+ReviewSelector)
module.exports = React.createClass({
    
  mixins: [
    Reflux.listenTo(RestaurantStore, 'onChange')
   ],  
   
  getInitialState: function(){
   
    
    return {currentRestaurant: [],visible: false};
  },
   

   componentDidMount: function( )
    {
       console.log("did mount display ");
       //call the action which will is routed to the store in 
       //RestaurantStore
     

    },

    
  onChange: function(event, data) {
      
     // var hitArray= _.filter(data.restaurants,function(r){ return r.id === data.currentRestaurantId;});
     this.setState({currentRestaurant: data.currentRestaurant});
  },
  
  
  
  computeCssClass: function()
  {
     return this.state.visible ? "visible" : "invisible";
      
  },
 

  render: function() {
 

    return <div className="restaurantDisplay grouping">
            <table className="table table-striped">
            <tbody>
            <tr><th>Name</th><td className="nameItem">{this.state.currentRestaurant.name}</td></tr>
            <tr><th>City</th><td>{this.state.currentRestaurant.city}</td></tr>
            <tr><th>State</th><td>{this.state.currentRestaurant.state}</td></tr>
            </tbody>
            </table>
            <div className="row">
            
            <ReviewSelector />
            
            </div>
             
    </div>
  }
});