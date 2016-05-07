var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link
var MenuActions = require('../actions/menuactions');


//TODO
var MenuItem = React.createClass({
	  propTypes: {

	  },
	  onclick:function(){
//		  console.log("clicked!");
		  MenuActions.click(this.props.item);
	  },
	  getDefaultProps() {
		  return {
			  url: '/about',
			  item:{url:'/about',name:'关于'}
		  };
	  },
	  render: function() {
	    return (
    		<Link to={this.props.item.url} onClick={this.onclick}>
    		<i  class="fa fa-table fa-fw"></i> {this.props.item.name}
    		</Link>

	    )
	  }
});
module.exports = MenuItem;
