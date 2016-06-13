var React = require('react'); 
var TopicStore = require('./../stores/TopicStore') ;
var Reflux = require('reflux');
var Actions = require('./../Actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
  
  renderTopicItem: function() {
    return this.state.topics.slice(0, 4).map(function(topic){
      return <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  },
  onChange: function(event,topics)
  {
      this.setState({topics: topics});
  },
   
  render: function() {
    return <div className="list-group">
            <h3>Topic List</h3>
            <ul>
                {this.renderTopicItem()}
                </ul>
            </div>
  } 
});
