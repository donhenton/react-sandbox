var React = require('react');
var JSON = require('json3');
var $ = require('jquery');
var ListItem = require('./ListItem');
var mongoToDo = require('../services/mongoToDo');

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
             
            var children = [];
            $.each(this.props.items, function (idx,todo)
            {
                
                       
                       var simpleItem = {"text":todo.text,"done":todo.done,"id":todo._id.$oid,mongoObj: todo};
                       children.push(<ListItem key={simpleItem.id} item={simpleItem}   />);
                      
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
         
        
        return  <div><hr />
                <div className={this.state.listDisplayClass}>{this.renderList()}</div>
                </div>


    }
});