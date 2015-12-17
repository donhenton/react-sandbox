var React = require('react'); 
var TopicStore = require('./../stores/TopicStore') ;
var Reflux = require('reflux');
var Actions = require('./../Actions');

module.exports = React.createClass({
  mixins: [ Reflux.listenTo(TopicStore,'onChange')],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics() ;
        
  },
  
  renderTopicItem: function()
  {
      var topics = [];
       this.state.topics.map(function(topic){
           topics.push(<li key={topic.id}>{topic.name}</li>)
       })
      return topics;
      
  },
  onChange: function(event,topics)
  {
      this.setState({topics: topics});
  },
   
  render: function() {
    return <div className="list-group">
            Topic List<br/>
            <ul>
                {this.renderTopicItem()}
                </ul>
            </div>
  } 
});
