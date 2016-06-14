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
            <p  className='green-content'><em><bold>(components marked with dashed boxes)</bold></em></p>
            <div className="row grouping">
                    <div className="columnLeft well">
                    <RestaurantSelector />
                    <br/>
                    <p class="row">
                    The currently selected restaurant and review are maintained
                    in  the restaurant store. Components merely signal to the store to change
                    the pointers. Passing state via props is not used.
                    </p>
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