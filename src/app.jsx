var React = require('react');
var jQuery = require('jquery');
var Badge = require('./components/Badge');
var Thumbnail = require('./components/Thumbnail');
var ThumbnailList = require('./components/ThumbnailList');


var props = 
{

  "thumbData":[

    {
    "title": "Sent ss Items", "count":  12, "header": "Bonzo's Dog Band",
    "description": "Get a job, bozo!",
    "imageUrl": "http://formatjs.io/img/react.svg"
    },
    {
    "title": "Sent ss Items", "count":  12, "header": "Elvis Has Left the Universe",
    "description": "Get a job, bozo!",
    "imageUrl": "http://brunch.io/images/others/gulp.png"
    }
    
    ]
}

var mountPoint = jQuery('#mountPoint')[0];
//document.querySelector('#mountPoint')
var element = React.createElement(ThumbnailList, props);
React.render(element,mountPoint );
