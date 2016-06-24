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
   
    
    return {restaurants: [],visible: false, eventType: ""};
  },
   

   componentDidMount: function( )
    {
       console.log("did mount ");
       //call the action which will is routed to the store in 
       //RestaurantStore
       
       Actions.getRestaurants();
       

    },

    
  onChange: function(event, data) {
      
     this.setState({restaurants: data.restaurants, currentRestaurantId: data.currentRestaurantId, visible: true,eventType: event})
  },
  
  selectorChange: function(ev)
  {
      
      Actions.setCurrentRestaurantId(ev.target.value);
      
  },
  
  computeCssClass: function()
  {
     return this.state.visible ? "visible" : "invisible";
      
  },
  
  generateChoices: function()
  {
      var choices = [];
      var me = this;
      
      this.state.restaurants.forEach(function(restaurant)
      {
          
              choices.push(<option  value={restaurant.id} key={restaurant.id}>{restaurant.name}</option>);
           
          
      });
      
      return choices;
  },

  render: function() {
 

    return <div className="componentMarker restaurantSelector">
            <div class="row">
                <select value={this.state.currentRestaurantId} className={this.computeCssClass()} onChange={this.selectorChange}>
                {this.generateChoices()}
                </select>
            </div>
             <p class="row"> 
             <br/>
                <div class="row">
                   <em>Event Type: </em>
                  <span class="blue-color"> {this.state.eventType}</span> 
                </div>
            </p>
    </div>
  }
});