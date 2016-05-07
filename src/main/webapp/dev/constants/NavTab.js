var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var NavTab = React.createClass({
  propTypes: {
	  url: React.PropTypes.string,
	  onRowSelected: React.PropTypes.func
  },
  getDefaultProps() {
	    return {
	      key: "table",
	    };
  },
  componentWillMount: function(){
	  console.log("table componentWillMount");
  },
  componentWillUnmount: function(){
	  console.log("table componentWillUnmount");
  },
  onRowSelected: function(data){
		console.log("selected",data);
  },
  componentDidMount: function() {

  },
  render: function() {
	  var divStyle = {
			  width: '50px'
			};
    return (
    	<div role="presentation" style={divStyle}>
      	<Link to={this.props.item.url}>
	        {false ?
	          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
	        : <span className="text">X</span>}  
	        {this.props.item.name}
      	</Link>	
      	</div>
    )
  }
});
module.exports = NavTab;