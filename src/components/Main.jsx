var React = require('react');
var Header = require('./Header')
var TopicList = require('./TopicList');


module.exports  = React.createClass({

        render: function()
        {
        return  <div id="Mainblock"> 
                <Header />
                {this.renderContent()}
                 </div>
        },
        renderContent: function()
        {
            if (this.props.children)
            {
                return this.props.children;
                
            }
            else
            {
                return <TopicList />
            }
            
            
        }
        
});