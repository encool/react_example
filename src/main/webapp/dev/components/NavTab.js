var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var MenuActions = require('../actions/menuactions');

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
//	  console.log("table componentWillMount");
  },
  componentWillUnmount: function(){
//	  console.log("table componentWillUnmount");
  },
  onRemoveClicked: function(data){

	  MenuActions.tabclick(this.props.item);
  },
  componentDidMount: function() {

  },
  render: function() {
    return (
    	<li role="presentation" >
      	<Link to={this.props.item.url} style={{display:'inline'}}>
      	{this.props.item.name} 
      	</Link>	
      	<span onClick={this.onRemoveClicked} className="glyphicon glyphicon-remove" style={{'padding-top':'12px'}} aria-hidden="true"></span>
      	</li>   	
    )
  }
});
module.exports = NavTab;