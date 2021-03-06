var imgurService = require('./../services/imgurService');
var Reflux = require('reflux');
var Actions = require('./../Actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {

    return imgurService().getTopics().done(function(json)
    {
        this.topics = json.data;
        this.triggerChange();
        
    }.bind(this));

 
  },
  triggerChange: function() {
    this.trigger('change', this.topics);
  }
});
