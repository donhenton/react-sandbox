var React = require('react');
var JSON = require('json3');
var $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            items: {}
        }
    },
    renderList: function ()
    {
        if (!this.props.items || Object.keys(this.props.items).length == 0)
        {
        return  <li> Please Add A To Do </li>  ;
        }
        else
        {
            //console.log(this.props.items.length + " list\n" + JSON.stringify(this.props.items))
            var children = [];
            $.each(this.props.items, function (idx,todo)
            {
               // console.log("todo " + JSON.stringify(todo))
                        
                        children.push(<li key={todo._id.$oid}> {todo.text} </li> )
            })



            return children;
        }
    },
    render: function () {

        return <ul> {this.renderList()} </ul>


    }
});