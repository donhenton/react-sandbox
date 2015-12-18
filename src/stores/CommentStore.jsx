var Reflux = require('reflux');
var Actions = require('../actions');
var imgurService = require('./../services/imgurService');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImage: function(id){
    imgurService.get('gallery/' + id + '/comments')
      .then(function(json){
        this.comment = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.comment);
  }
});