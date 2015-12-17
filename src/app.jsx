var React = require('react');
var jQuery = require('jquery');
var mongoToDo = require('./services/mongoToDo.js');
var Header = require('./components/Header');
var List = require('./components/List');
var messagePump = require('./services/MessagePump');

var props = {};
var App = React.createClass({
    reportError: function (msg)
    {
        this.state.errMessage = msg;
        //using setState forces an update
        //combined with errMessage being in the render function
        this.setState({"errMessage": msg})
        
        setTimeout(function(){this.setState({"errMessage": ""})}.bind(this),3000);
        //this.forceUpdate();
    },
    doAdd: function (data)
    {
        //console.log("add "+JSON.stringify(data));
        if (!data || !data.text || data.text.trim().length === 0)
        {
            this.reportError("Text cannot be blank");

            return;
        }

        mongoToDo().addToDo(data).done(function (data)
        {
            this.reportError("Successful add");
            this.state.items.push(data);
            this.setState({"items": this.state.items})
        }.bind(this))
                .fail(function (err)
                {
                    this.reportError(JSON.stringify(err));

                }.bind(this))
                .always(function ()
                {


                }.bind(this));


},
    getInitialState: function ()
    {
        return {items: {}, loaded: false, errMessage: ""};
    },
    componentWillMount: function ()
    {

    },
    handleUpdate: function ()
    {
        //console.log("app handleUpdate called");
        var toDoPromise = mongoToDo().getToDos();
        toDoPromise.done(function (data)
        {
            if (this.isMounted()) {
                var t = {"items": data, loaded: true, errMessage: "Completed"};
                //console.log(JSON.stringify(t))
                this.setState(t);
                this.reportError("Successful Update for the ToDo!!");

            }
        }.bind(this))
                .fail(function (err)
                {
                    this.state.errMessage = JSON.stringify(err);

                }.bind(this))
                .always(function ()
                {


                }.bind(this));
    },
    componentDidMount: function ()
    {
        messagePump.subscribe(this.handleUpdate, "LIST_UPDATE");
        this.handleUpdate();


    },

render: function(){ 
        return  <div>
                <div className="row panel panel-default">{this.state.errMessage}
                </div>
            <div className="row panel panel-default">
                <div className="col-md-8 col-md-offset-2">

                    <h2 className="text-center">To-Do List</h2>
                    <Header  doAdd={this.doAdd} />
                    <List  items={this.state.items}/>
                    <hr />
                </div>
            </div>

        </div>

    } 


});

 
var mountPoint = jQuery('#mountPoint')[0];
//
var element = React.createElement(App, props);
React.render(element,mountPoint );
