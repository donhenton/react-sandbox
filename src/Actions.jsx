var Reflux = require('reflux');

var restaurantActions = Reflux.createActions(['getRestaurants','setCurrentRestaurantId'  ]);
 

module.exports = restaurantActions;