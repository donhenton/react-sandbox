var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var RestaurantSelector = require('./restaurantSelector');
var RestaurantDisplay = require('./restaurantDisplay');
var ReviewDisplay = require('./reviewDisplay');

module.exports = React.createClass({
    
   
 

  render: function() {
 

    return <section id="pageContainer">
       <section className="grouping" id="main">
            <h2>Reflux Event Demo</h2>
            <div className="row grouping">
                    <div className="columnLeft well">
                    <RestaurantSelector />
                    </div>
                    <div className="columnRight">
                    <RestaurantDisplay />
                    </div>
            </div>
    
            <div className="row grouping">
               <div className="columnRight">
              <ReviewDisplay />
              </div>
              
              </div>
       </section>
    </section>
  }
});