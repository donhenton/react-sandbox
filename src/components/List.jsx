var React = require('react');
var JSON = require('json3');
var $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            listDisplayClass: "listDisplay initial",
            items: {}
        }
    },
    renderList: function ()
    {
        if (!this.props.items || Object.keys(this.props.items).length == 0)
        {
        return  <li>Please Add A To Do</li>  ;
        }
        else
        {
            //console.log(this.props.items.length + " list\n" + JSON.stringify(this.props.items))
            var children = [];
            $.each(this.props.items, function (idx,todo)
            {
               // console.log("todo " + JSON.stringify(todo))
                       var doneDisplay = todo.done ? "true" : "false";
                        children.push(<li key={todo._id.$oid}>{todo.text} {doneDisplay} {todo._id.$oid}</li>)
            })


            
            return children;
        }
    },
    render: function () {

        var items = this.props.items;
        this.state.listDisplayClass = "listDisplay initial";
        
        if ((items && items.length && items.length > -1) || ((items instanceof Array) && (items.length === 0)))
        {
            this.state.listDisplayClass = "listDisplay final";
        }
         
        
        return <ul className={this.state.listDisplayClass}>{this.renderList()}</ul>


    }
});