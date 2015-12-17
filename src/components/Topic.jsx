var React = require('react');
var Actions = require('../Actions');
var ImageStore = require('./../stores/ImageStore');
var Reflux = require('reflux');
var ImagePreview = require('./ImagePreview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
   ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
     Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps){
      //needed to read the props that are changing in the url 
      //because there isn't a page reload
     Actions.getImages(nextProps.params.id);
  },
  render: function() {
    return <div className="topic">
      {this.renderImages()}
    </div>
  },
  renderImages: function() {
     return this.state.images.slice(0, 20).map(function(image) {
       return <ImagePreview key={image.id} {...image} />
     });
   
  },
  onChange: function(event, images) {
     this.setState({images: images})
  }
});
