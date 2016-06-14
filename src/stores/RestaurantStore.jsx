var Reflux = require('reflux');
var Actions = require('../Actions');
var _ = require('lodash');
var restaurantService = require('./../services/restaurantService');



module.exports = Reflux.createStore({
    listenables: [Actions],
    restaurants: [],
    currentRestaurantId: -1,
    init: function ()
    {
        console.log("this is the restaurantStore starting")
    },
    getRestaurants: function () {
        restaurantService.getAllRestaurants()
                .then(function (json) {
                     this.restaurants = json;
                     this.currentRestaurantId = json[0].id;
                    // console.log("get all called");
                     this.fireEvent("dataLoad");
                     return null;
                    
                }.bind(this))
                        .fail(function(err){
                            console.log("err "+err.message)
                });
    },
    
    setCurrentRestaurantId: function(idString)
    {
        
        console.log("store got id "+idString);
        this.currentRestaurantId = parseInt(idString);
        this.fireEvent("change");
    },
 
  fireEvent: function(type) {
     // console.log("trigger change called ")
    this.trigger(type, {restaurants: this.restaurants,currentRestaurantId: this.currentRestaurantId});
  }
});