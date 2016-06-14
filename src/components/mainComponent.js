var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var RestaurantSelector = require('./restaurantSelector');

module.exports = React.createClass({
    
   
 

  render: function() {
 

    return <section id="pageContainer">
       <section className="grouping" id="main">
            <div className="columnLeft">
            <RestaurantSelector />
            </div>
            <div className="columnRight well">
            fred
            </div>
       </section>
    </section>
  }
});