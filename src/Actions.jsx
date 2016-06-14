var Reflux = require('reflux');

var restaurantActions = Reflux.createActions(['getRestaurants','setCurrentRestaurantId','setCurrentReviewId'  ]);
 

module.exports = restaurantActions;