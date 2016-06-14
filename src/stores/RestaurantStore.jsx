var Reflux = require('reflux');
var Actions = require('../Actions');
var _ = require('lodash');
var restaurantService = require('./../services/restaurantService');



module.exports = Reflux.createStore({
    listenables: [Actions],
    restaurants: [],
    currentRestaurantId: -1,
    currentReviewId: -1,
    currentRestaurant: null,
    currentReview: null,
    init: function ()
    {
        console.log("this is the restaurantStore starting")
    },
    getRestaurants: function () {
        restaurantService.getAllRestaurants()
                .then(function (json) {
                     this.restaurants = json;
                     this.currentRestaurantId = json[0].id;
                     this.currentRestaurant = json[0];
                     this.currentReview = this.currentRestaurant.reviewDTOs[0];
                     this.currentReviewId = this.currentReview.id;
                      console.log("in store review id 1"+this.currentReviewId);
                     this.fireEvent("dataLoad");
                     return null;
                    
                }.bind(this))
                        .fail(function(err){
                            console.log("err "+err.message)
                });
    },
    
    setCurrentRestaurantId: function(idString)
    {
        
        
        this.currentRestaurantId = parseInt(idString);
        this.fireEvent("changeRestaurant");
    },
    
    setCurrentReviewId: function(idString)
    {
        console.log("in store setting review id to "+idString)
        this.currentReviewId = parseInt(idString);
        this.fireEvent("changeReview");
    },
 
  fireEvent: function(type) {
     // console.log("trigger change called ")
     var me = this;
     var hitArray= _.filter(this.restaurants,function(r){ return r.id === me.currentRestaurantId;});
     this.currentRestaurant = hitArray[0];
      if (type == "changeRestaurant")
      {
         this.currentReview = this.currentRestaurant.reviewDTOs[0];
         this.currentReviewId = this.currentReview.id;
      }
      else
      {
          var revArray = _.filter(this.currentRestaurant.reviewDTOs,function(r){ return r.id === me.currentReviewId;});
          this.currentReview = revArray[0];
      }
    this.trigger(type, {
        restaurants: this.restaurants,
        currentRestaurantId: this.currentRestaurantId, 
        currentRestaurant: this.currentRestaurant,
        currentReview: this.currentReview,
        currentReviewId: this.currentReviewId
      });
  }
});