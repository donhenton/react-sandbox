var React = require('react');
var Actions = require('../Actions');
var RestaurantStore = require('./../stores/RestaurantStore');
var Reflux = require('reflux');
var _ = require('lodash');
 

module.exports = React.createClass({
    
  mixins: [
    Reflux.listenTo(RestaurantStore, 'onChange')
   ],  
   
  getInitialState: function(){
   
    
    return {currentReviewId: -1,currentRestaurant: null, currentReviews: [], visible: false};
  },
   

   componentDidMount: function( )
    {
       

    },

    
  onChange: function(event, data) {
      
      this.setState({
          currentRestaurant: data.currentRestaurant,
          currentReview: data.currentReview, 
          currentReviewId: data.currentReviewId, 
          currentReviews: data.currentRestaurant.reviewDTOs})
  },
  
  
  
  computeCssClass: function()
  {
     return this.state.visible ? "visible" : "invisible";
      
  },
 
 
  generateSelector: function()
  {
      var me = this;
      if (this.state.currentReviews.length == 0)
      {
            return <em>No Reviews Available!</em>
      }
      else
      {
          var counter = 1;
          var options = _.map(this.state.currentReviews,function(review)
          {
              
              var reviewText = "Review "+counter;
              var optionItem = <option value={review.id} key={review.id}>{reviewText}</option>
              counter ++;
              return optionItem;
          })
          
          
          return <select onChange={me.onReviewSelectChange} value={this.state.currentReviewId} id="reviewSelect">
                  
                  {options}
                  
                  </select>
      }
  },
 
  onReviewSelectChange: function(ev)
  {
      console.log("reviewID change "+ev.target.value)
      Actions.setCurrentReviewId(ev.target.value);
  },
 
 
  render: function() {
 

    return <div className="reviewSelector grouping">
             <table className="table">
             <tbody>
             <tr><th>Review Selector</th><td>{this.generateSelector()}</td>
             <th>Review Count</th><td>{this.state.currentReviews.length}</td></tr>
     </tbody>
             </table>
         
   
    </div>
  }
});