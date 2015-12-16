var React = require('react');
var JSON = require('json3');
var $ = require('jquery');
var mongoToDo = require('../services/mongoToDo');
var messagePump = require('../services/MessagePump');
//{"text":todo.text,"done":todo.done,"id":todo._id.$oid};
module.exports = React.createClass({
    getInitialState: function () {
        
        return {
           
           item: this.props.item
        }
    },
    updateToDo: function ()
    {
        var dataItem = this.state.item;

        mongoToDo().updateToDo(dataItem, dataItem.id).done(function (reportData)
        {
            
            console.log("successful update " + dataItem.text);
            messagePump.raiseEvent(null,"LIST_UPDATE");

        }.bind(this))
                .fail(function (err)
                {
                    console.log(JSON.stringify(err));

                }.bind(this))
                .always(function ()
                {


                }.bind(this));

    },
    
    handleDeleteClick:  function(){
        
       var dataItem = this.state.item;

        mongoToDo().deleteToDo(dataItem.id).done(function (reportData)
        {
                
            messagePump.raiseEvent(null,"LIST_UPDATE");

        }.bind(this))
                .fail(function (err)
                {
                    console.log(JSON.stringify(err));

                }.bind(this))
                .always(function ()
                {


                }.bind(this)); 
        
        
    },   
    handleSaveClick:  function(){ this.updateToDo(); },
    changesButtons:  function(){}, 
    handleDoneClick: function(event){
 
         this.state.item.done = event.target.checked;
         this.setState(this.state);
             
    },
    handleTextChange: function(){ 
         
        this.state.item.text = event.target.value;
        this.setState(this.state);
    
    },
    
    render: function () {

         var todo = this.state.item;
         
       return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={this.handleDoneClick}
          />
      </span>
      <input type="text"
        disabled={todo.done}
        onChange={this.handleTextChange}
        className="form-control"
        value={todo.text} 
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button
          className="btn btn-danger"
          onClick={this.handleDeleteClick}
          >
          Delete
        </button>
         <button
          className="btn btn-primary"
          onClick={this.handleSaveClick}
          >
          Save
        </button>
      </span>
    </div>
       
       
       


    }
});
