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
                     this.triggerChange();
                     return null;
                    
                }.bind(this))
                        .fail(function(err){
                            console.log("err "+err.message)
                });
    },
 
  triggerChange: function() {
     // console.log("trigger change called ")
    this.trigger('change', {restaurants: this.restaurants,currentRestaurantId: this.currentRestaurantId});
  }
});