var React = require('react');
var Link = require('react-router').Link
var MenuItem = require('./MenuItem.js')
//TODO
var AccordionMenuBody = React.createClass({
	  propTypes: {

	  },
	  getInitialState() {
	    return {
	      items: this.props.items
	    };
	  },	  
	  render: function() {
	    var itemNodes = this.props.items.map(function (item) {
	        return (
	        		<li role="presentation" style={{width:'100%'}}>
	        			<MenuItem url={item.url}>
	        			</MenuItem>
        			</li>
	        );
	    });
	    return (
	    		<div id={this.props.bodyId} className="accordion-body collapse" style={{height:'0px'}}>
	    			<ul className="accordion-inner nav nav-tabs">
	    			{itemNodes}
	    			</ul>
    			</div>

	    )
	  }
});
module.exports = AccordionMenuBody;