var Reflux = require('reflux');
var Actions = require('../Actions');
var _ = require('lodash');
var restaurantService = require('./../services/restaurantService');



module.exports = Reflux.createStore({
    listenables: [Actions],
    restaurants: [],
    init: function ()
    {
        console.log("this is the restaurantStore starting")
    },
    getRestaurants: function () {
        restaurantService.getAllRestaurants()
                .then(function (json) {
                     this.restaurants = json;
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
    this.trigger('change', this.restaurants);
  }
});