module.exports = function () {


    //http://docs.mongolab.com/data-api/
    var $ = require('jquery');
    var conf = require('./../conf/conf');
    var JSON = require("json3");

    var imgurService = {};

    var baseUrl = "https://api.imgur.com/3"
    var clientID = conf().clientID;
    var headerItem = "Client-ID "+clientID;
   
     
     imgurService.getTopics = function()
     {
         return $.ajax({
            type: "GET",
            headers: {"Authorization": headerItem},
            url: baseUrl+"/topics/defaults"
        }).done(function(data){return data;})
         .fail(function (err)
       {
           console.log(JSON.stringify(this.createError(err)));
           return err;

       }.bind(this) ) 
         
     }
      imgurService.get = function(url)
     {
         return $.ajax({
            type: "GET",
            headers: {"Authorization": headerItem},
            url: baseUrl+ url
        }).done(function(data){return data;})
         .fail(function (err)
       {
           console.log(JSON.stringify(this.createError(err)));
           return err;

       }.bind(this) ) 
         
     }

     imgurService.createError = function(e)
     {
         var ee = {};
         ee.responseText = e.responseText;
         ee.status = e.status;
         ee.statuText = e.statusText;
         
         return ee;
         
     }

    

    return imgurService;
};