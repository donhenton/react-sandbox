var React = require('react');
var jQuery = require('jquery');
var toDoService = require('./services/mongoToDo.js');

 
var props = {};
var App = React.createClass({
 
getInitialState: function()
{
    return {items:{}, loaded: false};
},

componentWillMount: function()
{

},
componentDidMount: function()
{
    
    var toDoPromise = toDoService().getToDos();
    toDoPromise.done(function (data)
       {           
            if (this.isMounted()) {
                var t = {"items": data}
            
                this.setState(t);
                
            }
       }.bind(this))  
        .fail(function (err)
       {
           console.log("error " + JSON.stringify(err))

       }) 
       .always(function ()
       {
             console.log("always "+JSON.stringify(this.state));

       }.bind(this)) ;


},

render: function(){
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">

                <h2 className="text-center">To-Do List</h2>
                <Header itemsStore={this.firebaseRefs.items} />
         <hr />
            </div>


        </div>

    } 


});

 
var mountPoint = jQuery('#mountPoint')[0];
//
var element = React.createElement(App, props);
React.render(element,mountPoint );
