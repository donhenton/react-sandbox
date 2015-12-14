var React = require('react');
var jQuery = require('jquery');
var Thumbnail = require('./Thumbnail');

var ThumbnailList = React.createClass({
    render: function()
    {
        var list = this.props.thumbData.map(function(thumb)
        {
            return <Thumbnail {...thumb} />

        });

        return <div>{list}</div>
    }




});

module.exports = ThumbnailList;  
