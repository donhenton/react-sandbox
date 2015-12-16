var React = require('react');
var JSON = require('json3');
var $ = require('jquery');
//{"text":todo.text,"done":todo.done,"id":todo._id.$oid};
module.exports = React.createClass({
    getInitialState: function () {
        return {
           
            item: {}
        }
    },
    renderList: function ()
    {
        
    },
    render: function () {

         var todo = this.props.item;
         var doneDisplay = todo.done ? "true" : "false";
        return  <li key={todo.id}>{todo.text} {doneDisplay} {todo.id}</li>;


    }
});
