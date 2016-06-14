//
//    export default class RestaurantService
//    {
//
//    constructor(baseURL)
//    {
//            this.data = {data: 'get a job' };
//            this.rootURL = baseURL;
//            let me = this;
//             
//    }
//
//
//    getAllRestaurants()
//    {
//        return rp(this.rootURL);
//                   
//    }
//
//    getRestaurantById(id)
//    {        
//        return rp(this.rootURL+"/"+id);
//    }
//    
//
// 
// 
//
var $ = require("jquery");
var baseURL = 'http://donhenton-springmvc3.herokuapp.com:80/app/backbone/restaurant';

module.exports =  
{
    
     
    
    getAllRestaurants: function()
    {
        
        var self = this;
        return $.ajax({
            type: 'GET',
            url: baseURL,    
            timeout: 4500,          
            success: function(data) {
                return data;
            },
            error: function (err) {
                console.log('Error: Restaurant Problem');
                console.log(err);
                return err;
            }
        });
        
        
    }
    
    
    
    
    
    
}