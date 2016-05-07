var React = require('react');
var ReactDOM = require('react-dom');

var Table = React.createClass({
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

  },
  componentWillUnmount: function(){

  },
  onRowSelected: function(data){
		console.log("selected",data);
  },
  componentDidMount: function() {
	  $("#jqGrid").jqGrid({
          url: this.props.url==null?"list/Task/":this.props.url,
          mtype: "GET",
          datatype: "jsonp",
          onSelectRow: this.onRowSelected,
          colModel: [
              { label: 'id', name: 'id', key: true, width: 75 },
              { label: 'taskName', name: 'taskName', width: 150 },
              { label: 'parentTaskId', name: 'parentTaskId', width: 150 },
          ],
			viewrecords: true,
          width: 780,
          height: 250,
          rowNum: 20,
          pager: "#jqGridPager"
      	});
  },
  render: function() {
    return <div id="jqGridWrapper"> <table id="jqGrid"></table><div id="jqGridPager"></div></div>;
  }
});
module.exports = Table;