module.exports = function () {
    
    
    //http://docs.mongolab.com/data-api/
    var $ = require('jquery');
    var conf = require('./../conf/conf');

    var mongoService = {};

    var url = "https://api.mongolab.com/api/1//databases/todo/collections/todo";
    var apiKey = "?apiKey="+conf().apiKey;

    mongoService.getToDos = function ()
    {

        return $.ajax({
            type: "GET",
            url: url + apiKey
        });


    };

    mongoService.addToDo = function (toDoData)
    {
        var toDoDataStr = JSON.stringify(toDoData);
        return $.ajax({
            type: "POST",
            url: url + apiKey,
            data: toDoDataStr,
            contentType: 'application/json'
        });
    };


//5670812de4b0687128d72240
    mongoService.deleteToDo = function (key)
    {
        
        return $.ajax({
            type: "DELETE",
            url: url +"/"+key+ apiKey 
            
        });
    };

    createError = function (message, classVar)
    {
        var e = {};
        e["message"] = message;
        e["errorClass"] = classVar;
        return e;
    };

    return mongoService;
};