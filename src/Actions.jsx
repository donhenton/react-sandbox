var Reflux = require('reflux');

var restaurantActions = Reflux.createActions(['getRestaurants','setCurrentRestaurant'  ]);
 

module.exports = restaurantActions;